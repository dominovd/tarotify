import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tarot Spreads — Layouts for Every Reading | TarotAxis',
  description: 'Discover the best tarot card spreads — from the classic Celtic Cross to simple three-card layouts. Learn how to use each spread for love, career and personal growth.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads',
    languages: {
      'en': 'https://tarotaxis.com/spreads',
      'es': 'https://tarotaxis.com/es/tiradas',
      'x-default': 'https://tarotaxis.com/spreads',
    },
  },
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
  {
    slug: 'new-moon',
    name: 'New Moon Spread',
    cards: 5,
    level: 'Beginner',
    desc: 'A ritual layout for the start of the lunar cycle — what to plant, what to nurture, what to release, and the seed of intention for the month ahead.',
    tags: ['Lunar ritual', 'Intentions', 'New beginnings'],
  },
  {
    slug: 'waning-moon',
    name: 'Waning Moon Spread',
    cards: 4,
    level: 'Beginner',
    desc: 'For the descending phase of the lunar cycle — reflection, integration and creating space before the next new moon arrives.',
    tags: ['Lunar ritual', 'Reflection', 'Integration'],
  },
  {
    slug: 'dark-moon',
    name: 'Dark Moon Spread',
    cards: 3,
    level: 'Intermediate',
    desc: 'A three-card spread for the deepest, most private point of the lunar cycle — shadow work, hidden truth and the parts of you that only speak in stillness.',
    tags: ['Shadow work', 'Inner truth', 'Lunar ritual'],
  },
  {
    slug: 'eclipse',
    name: 'Eclipse Spread',
    cards: 5,
    level: 'Intermediate',
    desc: 'For solar and lunar eclipses — the most charged moments of the astrological year. Five cards for navigating sudden shifts, surfacing truths and accelerated change.',
    tags: ['Eclipse season', 'Sudden shifts', 'Astrology'],
  },
]

const HUBS = [
  {
    slug: 'major',
    name: 'Major Arcana Spreads',
    desc: 'Five spreads using only the 22 Major Arcana — Celtic Cross, Year Ahead, Decision, Shadow Work and Elemental. For pivotal moments when you want the archetypal layer foregrounded.',
    tag: '22 cards',
  },
  {
    slug: 'partner',
    name: 'Partner & Relationship Spreads',
    desc: 'Six dedicated spreads for connection — dating, deepening, soulmate questions, compatibility, love attraction and dating guidance. Grounded, kind and honest.',
    tag: 'Love & connection',
  },
]

