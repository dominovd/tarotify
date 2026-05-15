import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cómo leer el tarot — Una guía para principiantes | TarotAxis',
  description: 'Aprende a leer las cartas del tarot desde cero. Comprende la baraja de 78 cartas, los Arcanos Mayores y Menores, los cuatro palos, las inversiones y cómo hacer tu primera lectura paso a paso.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/como-leer-tarot',
    languages: {
      'en': 'https://tarotaxis.com/how-to-read-tarot',
      'es': 'https://tarotaxis.com/es/como-leer-tarot',
      'x-default': 'https://tarotaxis.com/how-to-read-tarot',
    },
  },
  openGraph: {
    title: 'Cómo leer el tarot — Una guía para principiantes',
    description: 'Aprende a leer las cartas del tarot desde cero. La baraja de 78 cartas, los palos, las inversiones y tu primera lectura paso a paso.',
    url: 'https://tarotaxis.com/es/como-leer-tarot',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cómo leer el tarot — Una guía para principiantes | TarotAxis',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto se tarda en aprender el tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puedes hacer una tirada básica de tres cartas el primer día. Tener una familiaridad funcional con las 78 cartas le lleva a la mayoría de la gente de tres a seis meses de práctica regular. La fluidez verdadera — cuando las cartas te hablan intuitivamente en lugar de hacerlo desde la memoria — suele desarrollarse a lo largo de uno o dos años. Lo más importante es la constancia: incluso diez minutos al día con una sola carta superarán a un estudio intensivo y esporádico.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Hace falta un don especial para leer el tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Leer el tarot es una habilidad que se aprende, basada en la psicología, el simbolismo y el reconocimiento de patrones — no en una capacidad sobrenatural. Cualquier persona dispuesta a desarrollar su capacidad de observación y a convivir con la ambigüedad puede convertirse en un lector competente. La intuición, en el contexto del tarot, simplemente significa la capacidad de notar qué aspectos de una carta resultan más relevantes para una situación dada — y eso se desarrolla con la práctica.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la mejor tirada de tarot para principiantes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La tirada de tres cartas (Pasado · Presente · Futuro) es el punto de partida ideal. Es lo bastante sencilla como para tenerla en la cabeza, lo bastante versátil como para responder a casi cualquier pregunta y aporta una estructura narrativa que te ayuda a practicar la conexión entre las cartas en lugar de leerlas de forma aislada. Cuando te sientas cómodo con tres cartas, la Cruz Celta ofrece una exploración mucho más profunda de cualquier situación.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué significan las cartas invertidas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una carta invertida (boca abajo) suele indicar que la energía de la carta está bloqueada, interiorizada, retrasada o expresándose de una forma más desafiante que en su versión del derecho. No significa lo opuesto — El Sol invertido no es oscuridad; es más probable que represente una alegría a la que cuesta acceder ahora mismo, o la necesidad de mirar hacia dentro buscando lo que normalmente buscas fuera. Algunos lectores eligen no usar las inversiones, sobre todo al empezar, y es un enfoque completamente válido.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo leerme el tarot a mí mismo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí — y muchos lectores experimentados se leen sobre todo a sí mismos. El reto principal es la objetividad: resulta fácil interpretar inconscientemente las cartas en la dirección en que querrías que fueran. Por eso importa llevar un diario de tus lecturas. Cuando escribes tu interpretación antes de conocer el desenlace, construyes un registro honesto que te ayuda a distinguir entre intuición genuina y pensamiento desiderativo.',
      },
    },
  ],
}

