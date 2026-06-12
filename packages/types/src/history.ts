import { z } from 'zod'
import { RewriteModeSchema } from './rewrite'

export const WritingSessionSchema = z.object({
  id: z.string().cuid(),
  input: z.string(),
  output: z.string(),
  mode: RewriteModeSchema,
  promptTemplateId: z.string().nullable(),
  userId: z.string(),
  tokensUsed: z.number().nullable().optional(),
  source: z.string().default('web'),
  createdAt: z.coerce.date(),
})

export type WritingSession = z.infer<typeof WritingSessionSchema>
