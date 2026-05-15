import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tarot de Carrera — Trabajo, Camino y Propósito | TarotAxis',
  description: 'Explora tiradas de tarot de carrera para decisiones laborales, cambios de trabajo y encontrar tu propósito. Guías paso a paso con significados de posición para 3, 4 y 5 cartas.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/carrera',
    languages: {
      'en': 'https://tarotaxis.com/spreads/career',
      'es': 'https://tarotaxis.com/es/tiradas/carrera',
      'x-default': 'https://tarotaxis.com/spreads/career',
    },
  },
  openGraph: {
    title: 'Tirada de Tarot de Carrera — Trabajo, Camino y Propósito',
    description: 'Encuentra claridad sobre tu dirección profesional, decisiones laborales y propósito vital con tiradas de tarot dedicadas. Guías de posición para cada situación laboral.',
    url: 'https://tarotaxis.com/es/tiradas/carrera',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const SPREADS = [
  {
    name: 'Dirección Profesional (5 Cartas)',
    cards: 5,
    when: 'Úsala cuando te sientas atascada, sin rumbo o insegura sobre tu camino profesional. Funciona bien en encrucijadas de carrera, después de un revés, o cuando intuyes que algo necesita cambiar pero todavía no puedes nombrarlo.',
    positions: [
      { num: 1, name: 'Situación Actual', desc: 'Una instantánea honesta de dónde estás en el trabajo ahora mismo — la energía, la realidad, lo que de hecho está ocurriendo bajo la superficie.' },
      { num: 2, name: 'Tus Fortalezas', desc: 'Las habilidades, cualidades y recursos disponibles para ti — lo que de verdad puedes aprovechar, estés usándolo actualmente o no.' },
      { num: 3, name: 'Lo Que Te Frena', desc: 'El patrón, creencia, miedo u obstáculo externo que está limitando tu progreso. Esta carta a menudo lleva la información más útil de la tirada.' },
      { num: 4, name: 'El Camino Alineado', desc: 'La dirección más en sintonía con quién eres y con lo que viniste a hacer — no necesariamente la ruta más fácil, sino la más auténtica.' },
      { num: 5, name: 'Resultado Probable (3–6 meses)', desc: 'La trayectoria en la que estás si continúas como estás — o si giras en la dirección que sugiere la carta anterior. Una posibilidad, no una certeza.' },
    ],
  },
  {
    name: '¿Nuevo Empleo o Cambio? (4 Cartas)',
    cards: 4,
    when: 'Úsala cuando estés sopesando un movimiento profesional concreto — una oferta de trabajo, un despido, una renuncia, o la atracción hacia algo nuevo. Es más útil cuando ya tienes una decisión concreta delante.',
    positions: [
      { num: 1, name: 'Dónde Estás Ahora', desc: 'Tu posición actual en términos honestos — la realidad de quedarte donde estás, incluyendo lo que es genuinamente bueno y lo que te cuesta.' },
      { num: 2, name: 'Lo Que Ofrece Quedarse', desc: 'Los dones y el crecimiento disponibles si permaneces — no una justificación para quedarte, sino un recuento honesto de lo que de hecho hay aquí.' },
      { num: 3, name: 'Lo Que Ofrece Cambiar', desc: 'La oportunidad, energía y reto que vendrían con el movimiento — lo que ganarías, y lo que asumirías.' },
      { num: 4, name: 'Lo Que Más Necesita Considerarse', desc: 'El factor, la verdad o la pregunta más profunda que merece tu atención plena antes de decidir — lo que quizá hayas pasado por alto o evitado.' },
    ],
  },
  {
    name: 'Propósito y Vocación (3 Cartas)',
    cards: 3,
    when: 'Úsala cuando la pregunta no es sobre un trabajo concreto sino sobre el sentido — cuando sientes que el trabajo que haces no refleja quién eres, o cuando buscas un sentido de dirección que va más allá del salario y el título.',
    positions: [
      { num: 1, name: 'Tus Dones Naturales', desc: 'Los talentos, capacidades y formas de relacionarte con el mundo que te salen con más naturalidad — lo que aportas sin esfuerzo, a veces sin darte cuenta.' },
      { num: 2, name: 'Lo Que de Verdad Te Llena', desc: 'El tipo de trabajo — no necesariamente un puesto concreto — que involucra todo tu ser y te deja con la sensación de que tu tiempo ha estado bien empleado.' },
      { num: 3, name: 'El Siguiente Paso', desc: 'Lo más útil que puedes hacer ahora para acercarte a un trabajo con sentido. Práctico, específico y a menudo más pequeño de lo que esperas.' },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una tirada de tarot de carrera?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada de tarot de carrera es un esquema estructurado de cartas en el que cada posición tiene asignado un significado específico relacionado con el trabajo, la dirección profesional o el propósito. En lugar de sacar cartas al azar, cada posición hace una pregunta concreta — sobre tu situación actual, tus fortalezas, los obstáculos, el camino por delante o los resultados probables. Esta estructura hace la lectura más enfocada y más fácil de interpretar que una tirada general, y asegura que las cartas hablen directamente a tus inquietudes profesionales.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuántas cartas debe tener una tirada de carrera?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende de tu pregunta. Una tirada de 3 cartas es ideal para una pregunta enfocada sobre el propósito o el siguiente paso — es sencilla, clara y fácil de interpretar. Una tirada de 4 cartas funciona bien cuando estás sopesando dos opciones en paralelo. Una tirada de 5 cartas te da una imagen más completa de tu situación, fortalezas, obstáculos y trayectoria. No hay ventaja en sacar más cartas de las que necesitas — una lectura limpia de 3 cartas a menudo arroja más comprensión que un esquema desbordado de diez posiciones.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué cartas del tarot son buenas para lecturas de carrera?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Varias cartas son particularmente relevantes en lecturas de carrera. Los Pentáculos (o Monedas) hablan de la realidad material — dinero, estabilidad, habilidad práctica y resultados tangibles. Los Bastos representan la pasión, el impulso creativo y la energía emprendedora. Las Espadas apuntan a la claridad mental, las decisiones difíciles y el pensamiento honesto. Entre los Arcanos Mayores, El Carro sugiere impulso adelante y motor profesional; La Estrella indica una vocación con sentido; El Emperador apunta a autoridad y estructura; y La Rueda de la Fortuna a menudo señala un cambio profesional significativo. Ninguna de estas es simplemente "buena" o "mala" — su significado depende de la posición y el contexto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puede el tarot ayudar con decisiones laborales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tarot puede ser una herramienta de pensamiento genuinamente útil para las decisiones laborales, particularmente cuando estás atascada o cuando la lógica por sí sola no ha resuelto la pregunta. Funciona no prediciendo el futuro, sino sacando a la luz lo que ya sabes — patrones que no has nombrado, factores que has estado evitando, y la verdad emocional bajo un dilema racional. Mucha gente descubre que extender una tirada de carrera clarifica sus instintos incluso antes de interpretar las cartas. Úsalo como herramienta de reflexión más que como tomador de decisiones, y la encontrarás prácticamente valiosa.',
      },
    },
  ],
}

