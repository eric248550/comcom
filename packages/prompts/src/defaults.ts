import type { CreatePromptTemplateInput } from '@comcom/types'

export const DEFAULT_PROMPTS: Omit<CreatePromptTemplateInput, 'organizationId'>[] = [
  {
    title: 'Professional Email',
    systemPrompt:
      'Rewrite this email to be professional, clear, and action-oriented. Ensure the subject is clear, the ask is explicit, and the tone is polite but direct.',
    variables: [],
    isPublic: true,
  },
  {
    title: 'Executive Summary',
    systemPrompt:
      'Rewrite this content as a concise executive summary. Use bullet points for key takeaways. Keep it under 150 words.',
    variables: [],
    isPublic: true,
  },
  {
    title: 'Customer Support Reply',
    systemPrompt:
      'Rewrite this reply as a warm, empathetic, and solution-focused customer support message. Acknowledge the issue, apologize if needed, and provide clear next steps.',
    variables: [],
    isPublic: true,
  },
  {
    title: 'LinkedIn Post',
    systemPrompt:
      'Rewrite this content as an engaging LinkedIn post. Start with a hook, share a key insight, and end with a question or call to action. Keep it under 300 words.',
    variables: [],
    isPublic: true,
  },
  {
    title: 'Custom Template',
    systemPrompt:
      'You are a writing assistant. The user wants to: {{goal}}. The target audience is: {{audience}}. Rewrite the text accordingly.',
    variables: [
      { name: 'goal', label: 'Writing Goal', defaultValue: 'improve clarity' },
      { name: 'audience', label: 'Target Audience', defaultValue: 'general readers' },
    ],
    isPublic: true,
  },
]
