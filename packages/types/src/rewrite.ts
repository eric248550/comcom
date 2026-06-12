import { z } from 'zod'

export const RewriteModeSchema = z.enum([
  'improve',
  'shorten',
  'expand',
  'formal',
  'casual',
  'custom',
])

export const PlatformSchema = z.enum(['slack', 'gmail', 'web'])

export const RewriteRequestSchema = z.object({
  text: z.string().min(1).max(10000),
  mode: RewriteModeSchema,
  promptTemplateId: z.string().optional(),
  variableValues: z.record(z.string()).optional(),
  context: z.string().max(500).optional(),
  platform: PlatformSchema.optional(),
})

export const RewriteResponseSchema = z.object({
  result: z.string(),
  sessionId: z.string(),
  tokensUsed: z.number().optional(),
})

export type RewriteMode = z.infer<typeof RewriteModeSchema>
export type Platform = z.infer<typeof PlatformSchema>
export type RewriteRequest = z.infer<typeof RewriteRequestSchema>
export type RewriteResponse = z.infer<typeof RewriteResponseSchema>
