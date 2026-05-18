// Pricing page — currently "TarotAxis is free" mode. Paid tier infrastructure
// (Sprint 2 Paddle code in app/api/paddle/*) is deployed but inactive while
// a tarot+UA-compatible payment provider is identified. See memory:
// llm_discoverability_strategy.md and monetisation_plan_pointer.md.

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Precios — TarotAxis es gratis | TarotAxis',
  description: 'TarotAxis es actualmente 100% gratis — todas las lecturas, significados, tiradas y páginas de aprendizaje abiertas para todos. Se planea un nivel premium para 2026.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/precios',
    languages: {
      'en': 'https://tarotaxis.com/pricing',
      'es': 'https://tarotaxis.com/es/precios',
      'x-default': 'https://tarotaxis.com/pricing',
    },
  },
  openGraph: {
    title: 'TarotAxis es gratis',
    description: 'Cada lectura, significado de carta, tirada y página de aprendizaje está abierta para todos. Nivel premium planeado para 2026.',
    type: 'website',
  },
}

const FAQ = [
  {
    q: '¿TarotAxis es realmente completamente gratis?',
    a: 'Sí. Todas las lecturas, significados de cartas, tiradas, rituales lunares, páginas de combinaciones y guías de aprendizaje del sitio están abiertas para todos sin necesidad de cuenta. Las más de 789 páginas indexadas — incluidas las 78 cartas con sus lecturas completas al derecho, invertidas, como sentimientos y en el amor — son accesibles sin pago.',
  },
  {
    q: '¿Cómo se financia TarotAxis si es gratis?',
    a: 'Por ahora, el sitio se construye y mantiene sin ingresos. Un nivel premium — diario sincronizado en la nube, correo prioritario de la carta del día, interpretación con IA — está planeado para 2026 como una capa opcional sobre el sitio gratuito. El lado gratuito seguirá siendo gratis; el premium añadirá nuevas funciones, no cerrará las existentes.',
  },
  {
    q: '¿Cuándo se lanzará el nivel premium?',
    a: 'Cuando la audiencia alcance un tamaño que justifique mantener la infraestructura de suscripción, y cuando esté en marcha un proveedor de pago que acepte contenido de tarot y nuestra jurisdicción. Probablemente más tarde en 2026. Por ahora no hay lista de espera — crea una cuenta gratis si quieres que te avisemos.',
  },
  {
    q: '¿Alguna de las funciones gratuitas actuales se volverá premium?',
    a: 'No. Las más de 789 páginas públicas, todas las herramientas interactivas (Sí/No, Lectura Gratis, Quiz, Analizador de Lecturas, Calculadora de Combinaciones, Carta del Día, Carta de Nacimiento) y la experiencia bilingüe (inglés + español) seguirán siendo gratis permanentemente. Premium será puramente aditivo.',
  },
  {
    q: '¿Puedo apoyar TarotAxis de alguna otra manera?',
    a: 'Por el momento, no hay canal formal de apoyo configurado. Las contribuciones más útiles son compartir el sitio con amigos que lean tarot, enlazar páginas concretas de cartas o tiradas desde tu propia escritura, y enviar comentarios (info@tarotaxis.com) sobre qué pagarías realmente si se lanzara un nivel premium.',
  },
]

