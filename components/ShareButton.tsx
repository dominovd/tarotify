'use client'
import { useState } from 'react'

interface Props {
  slug: string
  reversed?: boolean
  type?: 'daily' | 'birth'
  cardName: string
  suitLabel?: string
  element?: string
  keywords?: string[]
  text?: string
}

export default function ShareButton({ slug, reversed = false, type, cardName, suitLabel = '', element = '', keywords = [], text = '' }: Props) {
  const [state, setState] = useState<'idle' | 'copied'>('idle')

  const params = new URLSearchParams({
    slug,
    n: cardName,
    s: suitLabel,
    e: element,
    k: keywords.slice(0, 4).join(','),
    t: text.slice(0, 130),
    ...(reversed ? { rev: '1' } : {}),
    ...(type === 'daily' ? { type: 'daily' } : {}),
  })
  const ogUrl   = `https://tarotify.app/og?${params.toString()}`
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

  function handleViewImage() {
    window.open(ogUrl, '_blank', 'noopener')
  }

  const btnBase: React.CSSProperties = {
    fontFamily: "'Cinzel',serif",
    fontSize: '.78rem',
    letterSpacing: '.06em',
    background: 'transparent',
    border: '1px solid var(--border)',
    borderRadius: 8,
    padding: '.4rem 1rem',
    cursor: 'pointer',
    transition: 'border-color .2s, color .2s',
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', flexWrap: 'wrap', justifyContent: 'center' }}>
      <span style={{ color: 'var(--muted)', fontSize: '.82rem' }}>Share</span>
      <button
        onClick={handleShare}
        style={{ ...btnBase, color: state === 'copied' ? 'var(--muted)' : 'var(--gold)', borderColor: state === 'copied' ? 'var(--border)' : 'rgba(201,168,76,.4)' }}
      >
        {state === 'copied' ? '✓ Copied!' : '✦ Share card'}
      </button>
      <button
        onClick={handleViewImage}
        style={{ ...btnBase, color: 'var(--muted)' }}
        title="Open shareable image (right-click to save)"
      >
        ↗ View image
      </button>
    </div>
  )
}
