import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tarot de Luna Nueva — Guía para Fijar Intenciones | TarotAxis',
  description: 'Fija intenciones poderosas con una tirada de tarot de luna nueva. Esquemas de 3 y 5 cartas para nuevos comienzos, manifestación y enfoque mensual. Significados de posición y guía ritual.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/luna-nueva',
    languages: {
      'en': 'https://tarotaxis.com/spreads/new-moon',
      'es': 'https://tarotaxis.com/es/tiradas/luna-nueva',
      'x-default': 'https://tarotaxis.com/spreads/new-moon',
    },
  },
  openGraph: {
    title: 'Tirada de Tarot de Luna Nueva — Guía para Fijar Intenciones',
    description: 'Fija intenciones poderosas con una tirada de tarot de luna nueva. Esquemas de 3 y 5 cartas para nuevos comienzos, manifestación y enfoque mensual.',
    url: 'https://tarotaxis.com/es/tiradas/luna-nueva',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const INTENTIONS_POSITIONS = [
  {
    num: 1,
    name: 'Tema de Este Ciclo',
    desc: 'La energía general de este ciclo de luna nueva. ¿Qué te está invitando a explorar, desarrollar o atender el universo — y tu propia naturaleza más profunda — durante las próximas cuatro semanas? Esta carta marca el tono de todo lo que sigue.',
  },
  {
    num: 2,
    name: 'En Qué Enfocarme',
    desc: 'Tu intención principal para este ciclo. ¿Dónde debe concentrarse más tu energía, atención y acción? Esta carta señala la semilla más digna de plantarse bajo esta luna nueva.',
  },
  {
    num: 3,
    name: 'Qué Soltar para Hacer Espacio',
    desc: 'Incluso en la luna nueva — tradicionalmente un tiempo de comienzo — algo debe ser soltado para hacer espacio a lo que llega. Esta carta identifica el hábito, creencia, distracción o apego que más se beneficiaría de ser depositado antes de empezar.',
  },
]

const MANIFESTATION_POSITIONS = [
  {
    num: 1,
    name: 'De Dónde Parto',
    desc: 'Una evaluación honesta de tu punto de partida actual. No dónde quieres estar — dónde realmente estás. Esta carta te pide ver tu base con claridad para que tus intenciones se asienten en la realidad y no en la ilusión.',
  },
  {
    num: 2,
    name: 'Qué Quiero Atraer',
    desc: 'La cualidad, experiencia, relación, logro o cambio que más quieres manifestar durante el próximo ciclo. Formúlalo con la mayor claridad posible antes de sacar — la luna nueva recompensa la especificidad.',
  },
  {
    num: 3,
    name: 'Qué Me Apoya',
    desc: 'El recurso, fortaleza, persona, circunstancia o aliado energético ya disponible para ti. Esta carta te recuerda que no estás empezando desde cero — algo ya está de tu lado.',
  },
  {
    num: 4,
    name: 'Qué Me Bloquea',
    desc: 'El obstáculo interno o externo con más probabilidad de impedir tu intención este ciclo. Conocer el bloqueo de antemano te permite abordarlo conscientemente en vez de ser desviado por él.',
  },
  {
    num: 5,
    name: 'Guía para Este Ciclo',
    desc: 'La pieza más importante de sabiduría para navegar este ciclo de luna nueva. Esta carta sintetiza la lectura y ofrece un principio guía al que volver cuando te sientas confuso o fuera de rumbo.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una tirada de tarot de luna nueva?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada de tarot de luna nueva es un esquema de cartas diseñado para usarse al inicio del ciclo lunar, cuando la luna no es aún visible en el cielo. La luna nueva se asocia tradicionalmente con nuevos comienzos, intenciones, manifestación y la siembra de semillas — tanto literales como metafóricas. Una tirada de tarot de luna nueva usa estos temas como significados de posición, ofreciendo un ritual mensual estructurado para fijar intenciones y aclarar lo que quieres cultivar durante las próximas cuatro semanas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuándo debería hacer una tirada de tarot de luna nueva?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El mejor momento para una tirada de tarot de luna nueva es dentro de las 48 horas posteriores a la luna nueva exacta — idealmente la tarde de la luna nueva misma o al día siguiente. Astrológicamente, la ventana de luna nueva para fijar intenciones se cierra cuando la luna se ha movido más de 48 horas más allá de su conjunción exacta con el sol. Muchas practicantes también gustan de trabajar el día anterior como ritual de preparación. Consulta un calendario lunar para la hora exacta de la luna nueva en tu zona horaria.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué se diferencia una tirada de luna nueva de una de luna llena?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las tiradas de luna nueva y luna llena son opuestos complementarios. La tirada de luna nueva mira hacia adelante — es sobre comienzos, intenciones, manifestación y lo que quieres atraer a tu vida. La tirada de luna llena mira hacia atrás y se enfoca en el presente — es sobre culminación, soltar, gratitud y reconocer lo que ya ha fructificado. Usadas juntas a lo largo de un ciclo lunar completo, crean un ritmo ritual poderoso: plantar intenciones en la luna nueva, soltar y celebrar en la luna llena.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo uso los resultados de mi lectura de luna nueva?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Después de tu lectura de luna nueva, anota tu intención y la guía de cada posición de carta. Coloca esto donde lo veas a lo largo del mes — un diario, una foto en el móvil o una nota en tu escritorio. Vuelve a la lectura en la luna creciente (cuarto creciente) como revisión: ¿estás alineado con la intención que fijaste? En la luna llena, mira la lectura para ver qué se ha manifestado. La lectura de luna nueva es más poderosa cuando se trata como un documento vivo y no como un evento único.',
      },
    },
  ],
}

