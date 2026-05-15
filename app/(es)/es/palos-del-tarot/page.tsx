import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Palos del Tarot — Copas, Pentáculos, Espadas y Bastos | TarotAxis',
  description: 'Los cuatro palos del tarot explicados — Copas, Pentáculos, Espadas y Bastos. Elemento, tema y las 56 cartas de los Arcanos Menores en los cuatro palos.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/palos-del-tarot',
    languages: {
      'en': 'https://tarotaxis.com/tarot-suits',
      'es': 'https://tarotaxis.com/es/palos-del-tarot',
      'x-default': 'https://tarotaxis.com/tarot-suits',
    },
  },
  openGraph: {
    title: 'Palos del Tarot — Copas, Pentáculos, Espadas y Bastos',
    description: 'Los cuatro palos del tarot explicados — elemento, tema y las 56 cartas de los Arcanos Menores.',
    url: 'https://tarotaxis.com/es/palos-del-tarot',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const SUITS = [
  {
    slug: 'copas',
    name: 'Copas',
    element: 'Agua',
    symbol: '🜄',
    theme: 'Emoción, amor, intuición y la vida interior.',
    sample: 'As de Copas, Dos de Copas, Tres de Copas, Cuatro de Copas, Cinco de Copas',
    href: '/es/palos-del-tarot/copas',
  },
  {
    slug: 'pentaculos',
    name: 'Pentáculos',
    element: 'Tierra',
    symbol: '🜃',
    theme: 'El mundo material — dinero, trabajo, cuerpo, crecimiento lento.',
    sample: 'As de Pentáculos, Dos de Pentáculos, Tres de Pentáculos, Cuatro de Pentáculos, Cinco de Pentáculos',
    href: '/es/palos-del-tarot/pentaculos',
  },
  {
    slug: 'espadas',
    name: 'Espadas',
    element: 'Aire',
    symbol: '🜁',
    theme: 'Pensamiento, decir la verdad, comunicación y decisiones.',
    sample: 'As de Espadas, Dos de Espadas, Tres de Espadas, Cuatro de Espadas, Cinco de Espadas',
    href: '/es/palos-del-tarot/espadas',
  },
  {
    slug: 'bastos',
    name: 'Bastos',
    element: 'Fuego',
    symbol: '🜂',
    theme: 'Pasión, voluntad, acción e impulso creativo.',
    sample: 'As de Bastos, Dos de Bastos, Tres de Bastos, Cuatro de Bastos, Cinco de Bastos',
    href: '/es/palos-del-tarot/bastos',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuántos palos tiene el tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una baraja de tarot estándar tiene cuatro palos: Copas, Pentáculos, Espadas y Bastos. Juntos, estos cuatro palos forman las 56 cartas de los Arcanos Menores. Cada palo contiene 14 cartas — un As, las cartas numeradas del dos al diez, y cuatro cartas de la corte (Sota, Caballero, Reina y Rey). Las 22 cartas restantes de la baraja son los Arcanos Mayores, que están fuera del sistema de palos y se ocupan de temas arquetípicos de la vida en lugar de los ámbitos cotidianos que representan los palos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué palo del tarot representa el amor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El palo de Copas es el palo del amor y la vida emocional. Las Copas están regidas por el elemento Agua y se ocupan de los sentimientos, las relaciones, la intuición, los lazos familiares y el mundo interior del corazón. Cuando una lectura está llena de Copas, la respuesta es casi siempre de naturaleza emocional. Dicho esto, las lecturas románticas pueden incluir cartas de cualquier palo — los Bastos suelen aparecer para la pasión y la química, los Pentáculos para la asociación comprometida a largo plazo, y las Espadas para las conversaciones sinceras que toda relación requiere.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre los Arcanos Mayores y los Arcanos Menores?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los Arcanos Mayores son las 22 cartas de triunfo del tarot — desde El Loco hasta El Mundo — que describen las grandes fuerzas arquetípicas y lecciones de vida (amor, muerte, justicia, transformación). Los Arcanos Menores son las 56 cartas organizadas en los cuatro palos, que describen la textura del día a día: los sentimientos, los asuntos de dinero, las conversaciones y las ambiciones a través de los cuales se despliega la historia más grande. Los Mayores marcan los puntos de inflexión; los Menores describen el camino entre ellos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué elemento corresponde a cada palo del tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cada uno de los cuatro palos está regido por uno de los cuatro elementos clásicos. Las Copas corresponden al Agua, el elemento de la emoción y la intuición. Los Pentáculos corresponden a la Tierra, el elemento del mundo material y físico. Las Espadas corresponden al Aire, el elemento del pensamiento, el lenguaje y el intelecto. Los Bastos corresponden al Fuego, el elemento de la pasión, la voluntad y el espíritu creativo. Reconocer el equilibrio elemental de una tirada es una de las formas más rápidas de captar su carácter general.',
      },
    },
  ],
}

