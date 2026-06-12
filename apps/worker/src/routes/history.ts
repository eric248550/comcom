import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'
import { authMiddleware } from '../middleware/auth'
import type { AppEnv } from '../types'

const historyRoutes = new Hono<AppEnv>()

historyRoutes.use('*', authMiddleware)

const listQuerySchema = z.object({
  limit: z.string().optional().transform((v) => (v ? parseInt(v, 10) : 50)),
  cursor: z.string().optional(),
})

historyRoutes.get('/', zValidator('query', listQuerySchema), async (c) => {
  const db = c.get('db')
  const userId = c.get('userId')
  const { limit, cursor } = c.req.valid('query')

  const user = await db.user.findUnique({ where: { clerkId: userId } })
  if (!user) return c.json({ sessions: [] })

  const sessions = await db.writingSession.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: 'desc' },
    take: limit,
    ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),
    include: {
      promptTemplate: { select: { id: true, title: true } },
    },
  })

  return c.json({ sessions })
})

const createSessionSchema = z.object({
  input: z.string().min(1),
  output: z.string().min(1),
  mode: z.string(),
  promptTemplateId: z.string().optional(),
  tokensUsed: z.number().optional(),
  source: z.string().optional(),
})

historyRoutes.post('/', zValidator('json', createSessionSchema), async (c) => {
  const db = c.get('db')
  const userId = c.get('userId')
  const body = c.req.valid('json')

  const user = await db.user.findUnique({ where: { clerkId: userId } })
  if (!user) return c.json({ error: 'User not found' }, 404)

  const session = await db.writingSession.create({
    data: {
      input: body.input,
      output: body.output,
      mode: body.mode,
      userId: user.id,
      promptTemplateId: body.promptTemplateId ?? null,
      tokensUsed: body.tokensUsed,
      source: body.source ?? 'web',
    },
  })

  return c.json({ session }, 201)
})

export { historyRoutes }
