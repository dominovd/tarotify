'use client'
import { createContext, createElement, useContext, useEffect, useState, type ReactNode } from 'react'

// Deck ids are stored in localStorage — do NOT rename existing values
// without a migration. UI labels can change freely (see DeckSwitcher).
// - 'classic' = our Art Nouveau (Midjourney) set in /cards/      → labelled "Nouveau" in UI
// - 'pastel'  = the Pastel set in /cards-pastel/                 → labelled "Pastel"
// - 'rws'     = public-domain Rider-Waite-Smith in /cards-rws/   → labelled "Classic"
export type Deck = 'classic' | 'pastel' | 'rws'

const KEY = 'tarotify-deck'

interface DeckContextValue {
  deck: Deck
  setDeck: (d: Deck) => void
  cardSrc: (slug: string) => string
}

const DeckContext = createContext<DeckContextValue | null>(null)

export function DeckProvider({ children }: { children: ReactNode }) {
  const [deck, setDeckState] = useState<Deck>('classic')

  // Hydrate from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(KEY)
    if (stored === 'pastel' || stored === 'rws') setDeckState(stored)
  }, [])

  // Listen for cross-tab changes (storage event fires in OTHER tabs only)
  useEffect(() => {
    function onStorage(e: StorageEvent) {
      if (e.key !== KEY) return
      const v = e.newValue
      if (v === 'classic' || v === 'pastel' || v === 'rws') setDeckState(v)
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
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

  return createElement(DeckContext.Provider, { value: { deck, setDeck, cardSrc } }, children)
}

export function useDeck(): DeckContextValue {
  const ctx = useContext(DeckContext)
  if (ctx) return ctx
  // Fallback for components rendered outside the provider (shouldn't happen
  // with the root layout wrapper, but kept safe — falls back to the default
  // Art Nouveau deck and a no-op setter).
  return {
    deck: 'classic',
    setDeck: () => {},
    cardSrc: (slug: string) => `/cards/${slug}.webp`,
  }
}
