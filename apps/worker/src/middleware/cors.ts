import { createMiddleware } from 'hono/factory'
import type { AppEnv } from '../types'

export const corsMiddleware = createMiddleware<AppEnv>(async (c, next) => {
  const origin = c.req.header('Origin') ?? ''
  const allowed = (c.env.ALLOWED_ORIGINS ?? '').split(',').map((o) => o.trim())

  const isAllowed =
    allowed.includes('*') ||
    allowed.includes(origin) ||
    origin.startsWith('chrome-extension://')

  if (c.req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders(isAllowed ? origin : allowed[0] ?? '*'),
    })
  }

  await next()

  if (isAllowed) {
    Object.entries(corsHeaders(origin)).forEach(([k, v]) => c.res.headers.set(k, v))
  }
})

function corsHeaders(origin: string): Record<string, string> {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-source',
    'Access-Control-Max-Age': '86400',
  }
}
