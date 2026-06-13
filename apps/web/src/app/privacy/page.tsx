import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — ComCom',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between border-b">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ComCom
        </Link>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-2xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-12">Last updated: June 2026</p>

        <div className="prose prose-gray max-w-none space-y-10">

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">What is ComCom?</h2>
            <p className="text-gray-600 leading-relaxed">
              ComCom is a Chrome extension and web dashboard that lets you rewrite selected text in
              Gmail and Slack using AI. This policy explains what data we collect, how we use it,
              and who we share it with.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Data we collect</h2>
            <ul className="space-y-4 text-gray-600">
              <li>
                <span className="font-medium text-gray-800">Account information</span> — your name
                and email address, collected when you sign up via Clerk.
              </li>
              <li>
                <span className="font-medium text-gray-800">Text you choose to rewrite</span> — the
                text you select and submit for rewriting. This is sent to OpenAI to generate the
                rewritten version and saved to your writing history.
              </li>
              <li>
                <span className="font-medium text-gray-800">Writing history</span> — every rewrite
                you run is logged with the original text, rewritten output, mode used, source
                (Gmail or Slack), and timestamp. This powers your history dashboard.
              </li>
              <li>
                <span className="font-medium text-gray-800">Prompt templates</span> — any custom
                prompt templates you create and save.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">How we use your data</h2>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>To provide the rewriting service</li>
              <li>To display your writing history in the dashboard</li>
              <li>To enforce daily usage limits</li>
              <li>To sync your account across the extension and web app</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              We do not sell your data, use it for advertising, or share it with third parties
              beyond the services listed below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Third-party services</h2>
            <ul className="space-y-4 text-gray-600">
              <li>
                <span className="font-medium text-gray-800">OpenAI</span> — the text you submit for
                rewriting is sent to OpenAI&apos;s API. OpenAI may use API inputs to improve their
                models unless you opt out via their{' '}
                <a
                  href="https://platform.openai.com/docs/guides/your-data"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  data controls
                </a>
                .
              </li>
              <li>
                <span className="font-medium text-gray-800">Clerk</span> — handles authentication.
                Your email and name are stored in Clerk. See{' '}
                <a
                  href="https://clerk.com/privacy"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Clerk&apos;s privacy policy
                </a>
                .
              </li>
              <li>
                <span className="font-medium text-gray-800">Neon</span> — our PostgreSQL database
                provider where writing history and prompt templates are stored.
              </li>
              <li>
                <span className="font-medium text-gray-800">Cloudflare</span> — our API runs on
                Cloudflare Workers. Requests pass through Cloudflare&apos;s infrastructure.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Data retention</h2>
            <p className="text-gray-600 leading-relaxed">
              Your writing history and prompt templates are stored until you delete your account.
              You can view your history at any time from the dashboard.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Your rights</h2>
            <p className="text-gray-600 leading-relaxed">
              You can request deletion of your account and all associated data at any time by
              emailing us. We will process deletion requests within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Contact</h2>
            <p className="text-gray-600 leading-relaxed">
              Questions about this policy? Email us at{' '}
              <a href="mailto:eric248550@gmail.com" className="text-blue-600 hover:underline">
                eric248550@gmail.com
              </a>
              .
            </p>
          </section>

        </div>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-sm text-gray-500 border-t">
        © {new Date().getFullYear()} ComCom.{' '}
        <Link href="/" className="hover:underline">
          Back to home
        </Link>
      </footer>
    </div>
  )
}
