import type { PlasmoCSConfig } from 'plasmo'

export const config: PlasmoCSConfig = {
  matches: ['http://localhost:3000/*'],
  run_at: 'document_idle',
}

// Receives the token posted by auth-sync-main.ts (world: MAIN) and persists
// it to extension storage. Using postMessage instead of a CustomEvent avoids
// inline-script CSP violations — no <script> tag injection needed.
window.addEventListener('message', (e) => {
  if (e.source !== window || e.data?.type !== '__ceauth') return
  const { token, email, name } = e.data as {
    type: string
    token: string
    email: string
    name: string
  }
  try {
    chrome.storage.local.set({ clerk_token: token, user_info: { email, name } })
  } catch {
    // Extension context invalidated (e.g. extension reloaded while tab is open)
  }
})
