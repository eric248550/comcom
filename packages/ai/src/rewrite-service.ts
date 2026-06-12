import { getOpenAIClient } from './client'
import { buildSystemPrompt, buildUserMessage } from './prompt-builder'
import type { RewriteMode, WritingTone, Platform } from '@comcom/types'

export interface RewriteOptions {
  text: string
  mode: RewriteMode
  systemPrompt?: string
  companyTone?: WritingTone
  variableValues?: Record<string, string>
  context?: string
  platform?: Platform
  model?: string
  apiKey?: string
}

export interface RewriteResult {
  result: string
  tokensUsed: number
}

export async function rewriteText(options: RewriteOptions): Promise<RewriteResult> {
  const client = getOpenAIClient(options.apiKey)
  const model = options.model ?? 'gpt-4o-mini'

  const systemPrompt = buildSystemPrompt({
    systemPrompt: options.systemPrompt,
    companyTone: options.companyTone,
    userInput: options.text,
    rewriteMode: options.mode,
    variableValues: options.variableValues,
    context: options.context,
    platform: options.platform,
  })

  const userMessage = buildUserMessage(options.text, options.context)

  const response = await client.chat.completions.create({
    model,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userMessage },
    ],
    temperature: 0.7,
    max_tokens: 2000,
  })

  const result = response.choices[0]?.message?.content
  if (!result) throw new Error('No content returned from OpenAI')

  return {
    result,
    tokensUsed: response.usage?.total_tokens ?? 0,
  }
}

export async function rewriteTextStream(
  options: RewriteOptions,
  onChunk: (chunk: string) => void,
): Promise<{ tokensUsed: number }> {
  const client = getOpenAIClient(options.apiKey)
  const model = options.model ?? 'gpt-4o-mini'

  const systemPrompt = buildSystemPrompt({
    systemPrompt: options.systemPrompt,
    companyTone: options.companyTone,
    userInput: options.text,
    rewriteMode: options.mode,
    variableValues: options.variableValues,
    context: options.context,
    platform: options.platform,
  })

  const userMessage = buildUserMessage(options.text, options.context)

  const stream = await client.chat.completions.create({
    model,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userMessage },
    ],
    temperature: 0.7,
    max_tokens: 2000,
    stream: true,
    stream_options: { include_usage: true },
  })

  let tokensUsed = 0

  for await (const chunk of stream) {
    const content = chunk.choices[0]?.delta?.content
    if (content) onChunk(content)
    if (chunk.usage) tokensUsed = chunk.usage.total_tokens
  }

  return { tokensUsed }
}
