import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tarot Spreads — Layouts for Every Reading | Tarotify',
  description: 'Discover the best tarot card spreads — from the classic Celtic Cross to simple three-card layouts. Learn how to use each spread for love, career and personal growth.',
  alternates: { canonical: 'https://tarotify.app/spreads' },
}

const SPREADS = [
  {
    slug: 'celtic-cross',
    name: 'Celtic Cross',
    cards: 10,
    level: 'Intermediate',
    desc: 'The most comprehensive tarot spread in the world. Ten cards reveal the full picture of any situation — past, present, future, hidden influences and outcome.',
    tags: ['Deep readings', 'Any question', 'Complex situations'],
  },
]

const COMING_SOON = [
  { name: 'Three-Card Spread', cards: 3, desc: 'Past · Present · Future — the perfect starting point for any reading.' },
  { name: 'Love Spread', cards: 5, desc: 'Explore relationship dynamics, what each person brings and the path forward.' },
  { name: 'One-Card Daily', cards: 1, desc: 'Draw a single card each morning for a daily theme and intention.' },
  { name: 'Year Ahead', cards: 12, desc: 'One card per month — a roadmap for the year in front of you.' },
]

export default function SpreadsPage() {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontFamily:"'Cinzel',serif", fontSize:'clamp(1.5rem,4vw,2.1rem)', color:'var(--gold)', marginBottom:'.75rem' }}>
          Tarot Spreads
        </h1>
        <p style={{ color:'var(--muted)', maxWidth:500, margin:'0 auto', lineHeight:1.8 }}>
          A tarot spread is the map for your reading — the number of cards drawn and the meaning of each position. Choose the spread that matches your question.
        </p>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:'1rem', marginBottom:'3rem' }}>
        {SPREADS.map(s => (
          <Link key={s.slug} href={`/spreads/${s.slug}`} style={{ display:'block', background:'rgba(255,255,255,.03)', border:'1px solid rgba(201,168,76,.3)', borderRadius:14, padding:'1.5rem', transition:'border-color .2s' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:'1rem', flexWrap:'wrap', marginBottom:'.6rem' }}>
              <div style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'1.05rem', letterSpacing:'.04em' }}>{s.name}</div>
              <div style={{ display:'flex', gap:'.5rem' }}>
                <span style={{ padding:'.2rem .6rem', borderRadius:20, fontSize:'.65rem', background:'rgba(201,168,76,.1)', color:'var(--gold)', fontFamily:"'Cinzel',serif", letterSpacing:'.06em' }}>{s.cards} cards</span>
                <span style={{ padding:'.2rem .6rem', borderRadius:20, fontSize:'.65rem', background:'rgba(255,255,255,.04)', color:'var(--muted)', fontFamily:"'Cinzel',serif", letterSpacing:'.06em' }}>{s.level}</span>
              </div>
            </div>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.7, marginBottom:'.75rem' }}>{s.desc}</p>
            <div style={{ display:'flex', gap:'.4rem', flexWrap:'wrap' }}>
              {s.tags.map(t => (
                <span key={t} style={{ padding:'.15rem .5rem', background:'rgba(255,255,255,.03)', border:'1px solid var(--border)', borderRadius:20, fontSize:'.65rem', color:'var(--muted)' }}>{t}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <div>
        <div style={{ fontFamily:"'Cinzel',serif", fontSize:'.72rem', letterSpacing:'.14em', color:'var(--gold)', opacity:.5, textTransform:'uppercase', marginBottom:'1rem' }}>Coming Soon</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))', gap:'.75rem' }}>
          {COMING_SOON.map(s => (
            <div key={s.name} style={{ background:'rgba(255,255,255,.02)', border:'1px solid var(--border)', borderRadius:12, padding:'1rem', opacity:.55 }}>
              <div style={{ display:'flex', justifyContent:'space-between', marginBottom:'.4rem' }}>
                <span style={{ fontFamily:"'Cinzel',serif", fontSize:'.82rem', color:'var(--gold)' }}>{s.name}</span>
                <span style={{ fontSize:'.65rem', color:'var(--muted)' }}>{s.cards}c</span>
              </div>
              <p style={{ color:'var(--muted)', fontSize:'.78rem', lineHeight:1.5, margin:0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
