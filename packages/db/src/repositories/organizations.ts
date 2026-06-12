import { prisma } from '../client'
import type { Organization } from '../generated/prisma'
import type { UpdateToneSettingsInput } from '@comcom/types'

export async function upsertOrganization(
  clerkOrgId: string,
  name: string,
): Promise<Organization> {
  return prisma.organization.upsert({
    where: { clerkOrgId },
    update: { name },
    create: { clerkOrgId, name },
  })
}

export async function getOrganizationByClerkId(clerkOrgId: string): Promise<Organization | null> {
  return prisma.organization.findUnique({ where: { clerkOrgId } })
}

export async function updateOrganizationTone(
  clerkOrgId: string,
  tone: UpdateToneSettingsInput,
): Promise<Organization> {
  return prisma.organization.update({
    where: { clerkOrgId },
    data: { writingTone: tone },
  })
}
