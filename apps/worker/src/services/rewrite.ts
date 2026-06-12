import { rewriteText, rewriteTextStream } from '@comcom/ai'
import type { PrismaClient } from '@prisma/client'
import type { RewriteMode, WritingTone, Platform } from '@comcom/types'

interface RewriteServiceOptions {
  db: PrismaClient
  apiKey: string
  userId: string
  orgId: string | null
  text: string
  mode: RewriteMode
  promptTemplateId?: string
  variableValues?: Record<string, string>
  context?: string
  platform?: Platform
  source?: string
}

export async function runRewrite(opts: RewriteServiceOptions) {
  const { db, apiKey, userId, orgId } = opts

  const user = await db.user.findUnique({ where: { clerkId: userId } })
  if (!user) throw new Error('User not found. Please sign in again.')

  const [template, org] = await Promise.all([
    opts.promptTemplateId
      ? db.promptTemplate.findUnique({ where: { id: opts.promptTemplateId } })
      : null,
    orgId ? db.organization.findUnique({ where: { clerkOrgId: orgId } }) : null,
  ])

  const { result, tokensUsed } = await rewriteText({
    text: opts.text,
    mode: opts.mode,
    systemPrompt: template?.systemPrompt,
    companyTone: org?.writingTone as WritingTone | undefined,
    variableValues: opts.variableValues,
    context: opts.context,
    platform: opts.platform,
    apiKey,
  })

  const session = await db.writingSession.create({
    data: {
      input: opts.text,
      output: result,
      mode: opts.mode,
      userId: user.id,
      promptTemplateId: template?.id ?? null,
      tokensUsed,
      source: opts.source ?? 'web',
    },
  })

  return { result, sessionId: session.id, tokensUsed }
}

export async function runRewriteStream(
  opts: RewriteServiceOptions,
  onChunk: (chunk: string) => void,
): Promise<{ sessionId: string; tokensUsed: number }> {
  const { db, apiKey, userId, orgId } = opts

  const user = await db.user.findUnique({ where: { clerkId: userId } })
  if (!user) throw new Error('User not found.')

  const [template, org] = await Promise.all([
    opts.promptTemplateId
      ? db.promptTemplate.findUnique({ where: { id: opts.promptTemplateId } })
      : null,
    orgId ? db.organization.findUnique({ where: { clerkOrgId: orgId } }) : null,
  ])

  let fullOutput = ''
  const { tokensUsed } = await rewriteTextStream(
    {
      text: opts.text,
      mode: opts.mode,
      systemPrompt: template?.systemPrompt,
      companyTone: org?.writingTone as WritingTone | undefined,
      variableValues: opts.variableValues,
      context: opts.context,
      platform: opts.platform,
      apiKey,
    },
    (chunk) => {
      fullOutput += chunk
      onChunk(chunk)
    },
  )

  const session = await db.writingSession.create({
    data: {
      input: opts.text,
      output: fullOutput,
      mode: opts.mode,
      userId: user.id,
      promptTemplateId: template?.id ?? null,
      tokensUsed,
      source: opts.source ?? 'web',
    },
  })

  return { sessionId: session.id, tokensUsed }
}
