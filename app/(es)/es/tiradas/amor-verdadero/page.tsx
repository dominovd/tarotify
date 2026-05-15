import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tarot Amor Verdadero — Inmersión Profunda en la Relación de 7 Cartas | TarotAxis',
  description: 'Una tirada de tarot del amor verdadero de 7 cartas para explorar la energía completa de una conexión romántica — sentimientos, fortalezas, desafíos y el camino a seguir.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/amor-verdadero',
    languages: {
      'en': 'https://tarotaxis.com/spreads/true-love-spread',
      'es': 'https://tarotaxis.com/es/tiradas/amor-verdadero',
      'x-default': 'https://tarotaxis.com/spreads/true-love-spread',
    },
  },
  openGraph: {
    title: 'Tirada de Tarot Amor Verdadero — Inmersión Profunda en la Relación de 7 Cartas',
    description: 'Una tirada de tarot de 7 cartas para explorar la energía completa de una conexión romántica — sentimientos, fortalezas, desafíos y el camino a seguir.',
    url: 'https://tarotaxis.com/es/tiradas/amor-verdadero',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'Tus sentimientos',
    desc: 'Lo que realmente sientes por esta persona, por debajo de la historia que te cuentas sobre ella y de la versión de ti que esperas ser en la relación. Esta carta atraviesa la expectativa y saca a la superficie la verdad emocional sin editar — a veces más tierna de lo que admites, a veces más ambivalente de lo que desearías.',
  },
  {
    num: 2,
    name: 'Sus sentimientos',
    desc: 'La verdad emocional honesta de su experiencia de ti. No lo que han dicho, no lo que temes, no lo que has decidido sobre ellos — lo que realmente se mueve en su vida interior cuando piensan en ti. Esta carta te invita a soltar la proyección y encontrarles donde están.',
  },
  {
    num: 3,
    name: 'El corazón de la conexión',
    desc: 'De qué trata fundamentalmente esta relación, energéticamente. El propósito del alma entre ustedes — ya sea sanar una herida concreta, construir una familia, enseñarse mutuamente una lección específica o anclar una compañía larga y silenciosa. El porqué debajo del hecho diario de ustedes.',
  },
  {
    num: 4,
    name: 'Lo que tú aportas',
    desc: 'El regalo, sanación, desafío o crecimiento específicos que tu presencia les ofrece. A menudo no es lo obvio — no tu lealtad o tu humor, sino algo más callado que quizás no has reconocido en ti misma. Esta carta nombra lo que están recibiendo al estar en relación contigo.',
  },
  {
    num: 5,
    name: 'Lo que ellos te aportan',
    desc: 'Lo que su presencia te ofrece — incluidos los desafíos que resultan ser las enseñanzas. Parte de lo que aportan se sentirá como consuelo; parte se sentirá como fricción que está haciendo un trabajo paciente sobre una parte de ti que lo necesitaba. Ambas pertenecen aquí, y ambas son regalos.',
  },
  {
    num: 6,
    name: 'Dónde vive la fricción',
    desc: 'La dificultad genuina en la conexión — el lugar donde más se les exige crecimiento a ambos. No la discusión superficial sino la tensión estructural más profunda por debajo: la necesidad desencajada, el patrón no sanado que se encuentra con otro patrón no sanado, el valor que cada uno sostiene de forma distinta.',
  },
  {
    num: 7,
    name: 'El camino a seguir',
    desc: 'El próximo capítulo — cómo es más probable que evolucione la conexión si ambos siguen presentándose con honestidad. Esta carta es una probabilidad, no un veredicto. Describe la trayectoria que está creando la energía actual, y te deja espacio para elegir si quieres recorrerla.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuál es el momento adecuado para usar esta tirada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cuando la relación es lo bastante real como para tener peso. Normalmente eso significa tres meses como mínimo, y a menudo más — una vez que la proyección inicial se ha adelgazado y los dos han empezado a verse con algo más parecido a la claridad. Usada demasiado pronto, la tirada lee la fantasía en vez de la conexión. Usada en una relación establecida, aunque sea difícil, tiene mucho que decir. Si te sientes atraída a ella tras solo unas semanas, vale la pena notarlo en sí mismo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo hacerla para una relación a distancia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. La tirada lee energía, no proximidad. Las conexiones a distancia suelen llevar una firma energética inusualmente clara precisamente porque gran parte de la relación vive en lenguaje, atención e intención más que en habitaciones compartidas. Las cartas no se confundirán con la geografía. Si acaso, la carta de la fricción puede hablar de la tensión específica de la distancia misma — la necesidad no cubierta de presencia, la forma en que las zonas horarias se vuelven una dificultad estructural más que un fallo personal.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué significa si la carta de la fricción es intensa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La intensidad en la posición de fricción es normal y a menudo una buena señal de lo viva que está la conexión. La mayoría de las relaciones fuertes incluyen una fricción fuerte — los lugares exactos en los que rozan entre ustedes suelen ser los lugares exactos donde se ofrece un crecimiento real. Una carta de fricción intensa te pide inclinarte hacia la dificultad en vez de alejarte de ella, y traer más honestidad, no menos. Solo se convierte en advertencia si se empareja con desconexión consistente también en las cartas de sentimientos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Debería compartir los resultados con mi pareja?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Considera mantenerlo en privado al principio, especialmente las cartas sobre su experiencia interior. Las lecturas compartidas demasiado pronto pueden volverse cargadas — una carta sobre la mesa puede convertirse rápidamente en arma en una discusión, o en herramienta para colocar a tu pareja en la forma que querías. Siéntate con la lectura tú misma al menos una semana. Si surge algo genuinamente útil que pertenece a una conversación, lleva la idea en lugar de las cartas, y llévala como tu reflexión más que como evidencia.',
      },
    },
  ],
}

