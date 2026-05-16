import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Gratitud y crecimiento — Tirada diaria de dos cartas | TarotAxis',
  description: 'Una práctica matutina de tarot con dos cartas que empareja gratitud y crecimiento. Empieza el día desde la plenitud, no desde la carencia — honra lo que ya está aquí y luego inclínate hacia tu borde.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/carta-del-dia/gratitud-y-crecimiento',
    languages: {
      'en': 'https://tarotaxis.com/daily/gratitude-and-growth',
      'es': 'https://tarotaxis.com/es/carta-del-dia/gratitud-y-crecimiento',
      'x-default': 'https://tarotaxis.com/daily/gratitude-and-growth',
    },
  },
  openGraph: {
    title: 'Gratitud y crecimiento — Tirada diaria de tarot de dos cartas',
    description: 'Empareja lo apreciativo y lo aspiracional en una tirada matutina de dos cartas. Una práctica diaria con los pies en la tierra para vivir desde la plenitud, no desde el hambre.',
    url: 'https://tarotaxis.com/es/carta-del-dia/gratitud-y-crecimiento',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'Gratitud',
    desc: 'Lo que honrar de hoy antes de que empiece. La carta nombra lo que ya es bueno, lo que ya funciona, lo que ya está de tu lado — eso que arriesgas pasar por alto porque se ha vuelto silenciosamente familiar. Leerla primero coloca el día en plenitud en vez de en hambre.',
  },
  {
    num: 2,
    name: 'Crecimiento',
    desc: 'El borde hacia el que inclinarse hoy. El lugar que pide expandirse — una habilidad, una conversación, una forma de estar. La carta de crecimiento no es una tarea pendiente; es la dirección hacia la que apunta tu devenir. Pasos pequeños y deliberados en la dirección de la carta suelen ser suficientes.',
  },
]

const PROMPTS = [
  '¿Qué está nombrando la carta de gratitud que he estado tratando como ordinario aunque no lo sea?',
  '¿A quién o a qué daría las gracias hoy si me permitiera sentirlo plenamente?',
  '¿Hacia dónde exactamente quiere que me incline hoy la carta de crecimiento — cuál es el primer movimiento más pequeño?',
  'Si gratitud y crecimiento se honraran por igual hoy, ¿cómo cambiaría mi ritmo?',
  '¿Hay algún lugar donde he estado persiguiendo crecimiento desde la carencia en vez de desde la plenitud?',
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una tirada de tarot de gratitud y crecimiento?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada de gratitud y crecimiento es una tirada diaria de dos cartas. La primera carta nombra algo que honrar de hoy — lo que ya es bueno, presente o funcional. La segunda carta nombra el borde hacia el que se te invita a inclinarte — hacia dónde quiere moverse tu devenir. Leerlas como un par ancla el día en la plenitud antes de extenderse hacia más.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué momento del día conviene hacer esta tirada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Por la mañana, idealmente antes de empezar a trabajar o de mirar el teléfono. La tirada está diseñada para marcar el tono del día — para recordarte lo que ya está aquí antes de que empieces a perseguir lo que no. Cinco minutos con una taza de té y un diario es la versión clásica de la práctica.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué se diferencia esto de una carta diaria normal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una sola carta diaria te da un tema. El par de gratitud y crecimiento te ofrece una base equilibrada: aprecio por lo que es y dirección hacia lo que quiere venir a continuación. Este emparejamiento evita que la práctica diaria derive hacia el puro autoconsuelo (solo gratitud) o hacia la pura superación personal (solo crecimiento). Las dos juntas son la práctica.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si mi carta de crecimiento parece un reto que no quiero?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El crecimiento a menudo parece un inconveniente al principio. Un Cinco de Pentáculos en la posición de crecimiento puede no estar prediciendo penurias — podría estar señalando tu forma de tratar la escasez, tu relación con pedir ayuda o tus suposiciones sobre lo que puedes permitirte perder. Léelo como una dirección de indagación, no como una instrucción para asumir una nueva carga.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo usar esto con cualquier mazo de tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. La tirada es independiente de cualquier mazo específico. Rider-Waite-Smith, Marsella, Thoth y cualquier mazo indie moderno funcionan. Lo que importa es que confíes en el mazo lo suficiente para dejar que las cartas hablen con honestidad. Si te inicias en el tarot, un mazo basado en Rider-Waite-Smith suele ser el más fácil de leer porque las imágenes son ilustrativas y la mayoría de recursos de significados están escritos para él.',
      },
    },
  ],
}

