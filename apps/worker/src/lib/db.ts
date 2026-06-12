import { createEdgeClient } from '@comcom/db/edge'

// Re-export so the rest of the worker never imports @prisma/client directly.
// All Prisma + Neon adapter wiring lives in packages/db.
export { createEdgeClient as createDb }
export type DbClient = ReturnType<typeof createEdgeClient>
