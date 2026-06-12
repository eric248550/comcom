import { auth } from '@clerk/nextjs/server'
import { serverGetHistory, serverGetPrompts } from '@/lib/worker-client'
import Link from 'next/link'
import { FileText, History, Zap, ArrowRight } from 'lucide-react'

export default async function DashboardPage() {
  const { userId } = auth()
  if (!userId) return null

  const [sessions, prompts] = await Promise.all([
    serverGetHistory(10).catch(() => []),
    serverGetPrompts().catch(() => []),
  ])

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        <StatCard icon={FileText} label="Prompt Templates" value={prompts.length} href="/dashboard/prompts" color="blue" />
        <StatCard icon={History} label="Rewrites Today" value={sessions.filter((s) => isToday(new Date(s.createdAt))).length} href="/dashboard/history" color="green" />
        <StatCard icon={Zap} label="Total Rewrites" value={sessions.length} href="/dashboard/history" color="purple" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <section className="bg-white rounded-xl border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Recent Rewrites</h2>
            <Link href="/dashboard/history" className="text-sm text-blue-600 hover:underline flex items-center gap-1">
              View all <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          {sessions.length === 0 ? (
            <p className="text-sm text-gray-500">No rewrites yet. Install the Chrome extension to get started.</p>
          ) : (
            <ul className="space-y-3">
              {sessions.slice(0, 5).map((s) => (
                <li key={s.id} className="text-sm">
                  <p className="text-gray-800 truncate font-medium">{s.output.slice(0, 80)}…</p>
                  <p className="text-gray-400 text-xs mt-0.5 capitalize">
                    {s.mode} · {new Date(s.createdAt).toLocaleDateString()}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="bg-white rounded-xl border p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-gray-900">Quick Actions</h2>
          </div>
          <div className="space-y-3">
            <Link href="/dashboard/prompts/new" className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors text-sm">
              <FileText className="h-4 w-4 text-blue-600" />
              <span>Create new prompt template</span>
            </Link>
            <Link href="/dashboard/settings" className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors text-sm">
              <Zap className="h-4 w-4 text-purple-600" />
              <span>Configure writing tone</span>
            </Link>
            <a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors text-sm"
            >
              <span className="text-lg">🧩</span>
              <span>Install Chrome Extension</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

function isToday(date: Date): boolean {
  const today = new Date()
  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  )
}

function StatCard({
  icon: Icon,
  label,
  value,
  href,
  color,
}: {
  icon: React.ElementType
  label: string
  value: number
  href: string
  color: 'blue' | 'green' | 'purple'
}) {
  const colorMap = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    purple: 'bg-purple-50 text-purple-600',
  }
  return (
    <Link href={href} className="bg-white rounded-xl border p-6 hover:shadow-sm transition-shadow">
      <div className={`inline-flex p-2 rounded-lg mb-3 ${colorMap[color]}`}>
        <Icon className="h-5 w-5" />
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </Link>
  )
}
