import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'
import { CreatePromptTemplateSchema, UpdatePromptTemplateSchema } from '@comcom/types'
import { authMiddleware } from '../middleware/auth'
import type { AppEnv } from '../types'

const promptRoutes = new Hono<AppEnv>()

promptRoutes.use('*', authMiddleware)

promptRoutes.get('/', async (c) => {
  const db = c.get('db')
  const userId = c.get('userId')
  const orgId = c.get('orgId')

  const user = await db.user.findUnique({ where: { clerkId: userId } })
  if (!user) return c.json({ prompts: [] })

  const [userPrompts, orgPrompts] = await Promise.all([
    db.promptTemplate.findMany({
      where: { userId: user.id },
      orderBy: { createdAt: 'desc' },
    }),
    orgId
      ? db.promptTemplate.findMany({
          where: { organization: { clerkOrgId: orgId }, isPublic: true },
          orderBy: { createdAt: 'desc' },
        })
      : [],
  ])

  const seen = new Set<string>()
  const prompts = [...userPrompts, ...orgPrompts].filter((p) => {
    if (seen.has(p.id)) return false
    seen.add(p.id)
    return true
  })

  return c.json({ prompts })
})

promptRoutes.post('/', zValidator('json', CreatePromptTemplateSchema), async (c) => {
  const db = c.get('db')
  const userId = c.get('userId')
  const orgId = c.get('orgId')
  const body = c.req.valid('json')

  const user = await db.user.findUnique({ where: { clerkId: userId } })
  if (!user) return c.json({ error: 'User not found' }, 404)

  let organizationId: string | null = null
  if (body.organizationId && orgId) {
    const org = await db.organization.findUnique({ where: { clerkOrgId: orgId } })
    organizationId = org?.id ?? null
  }

  const prompt = await db.promptTemplate.create({
    data: {
      title: body.title,
      systemPrompt: body.systemPrompt,
      variables: body.variables ?? [],
      isPublic: body.isPublic ?? false,
      userId: user.id,
      organizationId,
    },
  })

  return c.json({ prompt }, 201)
})

const idParam = z.object({ id: z.string() })

promptRoutes.patch('/:id', zValidator('param', idParam), zValidator('json', UpdatePromptTemplateSchema), async (c) => {
  const db = c.get('db')
  const userId = c.get('userId')
  const { id } = c.req.valid('param')
  const body = c.req.valid('json')

  const user = await db.user.findUnique({ where: { clerkId: userId } })
  if (!user) return c.json({ error: 'User not found' }, 404)

  try {
    const prompt = await db.promptTemplate.update({
      where: { id, userId: user.id },
      data: body,
    })
    return c.json({ prompt })
  } catch {
    return c.json({ error: 'Not found or unauthorized' }, 404)
  }
})

promptRoutes.delete('/:id', zValidator('param', idParam), async (c) => {
  const db = c.get('db')
  const userId = c.get('userId')
  const { id } = c.req.valid('param')

  const user = await db.user.findUnique({ where: { clerkId: userId } })
  if (!user) return c.json({ error: 'User not found' }, 404)

  try {
    await db.promptTemplate.delete({ where: { id, userId: user.id } })
    return c.json({ success: true })
  } catch {
    return c.json({ error: 'Not found or unauthorized' }, 404)
  }
})

export { promptRoutes }
