// Edge-only entry point — safe to bundle in Cloudflare Workers.
// Does NOT re-export the standard prisma singleton (client.ts)
// or the repository helpers (which reference that singleton).
export { createEdgeClient } from './edge-client'
export type { PrismaClient } from './edge-client'
