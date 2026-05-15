import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tarot para Oferta de Trabajo — ¿Debería Aceptar el Empleo? | TarotAxis',
  description: 'Una tirada de tarot de oferta de trabajo para ayudarte a decidir si aceptar un nuevo puesto. Esquemas de 4 y 6 cartas para decisiones de carrera, nuevos roles y cambios laborales.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/carrera/oferta-de-trabajo',
    languages: {
      'en': 'https://tarotaxis.com/spreads/career/job-offer',
      'es': 'https://tarotaxis.com/es/tiradas/carrera/oferta-de-trabajo',
      'x-default': 'https://tarotaxis.com/spreads/career/job-offer',
    },
  },
  openGraph: {
    title: 'Tirada de Tarot para Oferta de Trabajo — ¿Debería Aceptar?',
    description: '¿Tienes una oferta de trabajo o una decisión de carrera? Estas tiradas iluminan lo que la oportunidad de verdad ofrece y lo que significa para tu camino.',
    url: 'https://tarotaxis.com/es/tiradas/carrera/oferta-de-trabajo',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS_4 = [
  { num: 1, name: 'La Oportunidad en Sí', desc: 'La verdadera naturaleza de este puesto u oferta — lo que de verdad contiene, más allá de la descripción del trabajo y las primeras impresiones.' },
  { num: 2, name: 'Lo Que Te Ofrece', desc: 'El crecimiento, la experiencia, la estabilidad o la realización que este puesto podría aportar — el valor real que tiene para tu desarrollo.' },
  { num: 3, name: 'A Qué Prestar Atención', desc: 'El reto, la dinámica oculta o la consideración que las cartas quieren que mires honestamente antes de decidir.' },
  { num: 4, name: 'Guía', desc: 'La energía y dirección general en torno a esta decisión — la respuesta más clara que las cartas pueden ofrecer sobre si este camino te sirve.' },
]

const POSITIONS_6 = [
  { num: 1, name: 'La Energía Real del Puesto', desc: 'Cómo es de verdad habitar este puesto día a día — la cultura, las demandas y la realidad detrás de la oferta.' },
  { num: 2, name: 'Tu Preparación', desc: 'Dónde estás ahora mismo en términos de habilidad, confianza y preparación interna para este tipo de rol.' },
  { num: 3, name: 'El Crecimiento que Ofrece', desc: 'Cómo este puesto podría estirarte y desarrollarte — el crecimiento profesional y personal contenido en aceptar.' },
  { num: 4, name: 'El Riesgo o el Reto', desc: 'Qué podría resultar difícil, exigente o desalineado — la desventaja honesta o el obstáculo para el que prepararse.' },
  { num: 5, name: 'Impacto en Tu Vida Más Amplia', desc: 'Cómo esta decisión se expande hacia afuera — hacia tus relaciones, tu bienestar, tu energía y tu vida fuera del trabajo.' },
  { num: 6, name: 'El Camino a Elegir', desc: 'La guía más clara que ofrecen las cartas sobre si aceptar, negociar o retirarse — y por qué.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Puede el tarot ayudarme a decidir si acepto una oferta de trabajo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tarot es una herramienta poderosa para la toma de decisiones — no porque prediga resultados, sino porque te ayuda a acceder a tu propio saber más profundo. Una tirada de oferta de trabajo puede revelar lo que de verdad sientes sobre la oportunidad, sacar a flote inquietudes que has estado dejando de lado y ofrecer una sensación más clara de si el puesto se alinea con tu camino. Funciona mejor junto a una evaluación práctica, no como sustituto de ella.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué cartas del tarot sugieren que debería aceptar el trabajo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El As de Pentáculos es el clásico "sí" a una nueva oportunidad — frescos comienzos materiales. La Rueda de la Fortuna sugiere un punto de inflexión a tu favor. El Sol indica éxito y plenitud. El Tres de Pentáculos apunta a crecimiento a través de la colaboración y el aprendizaje. La Estrella sugiere que el puesto se alinea con tus esperanzas. Son señales alentadoras, aunque la posición en la que aparecen importa tanto como la carta misma.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si La Torre aparece en mi lectura de oferta de trabajo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Torre en una lectura de carrera te pide mirar lo que podría ser inestable o insostenible. En la posición de la oportunidad, podría señalar un puesto con turbulencia oculta — una empresa en flujo, expectativas poco realistas o una cultura que podría resultar destructiva. En la posición del reto, puede significar simplemente una curva de aprendizaje empinada o un cambio significativo. Siempre mira las cartas circundantes antes de sacar conclusiones.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Debería hacer una lectura de tarot antes o después de una entrevista?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ambas tienen valor. Antes de una entrevista, una lectura corta puede ayudarte a tener claridad sobre lo que de verdad quieres y qué energía aportar. Después de la entrevista — una vez que tienes una sensación real del puesto y las personas — una tirada más completa como la de oferta de trabajo de 6 cartas puede ayudarte a procesar lo que sentiste y tomar una decisión aterrizada.',
      },
    },
  ],
}

export default function OfertaDeTrabajoSpreadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/es/tiradas" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Tiradas</Link>
          <span style={{ opacity: .4 }}>›</span>
          <Link href="/es/tiradas/carrera" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Carrera</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Oferta de Trabajo</span>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>💼</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Tirada de Tarot para Oferta de Trabajo
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            ¿Te enfrentas a una decisión profesional? Estas tiradas te ayudan a ver lo que la oportunidad de verdad contiene — incluyendo lo que tu instinto ya te está diciendo bajo la emoción o la ansiedad.
          </p>
        </div>

        {/* 4-card */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            Tirada de Decisión Rápida de 4 Cartas
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Cuando necesitas una respuesta clara rápidamente. Cuatro cartas te dan la información esencial — lo que el puesto contiene, lo que ofrece, a qué prestar atención y dónde aterrizar.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1.75rem' }}>
            {[1, 2, 3, 4].map(n => (
              <div key={n} style={{ width: 52, height: 80, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>{n}</div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS_4.map(({ num, name, desc }) => (
              <div key={num} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.1rem', background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12 }}>
                <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem' }}>{num}</div>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', marginBottom: '.3rem' }}>{name}</div>
                  <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6-card */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            Tirada de Decisión Completa de 6 Cartas
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Para decisiones más grandes — un cambio de rol, un ascenso significativo o un traslado a una nueva empresa. Esta tirada examina no solo el trabajo en sí, sino cómo encaja en tu vida más amplia y hacia dónde te llama de verdad tu camino.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS_6.map(({ num, name, desc }) => (
              <div key={num} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.1rem', background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12 }}>
                <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem' }}>{num}</div>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', marginBottom: '.3rem' }}>{name}</div>
                  <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '1.1rem' }}>Preguntas Frecuentes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {faqSchema.mainEntity.map((item, i, arr) => (
              <div key={item.name} style={{ paddingBottom: i < arr.length - 1 ? '1.1rem' : 0, borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <p style={{ fontFamily: "'Cinzel',serif", fontSize: '.85rem', color: 'var(--gold)', margin: '0 0 .4rem' }}>{item.name}</p>
                <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <Link href="/es/tiradas/carrera" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Más tiradas</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Todas las tiradas de carrera →</div>
          </Link>
          <Link href="/es/lectura-gratis" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Pruébala ahora</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Lectura gratuita →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
