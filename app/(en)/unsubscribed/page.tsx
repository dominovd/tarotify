import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Unsubscribed — TarotAxis',
  description: 'You have been unsubscribed from TarotAxis emails.',
  robots: { index: false, follow: false },
}

interface Props {
  searchParams: { status?: string }
}

const MESSAGES: Record<string, { headline: string; body: string; tone: 'ok' | 'warn' | 'err' }> = {
  ok: {
    headline: 'You are unsubscribed',
    body: 'Your email has been removed from the TarotAxis list. It may take a few minutes to fully propagate. Thanks for the time you spent with us — the cards are still on the site whenever you wish to return.',
    tone: 'ok',
  },
  invalid: {
    headline: 'This link is no longer valid',
    body: 'The unsubscribe token did not match. This sometimes happens with very old links. Reply to any recent TarotAxis email with the word "unsubscribe" and we will remove you manually.',
    tone: 'warn',
  },
  missing: {
    headline: 'No email provided',
    body: 'The unsubscribe link is missing the address. If you reached this page by mistake you can safely close it. To unsubscribe, use the link in any TarotAxis email.',
    tone: 'warn',
  },
  error: {
    headline: 'Could not unsubscribe right now',
    body: 'Something went wrong on our end. Please try the link again in a few minutes, or reply to any TarotAxis email with the word "unsubscribe" and we will sort it out manually.',
    tone: 'err',
  },
}

export default function UnsubscribedPage({ searchParams }: Props) {
  const status = searchParams.status || 'ok'
  const msg = MESSAGES[status] || MESSAGES.ok

  const borderColor =
    msg.tone === 'ok' ? 'rgba(95,193,138,0.4)' :
    msg.tone === 'err' ? 'rgba(224,123,123,0.5)' :
    'var(--border)'
  const accentColor =
    msg.tone === 'ok' ? '#5fc18a' :
    msg.tone === 'err' ? '#e07b7b' :
    'var(--gold)'

  return (
    <main style={{ maxWidth: 600, margin: '0 auto', padding: '4rem 1.5rem 5rem', textAlign: 'center' }}>

      <div style={{ fontSize: '2rem', marginBottom: '1rem', opacity: 0.85 }}>
        {msg.tone === 'ok' ? '✓' : msg.tone === 'err' ? '✗' : '⌁'}
      </div>

      <h1 style={{
        fontFamily: "'Cinzel',serif",
        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
        color: accentColor,
        marginBottom: '1rem',
        letterSpacing: '0.04em',
      }}>
        {msg.headline}
      </h1>

      <section style={{
        background: 'rgba(255,255,255,.025)',
        border: `1px solid ${borderColor}`,
        borderRadius: 14,
        padding: '1.5rem 1.75rem',
        marginBottom: '2.5rem',
      }}>
        <p style={{
          color: 'var(--text)',
          fontSize: '0.95rem',
          lineHeight: 1.75,
          margin: 0,
        }}>
          {msg.body}
        </p>
      </section>

      <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link
          href="/"
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.85rem',
            color: 'var(--gold)',
            border: '1px solid var(--gold)',
            borderRadius: 8,
            padding: '0.7rem 1.4rem',
            textDecoration: 'none',
            letterSpacing: '0.05em',
          }}
        >
          Return to TarotAxis →
        </Link>
        <Link
          href="/cards"
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.85rem',
            color: 'var(--muted)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: '0.7rem 1.4rem',
            textDecoration: 'none',
            letterSpacing: '0.05em',
          }}
        >
          Browse all 78 cards
        </Link>
      </div>

    </main>
  )
}
