import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tarot de Amor Propio — Lectura de Sanación y Trabajo Interior | TarotAxis',
  description: 'Una tirada de tarot de amor propio para profundizar la relación contigo misma. Disposiciones de 4 y 6 cartas para sanación, autoestima y crecimiento personal.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/amor/amor-propio',
    languages: {
      'en': 'https://tarotaxis.com/spreads/love/self-love',
      'es': 'https://tarotaxis.com/es/tiradas/amor/amor-propio',
      'x-default': 'https://tarotaxis.com/spreads/love/self-love',
    },
  },
  openGraph: {
    title: 'Tirada de Tarot de Amor Propio — Sanación y Trabajo Interior',
    description: 'Gira las cartas hacia adentro. Estas tiradas de amor propio te ayudan a entender tus patrones, reconectar con tu valor y nombrar lo que más necesitas ahora.',
    url: 'https://tarotaxis.com/es/tiradas/amor/amor-propio',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS_4 = [
  { num: 1, name: 'Cómo me veo', desc: 'El lente actual a través del cual te ves a ti misma — incluyendo creencias, diálogo interno y la historia que cargas sobre quién eres y qué mereces.' },
  { num: 2, name: 'Lo que necesito soltar', desc: 'El patrón, la creencia o la conducta que más limita tu amor propio ahora mismo. Lo que las cartas te piden dejar atrás.' },
  { num: 3, name: 'Lo que necesito abrazar', desc: 'La cualidad, la práctica o el aspecto de ti misma que pide ser honrado — la dirección en la que tu amor propio necesita crecer.' },
  { num: 4, name: 'Cómo nutrirme ahora', desc: 'Una invitación práctica o emocional para el período inmediato. Lo que tu yo interno más necesita de ti ahora mismo.' },
]

const POSITIONS_6 = [
  { num: 1, name: 'Mi relación actual conmigo misma', desc: 'Un retrato honesto de cómo te estás tratando ahora — la calidad de tu diálogo interno, tu cuidado y la consideración hacia ti misma.' },
  { num: 2, name: 'Raíz de mis bloqueos de autoestima', desc: 'El punto de origen donde se asentó la duda o la autocrítica. Esta carta suele apuntar a viejos condicionamientos, experiencias tempranas o creencias heredadas.' },
  { num: 3, name: 'Lo que no estoy viendo en mí', desc: 'Una cualidad, un don o una fortaleza que otros tal vez reconozcan en ti y que has estado pasando por alto o restándole importancia.' },
  { num: 4, name: 'El patrón a romper', desc: 'El hábito concreto, la dinámica relacional o el patrón de pensamiento que más socava tu sentido de valor.' },
  { num: 5, name: 'La práctica que sana', desc: 'Lo que genuinamente te nutre y restaura — la dirección de la sanación más alineada con tu naturaleza real.' },
  { num: 6, name: 'Tu camino hacia la totalidad', desc: 'El tema general de tu viaje de amor propio ahora — la cualidad que el universo te pide cultivar dentro de ti.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una tirada de tarot de amor propio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada de tarot de amor propio gira por completo el enfoque de la lectura hacia adentro — lejos de otras personas o situaciones externas, y hacia tu relación contigo misma. Estas tiradas están diseñadas para iluminar los patrones de autoestima, identificar lo que necesitas soltar o abrazar y ofrecer guía sobre cómo nutrirte de forma más plena.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuándo debería hacer una lectura de amor propio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las tiradas de amor propio son especialmente valiosas después de una relación difícil, durante períodos de baja confianza o duda, al comienzo de un viaje de sanación o siempre que sientas que te has desconectado de tus propias necesidades. También son una práctica poderosa cuando se hacen con regularidad — mensualmente o en luna nueva — para revisar cómo te estás tratando.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué cartas del tarot indican amor propio y autoestima?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Emperatriz es la carta clásica del amor propio — abundancia, belleza y cuidado de una misma. La Estrella habla de esperanza y autoaceptación tras la dificultad. El Nueve de Pentáculos representa una autosuficiencia ganada con esfuerzo y el disfrute de la propia compañía. La Reina de Copas o la Reina de Bastos suelen indicar a una mujer plenamente cómoda en sí misma. El Cuatro de Espadas puede sugerir el tipo de descanso reparador que el amor propio requiere.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo hacer una tirada de amor propio para otra persona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí — con su conocimiento y consentimiento. Si alguien ha pedido una lectura centrada en su relación consigo misma, estas tiradas funcionan bien. Sin consentimiento, suele considerarse mejor práctica centrar tus lecturas en ti misma y en tu propio crecimiento.',
      },
    },
  ],
}

export default function AmorPropioSpreadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/es/tiradas" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Tiradas</Link>
          <span style={{ opacity: .4 }}>›</span>
          <Link href="/es/tiradas/amor" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Amor</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Amor Propio</span>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>🌸</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Tirada de Tarot de Amor Propio
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            La lectura más poderosa que puedes hacer es la que se gira por completo hacia adentro. Estas tiradas te ayudan a entender tus patrones, reconectar con tu valor y descubrir lo que más necesitas de ti misma.
          </p>
        </div>

        {/* 4-card */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            La Revisión de Amor Propio de 4 Cartas
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Una lectura enfocada para una instantánea clara de tu relación contigo misma ahora — dónde estás, qué te frena, hacia qué moverte y cómo cuidarte en este momento.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {[1, 2, 3, 4].map(n => (
              <div key={n} style={{ width: 52, height: 80, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>{n}</div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS_4.map(({ num, name, desc }) => (
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

        {/* 6-card */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            La Tirada de Sanación Profunda de 6 Cartas
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Para un trabajo más profundo — cuando quieras rastrear las raíces de tus patrones de autoestima, descubrir fortalezas ocultas e identificar un camino claro hacia mayor totalidad. Úsala al inicio de un viaje de sanación o cuando sientas que algo necesita cambiar a un nivel más profundo.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS_6.map(({ num, name, desc }) => (
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

        {/* FAQ */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
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
          <Link href="/es/tiradas/amor" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Más tiradas</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Todas las tiradas de amor →</div>
          </Link>
          <Link href="/es/cartas" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Relacionado</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Significado de las cartas →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
