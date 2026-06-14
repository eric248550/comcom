import Image from 'next/image'
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="ComCom" width={36} height={36} className="rounded-xl" />
          <span className="text-xl font-bold text-gray-900">ComCom</span>
        </div>
        <nav className="flex items-center gap-3">
          <a
            href="https://github.com/eric248550/comcom"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
                Sign In
              </button>
            </SignInButton>
            <Link
              href="/sign-up"
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition-opacity hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #4f6ef7 0%, #8b5cf6 100%)' }}
            >
              Get Started
            </Link>
          </SignedOut>
          <SignedIn>
            <Link
              href="/dashboard"
              className="px-4 py-2 text-sm font-semibold text-white rounded-lg transition-opacity hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #4f6ef7 0%, #8b5cf6 100%)' }}
            >
              Go to Dashboard
            </Link>
          </SignedIn>
        </nav>
      </header>

      {/* Hero */}
      <main>
        <section className="container mx-auto px-6 pt-20 pb-32 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-10 border"
            style={{ background: 'linear-gradient(135deg, #eef2ff 0%, #f5f3ff 100%)', borderColor: '#c7d2fe', color: '#4f46e5' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
            Now in beta — Gmail &amp; Slack integrations live
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto leading-[1.1] tracking-tight">
            Rewrite anything with AI,{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(135deg, #4f6ef7 0%, #8b5cf6 100%)' }}
            >
              right where you write
            </span>
          </h1>

          <p className="text-xl text-gray-500 mb-12 max-w-xl mx-auto leading-relaxed">
            Create reusable AI writing prompts and apply them inside Gmail and Slack — without leaving the page.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/sign-up"
              className="px-8 py-4 text-white text-base font-semibold rounded-xl shadow-lg transition-opacity hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #4f6ef7 0%, #8b5cf6 100%)', boxShadow: '0 8px 24px rgba(99,102,241,0.35)' }}
            >
              Start for free
            </Link>
            <a
              href="https://chromewebstore.google.com/detail/comcom/dpmfokapmmmahdkaphlgodghojcdhigo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 border border-gray-200 text-gray-700 text-base font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="#4285F4" strokeWidth="1.5"/>
                <circle cx="12" cy="12" r="4" fill="#4285F4"/>
                <path d="M12 8h9.1M6.3 16L1.75 8M17.7 16H6.3" stroke="#4285F4" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              Add to Chrome
            </a>
            <a
              href="#features"
              className="px-8 py-4 border border-gray-200 text-gray-700 text-base font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              See how it works
            </a>
          </div>
        </section>

        {/* Demo section */}
        <section id="features" className="container mx-auto px-6 pb-32 space-y-24">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">See it in action</h2>
            <p className="mt-3 text-gray-500">Works where you already write — no new tab, no copy-paste.</p>
          </div>

          {/* Gmail demo */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-2/5 shrink-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 text-red-600 bg-red-50">
                Gmail
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">AI rewriting inside Gmail</h3>
              <p className="text-gray-500 leading-relaxed">
                A compose bar appears right inside your Gmail window. Describe what you want — or pick a saved prompt — and ComCom rewrites your draft instantly.
              </p>
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
              <img src="/gmail.gif" alt="ComCom Gmail demo" className="w-full block" />
            </div>
          </div>

          {/* Slack demo */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-2/5 shrink-0">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4 text-purple-600 bg-purple-50">
                Slack
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Rewrite Slack messages on the fly</h3>
              <p className="text-gray-500 leading-relaxed">
                Same experience in Slack. Select your draft, hit rewrite, and send a polished message — without breaking your flow.
              </p>
            </div>
            <div className="flex-1 rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
              <img src="/slack.gif" alt="ComCom Slack demo" className="w-full block" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gray-100">
        <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="ComCom" width={20} height={20} className="rounded-md opacity-70" />
            <span>© {new Date().getFullYear()} ComCom</span>
          </div>
          <Link href="/privacy" className="hover:text-gray-600 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </footer>
    </div>
  )
}
