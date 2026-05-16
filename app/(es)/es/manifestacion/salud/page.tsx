import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tarot para Manifestar Salud — Lectura de 3 Cartas de Bienestar | TarotAxis',
  description: 'Una tirada de tarot de 3 cartas para salud y bienestar. Nombra qué te está agotando, reconoce lo que ya te nutre y encuentra el pequeño cambio constante que se acumula.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/manifestacion/salud',
    languages: {
      'en': 'https://tarotaxis.com/manifestation/health',
      'es': 'https://tarotaxis.com/es/manifestacion/salud',
      'x-default': 'https://tarotaxis.com/manifestation/health',
    },
  },
  openGraph: {
    title: 'Tirada de Tarot para Manifestar Salud — Lectura de 3 Cartas',
    description: 'Una tirada de tarot de 3 cartas para salud y bienestar. Nombra lo que agota, reconoce lo que nutre y encuentra el pequeño cambio que se acumula.',
    url: 'https://tarotaxis.com/es/manifestacion/salud',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'Lo Que Te Está Agotando',
    desc: 'El drenaje específico de tu energía, vitalidad o bienestar que hace más daño de lo que su escala sugiere. A menudo una dinámica relacional, un estresor de bajo nivel o una necesidad no atendida más que una enfermedad obvia. Esta carta nombra lo que te está erosionando en silencio.',
  },
  {
    num: 2,
    name: 'Lo Que Ya Te Está Nutriendo',
    desc: 'El recurso, la práctica, la relación o el momento de restauración que ya forma parte de tu vida y que quizá estés subvalorando. La sanación que ya está sucediendo. Esta carta te invita a reconocer y honrar lo que funciona antes de buscar nada nuevo.',
  },
  {
    num: 3,
    name: 'El Pequeño Cambio Que Se Acumula',
    desc: 'El cambio modesto y repetible que hará más por ti que cualquier revisión drástica. Aburrido, sostenible, real. Esta carta señala el cambio lo bastante pequeño como para que de verdad lo mantengas — que es el único tipo que alguna vez importa.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Puede el tarot diagnosticar un problema de salud?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. El tarot refleja patrones, energías y tu relación con tu cuerpo — no accede a la biología, a valores de laboratorio ni a la realidad médica. Una carta no puede decirte si un síntoma es benigno o serio, y tratar una lectura como información diagnóstica es un riesgo significativo. Si tienes síntomas que te preocupan, consulta a un profesional de la salud. El tarot puede acompañar bellamente ese proceso, ayudándote a notar patrones de agotamiento, a nombrar lo que has estado evitando y a clarificar cómo quieres vivir — pero nunca es un sustituto de la evaluación o el cuidado médico.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Y si la carta del "agotamiento" señala a una persona de mi vida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Esto es común, y la tirada es honesta al respecto. Muchas de las cosas que más desgastan nuestra salud no son enfermedades sino relaciones — una dinámica familiar agotadora, un compañero que consume más de lo que aporta, una amistad que en silencio se ha vuelto unidireccional. Las cartas no te dicen que termines la relación; te dicen la verdad de lo que actualmente cuesta. Lo que hagas con esa información es tuyo. A veces la respuesta es un límite, a veces una conversación, a veces tiempo y distancia, a veces simplemente nombrarla con claridad.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Es apropiado usar el tarot durante una enfermedad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, junto al cuidado médico — nunca en su lugar. Cuando no te encuentras bien, las preguntas médicas pertenecen a los profesionales clínicos: qué está mal, qué tratar, qué monitorizar. Pero la enfermedad también implica un trabajo emocional y de creación de sentido que la medicina no toca. ¿Qué me pide esta enfermedad? ¿Qué estoy aprendiendo sobre mis límites? ¿Qué apoyo necesito recibir? El tarot se adapta bien a esas preguntas. Usa la tirada como una práctica reflexiva tranquila que corre en paralelo a tu tratamiento, no como una guía para decisiones clínicas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Con qué frecuencia puedo hacer esta tirada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una vez al mes es suficiente. El "pequeño cambio que se acumula" solo funciona si le das tiempo para acumularse — y eso significa semanas de práctica constante, no días de lecturas nuevas. Sacar la tirada con demasiada frecuencia la convierte en una búsqueda de una respuesta diferente en lugar de un compromiso honesto con la que ya tienes. Un ritmo útil es leerla en luna nueva o al inicio del mes, sentarte con las cartas durante todo el ciclo y solo volver a sacar cuando algo cambie genuinamente.',
      },
    },
  ],
}

export default function ManifestarSaludPage() {
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
        <span style={{ color: 'var(--gold)' }}>Manifestar Salud</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>◇</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tarot para Manifestar Salud
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Una lectura aterrizada de tres cartas para el bienestar que has estado descuidando en silencio. Esta tirada nombra lo que te está agotando, reconoce lo que ya te nutre y encuentra el pequeño cambio constante que de verdad va a mantenerse.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['3 Cartas', 'Bienestar', 'Cuerpo y Mente'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Why this spread */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Por Qué Esta Tirada
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Por favor, lee esto con atención: esta tirada no diagnostica, no trata ni reemplaza el cuidado médico. Es trabajo interior reflexivo — útil para notar patrones y clarificar cómo quieres vivir, nunca útil para evaluar síntomas o guiar decisiones clínicas. Si tienes una preocupación real de salud, consulta a un profesional. Las cartas pueden acompañar ese proceso, pero nunca son un sustituto del mismo.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Con ese límite claro, esto es lo que esta tirada realmente busca. La mayor parte de lo que llamamos "manifestación" de salud no se trata realmente de encontrar nuevos protocolos, suplementos o rutinas. Se trata de los pequeños cambios consistentes que ya sabemos que deberíamos hacer y que en silencio estamos evitando — la hora de dormir más temprana, el paseo después de cenar, una copa menos, la conversación que seguimos posponiendo. Las cartas rara vez revelan algo misterioso. Revelan lo que hemos estado trabajando duro para no ver, y lo hacen con la suavidad suficiente como para que de verdad podamos mirarlo.
          </p>
          <p>
            Sostén la tirada de forma diferente según dónde te encuentres. Cuando algo está genuinamente mal — un diagnóstico, un problema agudo, un síntoma real — mantén la lectura reflexiva y emocional, no investigativa. Pregunta qué apoyo necesitas, cómo quieres ser cuidado, qué te está pidiendo esto. Cuando sientes un agotamiento difuso de bajo nivel sin nada obviamente mal, la tirada es más directamente útil: puede nombrar lo que has estado cargando y lo que lo aligeraría. En cualquier caso, las cartas no reemplazan el juicio clínico; acompañan el lado humano de habitar un cuerpo.
          </p>
        </div>
      </div>

      {/* Spread layout */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          La Tirada de Tres Cartas
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Tres cartas, sacadas en orden. La primera nombra el drenaje, la segunda nombra lo que ya te nutre, la tercera nombra el pequeño cambio que vale la pena practicar. Léelas como una sola afirmación honesta.
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>¿Listo para sacar tus tres cartas?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Usa nuestra lectura gratuita para sacar tus cartas, luego vuelve aquí para interpretar cada posición con honestidad.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/manifestacion/energia-sexual" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Energía Sexual
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
