import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { streamSSE } from 'hono/streaming'
import { RewriteRequestSchema } from '@comcom/types'
import { authMiddleware } from '../middleware/auth'
import { runRewrite, runRewriteStream, RateLimitError } from '../services/rewrite'
import type { AppEnv } from '../types'

const DEFAULT_DAILY_LIMIT = 20

const rewriteRoutes = new Hono<AppEnv>()

rewriteRoutes.use('*', authMiddleware)

rewriteRoutes.post('/', zValidator('json', RewriteRequestSchema), async (c) => {
  const body = c.req.valid('json')
  const userId = c.get('userId')
  const orgId = c.get('orgId')
  const db = c.get('db')

  const dailyLimit = c.env.DAILY_REWRITE_LIMIT
    ? parseInt(c.env.DAILY_REWRITE_LIMIT, 10)
    : DEFAULT_DAILY_LIMIT

  try {
    const result = await runRewrite({
      db,
      apiKey: c.env.OPENAI_API_KEY,
      userId,
      orgId,
      text: body.text,
      mode: body.mode,
      promptTemplateId: body.promptTemplateId,
      variableValues: body.variableValues,
      context: body.context,
      platform: body.platform,
      source: c.req.header('x-source') ?? 'web',
      dailyLimit,
    })

    return c.json(result)
  } catch (err) {
    if (err instanceof RateLimitError) return c.json({ error: err.message }, 429)
    const message = err instanceof Error ? err.message : 'Rewrite failed'
    return c.json({ error: message }, 500)
  }
})

rewriteRoutes.post('/stream', zValidator('json', RewriteRequestSchema), async (c) => {
  const body = c.req.valid('json')
  const userId = c.get('userId')
  const orgId = c.get('orgId')
  const db = c.get('db')

  const dailyLimit = c.env.DAILY_REWRITE_LIMIT
    ? parseInt(c.env.DAILY_REWRITE_LIMIT, 10)
    : DEFAULT_DAILY_LIMIT

  return streamSSE(c, async (stream) => {
    try {
      const { sessionId, tokensUsed } = await runRewriteStream(
        {
          db,
          apiKey: c.env.OPENAI_API_KEY,
          userId,
          orgId,
          text: body.text,
          mode: body.mode,
          promptTemplateId: body.promptTemplateId,
          variableValues: body.variableValues,
          context: body.context,
          platform: body.platform,
          source: c.req.header('x-source') ?? 'web',
          dailyLimit,
        },
        async (chunk) => {
          await stream.writeSSE({ data: JSON.stringify({ chunk }) })
        },
      )

      await stream.writeSSE({ data: JSON.stringify({ done: true, sessionId, tokensUsed }) })
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Stream failed'
      const status = err instanceof RateLimitError ? 429 : 500
      await stream.writeSSE({ data: JSON.stringify({ error: message, status }) })
    }
  })
})

export { rewriteRoutes }
