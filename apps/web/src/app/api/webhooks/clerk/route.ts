import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import { Webhook } from 'svix'
import { upsertUser, upsertOrganization } from '@comcom/db'

interface ClerkUserCreatedEvent {
  type: 'user.created' | 'user.updated'
  data: {
    id: string
    email_addresses: { email_address: string; id: string }[]
    first_name?: string
    last_name?: string
  }
}

interface ClerkOrgCreatedEvent {
  type: 'organization.created' | 'organization.updated'
  data: {
    id: string
    name: string
    slug?: string
  }
}

type ClerkWebhookEvent = ClerkUserCreatedEvent | ClerkOrgCreatedEvent

export async function POST(req: NextRequest) {
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET
  if (!webhookSecret) {
    return NextResponse.json({ error: 'No webhook secret' }, { status: 500 })
  }

  const headerPayload = headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return NextResponse.json({ error: 'Missing svix headers' }, { status: 400 })
  }

  const payload = await req.text()
  const wh = new Webhook(webhookSecret)

  let event: ClerkWebhookEvent
  try {
    event = wh.verify(payload, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as ClerkWebhookEvent
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'user.created' || event.type === 'user.updated') {
    const { id, email_addresses, first_name, last_name } = event.data
    const email = email_addresses[0]?.email_address ?? ''
    const name = [first_name, last_name].filter(Boolean).join(' ') || undefined
    await upsertUser(id, email, name)
  }

  if (event.type === 'organization.created' || event.type === 'organization.updated') {
    const { id, name } = event.data
    await upsertOrganization(id, name)
  }

  return NextResponse.json({ received: true })
}
