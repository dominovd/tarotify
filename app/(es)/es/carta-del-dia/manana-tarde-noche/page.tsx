import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mañana, tarde, noche — Tirada diaria de tres cartas | TarotAxis',
  description: 'Una práctica diaria de tarot con tres cartas que mapea la energía de la mañana, la tarde y la noche. Un mapa temporal para días ocupados en los que quieres un hilo del que tirar.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/carta-del-dia/manana-tarde-noche',
    languages: {
      'en': 'https://tarotaxis.com/daily/morning-afternoon-evening',
      'es': 'https://tarotaxis.com/es/carta-del-dia/manana-tarde-noche',
      'x-default': 'https://tarotaxis.com/daily/morning-afternoon-evening',
    },
  },
  openGraph: {
    title: 'Mañana, tarde, noche — Tirada diaria de tres cartas',
    description: 'Mapea tu día con una tirada diaria de tres cartas — una para la mañana, una para la tarde, una para la noche.',
    url: 'https://tarotaxis.com/es/carta-del-dia/manana-tarde-noche',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'Mañana',
    desc: 'La energía con la que entrar en el día. La carta describe la cualidad de la atención, el tono, el pie con el que quieres empezar. Es menos un pronóstico que una postura — qué llevar, más que qué esperar.',
  },
  {
    num: 2,
    name: 'Tarde',
    desc: 'Lo que pedirá el mediodía. El cambio, el reto o la apertura que llega una vez que el día ya está en marcha. Esta carta a menudo apunta a un momento concreto — una conversación, una decisión, un giro de energía para el que quieres estar preparada.',
  },
  {
    num: 3,
    name: 'Noche',
    desc: 'Cómo cerrar y qué integrar. La carta nombra lo que pide ser soltado, completado o simplemente acompañado en reposo. Leerla por la mañana te da un objetivo silencioso — una manera de saber por adelantado cómo quieres que aterrice el día.',
  },
]

const PROMPTS = [
  '¿Cuál de las tres cartas tiene la atracción más fuerte sobre mí ahora mismo, y por qué?',
  'Si la carta de la mañana marca el tono, ¿cuál es una cosa concreta que quiero hacer antes de las 10?',
  '¿De qué me advierte la carta de la tarde, o hacia qué me invita?',
  'Si tuviera que cerrar el día como sugiere la carta de la noche, ¿qué tendría que dejar de hacer y a qué hora?',
  '¿En qué parte del día es más probable que me aleje del hilo de la tirada?',
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una tirada de tarot de mañana, tarde, noche?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada diaria de tres cartas que mapea el día de forma temporal: la primera carta describe la energía o la postura para la mañana, la segunda nombra lo que pedirá el mediodía y la tercera apunta a cómo cerrar la noche. Es una práctica útil para días ocupados en los que quieres un único hilo coherente que sostener a través de demandas cambiantes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Es lo mismo que una tirada de pasado, presente, futuro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, aunque comparten una estructura de tres cartas. Una tirada de pasado-presente-futuro mira una línea de tiempo más larga y suele hacerse en torno a una pregunta concreta. La tirada de mañana-tarde-noche está acotada por un solo día, se hace sin pregunta específica y se lee como un mapa temporal y no como un arco narrativo. Está más cerca en espíritu de un chequeo diario que de una lectura adivinatoria.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuándo conviene hacer esta tirada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A primera hora de la mañana, antes de que el día se llene con las peticiones de otras personas. La idea es que la tirada actúe como un hilo al que puedas volver a lo largo del día — en la comida, en el bajón de media tarde, antes de descansar. Hacerla más tarde también funciona, pero pierdes el punto de referencia matutino.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Y si me sale la misma carta en la misma posición?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las cartas repetidas son una señal, no un fallo. Si tu carta de la mañana ha sido el Ocho de Pentáculos durante una semana, el mazo está sugiriendo que tus mañanas se han vuelto muy centradas en el trabajo — quizás en una medida útil, quizás en una insostenible. Anota la repetición en tu diario y pregúntate si el patrón te sirve o te dirige.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué se diferencia esto de una sola carta diaria?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una sola carta diaria te da un tema para sostener durante todo el día. Una tirada temporal de tres cartas te da un mapa más texturizado — útil cuando el día tiene fases claramente distintas, como una mañana de reuniones, una tarde creativa y una noche social. La versión de tres cartas pesa más; resérvala para días en los que la estructura adicional se gane su peso.',
      },
    },
  ],
}