export default async function PreciosPage() {
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
        <Link href="/es" style={{ color: 'var(--muted)' }}>Inicio</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Precios</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '1.4rem', color: 'var(--gold)', opacity: .55, marginBottom: '.75rem', letterSpacing: '.2em' }}>✦ ☽ ◈</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4.4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem', letterSpacing: '.04em' }}>
          TarotAxis es gratis.
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 620, margin: '0 auto', lineHeight: 1.7 }}>
          Cada lectura, cada significado de carta, cada tirada, cada ritual lunar — abierto para todos, sin necesidad de cuenta. Un nivel premium está planeado para 2026, en capa sobre el sitio gratuito.
        </p>
      </div>

      {/* What is currently free — single panel */}
      <div style={{ background: 'linear-gradient(135deg, rgba(201,168,76,.06), rgba(201,168,76,.01))', border: '1px solid rgba(201,168,76,.18)', borderRadius: 14, padding: '2rem 1.75rem', marginBottom: '2rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .8, textTransform: 'uppercase', marginBottom: '.6rem' }}>
          Lo que tienes hoy — gratis
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '.4rem', marginBottom: '1.25rem' }}>
          <span style={{ fontFamily: "'Cinzel',serif", fontSize: '2rem', color: 'var(--gold)' }}>$0</span>
          <span style={{ color: 'var(--muted)', fontSize: '.85rem' }}>/ sin necesidad de cuenta</span>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.65rem' }}>
          {[
            'Lecturas completas de 78 cartas — tres cartas, Cruz Celta, año por delante, más de 30 tiradas temáticas',
            '78 páginas de cartas con lecturas extensas al derecho, invertidas, como sentimientos, en el amor, en la carrera y en lo espiritual',
            '78 páginas de oráculo sí/no + tirada interactiva Sí/No',
            'Carta del Día — visible en el sitio cada día, gratis para todos',
            'Quiz de Tarot, Analizador de Lecturas, Calculadora de Combinaciones, calculadora de Carta de Nacimiento',
            'Diario en el dispositivo local (últimas 20 entradas)',
            'Experiencia bilingüe — inglés + español, con hreflang completo',
            '~1.176 páginas de combinaciones — 40 lecturas matizadas curadas a mano + salida del motor de señales para el resto',
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
            Premium — llega en 2026
          </span>
          <span style={{ padding: '.2rem .65rem', background: 'rgba(201,168,76,.12)', border: '1px solid rgba(201,168,76,.25)', borderRadius: 16, fontSize: '.62rem', fontFamily: "'Cinzel',serif", letterSpacing: '.1em', color: 'var(--gold)', textTransform: 'uppercase' }}>
            Aún no activo
          </span>
        </div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          Un nivel premium está planeado para finales de 2026, sumándose al sitio gratuito. Las funciones gratuitas seguirán siendo gratis — premium será puramente aditivo. Lo que probablemente añadirá:
        </p>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.55rem' }}>
          {[
            'Diario sincronizado en la nube en todos tus dispositivos',
            'Historial de lecturas ilimitado más allá del tope local de 20 entradas',
            'Correo de la carta del día una hora antes que la lista gratuita',
            'Interpretación de lecturas asistida por IA (en desarrollo)',
            'Fija tus cartas, tiradas y combinaciones favoritas',
          ].map(item => (
            <li key={item} style={{ display: 'flex', gap: '.6rem', color: 'var(--text)', fontSize: '.84rem', lineHeight: 1.6, opacity: .85 }}>
              <span style={{ color: 'var(--gold)', flexShrink: 0, opacity: .65 }}>◦</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p style={{ color: 'var(--muted)', fontSize: '.78rem', lineHeight: 1.7, marginTop: '1.25rem', marginBottom: 0, fontStyle: 'italic' }}>
          Aún no se cobra ningún pago. No hay lista de espera — crea una cuenta gratis si quieres que te avisemos cuando se active premium.
        </p>
      </div>

      {/* FAQ */}
      <h2 style={{ fontFamily: "'Cinzel',serif", fontSize: '1.05rem', letterSpacing: '.06em', color: 'var(--gold)', marginBottom: '1rem' }}>
        Preguntas frecuentes
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
          ¿Tienes curiosidad por cómo funcionan las lecturas?
        </div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
          El marco interpretativo, las fuentes y la posición editorial detrás de cada lectura del sitio.
        </p>
        <Link href="/es/metodologia" style={{ display: 'inline-block', padding: '.8rem 2rem', background: 'transparent', border: '1px solid var(--gold)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em', textDecoration: 'none' }}>
          ✦ Lee la metodología
        </Link>
      </div>
    </div>
  )
}
