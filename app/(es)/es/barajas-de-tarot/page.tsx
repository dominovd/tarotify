import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Barajas de Tarot — Guía de las Barajas Más Populares | TarotAxis',
  description: 'Guía de las barajas de tarot más populares para principiantes y coleccionistas — Rider-Waite, Marsella, Thoth, Wild Unknown y más. Cómo elegir tu primera baraja.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/barajas-de-tarot',
    languages: {
      'en': 'https://tarotaxis.com/tarot-decks',
      'es': 'https://tarotaxis.com/es/barajas-de-tarot',
      'x-default': 'https://tarotaxis.com/tarot-decks',
    },
  },
  openGraph: {
    title: 'Barajas de Tarot — Guía de las Barajas Más Populares',
    description: 'Guía de las barajas de tarot más populares para principiantes y coleccionistas — Rider-Waite, Marsella, Thoth, Wild Unknown y más.',
    url: 'https://tarotaxis.com/es/barajas-de-tarot',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'article',
  },
}

const DECKS = [
  {
    name: 'Rider-Waite-Smith',
    meta: '1909 — Inglaterra',
    paragraphs: [
      "La baraja fundacional de la que desciende la mayor parte del tarot moderno. Encargada por el ocultista A. E. Waite e ilustrada por Pamela Colman Smith, su contribución silenciosamente revolucionaria fue hacer que los Arcanos Menores fueran plenamente escénicos — cada carta numerada representa una pequeña escena narrativa en lugar de una disposición decorativa de los símbolos del palo.",
      "Las figuras claras y simbólicas de Smith y su paleta de colores primarios han moldeado el lenguaje visual de casi todas las barajas occidentales publicadas desde entonces. Si alguna vez has visto una carta de tarot en una película, en la portada de un libro o en un tatuaje, casi con toda certeza procede de su mano.",
      "La mayoría de las guías modernas de significado de cartas — incluidas las de este sitio — están escritas pensando en la iconografía Rider-Waite-Smith. Por eso sigue siendo el punto de partida más práctico para quien recién empieza: cada recurso de aprendizaje que encuentres se alineará con la baraja que tienes delante.",
    ],
  },
  {
    name: 'Tarot de Marsella',
    meta: 'Siglos XVI–XVII — Francia e Italia',
    paragraphs: [
      "La tradición europea más antigua, que precede a la Rider-Waite por unos tres siglos. La Marsella no es una baraja única, sino una familia de barajas relacionadas impresas en Francia y el norte de Italia desde el siglo XVII, con una iconografía ampliamente coherente: figuras audaces grabadas en madera, color plano y cartas numeradas geométricas y decorativas en lugar de escenas ilustradas.",
      "Como los Arcanos Menores solo muestran disposiciones de los símbolos del palo — seis copas, ocho monedas — la Marsella se lee de forma muy diferente. El significado se extrae de la numerología, el palo, la posición y la interacción de las figuras a lo largo de la tirada, no del contenido narrativo de una escena.",
      "Recompensa el estudio y es la favorita de lectores serios, eruditos del tarot francés y de cualquiera que quiera practicar el método europeo antiguo. No es la primera baraja más fácil, pero tiene una profundidad y una austeridad a las que muchos lectores vuelven tras unos años con barajas escénicas.",
    ],
  },
  {
    name: 'Tarot Thoth',
    meta: 'Pintada 1938–43, publicada 1969 — Inglaterra',
    paragraphs: [
      "Producto de una colaboración de cinco años entre Aleister Crowley y la artista Lady Frieda Harris. Las pinturas de Harris son densas, geométricas y visionarias; el libro acompañante de Crowley, El Libro de Thoth, sitúa firmemente la baraja dentro de su sistema de magia ceremonial y la Cábala hermética.",
      "La baraja Thoth renombra varios Arcanos Mayores (la Fuerza se convierte en la Lujuria, el Juicio en el Eón) y reordena algunas atribuciones. Su simbolismo es complejo y exigente — casi cada elemento de una carta cumple una función referencial.",
      "No es una baraja para principiantes. Quienes la adoptan suelen llegar a la Thoth tras tener una fluidez de trabajo en el tarot y un interés por la tradición esotérica. Para quienes lo logran, es una de las barajas más gratificantes jamás creadas.",
    ],
  },
  {
    name: 'The Wild Unknown',
    meta: '2012 — Estados Unidos',
    paragraphs: [
      "La reinterpretación del tarot basada en la naturaleza de Kim Krans. La baraja despoja el denso vocabulario simbólico de las tradiciones más antiguas en favor de una ilustración minimalista en tinta sobre fondo blanco, donde los animales ocupan con frecuencia el lugar de las figuras humanas en los Mayores y las cartas de la corte.",
      "Más que ninguna otra, The Wild Unknown abrió el tarot a una nueva generación de lectores en la década de 2010. Su contención visual invita a la lectura intuitiva — respondes primero a la imagen y recurres después al significado codificado.",
      "Muchos lectores la compran como su segunda baraja tras la Rider-Waite, descubriendo que afloja su interpretación y fomenta una práctica más personal, guiada por la imagen.",
    ],
  },
  {
    name: 'Modern Witch Tarot',
    meta: '2019 — Estados Unidos',
    paragraphs: [
      "La reinterpretación contemporánea y orientada a la moda de la estructura Rider-Waite-Smith por Lisa Sterle. Los Arcanos Mayores y las cartas de la corte están poblados casi enteramente por mujeres modernas, dibujadas en un estilo ilustrativo limpio con tonos de piel, tipos corporales y estéticas diversas.",
      "Estructuralmente la baraja sigue de cerca la Rider-Waite, así que el cuerpo existente de significados de cartas sigue aplicándose — simplemente lees esos significados a través de la iconografía de Sterle en vez de la de Smith.",
      "Es una de las barajas iniciáticas más populares para lectores que encuentran la iconografía europea de principios del siglo XX de la Rider-Waite original distante o poco identificable. Las cartas se sienten propias del presente.",
    ],
  },
  {
    name: 'Morgan-Greer Tarot',
    meta: '1979 — Estados Unidos',
    paragraphs: [
      "Una reinterpretación de la Rider-Waite-Smith con encuadre cerrado y sin bordes, obra de los artistas Bill Greer y Lloyd Morgan a partir del simbolismo desarrollado por Waite. Las composiciones se acercan a las figuras, eliminando el espacio de fondo y empujando la imagen hasta el borde de la carta.",
      "La paleta de colores es saturada y cálida — naranjas profundos, rojos y tonos terrosos — lo que confiere a la baraja una sensación íntima, casi cinematográfica. Los lectores suelen describirla como más emocional y directa que la Rider-Waite original.",
      "Una buena elección para quien aprecia el sistema Rider-Waite pero busca algo visualmente más cálido y más inmediato.",
    ],
  },
  {
    name: 'Ethereal Visions',
    meta: '2018 — Estados Unidos',
    paragraphs: [
      "La interpretación art nouveau del tarot por Matt Hughes, inspirada en la tradición decorativa de Alphonse Mucha. Las cartas presentan líneas fluidas, bordes ornamentados y detalles en lámina de oro que captan la luz al desplegarlas.",
      "La baraja sigue la estructura Rider-Waite-Smith, por lo que es plenamente compatible con el material de aprendizaje estándar. Su atractivo es principalmente estético — es una de las barajas de gran tirada visualmente más lujosas disponibles.",
      "Popular entre coleccionistas y entre lectores que quieren una baraja hermosa sobre la mesa sin alejarse del territorio simbólico familiar.",
    ],
  },
  {
    name: 'Shadowscapes Tarot',
    meta: '2010 — Estados Unidos',
    paragraphs: [
      "La baraja de fantasía en acuarela de Stephanie Pui-Mun Law. La iconografía es onírica y fluida, poblada por hadas, dragones y espíritus elementales situados en paisajes que se mueven entre el agua, el aire y el bosque.",
      "En tono, Shadowscapes es suave y emocional — favorece la atmósfera y el ambiente sobre la claridad simbólica dura. Los significados de las cartas siguen ampliamente la tradición Rider-Waite, pero suavizados por la iconografía romántica.",
      "Encaja con lectores que responden al arte de fantasía y prefieren una baraja que se sienta poética más que declarativa. Menos eficaz para preguntas prácticas y directas; muy eficaz para la reflexión emocional.",
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
      name: '¿Cuál es la mejor baraja de tarot para principiantes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para la mayoría de los principiantes, la Rider-Waite-Smith es la elección práctica, porque casi todos los libros, cursos y guías en línea de tarot — incluidos los significados de cartas de este sitio — están escritos pensando en su iconografía. Si el aspecto europeo de principios del siglo XX te resulta distante, la Modern Witch Tarot o The Wild Unknown son alternativas populares que mantienen la misma estructura subyacente presentándola a través de arte contemporáneo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Hay que recibir como regalo la primera baraja de tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. La idea de que debas recibir tu primera baraja como regalo es un trozo romántico de folclore, no una regla de la tradición. Muchos de los lectores más experimentados del mundo compraron ellos mismos su primera baraja. Elegir tu propia baraja de forma consciente — tomándote el tiempo para encontrar una cuya iconografía realmente te hable — es una manera perfectamente válida de iniciar una práctica.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuántas cartas tiene una baraja de tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una baraja de tarot estándar tiene 78 cartas: 22 Arcanos Mayores que representan figuras arquetípicas y temas de vida, y 56 Arcanos Menores repartidos en cuatro palos (Copas, Pentáculos, Espadas y Bastos), cada palo va del As al Diez más cuatro cartas de la corte. Algunas barajas independientes y de tipo oráculo se desvían de esto, pero cualquier cosa descrita como baraja de tarot casi siempre sigue la estructura de 78 cartas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Es mejor una baraja tradicional o una moderna?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depende de cómo quieras aprender. Una baraja tradicional dentro del linaje Rider-Waite-Smith te permitirá apoyarte en un enorme corpus de libros, guías y referencias de significados — útil si quieres estudiar tarot como sistema. Una baraja moderna y artística te invita a desarrollar tu propio lenguaje intuitivo con las cartas, lo que algunos lectores encuentran más gratificante y otros más impreciso. Muchos lectores acaban teniendo una de cada para diferentes tipos de lectura.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Todas las barajas de tarot tienen la misma estructura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La mayoría de las barajas de tarot modernas occidentales siguen la plantilla Rider-Waite-Smith — 78 cartas dispuestas como 22 Arcanos Mayores y 56 Arcanos Menores, con escenas ilustradas en todas las cartas. Las barajas europeas más antiguas como el Tarot de Marsella conservan la estructura de 78 cartas pero muestran solo disposiciones decorativas de los símbolos del palo en los Arcanos Menores en lugar de escenas. Un puñado de barajas independientes experimenta con la estructura misma, pero el marco de 78 cartas es el estándar dominante.',
      },
    },
  ],
}

