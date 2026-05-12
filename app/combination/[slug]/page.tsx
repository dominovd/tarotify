import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import CardImage from '@/components/CardImage'
import { notFound, redirect } from 'next/navigation'
import { CARDS_BY_SLUG } from '@/lib/cards'
import {
  interpret,
  makeComboSlug,
  parseComboSlug,
  MAJOR_COMBOS,
  PRIORITY_MINOR_COMBOS,
} from '@/lib/combinations'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return [...MAJOR_COMBOS, ...PRIORITY_MINOR_COMBOS].map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const parsed = parseComboSlug(params.slug)
  if (!parsed) return {}
  const [s1, s2] = parsed
  const c1 = CARDS_BY_SLUG[s1]
  const c2 = CARDS_BY_SLUG[s2]
  if (!c1 || !c2) return {}

  const canonical = makeComboSlug(s1, s2)
  const result = interpret(c1, c2)
  const kw1 = c1.kw_up[0]
  const kw2 = c2.kw_up[0]

  return {
    title: `${c1.name} and ${c2.name} Tarot Combination Meaning | TarotAxis`,
    description: `What does ${c1.name} and ${c2.name} mean together in tarot? ${result.main.slice(0, 140)}…`,
    alternates: { canonical: `https://tarotaxis.com/combination/${canonical}` },
    openGraph: {
      title: `${c1.name} + ${c2.name} Tarot Combination`,
      description: `${kw1} meets ${kw2}. Discover what these two cards mean together in love, career and personal growth.`,
      images: [`/cards/${c1.slug}.webp`],
    },
  }
}

export default function ComboPage({ params }: Props) {
  const parsed = parseComboSlug(params.slug)
  if (!parsed) notFound()

  const [s1, s2] = parsed
  const c1 = CARDS_BY_SLUG[s1]
  const c2 = CARDS_BY_SLUG[s2]
  if (!c1 || !c2) notFound()

  // Redirect non-canonical slug (reversed order) to canonical
  const canonical = makeComboSlug(s1, s2)
  if (params.slug !== canonical) redirect(`/combination/${canonical}`)

  const result = interpret(c1, c2)

  const relLabel: Record<string, string> = {
    amplifying: 'Amplifying',
    nurturing: 'Nurturing',
    tension: 'Dynamic Tension',
    grounding: 'Grounding',
    resonant: 'Resonant',
    complex: 'Complex',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What does ${c1.name} and ${c2.name} mean in tarot?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: result.main,
        },
      },
      {
        '@type': 'Question',
        name: `What does ${c1.name} and ${c2.name} mean in love?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: result.love,
        },
      },
      {
        '@type': 'Question',
        name: `What does ${c1.name} and ${c2.name} mean in career?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: result.career,
        },
      },
    ],
  }

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
        <span>/</span>
        <Link href="/combination" style={{ color: 'var(--muted)' }}>Combinations</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>{c1.name} + {c2.name}</span>
      </nav>

      {/* Hero — two cards */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 130, height: 200, borderRadius: 10, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,.4)', margin: '0 auto .6rem' }}>
              <CardImage slug={c1.slug} alt={`${c1.name} tarot card`} />
            </div>
            <Link href={`/cards/${c1.slug}`} style={{ fontFamily: "'Cinzel',serif", fontSize: '.78rem', color: 'var(--gold)', letterSpacing: '.05em' }}>{c1.name}</Link>
          </div>

          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1.8rem', color: 'var(--gold)', opacity: .4 }}>✦</div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 130, height: 200, borderRadius: 10, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,.4)', margin: '0 auto .6rem' }}>
              <CardImage slug={c2.slug} alt={`${c2.name} tarot card`} />
            </div>
            <Link href={`/cards/${c2.slug}`} style={{ fontFamily: "'Cinzel',serif", fontSize: '.78rem', color: 'var(--gold)', letterSpacing: '.05em' }}>{c2.name}</Link>
          </div>
        </div>

        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.3rem,4vw,1.9rem)', color: 'var(--gold)', marginBottom: '.6rem' }}>
          {c1.name} and {c2.name}
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem' }}>Tarot Combination Meaning</p>

        <div style={{ marginTop: '.75rem' }}>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>
            {relLabel[result.relType]} Energy
          </span>
        </div>
      </div>

      {/* Combined Energy */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.75rem' }}>
          Combined Energy
        </h2>
        <p style={{ color: 'var(--text)', lineHeight: 1.75 }}>{result.main}</p>
      </div>

      {/* Elemental relationship note */}
      <div style={{ background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.12)', borderRadius: 10, padding: '1rem 1.25rem', marginBottom: '1.5rem', display: 'flex', gap: '.75rem', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '1rem', flexShrink: 0 }}>⚗️</span>
        <div>
          <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', color: 'var(--gold)', opacity: .6, letterSpacing: '.1em', textTransform: 'uppercase' }}>Elemental Dynamic · </span>
          <span style={{ color: 'var(--muted)', fontSize: '.85rem' }}>{c1.element} × {c2.element} — {result.relDesc}</span>
        </div>
      </div>

      {/* Love / Career / Spirit */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '.75rem', marginBottom: '2rem' }}>
        {[
          ['❤️', 'Love & Relationships', result.love],
          ['💼', 'Career & Money', result.career],
          ['🌿', 'Personal Growth', result.spirit],
        ].map(([icon, label, text]) => (
          <div key={label as string} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem' }}>
            <div style={{ fontSize: '1.1rem', marginBottom: '.4rem' }}>{icon}</div>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.67rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.5rem' }}>{label}</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.65, margin: 0 }}>{text as string}</p>
          </div>
        ))}
      </div>

      {/* Individual card links */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.75rem', marginBottom: '2rem' }}>
        {[c1, c2].map(c => (
          <Link key={c.slug} href={`/cards/${c.slug}`} style={{ display: 'flex', gap: '.75rem', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12 }}>
            <div style={{ position: 'relative', width: 36, height: 54, borderRadius: 6, overflow: 'hidden', flexShrink: 0 }}>
              <Image src={`/cards/${c.slug}.webp`} alt={c.name} fill sizes="36px" style={{ objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.8rem', color: 'var(--gold)', marginBottom: '.2rem' }}>{c.name}</div>
              <div style={{ color: 'var(--muted)', fontSize: '.72rem' }}>{c.kw_up.slice(0, 2).join(', ')}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* FAQ */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
            <div key={name} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA — try the calculator */}
      <div style={{ textAlign: 'center', background: 'rgba(255,255,255,.02)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14, padding: '1.75rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .6, textTransform: 'uppercase', marginBottom: '.75rem' }}>
          Explore More Combinations
        </div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
          Use the Tarot Combination Calculator to discover what any two cards mean together.
        </p>
        <Link href="/combination" style={{ display: 'inline-block', padding: '.8rem 2rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
          ✦ Open Calculator
        </Link>
      </div>
    </div>
  )
}
