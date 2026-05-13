/**
 * Date-seeded card of the day. Same date globally → same card, deterministic.
 * Used by both /daily page and the daily-email cron so the website and the
 * inbox stay in sync each morning.
 */
import { CARDS, type Card } from './cards'

export interface DailyDraw {
  card: Card
  reversed: boolean
}

/**
 * Seed the draw by Y*10000 + M*100 + D so the value is stable for a given
 * calendar day in the server's timezone. Reversed ratio ~22 % — lower than a
 * full reading because a daily draw is a prompt, not a verdict.
 */
export function getDailyCard(date: Date = new Date()): DailyDraw {
  const seed = date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate()
  const idx = seed % CARDS.length
  const reversed = (seed * 17 + 3) % 9 === 0
  return { card: CARDS[idx], reversed }
}

/** Human-readable long date in British English, e.g. "Wednesday, 13 May 2026". */
export function longDate(date: Date = new Date()): string {
  return date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
