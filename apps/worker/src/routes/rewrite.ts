import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { streamSSE } from 'hono/streaming'
import { RewriteRequestSchema } from '@comcom/types'
import { authMiddleware } from '../middleware/auth'
import { runRewrite, runRewriteStream } from '../services/rewrite'
import type { AppEnv } from '../types'

const rewriteRoutes = new Hono<AppEnv>()

rewriteRoutes.use('*', authMiddleware)

rewriteRoutes.post('/', zValidator('json', RewriteRequestSchema), async (c) => {
  const body = c.req.valid('json')
  const userId = c.get('userId')
  const orgId = c.get('orgId')
  const db = c.get('db')

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
      source: c.req.header('x-source') ?? 'web',
    })

    return c.json(result)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Rewrite failed'
    return c.json({ error: message }, 500)
  }
})

rewriteRoutes.post('/stream', zValidator('json', RewriteRequestSchema), async (c) => {
  const body = c.req.valid('json')
  const userId = c.get('userId')
  const orgId = c.get('orgId')
  const db = c.get('db')

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
          source: c.req.header('x-source') ?? 'web',
        },
        async (chunk) => {
          await stream.writeSSE({ data: JSON.stringify({ chunk }) })
        },
      )

      await stream.writeSSE({ data: JSON.stringify({ done: true, sessionId, tokensUsed }) })
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Stream failed'
      await stream.writeSSE({ data: JSON.stringify({ error: message }) })
    }
  })
})

export { rewriteRoutes }
