import Link from 'next/link'

// ════════════════════════════════════════════════════════════════════════════
// AIReadingPromo — small inline CTA used on content pages.
// ════════════════════════════════════════════════════════════════════════════
//
// Unlike <AIReadingBlock> (which IS the AI interface), this is just a
// teaser linking into /free-reading (or /es/lectura-gratis). Drop it on
// content pages — card hubs, individual card pages, spread guides — to
// pull browsers into the AI funnel.
//
// Renders as a horizontal gold-accent card with a short pitch and an arrow
// CTA. No client JS needed — pure server component.
// ════════════════════════════════════════════════════════════════════════════

type Locale = 'en' | 'es'

interface Props {
  locale: Locale
  /** Optional inline variant — compact one-liner instead of two-line block.
   *  Use on dense pages where the bigger CTA would be too loud. */
  compact?: boolean
}

const COPY: Record<Locale, {
  badge: string
  title: string
  body: string
  cta: string
  href: string
}> = {
  en: {
    badge: 'AI · FREE',
    title: 'Want a personalised AI reading?',
    body: 'Ask any question, draw three cards, get a streaming interpretation written for you. Free — no card needed.',
    cta: 'Get a Free AI Reading →',
    href: '/free-reading',
  },
  es: {
    badge: 'IA · GRATIS',
    title: '¿Quieres una lectura con IA personalizada?',
    body: 'Haz una pregunta, saca tres cartas, recibe una interpretación escrita para ti en directo. Gratis — sin tarjeta.',
    cta: 'Obtener una lectura con IA →',
    href: '/es/lectura-gratis',
  },
}

export default function AIReadingPromo({ locale, compact }: Props) {
  const t = COPY[locale]

  if (compact) {
    return (
      <Link
        href={t.href}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '.85rem',
          background: 'linear-gradient(135deg,rgba(201,168,76,.12),rgba(201,168,76,.04))',
          border: '1px solid rgba(201,168,76,.45)',
          borderRadius: 12,
          padding: '.85rem 1.1rem',
          textDecoration: 'none',
          color: 'var(--text)',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '.65rem', flex: 1, minWidth: 0 }}>
          <span style={{
            fontSize: '.55rem',
            letterSpacing: '.14em',
            padding: '.18rem .55rem',
            background: 'rgba(201,168,76,.22)',
            border: '1px solid rgba(201,168,76,.55)',
            borderRadius: 20,
            color: 'var(--gold)',
            fontFamily: "'Cinzel',serif",
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}>
            {t.badge}
          </span>
          <span style={{
            fontFamily: "'Cinzel',serif",
            color: 'var(--gold)',
            fontSize: '.86rem',
            letterSpacing: '.03em',
          }}>
            {t.title}
          </span>
        </div>
        <span style={{
          fontFamily: "'Cinzel',serif",
          fontSize: '.78rem',
          color: 'var(--gold)',
          letterSpacing: '.06em',
          flexShrink: 0,
        }}>
          {t.cta}
        </span>
      </Link>
    )
  }

  return (
    <Link
      href={t.href}
      style={{
        display: 'block',
        background: 'linear-gradient(135deg,rgba(201,168,76,.13),rgba(201,168,76,.04))',
        border: '1px solid rgba(201,168,76,.4)',
        borderRadius: 14,
        padding: '1.25rem 1.4rem',
        textDecoration: 'none',
        color: 'var(--text)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.55rem', flexWrap: 'wrap' }}>
        <span style={{
          fontSize: '.58rem',
          letterSpacing: '.14em',
          padding: '.2rem .6rem',
          background: 'rgba(201,168,76,.22)',
          border: '1px solid rgba(201,168,76,.55)',
          borderRadius: 20,
          color: 'var(--gold)',
          fontFamily: "'Cinzel',serif",
          textTransform: 'uppercase',
        }}>
          {t.badge}
        </span>
        <div style={{
          fontFamily: "'Cinzel',serif",
          color: 'var(--gold)',
          fontSize: '.98rem',
          letterSpacing: '.04em',
        }}>
          {t.title}
        </div>
      </div>
      <p style={{
        color: 'var(--text)',
        fontSize: '.88rem',
        lineHeight: 1.65,
        margin: '0 0 .8rem',
      }}>
        {t.body}
      </p>
      <div style={{
        fontFamily: "'Cinzel',serif",
        color: 'var(--gold)',
        fontSize: '.82rem',
        letterSpacing: '.07em',
      }}>
        {t.cta}
      </div>
    </Link>
  )
}
