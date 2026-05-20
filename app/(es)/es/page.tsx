import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'TarotAxis — Lecturas de Tarot Gratis y Significado de las Cartas',
  description: 'Lecturas de tarot gratuitas para la reflexión personal. Saca tres cartas, descubre el significado de las 78 cartas, consulta el oráculo Sí/No y encuentra claridad.',
  alternates: {
    canonical: 'https://tarotaxis.com/es',
    languages: {
      'en': 'https://tarotaxis.com/',
      'es': 'https://tarotaxis.com/es',
      'x-default': 'https://tarotaxis.com/',
    },
  },
  openGraph: {
    title: 'TarotAxis — Lecturas de Tarot Gratis',
    description: 'Saca tres cartas, descubre el significado de las 78 cartas y encuentra claridad.',
    url: 'https://tarotaxis.com/es',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://tarotaxis.com/es#website',
      url: 'https://tarotaxis.com/es',
      name: 'TarotAxis',
      description: 'Lecturas de tarot gratuitas para la reflexión personal.',
      inLanguage: 'es',
    },
    {
      '@type': 'WebApplication',
      '@id': 'https://tarotaxis.com/es#webapp',
      name: 'TarotAxis — Lecturas de Tarot Gratis',
      url: 'https://tarotaxis.com/es',
      description: 'Lecturas de tarot gratuitas. Saca tres cartas, recibe una lectura personalizada, explora los significados de las 78 cartas y consulta el oráculo Sí/No.',
      applicationCategory: 'EntertainmentApplication',
      operatingSystem: 'Any',
      inLanguage: 'es',
      isAccessibleForFree: true,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
  ],
}

const FAQS = [
  {
    q: '¿La lectura de tarot es realmente gratuita?',
    a: 'Sí. Todas las lecturas, los significados de las cartas y las herramientas de TarotAxis son completamente gratuitas. No requerimos registro para usar el oráculo, la tirada de tres cartas ni explorar los significados de las 78 cartas.',
  },
  {
    q: '¿Cómo se interpreta una lectura de tarot?',
    a: 'Una lectura de tarot conecta el significado simbólico de cada carta con tu situación actual. En TarotAxis cada carta tiene su interpretación del derecho, invertida, y enfoques específicos para el amor, la carrera y la espiritualidad.',
  },
  {
    q: '¿Qué baraja de tarot usan?',
    a: 'Por defecto usamos un arte Art Nouveau original generado con IA, inspirado en la tradición Rider-Waite-Smith. También puedes cambiar a una baraja pastel o al clásico Rider-Waite de dominio público desde el menú.',
  },
  {
    q: '¿Las cartas invertidas significan algo malo?',
    a: 'No necesariamente. Una carta invertida indica que su energía está bloqueada, internalizada o necesita atención. A veces señala una etapa de aprendizaje, otras veces un patrón que está pidiendo ser sanado.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function SpanishHome() {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '.5rem', color: 'var(--gold)' }}>✦</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.6rem,4.5vw,2.4rem)', color: 'var(--gold)', marginBottom: '.85rem', lineHeight: 1.25 }}>
          Lecturas de Tarot Gratis
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7, fontSize: '1rem' }}>
          Saca tres cartas y recibe una interpretación personalizada con IA, explora el significado de las 78 cartas, o consulta el oráculo de Sí/No para una respuesta directa.
        </p>
        <div style={{ display: 'flex', gap: '.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
          {['Lectura con IA gratis', 'Sin tarjeta', 'Significados completos'].map(t => (
            <span key={t} style={{ padding: '.3rem .85rem', border: '1px solid var(--border)', borderRadius: 18, fontSize: '.72rem', color: 'var(--muted)', fontFamily: "'Cinzel',serif", letterSpacing: '.06em' }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Primary CTA — interactive 3-card free reading with AI interpretation */}
      <Link
        href="/es/lectura-gratis"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '.65rem',
          width: '100%',
          padding: '1.1rem',
          background: 'linear-gradient(135deg,rgba(201,168,76,.18),rgba(201,168,76,.08))',
          border: '1px solid var(--gold)',
          borderRadius: 12,
          color: 'var(--gold)',
          fontFamily: "'Cinzel',serif",
          fontSize: '.95rem',
          letterSpacing: '.1em',
          textAlign: 'center',
          textDecoration: 'none',
        }}
      >
        ✦ Sacar tres cartas con lectura IA
        <span style={{
          fontSize: '.6rem',
          letterSpacing: '.12em',
          padding: '.18rem .5rem',
          background: 'rgba(201,168,76,.18)',
          border: '1px solid rgba(201,168,76,.55)',
          borderRadius: 20,
          color: 'var(--gold)',
        }}>
          GRATIS
        </span>
      </Link>

      {/* Quick links */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: '.65rem', marginTop: '3rem' }}>
        {[
          { icon: '🔮', label: 'Sí / No', href: '/es/si-no' },
          { icon: '◐', label: 'Significado de las Cartas', href: '/es/cartas' },
          { icon: '❦', label: 'Como Sentimientos', href: '/es/cartas?view=feelings' },
          { icon: '☽', label: 'Carta del Día', href: '/es/carta-del-dia' },
          { icon: '✦', label: 'Tiradas', href: '/es/tiradas' },
          { icon: '🜃', label: 'Manifestación', href: '/es/manifestacion' },
          { icon: '✦', label: 'Para Principiantes', href: '/es/tarot-para-principiantes' },
          { icon: '♣', label: 'Palos del Tarot', href: '/es/palos-del-tarot' },
          { icon: '◈', label: 'Combinaciones', href: '/es/combinaciones' },
          { icon: '♍', label: 'Zodíaco', href: '/es/zodiaco' },
        ].map(({ icon, label, href }, i) => {
          const disabled = false
          return (
            <Link
              key={i}
              href={href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '.5rem',
                color: disabled ? 'rgba(192,192,192,.4)' : 'var(--muted)',
                padding: '.9rem .75rem',
                border: '1px solid var(--border)',
                borderRadius: 12,
                textDecoration: 'none',
                transition: 'border-color .2s',
                pointerEvents: disabled ? 'none' : 'auto',
                opacity: disabled ? .55 : 1,
              }}
            >
              <span style={{ fontSize: '1.35rem' }}>{icon}</span>
              <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.7rem', letterSpacing: '.05em', textAlign: 'center', lineHeight: 1.3 }}>
                {label}
              </span>
            </Link>
          )
        })}
      </div>

      <p style={{ color: 'var(--muted)', fontSize: '.72rem', textAlign: 'center', marginTop: '1rem', opacity: .65 }}>
        Todas las secciones principales ya están disponibles en español.
      </p>

      {/* Email capture */}
      <div style={{ marginTop: '3.5rem' }}>
        <EmailCapture source="es_home" />
      </div>

      {/* FAQ */}
      <div style={{ marginTop: '3.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {FAQS.map(({ q, a }) => (
            <div key={q} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem' }}>{q}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