export default function PalosDelTarotHubPage() {
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
        <span style={{ color: 'var(--gold)' }}>Palos del Tarot</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8, letterSpacing: '.4em' }}>🜄 🜃 🜁 🜂</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Los Cuatro Palos del Tarot
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 580, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Copas, Pentáculos, Espadas y Bastos — los cuatro palos de los Arcanos Menores. Cada uno está regido por un elemento clásico y preside un ámbito distinto de la vida humana.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['56 Cartas', 'Cuatro Elementos', 'Arcanos Menores'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* What are the tarot suits */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          ¿Qué son los palos del tarot?
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Los cuatro palos del tarot forman juntos los Arcanos Menores — 56 de las 78 cartas de una baraja estándar. Cada palo contiene 14 cartas: un As, nueve cartas numeradas del dos al diez, y cuatro cartas de la corte (Sota, Caballero, Reina y Rey). Donde las 22 cartas de los Arcanos Mayores marcan los grandes puntos de inflexión arquetípicos de una vida, los palos de los Arcanos Menores describen la textura del vivir cotidiano — los sentimientos, las conversaciones, las ambiciones y las condiciones materiales a través de las cuales se despliega la historia más grande.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Cada palo está regido por uno de los cuatro elementos clásicos. Las Copas pertenecen al Agua y rigen la emoción, el amor y la intuición. Los Pentáculos pertenecen a la Tierra y rigen el cuerpo, el dinero y el mundo material. Las Espadas pertenecen al Aire y rigen el pensamiento, la comunicación y la verdad. Los Bastos pertenecen al Fuego y rigen la pasión, la voluntad y la acción. Leer el equilibrio elemental de una tirada — qué palos dominan y cuáles están ausentes — es una de las formas más rápidas de reconocer su carácter general.
          </p>
          <p>
            Los palos son antiguos. Su linaje se remonta a las cartas de juego italianas y francesas del final del periodo medieval — los actuales corazones, diamantes, picas y tréboles son descendientes directos de copas, monedas, espadas y bastos. Lo que hizo el tarot fue preservar la estructura de cuatro palos y añadir encima los Arcanos Mayores, creando una baraja que podía describir tanto lo cotidiano como lo arquetípico en una sola lectura.
          </p>
        </div>
      </div>

      {/* Suit cards grid */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '.06em' }}>
          Los Cuatro Palos
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '1rem' }}>
          {SUITS.map(s => (
            <Link key={s.slug} href={s.href} style={{ display: 'block', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.25rem 1.4rem', textDecoration: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '.6rem' }}>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em' }}>{s.name}</div>
                <div style={{ fontSize: '1.25rem', color: 'var(--gold)', opacity: .75 }}>{s.symbol}</div>
              </div>
              <div style={{ display: 'flex', gap: '.4rem', flexWrap: 'wrap', marginBottom: '.7rem' }}>
                <span style={{ padding: '.15rem .55rem', borderRadius: 20, fontSize: '.62rem', background: 'rgba(201,168,76,.1)', color: 'var(--gold)', fontFamily: "'Cinzel',serif", letterSpacing: '.06em' }}>Elemento {s.element}</span>
                <span style={{ padding: '.15rem .55rem', borderRadius: 20, fontSize: '.62rem', background: 'rgba(255,255,255,.04)', color: 'var(--muted)', fontFamily: "'Cinzel',serif", letterSpacing: '.06em' }}>14 cartas</span>
              </div>
              <p style={{ color: 'var(--text)', fontSize: '.85rem', lineHeight: 1.6, margin: '0 0 .7rem 0' }}>{s.theme}</p>
              <p style={{ color: 'var(--muted)', fontSize: '.74rem', lineHeight: 1.55, margin: 0, fontStyle: 'italic' }}>
                Incluye: {s.sample}…
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Reading a suit-heavy spread */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Cómo leer una tirada con predominio de un palo
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Cuando aparecen varias cartas del mismo palo en una sola lectura, el palo mismo se convierte en mensaje. Una tirada cargada de Copas te está diciendo que la situación es fundamentalmente sobre sentimientos — aunque hayas preguntado por un trabajo o una mudanza, las cartas insisten en que la dimensión emocional es el corazón del asunto. Una tirada con muchos Pentáculos está anclada en lo práctico y material; una llena de Espadas es mental, verbal, o necesita una toma de decisiones honesta; una llena de Bastos es una cuestión de energía, impulso y de aquello a lo que estás dispuesto a comprometerte.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Lo contrario también es cierto. La ausencia de un palo es significativa. Una lectura de relación sin ninguna Copa sugiere que la conexión se ha vuelto transaccional o intelectual y le falta su núcleo emocional. Una lectura de carrera sin Pentáculos sugiere que se está evitando la realidad práctica. Siempre toma nota tanto de lo que domina como de lo que falta.
          </p>
          <p>
            Las cartas de la corte de un palo añaden matiz: a menudo representan a una persona real que lleva la energía de ese palo en tu vida, o una parte de ti que asume ese rol. Los Ases son aperturas — un nuevo comienzo en el ámbito de ese palo. Los Dieces son culminaciones. Leerlas juntas te dice no solo el territorio de la pregunta sino también la fase de su ciclo.
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
            <div key={item.name} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Explora la baraja más a fondo</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Recorre cada carta del tarot o haz una lectura gratis ahora mismo.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/lectura-gratis" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Lectura Gratis
          </Link>
          <Link href="/es/cartas" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Las 78 Cartas
          </Link>
          <Link href="/es/carta-del-dia" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Carta del Día
          </Link>
        </div>
      </div>
    </div>
  )
}
