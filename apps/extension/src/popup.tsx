import { useEffect, useState } from 'react'

const API_URL = process.env.PLASMO_PUBLIC_API_URL ?? 'http://localhost:3000'
const WORKER_URL = process.env.PLASMO_PUBLIC_WORKER_URL ?? 'http://localhost:8787'

interface UserInfo { email: string; name: string }
interface Usage { used: number; limit: number }

export default function Popup() {
  const [loading, setLoading] = useState(true)
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
  const [promptCount, setPromptCount] = useState<number | null>(null)
  const [usage, setUsage] = useState<Usage | null>(null)

  useEffect(() => {
    // Ask background to sync auth from an open web app tab (production fix),
    // then fall back to whatever is already in storage.
    chrome.runtime.sendMessage({ type: 'REFRESH_AUTH' }, async (resp) => {
      const clerk_token: string | null = resp?.token ?? null
      const user_info: { email: string; name: string } | null = resp?.userInfo ?? null

      if (user_info?.email) setUserInfo(user_info)
      setLoading(false)

      if (clerk_token) {
        const headers = { Authorization: `Bearer ${clerk_token}` }
        try {
          const res = await fetch(`${API_URL}/api/prompts`, { headers })
          if (res.ok) {
            const data = await res.json()
            setPromptCount(data.prompts?.length ?? 0)
          }
        } catch {}
        try {
          const res = await fetch(`${WORKER_URL}/api/usage`, { headers })
          if (res.ok) setUsage(await res.json())
        } catch {}
      }
    })

    // Live-update: if auth-sync writes the token while this popup is open,
    // update the UI immediately without requiring a popup reopen.
    const handleStorageChange = (changes: Record<string, chrome.storage.StorageChange>) => {
      if (changes.user_info?.newValue) {
        setUserInfo(changes.user_info.newValue)
        setLoading(false)
      }
      if (changes.clerk_token?.newValue) {
        const token = changes.clerk_token.newValue as string
        const headers = { Authorization: `Bearer ${token}` }
        fetch(`${API_URL}/api/prompts`, { headers })
          .then((r) => r.ok ? r.json() : null)
          .then((data) => { if (data) setPromptCount(data.prompts?.length ?? 0) })
          .catch(() => {})
        fetch(`${WORKER_URL}/api/usage`, { headers })
          .then((r) => r.ok ? r.json() : null)
          .then((data) => { if (data) setUsage(data) })
          .catch(() => {})
      }
      if (changes.clerk_token?.newValue === undefined && changes.clerk_token?.oldValue) {
        setUserInfo(null)
        setPromptCount(null)
        setUsage(null)
      }
    }
    chrome.storage.onChanged.addListener(handleStorageChange)
    return () => chrome.storage.onChanged.removeListener(handleStorageChange)
  }, [])

  const openWebApp = (path = '') => chrome.tabs.create({ url: `${API_URL}${path}` })

  const handleSignOut = () => {
    chrome.storage.local.remove(['clerk_token', 'user_info'], () => {
      setUserInfo(null)
      setPromptCount(null)
    })
  }

  if (loading) {
    return (
      <div style={{ ...s.container, display: 'flex', alignItems: 'center', justifyContent: 'center', height: '120px' }}>
        <style>{`@keyframes _sp { to { transform: rotate(360deg) } }`}</style>
        <div style={s.spinner} />
      </div>
    )
  }

  if (!userInfo) {
    return (
      <div style={s.container}>
        <div style={s.header}>
          <div style={s.logoWrap}>
            <span style={s.logoIcon}>✍️</span>
            <span style={s.logoText}>ComCom</span>
          </div>
          <div style={{ ...s.statusPill, background: '#fef2f2' }}>
            <div style={{ ...s.statusDot, background: '#ef4444' }} />
            <span style={{ ...s.statusLabel, color: '#ef4444' }}>Signed out</span>
          </div>
        </div>

        <div style={s.heroCard}>
          <p style={s.heroTitle}>Rewrite anything with AI</p>
          <p style={s.heroDesc}>
            Sign in to use AI-powered rewriting directly inside Gmail.
          </p>
        </div>

        <button style={s.btnPrimary} onClick={() => openWebApp('/sign-in')}>
          Sign in to get started →
        </button>

        <p style={{ ...s.tip, marginTop: '10px' }}>
          After signing in, open the extension popup again and it will sync automatically.
        </p>
      </div>
    )
  }

  const name = userInfo.name || userInfo.email
  const initials = name
    .split(' ')
    .map((p) => p[0])
    .join('')
    .slice(0, 2)
    .toUpperCase() || '?'

  return (
    <div style={s.container}>
      {/* Header */}
      <div style={s.header}>
        <div style={s.logoWrap}>
          <span style={s.logoIcon}>✍️</span>
          <span style={s.logoText}>ComCom</span>
        </div>
        <div style={s.statusPill}>
          <div style={s.statusDot} />
          <span style={s.statusLabel}>Active</span>
        </div>
      </div>

      {/* User card */}
      <div style={s.userCard}>
        <div style={s.avatar}>{initials}</div>
        <div style={s.userInfo}>
          <p style={s.userName}>{name}</p>
          <p style={s.userEmail}>{userInfo.email}</p>
        </div>
      </div>

      {/* Stats */}
      {(promptCount !== null || usage !== null) && (
        <div style={s.statRow}>
          {promptCount !== null && (
            <div style={s.stat}>
              <span style={s.statValue}>{promptCount}</span>
              <span style={s.statLabel}>Prompt Templates</span>
            </div>
          )}
          {usage !== null && (
            <div style={{ ...s.stat, ...usageStatStyle(usage.used, usage.limit) }}>
              <span style={s.statValue}>{usage.used} / {usage.limit}</span>
              <span style={s.statLabel}>Rewrites today</span>
            </div>
          )}
        </div>
      )}

      {/* Actions */}
      <div style={s.actions}>
        <button style={s.btnPrimary} onClick={() => openWebApp('/dashboard')}>
          Open Dashboard
        </button>
        <button style={s.btnSecondary} onClick={() => openWebApp('/dashboard/prompts/new')}>
          + New Prompt
        </button>
      </div>

      <p style={s.tip}>
        Select text in a Gmail compose window to see the ComCom toolbar.
      </p>

      <div style={s.footer}>
        <button style={s.signOutBtn} onClick={handleSignOut}>
          Sign out
        </button>
      </div>
    </div>
  )
}

