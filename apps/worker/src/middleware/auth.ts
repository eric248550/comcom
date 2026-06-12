import { createMiddleware } from 'hono/factory'
import { verifyClerkToken, buildClerkClient } from '../lib/clerk'
import type { AppEnv } from '../types'

export const authMiddleware = createMiddleware<AppEnv>(async (c, next) => {
  const authHeader = c.req.header('Authorization')
  if (!authHeader?.startsWith('Bearer ')) {
    return c.json({ error: 'Unauthorized' }, 401)
  }

  const token = authHeader.slice(7)

  try {
    const { userId, orgId } = await verifyClerkToken(token, c.env.CLERK_SECRET_KEY)
    c.set('userId', userId)
    c.set('orgId', orgId)

    // Ensure the user row exists in DB. On first login it won't, so we
    // fetch details from Clerk and create it. Subsequent requests skip
    // the Clerk API call entirely.
    const db = c.get('db')
    const existing = await db.user.findUnique({ where: { clerkId: userId } })
    if (!existing) {
      const clerk = buildClerkClient(c.env.CLERK_SECRET_KEY)
      const clerkUser = await clerk.users.getUser(userId)
      const email = clerkUser.emailAddresses[0]?.emailAddress ?? ''
      const name =
        [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(' ') || undefined
      await db.user.create({ data: { clerkId: userId, email, name } })
    }

    await next()
  } catch {
    return c.json({ error: 'Invalid or expired token' }, 401)
  }
})
