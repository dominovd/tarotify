// ════════════════════════════════════════════════════════════════════════════
// lib/cards/related.ts — static relationships between the 78 cards
// ════════════════════════════════════════════════════════════════════════════
//
// The trends_snapshot.pairsByCard layer captures *empirical* relationships
// (cards that empirically appear together). This module captures the
// *structural* relationships every tarot reader already knows:
//
//   - same number across suits (3 of Cups <-> 3 of Wands <-> 3 of Swords
//     <-> 3 of Pentacles) — minors + courts
//   - same element (Wands+Fire majors, Cups+Water majors, etc.)
//   - more from the same suit
//   - previous / next card in the Major Arcana journey
//
// These pure helpers operate on `Card` directly so callers (the card pages,
// the related-cards component) don't have to know the deck structure.
// ════════════════════════════════════════════════════════════════════════════

import { CARDS, type Card } from '@/lib/cards'

// Number ranks we treat as "the same" across suits. Court cards have their
// own group (page<->page, etc.). Majors don't participate — their numbers
// are unique by definition.
const COURT_RANKS = new Set(['Page', 'Knight', 'Queen', 'King'])
const PIP_RANKS = new Set(['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10'])

/** Cards with the same numerical/court rank across the other three suits. */
export function relatedByNumber(card: Card): Card[] {
  if (card.suit === 'major') return []
  if (!COURT_RANKS.has(card.number) && !PIP_RANKS.has(card.number)) return []
  return CARDS.filter(c =>
    c.slug !== card.slug
    && c.suit !== 'major'
    && c.number === card.number
  )
}

/** Cards sharing the same element. Limited to the first `limit` by id for
 *  stable output; the page typically shows a small grid. */
export function relatedByElement(card: Card, limit = 6): Card[] {
  return CARDS
    .filter(c => c.slug !== card.slug && c.element === card.element)
    .slice(0, limit)
}

/** Cards from the same suit, excluding the current one. For minors we keep
 *  the first `limit` in order; for majors we sample by id so the same
 *  page always picks the same siblings (no randomness, good for caching). */
export function relatedBySuit(card: Card, limit = 6): Card[] {
  return CARDS
    .filter(c => c.suit === card.suit && c.slug !== card.slug)
    .slice(0, limit)
}

/** Previous and next card in the Major Arcana sequence (by id 0..21).
 *  Returns nothing for minor cards. */
export function majorPrevNext(card: Card): { prev: Card | null; next: Card | null } {
  if (card.suit !== 'major') return { prev: null, next: null }
  const ordered = CARDS.filter(c => c.suit === 'major').sort((a, b) => a.id - b.id)
  const idx = ordered.findIndex(c => c.slug === card.slug)
  if (idx === -1) return { prev: null, next: null }
  return {
    prev: idx > 0 ? ordered[idx - 1]! : null,
    next: idx < ordered.length - 1 ? ordered[idx + 1]! : null,
  }
}

// ─── relation labels (EN + ES) ─────────────────────────────────────────────
// Lightweight i18n shim — the component picks the right label by locale.

export const RELATION_LABELS = {
  en: {
    oftenAppearsWith:  'Often appears with',
    oftenAppearsHelp:  'From recent multi-card spreads on TarotAxis',
    sameNumberPip:     (rank: string) => `Other ${rank}s — the same number, a different suit`,
    sameNumberCourt:   (rank: string) => `Other ${rank}s — same rank across the suits`,
    sameElement:       (el: string) => `Same element — ${el}`,
    moreFromSuit:      (suitLabel: string) => `More from the ${suitLabel}`,
    journey:           "The Fool's journey",
    journeyHelp:       'Previous and next steps in the Major Arcana sequence',
  },
  es: {
    oftenAppearsWith:  'Aparece a menudo con',
    oftenAppearsHelp:  'De tiradas recientes en TarotAxis',
    sameNumberPip:     (rank: string) => `Otros ${rank} — el mismo número, otro palo`,
    sameNumberCourt:   (rank: string) => `Otras figuras ${rank} — mismo rango entre los palos`,
    sameElement:       (el: string) => `Mismo elemento — ${el}`,
    moreFromSuit:      (suitLabel: string) => `Más de ${suitLabel}`,
    journey:           'El viaje del Loco',
    journeyHelp:       'Pasos anterior y siguiente en la secuencia de los Arcanos Mayores',
  },
} as const

// ─── element label localisation ────────────────────────────────────────────
// The English element strings ('Fire', 'Water', 'Earth', 'Air') live on the
// card data. Spanish renders need translated labels for the UI.

export const ELEMENT_LABELS_ES: Record<string, string> = {
  Fire: 'Fuego',
  Water: 'Agua',
  Earth: 'Tierra',
  Air: 'Aire',
}

// ─── court / pip rank labels ──────────────────────────────────────────────
// Used in the "Other 3s" heading. EN keeps card-data shape; ES gets the
// proper plural form.

export const RANK_LABELS_ES: Record<string, string> = {
  Page: 'Sotas',
  Knight: 'Caballeros',
  Queen: 'Reinas',
  King: 'Reyes',
  Ace: 'Ases',
  '2': 'doses',
  '3': 'treses',
  '4': 'cuatros',
  '5': 'cincos',
  '6': 'seises',
  '7': 'sietes',
  '8': 'ochos',
  '9': 'nueves',
  '10': 'dieces',
}
