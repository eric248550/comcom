'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@clerk/nextjs'
import { PromptEditor } from '@comcom/ui'
import { ArrowLeft, Plus, Trash2 } from 'lucide-react'
import Link from 'next/link'

interface Variable {
  name: string
  label: string
  defaultValue: string
}

export default function NewPromptPage() {
  const router = useRouter()
  const { getToken } = useAuth()
  const [title, setTitle] = useState('')
  const [systemPrompt, setSystemPrompt] = useState('')
  const [variables, setVariables] = useState<Variable[]>([])
  const [isPublic, setIsPublic] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const workerUrl = process.env.NEXT_PUBLIC_WORKER_URL ?? 'http://localhost:8787'

  const addVariable = () =>
    setVariables((v) => [...v, { name: '', label: '', defaultValue: '' }])

  const updateVariable = (i: number, field: keyof Variable, value: string) =>
    setVariables((prev) => prev.map((v, idx) => (idx === i ? { ...v, [field]: value } : v)))

  const removeVariable = (i: number) =>
    setVariables((prev) => prev.filter((_, idx) => idx !== i))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSaving(true)
    try {
      const token = await getToken()
      const res = await fetch(`${workerUrl}/api/prompts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({ title, systemPrompt, variables, isPublic }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error ?? 'Failed to save prompt')
      }
      router.push('/dashboard/prompts')
      router.refresh()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <Link
        href="/dashboard/prompts"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-6"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Prompts
      </Link>

      <h1 className="text-2xl font-bold text-gray-900 mb-8">New Prompt Template</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Professional Email"
            required
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">System Prompt</label>
          <PromptEditor
            value={systemPrompt}
            onChange={setSystemPrompt}
            variables={variables.map((v) => v.name).filter(Boolean)}
          />
          <p className="text-xs text-gray-400 mt-1">Use {'{{variable_name}}'} for dynamic values</p>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700">Variables</label>
            <button
              type="button"
              onClick={addVariable}
              className="inline-flex items-center gap-1 text-xs text-blue-600 hover:underline"
            >
              <Plus className="h-3 w-3" />
              Add Variable
            </button>
          </div>
          {variables.map((v, i) => (
            <div key={i} className="grid grid-cols-3 gap-2 mb-2 items-start">
              <input
                placeholder="name"
                value={v.name}
                onChange={(e) => updateVariable(i, 'name', e.target.value)}
                className="rounded-md border border-input px-2 py-1.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                placeholder="label"
                value={v.label}
                onChange={(e) => updateVariable(i, 'label', e.target.value)}
                className="rounded-md border border-input px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <div className="flex gap-1">
                <input
                  placeholder="default"
                  value={v.defaultValue}
                  onChange={(e) => updateVariable(i, 'defaultValue', e.target.value)}
                  className="flex-1 rounded-md border border-input px-2 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <button
                  type="button"
                  onClick={() => removeVariable(i)}
                  className="p-1.5 text-gray-400 hover:text-red-500"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="isPublic"
            checked={isPublic}
            onChange={(e) => setIsPublic(e.target.checked)}
            className="rounded"
          />
          <label htmlFor="isPublic" className="text-sm text-gray-700">
            Share with organization
          </label>
        </div>

        {error && <p className="text-sm text-red-600">{error}</p>}

        <div className="flex gap-3">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {saving ? 'Saving…' : 'Save Prompt'}
          </button>
          <Link
            href="/dashboard/prompts"
            className="px-6 py-2 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  )
}
