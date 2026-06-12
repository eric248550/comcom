import * as React from 'react'
import { cn } from '../lib/utils'
import { Button } from './button'

interface PromptEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  variables?: string[]
  className?: string
  minHeight?: number
}

export function PromptEditor({
  value,
  onChange,
  placeholder = 'Write your system prompt here... Use {{variable}} for dynamic values.',
  variables = [],
  className,
  minHeight = 200,
}: PromptEditorProps) {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)

  const insertVariable = (varName: string) => {
    const textarea = textareaRef.current
    if (!textarea) return
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const newValue = value.slice(0, start) + `{{${varName}}}` + value.slice(end)
    onChange(newValue)
    setTimeout(() => {
      textarea.selectionStart = start + varName.length + 4
      textarea.selectionEnd = start + varName.length + 4
      textarea.focus()
    }, 0)
  }

  const detectedVariables = [...value.matchAll(/\{\{([^}]+)\}\}/g)].map((m) => m[1])
  const uniqueVars = [...new Set([...variables, ...detectedVariables])]

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={cn(
          'w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono resize-y',
        )}
        style={{ minHeight }}
      />
      {uniqueVars.length > 0 && (
        <div className="flex flex-wrap gap-1">
          <span className="text-xs text-muted-foreground self-center">Insert variable:</span>
          {uniqueVars.map((v) => (
            <Button
              key={v}
              variant="outline"
              size="sm"
              className="h-6 px-2 text-xs font-mono"
              onClick={() => insertVariable(v)}
              type="button"
            >
              {`{{${v}}}`}
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}