export default function ComoLeerTarotPage() {
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
        <span style={{ color: 'var(--gold)' }}>Cómo leer el tarot</span>
      </nav>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.2em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Guía para principiantes
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '1rem', lineHeight: 1.25 }}>
          Cómo leer las cartas del tarot
        </h1>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.95rem' }}>
          El tarot es un sistema de 78 cartas ilustradas que funciona como un espejo para la mente. Leer el tarot no requiere ninguna capacidad sobrenatural — requiere curiosidad, disposición a convivir con la ambigüedad y práctica. Esta guía te lleva por todo lo que necesitas para hacer tu primera lectura hoy mismo y construir una práctica genuina a lo largo del tiempo.
        </p>
      </div>

      {/* Section 1: The Deck */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          La baraja de 78 cartas
        </h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', marginBottom: '1rem' }}>
          Una baraja de tarot estándar tiene 78 cartas divididas en dos secciones: los Arcanos Mayores (22 cartas) y los Arcanos Menores (56 cartas). Cada sección funciona de manera distinta y aporta un peso diferente a una lectura.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1rem', marginTop: '1.25rem' }}>
          {[
            {
              title: 'Arcanos Mayores — 22 cartas',
              body: 'Numerados del 0 (El Loco) al 21 (El Mundo), los Arcanos Mayores representan los grandes temas, los puntos de inflexión y las fuerzas arquetípicas de una vida. Cuando aparecen Arcanos Mayores en una lectura suelen llevar más peso — a menudo señalan acontecimientos significativos, patrones psicológicos profundos o lecciones espirituales, más que cuestiones cotidianas.',
            },
            {
              title: 'Arcanos Menores — 56 cartas',
              body: 'Los Arcanos Menores cubren el día a día de la experiencia humana. Se dividen en cuatro palos de 14 cartas cada uno — Bastos, Copas, Espadas y Pentáculos — con un As hasta el Diez más cuatro cartas de la corte (Sota, Caballero, Reina y Rey). Estas cartas suelen describir las dimensiones prácticas, emocionales y mentales de una situación tal y como se está desplegando ahora mismo.',
            },
          ].map(({ title, body }) => (
            <div key={title} style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.6rem' }}>{title}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: The Four Suits */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Los cuatro palos de los Arcanos Menores
        </h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', marginBottom: '1.25rem' }}>
          Cada palo gobierna un área concreta de la experiencia humana. Reconocer a qué palo pertenece una carta te da una orientación inmediata antes incluso de leer su significado específico.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(155px,1fr))', gap: '.75rem' }}>
          {[
            { suit: 'Bastos', element: 'Fuego', theme: 'Ambición, creatividad, pasión, carrera, acción, inspiración' },
            { suit: 'Copas', element: 'Agua', theme: 'Emociones, relaciones, intuición, sueños, la vida interior' },
            { suit: 'Espadas', element: 'Aire', theme: 'Pensamiento, conflicto, comunicación, desafío, verdad, decisiones' },
            { suit: 'Pentáculos', element: 'Tierra', theme: 'Dinero, trabajo, salud, vida material, construcción a largo plazo' },
          ].map(({ suit, element, theme }) => (
            <div key={suit} style={{ background: 'rgba(255,255,255,.02)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.25rem' }}>{suit}</div>
              <div style={{ fontSize: '.62rem', color: 'var(--muted)', opacity: .6, letterSpacing: '.08em', marginBottom: '.5rem' }}>{element}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.78rem', lineHeight: 1.6, margin: 0 }}>{theme}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Reversals */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Cartas del derecho frente a invertidas
        </h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', marginBottom: '1rem' }}>
          Cuando una carta de tarot cae boca abajo en una tirada se llama invertida. La mayoría de los lectores interpretan las inversiones como una versión modificada o interiorizada del significado del derecho — no como su opuesto. El Sol invertido no significa oscuridad; más bien significa que la alegría y la vitalidad de El Sol son más difíciles de alcanzar en este momento, o que necesitas mirar hacia dentro buscando el calor que sueles buscar fuera.
        </p>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem' }}>
          Usar o no las inversiones es una decisión personal. Muchos principiantes empiezan sin ellas — leyendo todas las cartas del derecho — e introducen las invertidas cuando se sienten cómodos con los significados básicos. Cualquiera de los dos enfoques es válido.
        </p>
      </section>

      {/* Section 4: How to Do a Reading */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Cómo hacer tu primera lectura
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {[
            { n: '1', title: 'Define tu intención', body: 'Antes de tocar las cartas, respira y trae tu pregunta a la mente. Cuanto más específica sea, más útil será la lectura. "¿En qué debería centrarme ahora mismo?" funciona bien. "¿Todo irá bien?" es demasiado vaga como para darte algo con lo que trabajar.' },
            { n: '2', title: 'Baraja la baraja', body: 'Baraja las cartas de la forma que te resulte cómoda mientras mantienes tu pregunta en mente. No hay una técnica correcta — riffle, americano, o simplemente extender las cartas boca abajo y mezclarlas. Baraja hasta que sientas que es suficiente.' },
            { n: '3', title: 'Elige una tirada', body: 'Una tirada es la disposición que determina cuántas cartas sacas y qué significa cada posición. Empieza con una tirada sencilla de tres cartas: Pasado · Presente · Futuro. Saca tres cartas y colócalas de izquierda a derecha.' },
            { n: '4', title: 'Lee cada carta en su posición', body: 'Para cada carta, primero nota tu reacción inmediata — ¿qué te evoca la imagen antes de mirar el significado? Después lee el significado de la carta en el contexto de su posición. La misma carta en la posición de "Pasado" y en la de "Futuro" trae un mensaje distinto.' },
            { n: '5', title: 'Lee las cartas juntas', body: 'La habilidad real en el tarot es la síntesis — entender lo que las tres cartas dicen como una historia conectada, no como tres hechos sueltos. Busca patrones: ¿hay varias cartas del mismo palo? ¿Varios Arcanos Mayores? Las cartas en conversación entre sí revelan más que cualquier carta por separado.' },
            { n: '6', title: 'Anota tu lectura en el diario', body: 'Escribe tus cartas, sus posiciones y tu interpretación. Vuelve a ello en una semana o en un mes. Con el tiempo verás cuáles de tus interpretaciones resultaron más certeras — y ese bucle de retroalimentación es como realmente se desarrolla la intuición.' },
          ].map(({ n, title, body }) => (
            <div key={n} style={{ display: 'flex', gap: '1rem', background: 'rgba(255,255,255,.02)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.12)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem', marginTop: 2 }}>
                {n}
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.4rem' }}>{title}</div>
                <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Choosing a Spread */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Cómo elegir la tirada adecuada
        </h2>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', marginBottom: '1.25rem' }}>
          Cada tirada está diseñada para un tipo de pregunta. Usar una tirada de amor para una pregunta de trabajo, o viceversa, te dará una lectura más turbia que elegir una disposición que encaje con tu pregunta real.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
          {[
            { name: 'Tres cartas', href: '/es/lectura-gratis', use: 'Cualquier pregunta — la tirada más versátil del tarot' },
            { name: 'Cruz Celta', href: '/es', use: 'Situaciones complejas que requieren una imagen completa' },
            { name: 'Tirada de amor', href: '/es', use: 'Preguntas de relación y guía romántica' },
            { name: 'Tirada de carrera', href: '/es', use: 'Trabajo, propósito y decisiones profesionales' },
            { name: 'Tirada semanal', href: '/es', use: 'Marcar intenciones para la semana que viene' },
            { name: 'Carta del día', href: '/es/carta-del-dia', use: 'Una carta cada mañana para enfocar el día' },
          ].map(({ name, href, use }) => (
            <Link key={name} href={href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', padding: '.9rem 1.1rem', background: 'rgba(255,255,255,.02)', border: '1px solid var(--border)', borderRadius: 10, textDecoration: 'none', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem' }}>{name}</span>
              <span style={{ color: 'var(--muted)', fontSize: '.8rem' }}>{use}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Section 6: Tips */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Consejos para mejores lecturas
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(310px,1fr))', gap: '.75rem' }}>
          {[
            { title: 'Empieza con una carta al día', body: 'Saca una sola carta cada mañana y dedícale dos minutos. Pregúntate: ¿qué se siente con esta carta hoy? Vuelve a comprobarlo al final del día. Esta sencilla práctica construye tu vocabulario intuitivo más rápido que leer libros.' },
            { title: 'Aprende los palos antes que las cartas', body: 'Si el significado de una carta se te escapa, recuerda su palo. Una carta de Copas siempre tiene que ver con la emoción. Una carta de Espadas siempre tiene que ver con el pensamiento o el conflicto. Eso te da un recurso fiable que muchas veces basta.' },
            { title: 'Confía en tu primera reacción', body: 'Antes de buscar un significado, fíjate en lo que la imagen te hace sentir. Esa respuesta inmediata, previa a las palabras, suele ser la parte más certera de una lectura. El significado intelectual viene después.' },
            { title: 'Lee la historia, no las cartas', body: 'Tres cartas juntas cuentan una historia. Practica narrar esa historia en español llano antes de buscar significados. "Esta persona estuvo en un periodo de conflicto, ahora busca claridad y se mueve hacia un nuevo comienzo." La narrativa sencilla suele ganarle a la precisión técnica.' },
          ].map(({ title, body }) => (
            <div key={title} style={{ background: 'rgba(255,255,255,.02)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', marginBottom: '.5rem' }}>{title}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.82rem', lineHeight: 1.8, margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related guides */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Guías relacionadas
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
          {[
            { name: 'Cómo barajar el tarot', href: '/es/como-barajar-tarot', use: 'Cinco técnicas — riffle, americano, montones, extendido y corte' },
            { name: 'Cómo limpiar las cartas del tarot', href: '/es/como-limpiar-cartas-de-tarot', use: 'Luz lunar, humo, cristales, aliento y más' },
            { name: 'Tarot para principiantes', href: '/es/tarot-para-principiantes', use: 'Tus primeros pasos con la baraja — una ruta de un mes' },
          ].map(({ name, href, use }) => (
            <Link key={href} href={href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', padding: '.9rem 1.1rem', background: 'rgba(255,255,255,.02)', border: '1px solid var(--border)', borderRadius: 10, textDecoration: 'none', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem' }}>{name}</span>
              <span style={{ color: 'var(--muted)', fontSize: '.8rem' }}>{use}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <Link href="/es/lectura-gratis" style={{ padding: '.8rem 1.6rem', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.35)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Prueba una lectura gratis →
        </Link>
        <Link href="/es/cartas" style={{ padding: '.8rem 1.6rem', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Ver las 78 cartas →
        </Link>
      </div>

      {/* FAQ */}
      <section>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,.02)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.5rem' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
