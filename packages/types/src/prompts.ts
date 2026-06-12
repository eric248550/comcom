import { z } from 'zod'

export const PromptVariableSchema = z.object({
  name: z.string().min(1),
  label: z.string().min(1),
  defaultValue: z.string().optional(),
})

export const PromptTemplateSchema = z.object({
  id: z.string().cuid(),
  title: z.string().min(1).max(100),
  systemPrompt: z.string().min(1).max(4000),
  variables: z.array(PromptVariableSchema).default([]),
  organizationId: z.string().nullable(),
  userId: z.string(),
  isPublic: z.boolean().default(false),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export const CreatePromptTemplateSchema = PromptTemplateSchema.pick({
  title: true,
  systemPrompt: true,
  variables: true,
  isPublic: true,
}).extend({
  organizationId: z.string().optional(),
})

export const UpdatePromptTemplateSchema = CreatePromptTemplateSchema.partial()

export type PromptVariable = z.infer<typeof PromptVariableSchema>
export type PromptTemplate = z.infer<typeof PromptTemplateSchema>
export type CreatePromptTemplateInput = z.infer<typeof CreatePromptTemplateSchema>
export type UpdatePromptTemplateInput = z.infer<typeof UpdatePromptTemplateSchema>
