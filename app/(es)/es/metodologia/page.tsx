import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cómo se construyen las interpretaciones de TarotAxis — Metodología | TarotAxis',
  description: 'El marco interpretativo detrás de cada lectura en TarotAxis: base Rider-Waite-Smith, dignidades elementales, numerología, capa arquetípica junguiana y asistencia de IA transparente.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/metodologia',
    languages: {
      'en': 'https://tarotaxis.com/methodology',
      'es': 'https://tarotaxis.com/es/metodologia',
      'x-default': 'https://tarotaxis.com/methodology',
    },
  },
  openGraph: {
    title: 'Cómo se construyen las interpretaciones de TarotAxis',
    description: 'El marco detrás de cada lectura: Rider-Waite-Smith, dignidades elementales, numerología, arquetipos junguianos y asistencia de IA transparente.',
    type: 'article',
  },
}

const SECTION_HEADER: React.CSSProperties = {
  fontFamily: "'Cinzel',serif",
  fontSize: '1.05rem',
  letterSpacing: '.06em',
  color: 'var(--gold)',
  marginTop: '2.5rem',
  marginBottom: '1rem',
}

const SECTION_SUB: React.CSSProperties = {
  fontFamily: "'Cinzel',serif",
  fontSize: '.85rem',
  letterSpacing: '.04em',
  color: 'var(--gold)',
  opacity: .85,
  marginTop: '1.5rem',
  marginBottom: '.6rem',
}

const PROSE: React.CSSProperties = {
  color: 'var(--text)',
  lineHeight: 1.78,
  fontSize: '.95rem',
  marginBottom: '1rem',
}

