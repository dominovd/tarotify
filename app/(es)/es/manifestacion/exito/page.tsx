import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tarot para Manifestar Éxito — Lectura de 3 Cartas de Logro | TarotAxis',
  description: 'Una tirada de tarot de 3 cartas para manifestar éxito. Identifica qué se interpone, qué ya te fortalece y la acción que realmente comprime el tiempo hacia tu objetivo.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/manifestacion/exito',
    languages: {
      'en': 'https://tarotaxis.com/manifestation/success',
      'es': 'https://tarotaxis.com/es/manifestacion/exito',
      'x-default': 'https://tarotaxis.com/manifestation/success',
    },
  },
  openGraph: {
    title: 'Tirada de Tarot para Manifestar Éxito — Lectura de 3 Cartas',
    description: 'Una tirada de tarot de 3 cartas para manifestar éxito. Identifica qué se interpone, qué te fortalece y la acción que comprime el tiempo.',
    url: 'https://tarotaxis.com/es/manifestacion/exito',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'Lo Que Se Interpone',
    desc: 'El patrón interno que más activamente está minando el éxito que quieres. Rara vez una falta de habilidad; normalmente una autocreencia, un miedo a la visibilidad o una vieja definición de "suficiente" que ya no encaja. Esta carta te pide nombrar el bloqueo alrededor del cual has estado trabajando en silencio en lugar de atravesarlo.',
  },
  {
    num: 2,
    name: 'Lo Que Fortalece Tu Dirección',
    desc: 'La cualidad, valor, capacidad o apoyo externo que ya te orienta hacia el objetivo. El impulso que tienes pero que quizá no estés reclamando. Esta carta nombra el recurso que has estado subestimando — y precisamente ese es el que toca aprovechar ahora.',
  },
  {
    num: 3,
    name: 'La Acción Que Comprime el Tiempo',
    desc: 'El movimiento específico, de este mes, que hace más por tu trayectoria que cualquier otro. A menudo contraintuitivo — un no en vez de un sí, una apuesta pequeña en vez de una grande. Esta carta señala la palanca, no el trabajo.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué cartas del tarot significan que viene el éxito?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Varias cartas de la tradición del tarot llevan una firma fuerte de éxito. El Sol es la más clara — plena visibilidad, reconocimiento y logro sin ambigüedad. El Mundo indica el cierre de un ciclo, a menudo acompañado de reconocimiento externo. El Seis de Bastos habla específicamente de reconocimiento público y de ser visto por tu trabajo. El Nueve de Pentáculos apunta a una abundancia construida desde tu propio esfuerzo sostenido, mientras que La Estrella refleja alineación con el camino que genuinamente te pertenece. Ninguna de estas cartas predice el éxito por sí sola — describen cómo se siente el éxito cuando llega.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puede el tarot decirme si voy a tener éxito?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — y la pregunta en sí suele revelar el bloqueo. El tarot no predice resultados; refleja las condiciones, los patrones y las decisiones que actualmente dan forma a tu trayectoria. Preguntar si tendrás éxito normalmente apunta a una duda más profunda sobre si se te permite querer lo que quieres, o si confías en ti mismo para actuar en consecuencia. El éxito se construye, no se predice. Una pregunta más útil es: ¿qué necesitaría reconocer, elegir o soltar para que el éxito que quiero se vuelva posible? Las cartas responden bien a esa.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Y si la carta de "acción que comprime el tiempo" parece no tener relación con mi objetivo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Suele parecerlo, en la superficie — y ese es el punto. Las cartas de manifestación en esta posición señalan con frecuencia hacia los lados porque rara vez existen caminos directos al siguiente paso obvio. La carta puede sugerir descanso cuando esperabas esfuerzo, una conversación cuando esperabas un lanzamiento, o una negativa cuando esperabas un sí. Siéntate con la aparente discrepancia unos días antes de descartarla. Las acciones que de verdad comprimen el tiempo hacia un objetivo son casi siempre las que parecen no tener relación hasta que funcionan.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué se diferencia esto de una tirada de carrera?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada de carrera trata del trabajo en sí — el puesto, el siguiente movimiento, la estrategia. Una tirada de manifestar éxito se sitúa una capa más abajo: trata de tu relación con el logro. Mucha gente tiene planes de carrera claros y aun así no logra manifestar el éxito porque el trabajo interior no se ha hecho — hay ambivalencia respecto a ser visto, una vieja definición de "suficiente", o un miedo a lo que el éxito costaría. Esta tirada trata al éxito como una postura interior antes de ser un resultado exterior, que es donde suele vivir el verdadero obstáculo.',
      },
    },
  ],
}

