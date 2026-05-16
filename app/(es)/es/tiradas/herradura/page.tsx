import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada del Tarot de la Herradura — Guía de Lectura de 7 Cartas | TarotAxis',
  description: 'Aprende la tirada de tarot de la herradura — un esquema clásico de 7 cartas que cubre pasado, presente, futuro, influencias ocultas y resultado. Guía completa de posiciones con consejos.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/herradura',
    languages: {
      'en': 'https://tarotaxis.com/spreads/horseshoe',
      'es': 'https://tarotaxis.com/es/tiradas/herradura',
      'x-default': 'https://tarotaxis.com/spreads/horseshoe',
    },
  },
  openGraph: {
    title: 'Tirada del Tarot de la Herradura — Guía de Lectura de 7 Cartas',
    description: 'Aprende la tirada de tarot de la herradura — un esquema clásico de 7 cartas que cubre pasado, presente, futuro, influencias ocultas y resultado.',
    url: 'https://tarotaxis.com/es/tiradas/herradura',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'El Pasado',
    subtitle: 'Influencias que llevan al ahora',
    desc: 'La energía, los eventos o los patrones del pasado reciente que han moldeado directamente la situación actual. No es historia lejana — es el impulso que te trajo donde estás hoy. Comprender esta carta te ayuda a ver lo que ya está en movimiento.',
  },
  {
    num: 2,
    name: 'El Presente',
    subtitle: 'Situación actual',
    desc: 'Dónde están las cosas en este momento. Esta carta captura el corazón del asunto tal como existe ahora — la energía dominante, el reto u oportunidad con la que trabajas en este instante. Es el centro de la herradura y la lente a través de la cual deben leerse las demás cartas.',
  },
  {
    num: 3,
    name: 'Influencias Ocultas',
    subtitle: 'Lo que quizá no veas',
    desc: 'Las fuerzas invisibles que operan bajo la superficie — patrones inconscientes, factores pasados por alto, dinámicas de fondo o información a la que aún no tienes acceso. Suele ser una de las cartas más reveladoras de la tirada, sacando a la luz precisamente aquello que más necesita ser consciente.',
  },
  {
    num: 4,
    name: 'Obstáculos',
    subtitle: 'Lo que se interpone en el camino',
    desc: 'El reto, bloqueo o resistencia principal con el que probablemente te encuentres en tu camino. Esta carta no indica un fracaso inevitable — señala lo que requiere atención consciente y preparación. Conocer el obstáculo de antemano siempre es una ventaja.',
  },
  {
    num: 5,
    name: 'Influencias Externas',
    subtitle: 'Personas y entorno a tu alrededor',
    desc: 'Las personas, circunstancias, relaciones y factores ambientales que rodean la situación — cosas que no están del todo bajo tu control pero que afectarán significativamente al resultado. Esta carta puede representar a una persona, un sistema, un contexto cultural o un patrón energético más amplio.',
  },
  {
    num: 6,
    name: 'Consejo',
    subtitle: 'Lo que las cartas recomiendan',
    desc: 'La acción, actitud, cualidad o comprensión más importante que la lectura te pide aportar a esta situación. Considera esta como las cartas hablándote directamente: si solo pudieras quedarte con una cosa de esta tirada, ¿qué te ofrece como guía la sexta posición?',
  },
  {
    num: 7,
    name: 'El Resultado',
    subtitle: 'Resultado probable',
    desc: 'El resultado más probable si las energías actuales continúan y se sigue el consejo de la lectura. Como todas las cartas de resultado, esto es una trayectoria, no un destino fijo — refleja el camino por el que vas actualmente. Si quieres un resultado distinto, las otras seis cartas te muestran dónde enfocarte.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es la tirada de tarot de la herradura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La tirada de tarot de la herradura es un esquema clásico de 7 cartas en el que las cartas se disponen en un arco o forma de herradura. Cubre siete posiciones: el pasado, el presente, las influencias ocultas, los obstáculos, las influencias externas, el consejo y el resultado probable. La tirada se considera un punto medio entre la brevedad de una lectura de tres cartas y la profundidad de la Cruz Celta — lo bastante completa para explorar una situación a fondo, pero accesible para lectores de todos los niveles.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Para qué preguntas es mejor la tirada de la herradura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La tirada de la herradura funciona bien para cualquier situación que requiera una visión completa — particularmente preguntas sobre decisiones, relaciones, movimientos profesionales, retos o transiciones. Su fortaleza está en incluir influencias ocultas y factores externos, lo que la hace especialmente útil cuando una situación se siente confusa o sospechas que hay elementos que no estás viendo del todo. Es menos adecuada para preguntas simples de sí/no, para las cuales un método de una carta o de sí/no sería más apropiado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué se diferencia la herradura de la Cruz Celta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La tirada de la herradura usa 7 cartas; la Cruz Celta utiliza 10. La Cruz Celta se considera generalmente más compleja, con una carta dedicada al estado interno del consultante y una columna de cartas que representan distintas capas temporales y psicológicas. La herradura es más directa — cubre pasado, presente, futuro y las fuerzas clave en juego, pero con menos profundidad psicológica que la Cruz Celta completa. Muchos lectores usan la herradura como alternativa accesible a la Cruz Celta, o como un peldaño hacia ella.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se lee la tirada de tarot de la herradura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Coloca las siete cartas boca abajo en un arco de izquierda a derecha, imitando la forma de una herradura. Voltéalas una a una, leyendo cada una en secuencia desde la carta 1 (pasado) hasta la carta 7 (resultado). Lee cada carta primero de forma aislada dentro del significado de su posición, y luego busca el hilo narrativo que conecta las siete. Presta especial atención a la relación entre las influencias ocultas (carta 3) y el consejo (carta 6) — estas dos cartas suelen contener la información más práctica. Observa palos o números repetidos a lo largo de la tirada, ya que los patrones tienen un peso considerable en una lectura de 7 cartas.',
      },
    },
  ],
}

