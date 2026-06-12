import type { RewriteMode, WritingTone, Platform } from '@comcom/types'

const MODE_INSTRUCTIONS: Record<RewriteMode, string> = {
  improve: 'Improve the clarity, grammar, and overall quality of the text.',
  shorten: 'Rewrite the text to be more concise while preserving the key message.',
  expand: 'Expand the text with more detail, examples, and supporting points.',
  formal: 'Rewrite the text in a formal, professional tone.',
  casual: 'Rewrite the text in a casual, conversational tone.',
  custom: 'Follow the instructions in the system prompt precisely.',
}

const PLATFORM_FORMAT: Record<Platform, string> = {
  gmail:
    'Return ONLY the rewritten email as a complete message. Structure it as:\n- A greeting line addressing the recipient by name (e.g. "Hi [Name],")\n- The body paragraphs, separated by blank lines\n- A closing line (e.g. "Best regards,")\n- The sender\'s name on its own line\n\nDo not include a subject line. Use the Recipient and Sender names from context if provided. Do not add placeholders like "[Your Name]" — use the actual names.',
  slack:
    'Return ONLY the rewritten message as plain text suitable for a Slack message. Be concise and conversational. Do not add email-style greetings, closings, or signatures. Use plain text; avoid markdown unless the original used it.',
  web: 'Return ONLY the rewritten text. Do not add any commentary or explanation.',
}

interface BuildPromptOptions {
  systemPrompt?: string
  companyTone?: WritingTone
  userInput: string
  rewriteMode: RewriteMode
  variableValues?: Record<string, string>
  context?: string
  platform?: Platform
}

export function buildSystemPrompt(options: BuildPromptOptions): string {
  const { systemPrompt, companyTone, rewriteMode, variableValues, platform } = options

  let resolvedSystemPrompt = systemPrompt ?? ''

  if (variableValues && resolvedSystemPrompt) {
    for (const [key, value] of Object.entries(variableValues)) {
      resolvedSystemPrompt = resolvedSystemPrompt.replace(
        new RegExp(`\\{\\{${key}\\}\\}`, 'g'),
        value,
      )
    }
  }

  const parts: string[] = []

  parts.push('You are an expert writing assistant. Your task is to rewrite the provided text.')

  if (companyTone) {
    parts.push(
      `Company writing style: ${companyTone.voice} voice, ${companyTone.formality} formality.`,
    )
    if (companyTone.additionalInstructions) {
      parts.push(`Additional style guidelines: ${companyTone.additionalInstructions}`)
    }
  }

  const modeInstruction = MODE_INSTRUCTIONS[rewriteMode]
  parts.push(`Rewrite instruction: ${modeInstruction}`)

  if (resolvedSystemPrompt && rewriteMode === 'custom') {
    parts.push(`Custom instructions: ${resolvedSystemPrompt}`)
  } else if (resolvedSystemPrompt) {
    parts.push(`Additional context: ${resolvedSystemPrompt}`)
  }

  parts.push(PLATFORM_FORMAT[platform ?? 'gmail'])

  return parts.join('\n\n')
}

export function buildUserMessage(input: string, context?: string): string {
  if (context) {
    return `Context: ${context}\n\nText to rewrite:\n${input}`
  }
  return input
}
