import { z } from 'zod'

export const WritingToneSchema = z.object({
  voice: z.enum(['professional', 'friendly', 'casual', 'authoritative', 'empathetic']).default('professional'),
  formality: z.enum(['formal', 'semi-formal', 'informal']).default('semi-formal'),
  additionalInstructions: z.string().max(1000).optional(),
})

export const OrganizationSettingsSchema = z.object({
  id: z.string().cuid(),
  clerkOrgId: z.string(),
  name: z.string(),
  writingTone: WritingToneSchema,
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const UpdateToneSettingsSchema = WritingToneSchema

export type WritingTone = z.infer<typeof WritingToneSchema>
export type OrganizationSettings = z.infer<typeof OrganizationSettingsSchema>
export type UpdateToneSettingsInput = z.infer<typeof UpdateToneSettingsSchema>