export default function GratitudYCrecimientoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/es/carta-del-dia" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Carta del Día</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Gratitud y crecimiento</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>🌱</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Gratitud y crecimiento — Tarot diario
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
            Una práctica matutina de dos cartas. Honra lo que ya está aquí y luego inclínate hacia tu borde. Empieza el día desde la plenitud, no desde el hambre.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Sobre esta práctica
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Casi todas las mañanas tienen una inclinación por defecto. O bien te despiertas enumerando lo que está mal — la bandeja de entrada, la fecha límite, lo que quedó por hacer — o te despiertas enumerando lo que quieres arreglar, construir o llegar a ser. Ambas listas son honestas, pero ninguna, por sí sola, es un buen punto de partida para un día.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            La tirada de gratitud y crecimiento es un contrapeso. Sacas una carta para anclar el día en lo que ya es bueno — la carta apreciativa. Después sacas una carta para apuntar hacia lo que pide expandirse — la carta aspiracional. Leídas juntas, crean una postura: plena pero todavía buscando, asentada pero no estancada.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Es una práctica útil para personas de alto rendimiento que tienden a saltarse la gratitud en su camino hacia el siguiente objetivo, e igual de útil para personas que se inclinan tanto hacia el aprecio que olvidan que el crecimiento forma parte de estar viva. El par es la medicina.
          </p>
        </div>

        {/* How to do it */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '1rem' }}>
            Cómo hacer la tirada
          </h2>
          <ol style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', paddingLeft: '1.2rem', margin: 0 }}>
            <li style={{ marginBottom: '.6rem' }}>Antes de tomar el mazo, respira hondo tres veces despacio. Deja que la mañana aterrice en tu cuerpo antes de empezar a hacerle preguntas.</li>
            <li style={{ marginBottom: '.6rem' }}>Baraja sosteniendo una intención sencilla en dos partes: <em>muéstrame qué agradecer y dónde crecer.</em></li>
            <li style={{ marginBottom: '.6rem' }}>Saca dos cartas y colócalas lado a lado. La primera es gratitud. La segunda es crecimiento.</li>
            <li style={{ marginBottom: '.6rem' }}>Lee primero la carta de gratitud. Deja que repose. Resiste el impulso de hojearla para pasar a la siguiente. La gratitud real tarda un instante en registrarse.</li>
            <li style={{ marginBottom: '.6rem' }}>Después lee la carta de crecimiento. Pregúntate en qué dirección apunta y cuál sería el primer paso más pequeño y honesto — no el más heroico.</li>
            <li>Anota ambas cartas en tu diario. Una línea por carta basta en días ocupados; las entradas más largas son bienvenidas en los días tranquilos.</li>
          </ol>
        </div>

        {/* Position meanings */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            Las dos posiciones
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Cada posición tiene su propio registro. Tenlas presentes mientras lees las cartas.
          </p>
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

        {/* Journal prompts */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Consignas de diario
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '.88rem', margin: '0 0 1rem' }}>
            Elige una o dos. El objetivo es un contacto honesto con las cartas, no un escrito exhaustivo.
          </p>
          <ul style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.9rem', paddingLeft: '1.2rem', margin: 0 }}>
            {PROMPTS.map(p => <li key={p} style={{ marginBottom: '.5rem' }}>{p}</li>)}
          </ul>
        </div>

        {/* When to use this variant */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Cuándo elegir esta variante
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Recurre a esta tirada cuando el día ya se siente lleno pero sin foco — demasiadas direcciones, demasiada posibilidad, ningún hilo claro del que tirar. La carta de gratitud te frena lo suficiente para sentir dónde estás de verdad. La carta de crecimiento te da una dirección hacia la que inclinarte en vez de diez.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Es especialmente buena como práctica de lunes por la mañana, al inicio de una nueva temporada o en la primera semana de vuelta tras un descanso — cualquier momento en que quieras volver a anclarte sin abrumarte con una lectura más larga. Donde la carta diaria estándar es tu compañera de cada día, esta variante es la tirada que marca el tono de semanas enteras si la sostienes con constancia.
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
