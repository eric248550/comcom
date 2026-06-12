import { auth } from '@clerk/nextjs/server'
import type {
  PromptTemplate,
  WritingSession,
  WritingTone,
  CreatePromptTemplateInput,
  UpdatePromptTemplateInput,
  RewriteRequest,
  RewriteResponse,
} from '@comcom/types'

function getWorkerUrl(): string {
  const url = process.env.WORKER_URL ?? process.env.NEXT_PUBLIC_WORKER_URL
  if (!url) throw new Error('WORKER_URL is not configured')
  return url
}

async function workerFetch<T>(
  path: string,
  init: RequestInit = {},
  options: { public?: boolean } = {},
): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(init.headers as Record<string, string>),
  }

  if (!options.public) {
    const { getToken } = auth()
    const token = await getToken()
    if (token) headers['Authorization'] = `Bearer ${token}`
  }

  const res = await fetch(`${getWorkerUrl()}${path}`, { ...init, headers })

  if (!res.ok) {
    const body = await res.json().catch(() => ({ error: res.statusText }))
    throw new Error((body as { error?: string }).error ?? `Worker ${res.status}`)
  }

  return res.json() as Promise<T>
}

// ── Prompts ──────────────────────────────────────────────────────────────────

export async function serverGetPrompts(): Promise<PromptTemplate[]> {
  const data = await workerFetch<{ prompts: PromptTemplate[] }>('/api/prompts')
  return data.prompts
}

export async function serverCreatePrompt(
  input: CreatePromptTemplateInput,
): Promise<PromptTemplate> {
  const data = await workerFetch<{ prompt: PromptTemplate }>('/api/prompts', {
    method: 'POST',
    body: JSON.stringify(input),
  })
  return data.prompt
}

export async function serverUpdatePrompt(
  id: string,
  input: UpdatePromptTemplateInput,
): Promise<PromptTemplate> {
  const data = await workerFetch<{ prompt: PromptTemplate }>(`/api/prompts/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(input),
  })
  return data.prompt
}

export async function serverDeletePrompt(id: string): Promise<void> {
  await workerFetch(`/api/prompts/${id}`, { method: 'DELETE' })
}

// ── History ───────────────────────────────────────────────────────────────────

export async function serverGetHistory(limit = 50, cursor?: string): Promise<WritingSession[]> {
  const params = new URLSearchParams({ limit: String(limit) })
  if (cursor) params.set('cursor', cursor)
  const data = await workerFetch<{ sessions: WritingSession[] }>(`/api/history?${params}`)
  return data.sessions
}

// ── Tone ──────────────────────────────────────────────────────────────────────

export async function serverGetTone(): Promise<WritingTone | null> {
  const data = await workerFetch<{ tone: WritingTone | null }>('/api/tone')
  return data.tone
}

export async function serverUpdateTone(tone: WritingTone): Promise<WritingTone> {
  const data = await workerFetch<{ tone: WritingTone }>('/api/tone', {
    method: 'PUT',
    body: JSON.stringify(tone),
  })
  return data.tone
}

// ── Rewrite ───────────────────────────────────────────────────────────────────

export async function serverRewrite(req: RewriteRequest): Promise<RewriteResponse> {
  return workerFetch<RewriteResponse>('/api/rewrite', {
    method: 'POST',
    body: JSON.stringify(req),
  })
}
