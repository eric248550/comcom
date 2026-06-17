export {}

const WORKER_URL = process.env.PLASMO_PUBLIC_WORKER_URL ?? 'http://localhost:8787'
const API_URL = process.env.PLASMO_PUBLIC_API_URL ?? 'http://localhost:3000'

// ── Keepalive ─────────────────────────────────────────────────────────────────
async function ensureKeepaliveAlarm() {
  const existing = await chrome.alarms.get('keepalive')
  if (!existing) {
    chrome.alarms.create('keepalive', { periodInMinutes: 0.33 })
  }
}

ensureKeepaliveAlarm()
chrome.runtime.onInstalled.addListener(ensureKeepaliveAlarm)
chrome.runtime.onStartup.addListener(ensureKeepaliveAlarm)

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'keepalive') {
    // No-op — being invoked keeps the worker alive.
  }
})

// ── Token helpers ─────────────────────────────────────────────────────────────

interface AuthInfo {
  token: string
  email: string
  name: string
}

// Clerk session JWTs expire after 60 s. Ask the open web app tab for a fresh
// token + user info before every API call; fall back to whatever is in storage.
async function syncAuthFromTab(): Promise<AuthInfo | null> {
  try {
    const tabs = await chrome.tabs.query({ url: `${API_URL}/*` })
    for (const tab of tabs) {
      if (!tab.id) continue
      const [result] = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        world: 'MAIN',
        func: async () => {
          const c = (window as any).Clerk
          if (!c?.session) return null
          const token = (await c.session.getToken()) as string | null
          if (!token) return null
          const user = c.user
          return {
            token,
            email: (user?.primaryEmailAddress?.emailAddress ?? '') as string,
            name: (user?.fullName ?? user?.firstName ?? '') as string,
          }
        },
      })
      const info = result?.result as AuthInfo | null
      if (info?.token) {
        chrome.storage.local.set({ clerk_token: info.token, user_info: { email: info.email, name: info.name } })
        return info
      }
    }
  } catch {
    // Tab not open or scripting failed — fall through to stored token
  }
  return null
}

async function getFreshToken(): Promise<string | null> {
  const info = await syncAuthFromTab()
  if (info) return info.token

  const stored = await new Promise<Record<string, string>>((resolve) =>
    chrome.storage.local.get(['clerk_token'], resolve as any),
  )
  return stored.clerk_token ?? null
}

// ── Message handler ───────────────────────────────────────────────────────────

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === 'GET_AUTH_TOKEN') {
    chrome.storage.local.get(['clerk_token'], (result) => {
      sendResponse({ token: result.clerk_token ?? null })
    })
    return true
  }

  if (message.type === 'GET_USER_INFO') {
    chrome.storage.local.get(['user_info'], (result) => {
      sendResponse({ userInfo: result.user_info ?? null })
    })
    return true
  }

  if (message.type === 'SET_AUTH_TOKEN') {
    const data: Record<string, unknown> = { clerk_token: message.token }
    if (message.userInfo) data.user_info = message.userInfo
    chrome.storage.local.set(data, () => {
      sendResponse({ success: true })
    })
    return true
  }

  if (message.type === 'CLEAR_AUTH_TOKEN') {
    chrome.storage.local.remove(['clerk_token', 'user_info'], () => {
      sendResponse({ success: true })
    })
    return true
  }

  // Popup calls this on open to proactively sync auth from an open web app tab.
  if (message.type === 'REFRESH_AUTH') {
    ;(async () => {
      const info = await syncAuthFromTab()
      if (info) {
        sendResponse({ token: info.token, userInfo: { email: info.email, name: info.name } })
      } else {
        const stored = await new Promise<Record<string, any>>((resolve) =>
          chrome.storage.local.get(['clerk_token', 'user_info'], resolve as any),
        )
        sendResponse({ token: stored.clerk_token ?? null, userInfo: stored.user_info ?? null })
      }
    })()
    return true
  }

  // Content scripts cannot call the worker directly (CORS: Origin is mail.google.com).
  // This handler proxies the request from the background, which sends
  // Origin: chrome-extension://... and passes the server's CORS policy.
  if (message.type === 'WORKER_FETCH') {
    ;(async () => {
      const token = await getFreshToken()
      try {
        const headers: Record<string, string> = {
          'Content-Type': 'application/json',
          'x-source': 'extension',
        }
        if (token) headers['Authorization'] = `Bearer ${token}`

        const res = await fetch(`${WORKER_URL}${message.path}`, {
          method: message.method ?? 'GET',
          headers,
          body: message.body ?? undefined,
        })

        if (!res.ok) {
          const err = await res.json().catch(() => ({ error: res.statusText }))
          const errValue = (err as { error?: unknown }).error ?? `HTTP ${res.status}`
          sendResponse({ error: typeof errValue === 'string' ? errValue : JSON.stringify(errValue) })
          return
        }

        const data = await res.json()
        sendResponse({ data })
      } catch (err) {
        sendResponse({ error: err instanceof Error ? err.message : 'Fetch failed' })
      }
    })()
    return true
  }
})
