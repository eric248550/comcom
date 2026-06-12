'use client'

import { useState, useEffect } from 'react'
import { useAuth } from '@clerk/nextjs'
import type { UpdateToneSettingsInput } from '@comcom/types'

const VOICE_OPTIONS = ['professional', 'friendly', 'casual', 'authoritative', 'empathetic'] as const
const FORMALITY_OPTIONS = ['formal', 'semi-formal', 'informal'] as const

export default function SettingsPage() {
  const { getToken } = useAuth()
  const [tone, setTone] = useState<UpdateToneSettingsInput>({
    voice: 'professional',
    formality: 'semi-formal',
    additionalInstructions: '',
  })
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(true)

  const workerUrl = process.env.NEXT_PUBLIC_WORKER_URL ?? 'http://localhost:8787'

  useEffect(() => {
    const load = async () => {
      try {
        const token = await getToken()
        const res = await fetch(`${workerUrl}/api/tone`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {},
        })
        if (res.ok) {
          const data = await res.json()
          if (data.tone) setTone(data.tone)
        }
      } catch (_) {
        // ignore load error
      }
      setLoading(false)
    }
    load()
  }, [getToken, workerUrl])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    setSaved(false)
    try {
      const token = await getToken()
      await fetch(`${workerUrl}/api/tone`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify(tone),
      })
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Settings</h1>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-12 bg-gray-100 rounded-lg" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Settings</h1>
      <p className="text-sm text-gray-500 mb-8">Configure your writing tone for AI rewrites</p>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl border p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Voice</label>
          <div className="grid grid-cols-3 gap-2">
            {VOICE_OPTIONS.map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setTone((t) => ({ ...t, voice: v }))}
                className={`px-3 py-2 text-sm rounded-lg border capitalize transition-colors ${
                  tone.voice === v
                    ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium'
                    : 'border-gray-200 hover:border-gray-300 text-gray-600'
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Formality</label>
          <div className="grid grid-cols-3 gap-2">
            {FORMALITY_OPTIONS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setTone((t) => ({ ...t, formality: f }))}
                className={`px-3 py-2 text-sm rounded-lg border capitalize transition-colors ${
                  tone.formality === f
                    ? 'border-blue-500 bg-blue-50 text-blue-700 font-medium'
                    : 'border-gray-200 hover:border-gray-300 text-gray-600'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Style Instructions
          </label>
          <textarea
            value={tone.additionalInstructions ?? ''}
            onChange={(e) => setTone((t) => ({ ...t, additionalInstructions: e.target.value }))}
            placeholder="e.g. Always sign off with 'Best regards'. Avoid jargon. Use short sentences."
            rows={4}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {saving ? 'Saving…' : 'Save Settings'}
          </button>
          {saved && <span className="text-sm text-green-600">Settings saved!</span>}
        </div>
      </form>
    </div>
  )
}
