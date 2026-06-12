import type { PlasmoCSConfig } from 'plasmo'
import { useState, useEffect, useRef, useCallback } from 'react'
import type { RewriteMode, PromptTemplate } from '@comcom/types'
import { rewriteText, getPrompts } from '../lib/api'
import { getSelectedText, replaceSelectedTextInCompose, isInsideGmailCompose, getEmailContext } from '../lib/gmail'
import { RewriteToolbar } from '../components/rewrite-toolbar'

export const config: PlasmoCSConfig = {
  matches: ['https://mail.google.com/*'],
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
}

export default function GmailContentScript() {
  const [visible, setVisible] = useState(false)
  const [position, setPosition] = useState<ToolbarPosition>({ top: 0, left: 0 })
  const [selectedText, setSelectedText] = useState('')
  const [loading, setLoading] = useState(false)
  const [activeMode, setActiveMode] = useState<RewriteMode | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [prompts, setPrompts] = useState<PromptTemplate[]>([])
  const [selectedPromptId, setSelectedPromptId] = useState<string>('')
  const [showPrompts, setShowPrompts] = useState(false)
  const toolbarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    getPrompts()
      .then(setPrompts)
      .catch(() => {})
  }, [])

  const handleSelectionChange = useCallback(() => {
    const text = getSelectedText()

    if (!text || text.length < 5) {
      setVisible(false)
      setSelectedText('')
      return
    }

    const selection = window.getSelection()
    if (!selection || selection.rangeCount === 0) return

    const range = selection.getRangeAt(0)
    const anchorNode = selection.anchorNode
    if (!anchorNode) return

    const element = anchorNode.nodeType === Node.TEXT_NODE
      ? anchorNode.parentElement
      : anchorNode as Element

    if (!isInsideGmailCompose(element)) {
      setVisible(false)
      return
    }

    const rect = range.getBoundingClientRect()
    const scrollX = window.scrollX
    const scrollY = window.scrollY

    setSelectedText(text)
    setPosition({
      top: rect.bottom + scrollY + 8,
      left: Math.max(8, rect.left + scrollX),
    })
    setVisible(true)
    setError(null)
  }, [])

  useEffect(() => {
    document.addEventListener('mouseup', handleSelectionChange)
    document.addEventListener('keyup', handleSelectionChange)

    const handleClickOutside = (e: MouseEvent) => {
      if (toolbarRef.current && !toolbarRef.current.contains(e.target as Node)) {
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

  const handleRewrite = async (mode: RewriteMode) => {
    if (!selectedText) return

    // Save the range now (synchronously) — it will be gone after the async API call
    const sel = window.getSelection()
    const savedRange = sel && sel.rangeCount > 0 ? sel.getRangeAt(0).cloneRange() : null

    setLoading(true)
    setActiveMode(mode)
    setError(null)

    try {
      const emailContext = getEmailContext()
      const { result } = await rewriteText({
        text: selectedText,
        mode,
        promptTemplateId: selectedPromptId || undefined,
        context: emailContext || undefined,
      })

      const replaced = replaceSelectedTextInCompose(result, savedRange)
      console.log('replaced', replaced, result)
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
        position: 'absolute',
        top: position.top,
        left: position.left,
        zIndex: 2147483647,
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
