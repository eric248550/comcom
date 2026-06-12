import { auth } from '@clerk/nextjs/server'
import { serverGetPrompts } from '@/lib/worker-client'
import { notFound } from 'next/navigation'
import { EditPromptForm } from './edit-form'

export default async function EditPromptPage({ params }: { params: { id: string } }) {
  const { userId } = auth()
  if (!userId) return null

  const prompts = await serverGetPrompts().catch(() => [])
  const prompt = prompts.find((p) => p.id === params.id)
  if (!prompt) notFound()

  return <EditPromptForm prompt={prompt} />
}
