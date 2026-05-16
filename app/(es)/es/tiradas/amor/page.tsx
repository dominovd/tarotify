import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tarot del Amor — Guía de Lectura para Relaciones | TarotAxis',
  description: 'Explora las mejores tiradas de tarot del amor para relaciones, romance y preguntas sobre el alma gemela. Guías paso a paso con significados de cada posición para lecturas de 3, 5 y 6 cartas.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/amor',
    languages: {
      'en': 'https://tarotaxis.com/spreads/love',
      'es': 'https://tarotaxis.com/es/tiradas/amor',
      'x-default': 'https://tarotaxis.com/spreads/love',
    },
  },
  openGraph: {
    title: 'Tirada de Tarot del Amor — Guía de Lectura para Relaciones',
    description: 'Encuentra claridad sobre el amor, las relaciones y el romance con tiradas dedicadas. Guías posición por posición para personas solteras y parejas.',
    url: 'https://tarotaxis.com/es/tiradas/amor',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const SPREADS = [
  {
    name: 'Revisión de la Relación (5 cartas)',
    cards: 5,
    level: 'Intermedio',
    desc: 'Una mirada completa al estado actual de una relación. Úsala cuando quieras entender la dinámica entre dos personas — lo que cada uno está aportando, lo que funciona y lo que pide atención.',
    positions: [
      { num: 1, name: 'Tú', desc: 'La energía que tú estás aportando a esta relación ahora mismo — tus sentimientos, tu estado de ánimo y lo que estás ofreciendo.' },
      { num: 2, name: 'Tu pareja', desc: 'La energía que aporta la otra persona — sus sentimientos, intenciones y estado interior en relación contigo.' },
      { num: 3, name: 'La conexión', desc: 'La energía general de la relación misma — el campo entre ustedes, la dinámica que han creado juntos.' },
      { num: 4, name: 'Lo que funciona', desc: 'La fortaleza de esta relación — lo que es genuinamente bueno, lo que hay que honrar y sobre lo que construir.' },
      { num: 5, name: 'Lo que pide atención', desc: 'El desafío o el punto ciego — lo que la relación necesita más, lo que se está evitando o lo que requiere una conversación honesta.' },
    ],
  },
  {
    name: 'Lectura de Amor Nuevo (3 cartas)',
    cards: 3,
    level: 'Principiante',
    desc: 'Para conexiones en etapa temprana o cuando estás saliendo con alguien nuevo. Estas tres cartas te dan una lectura rápida y honesta sobre el potencial y la realidad de una relación nueva.',
    positions: [
      { num: 1, name: 'Su energía', desc: 'Lo que esta persona está aportando genuinamente — quién es en esta situación, sus intenciones y su disposición para conectar.' },
      { num: 2, name: 'Tu energía', desc: 'Lo que tú estás proyectando y sintiendo — incluidas las esperanzas, los miedos o las expectativas que pueden estar dando forma a cómo ves a esta persona.' },
      { num: 3, name: 'El potencial', desc: 'En qué puede convertirse esta conexión — la dirección honesta de la relación si ambas personas continúan tal como están.' },
    ],
  },
  {
    name: 'Tirada para Solteros — Atraer el Amor (4 cartas)',
    cards: 4,
    level: 'Principiante',
    desc: 'Para quienes están solteros y buscan el amor. Esta tirada se centra en ti — para qué estás listo, qué puede estar bloqueándote y qué trae el siguiente capítulo.',
    positions: [
      { num: 1, name: 'Dónde estás', desc: 'Tu estado emocional actual y tu disposición para el amor — honesto, no idealizado.' },
      { num: 2, name: 'Lo que te bloquea', desc: 'La creencia, el patrón o la herida que puede estar interponiéndose en el amor que quieres.' },
      { num: 3, name: 'Lo que cultivar', desc: 'La cualidad, la energía o la acción que más te apoyará para atraer una relación significativa.' },
      { num: 4, name: 'Lo que viene', desc: 'La energía de lo que se mueve hacia ti en el amor — no una persona en sí, sino un capítulo o una posibilidad.' },
    ],
  },
  {
    name: '¿Me Quedo o Me Voy? (6 cartas)',
    cards: 6,
    level: 'Avanzado',
    desc: 'Para una relación en una encrucijada. Es una tirada profundamente honesta — extiéndela solo cuando estés genuinamente abierto a ver lo que las cartas revelen, sea lo que sea.',
    positions: [
      { num: 1, name: 'La verdad de la relación', desc: 'Una mirada sin filtros a lo que esta relación es realmente ahora — no a lo que esperas que sea.' },
      { num: 2, name: 'Si te quedas', desc: 'El camino y la energía más probables si eliges permanecer en la relación.' },
      { num: 3, name: 'Si te vas', desc: 'El camino y la energía más probables si eliges marcharte.' },
      { num: 4, name: 'Lo que tu corazón sabe', desc: 'La respuesta que ya tienes pero sobre la que puedes tener miedo de actuar.' },
      { num: 5, name: 'Lo que necesita ocurrir', desc: 'El cambio, la conversación o la acción más necesaria — independientemente del camino que elijas.' },
      { num: 6, name: 'Guía', desc: 'El mensaje general de la lectura — lo más sabio que las cartas tienen que decir sobre esta situación.' },
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
      name: '¿Qué es una tirada de tarot del amor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada de tarot del amor es una disposición específica de cartas en la que cada posición tiene un significado relacionado con el amor, las relaciones o el romance. A diferencia de una lectura general, las tiradas de amor están diseñadas para explorar las dinámicas concretas de una relación — los sentimientos de cada persona, la conexión entre ambas, qué funciona, qué resulta desafiante y hacia dónde pueden estar dirigiéndose las cosas. Pueden usarse para relaciones existentes, conexiones nuevas o autoexploración para personas solteras.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la mejor tirada de tarot para el amor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La mejor tirada de tarot del amor depende de tu situación. Para entender una relación existente, la Revisión de la Relación de 5 cartas funciona bien. Para una conexión nueva, una tirada de 3 cartas con las posiciones Tú, La otra persona y El potencial es sencilla y directa. Para personas solteras que buscan el amor, una tirada de 4 cartas centrada en dónde estás, qué te bloquea y qué viene es lo más útil. Para una relación en una encrucijada importante, la tirada de 6 cartas Me quedo o me voy ofrece una claridad honesta.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puede el tarot decirte si alguien te ama?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tarot puede revelar la energía que rodea los sentimientos y las intenciones de otra persona, pero no puede darte certeza sobre el mundo interior de alguien más — solo esa persona lo conoce de verdad. Lo que el tarot sí hace bien es reflejar la verdad energética de una situación: patrones, posibilidades, puntos ciegos y lo que tal vez ya sospechas pero no has reconocido del todo. Trata al tarot como un espejo y no como un oráculo — te muestra lo que es real, no lo que deseas que fuera verdad.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se le pregunta al tarot sobre el amor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las mejores preguntas de amor para el tarot son abiertas, no de sí/no. En lugar de preguntar "¿Volverá conmigo?", pregunta "¿Qué necesito comprender sobre esta conexión?". En lugar de "¿Ella me ama?", pregunta "¿Cuál es la energía honesta entre nosotros ahora?". Las preguntas abiertas invitan a respuestas más ricas y útiles. Las preguntas cerradas tienden a producir cartas que retorcerás para que encajen con la respuesta que quieres.',
      },
    },
  ],
}

