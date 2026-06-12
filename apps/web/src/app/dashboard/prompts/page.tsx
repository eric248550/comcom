import { auth } from '@clerk/nextjs/server'
import { serverGetPrompts } from '@/lib/worker-client'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { PromptCard } from '@/components/prompt-card'

export default async function PromptsPage() {
  const { userId } = auth()
  if (!userId) return null

  const prompts = await serverGetPrompts().catch(() => [])

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Prompt Templates</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your reusable AI writing prompts</p>
        </div>
        <Link
          href="/dashboard/prompts/new"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          New Prompt
        </Link>
      </div>

      {prompts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border">
          <div className="text-4xl mb-3">✍️</div>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">No prompts yet</h2>
          <p className="text-sm text-gray-500 mb-6">
            Create your first prompt template to start rewriting with AI.
          </p>
          <Link
            href="/dashboard/prompts/new"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Create Prompt
          </Link>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {prompts.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      )}
    </div>
  )
}
