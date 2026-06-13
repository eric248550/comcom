import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import { LayoutDashboard, FileText, Settings, History } from 'lucide-react'

const navLinks = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/prompts', label: 'Prompts', icon: FileText },
  { href: '/dashboard/history', label: 'History', icon: History },
  { href: '/dashboard/settings', label: 'Settings', icon: Settings },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r flex flex-col hidden md:flex">
        <div className="p-6 border-b">
          <Link href="/" className="text-xl font-bold text-blue-600">
            ComCom
          </Link>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            >
              <Icon className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t">
          <UserButton afterSignOutUrl="/" showName />
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="md:hidden bg-white border-b px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold text-blue-600">
            ComCom
          </Link>
          <UserButton afterSignOutUrl="/" />
        </header>

        <main className="flex-1 p-6 md:p-8">{children}</main>
      </div>
    </div>
  )
}
