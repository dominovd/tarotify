// ════════════════════════════════════════════════════════════════════════════
// /api/cron/prewarm-daily — pre-warm the AI reading cache for today's card
// ════════════════════════════════════════════════════════════════════════════
//
// Scheduling:  vercel.json → "5 0 * * *" → /api/cron/prewarm-daily
//              (00:05 UTC, just after the date-seeded daily card flips).
// Auth:        Vercel Cron sets `Authorization: Bearer ${CRON_SECRET}`
//              automatically when the env var is present.
//
// What it does: for each locale (en, es), builds the same cache key that
// the /daily AI block uses. If a row already exists, we skip. Otherwise we
// generate a fresh reading (DeepSeek, Claude fallback) and store it in the Redis cache.
//
// Result: the first visitor of the day to /daily (and /es/carta-del-dia)
// hits a warm cache, saving them the ~3-5s wait and saving us the cold-
// cache cost. ~$0.016/day fixed in exchange for guaranteed instant
// experience for every daily-card user, all day long.
// ════════════════════════════════════════════════════════════════════════════

import { NextResponse } from 'next/server'
import { getDailyCard } from '@/lib/daily-card'
import {
  buildCacheKey,
  insertCachedReading,
  lookupCachedReading,
} from '@/lib/ai/cache'
import { buildUserMessage, getSystemPrompt } from '@/lib/ai/prompts'
import { anyProviderConfigured, generateReading as generate } from '@/lib/ai/providers'

export const runtime = 'edge'

const MAX_TOKENS = 1200

type Locale = 'en' | 'es'

async function generateReading(args: {
  locale: Locale
  cards: Array<{ slug: string; reversed: boolean; position: string }>
  spreadName: string
}): Promise<string> {
  const { locale, cards, spreadName } = args
  // Same provider chain as the live endpoint (DeepSeek, then Claude).
  const { text } = await generate({
    system: getSystemPrompt(locale),
    user: buildUserMessage({ locale, source: 'free-reading', spreadName, cards }),
    maxTokens: MAX_TOKENS,
    tier: 'fast',
  })
  return text
}

interface LocaleResult {
  locale: Locale
  status: 'cached' | 'already-cached' | 'skip-no-key' | 'error'
  textLen?: number
  error?: string
}

export async function GET(req: Request): Promise<Response> {
  // ─── auth ──────────────────────────────────────────────────────────────
  const cronSecret = process.env.CRON_SECRET
  const auth = req.headers.get('authorization') || ''
  if (!cronSecret) {
    console.error('[cron/prewarm-daily] CRON_SECRET not configured')
    return NextResponse.json({ error: 'Cron secret not configured' }, { status: 500 })
  }
  if (auth !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // ─── env ───────────────────────────────────────────────────────────────
  if (!anyProviderConfigured()) {
    console.error('[cron/prewarm-daily] no AI provider key (DEEPSEEK_API_KEY / ANTHROPIC_API_KEY)')
    return NextResponse.json({ error: 'ai-unavailable' }, { status: 503 })
  }

  // ─── today's card (same for all locales — slug+reversed are universal) ─
  const { card, reversed } = getDailyCard()

  // ─── for each locale, ensure cache row exists ──────────────────────────
  // Mirror the position labels used by app/(en)/daily and app/(es)/es/carta-del-dia
  // so the cache key matches what the live request will compute.
  const LOCALE_POSITION: Record<Locale, string> = { en: 'Today', es: 'Hoy' }
  const LOCALE_SPREAD: Record<Locale, string> = {
    en: 'Daily Tarot Card',
    es: 'Carta del Día',
  }

  const results: LocaleResult[] = []
  for (const locale of ['en', 'es'] as Locale[]) {
    const cards = [{ slug: card.slug, reversed, position: LOCALE_POSITION[locale] }]
    try {
      const cacheKey = await buildCacheKey({ locale, source: 'free-reading', cards })
      if (!cacheKey) {
        results.push({ locale, status: 'skip-no-key' })
        continue
      }
      const existing = await lookupCachedReading(cacheKey)
      if (existing) {
        results.push({ locale, status: 'already-cached', textLen: existing.length })
        continue
      }
      const text = await generateReading({
        locale,
        cards,
        spreadName: LOCALE_SPREAD[locale],
      })
      if (text.length < 200) {
        results.push({ locale, status: 'error', error: 'response too short' })
        continue
      }
      await insertCachedReading({
        cacheKey,
        responseText: text,
        locale,
        source: 'free-reading',
      })
      results.push({ locale, status: 'cached', textLen: text.length })
    } catch (err) {
      console.error(`[cron/prewarm-daily] ${locale} failed:`, err)
      results.push({
        locale,
        status: 'error',
        error: err instanceof Error ? err.message : String(err),
      })
    }
  }

  return NextResponse.json({
    ok: true,
    date: new Date().toISOString().slice(0, 10),
    cardSlug: card.slug,
    reversed,
    results,
  })
}
