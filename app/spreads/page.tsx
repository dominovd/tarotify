import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tarot Spreads — Layouts for Every Reading | TarotAxis',
  description: 'Discover the best tarot card spreads — from the classic Celtic Cross to simple three-card layouts. Learn how to use each spread for love, career and personal growth.',
  alternates: { canonical: 'https://tarotaxis.com/spreads' },
}

const SPREADS = [
  {
    slug: 'three-card',
    name: 'Three Card Spread',
    cards: 3,
    level: 'Beginner',
    desc: 'The most versatile spread in tarot. Past · Present · Future — or any of five other variations. The perfect daily practice and the ideal starting point for every reader.',
    tags: ['Daily use', 'Beginners', 'Quick guidance'],
  },
  {
    slug: 'celtic-cross',
    name: 'Celtic Cross',
    cards: 10,
    level: 'Intermediate',
    desc: 'The most comprehensive tarot spread in the world. Ten cards reveal the full picture of any situation — past, present, future, hidden influences and outcome.',
    tags: ['Deep readings', 'Any question', 'Complex situations'],
  },
  {
    slug: 'love',
    name: 'Love Spread',
    cards: 5,
    level: 'Beginner',
    desc: 'Four dedicated layouts for love and relationships — from a new connection check-in to a stay-or-go crossroads reading. Honest guidance on the heart.',
    tags: ['Relationships', 'Singles', 'Romance'],
  },
  {
    slug: 'year-ahead',
    name: 'Year Ahead',
    cards: 13,
    level: 'Intermediate',
    desc: 'One card per month plus an overarching theme — a complete energetic map of the year ahead. The most powerful annual ritual in tarot.',
    tags: ['2026', 'Annual reading', 'New year'],
  },
  {
    slug: 'full-moon',
    name: 'Full Moon Spread',
    cards: 6,
    level: 'Beginner',
    desc: 'Release what no longer serves you and celebrate what has come to fruition. A ritual spread for the peak of the lunar cycle.',
    tags: ['Lunar ritual', 'Release', 'Gratitude'],
  },
  {
    slug: 'horseshoe',
    name: 'Horseshoe Spread',
    cards: 7,
    level: 'Intermediate',
    desc: 'A classic 7-card arc covering past, present, hidden influences, obstacles, external forces, advice and outcome.',
    tags: ['Classic layout', 'Any question', 'Detailed'],
  },
  {
    slug: 'soulmate',
    name: 'Soulmate Spread',
    cards: 5,
    level: 'Beginner',
    desc: 'Are they the one? Five cards reveal your energy, what you truly seek, what you need, the path forward, and the nature of your connection.',
    tags: ['Love & Relationships', 'Soulmate', 'Singles'],
  },
  {
    slug: 'career',
    name: 'Career Spread',
    cards: 5,
    level: 'Beginner',
    desc: 'Three focused layouts for work, purpose and decisions — from a 5-card career direction reading to a 3-card purpose & calling spread.',
    tags: ['Career', 'Purpose', 'Work & Money'],
  },
  {
    slug: 'weekly',
    name: 'Weekly Spread',
    cards: 7,
    level: 'Beginner',
    desc: 'One card for every day of the week — a complete energetic forecast to set intentions on Sunday and navigate each day with clarity.',
    tags: ['Weekly ritual', 'Daily guidance', 'Planning'],
  },
]

const COMING_SOON = [
  { name: 'One-Card Daily', cards: 1, desc: 'Draw a single card each morning for a daily theme and intention.' },
  { name: 'New Moon Spread', cards: 5, desc: 'Set intentions and plant seeds for the cycle ahead under the dark moon.' },
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
