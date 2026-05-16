import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tarot Semanal — Lectura de 7 Cartas para la Semana | TarotAxis',
  description: 'Haz una tirada de tarot semanal con una carta por día — una lectura de 7 cartas de lunes a domingo que traza la energía, los retos y las oportunidades de la semana por delante.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/semanal',
    languages: {
      'en': 'https://tarotaxis.com/spreads/weekly',
      'es': 'https://tarotaxis.com/es/tiradas/semanal',
      'x-default': 'https://tarotaxis.com/spreads/weekly',
    },
  },
  openGraph: {
    title: 'Tirada de Tarot Semanal — Lectura de 7 Cartas para la Semana',
    description: 'Una carta por cada día de la semana. Un ritual práctico de tarot que te ayuda a navegar la semana con intención y claridad.',
    url: 'https://tarotaxis.com/es/tiradas/semanal',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const DAYS = ['lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado', 'domingo']
const DAYS_SHORT = ['lun', 'mar', 'mié', 'jue', 'vie', 'sáb', 'dom']

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una tirada de tarot semanal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada de tarot semanal es una lectura diseñada para trazar la energía de la semana que viene. La versión más común usa siete cartas — una por cada día, de lunes a domingo — y te ofrece una instantánea de la energía dominante, el reto o la oportunidad que probablemente surja cada día. Es un ritual práctico y aterrizado, más que predictivo: las cartas no te dicen exactamente qué pasará, pero te dan una lente útil para abordar cada día con más conciencia e intención.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuántas cartas tiene una tirada de tarot semanal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La tirada semanal clásica usa siete cartas — una por día. Una alternativa más breve, la Tirada de Visión General Semanal, utiliza cinco cartas para cubrir los temas y energías clave de la semana sin asignar una carta a cada día concreto. Ambos enfoques son válidos; la versión de siete cartas le sienta bien a quienes disfrutan de los chequeos diarios, mientras que la de cinco cartas funciona mejor para quienes prefieren una imagen semanal más amplia.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es el mejor momento para hacer una tirada semanal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El domingo por la tarde o el lunes por la mañana son los momentos ideales para una tirada de tarot semanal. Hacer la lectura en el umbral de la semana — antes de que comience — te da más oportunidad de trabajar con lo que las cartas revelan. Algunos lectores prefieren el domingo por la tarde como ritual reflexivo de cierre; otros prefieren la mañana del lunes como forma de marcar una intención para los días por venir. Cualquiera funciona bien. La constancia importa más que la hora exacta: convertirlo en un hábito semanal es lo que profundiza la práctica.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se interpreta una tirada de tarot semanal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Interpreta cada carta diaria como la energía, el tema o la invitación dominantes para ese día — no como una predicción fija. Lee las cartas en secuencia, de lunes a domingo, y observa los patrones: palos repetidos sugieren un tema para toda la semana (una semana de fuego, una semana de agua), mientras que las cartas de los Arcanos Mayores resaltan días de especial importancia. Cartas desafiantes como La Torre o el Cinco de Espadas merecen anotarse como días a los que acercarse con cuidado, en lugar de días a los que temer. Mantén notas breves a lo largo de la semana y vuelve a la tirada cada noche para ver cómo se desplegó la energía.',
      },
    },
  ],
}