export default function ManifestarExitoPage() {
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
        <Link href="/es/manifestacion" style={{ color: 'var(--muted)' }}>Manifestación</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Manifestar Éxito</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tarot para Manifestar Éxito
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Una lectura enfocada de tres cartas para el logro que has estado rodeando en silencio. Esta tirada nombra el bloqueo alrededor del cual has estado trabajando, la fortaleza que no estás reclamando y la única acción que hace más que cualquier otra.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['3 Cartas', 'Logro', 'Trabajo Interior'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Why this spread */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Por Qué Esta Tirada
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            La mayoría de los bloqueos al éxito no son realmente cuestión de esfuerzo. Son cuestión de ambivalencia — querer y no querer la cosa al mismo tiempo. Quieres el ascenso y quieres evitar ser visible. Quieres el lanzamiento y quieres quedarte en silencio en desarrollo. Quieres el reconocimiento y temes lo que te exigirá. Esta tirada está hecha para esa bifurcación, donde el obstáculo rara vez es una falta de capacidad y casi siempre es una contradicción silenciosa que la mente consciente aún no ha nombrado.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Esto no es una lectura genérica de carrera. Una tirada de carrera mira el trabajo — el puesto, el movimiento, la estrategia. Una tirada de manifestar éxito mira tu relación con el logro mismo. Esa suele ser una capa más dura y más honesta. Te pregunta si has decidido de verdad que eres alguien a quien se le permite querer esto, y si la versión de ti que llega al éxito es una versión a la que le has hecho espacio. Reconocer lo que realmente quieres suele ser la parte más difícil de conseguirlo.
          </p>
          <p>
            Si la carta de "lo que se interpone" saca a flote algo que no quieres abordar, trátalo como una señal en lugar de una sentencia. Las cartas no te están diciendo que te arregles hoy; te están diciendo dónde está la palanca. Siéntate con la carta unos días. Nota lo que no quieres admitir sobre ella. Ese notar — no ningún acto heroico de superación personal — es lo que normalmente desplaza el patrón. El trabajo es honestidad, repetida en silencio, a lo largo del tiempo.
          </p>
        </div>
      </div>

      {/* Spread layout */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          La Tirada de Tres Cartas
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Tres cartas, en orden. La primera nombra el bloqueo, la segunda nombra la fortaleza, la tercera nombra la palanca. Léelas como una sola afirmación en lugar de tres cartas separadas.
        </p>

        {/* Visual Layout */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Esquema de Cartas
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {POSITIONS.map(pos => (
              <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                <div style={{ width: 72, height: 108, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1.1rem', color: 'var(--gold)' }}>
                  {pos.num}
                </div>
                <div style={{ fontSize: '.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', maxWidth: 88 }}>{pos.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {POSITIONS.map(pos => (
            <div key={pos.num} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
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
            <div key={item.name} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>¿Listo para sacar tus tres cartas?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Usa nuestra lectura gratuita para sacar tus cartas, luego vuelve aquí para interpretar cada posición con honestidad.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/manifestacion/dinero" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Manifestar Dinero
          </Link>
          <Link href="/es/lectura-gratis" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Lectura Gratuita
          </Link>
          <Link href="/es/manifestacion" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Todas las Tiradas de Manifestación
          </Link>
        </div>
      </div>
    </div>
  )
}
