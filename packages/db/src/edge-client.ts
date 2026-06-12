import { PrismaClient } from './generated/prisma'
import { PrismaNeon } from '@prisma/adapter-neon'
import { Pool } from '@neondatabase/serverless'

export function createEdgeClient(databaseUrl: string): PrismaClient {
  const pool = new Pool({ connectionString: databaseUrl })
  const adapter = new PrismaNeon(pool)
  return new PrismaClient({ adapter })
}

export type { PrismaClient }
