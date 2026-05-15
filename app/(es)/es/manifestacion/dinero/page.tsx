import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tarot para Manifestar Dinero — Lectura de 3 Cartas de Abundancia Interior | TarotAxis',
  description: 'Una tirada de tarot de 3 cartas para manifestar dinero. Nombra el patrón interior que da forma a tu relación con el dinero, reconoce el apoyo existente y encuentra el paso concreto que mueve las cosas hacia adelante.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/manifestacion/dinero',
    languages: {
      'en': 'https://tarotaxis.com/manifestation/money',
      'es': 'https://tarotaxis.com/es/manifestacion/dinero',
      'x-default': 'https://tarotaxis.com/manifestation/money',
    },
  },
  openGraph: {
    title: 'Tirada de Tarot para Manifestar Dinero — Lectura de 3 Cartas',
    description: 'Una tirada de tarot de 3 cartas para manifestar dinero — nombra el patrón, encuentra el apoyo, da el siguiente paso concreto.',
    url: 'https://tarotaxis.com/es/manifestacion/dinero',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'Tu Historia con el Dinero',
    desc: 'La creencia heredada, el patrón o la relación con el dinero que actualmente moldea lo que te permites recibir. A menudo más antiguo que esta vida, sin duda más antiguo que este año. La carta nombra algo que has estado cargando sin nombrarlo.',
  },
  {
    num: 2,
    name: 'Lo Que Ya Te Apoya',
    desc: 'El recurso, habilidad, relación o cualidad mental que ya está contigo y en la que puedes apoyarte. No lo que desearías tener — lo que está aquí. La lectura insiste en que dejes de pasar por alto el suelo sobre el que ya estás de pie.',
  },
  {
    num: 3,
    name: 'El Siguiente Paso Concreto',
    desc: 'La acción específica, de esta semana, que más directamente cambiaría tu situación financiera. Lo suficientemente pequeña para hacerla de verdad, lo suficientemente grande para importar. A menudo algo práctico, ocasionalmente algo interno — pero siempre algo sobre lo que puedes actuar antes del próximo domingo.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué cartas del tarot significan que viene dinero?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El As de Pentáculos señala una nueva oportunidad financiera o la semilla de la abundancia. El Nueve de Pentáculos apunta a una abundancia ganada con tu propio esfuerzo y confianza en ti. El Seis de Pentáculos habla de un flujo sano de dar y recibir. La Emperatriz trae una creatividad fértil que a menudo se traduce en ingresos. La Sota de Pentáculos es una oportunidad práctica que llega — una oferta de trabajo, un contrato, una vía inesperada. Ninguna de estas garantiza dinero. Describen las condiciones en las que el dinero suele moverse hacia ti.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puede el tarot ayudarme a salir de deudas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tarot puede ayudarte a ver el patrón que sigue produciendo la deuda — la evasión, la vergüenza heredada, el gasto que se usa para calmar otra cosa. Salir de verdad es acción más estructura: una lista escrita de lo que debes, un plan de pago mensual realista, una conversación honesta con quien necesite saberlo. Las cartas no van a sustituir la hoja de cálculo. Lo que sí pueden hacer es que abrir la hoja de cálculo sea menos costoso psicológicamente, que para mucha gente es el cuello de botella.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Y si mi carta de "siguiente paso" parece pequeña o aburrida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Normalmente lo es — y ese es el punto. La manifestación vive en los pequeños movimientos consistentes, no en los dramáticos. La carta puede estar diciéndote que envíes un correo, hagas una pregunta o finalmente revises un saldo que has estado evitando. La mente quiere que el siguiente paso sea cinematográfico para poder rechazarlo. Las cartas suelen sugerir pasos lo bastante pequeños como para que no puedas rechazarlos por ese motivo. Haz lo aburrido. Luego vuelve a sacar el mes siguiente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tarda en verse el resultado después de esta lectura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los resultados siguen a la acción, no a las tiradas. Date entre cuatro y seis semanas trabajando activamente con lo que salió — sentándote con la historia del dinero, apoyándote en el sostén, dando el paso concreto cada semana — antes de evaluar. La mayoría de la gente que dice que la manifestación funcionó cuenta que tomó meses, no días. La mayoría de quienes dicen que no funcionó lo dejaron en la segunda semana. La diferencia entre los dos grupos rara vez son las cartas.',
      },
    },
  ],
}

export default function ManifestarDineroPage() {
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
        <span style={{ color: 'var(--gold)' }}>Manifestar Dinero</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>◈</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tarot para Manifestar Dinero
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Una lectura de tres cartas para el trabajo interior detrás de tus finanzas. Nombra el patrón que da forma a lo que llega, reconoce el apoyo que ya está contigo y encuentra la pequeña acción que realmente mueve tu situación hacia adelante.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['3 Cartas', 'Dinero y Abundancia', 'Trabajo Interior'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Why this spread */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Por Qué Funciona Esta Tirada
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            El trabajo con el dinero es, sobre todo, trabajo con el sistema nervioso. Los patrones que hay debajo del ganar y el gastar — la forma en que te encoges ante una factura, la forma en que das de más cuando te sientes pequeño, la forma en que evitas la app del banco durante una semana después de un mes difícil — se asentaron mucho antes de que tuvieras un salario. Manifestar dinero sin mirar esta capa es como intentar llenar más rápido un cubo agujereado. Las cartas empiezan donde vive el verdadero problema.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Hay una diferencia importante entre manifestación y evasión. La evasión escribe afirmaciones en el espejo y luego se niega a abrir la hoja de cálculo. La manifestación hace el trabajo interior y luego abre la hoja de cálculo. Esta tirada no te dejará saltarte la segunda mitad. La tercera carta siempre apunta a una acción, y la acción suele ser algo que ya sabías a medias que necesitabas hacer.
          </p>
          <p>
            Haz esta tirada cuando el dinero está apretado y hazla cuando las cosas fluyen — ambas son útiles, y la lectura cae de forma diferente en cada caso. En la escasez, las cartas tienden a nombrar el patrón de supervivencia y a ofrecer un movimiento estabilizador. En la abundancia, suelen señalar lo que estás malgastando en silencio y lo que se acumularía si fueras honesto al respecto. Haz la tirada mensualmente durante un año y te conocerás en torno al dinero de una forma que pocas personas conocen.
          </p>
        </div>
      </div>

      {/* Spread layout */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          La Tirada — Tres Cartas
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Baraja con una sola pregunta honesta: <em>¿Qué necesito ver sobre mi relación con el dinero ahora mismo?</em> Saca tres cartas de izquierda a derecha.
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
                <div style={{ fontSize: '.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', maxWidth: 84 }}>{pos.name}</div>
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Continúa el trabajo interior</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          El dinero y el éxito suelen desbloquearse juntos. Acompaña esta tirada con la lectura de éxito, o vuelve al conjunto completo.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/manifestacion/exito" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Manifestar Éxito
          </Link>
          <Link href="/es/manifestacion" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Todas las Tiradas de Manifestación
          </Link>
          <Link href="/es/cartas" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Todas las Cartas
          </Link>
        </div>
      </div>
    </div>
  )
}
