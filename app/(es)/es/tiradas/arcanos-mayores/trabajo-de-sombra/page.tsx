import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Trabajo de Sombra — Disposición de 5 Cartas de Arcanos Mayores | TarotAxis',
  description: 'Una tirada de trabajo de sombra de 5 cartas usando sólo los Arcanos Mayores. Encuéntrate con lo que te has negado a ver, la herida que hay debajo y el don del otro lado.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/arcanos-mayores/trabajo-de-sombra',
    languages: {
      'en': 'https://tarotaxis.com/spreads/major/shadow-work',
      'es': 'https://tarotaxis.com/es/tiradas/arcanos-mayores/trabajo-de-sombra',
      'x-default': 'https://tarotaxis.com/spreads/major/shadow-work',
    },
  },
  openGraph: {
    title: 'Tirada de Trabajo de Sombra — Lectura de Sombra con Arcanos Mayores',
    description: 'Cinco triunfos para las partes de ti que has exiliado. Una excavación arquetípica enfocada de la sombra.',
    url: 'https://tarotaxis.com/es/tiradas/arcanos-mayores/trabajo-de-sombra',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  { num: 1, name: 'Lo que me niego a ver', desc: 'El rasgo, sentimiento o verdad que tu yo diurno ha estado trabajando más duro por desconocer. La carta aquí nombra lo que has empujado al borde de la conciencia.' },
  { num: 2, name: 'La herida que hay debajo', desc: 'La lesión original que la negación está protegiendo. A menudo algo más joven de lo que recuerdas, a menudo relacional, a menudo un lugar donde ser tú misma/o fue recibido con rechazo o amenaza.' },
  { num: 3, name: 'Cómo se muestra en mi vida', desc: 'El patrón que este material desconocido hace en el mundo — la dinámica repetida, la forma relacional recurrente, la situación en la que te encuentras atraída/o sin querer.' },
  { num: 4, name: 'Lo que necesita para integrarse', desc: 'La cualidad específica de atención, ritual o relación que la parte exiliada está pidiendo. No un arreglo, sino las condiciones bajo las cuales puede volver a casa.' },
  { num: 5, name: 'El don del otro lado', desc: 'La fuerza, don o capacidad antes ocultos que se vuelven disponibles una vez que se encuentra con la sombra. Lo que recibes cuando este material se integra en lugar de cargarse inconscientemente.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿En qué se diferencia el tarot de trabajo de sombra de una lectura normal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una lectura de tarot normal tiende a abordar una situación, decisión o relación presente. El tarot de trabajo de sombra gira la atención hacia dentro, a las partes desconocidas de uno mismo — lo que has enterrado, exiliado o te has negado a ver. Las preguntas son incómodas por diseño, y el objetivo no es consejo sino integración: traer el material oculto a una relación consciente para que deje de dirigir el espectáculo desde abajo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Es seguro hacer tarot de trabajo de sombra a solas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para la mayoría, el trabajo de sombra autoguiado ocasional está bien e incluso es útil. Sin embargo, si el material que emerge te abruma, se vincula a trauma o desestabiliza tu funcionamiento diario, llévalo a una/un terapeuta o consejera/o familiarizada/o con el trabajo profundo. Las cartas son un instrumento de enfoque, no un sustituto del apoyo humano cualificado cuando las cosas van profundo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si sigo sacando la misma carta de sombra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sacar repetidamente la misma carta Mayor en lecturas de sombra es una señal fuerte de que el arquetipo es el trabajo central de esta fase de tu vida. La Luna recurrente sugiere material en torno a la ilusión, la proyección y el inconsciente; El Diablo sugiere atadura, adicción o vergüenza; El Colgado sugiere una rendición que aún no se ha permitido. Quédate con la carta. La repetición es la invitación.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué usar sólo Arcanos Mayores para el trabajo de sombra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El material de sombra opera al nivel arquetípico. Es más antiguo que tu relato consciente, a menudo heredado, y moldeado por fuerzas mayores que la circunstancia personal. Los Arcanos Mayores hablan en ese mismo registro — son el lenguaje que la sombra ya conoce. Usar sólo triunfos mantiene la lectura a la profundidad donde el trabajo realmente sucede, en lugar de patinar por la superficie cotidiana.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Con qué frecuencia debo hacer una tirada de trabajo de sombra?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Con menos frecuencia de la que podrías pensar. Una tirada de sombra significativa pide semanas o meses de integración antes de que otra sea útil — el trabajo sucede entre lecturas, en la vida, en la relación, en el sueño. Una vez por estación es suficiente para la mayoría. Hacerla semanalmente tiende a patinar por la superficie y evitar la integración más profunda que las cartas ya han nombrado.',
      },
    },
  ],
}

export default function MajorTrabajoDeSombraPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/es/tiradas" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Tiradas</Link>
          <span style={{ opacity: .4 }}>›</span>
          <Link href="/es/tiradas/arcanos-mayores" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Arcanos Mayores</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Trabajo de Sombra</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>☾</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Tirada de Trabajo de Sombra
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            Cinco cartas de Arcanos Mayores para las partes de ti que has exiliado. Una lectura arquetípica enfocada que se encuentra con lo que te has negado a ver — y el don que regresa cuando lo haces.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Antes de empezar
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            El trabajo de sombra pide honestidad y la disposición a estar incómoda/o un rato. La sombra no es una parte monstruosa de ti; es el material que no encajaba en el papel que se te pidió interpretar, y por eso fue apartado, a menudo muy joven. Encontrarse con ella es un regreso a casa, incluso cuando el encuentro es doloroso.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Elige un momento en el que no serás interrumpida/o y un lugar donde puedas tener privacidad. Ten agua cerca, y quizá un cuaderno. Si hay trauma reciente activo o tu sistema nervioso está desregulado, guarda esta lectura para otro día — el trabajo es más útil cuando estás suficientemente firme para encontrarte con lo que venga.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Separa los 22 triunfos. Baraja despacio y deja que la pregunta sea sin palabras si así lo quiere — la sombra no siempre se anuncia en el lenguaje. Coloca cinco cartas en una fila.
          </p>
        </div>

        {/* Layout */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            Las cinco posiciones
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Léelas de izquierda a derecha. La tirada se mueve de la negación superficial a la herida, sale al patrón que hace en la vida, entra en lo que la parte exiliada necesita, y atraviesa hacia el don del otro lado.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {[1, 2, 3, 4, 5].map(n => (
              <div key={n} style={{ width: 52, height: 80, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>
                {n}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS.map(({ num, name, desc }) => (
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

        {/* Interpreting tips */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Cómo leer tus resultados
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Muévete despacio. La tentación en el trabajo de sombra es leer rápido y permanecer aguda/o — interpretar las cartas como una secuencia de ideas. Resístelo. Mira cada carta y nota la respuesta corporal antes de alcanzar las palabras. El parpadeo de resistencia, la pequeña contracción en el pecho, las ganas de saltar a la siguiente — ahí está el trabajo.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Honra el vínculo entre las cartas 1 y 2. La negación de la superficie es casi siempre una defensa alrededor de una herida más antigua. Si La Emperatriz se sienta en la posición 1 y El Colgado en la 2, la negación superficial de la capacidad nutricia probablemente defiende una experiencia temprana de haber tenido que sacrificarse o esperar. La estructura de la tirada te impide colapsar una en la otra.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            No te apresures a la carta del don. La posición 5 es real, pero llega por la vía del trabajo, no antes. Leerla como una recompensa a reclamar rápido traiciona el ritmo lento, somático y a menudo poco espectacular de la integración real. Deja que el don sea una promesa, no un atajo.
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
          <Link href="/es/tiradas/arcanos-mayores" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Más tiradas</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Todas las tiradas de Arcanos Mayores →</div>
          </Link>
          <Link href="/es/lectura-gratis" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Pruébalo ahora</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Lectura de tarot gratis →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