export default function LunaNuevaPage() {
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <Link href="/es" style={{ color: 'var(--muted)' }}>Inicio</Link>
        <span>/</span>
        <Link href="/es/tiradas" style={{ color: 'var(--muted)' }}>Tiradas de Tarot</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Tirada de Luna Nueva</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>◐</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tarot de Luna Nueva
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          La luna nueva es el momento de mayor potencial — el cielo oscuro antes de que regrese la luz. Usa esta tirada para fijar intenciones claras, identificar lo que quieres manifestar y alinear tu energía con el nuevo comienzo que ofrece el ciclo lunar.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['3–5 Cartas', 'Apto para Principiantes', 'Manifestación'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* New Moon Energy */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          La Energía de la Luna Nueva
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            La luna nueva es la luna invisible — el momento en que la luna se sitúa entre la tierra y el sol, con su cara iluminada apartada por completo de nosotros. En esta oscuridad reside la semilla de todo lo que está por desplegarse. Las culturas antiguas de todo el mundo reconocieron la luna nueva como el tiempo más potente para los comienzos: plantar cultivos, fijar intenciones, iniciar empresas, hacer votos. Aquel instinto no era superstición — era una sintonización con los ritmos naturales de expansión y contracción que rigen todos los sistemas vivos.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            En la práctica del tarot, la luna nueva invita a la energía del Loco — el salto hacia lo desconocido con las manos abiertas y el corazón pleno. Es el momento antes de voltear la primera carta. Todo es posible; nada está aún fijado. Las intenciones que fijas bajo una luna nueva tienen toda la fuerza de la luz lunar creciente detrás durante las dos semanas que la luna se llena hasta su plenitud.
          </p>
          <p>
            Cada luna nueva cae en un signo astrológico distinto, coloreando las intenciones de ese ciclo en particular. Una luna nueva en Capricornio favorece ambiciones y estructuras a largo plazo; una en Cáncer pide cuidado emocional y hogar; en Aries enciende una nueva acción audaz. Conocer el signo de la luna nueva actual puede añadir profundidad y especificidad a tu práctica de fijar intenciones con tarot.
          </p>
        </div>
      </div>

      {/* New Moon Intentions Spread */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Esquema 1 — Intenciones de Luna Nueva (3 Cartas)
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Una tirada simple y poderosa de tres cartas para fijar intenciones mensuales. Cubre el tema del ciclo, tu enfoque principal y qué soltar para hacerle espacio. Ideal para una práctica mensual consistente.
        </p>

        {/* Visual Layout */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Esquema de Cartas
          </div>
          <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', alignItems: 'flex-start' }}>
            {INTENTIONS_POSITIONS.map(pos => (
              <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                <div style={{ width: 80, height: 120, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1.2rem', color: 'var(--gold)' }}>
                  {pos.num}
                </div>
                <div style={{ fontSize: '.62rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', maxWidth: 80 }}>{pos.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {INTENTIONS_POSITIONS.map(pos => (
            <div key={pos.num} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.8rem', color: 'var(--gold)' }}>
                {pos.num}
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.88rem', color: 'var(--gold)', marginBottom: '.5rem' }}>{pos.name}</div>
                <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{pos.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* New Moon Manifestation Spread */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Esquema 2 — Manifestación de Luna Nueva (5 Cartas)
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Una tirada más profunda de cinco cartas para el trabajo de manifestación. Este esquema examina tu punto de partida, tu intención, qué te apoya y bloquea, y la guía que te llevará a través del ciclo.
        </p>

        {/* Visual Layout */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Esquema de Cartas
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {MANIFESTATION_POSITIONS.map(pos => (
              <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                <div style={{ width: 68, height: 102, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1rem', color: 'var(--gold)' }}>
                  {pos.num}
                </div>
                <div style={{ fontSize: '.58rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', textAlign: 'center', maxWidth: 68 }}>{pos.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {MANIFESTATION_POSITIONS.map(pos => (
            <div key={pos.num} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.8rem', color: 'var(--gold)' }}>
                {pos.num}
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.88rem', color: 'var(--gold)', marginBottom: '.5rem' }}>{pos.name}</div>
                <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{pos.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Preguntas Frecuentes
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {faqSchema.mainEntity.map(item => (
            <div key={item.name} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>¿Lista para fijar tus intenciones?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Saca tus cartas de luna nueva y usa los significados de posición de arriba para guiar tu interpretación.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/lectura-gratis" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Sacar Cartas Ahora
          </Link>
          <Link href="/es/tiradas/luna-llena" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Tirada de Luna Llena
          </Link>
          <Link href="/es" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Todas las Tiradas
          </Link>
        </div>
      </div>
    </div>
  )
}
