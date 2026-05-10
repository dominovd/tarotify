import { CARDS, CARDS_BY_SLUG, type Card } from './cards'

export function getElementRel(e1: string, e2: string) {
  const has = (e: string, s: string) => e.includes(s)
  if ((has(e1,'Fire')&&has(e2,'Air'))||(has(e1,'Air')&&has(e2,'Fire')))
    return { type: 'amplifying', desc: 'Fire and Air feed each other — this combination surges with inspiration and rapid forward movement.' }
  if ((has(e1,'Earth')&&has(e2,'Water'))||(has(e1,'Water')&&has(e2,'Earth')))
    return { type: 'nurturing', desc: 'Earth and Water create fertile ground — a combination of growth, nourishment and patient manifestation.' }
  if ((has(e1,'Fire')&&has(e2,'Water'))||(has(e1,'Water')&&has(e2,'Fire')))
    return { type: 'tension', desc: 'Fire and Water create steam — this combination holds passion and emotional complexity in dynamic opposition.' }
  if ((has(e1,'Air')&&has(e2,'Earth'))||(has(e1,'Earth')&&has(e2,'Air')))
    return { type: 'grounding', desc: 'Air and Earth balance thought with action — ground your ideas into practical reality.' }
  if (e1 === e2 || e1.includes(e2) || e2.includes(e1))
    return { type: 'resonant', desc: 'Sharing the same element, these cards speak the same language — their energies amplify and deepen each other powerfully.' }
  return { type: 'complex', desc: 'These two cards carry distinct elemental energies creating a layered, multifaceted combination.' }
}

export function interpret(c1: Card, c2: Card) {
  const rel = getElementRel(c1.element, c2.element)
  const kw1 = c1.kw_up.slice(0, 2).join(' and ')
  const kw2 = c2.kw_up.slice(0, 2).join(' and ')
  const mains: Record<string, string> = {
    amplifying: `The pairing of ${c1.name} and ${c2.name} creates a powerfully amplified current. ${c1.name} brings ${c1.kw_up[0]} and ${c1.kw_up[1]}, while ${c2.name} adds ${c2.kw_up[0]} and ${c2.kw_up[1]}. ${rel.desc} Together they ignite momentum — ideas and actions move fast. The core themes running through this combination are ${kw1} meeting ${kw2}. Something is accelerating: you are being called to act with both awareness and drive.`,
    nurturing: `${c1.name} and ${c2.name} create a deeply supportive pairing. ${c1.name} carries ${kw1}, and ${c2.name} holds ${kw2}. ${rel.desc} Together they ask you to be patient, tend to what is growing, and trust the process. This combination rewards steadiness, care and long-term thinking over quick wins.`,
    tension: `${c1.name} and ${c2.name} create a dynamic, charged tension. ${kw1} from ${c1.name} and ${kw2} from ${c2.name} — these are not opposing forces so much as complementary polarities. ${rel.desc} The pull between them is the heart of this combination's message: both energies are valid; the work is in holding them together.`,
    grounding: `${c1.name} and ${c2.name} bridge vision with reality. ${kw1} meets ${kw2}. ${rel.desc} This combination rewards those who can think clearly and follow through methodically. The ideas must become actions.`,
    resonant: `When ${c1.name} meets ${c2.name}, their shared elemental nature creates deep resonance. ${kw1} and ${kw2} weave into a unified message — a combination of reinforcement and depth. What each card suggests alone becomes more certain and more important together.`,
    complex: `${c1.name} and ${c2.name} bring together two distinct archetypal currents. ${kw1} exists in dialogue with ${kw2}. ${rel.desc} Reading this combination requires holding both energies — each brings its own wisdom, and the message emerges in the space between them.`,
  }
  return {
    relType: rel.type,
    relDesc: rel.desc,
    main: mains[rel.type],
    love: `In love, ${c1.name} and ${c2.name} suggest a relationship shaped by ${c1.kw_up[0]} and ${c2.kw_up[0]}. This combination points to a partnership where both emotional truth and personal growth are central themes.`,
    career: `Professionally, the meeting of ${c1.name}'s ${c1.kw_up[0]} with ${c2.name}'s ${c2.kw_up[0]} describes a dynamic where ${rel.type === 'amplifying' ? 'bold moves and fast decisions lead to breakthroughs' : rel.type === 'grounding' ? 'careful planning and steady effort produce the best results' : 'genuine collaboration and honest assessment are your greatest assets'}.`,
    spirit: `For personal growth, these two cards invite you to explore the relationship between ${c1.kw_up[0]} and ${c2.kw_up[0]}. ${c1.name} has prepared you; ${c2.name} shows you where to go next. The lesson is integration — how can both qualities strengthen each other within you?`,
  }
}

/** Canonical slug: lower card ID always first */
export function makeComboSlug(slug1: string, slug2: string): string {
  const c1 = CARDS_BY_SLUG[slug1]
  const c2 = CARDS_BY_SLUG[slug2]
  if (!c1 || !c2) return `${slug1}-and-${slug2}`
  return c1.id <= c2.id
    ? `${slug1}-and-${slug2}`
    : `${slug2}-and-${slug1}`
}

/**
 * Parse a combo slug like "death-and-the-tower" into two card slugs.
 * Tries all possible "-and-" split points to find two valid cards.
 * Returns null if no valid pair found.
 */
export function parseComboSlug(comboSlug: string): [string, string] | null {
  const parts = comboSlug.split('-and-')
  for (let i = 1; i < parts.length; i++) {
    const slug1 = parts.slice(0, i).join('-and-')
    const slug2 = parts.slice(i).join('-and-')
    if (CARDS_BY_SLUG[slug1] && CARDS_BY_SLUG[slug2]) {
      return [slug1, slug2]
    }
  }
  return null
}

/** All Major Arcana slugs in deck order */
export const MAJOR_SLUGS = CARDS
  .filter(c => c.suit === 'major')
  .map(c => c.slug)

/** All unique Major × Major combo slugs (canonical, 231 pairs) */
export const MAJOR_COMBOS: string[] = []
for (let i = 0; i < MAJOR_SLUGS.length; i++) {
  for (let j = i + 1; j < MAJOR_SLUGS.length; j++) {
    MAJOR_COMBOS.push(`${MAJOR_SLUGS[i]}-and-${MAJOR_SLUGS[j]}`)
  }
}

/** High-priority Minor Arcana combos with proven search volume */
export const PRIORITY_MINOR_COMBOS = [
  'the-high-priestess-and-page-of-swords',
]
