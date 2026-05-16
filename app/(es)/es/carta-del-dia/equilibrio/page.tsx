import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Equilibrio — Tirada diaria de una carta con consignas de reflexión | TarotAxis',
  description: 'Una práctica diaria suave de tarot con una sola carta centrada en el equilibrio. Saca una carta y siéntate con cinco consignas de reflexión sobre dónde está tu energía desalineada hoy.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/carta-del-dia/equilibrio',
    languages: {
      'en': 'https://tarotaxis.com/daily/balance',
      'es': 'https://tarotaxis.com/es/carta-del-dia/equilibrio',
      'x-default': 'https://tarotaxis.com/daily/balance',
    },
  },
  openGraph: {
    title: 'Equilibrio — Tirada diaria de una carta',
    description: 'Una práctica diaria de tarot con una sola carta y cinco consignas de reflexión enfocadas. La variante más suave — para días en los que menos es lo que necesitas.',
    url: 'https://tarotaxis.com/es/carta-del-dia/equilibrio',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const PROMPTS = [
  '¿Qué es lo único que estoy dando en exceso hoy — tiempo, atención, preocupación, energía?',
  '¿Qué pide menos de mi atención, aunque cueste dar un paso atrás?',
  '¿Dónde me estoy inclinando con fuerza en una dirección e ignorando el contrapeso?',
  'Si mi cuerpo pudiera elegir cómo se pasa este día, ¿qué pediría primero?',
  '¿Cuál es el ajuste más pequeño que podría hacer hoy para volver hacia el centro?',
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una tirada diaria de equilibrio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada diaria de equilibrio es una práctica de una sola carta enfocada en la pregunta "¿dónde estoy fuera de equilibrio hoy?". En vez de preguntar sobre amor, trabajo o una situación concreta, la tirada se mantiene a propósito amplia — la carta saca a la superficie allí donde tu energía está más inclinada, y las consignas de reflexión te ayudan a encontrar el pequeño ajuste que devuelve el centro.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué se diferencia esto de una carta diaria normal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una carta diaria estándar marca un tema para el día. La tirada de equilibrio hace una pregunta más específica — dónde estás descentrada — y empareja la carta con consignas de reflexión diseñadas para sacar el desequilibrio con suavidad. Es la misma estructura de una sola carta, pero el marco es más enfocado y el trabajo de diario hace más del esfuerzo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Y si no tengo capacidad para escribir en el diario?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La tirada de equilibrio está diseñada precisamente para esos días. No tienes que escribir nada. Lee la carta, elige una de las cinco consignas, sostenla en mente durante un minuto y sigue con tu día. Incluso treinta segundos de contacto honesto con la consigna son suficientes — la práctica está en el darse cuenta, no en la escritura.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puede la tirada de equilibrio responder a preguntas específicas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No está diseñada para eso. La fuerza de la práctica está en el marco amplio — dejar que el mazo señale allí donde el desequilibrio es mayor, sin restringir la respuesta a un área de la vida. Si tienes una pregunta concreta (una relación, una decisión, un proyecto), usa una lectura completa en vez de la tirada de equilibrio.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuándo conviene usar esta variante?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En días de poca capacidad. Tras un mal descanso, en mitad de una semana de trabajo intensa, en los días posteriores a un viaje, cuando te estás recuperando de una enfermedad o cualquier momento en que la idea de hacer una tirada de varias cartas se siente como una cosa más que gestionar. Irónicamente, esos suelen ser los días en los que la práctica es más útil — el desequilibrio suele ser más agudo cuando tienes menos capacidad para mirarlo.',
      },
    },
  ],
}

