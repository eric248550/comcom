'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@clerk/nextjs'
import type { PromptTemplate } from '@comcom/types'
import Link from 'next/link'
import { Trash2, Copy, Pencil } from 'lucide-react'

interface Props {
  prompt: PromptTemplate
}

export function PromptCard({ prompt }: Props) {
  const router = useRouter()
  const { getToken } = useAuth()
  const [deleting, setDeleting] = useState(false)

  const workerUrl = process.env.NEXT_PUBLIC_WORKER_URL ?? 'http://localhost:8787'

  const handleDelete = async () => {
    if (!confirm(`Delete "${prompt.title}"?`)) return
    setDeleting(true)
    try {
      const token = await getToken()
      await fetch(`${workerUrl}/api/prompts/${prompt.id}`, {
        method: 'DELETE',
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      })
      router.refresh()
    } finally {
      setDeleting(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt.systemPrompt)
  }

  return (
    <div className="bg-white rounded-xl border p-5 hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="font-semibold text-gray-900 text-sm leading-snug">{prompt.title}</h3>
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={handleCopy}
            className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
            title="Copy prompt"
          >
            <Copy className="h-3.5 w-3.5" />
          </button>
          <Link
            href={`/dashboard/prompts/${prompt.id}/edit`}
            className="p-1 text-gray-400 hover:text-blue-500 transition-colors"
            title="Edit"
          >
            <Pencil className="h-3.5 w-3.5" />
          </Link>
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="p-1 text-gray-400 hover:text-red-500 transition-colors disabled:opacity-50"
            title="Delete"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
      <p className="text-xs text-gray-500 line-clamp-3 font-mono leading-relaxed">
        {prompt.systemPrompt}
      </p>
      {prompt.isPublic && (
        <span className="mt-3 inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-green-50 text-green-700">
          Shared
        </span>
      )}
      <p className="text-xs text-gray-400 mt-3">
        {new Date(prompt.createdAt).toLocaleDateString()}
      </p>
    </div>
  )
}
