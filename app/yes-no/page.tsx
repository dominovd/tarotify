import type { Metadata } from 'next'
import Link from 'next/link'
import YesNoClient from './YesNoClient'
import { CARDS } from '@/lib/cards'

export const metadata: Metadata = {
  title: 'Yes or No Tarot — Free One-Card Oracle | Tarotify',
  description: 'Ask a yes or no question and draw a single tarot card for an instant oracle answer. Free yes no tarot reading with all 78 cards.',
  alternates: { canonical: 'https://tarotify.app/yes-no' },
}

const SUITS = [
  { key: 'major',     label: 'Major Arcana' },
  { key: 'wands',     label: 'Wands' },
  { key: 'cups',      label: 'Cups' },
  { key: 'swords',    label: 'Swords' },
  { key: 'pentacles', label: 'Pentacles' },
] as const

const YN_COLOR: Record<string, string> = {
  yes:   '#3daa6a',
  no:    '#aa3d3d',
  maybe: '#c9a84c',
}

export default function YesNoPage() {
  const bySuit = SUITS.map(s => ({
    ...s,
    cards: CARDS.filter(c => c.suit === s.key),
  }))

  return (
    <>
      <YesNoClient />

      {/* Card directory */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 1.5rem 5rem' }}>
        <div style={{ borderTop: '1px solid rgba(201,168,76,.15)', paddingTop: '3rem', marginTop: '1rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.2rem', letterSpacing: '.07em', marginBottom: '.5rem', textAlign: 'center' }}>
            Yes or No by Card
          </h2>
          <p style={{ color: 'var(--muted)', textAlign: 'center', fontSize: '.9rem', marginBottom: '2.5rem', lineHeight: 1.6 }}>
            See the yes/no answer for every card in the deck — upright, reversed and by topic.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {bySuit.map(({ key, label, cards }) => (
              <div key={key}>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.16em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1rem' }}>
                  {label}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: '.6rem' }}>
                  {cards.map(card => (
                    <Link
                      key={card.slug}
                      href={`/yes-no/${card.slug}`}
                      style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '.55rem .85rem', background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 10, textDecoration: 'none', gap: '.4rem' }}
                    >
                      <span style={{ color: 'var(--text)', fontSize: '.82rem', fontFamily: "'Cinzel',serif", letterSpacing: '.03em', lineHeight: 1.3 }}>
                        {card.name}
                      </span>
                      <span style={{ flexShrink: 0, fontSize: '.65rem', fontWeight: 600, letterSpacing: '.08em', color: YN_COLOR[card.yn], border: `1px solid ${YN_COLOR[card.yn]}`, borderRadius: 100, padding: '1px 7px', opacity: .9 }}>
                        {card.yn.toUpperCase()}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
