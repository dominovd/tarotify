import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CARDS, CARDS_BY_SLUG } from '@/lib/cards'
import { CARD_EXTENDED } from '@/lib/card-extended'
import { CARD_FEELINGS_EXTENDED } from '@/lib/card-feelings-extended'
import { localizeCardSlug } from '@/lib/i18n/slugs'
import CardImage from '@/components/CardImage'

interface Props { params: { slug: string } }

function metaSnippet(text: string, maxLength = 155): string {
  const compact = text.replace(/\s+/g, ' ').trim()
  return compact.length > maxLength ? `${compact.slice(0, maxLength)}…` : compact
}

export async function generateStaticParams() {
  return CARDS.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const card = CARDS_BY_SLUG[params.slug]
  if (!card) return {}
  const feel = CARD_FEELINGS_EXTENDED[card.slug]
  const esSlug = localizeCardSlug(card.slug, 'es')
  const description = feel
    ? `${card.name} as feelings: ${metaSnippet(feel.howTheyFeel)}`
    : `${card.name} as feelings — what this card reveals about someone's emotions in a love or relationship reading, both upright and reversed.`
  return {
    title: `${card.name} as Feelings — What It Means in a Love Reading | TarotAxis`,
    description,
    alternates: {
      canonical: `https://tarotaxis.com/cards/${card.slug}/feelings`,
      languages: {
        'en': `https://tarotaxis.com/cards/${card.slug}/feelings`,
        'es': `https://tarotaxis.com/es/cartas/${esSlug}/sentimientos`,
        'x-default': `https://tarotaxis.com/cards/${card.slug}/feelings`,
      },
    },
    openGraph: {
      title: `${card.name} as Feelings — What It Means in a Love Reading | TarotAxis`,
      description,
      images: [{
        url: `https://tarotaxis.com/og?slug=${card.slug}&type=feelings`,
        width: 1200,
        height: 630,
        alt: `${card.name} tarot card as feelings`,
      }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${card.name} as Feelings — Tarot Meaning | TarotAxis`,
      images: [`https://tarotaxis.com/og?slug=${card.slug}&type=feelings`],
    },
  }
}

export default function CardFeelingsPage({ params }: Props) {
  const card = CARDS_BY_SLUG[params.slug]
  if (!card) notFound()

  const ext = CARD_EXTENDED[params.slug] ?? null
  const feel = CARD_FEELINGS_EXTENDED[params.slug] ?? null

  const allCards = CARDS
  const idx = allCards.findIndex(c => c.slug === card.slug)
  const prev = allCards[idx - 1]
  const next = allCards[idx + 1]

  // FAQ fallback if per-card feelings content not yet authored
  const feelingsFaqs: Array<{ q: string; a: string }> = feel?.feelingsFaqs ?? [
    {
      q: `What does ${card.name} mean as feelings?`,
      a: `When ${card.name} appears in a feelings reading it points to: ${card.kw_up.join(', ')}. ${card.love} The card describes the emotional climate the other person is bringing to the connection right now — what they feel, what they are open to, and what may be just below the surface of their conscious awareness.`,
    },
    {
      q: `What does ${card.name} reversed mean as feelings?`,
      a: `${card.name} reversed as feelings carries the same emotional themes — ${card.kw_rev.join(', ')} — but in a blocked, withheld, or distorted form. The card often points to feelings the person has not fully admitted to themselves, or feelings that have soured because something important was avoided. It is less a "no" than a complicated "yes-but" that needs honest examination.`,
    },
    {
      q: `Is ${card.name} a yes for love?`,
      a: `${card.yn === 'yes' ? `${card.name} leans yes for love — ${card.yn_exp}` : card.yn === 'no' ? `${card.name} leans no — ${card.yn_exp} For feelings specifically, this often means the timing or the emotional readiness is not where you want it to be.` : `${card.name} sits in the "maybe" zone for love — ${card.yn_exp} For feelings, this usually means the other person's emotions are real but unfinished, and the situation needs more time or honest conversation to resolve.`}`,
    },
    {
      q: `How do I read a feelings spread accurately?`,
      a: `Feelings spreads read best when you separate three threads: what the person consciously feels, what they feel but have not admitted, and what they want you to think they feel. Most decks of a single card collapse all three. If ${card.name} appears, take it as a description of the strongest current — not the only one. Pair it with a clarifying card if you want to distinguish conscious feeling from buried feeling, and always weigh card guidance against what the person is actually doing in real life.`,
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: feelingsFaqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  const splitParas = (text: string) =>
    text.split(/\n\n+/).map(p => p.trim()).filter(Boolean)

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
        <Link href="/cards" style={{ color: 'var(--muted)' }}>Card Meanings</Link>
        <span>/</span>
        <Link href={`/cards/${card.slug}`} style={{ color: 'var(--muted)' }}>{card.name}</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>As Feelings</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ width: 200, height: 300, margin: '0 auto 1.5rem', borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,.4)' }}>
          <CardImage slug={card.slug} alt={`${card.name} tarot card as feelings`} />
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.4rem,4vw,1.9rem)', color: 'var(--gold)', marginBottom: '.5rem' }}>
          {card.name} as Feelings
        </h1>
        <div style={{ display: 'flex', gap: '.6rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{ padding: '.25rem .85rem', border: '1px solid var(--border)', borderRadius: 20, fontSize: '.72rem', color: 'var(--muted)', fontFamily: "'Cinzel',serif", letterSpacing: '.08em' }}>
            {card.suitLabel} · {card.number}
          </span>
          <span style={{ padding: '.25rem .85rem', borderRadius: 20, fontSize: '.72rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', background: 'rgba(201,168,76,.12)', color: 'var(--gold)', border: '1px solid rgba(201,168,76,.3)' }}>
            ❦ FEELINGS
          </span>
        </div>
      </div>

      {/* Section nav */}
      {feel && (
        <div style={{ display: 'flex', gap: '.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
          {[
            { href: '#upright', label: 'Upright' },
            { href: '#reversed', label: 'Reversed' },
            { href: '#how-they-feel', label: 'How They Feel' },
            { href: '#faq', label: 'FAQ' },
          ].map(item => (
            <a key={item.href} href={item.href} style={{ padding: '.3rem .8rem', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 20, color: 'var(--muted)', fontSize: '.72rem', fontFamily: "'Cinzel',serif", letterSpacing: '.06em', textDecoration: 'none' }}>
              {item.label}
            </a>
          ))}
        </div>
      )}

      {/* Intro */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem', marginBottom: '1.5rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.7rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.6rem' }}>
          Reading a Card as Feelings
        </div>
        <p style={{ color: 'var(--text)', lineHeight: 1.75, margin: 0 }}>
          A feelings reading asks the cards to describe what someone is emotionally experiencing — what they consciously feel, what they have not yet admitted to themselves, and what is just beginning to stir. {card.name} arrives in this position with a particular texture. Read the card as a description of the emotional weather around the connection, not as a verdict on the relationship.
        </p>
      </div>

      {/* Feelings Keywords */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.6rem' }}>
          {card.name} — Feelings Keywords
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.35rem' }}>
          {card.kw_up.map(k => (
            <span key={k} style={{ padding: '.2rem .55rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.18)', borderRadius: 20, fontSize: '.72rem', color: 'var(--muted)' }}>{k}</span>
          ))}
        </div>
      </div>

      {/* Long-form sections — upright / reversed / how-they-feel */}
      {feel ? (
        <>
          <section id="upright" style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem', scrollMarginTop: '2rem' }}>
            <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              <span style={{ fontSize: '1.1rem', color: 'var(--gold)' }}>❦</span> {card.name} as Feelings — Upright
            </h2>
            {splitParas(feel.uprightLong).map((p, i) => (
              <p key={i} style={{ color: 'var(--text)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '.93rem' }}>{p}</p>
            ))}
          </section>

          <section id="reversed" style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem', scrollMarginTop: '2rem' }}>
            <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              <span style={{ fontSize: '1.1rem' }}>↻</span> {card.name} Reversed as Feelings
            </h2>
            {splitParas(feel.reversedLong).map((p, i) => (
              <p key={i} style={{ color: 'var(--text)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '.93rem' }}>{p}</p>
            ))}
          </section>

          <section id="how-they-feel" style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem', marginBottom: '1.5rem', scrollMarginTop: '2rem' }}>
            <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              <span style={{ fontSize: '1.1rem' }}>💭</span> How They Feel About You
            </h2>
            {splitParas(feel.howTheyFeel).map((p, i) => (
              <p key={i} style={{ color: 'var(--text)', lineHeight: 1.8, marginBottom: '1rem', fontSize: '.93rem' }}>{p}</p>
            ))}
          </section>
        </>
      ) : ext ? (
        <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.95rem', marginBottom: '.75rem' }}>{card.name} in Love</h2>
          <p style={{ color: 'var(--text)', lineHeight: 1.75, marginBottom: '1rem' }}>{card.love}</p>
          {ext.love2 && <p style={{ color: 'var(--text)', lineHeight: 1.75, margin: 0 }}>{ext.love2}</p>}
        </div>
      ) : null}

      {/* CTAs — back to main / reversed / draw */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '.75rem', marginBottom: '2.5rem' }}>
        <Link href={`/cards/${card.slug}`} style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.25)', borderRadius: 12, textDecoration: 'none' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', marginBottom: '.3rem' }}>See Also</div>
          <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>{card.name} Meaning →</div>
        </Link>
        <Link href={`/cards/${card.slug}/reversed`} style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(210,122,122,.06)', border: '1px solid rgba(210,122,122,.25)', borderRadius: 12, textDecoration: 'none' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', marginBottom: '.3rem' }}>Shadow Side</div>
          <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>{card.name} Reversed →</div>
        </Link>
        <Link href="/spreads/how-they-feel-about-me" style={{ display: 'block', padding: '1rem 1.1rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, textDecoration: 'none' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', marginBottom: '.3rem' }}>Draw Now</div>
          <div style={{ color: 'var(--gold)', fontSize: '.88rem' }}>✦ How They Feel Spread →</div>
        </Link>
      </div>

      {/* FAQ */}
      <div id="faq" style={{ marginBottom: '2.5rem', scrollMarginTop: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {feelingsFaqs.map(({ q, a }) => (
            <div key={q} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{q}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Prev / Next */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        {prev ? (
          <Link href={`/cards/${prev.slug}/feelings`} style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            ← {prev.name} Feelings
          </Link>
        ) : <span />}
        {next && (
          <Link href={`/cards/${next.slug}/feelings`} style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem' }}>
            {next.name} Feelings →
          </Link>
        )}
      </div>
    </div>
  )
}