export default function TiradaAmorPage() {
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
        <span style={{ color: 'var(--gold)' }}>Tirada del Amor</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tarot del Amor
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          El tarot es una de las herramientas más antiguas para comprender el corazón. Tanto si estás navegando una conexión nueva, profundizando una relación existente o buscando claridad como persona soltera, estas tiradas ofrecen una guía honesta y matizada.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['Relaciones', 'Solteros', 'Amor nuevo', 'Encrucijada'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Spreads */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '.06em' }}>
          Tiradas de Tarot del Amor
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {SPREADS.map((spread) => (
            <div key={spread.name} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap', marginBottom: '.6rem' }}>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.04em' }}>{spread.name}</div>
                <div style={{ display: 'flex', gap: '.5rem', flexShrink: 0 }}>
                  <span style={{ padding: '.2rem .6rem', borderRadius: 20, fontSize: '.65rem', background: 'rgba(201,168,76,.1)', color: 'var(--gold)', fontFamily: "'Cinzel',serif" }}>{spread.cards} cartas</span>
                  <span style={{ padding: '.2rem .6rem', borderRadius: 20, fontSize: '.65rem', background: 'var(--on-bg-04)', color: 'var(--muted)', fontFamily: "'Cinzel',serif" }}>{spread.level}</span>
                </div>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{spread.desc}</p>

              {/* Visual card layout */}
              <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
                {spread.positions.map(pos => (
                  <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.35rem' }}>
                    <div style={{ width: 52, height: 78, border: '1px solid rgba(201,168,76,.3)', borderRadius: 6, background: 'rgba(201,168,76,.04)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.9rem', color: 'var(--gold)' }}>
                      {pos.num}
                    </div>
                    <div style={{ fontSize: '.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', maxWidth: 70 }}>{pos.name}</div>
                  </div>
                ))}
              </div>

              {/* Position meanings */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
                {spread.positions.map(pos => (
                  <div key={pos.num} style={{ display: 'flex', gap: '.75rem', alignItems: 'flex-start' }}>
                    <span style={{ flexShrink: 0, width: 22, height: 22, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.65rem', color: 'var(--gold)', marginTop: '.1rem' }}>{pos.num}</span>
                    <div>
                      <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.78rem', color: 'var(--gold)', marginRight: '.4rem' }}>{pos.name} —</span>
                      <span style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.6 }}>{pos.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Specialised Love Spreads */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Tiradas Específicas del Amor
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Cada una de estas tiradas responde a una pregunta concreta — la disposición exacta para un momento exacto.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '.75rem' }}>
          {[
            { href: '/es/tiradas/amor/reconciliacion', title: 'Reconciliación', cards: '5–7', desc: 'Lectura honesta sobre un posible reencuentro.' },
            { href: '/es/tiradas/amor/amor-propio', title: 'Amor Propio', cards: '4–6', desc: 'Trabajo interior, autoestima y sanación.' },
            { href: '/es/tiradas/amor/nueva-relacion', title: 'Nueva Relación', cards: '3–5', desc: 'Para conexiones en etapa temprana.' },
            { href: '/es/tiradas/alma-gemela', title: 'Alma Gemela', cards: 5, desc: 'Lo que aportas, lo que necesitas, la conexión.' },
          ].map(s => (
            <Link key={s.href} href={s.href} style={{ display: 'block', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem', textDecoration: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '.5rem', marginBottom: '.4rem' }}>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', letterSpacing: '.03em' }}>{s.title}</div>
                <span style={{ flexShrink: 0, padding: '.15rem .55rem', borderRadius: 20, fontSize: '.62rem', background: 'rgba(201,168,76,.1)', color: 'var(--gold)', fontFamily: "'Cinzel',serif", letterSpacing: '.06em' }}>{s.cards}c</span>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '.8rem', lineHeight: 1.55, margin: 0 }}>{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* How to read love spreads */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Cómo Leer una Tirada de Amor
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Las lecturas de amor requieren un tipo particular de honestidad. Las cartas te mostrarán la verdad — pero solo si estás genuinamente abierto a ella antes de sacarlas. Si ya tienes una preferencia fuerte por un resultado determinado, reconócela en voz alta antes de barajar. Este acto consciente de rendición deja espacio para una percepción auténtica.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Al leer posiciones sobre otra persona — "Su energía", "Lo que aporta tu pareja" — recuerda que el tarot refleja energía, no certezas. Estás viendo el campo, no leyendo su mente. Trata lo que aparece como información para considerar, no como un veredicto.
          </p>
          <p>
            Presta especial atención a las cartas que aparezcan en posiciones sobre ti mismo. Las lecturas de amor más útiles casi siempre revelan algo sobre quien las hace — sus patrones, su disposición, sus heridas y sus dones — en lugar de ofrecer un pronóstico simple sobre otra persona.
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>¿Lista para tu lectura de amor?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Elige una tirada de arriba, baraja tu mazo y saca las cartas. O empieza con una lectura gratis de tres cartas ahora.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/lectura-gratis" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Lectura Gratis
          </Link>
          <Link href="/es/tiradas/tres-cartas" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Tirada de Tres Cartas
          </Link>
        </div>
      </div>
    </div>
  )
}
