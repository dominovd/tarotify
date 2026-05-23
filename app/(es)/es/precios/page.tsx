// ════════════════════════════════════════════════════════════════════════════
// /es/precios — Gratis hoy, nivel premium en la hoja de ruta
// ════════════════════════════════════════════════════════════════════════════
//
// Refleja /pricing 1:1 con copy y listas traducidas. Sin checkout —
// premium aún no está activo; aparecerá un sprint posterior cuando esté.
// ════════════════════════════════════════════════════════════════════════════

import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Precios — TarotAxis es gratis | TarotAxis',
  description:
    'TarotAxis es 100% gratis hoy — lecturas de tarot con IA, la biblioteca completa de 78 cartas, diario sincronizado en la nube, tiradas y herramientas abiertas para todos. Un nivel premium llega en 2026 — lo gratis se queda gratis para siempre.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/precios',
    languages: {
      en: 'https://tarotaxis.com/pricing',
      es: 'https://tarotaxis.com/es/precios',
      'x-default': 'https://tarotaxis.com/pricing',
    },
  },
  openGraph: {
    title: 'TarotAxis es gratis — Premium llega en 2026',
    description:
      'Lecturas de tarot con IA, la biblioteca completa de 78 cartas, diario sincronizado — todo gratis hoy. El nivel premium será aditivo, no restrictivo.',
    type: 'website',
  },
}

// ─── contenido ──────────────────────────────────────────────────────────────

const FREE_FEATURES: { label: string; sub?: string }[] = [
  { label: '5 lecturas con IA al día', sub: '1 al día para invitados, con Claude' },
  { label: 'Las 78 cartas completas', sub: 'derechas, invertidas, "como sentimientos", amor, carrera, espiritualidad' },
  { label: 'Carta del día, oráculo Sí/No, Carta de Nacimiento, Quiz de tarot' },
  { label: 'Todas las tiradas + Analizador de lecturas', sub: 'analiza una tirada que hiciste en casa' },
  { label: 'Diario sincronizado en la nube + memoria de patrones', sub: 'cartas más sacadas y temas recurrentes a partir de 10 lecturas' },
  { label: 'Envía cualquier lectura a tu correo' },
  { label: 'Comparte las lecturas como imagen' },
  { label: 'Grafo de conocimiento en cada página de carta', sub: 'aparece-a-menudo-con, mismo número, mismo elemento' },
  { label: 'Tendencias de tarot en vivo', sub: 'cartas más sacadas en todo el sitio, actualizado a diario' },
]

const PREMIUM_PLAN: { label: string; sub?: string }[] = [
  { label: 'Lecturas con IA ilimitadas', sub: 'sin tope diario' },
  { label: 'Interpretaciones más profundas', sub: 'modelo más grande + síntesis más larga en cada tirada' },
  { label: 'Diseñador de tiradas personalizadas', sub: 'define tus propias posiciones; reutilizables entre lecturas' },
  { label: 'Exportar lectura o diario completo a PDF' },
  { label: 'Enlaces públicos para compartir lecturas', sub: 'URL /shared/{token} opt-in que cualquiera puede abrir' },
  { label: 'Reflexión mensual de IA sobre tu diario', sub: 'la IA sintetiza tus patrones a fin de mes' },
  { label: 'Carta del día personalizada por correo', sub: 'basada en tu fecha de nacimiento y tu historial' },
  { label: 'Acceso anticipado a nuevos idiomas', sub: 'francés / portugués / alemán cuando se lancen' },
]

