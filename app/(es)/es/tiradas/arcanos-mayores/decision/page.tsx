import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Decisión de Arcanos Mayores — Tarot Arquetípico de 3 Cartas | TarotAxis',
  description: 'Una tirada de tarot de decisión con 3 cartas de Arcanos Mayores para preguntas en encrucijada. Mira el camino arquetípico de cada opción y la enseñanza más profunda que corre bajo ambas.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/arcanos-mayores/decision',
    languages: {
      'en': 'https://tarotaxis.com/spreads/major/decision',
      'es': 'https://tarotaxis.com/es/tiradas/arcanos-mayores/decision',
      'x-default': 'https://tarotaxis.com/spreads/major/decision',
    },
  },
  openGraph: {
    title: 'Tirada de Decisión de Arcanos Mayores — Tarot Arquetípico de Elección',
    description: 'Tres triunfos: el camino de la Opción A, el camino de la Opción B, y la lección del alma más profunda independientemente de cuál elijas.',
    url: 'https://tarotaxis.com/es/tiradas/arcanos-mayores/decision',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  { num: 1, name: 'El camino de la Opción A', desc: 'La energía arquetípica del primer camino. No si tiene éxito en términos mundanos, sino el currículo del alma que porta — qué te pedirá, qué crecerá en ti, en quién te convertirá.' },
  { num: 2, name: 'El camino de la Opción B', desc: 'La energía arquetípica del segundo camino. Léela en el mismo registro que la primera carta — la textura más profunda del camino, no su atractivo o riesgo superficial.' },
  { num: 3, name: 'La enseñanza más profunda', desc: 'La lección que corre debajo de ambos caminos — la verdad con la que tu alma está aquí para encontrarse independientemente de qué opción elijas. A menudo la carta más importante de la tirada.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿En qué se diferencia una tirada de decisión de Arcanos Mayores de una lectura de pros y contras?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una lectura de pros y contras sopesa ventajas prácticas de cada opción — dinero, tiempos, conveniencia. Una tirada de decisión de Arcanos Mayores hace algo distinto: muestra la forma arquetípica de cada camino, la lección del alma que porta, y la enseñanza más profunda presente independientemente de qué opción elijas. Responde a un tipo distinto de pregunta, una a la que el pros-y-contras no puede llegar.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué carta me dice qué opción elegir?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ninguna directamente. La tirada no es un motor de recomendaciones; es una clarificadora. Al ver honestamente la energía arquetípica de cada camino, y la enseñanza más profunda que corre bajo ambos, te pones en posición de elegir conscientemente más que reactivamente. La decisión sigue siendo tuya, y está más alineada por haberse tomado con los ojos abiertos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si ambas cartas se ven igual de buenas o igual de difíciles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cuando ambas cartas de opción tienen peso o sensación similar, la tercera carta — la enseñanza más profunda — se vuelve especialmente importante. La tirada te está diciendo que la elección entre los caminos importa menos que la lección subyacente con la que estás aquí para encontrarte. La enseñanza es la misma de cualquier modo; lo que cambia es la textura en la que la aprendes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo usar esta tirada para más de dos opciones?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí — añade una carta triunfal por opción y conserva la carta final como la enseñanza más profunda. Una elección de tres opciones usaría cuatro cartas: tres caminos y una lección subyacente. Procura no expandir más allá de cuatro opciones; pasado ese punto la tirada se vuelve difusa y el contraste entre caminos pierde nitidez.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Debo hacer esta tirada cuando ya sé lo que quiero?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Especialmente entonces. Cuando ya sabes lo que quieres, la tirada te mostrará el terreno arquetípico que realmente estás eligiendo — incluyendo las partes que no te has permitido ver. Puede confirmar la elección, complicarla, o revelar que lo que creías querer era un sustituto de algo más profundo. De cualquier manera, caminas hacia adelante con más honestidad.',
      },
    },
  ],
}

export default function MajorDecisionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/es/tiradas" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Tiradas</Link>
          <span style={{ opacity: .4 }}>›</span>
          <Link href="/es/tiradas/arcanos-mayores" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Arcanos Mayores</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Decisión</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>⚖</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Tirada de Decisión de Arcanos Mayores
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            Una lectura arquetípica de tres cartas para las elecciones donde el pros-y-contras se queda sin voz. Dos caminos, la lección del alma bajo ambos, y una visión más clara de entre qué estás eligiendo realmente.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Antes de empezar
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Esta tirada es más útil para decisiones que se sienten pesadas en desproporción con sus apuestas superficiales — la oferta de trabajo que de algún modo se ha vuelto una pregunta sobre quién eres, la mudanza que también es una confesión, la elección de relación que también es una elección vocacional. Cuando una decisión opera al nivel arquetípico, sólo una lectura arquetípica dará consejo honesto.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Nombra las dos opciones en voz alta antes de barajar. Dilas claramente, en su realidad plena — no "la opción segura y la opción valiente", sino las elecciones reales con sus nombres reales. Después baraja los 22 triunfos, saca tres cartas y colócalas en una fila.
          </p>
        </div>

        {/* Layout */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            Las tres cartas
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Una simple fila horizontal. Opción A a la izquierda, Opción B a la derecha, y la enseñanza más profunda en el centro — o dispuesta como la clave del pequeño arco que forman juntas.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {[1, 3, 2].map(n => (
              <div key={n} style={{ width: 52, height: 80, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>
                {n}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS.map(({ num, name, desc }) => (
              <div key={num} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.1rem', background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12 }}>
                <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem' }}>{num}</div>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', marginBottom: '.3rem' }}>{name}</div>
                  <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interpreting tips */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Cómo leer tus resultados
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Lee cada carta de opción por sí sola primero. No las compares aún — siéntate con cada una como si fuera el único camino, y pregúntate en qué tipo de persona se convertiría quien lo recorriera. ¿Qué te pide? ¿Qué cuesta? ¿Qué madura?
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Después incorpora la tercera carta. Fíjate especialmente cuando la enseñanza más profunda parezca compartir un elemento o tema con una de las opciones — esa resonancia es a menudo donde reside el consejo más honesto. Si la carta de enseñanza y la opción A apuntan ambas hacia la soledad y la interioridad, el alma ya se está moviendo en esa dirección; la opción B puede portar cosas buenas pero está pidiéndote ir a contracorriente.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Presta especial atención a tu respuesta corporal. La carta que te hace levemente estremecerte, o la que te encuentras queriendo explicar, suele ser la lectura más verdadera. Una tirada de decisión sólo de Mayores tiende a ser poco sutil una vez que la dejas aterrizar.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '1.1rem' }}>Preguntas frecuentes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {faqSchema.mainEntity.map((item, i, arr) => (
              <div key={item.name} style={{ paddingBottom: i < arr.length - 1 ? '1.1rem' : 0, borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <p style={{ fontFamily: "'Cinzel',serif", fontSize: '.85rem', color: 'var(--gold)', margin: '0 0 .4rem' }}>{item.name}</p>
                <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related links */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <Link href="/es/tiradas/arcanos-mayores" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Más tiradas</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Todas las tiradas de Arcanos Mayores →</div>
          </Link>
          <Link href="/es/lectura-gratis" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Pruébalo ahora</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Lectura de tarot gratis →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
