// Pricing page — currently "TarotAxis is free" mode. Paid tier infrastructure
// (Sprint 2 Paddle code in app/api/paddle/*) is deployed but inactive while
// a tarot+UA-compatible payment provider is identified. See memory:
// llm_discoverability_strategy.md and monetisation_plan_pointer.md.

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing — TarotAxis is Free | TarotAxis',
  description: 'TarotAxis is currently 100% free — every reading, card meaning, spread, and learning page open to everyone. A premium tier is planned for 2026.',
  alternates: {
    canonical: 'https://tarotaxis.com/pricing',
    languages: {
      'en': 'https://tarotaxis.com/pricing',
      'es': 'https://tarotaxis.com/es/precios',
      'x-default': 'https://tarotaxis.com/pricing',
    },
  },
  openGraph: {
    title: 'TarotAxis is Free',
    description: 'Every reading, card meaning, spread, and learning page is open to everyone. Premium tier planned for 2026.',
    type: 'website',
  },
}

const FAQ = [
  {
    q: 'Is TarotAxis really completely free?',
    a: 'Yes. Every reading, card meaning, spread, lunar ritual, combination page, and learning guide on the site is open to everyone with no account required. The 789+ indexed pages — including all 78 cards in full upright, reversed, feelings, and love contexts — are accessible without payment.',
  },
  {
    q: 'How is TarotAxis funded if it is free?',
    a: 'For now, the site is built and maintained without revenue. A premium tier — cloud-synced journal, priority daily card email, AI-assisted interpretation — is planned for 2026 as an optional layer on top of the free site. The free side will stay free; premium will add new features, not gate existing ones.',
  },
  {
    q: 'When will the premium tier launch?',
    a: 'When the audience reaches a size that makes the subscription infrastructure worth maintaining, and when a payment provider that works with tarot content and our jurisdiction is in place. Likely later in 2026. There is no waitlist yet — sign up for a free account if you want to be notified.',
  },
  {
    q: 'Will any of the current free features become premium-only?',
    a: 'No. The 789+ public pages, all interactive tools (Yes/No, Free Reading, Quiz, Reading Analyser, Combination Calculator, Daily Card, Birth Card), and the bilingual experience (English + Español) stay free permanently. Premium will be purely additive.',
  },
  {
    q: 'Can I support TarotAxis some other way?',
    a: 'For the moment, no formal support channel is set up. The most useful contributions are sharing the site with friends who read tarot, linking to specific card or spread pages from your own writing, and sending feedback (info@tarotaxis.com) about what you would actually pay for if a premium tier launched.',
  },
]

export default async function PricingPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
        <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Pricing</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '1.4rem', color: 'var(--gold)', opacity: .55, marginBottom: '.75rem', letterSpacing: '.2em' }}>✦ ☽ ◈</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4.4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem', letterSpacing: '.04em' }}>
          TarotAxis is free.
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 620, margin: '0 auto', lineHeight: 1.7 }}>
          Every reading, every card meaning, every spread, every lunar ritual — open to everyone, no account required. A premium tier is planned for 2026, layered on top of the free site.
        </p>
      </div>

      {/* What is currently free — single panel */}
      <div style={{ background: 'linear-gradient(135deg, rgba(201,168,76,.06), rgba(201,168,76,.01))', border: '1px solid rgba(201,168,76,.18)', borderRadius: 14, padding: '2rem 1.75rem', marginBottom: '2rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .8, textTransform: 'uppercase', marginBottom: '.6rem' }}>
          What you get today — free
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '.4rem', marginBottom: '1.25rem' }}>
          <span style={{ fontFamily: "'Cinzel',serif", fontSize: '2rem', color: 'var(--gold)' }}>$0</span>
          <span style={{ color: 'var(--muted)', fontSize: '.85rem' }}>no account required</span>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.65rem' }}>
          {[
            'Full 78-card readings — three-card, Celtic Cross, year-ahead, 30+ themed spreads',
            '78 card pages with upright, reversed, feelings, love, career, and spiritual long-form readings',
            '78 yes/no oracle pages + interactive Yes/No draw',
            'Daily Card — visible on the site every day, free for everyone',
            'Tarot Quiz, Reading Analyser, Combination Calculator, Birth Card calculator',
            'Local-device journal (last 20 entries)',
            'Bilingual experience — English + Español, with full hreflang',
            '~1,176 combination pages — 40 hand-curated nuanced readings + signal-engine output for the rest',
          ].map(item => (
            <li key={item} style={{ display: 'flex', gap: '.6rem', color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.65 }}>
              <span style={{ color: 'var(--gold)', flexShrink: 0 }}>✦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Premium coming soon — informational, no checkout */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px dashed rgba(201,168,76,.3)', borderRadius: 14, padding: '1.75rem 1.75rem', marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem', flexWrap: 'wrap', marginBottom: '.85rem' }}>
          <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', textTransform: 'uppercase', opacity: .8 }}>
            Premium — coming 2026
          </span>
          <span style={{ padding: '.2rem .65rem', background: 'rgba(201,168,76,.12)', border: '1px solid rgba(201,168,76,.25)', borderRadius: 16, fontSize: '.62rem', fontFamily: "'Cinzel',serif", letterSpacing: '.1em', color: 'var(--gold)', textTransform: 'uppercase' }}>
            Not live yet
          </span>
        </div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          A premium tier is planned for later in 2026, layered on top of the free site. Free features stay free — premium will be purely additive. The likely additions:
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.55rem' }}>
          {[
            'Cloud-synced journal across all your devices',
            'Unlimited reading history beyond the 20-entry local cap',
            'Daily card email an hour earlier than the free list',
            'AI-assisted reading interpretation (in development)',
            'Pin favourite cards, spreads, and combinations',
          ].map(item => (
            <li key={item} style={{ display: 'flex', gap: '.6rem', color: 'var(--text)', fontSize: '.84rem', lineHeight: 1.6, opacity: .85 }}>
              <span style={{ color: 'var(--gold)', flexShrink: 0, opacity: .65 }}>◦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p style={{ color: 'var(--muted)', fontSize: '.78rem', lineHeight: 1.7, marginTop: '1.25rem', marginBottom: 0, fontStyle: 'italic' }}>
          No payment is being collected yet. There is no waitlist — sign up for a free account if you want to be notified when premium launches.
        </p>
      </div>

      {/* FAQ */}
      <h2 style={{ fontFamily: "'Cinzel',serif", fontSize: '1.05rem', letterSpacing: '.06em', color: 'var(--gold)', marginBottom: '1rem' }}>
        Frequently Asked Questions
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', marginBottom: '2.5rem' }}>
        {FAQ.map(({ q, a }) => (
          <div key={q} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{q}</div>
            <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
          </div>
        ))}
      </div>

      {/* Methodology pointer — links to E-E-A-T anchor */}
      <div style={{ textAlign: 'center', background: 'var(--on-bg-02)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14, padding: '1.75rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .6, textTransform: 'uppercase', marginBottom: '.75rem' }}>
          Curious how readings work?
        </div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
          The interpretive framework, sources, and editorial stance behind every reading on the site.
        </p>
        <Link href="/methodology" style={{ display: 'inline-block', padding: '.8rem 2rem', background: 'transparent', border: '1px solid var(--gold)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em', textDecoration: 'none' }}>
          ✦ Read the methodology
        </Link>
      </div>
    </div>
  )
}
