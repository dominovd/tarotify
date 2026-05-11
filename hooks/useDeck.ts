'use client'
import { useState, useEffect } from 'react'

export type Deck = 'classic' | 'pastel'

const KEY = 'tarotify-deck'

export function useDeck() {
  const [deck, setDeckState] = useState<Deck>('classic')

  useEffect(() => {
    const stored = localStorage.getItem(KEY)
    if (stored === 'pastel') setDeckState('pastel')
  }, [])

  function setDeck(d: Deck) {
    setDeckState(d)
    localStorage.setItem(KEY, d)
  }

  function cardSrc(slug: string) {
    return deck === 'pastel' ? `/cards-pastel/${slug}.webp` : `/cards/${slug}.webp`
  }

  return { deck, setDeck, cardSrc }
}