const FAQS = [
  {
    q: 'What is the best tarot spread for beginners?',
    a: 'The best beginner tarot spread is usually a one-card pull or a three-card spread. They keep the reading focused, make card relationships easier to see, and help you build confidence before moving into larger layouts like the Celtic Cross.',
  },
  {
    q: 'How do I choose the right tarot spread?',
    a: 'Choose the spread by matching it to the question. Use a quick one-card or three-card spread for daily guidance, a love or partner spread for relationships, a career spread for work decisions, and the Celtic Cross when you need a deeper picture.',
  },
  {
    q: 'Can I use the same spread for love, career and personal growth?',
    a: 'Yes. General spreads such as three-card, horseshoe and Celtic Cross can work for almost any topic. Dedicated love, career and healing spreads are better when you want each card position to speak directly to that life area.',
  },
  {
    q: 'Should I ask yes or no questions with a tarot spread?',
    a: 'You can, but yes or no questions usually work best with a focused one-card reading. Multi-card spreads are stronger for open questions because they show context, advice, blocks and likely outcomes.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export default function SpreadsPage() {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontFamily:"'Cinzel',serif", fontSize:'clamp(1.5rem,4vw,2.1rem)', color:'var(--gold)', marginBottom:'.75rem' }}>
          Tarot Spreads
        </h1>
        <p style={{ color:'var(--muted)', maxWidth:500, margin:'0 auto', lineHeight:1.8 }}>
          A tarot spread is the map for your reading — the number of cards drawn and the meaning of each position. Choose the spread that matches your question.
        </p>
      </div>

      {/* Browse by card count CTA */}
      <Link href="/spreads/by-card-count" style={{ display:'block', background:'linear-gradient(135deg,rgba(201,168,76,.08),rgba(201,168,76,.02))', border:'1px solid rgba(201,168,76,.35)', borderRadius:14, padding:'1.25rem 1.5rem', marginBottom:'2rem', textDecoration:'none' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:'1rem', flexWrap:'wrap' }}>
          <div>
            <div style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'.95rem', letterSpacing:'.04em', marginBottom:'.3rem' }}>
              Browse by Card Count →
            </div>
            <p style={{ color:'var(--muted)', fontSize:'.83rem', lineHeight:1.6, margin:0 }}>
              All spreads grouped by number of cards — from 1-card daily pulls to the 10-card Celtic Cross.
            </p>
          </div>
          <div style={{ display:'flex', gap:'.3rem', flexWrap:'wrap' }}>
            {[1, 3, 5, 7, 10].map(n => (
              <span key={n} style={{ width:28, height:28, borderRadius:'50%', background:'rgba(201,168,76,.08)', border:'1px solid rgba(201,168,76,.25)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'Cinzel',serif", fontSize:'.72rem', color:'var(--gold)' }}>{n}</span>
            ))}
          </div>
        </div>
      </Link>

      {/* Themed hubs */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'.95rem', letterSpacing:'.1em', textTransform:'uppercase', marginBottom:'1rem' }}>
          Themed Collections
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'1rem' }}>
          {HUBS.map(h => (
            <Link key={h.slug} href={`/spreads/${h.slug}`} style={{ display:'block', background:'linear-gradient(135deg,rgba(201,168,76,.08),rgba(201,168,76,.02))', border:'1px solid rgba(201,168,76,.35)', borderRadius:14, padding:'1.25rem 1.4rem', textDecoration:'none' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:'.75rem', marginBottom:'.5rem' }}>
                <span style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'.95rem', letterSpacing:'.04em' }}>{h.name} →</span>
                <span style={{ padding:'.18rem .55rem', borderRadius:20, fontSize:'.62rem', background:'rgba(201,168,76,.12)', color:'var(--gold)', fontFamily:"'Cinzel',serif", letterSpacing:'.06em' }}>{h.tag}</span>
              </div>
              <p style={{ color:'var(--muted)', fontSize:'.85rem', lineHeight:1.65, margin:0 }}>{h.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:'1rem', marginBottom:'3rem' }}>
        {SPREADS.map(s => (
          <Link key={s.slug} href={`/spreads/${s.slug}`} style={{ display:'block', background:'var(--on-bg-03)', border:'1px solid rgba(201,168,76,.3)', borderRadius:14, padding:'1.5rem', transition:'border-color .2s' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:'1rem', flexWrap:'wrap', marginBottom:'.6rem' }}>
              <div style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'1.05rem', letterSpacing:'.04em' }}>{s.name}</div>
              <div style={{ display:'flex', gap:'.5rem' }}>
                <span style={{ padding:'.2rem .6rem', borderRadius:20, fontSize:'.65rem', background:'rgba(201,168,76,.1)', color:'var(--gold)', fontFamily:"'Cinzel',serif", letterSpacing:'.06em' }}>{s.cards} cards</span>
                <span style={{ padding:'.2rem .6rem', borderRadius:20, fontSize:'.65rem', background:'var(--on-bg-04)', color:'var(--muted)', fontFamily:"'Cinzel',serif", letterSpacing:'.06em' }}>{s.level}</span>
              </div>
            </div>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.7, marginBottom:'.75rem' }}>{s.desc}</p>
            <div style={{ display:'flex', gap:'.4rem', flexWrap:'wrap' }}>
              {s.tags.map(t => (
                <span key={t} style={{ padding:'.15rem .5rem', background:'var(--on-bg-03)', border:'1px solid var(--border)', borderRadius:20, fontSize:'.65rem', color:'var(--muted)' }}>{t}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <section style={{ borderTop:'1px solid var(--border)', paddingTop:'2rem' }}>
        <h2 style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'1rem', letterSpacing:'.08em', textTransform:'uppercase', marginBottom:'1rem' }}>
          Tarot Spread FAQ
        </h2>
        <div style={{ display:'grid', gap:'1rem' }}>
          {FAQS.map(faq => (
            <div key={faq.q}>
              <h3 style={{ fontFamily:"'Cinzel',serif", color:'var(--text)', fontSize:'.95rem', letterSpacing:'.03em', marginBottom:'.4rem' }}>
                {faq.q}
              </h3>
              <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.7, margin:0 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