export default function EquilibrioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/es/carta-del-dia" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Carta del Día</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Equilibrio</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>⚖</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Equilibrio — Tarot diario
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
            Una práctica diaria de una sola carta con cinco consignas de reflexión enfocadas. La variante más suave — para días en los que la práctica más simple es la que más necesitas.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Sobre esta práctica
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Hay una pequeña ironía en la práctica diaria del tarot: los días en los que más necesitas un chequeo suelen ser los días en los que tienes menos capacidad para hacerlo. Una tirada de dos o tres cartas se siente como trabajo. Una sesión larga de diario se siente como un lujo que no puedes permitirte. Y así, la práctica se va saltando en silencio precisamente los días en los que habría ayudado más.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            La tirada de equilibrio existe para esos días. Es una carta. La pregunta detrás de la tirada es fija y amplia: <em>¿dónde estoy fuera de equilibrio hoy?</em> Ninguna área concreta de la vida, ningún marco detallado — solo una invitación al mazo para que señale donde el desequilibrio sea más fuerte. Cinco consignas se asientan bajo la carta. Eliges una. La lees una vez. Esa es la práctica.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Lo que le falta en complejidad lo compensa en honestidad. A lo largo de semanas de uso constante, la tirada de equilibrio tiende a sacar a la superficie patrones de larga duración con más fiabilidad que cualquiera de las tiradas mayores. Empiezas a notar en qué direcciones te inclinas una y otra vez, qué contrapesos ignoras por costumbre y qué poco coincide tu idea de equilibrio con la de tu cuerpo.
          </p>
        </div>

        {/* How to do it */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '1rem' }}>
            Cómo hacer la tirada
          </h2>
          <ol style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', paddingLeft: '1.2rem', margin: 0 }}>
            <li style={{ marginBottom: '.6rem' }}>Toma el mazo sin preparar nada elaborado. Todo el sentido de esta práctica está en su ligereza.</li>
            <li style={{ marginBottom: '.6rem' }}>Baraja brevemente sosteniendo la pregunta: <em>¿dónde estoy fuera de equilibrio hoy?</em></li>
            <li style={{ marginBottom: '.6rem' }}>Saca una carta. Mírala. Nota la primera sensación que aparece — una mueca, un reconocimiento, un suavizarse, cualquier cosa.</li>
            <li style={{ marginBottom: '.6rem' }}>Si lo necesitas, lee el significado general de la carta, pero confía primero en la respuesta sentida. La carta nombra una dirección de inclinación, no entrega instrucciones.</li>
            <li style={{ marginBottom: '.6rem' }}>Elige una de las cinco consignas de reflexión de abajo. Solo una. Sostenla con suavidad en mente mientras vuelves a leer la carta.</li>
            <li>Si tienes un minuto, escribe una frase en tu diario. Si no, la práctica sigue estando completa.</li>
          </ol>
        </div>

        {/* The single position */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            La pregunta detrás de la carta
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Una carta, una pregunta. Sostén la pregunta con suavidad — no como un interrogatorio, sino como una curiosidad tranquila.
          </p>
          <div style={{ display: 'flex', gap: '1rem', padding: '1rem 1.1rem', background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12 }}>
            <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem' }}>1</div>
            <div>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', marginBottom: '.3rem' }}>¿Dónde estoy fuera de equilibrio hoy?</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.65, margin: 0 }}>
                La carta apunta a donde tu energía está más inclinada — donde estás dando demasiado o demasiado poco, apoyándote con fuerza en una dirección e ignorando el contrapeso. No siempre será obvio. A veces el desequilibrio que nombra el mazo es uno que aún no habías reconocido como tal. Lee la carta como una dirección de atención, no como un veredicto.
              </p>
            </div>
          </div>
        </div>

        {/* Reflection prompts */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Cinco consignas de reflexión
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '.88rem', margin: '0 0 1rem' }}>
            Elige una — solo una. El sentido es una atención suave y enfocada, no una auditoría exhaustiva de ti misma.
          </p>
          <ul style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.9rem', paddingLeft: '1.2rem', margin: 0 }}>
            {PROMPTS.map(p => <li key={p} style={{ marginBottom: '.5rem' }}>{p}</li>)}
          </ul>
        </div>

        {/* Reading tips */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Leer la carta para el equilibrio
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Cualquier carta del mazo puede hablar del equilibrio — incluso las que parecen unilaterales. La Fuerza del derecho puede estar señalando dónde estás estirando demasiado tu paciencia. El Diez de Bastos puede nombrar la carga que has aceptado llevar que nunca fue tuya. Una carta luminosa como el Sol podría estar avisando de que estás interpretando luminosidad en vez de descansar.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Lee la carta con suavidad. Pregúntate qué significaría que la energía que representa estuviera presente en su justa medida, y cómo se verían un exceso o un defecto de ella en tu día. Ese hueco — entre el ideal de la carta y tu realidad — es donde suele vivir el desequilibrio.
          </p>
        </div>

        {/* When to use this variant */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Cuándo elegir esta variante
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Recurre a la tirada de equilibrio en días de poca capacidad — tras un sueño roto, en mitad de una semana dura, en días en los que te despiertas ya con retraso. También es una práctica preciosa durante la recuperación — de una enfermedad, de un duelo, de cualquier estación en la que las tiradas mayores se sienten demasiado exigentes de mirar.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Úsala por defecto cuando las otras variantes se sienten como demasiado. La práctica más simple suele ser la más necesaria, y la tirada de equilibrio es la que tiene más probabilidades de hacerse realmente los días que cuentan.
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
          <Link href="/es/carta-del-dia" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Carta de hoy</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Tarot diario estándar →</div>
          </Link>
          <Link href="/es/lectura-gratis" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Pruébalo ahora</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Lectura de tarot gratis →</div>
          </Link>
          <Link href="/es/cartas" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Significados</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Las 78 cartas →</div>
          </Link>
          <Link href="/es/diario-de-tarot" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Lleva registro</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Diario de tarot →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