const FAQ = [
  {
    q: '¿Alguna función gratis se volverá solo de pago?',
    a: 'No. Las 78 páginas de cartas, las lecturas con IA, el diario, las tiradas, la carta del día, el Sí/No, el quiz, las tendencias y todas las páginas educativas se quedan gratis para siempre. El premium es estrictamente aditivo — funciones nuevas, no restricciones sobre lo existente.',
  },
  {
    q: '¿Cuándo llegará exactamente el premium?',
    a: 'Cuando coincidan tres condiciones: TarotAxis tenga suficientes visitantes mensuales para que valga la pena mantener la infraestructura de suscripción, exista un proveedor de pagos compatible con contenido de tarot y con la jurisdicción del operador, y se hayan validado las funciones concretas por las que la gente pagaría. Realísticamente, más adelante en 2026.',
  },
  {
    q: '¿Puedo apoyar a TarotAxis de otra forma hoy?',
    a: 'Las dos cosas más útiles son compartir el sitio con amistades que leen tarot y enviarnos feedback a info@tarotaxis.com sobre qué funciones realmente pagarías. La versión gratis mejora más rápido cuando hay una señal clara de en qué invertir.',
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

export default function PreciosPage() {
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
        <Link href="/es" style={{ color: 'var(--muted)' }}>Inicio</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Precios</span>
      </nav>

      {/* Hero */}
      <header style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={heroEyebrow}>Precios</div>
        <h1 style={heroH1}>Gratis hoy. Para siempre gratis en lo que ya hay aquí.</h1>
        <p style={heroP}>
          TarotAxis se financia con paciencia, no con paywalls. Lecturas con IA, la biblioteca
          completa de 78 cartas, tu diario, las tiradas y las herramientas — abiertas para todos.
          Un nivel premium llega a finales de 2026 como una capa estrictamente aditiva.
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
          <div style={tierEyebrow}>Gratis — hoy</div>
          <div style={priceLine}>
            <span style={priceBig}>$0</span>
            <span style={priceSub}>la mayoría sin necesidad de cuenta</span>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.65, marginTop: '1rem', marginBottom: '1.25rem' }}>
            Todo lo de abajo funciona ahora mismo. Crea una cuenta gratis para desbloquear la cuota
            de 5 lecturas al día y el diario sincronizado en la nube.
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
            <Link href="/es/auth/signup" style={{
              display: 'inline-block', padding: '.65rem 1.2rem', borderRadius: 10,
              border: '1px solid var(--gold)', background: 'rgba(201,168,76,.12)',
              color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.82rem',
              letterSpacing: '.06em', textDecoration: 'none',
            }}>
              Crear cuenta gratis
            </Link>
            <Link href="/es/lectura-gratis" style={{
              display: 'inline-block', padding: '.65rem 1.2rem', borderRadius: 10,
              border: '1px solid var(--border)', background: 'var(--on-bg-04)',
              color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem',
              letterSpacing: '.06em', textDecoration: 'none',
            }}>
              Probar una lectura primero
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
            <div style={tierEyebrow}>Premium — llega en 2026</div>
            <span style={{
              padding: '.2rem .65rem', borderRadius: 16, fontSize: '.6rem',
              fontFamily: "'Cinzel',serif", letterSpacing: '.12em', textTransform: 'uppercase',
              background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)',
              color: 'var(--gold)',
            }}>
              Aún no activo
            </span>
          </div>
          <div style={priceLine}>
            <span style={priceBig}>≤ $10</span>
            <span style={priceSub}>al mes, objetivo. Anual ahorra ~35%.</span>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.65, marginTop: '1rem', marginBottom: '1.25rem' }}>
            Todo lo de Gratis, más las adiciones de abajo. Aún sin checkout — esto es la hoja de
            ruta.
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
            ¿Quieres alguna de estas funciones cuando llegue? Escríbenos a{' '}
            <a href="mailto:info@tarotaxis.com" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
              info@tarotaxis.com
            </a>{' '}
            y te avisaremos directamente.
          </p>
        </section>
      </div>

      {/* FAQ */}
      <h2 style={sectionTitle}>Preguntas frecuentes</h2>
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

      {/* Pointer to methodology */}
      <section style={{
        marginTop: '3rem',
        padding: '1.75rem',
        background: 'var(--on-bg-02)',
        border: '1px solid rgba(201,168,76,.15)',
        borderRadius: 14,
        textAlign: 'center',
      }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.7rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.75rem' }}>
          ¿Curiosidad por cómo funcionan las lecturas?
        </div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
          El marco interpretativo, las salvaguardas de IA y la postura editorial detrás de cada
          lectura.
        </p>
        <Link href="/es/metodologia" style={{
          display: 'inline-block', padding: '.7rem 1.8rem', background: 'transparent',
          border: '1px solid var(--gold)', borderRadius: 10, color: 'var(--gold)',
          fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em',
          textDecoration: 'none',
        }}>
          ✦ Lee la metodología
        </Link>
      </section>
    </div>
  )
}
