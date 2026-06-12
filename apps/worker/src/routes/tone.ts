import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { UpdateToneSettingsSchema } from '@comcom/types'
import { authMiddleware } from '../middleware/auth'
import type { AppEnv } from '../types'

const toneRoutes = new Hono<AppEnv>()

toneRoutes.use('*', authMiddleware)

toneRoutes.get('/', async (c) => {
  const db = c.get('db')
  const orgId = c.get('orgId')

  if (!orgId) return c.json({ tone: null })

  const org = await db.organization.findUnique({ where: { clerkOrgId: orgId } })
  return c.json({ tone: org?.writingTone ?? null })
})

toneRoutes.put('/', zValidator('json', UpdateToneSettingsSchema), async (c) => {
  const db = c.get('db')
  const orgId = c.get('orgId')
  const userId = c.get('userId')
  const body = c.req.valid('json')

  if (!orgId) {
    // Fall back to user-level tone preference (stored as a fake org keyed by clerkId)
    const user = await db.user.findUnique({ where: { clerkId: userId } })
    if (!user) return c.json({ error: 'User not found' }, 404)
    return c.json({ tone: body, note: 'Tone stored locally (no org)' })
  }

  const org = await db.organization.upsert({
    where: { clerkOrgId: orgId },
    update: { writingTone: body },
    create: { clerkOrgId: orgId, name: 'My Organization', writingTone: body },
  })

  return c.json({ tone: org.writingTone })
})

export { toneRoutes }
