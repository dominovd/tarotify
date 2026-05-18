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
import { getComboContext } from '@/lib/combo-context'

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
  const ctx = getComboContext(canonical)
  const fallback = interpret(c1, c2)

  // Prefer nuanced essence/reading for description; else fall back to template main.
  const descSource = ctx?.essence
    ? `${ctx.essence} ${ctx.reading.split('\n\n')[0]}`
    : fallback.main
  const description = `What does ${c1.name} and ${c2.name} mean together in tarot? ${descSource.slice(0, 155)}…`

  return {
    title: `${c1.name} and ${c2.name} Tarot Combination Meaning | TarotAxis`,
    description,
    alternates: {
      canonical: `https://tarotaxis.com/combination/${canonical}`,
      languages: {
        'en': `https://tarotaxis.com/combination/${canonical}`,
        'es': `https://tarotaxis.com/es/combinaciones/${canonical}`,
        'x-default': `https://tarotaxis.com/combination/${canonical}`,
      },
    },
    openGraph: {
      title: `${c1.name} + ${c2.name} Tarot Combination`,
      description: ctx?.essence ?? `${c1.kw_up[0]} meets ${c2.kw_up[0]}. Discover what these two cards mean together in love, career and personal growth.`,
      images: [{
        url: `https://tarotaxis.com/og?type=combination&slug=${c1.slug}&slug2=${c2.slug}`,
        width: 1200,
        height: 630,
        alt: `${c1.name} and ${c2.name} tarot combination`,
      }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${c1.name} + ${c2.name} Tarot Combination`,
      images: [`https://tarotaxis.com/og?type=combination&slug=${c1.slug}&slug2=${c2.slug}`],
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

  const ctx = getComboContext(canonical)
  const fallback = interpret(c1, c2)

  const relLabel: Record<string, string> = {
    amplifying: 'Amplifying',
    nurturing: 'Nurturing',
    tension: 'Dynamic Tension',
    grounding: 'Grounding',
    resonant: 'Resonant',
    complex: 'Complex',
  }

  // FAQ schema — hand-curated FAQs win; otherwise signal-engine FAQs from interpret()
  const faqEntries = ctx?.faqs.length ? ctx.faqs : fallback.faqs

  // Procedural fallback combos also get shadowForm / edgeCase / readerNote, just
  // from the signal engine rather than hand authorship. Hand-curated ctx wins for both.
  const shadowForm = ctx?.shadowForm ?? fallback.shadowForm
  const edgeCase = ctx?.edgeCase ?? fallback.edgeCase
  const contradictionFlag = ctx?.contradictionFlag
  const readerNote = ctx?.readerNote ?? fallback.readerNote
  const timing = ctx?.timing
  const isHandCurated = Boolean(ctx)

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqEntries.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  // Pick which body content to render — nuanced (ctx) or template (fallback).
  const readingParagraphs = ctx
    ? ctx.reading.split(/\n{2,}/).map(p => p.trim()).filter(Boolean)
    : [fallback.main]

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
            {relLabel[fallback.relType]} Energy
          </span>
        </div>
      </div>

      {/* Essence (only when ctx exists — replaces the generic Combined Energy heading) */}
      {ctx?.essence && (
        <div style={{ background: 'linear-gradient(135deg, rgba(201,168,76,.08), rgba(201,168,76,.02))', border: '1px solid rgba(201,168,76,.18)', borderRadius: 14, padding: '1.5rem 1.75rem', marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.6rem' }}>
            The Essence
          </div>
          <p style={{ fontFamily: "'Cinzel',serif", color: 'var(--text)', fontSize: '1.05rem', lineHeight: 1.55, fontStyle: 'italic', margin: 0 }}>
            {ctx.essence}
          </p>
        </div>
      )}

      {/* Main Reading — multi-paragraph if ctx, single block if fallback */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.75rem' }}>
          {ctx ? 'The Reading' : 'Combined Energy'}
        </h2>
        {readingParagraphs.map((p, i) => (
          <p key={i} style={{ color: 'var(--text)', lineHeight: 1.75, marginBottom: i < readingParagraphs.length - 1 ? '.9rem' : 0 }}>
            {p}
          </p>
        ))}
      </div>

      {/* Elemental relationship note */}
      <div style={{ background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.12)', borderRadius: 10, padding: '1rem 1.25rem', marginBottom: '1.5rem', display: 'flex', gap: '.75rem', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '1rem', flexShrink: 0 }}>⚗️</span>
        <div>
          <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', color: 'var(--gold)', opacity: .6, letterSpacing: '.1em', textTransform: 'uppercase' }}>Elemental Dynamic · </span>
          <span style={{ color: 'var(--muted)', fontSize: '.85rem' }}>{c1.element} × {c2.element} — {fallback.relDesc}</span>
        </div>
      </div>

      {/* Shadow form + Edge case + Contradiction + Reader's Note — always rendered;
          hand-curated combos get authored text, others get signal-engine output. */}
      <div style={{ display: 'grid', gap: '.9rem', marginBottom: '1.5rem' }}>
        <div style={{ background: 'var(--on-bg-02)', border: '1px solid rgba(180,80,80,.18)', borderRadius: 12, padding: '1.2rem 1.4rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.14em', color: '#c87878', opacity: .85, textTransform: 'uppercase', marginBottom: '.5rem' }}>
            ☾ Shadow Form
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, margin: 0 }}>{shadowForm}</p>
        </div>

        <div style={{ background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.2rem 1.4rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.5rem' }}>
            ⚠ When This Combination Misleads
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, margin: 0 }}>{edgeCase}</p>
        </div>

        {contradictionFlag && (
          <div style={{ background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.2rem 1.4rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.5rem' }}>
              ✦ If These Cards Also Appear
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, margin: 0 }}>{contradictionFlag}</p>
          </div>
        )}

        <div style={{ background: 'var(--on-bg-02)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, padding: '1.2rem 1.4rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .85, textTransform: 'uppercase', marginBottom: '.5rem' }}>
            ✦ Reader{isHandCurated ? '’' : '’'}s Note
          </div>
          <p style={{ color: 'var(--text)', fontSize: '.9rem', lineHeight: 1.7, margin: 0 }}>{readerNote}</p>
        </div>
      </div>

      {/* Love / Career / Spirit */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '.75rem', marginBottom: '2rem' }}>
        {[
          ['❤️', 'Love & Relationships', ctx?.love ?? fallback.love],
          ['💼', 'Career & Money', ctx?.career ?? fallback.career],
          ['🌿', 'Personal Growth', ctx?.spirit ?? fallback.spirit],
        ].map(([icon, label, text]) => (
          <div key={label as string} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem' }}>
            <div style={{ fontSize: '1.1rem', marginBottom: '.4rem' }}>{icon}</div>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.67rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.5rem' }}>{label}</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.65, margin: 0 }}>{text as string}</p>
          </div>
        ))}
      </div>

      {/* Timing (hand-curated only — signal engine doesn't synthesise reliable timing) */}
      {timing && (
        <div style={{ background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.4rem', marginBottom: '2rem', display: 'flex', gap: '.75rem', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '1rem', flexShrink: 0 }}>⧗</span>
          <div>
            <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', color: 'var(--gold)', opacity: .65, letterSpacing: '.1em', textTransform: 'uppercase' }}>Timing · </span>
            <span style={{ color: 'var(--muted)', fontSize: '.88rem' }}>{timing}</span>
          </div>
        </div>
      )}

      {/* Individual card links */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.75rem', marginBottom: '2rem' }}>
        {[c1, c2].map(c => (
          <Link key={c.slug} href={`/cards/${c.slug}`} style={{ display: 'flex', gap: '.75rem', alignItems: 'center', padding: '1rem', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12 }}>
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
          {faqEntries.map(({ q, a }) => (
            <div key={q} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{q}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA — try the calculator */}
      <div style={{ textAlign: 'center', background: 'var(--on-bg-02)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14, padding: '1.75rem' }}>
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
