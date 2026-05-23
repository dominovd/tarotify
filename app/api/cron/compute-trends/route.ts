// ════════════════════════════════════════════════════════════════════════════
// /api/cron/compute-trends — daily aggregation for the /trends pages
// ════════════════════════════════════════════════════════════════════════════
//
// Scheduling:  vercel.json → "15 0 * * *" → 00:15 UTC, after the daily card
//              flip (00:00) and the prewarm cron (00:05). At this hour the
//              previous day's ai_usage rows are fully settled.
// Auth:        Vercel Cron sends `Authorization: Bearer ${CRON_SECRET}`.
//
// What it does:
//   1. Calls computeTrendsSnapshot() — pulls the last 30 days of card-draw
//      data from ai_usage + saved_readings and produces an aggregated
//      document (top cards by 7d / 30d / all-time, trending-up deltas,
//      pair combinations, source breakdown).
//   2. Inserts the document into public.trends_snapshot.
//   3. The /trends and /es/tendencias server pages read the most recent
//      row and render directly — no per-request DB scan.
//
// Idempotent in spirit: rerunning produces another snapshot row, which is
// fine. The page always reads the latest. Old rows are cheap (~10 KB each)
// and useful for ad-hoc historical comparison.
// ════════════════════════════════════════════════════════════════════════════

import { NextResponse } from 'next/server'
import { computeTrendsSnapshot, insertSnapshot } from '@/lib/trends/compute'

export const runtime = 'edge'

export async function GET(req: Request): Promise<Response> {
  const cronSecret = process.env.CRON_SECRET
  const auth = req.headers.get('authorization') || ''
  if (!cronSecret) {
    console.error('[cron/compute-trends] CRON_SECRET not configured')
    return NextResponse.json({ error: 'Cron secret not configured' }, { status: 500 })
  }
  if (auth !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const snapshot = await computeTrendsSnapshot()
    await insertSnapshot(snapshot)
    return NextResponse.json({
      ok: true,
      computedAt: snapshot.computedAt,
      totals: snapshot.totals,
      topCards7dPreview: snapshot.topCards7d.slice(0, 3),
    })
  } catch (err) {
    console.error('[cron/compute-trends] failed:', err)
    return NextResponse.json({
      ok: false,
      error: err instanceof Error ? err.message : String(err),
    }, { status: 500 })
  }
}
