import { prisma } from '../client'
import type { WritingSession } from '../generated/prisma'
import type { RewriteMode } from '@comcom/types'

interface CreateSessionInput {
  input: string
  output: string
  mode: RewriteMode
  userId: string
  promptTemplateId?: string
  tokensUsed?: number
  source?: string
}

export async function createSession(data: CreateSessionInput): Promise<WritingSession> {
  return prisma.writingSession.create({ data })
}

export async function getSessionsByUser(
  userId: string,
  limit = 50,
  cursor?: string,
): Promise<WritingSession[]> {
  return prisma.writingSession.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
    take: limit,
    ...(cursor ? { cursor: { id: cursor }, skip: 1 } : {}),
  })
}

export async function getSessionById(id: string, userId: string): Promise<WritingSession | null> {
  return prisma.writingSession.findUnique({ where: { id, userId } })
}
