import type { RewriteRequest, RewriteResponse, PromptTemplate } from '@comcom/types'

// In production this is the Cloudflare Worker URL
const WORKER_URL = process.env.PLASMO_PUBLIC_WORKER_URL ?? 'http://localhost:8787'

// Proxy fetch through the background service worker so it sends
// Origin: chrome-extension://... instead of Origin: https://mail.google.com.
// Content scripts can't call the worker directly due to CORS.
async function workerFetch<T>(path: string, init: RequestInit = {}): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    try {
      chrome.runtime.sendMessage(
        {
          type: 'WORKER_FETCH',
          path,
          method: (init.method as string) ?? 'GET',
          body: init.body as string | undefined,
        },
        (resp) => {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message))
            return
          }
          if (resp?.error) {
            reject(new Error(resp.error))
            return
          }
          resolve(resp.data as T)
        },
      )
    } catch {
      reject(new Error('Extension context invalidated'))
    }
  })
}

export async function rewriteText(req: RewriteRequest): Promise<RewriteResponse> {
  return workerFetch<RewriteResponse>('/api/rewrite', {
    method: 'POST',
    body: JSON.stringify(req),
  })
}

export async function rewriteTextStream(
  req: RewriteRequest,
  onChunk: (chunk: string) => void,
): Promise<{ sessionId: string }> {
  const token: string | null = await new Promise((resolve) => {
    try {
      chrome.runtime.sendMessage({ type: 'GET_AUTH_TOKEN' }, (resp) => {
        resolve(resp?.token ?? null)
      })
    } catch {
      resolve(null)
    }
  })

  const res = await fetch(`${WORKER_URL}/api/rewrite/stream`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-source': 'extension',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify(req),
  })

  if (!res.ok || !res.body) throw new Error('Stream request failed')

  const reader = res.body.getReader()
  const decoder = new TextDecoder()
  let sessionId = ''

  while (true) {
    const { done, value } = await reader.read()
    if (done) break

    const text = decoder.decode(value, { stream: true })
    for (const line of text.split('\n')) {
      if (!line.startsWith('data: ')) continue
      try {
        const payload = JSON.parse(line.slice(6))
        if (payload.chunk) onChunk(payload.chunk)
        if (payload.sessionId) sessionId = payload.sessionId
        if (payload.error) throw new Error(payload.error)
      } catch (e) {
        if (e instanceof SyntaxError) continue
        throw e
      }
    }
  }

  return { sessionId }
}

export async function getPrompts(): Promise<PromptTemplate[]> {
  const data = await workerFetch<{ prompts: PromptTemplate[] }>('/api/prompts')
  return data.prompts
}
