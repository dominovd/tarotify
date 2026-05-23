import Link from 'next/link'

type Locale = 'en' | 'es'

interface Props {
  locale?: Locale
}

const COPY: Record<Locale, {
  brandTagline: string
  contactHeader: string
  contactBody: string
  copyrightSuffix: string
  frameworkCredit: { prefix: string; linkLabel: string; linkHref: string }
  headers: { read: string; learn: string; guides: string }
  read: { href: string; label: string }[]
  learn: { href: string; label: string }[]
  guides: { href: string; label: string }[]
  site: { href: string; label: string }[]
}> = {
  en: {
    brandTagline:
      'Free AI-powered tarot readings, all 78 card meanings, spreads and lunar rituals — for self-reflection and honest guidance.',
    contactHeader: 'Contact',
    contactBody: 'Questions, feedback or partnership enquiries — we read every message.',
    copyrightSuffix: 'All rights reserved',
    frameworkCredit: {
      prefix: 'Interpretations are built on the Rider-Waite-Smith framework, structured by elemental and numerological logic, and refined with AI assistance.',
      linkLabel: 'Read our methodology',
      linkHref: '/methodology',
    },
    headers: { read: 'Read', learn: 'Learn', guides: 'Guides' },
    read: [
      { href: '/free-reading', label: 'Free Reading' },
      { href: '/daily',        label: 'Card of the Day' },
      { href: '/yes-no',       label: 'Yes / No' },
      { href: '/birth-card',   label: 'Birth Card' },
    ],
    learn: [
      { href: '/cards',        label: 'All 78 Cards' },
      { href: '/tarot-suits',  label: 'The Four Suits' },
      { href: '/spreads',      label: 'Spreads' },
      { href: '/combination',  label: 'Combinations' },
      { href: '/zodiac',       label: 'Zodiac Tarot' },
      { href: '/trends',       label: 'Tarot Trends' },
    ],
    guides: [
      { href: '/tarot-for-beginners',         label: 'For Beginners' },
      { href: '/how-to-read-tarot',           label: 'How to Read' },
      { href: '/how-to-shuffle-tarot',        label: 'How to Shuffle' },
      { href: '/how-to-cleanse-tarot-cards',  label: 'How to Cleanse' },
      { href: '/how-to-ask-tarot-questions',  label: 'Asking Questions' },
      { href: '/tarot-journal',               label: 'Tarot Journal' },
    ],
    site: [
      { href: '/about',                    label: 'About' },
      { href: '/methodology',              label: 'Methodology' },
      { href: '/reflection-vs-prediction', label: 'Reflection vs Prediction' },
      { href: '/ai-limitations',           label: 'AI Limitations' },
      { href: '/ethical-guidelines',       label: 'Ethical Guidelines' },
      { href: '/pricing',                  label: 'Pricing' },
      { href: '/privacy',                  label: 'Privacy Policy' },
      { href: '/terms',                    label: 'Terms & Conditions' },
    ],
  },
  es: {
    brandTagline:
      'Lecturas de tarot gratuitas con IA, los significados de las 78 cartas, tiradas y rituales lunares — para la reflexión personal y una guía honesta.',
    contactHeader: 'Contacto',
    contactBody: 'Preguntas, comentarios o consultas de colaboración — leemos cada mensaje.',
    copyrightSuffix: 'Todos los derechos reservados',
    frameworkCredit: {
      prefix: 'Las interpretaciones se construyen sobre el marco Rider-Waite-Smith, estructuradas por la lógica elemental y numerológica, y refinadas con asistencia de IA.',
      linkLabel: 'Lee nuestra metodología',
      linkHref: '/es/metodologia',
    },
    headers: { read: 'Leer', learn: 'Aprender', guides: 'Guías' },
    read: [
      { href: '/es/lectura-gratis',     label: 'Lectura Gratis' },
      { href: '/es/carta-del-dia',      label: 'Carta del Día' },
      { href: '/es/si-no',              label: 'Sí / No' },
      { href: '/es/carta-de-nacimiento', label: 'Carta de Nacimiento' },
    ],
    learn: [
      { href: '/es/cartas',          label: 'Las 78 Cartas' },
      { href: '/es/palos-del-tarot', label: 'Los Cuatro Palos' },
      { href: '/es/tiradas',         label: 'Tiradas' },
      { href: '/es/combinaciones',   label: 'Combinaciones' },
      { href: '/es/zodiaco',         label: 'Zodíaco' },
      { href: '/es/tendencias',      label: 'Tendencias' },
    ],
    guides: [
      { href: '/es/tarot-para-principiantes',     label: 'Para Principiantes' },
      { href: '/es/como-leer-tarot',              label: 'Cómo Leer' },
      { href: '/es/como-barajar-tarot',           label: 'Cómo Barajar' },
      { href: '/es/como-limpiar-cartas-de-tarot', label: 'Cómo Limpiar' },
      { href: '/es/como-preguntar-al-tarot',      label: 'Cómo Preguntar' },
      { href: '/es/diario-de-tarot',              label: 'Diario de Tarot' },
    ],
    site: [
      { href: '/es/acerca-de',              label: 'Acerca de' },
      { href: '/es/metodologia',            label: 'Metodología' },
      { href: '/es/reflexion-vs-prediccion', label: 'Reflexión vs Predicción' },
      { href: '/es/limitaciones-de-ia',     label: 'Limitaciones de la IA' },
      { href: '/es/principios-eticos',      label: 'Principios Éticos' },
      { href: '/es/precios',                label: 'Precios' },
      { href: '/es/privacidad',             label: 'Política de Privacidad' },
      { href: '/es/terminos',               label: 'Términos y Condiciones' },
    ],
  },
}

