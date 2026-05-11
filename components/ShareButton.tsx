'use client'
import { useState } from 'react'

interface Props {
  type?: 'daily' | 'birth'
  cardName: string
}

export default function ShareButton({ type, cardName }: Props) {
  const [state, setState] = useState<'idle' | 'copied'>('idle')

  const pageUrl = type === 'daily' ? 'https://tarotify.app/daily' : 'https://tarotify.app/birth-card'
  const shareText = type === 'daily'
    ? `My tarot card of the day is ${cardName}. tarotify.app`
    : `My tarot birth card is ${cardName}. tarotify.app`

  async function handleShare() {
    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share({ title: cardName, text: shareText, url: pageUrl })
        return
      } catch {
        // User cancelled or API unsupported
      }
    }
    try {
      await navigator.clipboard.writeText(pageUrl)
      setState('copied')
      setTimeout(() => setState('idle'), 2000)
    } catch {}
  }

  const btnStyle: React.CSSProperties = {
    fontFamily: "'Cinzel',serif",
    fontSize: '.78rem',
    letterSpacing: '.06em',
    background: 'transparent',
    border: `1px solid ${state === 'copied' ? 'var(--border)' : 'rgba(201,168,76,.4)'}`,
    borderRadius: 8,
    padding: '.4rem 1rem',
    cursor: 'pointer',
    color: state === 'copied' ? 'var(--muted)' : 'var(--gold)',
    transition: 'border-color .2s, color .2s',
  }

  return (
    <button onClick={handleShare} style={btnStyle}>
      {state === 'copied' ? '✓ Copied!' : '✦ Share card'}
    </button>
  )
}
