// ════════════════════════════════════════════════════════════════════════════
// /pricing — Free now, premium tier on the roadmap
// ════════════════════════════════════════════════════════════════════════════
//
// Editorial position: TarotAxis is currently 100% free. The page exists
// to make that obvious, to set expectations about what a future premium
// tier could add, and to commit publicly that current free features will
// never become paywalled.
//
// The "premium" list is a roadmap, not a checkout — there is no Lemon
// Squeezy / Stripe button on this page. When premium goes live we will
// add real CTAs in a follow-up sprint.
// ════════════════════════════════════════════════════════════════════════════

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Pricing — TarotAxis is Free | TarotAxis',
  description:
    'TarotAxis is 100% free today — AI tarot readings, the full 78-card library, cloud-synced journal, spreads and tools open to everyone. A premium tier is planned for 2026, layered on top — current free features stay free forever.',
  alternates: {
    canonical: 'https://tarotaxis.com/pricing',
    languages: {
      en: 'https://tarotaxis.com/pricing',
      es: 'https://tarotaxis.com/es/precios',
      'x-default': 'https://tarotaxis.com/pricing',
    },
  },
  openGraph: {
    title: 'TarotAxis is Free — Premium Tier Coming 2026',
    description:
      'AI tarot readings, the full 78-card library, cloud-synced journal — all free today. Premium tier on the roadmap will be additive only.',
    type: 'website',
  },
}

// ─── content lists ─────────────────────────────────────────────────────────

const FREE_FEATURES: { label: string; sub?: string }[] = [
  { label: '5 AI readings per day', sub: '1 per day for guests, powered by Claude' },
  { label: 'Every one of the 78 cards', sub: 'upright, reversed, "as feelings", love, career, spirit' },
  { label: 'Daily card, Yes/No oracle, Birth Card, Tarot Quiz' },
  { label: 'All spreads + Reading Analyser', sub: 'analyse a reading you drew at home' },
  { label: 'Cloud-synced journal + pattern memory', sub: 'top cards, recurring themes after 10 readings' },
  { label: 'Email any reading to yourself' },
  { label: 'Share readings as an image' },
  { label: 'Knowledge graph on every card page', sub: 'often-appears-with, same number, same element' },
  { label: 'Live tarot trends', sub: 'most-drawn cards across the site, updated daily' },
]

const PREMIUM_PLAN: { label: string; sub?: string }[] = [
  { label: 'Unlimited AI readings', sub: 'no daily cap' },
  { label: 'Deeper interpretations', sub: 'larger model + longer synthesis on every spread' },
  { label: 'Custom spread designer', sub: 'name your own positions; reusable across readings' },
  { label: 'PDF export of any reading or your full journal' },
  { label: 'Public shareable reading links', sub: 'opt-in /shared/{token} URL anyone can open' },
  { label: 'Monthly AI reflection on your journal', sub: 'AI synthesises your patterns at month‑end' },
  { label: 'Personalised daily card by email', sub: 'based on your birth date and reading history' },
  { label: 'Early access to new languages', sub: 'French / Portuguese / German when they launch' },
]

const FAQ = [
  {
    q: 'Will any current free feature become premium-only?',
    a: 'No. The 78 card pages, AI readings, journal, spreads, daily card, Yes/No, quiz, trends and every learning page on the site will stay free permanently. Premium is purely additive — new features, not gated existing ones.',
  },
  {
    q: 'When exactly will premium launch?',
    a: 'When three conditions line up: TarotAxis has enough monthly visitors to make subscription infrastructure worth maintaining, we have a payment provider that works with both tarot content and the operator’s jurisdiction, and we have validated which specific features people would actually pay for. Realistically, later in 2026.',
  },
  {
    q: 'Can I support TarotAxis in another way today?',
    a: 'The two most useful things are sharing the site with friends who read tarot and sending feedback to info@tarotaxis.com about what you would actually pay for. The free version improves faster when there is a clear signal of what to invest in.',
  },
]

// ─── styles ────────────────────────────────────────────────────────────────

const wrapper: React.CSSProperties = {
  maxWidth: 880,
  margin: '0 auto',
  padding: '2.5rem 1.5rem 5rem',
}

const heroEyebrow: React.CSSProperties = {
  fontFamily: "'Cinzel',serif",
  fontSize: '.66rem',
  letterSpacing: '.22em',
  color: 'var(--gold)',
  opacity: .55,
  textTransform: 'uppercase',
  marginBottom: '.5rem',
}

const heroH1: React.CSSProperties = {
  fontFamily: "'Cinzel',serif",
  fontSize: 'clamp(1.6rem,4.4vw,2.2rem)',
  color: 'var(--gold)',
  letterSpacing: '.03em',
  marginBottom: '.75rem',
}

const heroP: React.CSSProperties = {
  color: 'var(--muted)',
  fontSize: '.96rem',
  lineHeight: 1.7,
  maxWidth: 620,
  margin: '0 auto',
}

const tierEyebrow: React.CSSProperties = {
  fontFamily: "'Cinzel',serif",
  fontSize: '.7rem',
  letterSpacing: '.16em',
  color: 'var(--gold)',
  opacity: .85,
  textTransform: 'uppercase',
}

const priceLine: React.CSSProperties = {
  display: 'flex',
  alignItems: 'baseline',
  gap: '.5rem',
  marginTop: '.7rem',
}

const priceBig: React.CSSProperties = {
  fontFamily: "'Cinzel',serif",
  fontSize: '2rem',
  color: 'var(--gold)',
}

const priceSub: React.CSSProperties = {
  color: 'var(--muted)',
  fontSize: '.82rem',
}

const featureList: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '.75rem',
}

