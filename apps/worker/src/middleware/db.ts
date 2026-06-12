import { createMiddleware } from 'hono/factory'
import { createDb } from '../lib/db'
import type { AppEnv } from '../types'

export const dbMiddleware = createMiddleware<AppEnv>(async (c, next) => {
  const db = createDb(c.env.DATABASE_URL)
  c.set('db', db)
  await next()
})