export default function TiradaSemanalPage() {
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
        <span style={{ color: 'var(--gold)' }}>Tirada Semanal</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tarot Semanal
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Una carta por cada día de la semana — un ritual aterrizado de lunes a domingo que traza la energía, los retos y las oportunidades por delante. No es una predicción, sino una guía práctica para atravesar la semana con claridad e intención.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['7 Cartas', 'Semana por Delante', 'Guía Diaria', 'Planificación'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Classic 7-Day Spread layout visual */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
          Tirada Clásica de 7 Días — Una Carta por Día
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '.5rem', maxWidth: 500, margin: '0 auto' }}>
          {DAYS.map((day, i) => (
            <div key={day} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.3rem' }}>
              <div style={{ width: '100%', aspectRatio: '2/3', border: '1px solid rgba(201,168,76,.25)', borderRadius: 6, background: 'rgba(201,168,76,.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.7rem', color: 'var(--gold)' }}>
                {i + 1}
              </div>
              <div style={{ fontSize: '.52rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', textAlign: 'center' }}>{DAYS_SHORT[i]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Two spread options */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Dos Maneras de Leer la Semana
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1rem' }}>

          {/* Option 1 */}
          <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.35rem' }}>
              Tirada Clásica de 7 Días
            </div>
            <div style={{ fontSize: '.72rem', color: 'var(--gold)', opacity: .6, marginBottom: '.85rem', fontFamily: "'Cinzel',serif", letterSpacing: '.05em' }}>7 cartas — la más popular</div>
            <p style={{ color: 'var(--muted)', fontSize: '.87rem', lineHeight: 1.7, margin: '0 0 .85rem' }}>
              Una carta por cada día de la semana, de lunes a domingo. Cada carta representa la energía dominante, el reto o la oportunidad para ese día — un marco práctico para el día por delante, en lugar de un pronóstico fijo.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.35rem' }}>
              {DAYS.map((day, i) => (
                <div key={day} style={{ display: 'flex', gap: '.65rem', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', color: 'var(--gold)', opacity: .7, minWidth: 22 }}>{i + 1}.</span>
                  <span style={{ color: 'var(--muted)', fontSize: '.83rem', textTransform: 'capitalize' }}>{day} — energía y oportunidad del día</span>
                </div>
              ))}
            </div>
          </div>

          {/* Option 2 */}
          <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.35rem' }}>
              Tirada de Visión General Semanal
            </div>
            <div style={{ fontSize: '.72rem', color: 'var(--gold)', opacity: .6, marginBottom: '.85rem', fontFamily: "'Cinzel',serif", letterSpacing: '.05em' }}>5 cartas — vista más amplia</div>
            <p style={{ color: 'var(--muted)', fontSize: '.87rem', lineHeight: 1.7, margin: '0 0 .85rem' }}>
              Una tirada de cinco posiciones que te da la forma general de la semana — útil cuando quieres una visión temática en lugar de una guía día a día.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
              {[
                ['1', 'Visión general — el tema o energía dominante de la semana'],
                ['2', 'Foco de inicio de semana — en qué concentrarte de lunes a miércoles'],
                ['3', 'Navegación de mitad de semana — qué trabajar jueves y viernes'],
                ['4', 'Energía del fin de semana — descanso, reflexión o conexión social'],
                ['5', 'Lección clave — el mensaje o aprendizaje que ofrece la semana'],
              ].map(([num, label]) => (
                <div key={num} style={{ display: 'flex', gap: '.65rem', alignItems: 'baseline' }}>
                  <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', color: 'var(--gold)', opacity: .7, minWidth: 22 }}>{num}.</span>
                  <span style={{ color: 'var(--muted)', fontSize: '.83rem' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* How to do your weekly reading */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Cómo Hacer Tu Lectura Semanal
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            El mejor momento es el <strong style={{ color: 'var(--gold)', fontWeight: 400 }}>domingo por la tarde o el lunes por la mañana</strong> — en el umbral de la semana, antes de que su energía haya tomado forma. Muchos lectores lo convierten en un ritual silencioso: una taza de té, una mesa despejada, unos minutos de quietud antes de sacar las cartas.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Baraja tu mazo despacio y con intención. Sostén una pregunta clara en la mente: <em>"¿Qué necesito saber sobre la semana por delante?"</em> Baraja hasta que el mazo se sienta listo, luego saca siete cartas y colócalas boca abajo de izquierda a derecha, una por cada día.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Voltea cada carta en orden — lunes primero, luego martes, y así hasta domingo. Lee cada carta antes de voltear la siguiente; deja que la imagen se construya gradualmente en lugar de revelar las siete a la vez. Escribe dos o tres palabras para cada posición a medida que avanzas.
          </p>
          <p>
            Mantén tus notas en algún lugar accesible — un diario, una app de notas, incluso una foto de la tirada. Vuelve a la lectura cada noche para ver cómo se desplegó la energía y qué reveló la carta. Con el tiempo, esta reflexión profundiza considerablemente tu lectura.
          </p>
        </div>
      </div>

      {/* Reading tips */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Consejos de Lectura para la Semana
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '.75rem' }}>
          {[
            ['⚡', 'Arcanos Mayores en un día', 'Una carta de los Arcanos Mayores en una posición diaria señala algo significativo — un evento importante, una conversación valiosa o un tema con peso real. Son días para presentarse con plenitud y prestar atención.'],
            ['🛡', 'Cartas desafiantes', 'La Torre, el Cinco de Espadas, el Diez de Bastos — no son días para temer, sino días que conviene abordar con cuidado. Prevenido es estar preparado. Saber que un día puede ser exigente te permite prepararte, dosificar tu energía y elegir tus respuestas con deliberación.'],
            ['🌊', 'Palos repetidos', 'Si varias cartas comparten palo, la semana entera lleva el sabor de ese elemento: muchos Bastos sugieren una semana de alta energía, creativa o enfocada en la carrera; las Copas apuntan a temas emocionales o relacionales; las Espadas a retos mentales; los Pentáculos a asuntos prácticos o económicos.'],
            ['🌙', 'Cartas del fin de semana', 'Las posiciones 6 y 7 (sábado y domingo) revelan la energía del fin de semana. Mira aquí buscando descanso, reflexión, conexión social o renovación personal — y la nota con la que la semana cerrará antes de que comience el próximo ciclo.'],
          ].map(([icon, title, text]) => (
            <div key={title as string} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem' }}>
              <div style={{ fontSize: '1.3rem', marginBottom: '.4rem' }}>{icon}</div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.78rem', letterSpacing: '.08em', color: 'var(--gold)', opacity: .8, marginBottom: '.4rem', textTransform: 'uppercase' }}>{title}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.6, margin: 0 }}>{text as string}</p>
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>¿Lista para leer tu semana?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Baraja tu mazo y saca siete cartas. Usa nuestra guía de significados para interpretar cada posición diaria.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/cartas" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Ver Significados de las Cartas
          </Link>
          <Link href="/es/tiradas/tres-cartas" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Tirada de Tres Cartas
          </Link>
        </div>
      </div>
    </div>
  )
}
