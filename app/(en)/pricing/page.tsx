import type { Metadata } from 'next'
import Link from 'next/link'
import UpgradeButton from '@/components/UpgradeButton'
import { createClient } from '@/lib/supabase/server'
import { getSubscription, isPremium } from '@/lib/subscription'

export const metadata: Metadata = {
  title: 'Pricing — Free Tarot Forever, Premium for Cloud + AI | TarotAxis',
  description: 'Free tarot stays free. Premium adds cloud-synced journal across devices, the daily card email an hour earlier, and early access to AI features launching in 2026. $7/month or $60/year.',
  alternates: {
    canonical: 'https://tarotaxis.com/pricing',
    languages: {
      'en': 'https://tarotaxis.com/pricing',
      'es': 'https://tarotaxis.com/es/precios',
      'x-default': 'https://tarotaxis.com/pricing',
    },
  },
  openGraph: {
    title: 'TarotAxis Pricing — Free + Premium ($7/mo, $60/yr)',
    description: 'Free tarot stays free. Premium adds cloud journal, priority daily card, early AI access.',
    type: 'website',
  },
}

const FAQ = [
  {
    q: 'Is anything currently free going to become premium-only?',
    a: 'No. The 245+ reading, card, spread, and learning pages stay fully open forever. Premium only adds new features — cloud journal sync, priority daily card email, and early access to AI when it launches.',
  },
  {
    q: 'When does the AI feature launch?',
    a: 'AI-powered reading interpretation is in development. Premium subscribers join the early-access list automatically and are first to get it when it ships. The exact timing depends on traffic — we wait until the audience size justifies the per-request API cost.',
  },
  {
    q: 'How does cancellation work?',
    a: 'Cancel anytime from the Account page. You keep premium access through the end of the billing period you have already paid for. No refunds beyond Paddle’s default 14-day no-questions-asked window, but no proration tricks either — what you paid for, you get.',
  },
  {
    q: 'Will my saved readings move to the cloud automatically when I subscribe?',
    a: 'On first sign-in as a premium user, the site offers a one-click sync: your local-device journal moves to the cloud, then keeps syncing forward. The local copy stays untouched, so nothing is lost if you ever downgrade.',
  },
  {
    q: 'Is the yearly plan really 28% off?',
    a: 'Close — $60/year vs $84 (twelve months at $7) is a 28.5% discount. Effectively two months free, billed once.',
  },
]

