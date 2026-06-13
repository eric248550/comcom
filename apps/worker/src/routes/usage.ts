import { Hono } from 'hono'
import { authMiddleware } from '../middleware/auth'
import type { AppEnv } from '../types'

const DEFAULT_DAILY_LIMIT = 20

const usageRoutes = new Hono<AppEnv>()
usageRoutes.use('*', authMiddleware)

usageRoutes.get('/', async (c) => {
  const userId = c.get('userId')
  const db = c.get('db')
  const limit = c.env.DAILY_REWRITE_LIMIT
    ? parseInt(c.env.DAILY_REWRITE_LIMIT, 10)
    : DEFAULT_DAILY_LIMIT

  const user = await db.user.findUnique({ where: { clerkId: userId } })
  if (!user) return c.json({ error: 'User not found' }, 404)

  const startOfDay = new Date()
  startOfDay.setHours(0, 0, 0, 0)
  const used = await db.writingSession.count({
    where: { userId: user.id, createdAt: { gte: startOfDay } },
  })

  return c.json({ used, limit })
})

export { usageRoutes }
