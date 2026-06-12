import { prisma } from '../client'
import type { User } from '../generated/prisma'

export async function upsertUser(clerkId: string, email: string, name?: string): Promise<User> {
  return prisma.user.upsert({
    where: { clerkId },
    update: { email, name },
    create: { clerkId, email, name },
  })
}

export async function getUserByClerkId(clerkId: string): Promise<User | null> {
  return prisma.user.findUnique({ where: { clerkId } })
}

export async function getUserById(id: string): Promise<User | null> {
  return prisma.user.findUnique({ where: { id } })
}