export default function BarajasDeTarotPage() {
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
        <span style={{ color: 'var(--gold)' }}>Barajas de Tarot</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>◈</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Barajas de Tarot — Guía para Elegir tus Cartas
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 600, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          La baraja que tienes en las manos da forma a la lectura tanto como las cartas que caen. El arte, la paleta y el estilo simbólico cambian la forma en que una carta aterriza — por eso elegir una baraja es una decisión más personal de lo que la mayoría de los principiantes imagina.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['Apta para principiantes', '78 cartas cada una', 'Guía de compra'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Por qué importa la baraja */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Por qué importa la baraja
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            El tarot se lee tanto con la vista como con la mente. Cuando das vuelta una carta, la primera respuesta es visual — un color, una postura, la expresión de una figura — y esa respuesta tiñe el significado al que llegas. Dos barajas que muestren el mismo Diez de Espadas pueden producir lecturas muy distintas, no porque la carta haya cambiado sino porque ha cambiado la imagen a la que estás respondiendo. La baraja no es un envase neutral; es la mitad de la conversación.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Las barajas se sitúan en un espectro aproximado que va de lo tradicional a lo moderno. Las barajas tradicionales — Rider-Waite-Smith y sus muchas descendientes, el Tarot de Marsella — cargan con el simbolismo codificado sobre el que se construye el grueso de la literatura tarotística. Las barajas modernas favorecen la interpretación artística, las figuras contemporáneas y la accesibilidad intuitiva, y te piden que aportes más lenguaje propio a las cartas. Ningún enfoque es más válido que el otro.
          </p>
          <p style={{ margin: 0 }}>
            No existe una baraja "mejor", solo la baraja adecuada para tu ojo y para tu práctica. La señal más clara de que has encontrado la tuya es simple: lo sabrás al verla. Una baraja que verdaderamente te pertenezca tirará ligeramente de ti cuando contemples sus imágenes — no porque sea la más bella del comercio, sino porque algo en ella te reconoce a ti también.
          </p>
        </div>
      </div>

      {/* Recorrido por las barajas principales */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Las barajas principales — Un recorrido
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Ocho de las barajas de tarot más leídas, enseñadas y coleccionadas en circulación, con notas sobre qué hace bien cada una y a quién suele convenir.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: '1rem' }}>
          {DECKS.map(deck => (
            <div key={deck.name} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem' }}>
              <h3 style={{ fontFamily: "'Cinzel',serif", fontSize: '1rem', color: 'var(--gold)', marginBottom: '.3rem', letterSpacing: '.03em' }}>{deck.name}</h3>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.1em', color: 'var(--gold)', opacity: .6, textTransform: 'uppercase', marginBottom: '.85rem' }}>
                {deck.meta}
              </div>
              {deck.paragraphs.map((para, i) => (
                <p key={i} style={{ color: 'var(--text)', fontSize: '.87rem', lineHeight: 1.7, margin: 0, marginBottom: i === deck.paragraphs.length - 1 ? 0 : '.75rem' }}>
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Cómo elegir tu primera baraja */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Cómo elegir tu primera baraja
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Antes de comprar, navega imágenes en línea. Casi toda baraja en circulación tiene una página del editor o una ficha de Amazon con fotografías de los Arcanos Mayores y un puñado de Arcanos Menores. Recórrelas con calma y observa tu reacción. La baraja que quieres es aquella que te hace querer meter la mano en la pantalla.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Confía en tu ojo por encima de las recomendaciones de otras personas. Una amiga que lee bellamente con The Wild Unknown no es razón para comprarla. Tu relación con una baraja es propia, y la baraja que otra persona ama puede dejarte fría.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Ignora la regla de que debas recibir tu primera baraja como regalo. Es un fragmento de folclore que ha adquirido el peso de la tradición sin haber sido nunca tal. Comprarte tu propia baraja — escogiéndola con cuidado, pagándola de forma consciente — es una manera estupenda de empezar.
          </p>
          <p style={{ margin: 0 }}>
            Por último, considera cómo trata la baraja las inversiones. Algunas están diseñadas pensando en los significados invertidos y tienen una iconografía que aguanta bien al girarse; otras tienen un arte fuertemente direccional que queda extraño al revés. Si piensas leer invertidas, vale la pena comprobarlo antes de comprar.
          </p>
        </div>
      </div>

      {/* Herramientas para cuidar tu baraja */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Cómo cuidar tu baraja
        </h2>
        <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem' }}>
          <p style={{ color: 'var(--text)', fontSize: '.92rem', lineHeight: 1.8, margin: 0 }}>
            Una vez que tengas tu baraja, aprende a{' '}
            <Link href="/es/como-barajar-tarot" style={{ color: 'var(--gold)' }}>barajarla</Link>,{' '}
            <Link href="/es/como-limpiar-cartas-de-tarot" style={{ color: 'var(--gold)' }}>limpiarla</Link>{' '}
            y empezar a{' '}
            <Link href="/es/como-leer-tarot" style={{ color: 'var(--gold)' }}>leer con ella</Link>. Estos tres hábitos — barajar con honestidad, limpiar entre sesiones y leer con regularidad — harán más por tu práctica que cualquier elección concreta de baraja.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Preguntas frecuentes
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>¿Encontraste tu baraja? Empieza a leer.</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Explora el conjunto completo de los 78 significados de cartas, aprende lo básico de la lectura o saca una tirada gratuita para empezar.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/lectura-gratis" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Lectura Gratis
          </Link>
          <Link href="/es/cartas" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Significados de cartas
          </Link>
          <Link href="/es/como-leer-tarot" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Cómo leer el tarot
          </Link>
        </div>
      </div>
    </div>
  )
}