export default function Footer({ locale = 'en' }: Props) {
  const t = COPY[locale]
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      background: 'var(--footer-bg)',
      marginTop: '4rem',
      padding: '3rem 1.5rem 2rem',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Top: brand + columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
          gap: '2rem',
          marginBottom: '2.5rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '1.05rem',
              color: 'var(--gold)',
              letterSpacing: '.05em',
              marginBottom: '.75rem',
            }}>
              ✦ TarotAxis
            </div>
            <p style={{
              color: 'var(--muted)',
              fontSize: '.8rem',
              lineHeight: 1.7,
              margin: 0,
            }}>
              {t.brandTagline}
            </p>
          </div>

          <FooterColumn title={t.headers.read} items={t.read} />
          <FooterColumn title={t.headers.learn} items={t.learn} />
          <FooterColumn title={t.headers.guides} items={t.guides} />

          {/* Contact */}
          <div>
            <div style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '.7rem',
              letterSpacing: '.14em',
              color: 'var(--gold)',
              opacity: .65,
              textTransform: 'uppercase',
              marginBottom: '.85rem',
            }}>
              {t.contactHeader}
            </div>
            <a
              href="mailto:info@tarotaxis.com"
              style={{
                display: 'inline-block',
                color: 'var(--text)',
                fontSize: '.82rem',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(201,168,76,.3)',
                marginBottom: '.85rem',
              }}
            >
              info@tarotaxis.com
            </a>
            <p style={{
              color: 'var(--muted)',
              fontSize: '.75rem',
              lineHeight: 1.6,
              margin: 0,
            }}>
              {t.contactBody}
            </p>
          </div>
        </div>

        {/* Framework credit — E-E-A-T / AI transparency line */}
        <div style={{
          paddingTop: '1.25rem',
          paddingBottom: '1.25rem',
          borderTop: '1px solid var(--border)',
          color: 'var(--muted)',
          fontSize: '.75rem',
          lineHeight: 1.7,
          opacity: .8,
        }}>
          <span>{t.frameworkCredit.prefix} </span>
          <Link
            href={t.frameworkCredit.linkHref}
            style={{
              color: 'var(--gold)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(201,168,76,.35)',
            }}
          >
            {t.frameworkCredit.linkLabel} →
          </Link>
        </div>

        {/* Bottom: site links + copyright */}
        <div style={{
          paddingTop: '1.5rem',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
            {t.site.map(l => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  color: 'var(--muted)',
                  fontSize: '.78rem',
                  letterSpacing: '.04em',
                  textDecoration: 'none',
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div style={{
            color: 'var(--muted)',
            fontSize: '.72rem',
            opacity: .65,
            fontFamily: "'Cinzel',serif",
            letterSpacing: '.05em',
          }}>
            © {new Date().getFullYear()} TarotAxis · {t.copyrightSuffix}
          </div>
        </div>
      </div>
    </footer>
  )
}

function FooterColumn({ title, items }: { title: string; items: { href: string; label: string }[] }) {
  return (
    <div>
      <div style={{
        fontFamily: "'Cinzel',serif",
        fontSize: '.7rem',
        letterSpacing: '.14em',
        color: 'var(--gold)',
        opacity: .65,
        textTransform: 'uppercase',
        marginBottom: '.85rem',
      }}>
        {title}
      </div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.55rem' }}>
        {items.map(item => (
          <li key={item.href}>
            <Link
              href={item.href}
              style={{
                color: 'var(--muted)',
                fontSize: '.82rem',
                textDecoration: 'none',
                transition: 'color .2s',
              }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