export default function MetodologiaPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Cómo se construyen las interpretaciones de TarotAxis',
    description: 'El marco interpretativo detrás de cada lectura en TarotAxis: base Rider-Waite-Smith, dignidades elementales, numerología, capa arquetípica junguiana y asistencia de IA transparente.',
    author: {
      '@type': 'Organization',
      name: 'TarotAxis Editorial',
      url: 'https://tarotaxis.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TarotAxis',
      url: 'https://tarotaxis.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tarotaxis.com/og?slug=the-fool',
      },
    },
    datePublished: '2026-05-18',
    dateModified: '2026-05-18',
    mainEntityOfPage: 'https://tarotaxis.com/es/metodologia',
    inLanguage: 'es',
    about: [
      { '@type': 'Thing', name: 'Tarot' },
      { '@type': 'Thing', name: 'Rider-Waite-Smith tarot deck' },
      { '@type': 'Thing', name: 'Elemental dignities' },
      { '@type': 'Thing', name: 'Tarot numerology' },
      { '@type': 'Thing', name: 'Jungian archetypes' },
    ],
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TarotAxis',
    url: 'https://tarotaxis.com',
    description: 'Lecturas de tarot gratuitas, los significados de las 78 cartas, tiradas y rituales lunares — construido sobre el marco Rider-Waite-Smith, refinado con asistencia de IA.',
    sameAs: [],
    knowsAbout: [
      'Tarot',
      'Rider-Waite-Smith tarot',
      'Elemental dignities',
      'Tarot numerology',
      'Major Arcana psychology',
      'Tarot spreads',
      'Tarot combinations',
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '¿Las lecturas de TarotAxis las escriben humanos o la IA?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ambas. El marco interpretativo — la lógica simbólica de cartas, palos, números, elementos y combinaciones — es trabajo humano, basado en la tradición Rider-Waite-Smith y en autores contemporáneos. La aplicación de ese marco a tiradas concretas y la redacción de texto largo se realizan con asistencia de IA y luego se revisan contra el marco. No pretendemos que la redacción sea exclusivamente humana, ni pretendemos que el marco sea derivado de la IA. Cada capa es honesta sobre lo que es.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué tradición de tarot sigue TarotAxis?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TarotAxis utiliza el marco Rider-Waite-Smith como su base interpretativa principal. Es la tradición moderna más ampliamente compartida, establecida por Arthur Edward Waite e ilustrada por Pamela Colman Smith en 1909, y constituye la base de la mayor parte de la literatura de tarot escrita en inglés durante el último siglo. Complementamos la iconografía RWS con las dignidades elementales del sistema de correspondencias de la Golden Dawn y con los principios de progresión numerológica comunes a las escuelas Marsella y Thoth.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Cómo trata TarotAxis las cartas invertidas?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Las cartas invertidas en TarotAxis se leen como la energía al derecho en su forma de sombra, bloqueada, interiorizada o en las primeras etapas de expresión — no como lo opuesto del significado al derecho. Esto sigue la línea principal de los autores contemporáneos (Mary K Greer, Rachel Pollack y otros) en lugar del antiguo enfoque de "invertida equivale a opuesta". Para cada carta publicamos una lectura invertida extensa que nombra modos concretos de fallo, bloqueos y caminos de integración, en lugar de simplemente negar el texto al derecho.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Las mismas cartas producen siempre la misma interpretación?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sí, por diseño. Cada salida interpretativa en TarotAxis es determinista — la misma tirada en la misma página produce el mismo texto. Es una decisión de transparencia. El marco es lo bastante consistente como para que dos lectores aplicándolo con cuidado lleguen a interpretaciones similares, y la redacción del sitio refleja esa consistencia. Donde el marco admite genuinamente varias lecturas — por ejemplo La Muerte + La Torre en un contexto de recuperación frente a un contexto de crisis nueva — nombramos la ambigüedad explícitamente en lugar de elegir una sola lectura y fingir que es la única.',
        },
      },
      {
        '@type': 'Question',
        name: '¿Qué es lo que TarotAxis explícitamente no hace?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No predecimos la muerte, una enfermedad terminal ni ningún otro desenlace irreversible. No nombramos a terceras personas ni pretendemos leer para personas que no han consentido la lectura. No sustituimos la atención médica, jurídica ni psicológica, y cuando las lecturas tocan áreas que se cruzan con esas disciplinas, orientamos al consultante hacia los profesionales adecuados. No prometemos eventos futuros concretos — el tarot describe la estructura energética de un momento, no una línea de tiempo determinista.',
        },
      },
    ],
  }

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
        <Link href="/es" style={{ color: 'var(--muted)' }}>Inicio</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Metodología</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '1.6rem', color: 'var(--gold)', opacity: .55, marginBottom: '.75rem', letterSpacing: '.2em' }}>✦ ☽ ◈</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.4rem,4.4vw,2rem)', color: 'var(--gold)', marginBottom: '.75rem', letterSpacing: '.04em' }}>
          Cómo se construyen las interpretaciones de TarotAxis
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '.92rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
          El marco interpretativo, las fuentes y la postura editorial detrás de cada lectura del sitio.
        </p>
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '.5rem', flexWrap: 'wrap' }}>
          {['Rider-Waite-Smith', 'Dignidades elementales', 'Numerología', 'Capa junguiana', 'Asistencia de IA'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .8rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.18)', borderRadius: 20, fontSize: '.68rem', fontFamily: "'Cinzel',serif", letterSpacing: '.06em', color: 'var(--gold)' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Opening framing */}
      <div style={{ background: 'linear-gradient(135deg, rgba(201,168,76,.06), rgba(201,168,76,.01))', border: '1px solid rgba(201,168,76,.16)', borderRadius: 14, padding: '1.5rem 1.75rem', marginBottom: '2.5rem' }}>
        <p style={{ fontFamily: "'Cinzel',serif", color: 'var(--text)', fontSize: '1rem', lineHeight: 1.7, fontStyle: 'italic', margin: 0 }}>
          El tarot no es adivinación por inferencia desde una caja negra. Es un lenguaje simbólico estructurado, con reglas. Las páginas de este sitio se escriben desde esa postura — las cartas significan cosas concretas, las combinaciones siguen una lógica legible, y donde el marco admite genuinamente varias lecturas, lo decimos en voz alta.
        </p>
      </div>

      {/* Section 1 — Foundation */}
      <h2 style={SECTION_HEADER}>1. La base Rider-Waite-Smith</h2>
      <p style={PROSE}>
        Cada significado de carta en TarotAxis se apoya en el tarot <strong>Rider-Waite-Smith</strong>, publicado por primera vez en 1909 por William Rider &amp; Son. La iconografía de la baraja fue diseñada por Arthur Edward Waite, estudioso de la Hermetic Order of the Golden Dawn, e ilustrada por Pamela Colman Smith, una artista que trabajaba dentro de la tradición simbolista. Juntos produjeron la primera baraja ampliamente distribuida con los arcanos menores plenamente ilustrados — una innovación que transformó el tarot, de un sistema esotérico cifrado, en una práctica de lectura que cualquiera podía aprender a partir de las propias imágenes.
      </p>
      <p style={PROSE}>
        Elegimos esta tradición por tres razones. Primero, es la base moderna más compartida — casi todo libro de tarot escrito en inglés desde 1970 parte de RWS. Segundo, las propias imágenes son inusualmente ricas en lo narrativo; los dibujos codifican gran parte del significado, lo que permite que un lector atento y una lectura atenta converjan en buena medida. Tercero, RWS conserva y moderniza las correspondencias herméticas (elementales, planetarias, kabbalísticas) sin convertirlas en una barrera de entrada para quienes no tienen formación ocultista.
      </p>
      <p style={PROSE}>
        Cuando autores contemporáneos han refinado RWS — la lente arquetípica de Rachel Pollack, la taxonomía de inversiones de Mary K Greer, el sistema de tiempos de Benebell Wen, la lectura sensible al trauma de Lindsay Mack — incorporamos ese refinamiento cuando produce una interpretación más útil. No somos puristas del texto de 1909. Somos leales al marco, no al traje de época.
      </p>

      {/* Section 2 — Elemental dignities */}
      <h2 style={SECTION_HEADER}>2. Dignidades elementales</h2>
      <p style={PROSE}>
        Cada carta pertenece a uno de los cuatro elementos: <strong>Fuego</strong> (Bastos y los arcanos mayores alineados con el Sol), <strong>Agua</strong> (Copas y los arcanos mayores alineados con la Luna), <strong>Aire</strong> (Espadas y los arcanos mayores mentales) y <strong>Tierra</strong> (Pentáculos y los arcanos mayores encarnados). Cuando dos cartas aparecen juntas, la relación elemental modifica la lectura de un modo legible.
      </p>
      <ul style={{ ...PROSE, marginBottom: '1.5rem', paddingLeft: '1.25rem' }}>
        <li><strong>Fuego y Aire</strong> — amplificadores. La inspiración se encuentra con la acción, las ideas cobran impulso. Las lecturas tienden a acelerarse.</li>
        <li><strong>Tierra y Agua</strong> — nutricios. La estructura se encuentra con el sentimiento, las condiciones del crecimiento. Las lecturas tienden a profundizarse y a ralentizarse.</li>
        <li><strong>Fuego y Agua</strong> — tensión. La pasión se encuentra con el sentimiento — vapor. Sostiene la complejidad en vez de resolverla.</li>
        <li><strong>Aire y Tierra</strong> — aterrizadores. El pensamiento se encuentra con la materia. Las lecturas recompensan la planificación y la constancia.</li>
        <li><strong>Pares del mismo elemento</strong> — resonantes. Las energías se acumulan. La lectura afila aquello que la carta sola ya decía.</li>
      </ul>
      <p style={PROSE}>
        Este sistema se hereda de la Golden Dawn, donde se utilizaba para evaluar la fuerza y la calidad de las cartas en proximidad. En TarotAxis aparece en cada página de combinación dentro de la nota elemental, y orienta cómo describimos las interacciones entre cartas en las lecturas de tirada.
      </p>

      {/* Section 3 — Numerology */}
      <h2 style={SECTION_HEADER}>3. Numerología — la columna de los arcanos menores</h2>
      <p style={PROSE}>
        Las cuarenta cartas numéricas (del As al Diez en los cuatro palos) siguen una progresión numérica que se mantiene a lo largo de todos los palos. Leer la numerología junto al palo da a los arcanos menores su forma narrativa.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '.75rem', marginBottom: '1.5rem' }}>
        {[
          ['Ases', 'Potencial puro, apertura, energía de semilla. El primer movimiento del elemento del palo.'],
          ['Doses', 'Dualidad, elección, asociación. La primera relación.'],
          ['Treses', 'Expansión, expresión, primera manifestación. El tres crea el sistema.'],
          ['Cuatros', 'Estabilidad, estructura, pausa. La primera meseta.'],
          ['Cincos', 'Crisis, conflicto, disrupción del cuatro. El sistema puesto a prueba.'],
          ['Seises', 'Restauración, resolución, armonía tras la crisis.'],
          ['Sietes', 'Reflexión, complejidad, el ajuste de cuentas interior. Incertidumbre a medio camino.'],
          ['Ochos', 'Maestría, aplicación madura de la destreza del palo.'],
          ['Nueves', 'Culminación, el palo próximo a su completitud. A menudo en soledad.'],
          ['Dieces', 'Cierre pleno, umbral hacia el siguiente ciclo. Cumplimiento y peso a la vez.'],
        ].map(([num, body]) => (
          <div key={num} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 10, padding: '.85rem 1.05rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.78rem', color: 'var(--gold)', letterSpacing: '.06em', marginBottom: '.3rem' }}>{num}</div>
            <p style={{ color: 'var(--muted)', fontSize: '.82rem', lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: body }} />
          </div>
        ))}
      </div>
      <p style={PROSE}>
        Los rangos de la corte — Sota, Caballero, Reina, Rey — describen modos de relación con el palo: Sota (curiosidad, aprendizaje), Caballero (búsqueda activa), Reina (maestría desde dentro), Rey (maestría aplicada hacia fuera). En TarotAxis leemos las cartas de la corte tanto como personas literales en la vida del consultante como facetas del propio modo del consultante de relacionarse con el dominio del palo.
      </p>

      {/* Section 4 — Jungian / archetypal layer */}
      <h2 style={SECTION_HEADER}>4. La capa junguiana — los arcanos mayores como individuación</h2>
      <p style={PROSE}>
        Los veintidós arcanos mayores se leen como las estaciones de un único viaje arquetípico — lo que Carl Jung llamó <em>individuación</em> y lo que la tradición del tarot llama El viaje del Loco. El Loco (0) parte sin forma; se encuentra con El Mago (1) y La Sacerdotisa (2) — los primeros maestros consciente e inconsciente. Aprende a través de La Emperatriz y El Emperador (arquetipos parentales), El Hierofante (autoridad cultural) y Los Enamorados (madurez relacional). Hacia El Carro, La Fuerza y El Ermitaño (7-9), está asumiendo la responsabilidad de su propio movimiento. La Rueda de la Fortuna y La Justicia (10-11) introducen el destino y la ética. El Colgado y La Muerte (12-13) son la entrega y el final que hacen posible un crecimiento ulterior. La Templanza, El Diablo, La Torre y La Estrella (14-17) recorren la integración, la sombra, el derrumbe y la renovación. La Luna y El Sol (18-19) cierran el trabajo inconsciente y lo traen a la luz del día. El Juicio y El Mundo (20-21) nombran el momento de ser convocado plenamente a uno mismo y el cierre del ciclo.
      </p>
      <p style={PROSE}>
        Cuando aparecen arcanos mayores en una lectura, señalan que la pregunta opera en la capa arquetípica — definitoria para la vida, más que situacional. Cuando varios arcanos mayores se agrupan, la lectura suele tratar de una fase de vida más que de una sola decisión. Tomamos esto en serio sin volvernos místicos al respecto; el marco junguiano es un lenguaje para nombrar aquello que la mayoría de lectores ya reconoce.
      </p>

      {/* Section 5 — Reversed handling */}
      <h2 style={SECTION_HEADER}>5. Cómo leemos las cartas invertidas</h2>
      <p style={PROSE}>
        Una carta invertida en TarotAxis es la energía al derecho en su forma de sombra, bloqueada, interiorizada, o llegando temprano o tarde — no el simple opuesto. Seguimos la taxonomía de inversiones de Mary K Greer, que distingue entre energía <em>aún no manifestada</em>, <em>bloqueada o resistida</em>, <em>sobreextendida hacia su sombra</em> o <em>volcada hacia adentro</em>. Cada una de las 78 cartas tiene una página invertida dedicada con lecturas extensas de amor, carrera y espiritualidad, además de preguntas frecuentes contextuales, escritas desde esta postura y no como una mera negación del texto al derecho.
      </p>
      <p style={PROSE}>
        Evitamos deliberadamente la antigua convención de &ldquo;invertida equivale a malo&rdquo;. El Diablo invertido suele ser <em>liberación</em>, no <em>un diablo peor</em>. La Torre invertida es a menudo <em>resistir un cambio necesario</em>, no <em>seguridad</em>. El Sol invertido puede ser <em>alegría diferida</em> o <em>sobreexposición</em>, según las cartas que lo rodean. Este matiz es parte de lo que hace que valga la pena leer inversiones.
      </p>

      {/* Section 6 — Combinations */}
      <h2 style={SECTION_HEADER}>6. Cómo funcionan las combinaciones</h2>
      <p style={PROSE}>
        Las lecturas de combinaciones en TarotAxis siguen un sistema de dos capas. Para los pares de alta intención — La Muerte y La Torre, Los Enamorados y El Diablo, Los Enamorados y el Dos de Copas, y unas cuarenta más — publicamos <strong>lecturas matizadas trabajadas a mano</strong> que nombran dinámicas concretas, formas de sombra, casos límite y el modo en que un lector en activo aborda el par. Para el resto de las combinaciones, un motor procedimental construye la lectura a partir de la dignidad elemental, el patrón numerológico y la interacción arquetípica — determinista, guiado por el marco, transparente.
      </p>
      <p style={PROSE}>
        Somos honestos sobre cuál es cuál. Las entradas trabajadas a mano abren con una esencia en una línea en cursiva e incluyen una sección de &ldquo;Nota del lector&rdquo;. Las entradas procedimentales encabezan con el título &ldquo;Energía Combinada&rdquo;. En cualquier caso, el marco subyacente es el mismo — las mismas reglas elementales, la misma progresión numerológica, la misma capa arquetípica.
      </p>

      {/* Section 7 — AI transparency */}
      <h2 style={SECTION_HEADER}>7. Asistencia de IA — qué hace y qué no hace</h2>
      <p style={PROSE}>
        TarotAxis utiliza asistencia de IA en tres lugares concretos: redactar contenido interpretativo extenso (que después se edita contra el marco), traducir el contenido en inglés a otros idiomas (actualmente español) y producir la salida del motor procedimental de combinaciones. La IA <strong>no</strong> se utiliza para alterar la lógica simbólica de las cartas, ni para aleatorizar qué carta &ldquo;significa&rdquo; qué, ni para producir contenido que no haya sido contrastado con el marco RWS establecido.
      </p>
      <p style={PROSE}>
        Lo decimos abiertamente porque la alternativa — fingir que la redacción es solo humana — es a la vez deshonesta y una oportunidad perdida. El tarot siempre ha sido un híbrido entre una estructura simbólica fija y la artesanía del lector al aplicarla. La asistencia de IA es el equivalente moderno de un lector junior que ha leído todos los libros y escribe el primer borrador. El lector sénior (el marco, la revisión editorial) decide qué se queda.
      </p>

      {/* Section 8 — What we don't do */}
      <h2 style={SECTION_HEADER}>8. Lo que TarotAxis no hace</h2>
      <p style={PROSE}>
        No predecimos la muerte, ni una enfermedad terminal, ni ningún otro desenlace irreversible. La carta de La Muerte y el hecho de la muerte son cosas distintas. No leemos a personas que no han consentido ser leídas — a preguntas como &ldquo;¿mi pareja me quiere?&rdquo; respondemos sobre la relación, no sobre el interior privado de la otra persona. No nombramos a terceras personas. No prometemos plazos concretos más allá de las intuiciones de cadencia estacional que el marco realmente admite.
      </p>
      <p style={PROSE}>
        No sustituimos la atención médica, jurídica ni psicológica. Cuando una lectura toca esos terrenos, orientamos hacia profesionales adecuados en lugar de hacer sus veces. El tarot es una herramienta de autorreflexión y reconocimiento de patrones; no es un instrumento diagnóstico.
      </p>

      {/* Editorial / authorship */}
      <h2 style={SECTION_HEADER}>Editorial</h2>
      <p style={PROSE}>
        TarotAxis está editado por <strong>TarotAxis Editorial</strong> — un grupo de trabajo cuyo estándar interpretativo se calibra contra autores contemporáneos (Rachel Pollack, Mary K Greer, Benebell Wen, Lindsay Mack, Camelia Elias) y contra la literatura RWS subyacente. Cada página extensa pasa por una comprobación de consistencia con el marco antes de su publicación. Agradecemos correcciones de lectores en activo — véase el enlace de contacto más abajo.
      </p>

      {/* Sources */}
      <h2 style={SECTION_HEADER}>Fuentes seleccionadas</h2>
      <ul style={{ ...PROSE, paddingLeft: '1.25rem' }}>
        <li>Waite, A E. <em>The Pictorial Key to the Tarot</em>. 1910.</li>
        <li>Pollack, Rachel. <em>Seventy-Eight Degrees of Wisdom</em>. 1980.</li>
        <li>Greer, Mary K. <em>The Complete Book of Tarot Reversals</em>. 2002.</li>
        <li>Wen, Benebell. <em>Holistic Tarot</em>. 2015.</li>
        <li>Elias, Camelia. <em>Marseille Tarot: Towards the Art of Reading</em>. 2014.</li>
        <li>Mack, Lindsay. <em>Tarot for the Wild Soul</em> (podcast y escritos, 2017&ndash;actualidad).</li>
      </ul>

      {/* FAQ */}
      <h2 style={SECTION_HEADER}>Preguntas frecuentes</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', marginBottom: '2.5rem' }}>
        {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
          <div key={name} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{name}</div>
            <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{acceptedAnswer.text}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', background: 'var(--on-bg-02)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14, padding: '1.75rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .6, textTransform: 'uppercase', marginBottom: '.75rem' }}>
          Prueba el marco en acción
        </div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
          Saca una lectura gratuita de tres cartas y observa cómo se reúnen las capas elemental, numerológica y arquetípica sobre una tirada real.
        </p>
        <Link href="/es/lectura-gratis" style={{ display: 'inline-block', padding: '.8rem 2rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
          ✦ Saca una tirada de tres cartas
        </Link>
      </div>
    </div>
  )
}