const sectionTitle: React.CSSProperties = {
  fontFamily: "'Cinzel',serif",
  fontSize: '1.05rem',
  letterSpacing: '.06em',
  color: 'var(--gold)',
  marginTop: '3rem',
  marginBottom: '1rem',
}

// ─── page ──────────────────────────────────────────────────────────────────

export default function PricingPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <div style={wrapper}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
        <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Pricing</span>
      </nav>

      {/* Hero */}
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={heroEyebrow}>Pricing</div>
        <h1 style={heroH1}>Free today. Free forever for what is here today.</h1>
        <p style={heroP}>
          TarotAxis is funded by patience, not paywalls. AI readings, the full 78-card library, your
          journal, the spreads and tools — open to everyone. A premium tier is planned for later in
          2026 as a strictly additive layer on top.
        </p>
      </header>

      {/* Two-column tier grid */}
      <div style={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>

        {/* FREE */}
        <section style={{
          background: 'linear-gradient(135deg, rgba(201,168,76,.07), rgba(201,168,76,.015))',
          border: '1px solid rgba(201,168,76,.22)',
          borderRadius: 14,
          padding: '1.75rem 1.5rem',
        }}>
          <div style={tierEyebrow}>Free — today</div>
          <div style={priceLine}>
            <span style={priceBig}>$0</span>
            <span style={priceSub}>no account required for most features</span>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.65, marginTop: '1rem', marginBottom: '1.25rem' }}>
            Everything below works right now. Create a free account to unlock the 5/day reading
            quota and cloud-synced journal.
          </p>
          <ul style={featureList}>
            {FREE_FEATURES.map(f => (
              <li key={f.label} style={{ display: 'flex', gap: '.6rem' }}>
                <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: 2 }}>✦</span>
                <div>
                  <div style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.5 }}>
                    {f.label}
                  </div>
                  {f.sub && (
                    <div style={{ color: 'var(--muted)', fontSize: '.76rem', lineHeight: 1.5, opacity: .8, marginTop: '.15rem' }}>
                      {f.sub}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
            <Link href="/auth/signup" style={{
              display: 'inline-block', padding: '.65rem 1.2rem', borderRadius: 10,
              border: '1px solid var(--gold)', background: 'rgba(201,168,76,.12)',
              color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.82rem',
              letterSpacing: '.06em', textDecoration: 'none',
            }}>
              Create free account
            </Link>
            <Link href="/free-reading" style={{
              display: 'inline-block', padding: '.65rem 1.2rem', borderRadius: 10,
              border: '1px solid var(--border)', background: 'var(--on-bg-04)',
              color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem',
              letterSpacing: '.06em', textDecoration: 'none',
            }}>
              Try a reading first
            </Link>
          </div>
        </section>

        {/* PREMIUM */}
        <section style={{
          background: 'var(--on-bg-03)',
          border: '1px dashed rgba(201,168,76,.35)',
          borderRadius: 14,
          padding: '1.75rem 1.5rem',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '.5rem', flexWrap: 'wrap' }}>
            <div style={tierEyebrow}>Premium — coming 2026</div>
            <span style={{
              padding: '.2rem .65rem', borderRadius: 16, fontSize: '.6rem',
              fontFamily: "'Cinzel',serif", letterSpacing: '.12em', textTransform: 'uppercase',
              background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)',
              color: 'var(--gold)',
            }}>
              Not live yet
            </span>
          </div>
          <div style={priceLine}>
            <span style={priceBig}>≤ $10</span>
            <span style={priceSub}>per month, target. Annual saves ~35%.</span>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.65, marginTop: '1rem', marginBottom: '1.25rem' }}>
            Everything in Free, plus the additions below. No checkout yet — this is the roadmap.
          </p>
          <ul style={featureList}>
            {PREMIUM_PLAN.map(f => (
              <li key={f.label} style={{ display: 'flex', gap: '.6rem' }}>
                <span style={{ color: 'var(--gold)', opacity: .65, flexShrink: 0, marginTop: 2 }}>◦</span>
                <div>
                  <div style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.5 }}>
                    {f.label}
                  </div>
                  {f.sub && (
                    <div style={{ color: 'var(--muted)', fontSize: '.76rem', lineHeight: 1.5, opacity: .8, marginTop: '.15rem' }}>
                      {f.sub}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <p style={{ color: 'var(--muted)', fontSize: '.76rem', lineHeight: 1.6, marginTop: '1.5rem', fontStyle: 'italic', opacity: .85 }}>
            Want a feature on this list when it ships? Email{' '}
            <a href="mailto:info@tarotaxis.com" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              info@tarotaxis.com
            </a>{' '}
            and we will let you know directly.
          </p>
        </section>
      </div>

      {/* FAQ */}
      <h2 style={sectionTitle}>Frequently asked questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.65rem' }}>
        {FAQ.map(({ q, a }) => (
          <div key={q} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>
              {q}
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>
              {a}
            </p>
          </div>
        ))}
      </div>

      {/* Pointer to methodology — E-E-A-T anchor */}
      <section style={{
        marginTop: '3rem',
        padding: '1.75rem',
        background: 'var(--on-bg-02)',
        border: '1px solid rgba(201,168,76,.15)',
        borderRadius: 14,
        textAlign: 'center',
      }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.7rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.75rem' }}>
          Curious how the readings work?
        </div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
          The interpretive framework, AI guardrails and editorial stance behind every reading.
        </p>
        <Link href="/methodology" style={{
          display: 'inline-block', padding: '.7rem 1.8rem', background: 'transparent',
          border: '1px solid var(--gold)', borderRadius: 10, color: 'var(--gold)',
          fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em',
          textDecoration: 'none',
        }}>
          ✦ Read the methodology
        </Link>
      </section>
    </div>
  )
}
