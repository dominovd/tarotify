import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cruz Celta de Arcanos Mayores — Tirada de 10 Cartas Sólo Triunfos | TarotAxis',
  description: 'La clásica tirada de tarot Cruz Celta de 10 cartas reimaginada con sólo los 22 Arcanos Mayores. Significados de posición, diagrama de la disposición y consejos para lecturas arquetípicas.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/arcanos-mayores/cruz-celta',
    languages: {
      'en': 'https://tarotaxis.com/spreads/major/celtic-cross',
      'es': 'https://tarotaxis.com/es/tiradas/arcanos-mayores/cruz-celta',
      'x-default': 'https://tarotaxis.com/spreads/major/celtic-cross',
    },
  },
  openGraph: {
    title: 'Cruz Celta de Arcanos Mayores — Cruz Celta con Sólo Triunfos',
    description: 'Una Cruz Celta con sólo los 22 Arcanos Mayores para preguntas del nivel del alma. Diez posiciones, significados completos y cómo leer resultados cargados de triunfos.',
    url: 'https://tarotaxis.com/es/tiradas/arcanos-mayores/cruz-celta',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  { num: 1, name: 'Situación presente', desc: 'El campo arquetípico en el que estás de pie ahora mismo. No lo que ocurre en la superficie, sino el patrón más profundo que da forma a tu presente.' },
  { num: 2, name: 'Desafío que cruza', desc: 'La fuerza que se encuentra con la primera carta y la complica. La tensión en el corazón del asunto — el arquetipo que presiona activamente contra tu presente.' },
  { num: 3, name: 'Mente consciente', desc: 'Lo que sabes, lo que te estás diciendo, la versión del relato en la que tu mente diurna se ha asentado.' },
  { num: 4, name: 'Cimiento subconsciente', desc: 'El material más profundo en el que la situación está enraizada. Recuerdos, patrones heredados, temas del nivel del alma para los que quizá aún no tienes palabras.' },
  { num: 5, name: 'Pasado reciente', desc: 'El capítulo arquetípico que ahora se cierra — la energía que te ha dado forma hasta este punto y que comienza a perder su agarre.' },
  { num: 6, name: 'Futuro que se acerca', desc: 'La siguiente corriente arquetípica que se mueve hacia ti. No un evento fijo, sino la textura de lo que viene en camino.' },
  { num: 7, name: 'Tú en el asunto', desc: 'Cómo te estás presentando en esta situación — el papel que tu alma está siendo invitada a interpretar, y la versión de ti que está siendo convocada.' },
  { num: 8, name: 'Influencias externas', desc: 'El clima arquetípico a tu alrededor — otras personas, linajes ancestrales, presiones culturales. Las fuerzas que no son tuyas pero que dan forma al campo.' },
  { num: 9, name: 'Esperanzas y miedos', desc: 'El anhelo más profundo y el miedo más profundo, a menudo sorprendentemente cercanos. Lo que más deseas y lo que más resistes en lo que se está desplegando.' },
  { num: 10, name: 'Resultado', desc: 'La resolución arquetípica hacia la que se mueve esta corriente si la trayectoria actual continúa. Una enseñanza, un umbral, una transformación — rara vez un final pulcro.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Puede funcionar la Cruz Celta con sólo 22 cartas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, la Cruz Celta se adapta hermosamente a un mazo de 22 cartas de Arcanos Mayores. Como cada posición recibe entonces un triunfo en lugar de una carta Menor, la tirada se vuelve más pesada y más arquetípica en tono. Algunos lectores la encuentran más exigente porque cada carta porta una significación del nivel del alma, pero ésa es precisamente su fuerza para preguntas decisivas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué usar sólo Arcanos Mayores para una Cruz Celta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una Cruz Celta sólo de Mayores está mejor preparada para preguntas grandes, fatídicas o del nivel del alma donde la capa práctica de los Arcanos Menores diluiría la lectura. Saca a la luz el arco largo de tu situación más que el día a día. Úsala cuando la pregunta sea sobre significado, vocación, identidad o transformación más que sobre tiempos o logística ordinarios.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo leo una Cruz Celta sin cartas de la corte?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En una Cruz Celta sólo de Mayores, las personas en tu vida están representadas por los arquetipos que están encarnando actualmente en lugar de por cartas de la corte tradicionales. La Emperatriz en la posición 8 podría apuntar a una figura nutricia o a una presencia maternal; El Emperador podría indicar autoridad o energía paternal. Lee el triunfo como una fuerza interna y, cuando sea pertinente, como las personas que portan esa energía a tu alrededor.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si saco La Torre o La Muerte en la posición de resultado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Torre o La Muerte en el resultado de una Cruz Celta sólo de Mayores no es una sentencia de desastre; es una descripción honesta del umbral que viene. Ambas cartas marcan el final de un capítulo que ha cumplido su recorrido y la limpieza necesaria que precede a uno nuevo. Léelas como transformación más que como catástrofe, sin dejar por ello de tomarte en serio su seriedad.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo lleva interpretar una Cruz Celta sólo de Mayores?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cuenta con al menos cuarenta minutos de atención sin prisas. Cada triunfo necesita ser leído tanto por su significado arquetípico como por su lugar en la historia que se despliega a través de las diez posiciones. Muchos lectores prefieren hacer esta tirada una vez y luego sentarse con ella durante varios días, volviendo a cartas particulares a medida que las lecciones empiezan a aterrizar.',
      },
    },
  ],
}

