import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tarot de Luna Menguante — Guía de Reflexión y Liberación | TarotAxis',
  description: 'Una tirada de tarot de luna menguante para la fase lunar descendente. Esquema de cuatro cartas para reflexionar, aprender y crear espacio — la fase de integración entre la luna llena y la luna nueva.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/luna-menguante',
    languages: {
      'en': 'https://tarotaxis.com/spreads/waning-moon',
      'es': 'https://tarotaxis.com/es/tiradas/luna-menguante',
      'x-default': 'https://tarotaxis.com/spreads/waning-moon',
    },
  },
  openGraph: {
    title: 'Tirada de Tarot de Luna Menguante — Guía de Reflexión y Liberación',
    description: 'Una tirada de cuatro cartas de luna menguante para la reflexión, la integración y crear espacio para el ciclo que viene.',
    url: 'https://tarotaxis.com/es/tiradas/luna-menguante',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'Lo Que Me Enseñó Este Ciclo',
    desc: 'La lección más importante que ha revelado el ciclo lunar pasado. La luna menguante es la fase de integración — el tiempo en que la experiencia de las últimas dos semanas se vuelve sabiduría en vez de simples eventos. Esta carta nombra lo que vale la pena llevar adelante.',
  },
  {
    num: 2,
    name: 'Lo Que Aún Permanece',
    desc: 'Algo que la luna llena ya te mostró — pero que no has soltado por completo. A menudo culpa, resentimiento, esperanza sostenida demasiado tiempo o un patrón que entiendes intelectualmente pero al que te aferras emocionalmente. La luna menguante ofrece una segunda ventana para soltarlo de verdad.',
  },
  {
    num: 3,
    name: 'Lo Que Estoy Compostando',
    desc: 'En la naturaleza la luna menguante es cuando el crecimiento alimenta al suelo. Esta carta describe lo que ha terminado de una forma que se convierte en nutrición para lo que viene — el fracaso que te enseñó, la relación que te formó, el proyecto que te preparó.',
  },
  {
    num: 4,
    name: 'Cómo Preparar Espacio',
    desc: 'Una instrucción práctica para los días antes de la luna nueva. La luna menguante no es un tiempo para actuar tanto como para despejar — hacer espacio. Esta carta nombra el despeje específico que más vale la pena hacer antes de que empiece el próximo ciclo.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una tirada de tarot de luna menguante?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada de tarot de luna menguante es un esquema de cartas diseñado para la fase descendente del ciclo lunar — el período de aproximadamente dos semanas entre la luna llena y la próxima luna nueva, cuando la luna visible se va reduciendo cada noche. La luna menguante se asocia tradicionalmente con la reflexión, la integración, la liberación, la rendición y el giro hacia adentro antes de que comience un nuevo ciclo. Una tirada de luna menguante usa estos temas como significados de posición, ayudándote a procesar lo que el ciclo pasado te ha traído y a crear espacio para lo que viene.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuándo debería hacer una lectura de tarot de luna menguante?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En cualquier momento durante la fase menguante de aproximadamente dos semanas, pero dos ventanas son particularmente potentes: el cuarto menguante (alrededor de una semana después de la luna llena) y la luna oscura — los dos o tres días finales antes de la luna nueva. El cuarto menguante es ideal para la reflexión y aprender del ciclo. La luna oscura es la mejor para el soltar profundo y el trabajo de sombra.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué se diferencia la luna menguante de la luna llena?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La luna llena es el pico — todo visible, todo iluminado, el clímax del relato lunar. La luna menguante es lo que sigue: la fase de integración. Si la luna llena te muestra lo que está completo, la luna menguante es cuando haces el trabajo real de soltarlo. La luna llena revela; la luna menguante integra. Muchas lectoras encuentran las tiradas de luna menguante menos dramáticas pero más transformadoras con el tiempo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo fijar intenciones durante la luna menguante?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La luna menguante no es el tiempo tradicional para fijar intenciones hacia el futuro — ese trabajo pertenece a la luna nueva. Pero puedes usar la fase menguante para aclarar a qué quieres que apunten tus próximas intenciones, entendiendo lo que el ciclo que se cierra te ha enseñado. Piénsalo como la fase de investigación antes del ritual de luna nueva.',
      },
    },
  ],
}

export default function LunaMenguantePage() {
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        <Link href="/es" style={{ color: 'var(--muted)' }}>Inicio</Link>
        <span>/</span>
        <Link href="/es/tiradas" style={{ color: 'var(--muted)' }}>Tiradas de Tarot</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Tirada de Luna Menguante</span>
      </nav>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>☽</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tarot de Luna Menguante
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          La luna menguante es la fase descendente — el tiempo de integración entre la luminosidad de la luna llena y la oscuridad de la próxima luna nueva. Usa esta tirada para cosechar la sabiduría del ciclo que se cierra y preparar espacio para lo que viene.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['4 Cartas', 'Reflexión', 'Integración'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          La Energía de la Luna Menguante
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            La luna menguante se extiende aproximadamente dos semanas — desde la noche posterior a la luna llena hasta la próxima luna nueva. Cada noche la luna visible se hace más pequeña, hasta que desaparece por completo en la fase de luna oscura. Astrológica y tradicionalmente, esta es la fase del <em>soltar</em>: no la liberación dramática de la luna llena, sino el trabajo más lento y silencioso de integrar lo sucedido y limpiar el espacio para el próximo ciclo.
          </p>
          <p style={{ margin: 0 }}>
            Muchas practicantes lunares consideran que la luna menguante es la fase más genuinamente transformadora del ciclo entero. La luna llena te muestra lo que está completo; la luna menguante es cuando haces la labor real de completarlo. Descansar, escribir en el diario, ordenar, terminar conversaciones que han cumplido su curso, terminar libros en vez de empezar nuevos — son actividades de luna menguante. Una tirada de tarot de luna menguante trae esa misma energía a tu vida interior.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          La Tirada — 4 Cartas
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Saca cuatro cartas en orden. El esquema traza el arco de la fase menguante: lo que el ciclo enseñó, lo que aún permanece, lo que se composta en sabiduría y cómo preparar espacio para la luna nueva que viene.
        </p>

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
                <div style={{ fontSize: '.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', maxWidth: 72 }}>{pos.name}</div>
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

      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Continúa el ciclo lunar</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          La luna menguante fluye naturalmente hacia la luna oscura y luego a la luna nueva. Cada fase tiene su propia tirada.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/tiradas/luna-oscura" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>Tirada de Luna Oscura</Link>
          <Link href="/es/tiradas/luna-nueva" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>Tirada de Luna Nueva</Link>
          <Link href="/es/tiradas/luna-llena" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>Tirada de Luna Llena</Link>
        </div>
      </div>
    </div>
  )
}
