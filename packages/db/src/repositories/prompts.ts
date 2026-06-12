import { prisma } from '../client'
import type { PromptTemplate } from '../generated/prisma'
import type { CreatePromptTemplateInput, UpdatePromptTemplateInput } from '@comcom/types'

export async function getPromptsByUser(userId: string): Promise<PromptTemplate[]> {
  return prisma.promptTemplate.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  })
}

export async function getPromptsByOrg(organizationId: string): Promise<PromptTemplate[]> {
  return prisma.promptTemplate.findMany({
    where: { organizationId },
    orderBy: { createdAt: 'desc' },
  })
}

export async function getPromptById(id: string): Promise<PromptTemplate | null> {
  return prisma.promptTemplate.findUnique({ where: { id } })
}

export async function createPrompt(
  userId: string,
  data: CreatePromptTemplateInput,
): Promise<PromptTemplate> {
  return prisma.promptTemplate.create({
    data: {
      ...data,
      userId,
      variables: data.variables ?? [],
    },
  })
}

export async function updatePrompt(
  id: string,
  userId: string,
  data: UpdatePromptTemplateInput,
): Promise<PromptTemplate> {
  return prisma.promptTemplate.update({
    where: { id, userId },
    data,
  })
}

export async function deletePrompt(id: string, userId: string): Promise<void> {
  await prisma.promptTemplate.delete({ where: { id, userId } })
}