function usageStatStyle(used: number, limit: number): React.CSSProperties {
  const ratio = used / limit
  if (ratio >= 1) return { background: '#fef2f2' }
  if (ratio >= 0.75) return { background: '#fff7ed' }
  return {}
}

// ── Styles ────────────────────────────────────────────────────────────────────

const s: Record<string, React.CSSProperties> = {
  container: {
    width: '320px',
    padding: '16px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    fontSize: '14px',
    color: '#1e293b',
    boxSizing: 'border-box',
  },
  spinner: {
    width: '24px',
    height: '24px',
    border: '3px solid #e2e8f0',
    borderTopColor: '#2563eb',
    borderRadius: '50%',
    animation: '_sp 0.7s linear infinite',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '14px',
  },
  logoWrap: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  logoIcon: { fontSize: '18px' },
  logoText: { fontSize: '16px', fontWeight: 700, color: '#1d4ed8' },
  statusPill: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    background: '#f0fdf4',
    borderRadius: '99px',
    padding: '3px 10px',
  },
  statusDot: {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    background: '#22c55e',
  },
  statusLabel: { fontSize: '11px', fontWeight: 600, color: '#16a34a' },
  userCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px',
    background: '#f8fafc',
    borderRadius: '10px',
    marginBottom: '12px',
    border: '1px solid #e2e8f0',
  },
  avatar: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px',
    fontWeight: 700,
    flexShrink: 0,
  },
  userInfo: { overflow: 'hidden' },
  userName: {
    margin: 0,
    fontWeight: 600,
    fontSize: '14px',
    color: '#0f172a',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  userEmail: {
    margin: 0,
    fontSize: '12px',
    color: '#64748b',
    marginTop: '2px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  statRow: { display: 'flex', gap: '8px', marginBottom: '12px' },
  stat: {
    flex: 1,
    padding: '10px 12px',
    background: '#eff6ff',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  statValue: { fontSize: '20px', fontWeight: 700, color: '#1d4ed8', lineHeight: 1 },
  statLabel: { fontSize: '11px', color: '#3b82f6', fontWeight: 500 },
  actions: { display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '12px' },
  btnPrimary: {
    width: '100%',
    padding: '10px',
    background: '#2563eb',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
  },
  btnSecondary: {
    width: '100%',
    padding: '10px',
    background: '#fff',
    color: '#1d4ed8',
    border: '1.5px solid #bfdbfe',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
  },
  heroCard: {
    padding: '14px',
    background: 'linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%)',
    borderRadius: '10px',
    marginBottom: '14px',
    border: '1px solid #dbeafe',
  },
  heroTitle: { margin: 0, fontSize: '15px', fontWeight: 700, color: '#1e293b', marginBottom: '6px' },
  heroDesc: { margin: 0, fontSize: '13px', color: '#475569', lineHeight: 1.5 },
  tip: { fontSize: '12px', color: '#94a3b8', margin: '0 0 12px', lineHeight: 1.5 },
  footer: {
    borderTop: '1px solid #f1f5f9',
    paddingTop: '10px',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  signOutBtn: {
    background: 'none',
    border: 'none',
    fontSize: '12px',
    color: '#94a3b8',
    cursor: 'pointer',
    padding: '2px 4px',
  },
}
