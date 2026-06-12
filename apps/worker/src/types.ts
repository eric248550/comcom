import type { DbClient } from './lib/db'

export type Bindings = {
  DATABASE_URL: string
  CLERK_SECRET_KEY: string
  CLERK_PUBLISHABLE_KEY: string
  OPENAI_API_KEY: string
  ALLOWED_ORIGINS: string
}

export type Variables = {
  userId: string
  orgId: string | null
  db: DbClient
}

export type AppEnv = {
  Bindings: Bindings
  Variables: Variables
}
