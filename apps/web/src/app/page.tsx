import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600">AI Writer</div>
        <nav className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:underline">
                Sign In
              </button>
            </SignInButton>
            <Link
              href="/sign-up"
              className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </SignedOut>
          <SignedIn>
            <Link
              href="/dashboard"
              className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Go to Dashboard
            </Link>
          </SignedIn>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-24 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-blue-500 rounded-full" />
          Now in beta — Gmail integration live
        </div>

        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 max-w-3xl mx-auto leading-tight">
          Rewrite anything with AI, right in Gmail
        </h1>

        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Create reusable AI writing prompts and use them directly inside your Gmail compose window.
          Better emails, faster.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sign-up"
            className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
          >
            Start for free
          </Link>
          <a
            href="#features"
            className="px-8 py-4 border border-gray-300 text-gray-700 text-lg font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            See how it works
          </a>
        </div>

        <section id="features" className="mt-32 grid md:grid-cols-3 gap-8 text-left">
          {[
            {
              icon: '✍️',
              title: 'Custom Prompt Templates',
              desc: 'Build reusable prompts for any writing task — emails, summaries, replies, and more.',
            },
            {
              icon: '📬',
              title: 'Gmail Integration',
              desc: 'Select text in any Gmail compose window, click rewrite, done. No tab switching.',
            },
            {
              icon: '🏢',
              title: 'Team Writing Tone',
              desc: 'Set company-wide tone guidelines so every rewrite matches your brand voice.',
            },
          ].map((f) => (
            <div key={f.title} className="p-6 bg-white rounded-xl border shadow-sm">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} AI Writer. Built for fast-moving teams.
      </footer>
    </div>
  )
}