export default async function PricingPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const sub = user ? await getSubscription(user.id) : null
  const premium = user ? await isPremium(user.id) : false

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  // Product schema — helps Google show pricing in rich results.
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'TarotAxis Premium',
    description: 'Cloud-synced tarot journal, priority daily card email, and early access to AI-powered tarot interpretation.',
    brand: { '@type': 'Brand', name: 'TarotAxis' },
    offers: [
      {
        '@type': 'Offer',
        name: 'Monthly',
        price: '7.00',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '7.00',
          priceCurrency: 'USD',
          billingDuration: 'P1M',
          billingIncrement: 1,
        },
        availability: 'https://schema.org/InStock',
        url: 'https://tarotaxis.com/pricing',
      },
      {
        '@type': 'Offer',
        name: 'Yearly',
        price: '60.00',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '60.00',
          priceCurrency: 'USD',
          billingDuration: 'P1Y',
          billingIncrement: 1,
        },
        availability: 'https://schema.org/InStock',
        url: 'https://tarotaxis.com/pricing',
      },
    ],
  }

  return (
    <div style={{ maxWidth: 980, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

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
          Free tarot stays free.
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 620, margin: '0 auto', lineHeight: 1.7 }}>
          Premium adds cloud-synced journal across devices, the daily card email an hour earlier, and early access to AI features launching in 2026.
        </p>
      </div>

      {/* Status banner — current user state */}
      {premium && (
        <div style={{ background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.22)', borderRadius: 12, padding: '1rem 1.4rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.86rem', letterSpacing: '.04em' }}>
            ✦ You are on Premium ({sub?.plan === 'premium-yearly' ? 'yearly' : 'monthly'}) · <Link href="/account" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Manage in Account</Link>
          </span>
        </div>
      )}

      {/* Pricing grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {/* Free plan */}
        <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '2rem 1.75rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', marginBottom: '.6rem' }}>
            Free
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '.4rem', marginBottom: '1rem' }}>
            <span style={{ fontFamily: "'Cinzel',serif", fontSize: '2rem', color: 'var(--gold)' }}>$0</span>
            <span style={{ color: 'var(--muted)', fontSize: '.85rem' }}>forever</span>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Everything we currently publish, with no caps or limits. Read, learn, journal locally.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '1.75rem', display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
            {[
              'Full 78-card readings with three-card, Celtic Cross & 30+ spreads',
              '78 card pages — meanings, reversed, feelings, in love, career, spirit',
              '78 yes/no oracle pages + interactive draw',
              'Daily Card — visible on the site every day',
              'Tarot Quiz, Reading Analyser, Combination Calculator',
              'Local-device journal (20 entries)',
              'Bilingual (English + Español)',
            ].map(item => (
              <li key={item} style={{ display: 'flex', gap: '.6rem', color: 'var(--text)', fontSize: '.86rem', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--gold)', flexShrink: 0 }}>✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {user ? (
            <div style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '.82rem', fontFamily: "'Cinzel',serif", letterSpacing: '.04em', padding: '.85rem 0' }}>
              {premium ? 'Included in your plan' : 'You are here'}
            </div>
          ) : (
            <Link
              href="/auth/signup"
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '.85rem 1.75rem',
                borderRadius: 10,
                fontFamily: "'Cinzel',serif",
                fontSize: '.88rem',
                letterSpacing: '.07em',
                textDecoration: 'none',
                color: 'var(--gold)',
                border: '1px solid var(--gold)',
                background: 'transparent',
              }}
            >
              ✦ Create a free account
            </Link>
          )}
        </div>

        {/* Premium plan */}
        <div style={{ background: 'linear-gradient(135deg, rgba(201,168,76,.06), rgba(201,168,76,.01))', border: '1px solid rgba(201,168,76,.28)', borderRadius: 14, padding: '2rem 1.75rem', boxShadow: '0 8px 32px rgba(201,168,76,.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.6rem' }}>
            <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', textTransform: 'uppercase' }}>
              Premium
            </span>
            <span style={{ padding: '.2rem .65rem', background: 'rgba(201,168,76,.18)', border: '1px solid rgba(201,168,76,.3)', borderRadius: 16, fontSize: '.62rem', fontFamily: "'Cinzel',serif", letterSpacing: '.1em', color: 'var(--gold)', textTransform: 'uppercase' }}>
              Best value
            </span>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '.4rem' }}>
              <span style={{ fontFamily: "'Cinzel',serif", fontSize: '2rem', color: 'var(--gold)' }}>$60</span>
              <span style={{ color: 'var(--muted)', fontSize: '.85rem' }}>/ year</span>
            </div>
            <div style={{ color: 'var(--muted)', fontSize: '.78rem', marginTop: '.25rem' }}>
              Or $7 / month · Cancel anytime
            </div>
          </div>

          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Everything in Free, plus the things that only make sense for people who actually use the site week after week.
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '1.75rem', display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
            {[
              'Cloud-synced journal across all devices',
              'Unlimited reading history (free is capped at 20 entries)',
              'Daily card email an hour earlier than the free list',
              'Weekly TarotAxis digest with curated long-reads',
              'Early access to AI reading interpretation (launching 2026)',
              'Ad-free forever',
              'Pin favourite cards, spreads, and readings',
            ].map(item => (
              <li key={item} style={{ display: 'flex', gap: '.6rem', color: 'var(--text)', fontSize: '.86rem', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--gold)', flexShrink: 0 }}>✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {premium ? (
            <div style={{ textAlign: 'center', color: 'var(--gold)', fontSize: '.82rem', fontFamily: "'Cinzel',serif", letterSpacing: '.04em', padding: '.85rem 0' }}>
              ✦ You are subscribed
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
              <UpgradeButton interval="yearly" locale="en" variant="primary" fullWidth />
              <UpgradeButton interval="monthly" locale="en" variant="ghost" fullWidth />
            </div>
          )}
        </div>
      </div>

      {/* Comparison detail row — D6 daily card */}
      <div style={{ background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem 1.75rem', marginBottom: '2.5rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.7rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.85rem' }}>
          What gets the daily card first?
        </div>
        <p style={{ color: 'var(--text)', fontSize: '.9rem', lineHeight: 1.7, margin: 0 }}>
          Premium subscribers receive the Daily Card email at <strong>06:00 UTC</strong>, an hour before everyone else. Free subscribers get the same content at <strong>12:00 UTC</strong>. The card itself stays public on the site at all times — the email is the "first to know" perk.
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
