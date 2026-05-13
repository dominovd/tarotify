'use client'
import { useState, useEffect } from 'react'

// Deck ids are stored in localStorage — do NOT rename existing values
// without a migration. UI labels can change freely (see DeckSwitcher).
// - 'classic' = our Art Nouveau (Midjourney) set in /cards/      → labelled "Nouveau" in UI
// - 'pastel'  = the Pastel set in /cards-pastel/                 → labelled "Pastel"
// - 'rws'     = public-domain Rider-Waite-Smith in /cards-rws/   → labelled "Classic"
export type Deck = 'classic' | 'pastel' | 'rws'

const KEY = 'tarotify-deck'

export function useDeck() {
  const [deck, setDeckState] = useState<Deck>('classic')

  useEffect(() => {
    const stored = localStorage.getItem(KEY)
    if (stored === 'pastel' || stored === 'rws') setDeckState(stored)
  }, [])

  function setDeck(d: Deck) {
    setDeckState(d)
    localStorage.setItem(KEY, d)
  }

  function cardSrc(slug: string) {
    if (deck === 'pastel') return `/cards-pastel/${slug}.webp`
    if (deck === 'rws')    return `/cards-rws/${slug}.webp`
    return `/cards/${slug}.webp`
  }

  return { deck, setDeck, cardSrc }
}
