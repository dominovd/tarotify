import type { ComboContext } from './types'
import { CRISIS_TRANSFORMATION } from './crisis-transformation'
import { LOVE_SOULMATE } from './love-soulmate'
import { MANIFESTATION_COMPLETION } from './manifestation-completion'
import { INTUITION_PSYCHIC } from './intuition-psychic'
import { DECISION_PATH } from './decision-path'

export type { ComboContext } from './types'

/**
 * Hand-curated nuanced content for high-intent combinations.
 *
 * Combos NOT in this map fall back to the procedural `interpret()` engine
 * in `lib/combinations.ts`. This is intentional — the goal is depth on the
 * traffic-bearing pairs, not boilerplate everywhere.
 *
 * Keys MUST be canonical slugs (lower card ID first; see `makeComboSlug`).
 */
export const COMBO_CONTEXT: Record<string, ComboContext> = {
  ...CRISIS_TRANSFORMATION,
  ...LOVE_SOULMATE,
  ...MANIFESTATION_COMPLETION,
  ...INTUITION_PSYCHIC,
  ...DECISION_PATH,
}

export function getComboContext(slug: string): ComboContext | null {
  return COMBO_CONTEXT[slug] ?? null
}

/** Slugs that currently have hand-curated content. Used for sitemap priority + analytics. */
export const ENRICHED_COMBO_SLUGS = Object.keys(COMBO_CONTEXT)
