import type { PlasmoCSConfig } from 'plasmo'
import { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react'
import type { RewriteMode, PromptTemplate } from '@comcom/types'
import { rewriteText, getPrompts } from '../lib/api'
import { getSelectedText, replaceSelectedTextInCompose, isInsideSlackCompose, getSlackContext } from '../lib/slack'
import { RewriteToolbar } from '../components/rewrite-toolbar'

export const config: PlasmoCSConfig = {
  matches: ['https://app.slack.com/*'],
  run_at: 'document_idle',
}

const MODES: { value: RewriteMode; label: string }[] = [
  { value: 'improve', label: '✨ Improve' },
  { value: 'shorten', label: '✂️ Shorten' },
  { value: 'expand', label: '📝 Expand' },
  { value: 'formal', label: '👔 Formal' },
  { value: 'casual', label: '😊 Casual' },
]

interface ToolbarPosition {
  top: number
  left: number
  anchorTop: number  // viewport-relative top of selection (for flipping)
  anchorBottom: number  // viewport-relative bottom of selection
}

export default function SlackContentScript() {
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState<ToolbarPosition>({ top: 0, left: 0, anchorTop: 0, anchorBottom: 0 })
  const [selectedText, setSelectedText] = useState('')
  const [loading, setLoading] = useState(false)
  const [activeMode, setActiveMode] = useState<RewriteMode | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [prompts, setPrompts] = useState<PromptTemplate[]>([])
  const [selectedPromptId, setSelectedPromptId] = useState<string>('')
  const [showPrompts, setShowPrompts] = useState(false)
  const toolbarRef = useRef<HTMLDivElement>(null)
  const toolbarMouseDownRef = useRef(false)
  const savedRangeRef = useRef<Range | null>(null)

  useEffect(() => {
    getPrompts()
      .then(setPrompts)
      .catch(() => {})
  }, [])

  const handleSelectionChange = useCallback(() => {
    const text = getSelectedText()

    if (!text || text.length < 5) {
      if (toolbarMouseDownRef.current) {
        toolbarMouseDownRef.current = false
        return
      }
      setVisible(false)
      setSelectedText('')
      return
    }

    const selection = window.getSelection()
    if (!selection || selection.rangeCount === 0) return

    const range = selection.getRangeAt(0)
    const anchorNode = selection.anchorNode
    if (!anchorNode) return

    const element =
      anchorNode.nodeType === Node.TEXT_NODE
        ? anchorNode.parentElement
        : (anchorNode as Element)

    if (!isInsideSlackCompose(element)) {
      setVisible(false)
      return
    }

    const rect = range.getBoundingClientRect()

    savedRangeRef.current = range.cloneRange()
    setSelectedText(text)
    // Use viewport-relative coords (position: fixed). useLayoutEffect will flip if needed.
    setPosition({
      top: rect.bottom + 8,
      left: Math.max(8, rect.left),
      anchorTop: rect.top,
      anchorBottom: rect.bottom,
    })
    setVisible(true)
    setError(null)
  }, [])

  useEffect(() => {
    document.addEventListener('mouseup', handleSelectionChange)
    document.addEventListener('keyup', handleSelectionChange)

    const handleClickOutside = (e: MouseEvent) => {
      if (!toolbarRef.current) return
      const root = toolbarRef.current.getRootNode()
      const shadowHost = root instanceof ShadowRoot ? root.host : null
      const isInsideToolbar = shadowHost
        ? shadowHost.contains(e.target as Node)
        : toolbarRef.current.contains(e.target as Node)
      if (!isInsideToolbar) {
        const selection = window.getSelection()
        if (!selection || selection.toString().length === 0) {
          setVisible(false)
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mouseup', handleSelectionChange)
      document.removeEventListener('keyup', handleSelectionChange)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleSelectionChange])

  // After render, measure actual toolbar height and flip above if it overflows viewport
  useLayoutEffect(() => {
    if (!visible || !toolbarRef.current) return
    const tb = toolbarRef.current.getBoundingClientRect()
    if (tb.bottom > window.innerHeight - 8) {
      setPosition((p) => ({ ...p, top: p.anchorTop - tb.height - 8 }))
    }
  }, [visible, position.anchorBottom])

  const handleRewrite = async (mode: RewriteMode) => {
    if (!selectedText) return

    const savedRange = savedRangeRef.current

    setLoading(true)
    setActiveMode(mode)
    setError(null)

    try {
      const slackContext = getSlackContext()
      const { result } = await rewriteText({
        text: selectedText,
        mode,
        promptTemplateId: selectedPromptId || undefined,
        context: slackContext || undefined,
      })

      const replaced = replaceSelectedTextInCompose(result, savedRange)
      if (!replaced) {
        setError('Could not replace text. Please try again.')
      } else {
        setVisible(false)
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Rewrite failed')
    } finally {
      setLoading(false)
      setActiveMode(null)
    }
  }

  if (!visible) return null

  return (
    <div
      ref={toolbarRef}
      style={{
        position: 'fixed',
        top: position.top,
        left: position.left,
        zIndex: 2147483647,
      }}
      onMouseDown={() => {
        toolbarMouseDownRef.current = true
      }}
      onMouseUp={(e) => e.stopPropagation()}
    >
      <RewriteToolbar
        modes={MODES}
        onRewrite={handleRewrite}
        isLoading={loading}
        activeMode={activeMode}
        error={error}
        prompts={prompts}
        selectedPromptId={selectedPromptId}
        onPromptChange={setSelectedPromptId}
        showPrompts={showPrompts}
        onTogglePrompts={() => setShowPrompts((s) => !s)}
        onClose={() => setVisible(false)}
      />
    </div>
  )
}
