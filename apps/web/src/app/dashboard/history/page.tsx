import { auth } from '@clerk/nextjs/server'
import { serverGetHistory } from '@/lib/worker-client'

export default async function HistoryPage() {
  const { userId } = auth()
  if (!userId) return null

  const sessions = await serverGetHistory(50).catch(() => [])

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Writing History</h1>

      {sessions.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border">
          <div className="text-4xl mb-3">📝</div>
          <p className="text-gray-500">No rewrites yet. Start writing with the Chrome extension!</p>
        </div>
      ) : (
        <div className="space-y-4">
          {sessions.map((s) => (
            <div key={s.id} className="bg-white rounded-xl border p-5">
              <div className="flex items-start justify-between gap-4 mb-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 capitalize">
                  {s.mode}
                </span>
                <span className="text-xs text-gray-400 shrink-0">
                  {new Date(s.createdAt).toLocaleString()}
                  {s.source !== 'web' && (
                    <span className="ml-2 px-1.5 py-0.5 bg-gray-100 rounded text-gray-500">
                      {s.source}
                    </span>
                  )}
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                    Original
                  </p>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap line-clamp-4">{s.input}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
                    Rewritten
                  </p>
                  <p className="text-sm text-gray-700 whitespace-pre-wrap line-clamp-4">{s.output}</p>
                </div>
              </div>
              {s.tokensUsed && (
                <p className="text-xs text-gray-400 mt-3">{s.tokensUsed} tokens used</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