export default function HerraduraPage() {
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
        <span style={{ color: 'var(--gold)' }}>Tirada de la Herradura</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>⌒</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada del Tarot de la Herradura
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Un esquema clásico de 7 cartas usado por lectores de tarot durante generaciones. La tirada de la herradura te da una imagen completa de cualquier situación — desde el pasado que la moldeó hasta el resultado más probable — dispuesta en un arco que refleja el símbolo de la buena fortuna.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['7 Cartas', 'Intermedio', 'Cualquier Pregunta'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* About the spread */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Sobre la Tirada de la Herradura
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            La tirada de la herradura es uno de los esquemas de tarot más antiguos y enseñados, presente en libros y tradiciones de tarot que se remontan a principios del siglo XX. Su nombre proviene de la forma de arco que dibujan las siete posiciones de carta — una curva abierta que recuerda a una herradura, antiguo símbolo de suerte y protección. A diferencia de tiradas más elaboradas que requieren mucha memorización, la herradura sigue una secuencia lógica que la mayoría de los lectores encuentra intuitiva tras unos pocos usos.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Lo que distingue a la herradura de las tiradas más sencillas de tres cartas es la inclusión de las influencias ocultas y los factores externos — dos posiciones que reconocen la mayor complejidad de cualquier situación real. La vida real rara vez se moldea solo por lo que podemos ver. La carta de influencias ocultas saca a la luz lo que opera bajo la conciencia; la de influencias externas nombra a las personas, instituciones y circunstancias que afectan la situación desde fuera. Junto con las cartas de consejo y resultado, estas posiciones hacen de la herradura una herramienta genuinamente útil para la toma de decisiones y el análisis de situaciones.
          </p>
          <p>
            La tirada de la herradura se sitúa entre la tirada de tres cartas y la Cruz Celta tanto en complejidad como en profundidad. Es una elección ideal cuando una lectura de tres cartas se siente demasiado breve pero una Cruz Celta de diez se siente demasiado. Muchos lectores experimentados vuelven a la herradura con regularidad a lo largo de su práctica precisamente por este equilibrio.
          </p>
        </div>
      </div>

      {/* Visual horseshoe layout */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
          Esquema de Cartas — El Arco de la Herradura
        </div>
        {/* Arc layout: 3 cards bottom-left, 1 at top-center, 3 cards bottom-right */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          {/* Top card (position 4 — Obstacles, at apex) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem' }}>
            <div style={{ width: 68, height: 102, border: '1px solid rgba(201,168,76,.5)', borderRadius: 8, background: 'rgba(201,168,76,.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1rem', color: 'var(--gold)' }}>4</div>
            <div style={{ fontSize: '.58rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center' }}>Obstáculos</div>
          </div>
          {/* Middle row: 3, 5 */}
          <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem' }}>
              <div style={{ width: 68, height: 102, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1rem', color: 'var(--gold)' }}>3</div>
              <div style={{ fontSize: '.58rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center' }}>Ocultas</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem' }}>
              <div style={{ width: 68, height: 102, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1rem', color: 'var(--gold)' }}>5</div>
              <div style={{ fontSize: '.58rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center' }}>Externas</div>
            </div>
          </div>
          {/* Lower row: 2, 6 */}
          <div style={{ display: 'flex', gap: '5rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem' }}>
              <div style={{ width: 68, height: 102, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1rem', color: 'var(--gold)' }}>2</div>
              <div style={{ fontSize: '.58rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center' }}>Presente</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem' }}>
              <div style={{ width: 68, height: 102, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1rem', color: 'var(--gold)' }}>6</div>
              <div style={{ fontSize: '.58rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center' }}>Consejo</div>
            </div>
          </div>
          {/* Bottom row: 1, 7 */}
          <div style={{ display: 'flex', gap: '7rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem' }}>
              <div style={{ width: 68, height: 102, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1rem', color: 'var(--gold)' }}>1</div>
              <div style={{ fontSize: '.58rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center' }}>Pasado</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem' }}>
              <div style={{ width: 68, height: 102, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1rem', color: 'var(--gold)' }}>7</div>
              <div style={{ fontSize: '.58rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center' }}>Resultado</div>
            </div>
          </div>
        </div>
      </div>

      {/* Position descriptions */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '.06em' }}>
          Las Siete Posiciones Explicadas
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {POSITIONS.map(pos => (
            <div key={pos.num} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.8rem', color: 'var(--gold)' }}>
                {pos.num}
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.88rem', color: 'var(--gold)', marginBottom: '.15rem' }}>{pos.name}</div>
                <div style={{ fontSize: '.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '.5rem' }}>{pos.subtitle}</div>
                <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{pos.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to read */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Cómo Leer la Tirada de la Herradura
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Baraja tu mazo manteniendo tu pregunta claramente en mente. Cuando estés lista, coloca siete cartas boca abajo en el patrón de arco de la herradura que se muestra arriba — empezando desde abajo a la izquierda (carta 1) y subiendo por el arco hasta el vértice (carta 4) antes de descender por el lado derecho para terminar con la carta 7 abajo a la derecha.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Voltea las cartas una a una en secuencia. Lee cada carta plenamente dentro del significado de su posición antes de pasar a la siguiente. Una vez que las siete sean visibles, da un paso atrás y busca la narrativa mayor — ¿cómo conecta el pasado (carta 1) con las influencias ocultas (carta 3)? ¿Aborda el consejo (carta 6) el obstáculo (carta 4)? ¿Se siente merecido el resultado (carta 7) dada la situación presente (carta 2)?
          </p>
          <p>
            Presta especial atención a los palos repetidos: tres o más cartas del mismo palo señalan dónde reside la energía dominante de la lectura. Copas apuntan a corrientes emocionales; Espadas a conflicto o claridad mental; Bastos a ambición y acción; Pentáculos a preocupaciones materiales. Cartas repetidas de Arcanos Mayores sugieren que la situación lleva un peso kármico o de lección vital significativo y debe tomarse en serio.
          </p>
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>¿Lista para extender tu herradura?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Saca siete cartas y usa la guía de posiciones de arriba para interpretar tu lectura.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/lectura-gratis" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Sacar Cartas Ahora
          </Link>
          <Link href="/es/tiradas/cruz-celta" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Probar la Cruz Celta
          </Link>
          <Link href="/es/tiradas" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Todas las Tiradas
          </Link>
        </div>
      </div>
    </div>
  )
}