export default function MajorCruzCeltaPage() {
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
          <span>Cruz Celta</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>✶</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Cruz Celta de Arcanos Mayores
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            La clásica Cruz Celta de diez cartas reconstruida sólo con los 22 triunfos. Una lectura para las preguntas donde el detalle cotidiano se aparta y los arquetipos hablan directamente.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Antes de empezar
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Reserva esta tirada para preguntas que ya se sienten pesadas. Una encrucijada vocacional, una relación de larga duración en un punto de inflexión, un cambio interior que puedes sentir venir pero no puedes nombrar del todo. La Cruz Celta sólo de Mayores es un instrumento de escala del alma; no dará respuestas nítidas a pequeñas preguntas prácticas, pero para las grandes es insuperable.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Separa los 22 triunfos del resto del mazo. Baraja hasta que te sientas lista/o, mantén la pregunta claramente en mente y dispón las diez cartas en el patrón tradicional — seis en la cruz central y cuatro en el bastón a la derecha. Después siéntate con la tirada completa antes de leer ninguna carta individual.
          </p>
        </div>

        {/* Layout */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            La disposición
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Las cartas 1–6 forman la cruz en el centro — presente, cruz, consciente, subconsciente, pasado y futuro. Las cartas 7–10 forman el bastón a la derecha — tú, entorno, esperanzas y miedos, y resultado.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 52px)', gridTemplateRows: 'repeat(3, 80px)', gap: '.5rem' }}>
              <div></div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>5</div>
              <div></div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>4</div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>1/2</div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>6</div>
              <div></div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>3</div>
              <div></div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '52px', gridTemplateRows: 'repeat(4, 80px)', gap: '.5rem' }}>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>10</div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>9</div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>8</div>
              <div style={{ border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>7</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS.map(({ num, name, desc }) => (
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

        {/* Interpreting tips */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Cómo leer tus resultados
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Empieza por la relación entre las cartas 1 y 2 — el presente y su cruz. Esa pareja establece la tensión central de toda la tirada, y todas las demás cartas la matizan. Luego lee el eje vertical (3 y 4) frente al eje horizontal (5 y 6) para ver cómo el relato consciente se sienta sobre el material más profundo, y cómo el pasado fluye hacia el futuro.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            El bastón a la derecha es el eje personal. La carta 7 es la versión de ti que el momento está convocando; la 8 es el clima que te rodea; la 9 es el corazón secreto de tu relación con la pregunta; la 10 es hacia dónde lleva la corriente actual.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Fíjate en la resonancia. Si El Ermitaño aparece en la posición 4 y de nuevo como la versión de ti en la 7, la lectura te está diciendo que el alma quiere retiro — la soledad como práctica, no como castigo. Con sólo 22 cartas en juego, esos ecos cargan peso real.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
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
