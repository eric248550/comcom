import type { PlasmoCSConfig } from 'plasmo'

export const config: PlasmoCSConfig = {
  matches: ['http://localhost:3000/*'],
  run_at: 'document_idle',
  world: 'MAIN',
}

declare const window: Window & {
  Clerk?: {
    session?: { getToken: () => Promise<string | null> }
    user?: {
      primaryEmailAddress?: { emailAddress: string }
      fullName?: string
      firstName?: string
    }
  }
}

async function extractClerkSession() {
  try {
    let attempts = 20
    while (attempts-- > 0) {
      if (window.Clerk?.session) break
      await new Promise((r) => setTimeout(r, 500))
    }
    const c = window.Clerk
    if (!c?.session) return
    const token = await c.session.getToken()
    if (!token) return
    const u = c.user
    window.postMessage(
      {
        type: '__ceauth',
        token,
        email: u?.primaryEmailAddress?.emailAddress ?? '',
        name: u?.fullName ?? u?.firstName ?? '',
      },
      window.location.origin,
    )
  } catch (err) {
    console.debug('[AI Writer] auth-sync error:', err)
  }
}

extractClerkSession()
window.addEventListener('focus', extractClerkSession)
