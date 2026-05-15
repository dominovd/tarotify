import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cartas de oráculo vs cartas de tarot — ¿Cuál es la diferencia? | TarotAxis',
  description: 'Una comparación clara entre cartas de oráculo y cartas de tarot. Estructura, historia, cómo se lee cada una, cuándo usar cuál y si conviene tener ambas.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/oraculo-vs-tarot',
    languages: {
      'en': 'https://tarotaxis.com/oracle-vs-tarot',
      'es': 'https://tarotaxis.com/es/oraculo-vs-tarot',
      'x-default': 'https://tarotaxis.com/oracle-vs-tarot',
    },
  },
  openGraph: {
    title: 'Cartas de oráculo vs cartas de tarot — ¿Cuál es la diferencia?',
    description: 'Una comparación clara entre cartas de oráculo y cartas de tarot. Estructura, historia, cómo se lee cada una y cuándo usar cuál.',
    url: 'https://tarotaxis.com/es/oraculo-vs-tarot',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cartas de oráculo vs cartas de tarot — ¿Cuál es la diferencia? | TarotAxis',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuál es la principal diferencia entre cartas de oráculo y tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tarot es un sistema fijo de 78 cartas — 22 Arcanos Mayores más 56 Arcanos Menores divididos en cuatro palos — con un lenguaje visual y simbólico compartido que se traslada entre barajas. Las cartas de oráculo no tienen una estructura fija: el número de cartas, los temas y los significados los decide quien crea la baraja. Cada baraja de oráculo es esencialmente su propio sistema en miniatura, y por eso las diferencias van más allá de lo estético.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Son las cartas de oráculo más fáciles que el tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A menudo sí, al menos al principio. La mayoría de cartas de oráculo llevan palabras clave o frases directas impresas, y la guía te dice qué significa cada carta. El tarot exige aprender 78 cartas y cómo se combinan. La contraparte es que las habilidades del oráculo no se transfieren entre barajas — aprender un oráculo te enseña ese oráculo, mientras que aprender tarot te da un lenguaje que puedes usar con cualquier baraja de tarot durante toda tu vida.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se pueden mezclar oráculo y tarot en una lectura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí — muchas lectoras lo hacen habitualmente. Un patrón común es tirar una lectura de tarot para el análisis estructural detallado, y al final sacar una sola carta de oráculo como mensaje de cierre o tema global. Las dos herramientas se complementan en vez de competir: el tarot aporta la arquitectura, el oráculo añade una nota final clara. No hay ninguna regla contra combinarlas, y ninguna tradición que lo prohíba.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es más preciso, tarot u oráculo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ninguno es más preciso — son herramientas distintas diseñadas para usos distintos. El tarot está pensado para el matiz, la combinación y el análisis en capas de una situación. El oráculo está pensado para mensajes directos y accesibles. Preguntar cuál es más preciso es un poco como preguntar si un párrafo es más preciso que una sola frase: la respuesta depende por completo de qué intentas expresar. Ambos son válidos en manos de una lectora reflexiva.',
      },
    },
  ],
}

const comparisons = [
  {
    point: 'Número de cartas',
    tarot: '78 cartas, siempre. El número forma parte de la definición.',
    oracle: 'Desde 30 hasta más de 100 cartas. Varía completamente según la baraja.',
  },
  {
    point: 'Estructura',
    tarot: 'Fija: Arcanos Mayores (22) + cuatro palos de Arcanos Menores, cada uno con cartas de la corte.',
    oracle: 'Sin estructura fija. Cada baraja se organiza como decidió su creadora.',
  },
  {
    point: 'Imágenes',
    tarot: 'Un sistema simbólico tradicional compartido entre barajas — la mayoría de barajas modernas usan un vocabulario visual común.',
    oracle: 'Únicas en cada baraja. Las imágenes las define el artista y la temática.',
  },
  {
    point: 'Curva de aprendizaje',
    tarot: 'Más empinada al principio, pero el conocimiento se transfiere a cualquier baraja de tarot.',
    oracle: 'Más fácil para empezar, pero las habilidades raramente se trasladan entre distintas barajas de oráculo.',
  },
  {
    point: 'Estilo de lectura',
    tarot: 'Se lee en combinaciones — posiciones, mezcla de palos, interacciones entre cartas, a veces inversiones.',
    oracle: 'Suele sacarse una o dos cartas como mensaje directo, con menos interpretación.',
  },
  {
    point: 'Inversiones',
    tarot: 'Tradicionalmente parte de la práctica, aunque algunas lectoras eligen no usarlas.',
    oracle: 'Rara vez se utilizan. La mayoría de barajas de oráculo se leen sólo del derecho.',
  },
  {
    point: 'Material de referencia',
    tarot: 'Inmenso — miles de libros, cursos, sitios y vídeos cubriendo cada carta.',
    oracle: 'Cada baraja trae su propia guía; casi no existe material de referencia entre distintas barajas.',
  },
]

