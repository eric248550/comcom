// PostHog analytics — replace with real implementation when ready
interface AnalyticsEvent {
  event: string
  properties?: Record<string, unknown>
}

export function track({ event, properties }: AnalyticsEvent): void {
  if (typeof window === 'undefined') return
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return

  // PostHog is imported lazily to avoid SSR issues
  import('posthog-js')
    .then((posthog) => {
      posthog.default.capture(event, properties)
    })
    .catch(() => {})
}

export function identifyUser(userId: string, traits?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return
  if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) return

  import('posthog-js')
    .then((posthog) => {
      posthog.default.identify(userId, traits)
    })
    .catch(() => {})
}
