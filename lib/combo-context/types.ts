/**
 * ComboContext — deep, hand-curated content for high-intent tarot combinations.
 *
 * Replaces the generic `interpret()` template output for selected combo slugs
 * that have proven search intent (e.g. death-and-the-tower, the-lovers-and-the-devil).
 * Fallback: combos without a ComboContext entry continue to use the template engine.
 *
 * Each entry is keyed by CANONICAL combo slug (lower card ID first — see `makeComboSlug`).
 */
export type ComboContext = {
  /** Canonical card slug 1 — sanity check + IDE help when authoring */
  s1: string
  /** Canonical card slug 2 */
  s2: string

  /** One-line pitch (~15 words). Replaces the generic "Combined Energy" tagline. */
  essence: string

  /**
   * Main reading — 2-3 paragraphs of deeply specific content.
   * Split on `\n\n` for rendering. ~250-400 words total.
   */
  reading: string

  /**
   * What this combination looks like when it goes wrong — the shadow form.
   * 1 paragraph, ~80-120 words. Specific failure mode, not vague warnings.
   */
  shadowForm: string

  /**
   * When this combination misleads or requires careful reading.
   * 1 paragraph, ~80-120 words. Names the precise edge case.
   */
  edgeCase: string

  /**
   * Optional: what contradicting cards in the spread tell you.
   * E.g. "If The Star also appears, the destruction is the path to healing."
   */
  contradictionFlag?: string

  /**
   * Expert framing — how an experienced reader handles this combination.
   * 1 paragraph, ~80-120 words. Methodology over platitudes.
   */
  readerNote: string

  /** Love & relationships, specific to this exact pair. 2-3 sentences. */
  love: string
  /** Career & money, specific to this exact pair. 2-3 sentences. */
  career: string
  /** Personal growth / spiritual layer, specific. 2-3 sentences. */
  spirit: string

  /** Optional timing intuition. 1-2 sentences. */
  timing?: string

  /** 4-5 contextual FAQ — unique questions specific to this pair, NOT generic boilerplate. */
  faqs: Array<{ q: string; a: string }>
}