export default function OraculoVsTarotPage() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        <Link href="/es" style={{ color: 'var(--muted)' }}>Inicio</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Oráculo vs Tarot</span>
      </nav>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.2em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Comparación de cartas
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '1rem', lineHeight: 1.25 }}>
          Cartas de oráculo vs cartas de tarot
        </h1>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.95rem' }}>
          Quienes se inician suelen escuchar &ldquo;oráculo&rdquo; y &ldquo;tarot&rdquo; usados de forma intercambiable, como si fueran dos palabras para lo mismo. No lo son. Ambos son herramientas de reflexión y adivinación, pero están construidos sobre principios completamente distintos — y las diferencias importan en cuanto empiezas a practicar. Esta página explica dónde se solapan, dónde divergen y cómo decidir cuál pertenece a tus manos.
        </p>
      </div>

      {/* The Short Answer */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          La respuesta breve
        </h2>
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            El tarot es un sistema estandarizado de 78 cartas con estructura fija — 22 Arcanos Mayores y 56 Arcanos Menores divididos en cuatro palos, cada uno con cartas de la corte. Las barajas de oráculo no tienen estructura fija: cada baraja tiene su propio número de cartas, sus propios temas y sus propios significados, todo determinado por su creadora. Dicho de otra forma: el tarot es un <em>lenguaje compartido</em> con gramática y vocabulario que funcionan entre barajas; el oráculo es un <em>vocabulario personal</em> único de la baraja que tienes en la mano.
          </p>
        </div>
      </section>

      {/* Side-by-Side Comparison */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
          Comparación lado a lado
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {comparisons.map((c, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.85rem' }}>
                {c.point}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.18em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '.4rem', opacity: .8 }}>Tarot</div>
                  <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.75, margin: 0 }}>{c.tarot}</p>
                </div>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.18em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '.4rem' }}>Oráculo</div>
                  <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.75, margin: 0 }}>{c.oracle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* When to Use Each */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Cuándo usar cada uno
        </h2>
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', marginBottom: '1rem' }}>
            <strong style={{ color: 'var(--gold)', fontWeight: 'normal', fontFamily: "'Cinzel',serif" }}>El tarot</strong> es lo mejor cuando quieres mapear una situación con detalle — ver varios ángulos a la vez, examinar los patrones internos en juego y trabajar con un sistema que recompensa el estudio sostenido. Si tu pregunta tiene capas, contradicciones o partes en movimiento, el tarot está construido para sostenerlas todas en una sola lectura. Es también la elección adecuada si quieres una práctica a largo plazo que puedas profundizar durante años en lugar de meses.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            <strong style={{ color: 'var(--gold)', fontWeight: 'normal', fontFamily: "'Cinzel',serif" }}>El oráculo</strong> es lo mejor cuando quieres un mensaje directo e inmediato con menos que interpretar — una respuesta de una carta a una pregunta de una línea. Es también la elección natural cuando el tema específico de una baraja encaja genuinamente con aquello en lo que estás trabajando: un oráculo de ángeles para guía espiritual, una baraja lunar para trabajo cíclico, una baraja de sabiduría de árboles para enraizamiento. La temática actúa como una lente que enfoca.
          </p>
        </div>
      </section>

      {/* Can You Use Both Together? */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          ¿Se pueden usar juntos?
        </h2>
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            Muchas lectoras hacen exactamente eso. Un patrón común es tirar una lectura de tarot para la mirada estructural — pasado, presente, influencias, qué está bloqueado, qué quiere emerger — y al final sacar una sola carta de oráculo como nota de cierre: un &ldquo;qué llevarse&rdquo; o &ldquo;cuál es la energía por debajo de todo&rdquo;. El tarot hace el mapeo detallado; el oráculo entrega el mensaje final, dicho con sencillez. Las dos herramientas se complementan en lugar de competir, y no hay ninguna tradición ni regla que diga que tengas que elegir entre ellas.
          </p>
        </div>
      </section>

      {/* A Brief History */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Una breve historia
        </h2>
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', marginBottom: '1rem' }}>
            El tarot se originó en la Italia del siglo XV como un juego de cartas llamado <em>tarocchi</em>, jugado con una baraja cuyas cartas de triunfo acabarían convirtiéndose en los Arcanos Mayores. Fue reutilizado para la adivinación en la Francia del siglo XVIII, con figuras como Jean-Baptiste Alliette (Etteilla) escribiendo las primeras guías sistemáticas. La baraja Rider-Waite-Smith, publicada en 1909 con ilustraciones de Pamela Colman Smith, estandarizó la lectura moderna del tarot y sigue siendo la referencia visual para la mayoría de barajas que se producen hoy.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            Las cartas de oráculo surgieron más tarde, en los siglos XIX y XX, como un formato adivinatorio más libre y sin las restricciones de la estructura del tarot. La baraja Lenormand (principios de 1800) es un ejemplo temprano importante, con su propio sistema de 36 cartas. La publicación moderna de oráculos se expandió enormemente en los años 90 y 2000, con creadoras como Doreen Virtue, Colette Baron-Reid y muchas otras lanzando barajas temáticas — ángeles, animales, diosas, plantas, arquetipos — cada una funcionando como su propio sistema autocontenido.
          </p>
        </div>
      </section>

      {/* Which Should You Buy First? */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          ¿Cuál deberías comprar primero?
        </h2>
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            Si quieres desarrollar una práctica adivinatoria a largo plazo — una que gane profundidad a lo largo de los años — empieza con el tarot. La estructura recompensa la inversión, y las habilidades que construyes con una baraja se transfieren a cualquier otra baraja de tarot que tengas en el futuro. Si quieres una introducción más amable, o resuenas específicamente con la temática de una baraja de oráculo concreta, el oráculo es un punto de partida perfectamente válido. Aquí no hay jerarquía purista: una lectora reflexiva con una baraja de oráculo hace un trabajo más significativo que una distraída con una Rider-Waite. La baraja inicial correcta es la que realmente vas a coger.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <Link href="/es/cartas" style={{ padding: '.8rem 1.6rem', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.35)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Explorar las cartas →
        </Link>
        <Link href="/es/tarot-para-principiantes" style={{ padding: '.8rem 1.6rem', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Tarot para principiantes →
        </Link>
        <Link href="/es/lectura-gratis" style={{ padding: '.8rem 1.6rem', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Prueba una lectura gratis →
        </Link>
      </div>

      {/* FAQ */}
      <section>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.5rem' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
