import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada Elemental de Tarot — 4 Cartas de Arcanos Mayores y Cuatro Elementos | TarotAxis',
  description: 'Una tirada elemental de tarot con 4 cartas usando sólo los Arcanos Mayores — Fuego, Agua, Aire y Tierra. Una lectura diagnóstica para el equilibrio interior y los cuatro elementos del ser.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/arcanos-mayores/elemental',
    languages: {
      'en': 'https://tarotaxis.com/spreads/major/elemental',
      'es': 'https://tarotaxis.com/es/tiradas/arcanos-mayores/elemental',
      'x-default': 'https://tarotaxis.com/spreads/major/elemental',
    },
  },
  openGraph: {
    title: 'Tirada Elemental de Tarot — Cuatro Elementos, Cuatro Triunfos',
    description: 'Fuego, Agua, Aire y Tierra — una carta de Arcano Mayor por cada elemento para mostrar dónde estás bien afinada/o y dónde el sistema interior ha quedado en silencio.',
    url: 'https://tarotaxis.com/es/tiradas/arcanos-mayores/elemental',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  { num: 1, name: 'Fuego — Voluntad, acción, vitalidad', desc: 'El estado de tu elemento ígneo. Tu voluntad, impulso, pulso creativo y capacidad de acción exterior. La carta aquí describe si el fuego arde limpio, parpadea, humea o se ha apagado.' },
  { num: 2, name: 'Agua — Sentimiento, intuición, relación', desc: 'El estado de tu elemento acuático. Flujo emocional, saber intuitivo y la cualidad de tu vida relacional. La carta muestra si el agua se mueve libre, se ha aquietado o desborda sus orillas.' },
  { num: 3, name: 'Aire — Pensamiento, comunicación, perspectiva', desc: 'El estado de tu elemento aéreo. Claridad mental, la cualidad de tu habla interior, la facilidad con la que puedes tomar perspectiva. La carta muestra si el aire está fresco y circula, o estancado y pesado.' },
  { num: 4, name: 'Tierra — Cuerpo, trabajo, fundamento material', desc: 'El estado de tu elemento terrestre. Encarnación, finanzas, el andamiaje práctico de tu vida. La carta muestra si el suelo bajo tus pies es firme, se erosiona, es fértil o está compactado.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una tirada elemental de tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada elemental de tarot es una disposición diagnóstica que examina cuatro facetas del ser — Fuego (voluntad), Agua (sentimiento), Aire (pensamiento) y Tierra (cuerpo) — usando una carta por elemento. Es una forma de ver dónde estás en equilibrio y dónde el sistema interior se ha inclinado, proporcionando un mapa estructurado del clima interior más que respondiendo a una sola pregunta específica.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo hacer una tirada elemental sólo con los Arcanos Mayores?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, y una tirada elemental sólo de Mayores es particularmente poderosa para el diagnóstico del nivel del alma. Como los triunfos hablan en lenguaje arquetípico, cada elemento queda descrito por un patrón profundo y recurrente más que por un estado de ánimo pasajero. Es la forma adecuada cuando quieres ver la condición de larga duración de cada elemento más que la textura de hoy.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Con qué frecuencia debo hacer esta tirada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mensualmente es un buen ritmo para la mayoría, especialmente en luna nueva o en el cambio de estación. Los elementos se mueven despacio al nivel arquetípico, así que lecturas semanales tienden a repetirse. Si acabas de atravesar un cambio vital importante, haz la tirada al otro lado de que el polvo se asiente — te mostrará el nuevo paisaje elemental.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si un elemento recibe una carta difícil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una carta Mayor difícil en un elemento no es un veredicto; es una descripción de dónde el sistema interior pide actualmente atención. La Torre en Tierra puede señalar un cimiento que se sacude y necesita reevaluación honesta; La Luna en Agua puede apuntar a niebla emocional que pide claridad lenta y suave más que fuerza. Toma la carta como una dirección de cuidado, no como una sentencia.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué significa si los cuatro elementos reciben cartas similares?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Si las cuatro posiciones devuelven cartas de tono similar — todas pesadas, todas esperanzadoras, todas orientadas al retiro — la lectura te está diciendo que todo tu sistema interior se mueve actualmente como uno. Eso puede ser señal de profunda coherencia o de estar profundamente estancada/o. La textura más fina de cada carta te dirá cuál. De cualquier modo, no estás en un estado de clima interior mixto; estás en una sola gran estación.',
      },
    },
  ],
}

export default function MajorElementalPage() {
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
          <span>Elemental</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Tirada Elemental de Tarot
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            Cuatro cartas de Arcanos Mayores, una por cada elemento — Fuego, Agua, Aire y Tierra. Una lectura diagnóstica de dónde estás en equilibrio y dónde el sistema interior ha quedado en silencio.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Antes de empezar
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Los cuatro elementos son una vieja manera de describir las partes de una persona. El Fuego es tu voluntad, el calor de la acción y la disposición a afirmarte. El Agua es tu vida sintiente y tu intuición, el flujo de la relación. El Aire es la cualidad de tu mente, la claridad de la perspectiva y del habla. La Tierra es el cuerpo, el trabajo, el suelo en el que estás. Una persona equilibrada se mueve libremente entre los cuatro; la mayoría de nosotras nos inclinamos.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Separa los 22 triunfos. Baraja sin una pregunta específica — esta tirada es un diagnóstico, no una indagación. Saca cuatro cartas y disponlas en cuadrado o cruz, una por cada elemento. Leerás cada carta a la luz del elemento que representa, y después tomarás el patrón entero.
          </p>
        </div>

        {/* Layout */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            Los cuatro elementos
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Una carta de Arcano Mayor por elemento. La disposición en cruz de abajo coloca el Fuego arriba, la Tierra abajo, el Agua a la izquierda y el Aire a la derecha — pero una simple fila funciona igualmente bien.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.75rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 52px)', gridTemplateRows: 'repeat(3, 80px)', gap: '.5rem' }}>
              <div></div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>1</div>
              <div></div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>2</div>
              <div></div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>3</div>
              <div></div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>4</div>
              <div></div>
            </div>
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
            Lee cada carta tanto por su significado triunfal como a la luz de su elemento. El Ermitaño en Fuego es distinto de El Ermitaño en Agua — en Fuego es una voluntad cubierta de cenizas, conservadora; en Agua es retiro emocional y la sabiduría de la soledad. Deja siempre que el elemento matice la carta.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Busca resonancia y choque elemental. Una carta que tradicionalmente pertenece a un elemento cayendo en otro es información interesante. El Sol (una carta ígnea) apareciendo en la posición de Agua puede indicar alegría encendida en tu vida relacional; La Luna (una carta acuática) en Aire puede indicar que tus pensamientos se han vuelto mareales, inestables, oníricos.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Una vez que hayas leído cada carta individualmente, da un paso atrás y pregunta qué elemento está pidiendo más atención. A menudo una posición porta una bandera obvia — la carta más pesada, la más incómoda, la que sigues mirando. Ése es tu punto de enfoque para la estación por delante. Los otros elementos pueden dejarse normalmente a su ritmo natural mientras atiendes al que ha hablado.
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