export default function AmorVerdaderoPage() {
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
        <span style={{ color: 'var(--gold)' }}>Amor Verdadero</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>♡</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tarot Amor Verdadero
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Una inmersión profunda de siete cartas en la relación — la tirada de panorama completo para conexiones que ya tienen peso. Úsala para leer ambos mundos internos, el propósito compartido entre ustedes, la fricción genuina y la trayectoria que en silencio están creando juntos.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['7 Cartas', 'Inmersión Profunda', 'Amor Establecido'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Energy / About */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Sobre esta tirada
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Siete cartas es la profundidad natural para una relación establecida. Menos se siente apresurado — tres cartas pueden nombrar un sabor, pero no pueden honrar la extraña arquitectura en capas de dos vidas que han empezado a entretejerse. Más de siete cae en algo indulgente, donde la lectora se ahoga en detalle y el hilo conductor de la conexión se difumina. Siete te da espacio para ambos mundos internos, el centro compartido, lo que cada uno ofrece, la dificultad genuina y la dirección del viaje — un retrato completo sin convertirse en interrogatorio.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            La única disciplina más importante con esta tirada es hacerla para la relación real, no para una versión fantasía de ella. Resulta tentador, sobre todo cuando algo tambalea, leer la pareja que desearías tener — esa en la que ellos son más amables, tú más calmada, y la fricción es culpa de otro. Las cartas cooperarán con esa fantasía y no te dirán nada útil. En su lugar, lee la relación tal como está en un martes cualquiera. La honestidad de la pregunta da forma a la honestidad de la respuesta.
          </p>
          <p>
            Cuando la carta de la fricción entrega algo punzante, inclínate hacia ella en vez de huir. La mayoría de las lectoras descubren que la dificultad nombrada en la posición seis es también la puerta nombrada en la posición siete — el lugar donde la relación es más exigente es también donde está más viva, y el trabajo que pide es el trabajo que convierte una conexión en una compañía. La fricción no es un veredicto. Es una invitación a traer algo más valiente de lo que has traído hasta ahora.
          </p>
        </div>
      </div>

      {/* Spread */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Las siete cartas
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Sostén la relación en la mente mientras barajas — no solo a la persona, sino el campo entero entre ustedes. Saca las siete cartas en orden y resiste el impulso de interpretar mientras avanzas. Dispón primero la tirada, luego lee.
        </p>

        {/* Visual Layout */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Disposición de cartas
          </div>
          <div style={{ display: 'flex', gap: '.85rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {POSITIONS.map(pos => (
              <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                <div style={{ width: 60, height: 90, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1rem', color: 'var(--gold)' }}>
                  {pos.num}
                </div>
                <div style={{ fontSize: '.58rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', textAlign: 'center', maxWidth: 60 }}>{pos.name}</div>
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
          Preguntas frecuentes
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>¿Lista para leer el panorama completo?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Saca tus siete cartas en una hora tranquila y siéntate con ellas antes de buscar la interpretación. Las tiradas relacionadas debajo siguen llevando la conversación más lejos.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/tiradas/amor" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Tirada de Amor
          </Link>
          <Link href="/es/tiradas/me-quedo-o-me-voy" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ¿Me quedo o me voy?
          </Link>
          <Link href="/es/tiradas/cruz-celta" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Cruz Celta
          </Link>
        </div>
      </div>
    </div>
  )
}
