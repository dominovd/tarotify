'use client'
import { useState } from 'react'

interface Props {
  type?: 'daily' | 'birth'
  cardName: string
  locale?: 'en' | 'es'
}

export default function ShareButton({ type, cardName, locale = 'en' }: Props) {
  const [state, setState] = useState<'idle' | 'copied'>('idle')

  const isEs = locale === 'es'
  const pageUrl = type === 'daily'
    ? isEs ? 'https://tarotaxis.com/es/carta-del-dia' : 'https://tarotaxis.com/daily'
    : isEs ? 'https://tarotaxis.com/es/carta-de-nacimiento' : 'https://tarotaxis.com/birth-card'
  const shareText = type === 'daily'
    ? isEs
      ? `Mi carta del tarot del día es ${cardName}. tarotaxis.com`
      : `My tarot card of the day is ${cardName}. tarotaxis.com`
    : isEs
      ? `Mi carta de nacimiento del tarot es ${cardName}. tarotaxis.com`
      : `My tarot birth card is ${cardName}. tarotaxis.com`

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
      {state === 'copied'
        ? isEs ? '✓ Copiado' : '✓ Copied!'
        : isEs ? '✦ Compartir carta' : '✦ Share card'}
    </button>
  )
}
