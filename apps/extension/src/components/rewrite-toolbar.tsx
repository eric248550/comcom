import React from 'react'
import type { RewriteMode, PromptTemplate } from '@comcom/types'

interface ModeOption {
  value: RewriteMode
  label: string
}

interface Props {
  modes: ModeOption[]
  onRewrite: (mode: RewriteMode) => void
  isLoading: boolean
  activeMode: RewriteMode | null
  error: string | null
  prompts: PromptTemplate[]
  selectedPromptId: string
  onPromptChange: (id: string) => void
  showPrompts: boolean
  onTogglePrompts: () => void
  onClose: () => void
}

const styles = {
  container: {
    background: '#fff',
    border: '1px solid #e2e8f0',
    borderRadius: '10px',
    padding: '8px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
    minWidth: '300px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: '13px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: '4px',
    borderBottom: '1px solid #f1f5f9',
  },
  title: {
    fontWeight: 600,
    color: '#1e40af',
    fontSize: '13px',
  },
  closeBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#94a3b8',
    fontSize: '16px',
    lineHeight: 1,
    padding: '2px 4px',
  },
  modesRow: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '4px',
  },
  modeBtn: (active: boolean, loading: boolean) => ({
    padding: '5px 10px',
    borderRadius: '6px',
    border: active ? '1px solid #3b82f6' : '1px solid #e2e8f0',
    background: active ? '#eff6ff' : '#f8fafc',
    color: active ? '#1d4ed8' : '#374151',
    cursor: loading ? 'not-allowed' : 'pointer',
    fontSize: '12px',
    fontWeight: 500,
    opacity: loading && !active ? 0.5 : 1,
    transition: 'all 0.15s',
  }),
  promptToggle: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    color: '#6366f1',
    fontSize: '12px',
    textDecoration: 'underline',
    padding: 0,
  },
  select: {
    width: '100%',
    padding: '5px 8px',
    borderRadius: '6px',
    border: '1px solid #e2e8f0',
    fontSize: '12px',
    color: '#374151',
    background: '#fff',
  },
  error: {
    color: '#dc2626',
    fontSize: '12px',
    padding: '4px 6px',
    background: '#fef2f2',
    borderRadius: '4px',
  },
  spinner: {
    display: 'inline-block',
    width: '10px',
    height: '10px',
    border: '2px solid currentColor',
    borderTopColor: 'transparent',
    borderRadius: '50%',
    animation: 'spin 0.6s linear infinite',
    marginRight: '4px',
  },
}

export function RewriteToolbar({
  modes,
  onRewrite,
  isLoading,
  activeMode,
  error,
  prompts,
  selectedPromptId,
  onPromptChange,
  showPrompts,
  onTogglePrompts,
  onClose,
}: Props) {
  return (
    <div style={styles.container}>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

      <div style={styles.header}>
        <span style={styles.title}>✨ AI Writer</span>
        <button style={styles.closeBtn} onMouseDown={(e) => e.preventDefault()} onClick={onClose} title="Close">
          ×
        </button>
      </div>

      <div style={styles.modesRow}>
        {modes.map((m) => (
          <button
            key={m.value}
            style={styles.modeBtn(activeMode === m.value, isLoading)}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => !isLoading && onRewrite(m.value)}
            disabled={isLoading}
          >
            {isLoading && activeMode === m.value ? (
              <>
                <span style={styles.spinner} />
                {m.label}
              </>
            ) : (
              m.label
            )}
          </button>
        ))}
      </div>

      {prompts.length > 0 && (
        <div>
          <button
            style={styles.promptToggle}
            onMouseDown={(e) => e.preventDefault()}
            onClick={onTogglePrompts}
            type="button"
          >
            {showPrompts ? '▲ Hide prompts' : '▼ Use custom prompt'}
          </button>
          {showPrompts && (
            <select
              style={{ ...styles.select, marginTop: '4px' }}
              value={selectedPromptId}
              onChange={(e) => onPromptChange(e.target.value)}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <option value="">— Select a prompt —</option>
              {prompts.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>
          )}
        </div>
      )}

      {error && <div style={styles.error}>{error}</div>}
    </div>
  )
}
