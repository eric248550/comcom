import { createClerkClient, verifyToken } from '@clerk/backend'

export async function verifyClerkToken(
  token: string,
  secretKey: string,
): Promise<{ userId: string; orgId: string | null }> {
  const payload = await verifyToken(token, { secretKey })

  const userId = payload.sub
  // Clerk embeds org_id in the JWT claims
  const orgId = (payload as Record<string, unknown>).org_id as string | null ?? null

  return { userId, orgId }
}

export function buildClerkClient(secretKey: string) {
  return createClerkClient({ secretKey })
}
