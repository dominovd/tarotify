'use client'
import { useDeck, type Deck } from '@/hooks/useDeck'

export default function DeckSwitcher() {
  const { deck, setDeck } = useDeck()

  const options: { id: Deck; label: string }[] = [
    { id: 'classic', label: 'Nouveau' },
    { id: 'pastel',  label: 'Pastel'  },
    { id: 'rws',     label: 'Classic' },
  ]

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem' }}>
      <span style={{ fontSize: '.65rem', color: 'var(--muted)', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', opacity: .6 }}>
        Deck
      </span>
      <div style={{ display: 'flex', borderRadius: 8, overflow: 'hidden', border: '1px solid var(--border)' }}>
        {options.map(opt => (
          <button
            key={opt.id}
            onClick={() => setDeck(opt.id)}
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '.65rem',
              letterSpacing: '.07em',
              padding: '.25rem .7rem',
              cursor: 'pointer',
              border: 'none',
              background: deck === opt.id ? 'rgba(201,168,76,.15)' : 'transparent',
              color: deck === opt.id ? 'var(--gold)' : 'var(--muted)',
              transition: 'background .2s, color .2s',
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}
