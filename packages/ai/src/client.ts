import OpenAI from 'openai'

let _defaultClient: OpenAI | null = null

export function getOpenAIClient(apiKey?: string): OpenAI {
  if (apiKey) {
    return new OpenAI({ apiKey })
  }
  if (!_defaultClient) {
    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OPENAI_API_KEY is not configured')
    }
    _defaultClient = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
  }
  return _defaultClient
}
