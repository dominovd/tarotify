import type { Metadata } from 'next'
import Link from 'next/link'
import { CARDS, SUITS } from '@/lib/cards'

export const metadata: Metadata = {
  title: 'Tarot Card Meanings — All 78 Cards | Tarotify',
  description: 'Complete guide to all 78 tarot card meanings — upright and reversed, plus love, career and spiritual insights for every card.',
  alternates: { canonical: 'https://tarotify.app/cards' },
}

const YN_STYLE: Record<string, { bg: string; color: string }> = {
  yes:   { bg: 'rgba(45,122,79,.2)',   color: '#3daa6a' },
  no:    { bg: 'rgba(122,45,45,.2)',   color: '#aa3d3d' },
  maybe: { bg: 'rgba(122,94,26,.2)',   color: '#c9a84c' },
}

export default function CardsIndex() {
  return (
    <div style={{ maxWidth: 1000, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2rem', marginBottom: '.75rem' }}>📚</div>
        <h1 style={{ fontFamily:"'Cinzel',serif", fontSize:'clamp(1.5rem,4vw,2.1rem)', color:'var(--gold)', marginBottom:'.75rem' }}>
          Tarot Card Meanings
        </h1>
        <p style={{ color:'var(--muted)', maxWidth:520, margin:'0 auto', lineHeight:1.7 }}>
          All 78 cards — upright and reversed meanings, yes/no guidance, and insights for love, career and personal growth.
        </p>
      </div>

      {SUITS.map(suit => {
        const suitCards = CARDS.filter(c => c.suit === suit.key)
        return (
          <section key={suit.key} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'1rem', letterSpacing:'.1em', marginBottom:'1.25rem', paddingBottom:'.6rem', borderBottom:'1px solid var(--border)' }}>
              {suit.label}
            </h2>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(150px,1fr))', gap:'.75rem' }}>
              {suitCards.map(card => {
                const yn = YN_STYLE[card.yn]
                return (
                  <Link key={card.slug} href={`/cards/${card.slug}`} style={{ display:'flex', flexDirection:'column', gap:'.4rem', padding:'1rem', background:'rgba(255,255,255,.03)', border:'1px solid var(--border)', borderRadius:12, transition:'border-color .2s, background .2s' }}>
                    <div style={{ fontSize:'1.6rem', textAlign:'center' }}>{card.symbol}</div>
                    <div style={{ fontFamily:"'Cinzel',serif", fontSize:'.78rem', color:'var(--gold)', letterSpacing:'.05em', textAlign:'center', lineHeight:1.3 }}>{card.name}</div>
                    <div style={{ display:'flex', justifyContent:'center', marginTop:'auto' }}>
                      <span style={{ padding:'.15rem .5rem', borderRadius:20, fontSize:'.62rem', fontFamily:"'Cinzel',serif", letterSpacing:'.06em', background: yn.bg, color: yn.color }}>
                        {card.yn.toUpperCase()}
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        )
      })}
    </div>
  )
}
