import * as React from 'react'
import { cn } from '../lib/utils'
import { Button } from './button'
import type { RewriteMode } from '@comcom/types'

const MODES: { value: RewriteMode; label: string }[] = [
  { value: 'improve', label: 'Improve' },
  { value: 'shorten', label: 'Shorten' },
  { value: 'expand', label: 'Expand' },
  { value: 'formal', label: 'Formal' },
  { value: 'casual', label: 'Casual' },
  { value: 'custom', label: 'Custom' },
]

interface RewriteToolbarProps {
  onRewrite: (mode: RewriteMode) => void
  isLoading?: boolean
  selectedMode?: RewriteMode
  className?: string
}

export function RewriteToolbar({
  onRewrite,
  isLoading = false,
  selectedMode,
  className,
}: RewriteToolbarProps) {
  return (
    <div className={cn('flex flex-wrap gap-2 p-2 bg-background border rounded-lg shadow-sm', className)}>
      {MODES.map((mode) => (
        <Button
          key={mode.value}
          variant={selectedMode === mode.value ? 'default' : 'outline'}
          size="sm"
          disabled={isLoading}
          onClick={() => onRewrite(mode.value)}
        >
          {isLoading && selectedMode === mode.value ? (
            <span className="flex items-center gap-1">
              <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              {mode.label}
            </span>
          ) : (
            mode.label
          )}
        </Button>
      ))}
    </div>
  )
}
