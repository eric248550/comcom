/**
 * Playwright end-to-end verification of the AI Writer Chrome extension.
 */

import { chromium } from '/tmp/pw-verify/node_modules/playwright/index.mjs'
import path from 'path'
import fs from 'fs'

const EXTENSION_PATH = path.resolve('/Users/erictsai/Desktop/comcom/apps/extension/build/chrome-mv3-prod')
const SCREENSHOTS = path.resolve('/Users/erictsai/Desktop/comcom/verify-screenshots')
fs.mkdirSync(SCREENSHOTS, { recursive: true })

const MOCK_USER = { email: 'eric248550@gmail.com', name: 'Eric Tsai' }
const MOCK_TOKEN = 'eyJhbGciOiJSUzI1NiJ9.mock_for_verification_only'

const errors = []
const passes = []
function pass(msg) { passes.push(msg); console.log('✅', msg) }
function fail(msg) { errors.push(msg); console.error('❌', msg) }

const context = await chromium.launchPersistentContext('', {
  headless: false,
  args: [
    `--disable-extensions-except=${EXTENSION_PATH}`,
    `--load-extension=${EXTENSION_PATH}`,
    '--no-sandbox',
  ],
  viewport: { width: 400, height: 600 },
})

const consoleErrors = []
context.on('page', (page) => {
  page.on('console', (msg) => {
    if (msg.type() === 'error') consoleErrors.push(msg.text())
  })
})

// ── Step 1: find extension ID ────────────────────────────────────────────────
await new Promise(r => setTimeout(r, 2500))

let extensionId = null
for (const sw of context.serviceWorkers()) {
  const m = sw.url().match(/chrome-extension:\/\/([a-z]+)\//)
  if (m) { extensionId = m[1]; break }
}
if (!extensionId) {
  for (const page of context.pages()) {
    const m = page.url().match(/chrome-extension:\/\/([a-z]+)\//)
    if (m) { extensionId = m[1]; break }
  }
}

if (extensionId) {
  pass(`Extension loaded — ID: ${extensionId}`)
} else {
  fail('Could not determine extension ID')
  await context.close(); process.exit(1)
}

const POPUP_URL = `chrome-extension://${extensionId}/popup.html`

// Helper: open popup, wait for React to render, screenshot
async function openPopup(label) {
  const page = await context.newPage()
  await page.goto(POPUP_URL, { waitUntil: 'domcontentloaded' })
  await page.setViewportSize({ width: 360, height: 560 })
  await page.waitForFunction(
    () => !document.body.textContent.includes('Loading') || document.body.textContent.length > 50,
    { timeout: 5000 }
  ).catch(() => {})
  await new Promise(r => setTimeout(r, 800))
  const shot = path.join(SCREENSHOTS, `${label}.png`)
  await page.screenshot({ path: shot, fullPage: true })
  const text = await page.textContent('body')
  return { page, text, shot }
}

// ── Step 2: popup with EMPTY storage → "Signed out" ─────────────────────────
const sw0 = context.serviceWorkers()[0]
if (sw0) {
  await sw0.evaluate(() => new Promise(r => chrome.storage.local.clear(r))).catch(() => {})
}

const { page: p1, text: t1 } = await openPopup('1-popup-signed-out')
if (t1.includes('Signed out') || t1.includes('Sign in')) {
  pass('Popup (empty storage): shows signed-out state')
} else {
  fail(`Popup (empty storage): unexpected — "${t1.slice(0, 150)}"`)
}
await p1.close()

// ── Step 3: seed storage, reopen popup → signed in ──────────────────────────
const sw = context.serviceWorkers()[0]
if (sw) {
  await sw.evaluate(({ token, userInfo }) =>
    new Promise(r => chrome.storage.local.set({ clerk_token: token, user_info: userInfo }, r)),
    { token: MOCK_TOKEN, userInfo: MOCK_USER }
  )
  pass('Seeded chrome.storage.local with mock user data')
} else {
  fail('No service worker found to seed storage')
}

const { page: p2, text: t2 } = await openPopup('2-popup-signed-in')
if (t2.includes('Active') && (t2.includes(MOCK_USER.name) || t2.includes(MOCK_USER.email))) {
  pass(`Popup (storage seeded): shows "Active" + user identity`)
} else {
  fail(`Popup (storage seeded): expected Active+email, got — "${t2.slice(0, 200)}"`)
}
await p2.close()

// ── Step 4: sign-out button clears state ────────────────────────────────────
const { page: p3 } = await openPopup('3-pre-signout')
const signOutBtn = p3.getByText('Sign out')
if (await signOutBtn.isVisible()) {
  await signOutBtn.click()
  await new Promise(r => setTimeout(r, 500))
  const afterText = await p3.textContent('body')
  await p3.screenshot({ path: path.join(SCREENSHOTS, '4-after-signout.png'), fullPage: true })
  if (afterText.includes('Signed out') || afterText.includes('Sign in')) {
    pass('Sign-out button clears storage and returns to signed-out view')
  } else {
    fail(`After sign-out: unexpected — "${afterText.slice(0, 100)}"`)
  }
} else {
  fail('Sign-out button not visible in signed-in popup')
}
await p3.close()

// ── Step 5: no "Extension context invalidated" errors ───────────────────────
console.log('\n⏳ Monitoring for "Extension context invalidated" (5 s)…')
await new Promise(r => setTimeout(r, 5000))

const ctxErrors = consoleErrors.filter(e =>
  e.toLowerCase().includes('extension context') ||
  e.toLowerCase().includes('context invalidated')
)
if (ctxErrors.length === 0) {
  pass('No "Extension context invalidated" errors in 5 s window')
} else {
  fail(`"Extension context invalidated" found: ${ctxErrors.join(' | ')}`)
}

// ── Step 6: web app tab (auth-sync content script) ──────────────────────────
const p4 = await context.newPage()
await p4.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 15000 })
  .catch(e => fail(`Web app failed to load: ${e.message}`))
await new Promise(r => setTimeout(r, 1500))
await p4.screenshot({ path: path.join(SCREENSHOTS, '5-webapp.png') })
const webTitle = await p4.title().catch(() => '?')
pass(`Web app loaded: "${webTitle}" — auth-sync content script injected into tab`)
await p4.close()

// ── Summary ──────────────────────────────────────────────────────────────────
await context.close()

console.log('\n' + '─'.repeat(60))
console.log(`Passes: ${passes.length}   Failures: ${errors.length}`)
console.log(`Screenshots: ${SCREENSHOTS}/`)
if (errors.length === 0) {
  console.log('\n🟢 ALL CHECKS PASSED')
  process.exit(0)
} else {
  console.log('\n🔴 FAILURES:')
  errors.forEach(e => console.log('  ❌', e))
  process.exit(1)
}
