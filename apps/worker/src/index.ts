import { Hono } from 'hono'
import { corsMiddleware } from './middleware/cors'
import { dbMiddleware } from './middleware/db'
import { rewriteRoutes } from './routes/rewrite'
import { promptRoutes } from './routes/prompts'
import { historyRoutes } from './routes/history'
import { toneRoutes } from './routes/tone'
import type { AppEnv } from './types'

const app = new Hono<AppEnv>()

// Global middleware
app.use('*', corsMiddleware)
app.use('*', dbMiddleware)

// Health check (no auth)
app.get('/health', (c) => c.json({ ok: true, service: 'comcom-api' }))

// API routes
app.route('/api/rewrite', rewriteRoutes)
app.route('/api/prompts', promptRoutes)
app.route('/api/history', historyRoutes)
app.route('/api/tone', toneRoutes)

// 404 catch-all
app.notFound((c) => c.json({ error: 'Not found' }, 404))

// Global error handler
app.onError((err, c) => {
  console.error('[worker error]', err)
  return c.json({ error: 'Internal server error' }, 500)
})

export default app