const TIPS = [
  {
    suit: 'Pentáculos',
    meaning: 'Realidad material — dinero, estabilidad, habilidades prácticas y resultados tangibles. Los Pentáculos en una lectura de carrera hablan de la dimensión concreta y física del trabajo: lo que se está construyendo, ganando o haciendo sostenible.',
  },
  {
    suit: 'Bastos',
    meaning: 'Pasión, impulso creativo y dirección. Los Bastos muestran dónde reside genuinamente tu energía y entusiasmo — el tipo de trabajo que te enciende. Alta energía de Bastos a menudo señala caminos emprendedores o creativos.',
  },
  {
    suit: 'Espadas',
    meaning: 'Claridad mental y verdades difíciles. Las Espadas en una tirada de carrera a menudo apuntan a decisiones que requieren pensamiento honesto — reconocer lo que no está funcionando, cortar el autoengaño o tomar una decisión dura pero necesaria.',
  },
  {
    suit: 'Arcanos Mayores',
    meaning: 'Puntos de inflexión profesionales significativos. Cuando aparecen cartas de los Arcanos Mayores en una tirada de carrera, señalan que algo mayor está en juego — una transición con sentido, una elección que define, o un capítulo con consecuencias reales para tu camino.',
  },
]

export default function CarreraSpreadPage() {
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
        <span style={{ color: 'var(--gold)' }}>Carrera</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tarot de Carrera
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Ya sea que estés sopesando un cambio de trabajo, buscando tu propósito, o simplemente tratando de entender por qué tu camino actual se siente equivocado, el tarot puede traer una claridad sorprendente. Estas tiradas están diseñadas para reflejar la verdad de tu vida laboral — no para decirte qué hacer, sino para mostrarte lo que ya sabes.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['Carrera', 'Propósito', 'Trabajo y Dinero', 'Toma de Decisiones'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Spreads */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '.06em' }}>
          Esquemas de Tirada de Carrera
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {SPREADS.map((spread) => (
            <div key={spread.name} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap', marginBottom: '.6rem' }}>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.04em' }}>{spread.name}</div>
                <span style={{ padding: '.2rem .6rem', borderRadius: 20, fontSize: '.65rem', background: 'rgba(201,168,76,.1)', color: 'var(--gold)', fontFamily: "'Cinzel',serif", flexShrink: 0 }}>{spread.cards} cartas</span>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{spread.when}</p>

              {/* Visual card placeholders */}
              <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                {spread.positions.map(pos => (
                  <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.35rem' }}>
                    <div style={{ width: 52, height: 78, border: '1px solid rgba(201,168,76,.25)', borderRadius: 6, background: 'rgba(201,168,76,.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.9rem', color: 'var(--gold)' }}>
                      {pos.num}
                    </div>
                    <div style={{ fontSize: '.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', maxWidth: 56 }}>{pos.name}</div>
                  </div>
                ))}
              </div>

              {/* Position meanings */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                {spread.positions.map(pos => (
                  <div key={pos.num} style={{ display: 'flex', gap: '.75rem', alignItems: 'flex-start' }}>
                    <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.65rem', color: 'var(--gold)', marginTop: '.1rem' }}>{pos.num}</span>
                    <div>
                      <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.78rem', color: 'var(--gold)', marginRight: '.4rem' }}>{pos.name} —</span>
                      <span style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.6 }}>{pos.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to read a career spread */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Cómo Leer una Tirada de Carrera
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Antes de sacar las cartas, tómate un momento para quedarte genuinamente en silencio. Las preguntas de carrera a menudo vienen cargadas de ansiedad, comparación y la presión de expectativas externas. Déjalas a un lado lo mejor que puedas y nombra tu pregunta real con claridad — no lo que crees que deberías querer, sino lo que de verdad quieres entender. Cuanto más honesta sea la pregunta, más útil será la lectura.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Mientras barajas, sostén tu intención en lugar de fijarte en un resultado concreto. Las tiradas de carrera funcionan mejor cuando te acercas a ellas con curiosidad y no con una respuesta preferida. Si te descubres esperando una carta específica en una posición específica, fíjate — es información en sí misma sobre dónde tu energía está atascada.
          </p>
          <p>
            Al interpretar las cartas, presta especial atención a las posiciones que te resulten incómodas o que produzcan cartas que no quieres ver. En una lectura de carrera, esas posiciones — especialmente "Lo Que Te Frena" o "Lo Que Más Necesita Considerarse" — casi siempre llevan la guía más útil en lo práctico. La resistencia a una carta suele ser una señal de que ha aterrizado con precisión.
          </p>
        </div>
      </div>

      {/* Reading tips */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Consejos de Lectura: Los Palos en Tiradas de Carrera
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))', gap: '.75rem' }}>
          {TIPS.map(tip => (
            <div key={tip.suit} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{tip.suit}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{tip.meaning}</p>
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>¿Lista para tu tirada de carrera?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Elige una tirada de arriba y saca tus cartas. O explora la biblioteca completa de cartas para profundizar en el significado de cada una en un contexto profesional.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/tiradas/carrera/oferta-de-trabajo" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Tirada de Oferta de Trabajo
          </Link>
          <Link href="/es/cartas" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Ver Todas las Cartas
          </Link>
          <Link href="/es/tiradas/tres-cartas" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Tirada de Tres Cartas
          </Link>
        </div>
      </div>
    </div>
  )
}