export default function MananaTardeNochePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/es/carta-del-dia" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Carta del Día</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Mañana · Tarde · Noche</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>🌅</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Mañana · Tarde · Noche — Tarot diario
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
            Una práctica diaria de tres cartas que mapea la energía del día en tres movimientos. Un mapa temporal para días ocupados en los que quieres un único hilo que sostener.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Sobre esta práctica
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Algunos días no son realmente un día. Son tres días más pequeños cosidos entre sí — una mañana tranquila y concentrada, una tarde ruidosa y exigente, una noche lenta y social. Una sola carta diaria tiene problemas para sostener todo eso a la vez. A la hora de comer, el tema de la mañana ya se siente lejano, y por la noche ya has olvidado qué sacaste.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            La tirada de mañana-tarde-noche resuelve esto dándole a cada fase su propia carta. Sacas tres cartas por la mañana, las alineas en orden y tienes un mapa temporal del día. Cada carta pertenece a su propia ventana, pero las tres juntas forman un solo hilo al que puedes volver una y otra vez.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Es la variante diaria más útil para personas ocupadas. La estructura hace un trabajo real — evita que pierdas la guía del día en cuanto las cosas se ponen exigentes.
          </p>
        </div>

        {/* How to do it */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '1rem' }}>
            Cómo hacer la tirada
          </h2>
          <ol style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', paddingLeft: '1.2rem', margin: 0 }}>
            <li style={{ marginBottom: '.6rem' }}>Empieza por la mañana, antes de la primera tarea seria del día. Échale un vistazo a tu agenda para tener una idea aproximada de la forma del día.</li>
            <li style={{ marginBottom: '.6rem' }}>Baraja sosteniendo una intención sencilla: <em>muéstrame la mañana, la tarde y la noche.</em></li>
            <li style={{ marginBottom: '.6rem' }}>Saca tres cartas. Colócalas de izquierda a derecha — mañana, tarde, noche — sin darles la vuelta todavía.</li>
            <li style={{ marginBottom: '.6rem' }}>Da la vuelta primero a la carta de la mañana. Léela y deja que se asiente. Fija una postura para las próximas horas a partir de lo que nombra.</li>
            <li style={{ marginBottom: '.6rem' }}>Da la vuelta a la carta de la tarde. Léela por encima y déjala en paz hasta justo antes de comer. Volver a leerla entonces es la práctica.</li>
            <li style={{ marginBottom: '.6rem' }}>Da la vuelta a la carta de la noche. De nuevo, léela por encima y déjala. Vuelve a ella a última hora de la tarde mientras empiezas a bajar el ritmo.</li>
            <li>Termina el día con una breve entrada de diario: qué carta fue más certera, cuál más útil, cuál te sorprendió. Tres frases en total.</li>
          </ol>
        </div>

        {/* Position meanings */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            Las tres posiciones
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Cada posición tiene su propio registro. Sostén la pregunta de esa fase en mente mientras lees la carta.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS.map(({ num, name, desc }) => (
              <div key={num} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.1rem', background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12 }}>
                <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem' }}>{num}</div>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', marginBottom: '.3rem' }}>{name}</div>
                  <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reading tips */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Leer la secuencia
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Busca el arco que las tres cartas trazan juntas, no solo sus significados individuales. Una mañana de Dos de Espadas, una tarde de Cinco de Bastos y una noche de Cuatro de Copas cuenta una historia clara — la indecisión de la mañana endurece en conflicto al mediodía y te deja retraída por la noche. Saberlo de antemano te permite intervenir antes.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Los Arcanos Mayores en cualquier posición suelen cargar peso extra; si aparece uno, esa fase del día pide presencia genuina. Las cartas de la corte a menudo señalan personas concretas. Presta atención a la repetición entre días — la misma carta volviendo a la misma franja horaria es el mazo subrayando algo digno de atender.
          </p>
        </div>

        {/* Journal prompts */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Consignas de diario
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '.88rem', margin: '0 0 1rem' }}>
            Úsalas al final del día para integrar la tirada. Una o dos respuestas son suficientes.
          </p>
          <ul style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.9rem', paddingLeft: '1.2rem', margin: 0 }}>
            {PROMPTS.map(p => <li key={p} style={{ marginBottom: '.5rem' }}>{p}</li>)}
          </ul>
        </div>

        {/* When to use this variant */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Cuándo elegir esta variante
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Recurre a la tirada temporal de tres cartas en días con fases claramente distintas: una mañana enfocada de trabajo profundo, una tarde de reuniones, una noche de familia o descanso. También es buena cuando estás viajando, cuando estás en medio de un sprint largo de proyecto o cuando tu semana se ha sentido borrosa y quieres volver a sentir cada fase con nitidez.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Evítala en días lentos y sin forma — la estructura se sentirá impuesta en vez de sostenedora. En esos días, la carta diaria estándar o la tirada de equilibrio encajan mejor. La tirada de mañana-tarde-noche se gana su peso cuando hay genuinamente un día que mapear.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
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
          <Link href="/es/carta-del-dia" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Carta de hoy</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Tarot diario estándar →</div>
          </Link>
          <Link href="/es/lectura-gratis" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Pruébalo ahora</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Lectura de tarot gratis →</div>
          </Link>
          <Link href="/es/cartas" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Significados</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Las 78 cartas →</div>
          </Link>
          <Link href="/es/diario-de-tarot" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Lleva registro</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Diario de tarot →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
