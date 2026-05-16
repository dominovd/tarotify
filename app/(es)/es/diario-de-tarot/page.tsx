import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Diario de tarot — Cómo llevarlo y por qué transforma tu práctica | TarotAxis',
  description: 'Una guía práctica para llevar un diario de tarot — qué registrar, cómo estructurar las entradas, plantillas listas para usar y por qué escribir es la forma más rápida de aprender las cartas.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/diario-de-tarot',
    languages: {
      'en': 'https://tarotaxis.com/tarot-journal',
      'es': 'https://tarotaxis.com/es/diario-de-tarot',
      'x-default': 'https://tarotaxis.com/tarot-journal',
    },
  },
  openGraph: {
    title: 'Diario de tarot — Cómo llevarlo y por qué transforma tu práctica',
    description: 'Una guía práctica para llevar un diario de tarot — qué registrar, cómo estructurar las entradas y plantillas listas para usar.',
    url: 'https://tarotaxis.com/es/diario-de-tarot',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diario de tarot — Cómo llevarlo y por qué transforma tu práctica | TarotAxis',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Por qué es útil llevar un diario de tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Un diario hace tres cosas a la vez. Te obliga a articular cada carta con tus propias palabras, que es la única manera de que los significados dejen de ser prestados y empiecen a ser tuyos. Hace visibles los patrones entre lecturas — una carta que reaparece, una posición que se queda bloqueada, una pregunta sobre la que sigues dando vueltas. Y separa el momento de la lectura del momento de la interpretación, que es donde la mayoría de principiantes se enredan. Escribir ralentiza la práctica lo suficiente como para aprender realmente de ella.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué debería escribir en un diario de tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Como mínimo: la fecha, la pregunta o intención, la tirada que usaste, las cartas sacadas anotando cualquier inversión, y tu interpretación con tus propias palabras antes de consultar cualquier material de referencia. Después deja espacio para volver más tarde — una semana, un mes — y añadir lo que realmente ocurrió, hacia dónde parecían estar apuntando las cartas en retrospectiva, y qué significados aterrizaron y cuáles no. El antes y el después es donde vive el aprendizaje real.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Necesito un diario de tarot físico o vale uno digital?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ambos funcionan, y funcionan de forma distinta. Un cuaderno físico te ralentiza, favorece la reflexión más larga y mantiene la práctica táctil junto a las cartas mismas. Un diario digital es buscable, fácil de revisar y te permite detectar patrones a lo largo de meses con un filtro rápido. Muchas lectoras establecidas usan ambos — un cuaderno físico para lecturas completas y un registro digital para tiradas diarias y seguimiento de patrones. Elige el que realmente vayas a mantener, y cambia más adelante si lo necesitas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto se tarda en ver resultados del diario?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Entre cuatro y seis semanas de entradas constantes antes de que las cartas empiecen a sentirse claramente más familiares — empiezas a reconocerlas por su textura más que por su significado de manual. En torno a los tres meses, los patrones entre lecturas se vuelven claramente visibles, y puedes ver qué cartas tiendes a sacar en determinadas temporadas de tu vida. El diario es acumulativo: seis meses de entradas te enseñan más sobre tus propias lecturas que cualquier libro de tarot por sí solo.',
      },
    },
  ],
}

const recordItems = [
  {
    name: 'Fecha y hora',
    body: 'Parece trivial, pero es la columna vertebral de todo el diario. Sin fechas no puedes rastrear patrones, y los patrones son la mayor parte del valor. Anota también la hora del día si lees en franjas variadas — las lecturas de medianoche tienden a tener un color distinto al de las de la mañana.',
  },
  {
    name: 'Pregunta o intención',
    body: 'Escribe la pregunta exactamente como la formulaste, no una versión maquillada. La formulación importa: una pregunta que empezó como "¿Volverá?" y que silenciosamente se convirtió en "¿Qué me está enseñando esta conexión?" es ya en sí misma información útil sobre dónde estás.',
  },
  {
    name: 'Tirada usada',
    body: 'El nombre de la tirada y una nota rápida sobre las posiciones. Si inventaste la tirada sobre la marcha, dibújala. Tu yo futuro necesita saber qué carta estaba respondiendo a qué pregunta — una tirada de tres cartas no significa nada sin saber qué representaba cada posición.',
  },
  {
    name: 'Cartas sacadas (con inversiones)',
    body: 'Anótalas en orden, marcando cuáles salieron invertidas. Vale la pena guardar un pequeño diagrama o una foto rápida del esquema. Las inversiones especialmente son fáciles de olvidar, y una carta invertida leída como del derecho una semana después te despistará en silencio.',
  },
  {
    name: 'Reacción emocional inmediata',
    body: 'Una o dos palabras, escritas antes de empezar a interpretar. Alivio, temor, reconocimiento, confusión, resistencia. Tu reacción visceral a una tirada suele llevar más información que la lectura cuidadosa que viene después — y es lo primero que la memoria borra.',
  },
  {
    name: 'Tu interpretación — antes de consultar',
    body: 'Lee la tirada con tus propias palabras primero, con el libro cerrado. Este es el hábito más valioso de toda la práctica. La tentación es consultar cada carta de inmediato; resístete. Escribe lo que ves, consulta las referencias después y anota dónde confirmaron o cambiaron tu lectura.',
  },
  {
    name: 'En retrospectiva (una semana después)',
    body: 'Deja espacio en blanco y vuelve. ¿Hacia qué parecen haber estado apuntando las cartas, ahora que ha pasado algo de tiempo? A menudo el significado que se sentía oscuro en el momento se vuelve claro una semana después — y esa lectura retrospectiva es la que te enseña a reconocer el mismo patrón la próxima vez.',
  },
  {
    name: 'Resultado — qué pasó realmente',
    body: 'El registro honesto de cómo se desarrolló la situación, sin suavizarlo. ¿Aterrizó la lectura? ¿Dónde falló? ¿Dónde acertó de una manera que sólo reconociste más tarde? Los resultados registrados durante meses son cómo calibras tus propias lecturas contra la realidad.',
  },
]

const templates = [
  {
    name: 'Plantilla de carta diaria',
    blurb: 'Para una tirada matinal de una sola carta. Dos minutos para rellenarla, un minuto por la noche.',
    fields: [
      'Fecha',
      'Carta (e inversión, si la hay)',
      'Reacción en una palabra',
      'Dónde podría aparecer esta carta hoy',
      'Reflexión nocturna: ¿apareció? ¿De qué forma?',
    ],
  },
  {
    name: 'Plantilla de lectura completa',
    blurb: 'Para tiradas de varias cartas. La estructura que hace más trabajo con menos esfuerzo.',
    fields: [
      'Fecha',
      'Pregunta',
      'Nombre de la tirada',
      'Cada posición + carta + interpretación en una línea',
      'Mensaje general con tus propias palabras',
      'Una acción que sugiere esta lectura',
      'Fecha de relectura (p. ej. dos semanas)',
    ],
  },
  {
    name: 'Plantilla de seguimiento de patrones',
    blurb: 'Una entrada mensual de revisión. Rellénala al final de cada mes usando el resto del diario como material de origen.',
    fields: [
      'Carta que sigue apareciendo este mes',
      'Posición(es) donde apareció',
      'Contexto de las lecturas en las que se presentó',
      'La lección que se niega a ser ignorada',
    ],
  },
]

export default function DiarioDeTarotPage() {
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
        <span style={{ color: 'var(--gold)' }}>Diario de tarot</span>
      </nav>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.2em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Guía práctica
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '1rem', lineHeight: 1.25 }}>
          Diario de tarot
        </h1>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.95rem' }}>
          El diario es la herramienta más infravalorada en la práctica de un lector. Convierte lecturas dispersas en un patrón que realmente puedes ver, y las cartas se vuelven familiares mucho más deprisa cuando has tenido que escribir sobre ellas con tus propias palabras. La mayor parte de lo que la gente llama &ldquo;intuición&rdquo; con el tarot es en realidad reconocimiento de patrones construido a lo largo de meses de entradas — y no hay atajo que no pase por la página.
        </p>
      </div>

      {/* Section: Why Keep a Tarot Journal */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Por qué llevar un diario de tarot
        </h2>
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', marginBottom: '1rem' }}>
            Las cartas se vuelven reales sólo cuando tienes que articularlas con tus propias palabras. Leer los significados de otra persona — en un libro, una app, una web — te da vocabulario, no comprensión. En el momento en que tienes que escribir lo que significa el Cinco de Pentáculos en <em>esta</em> tirada, en <em>este</em> día, sobre <em>esta</em> situación, la carta deja de ser un párrafo en una guía y empieza a ser un fragmento de lenguaje que realmente te pertenece.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', marginBottom: '1rem' }}>
            Los patrones entre lecturas sólo emergen en retrospectiva. La misma carta saliendo tres veces en una quincena, el bloqueo recurrente en la misma posición de tirada, la pregunta que sigues reformulando en lugar de responder — nada de esto es visible en una sola lectura. Un diario hace visible el patrón. Eso es la mayor parte de lo que los lectores con experiencia quieren decir cuando hablan de &ldquo;leer bien&rdquo;: tienen un registro al que pueden volver.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            El diario separa la lectura en sí de la interpretación, y aquí es donde la mayoría de principiantes se enredan. Sacar las cartas e interpretarlas al mismo tiempo produce una lectura apresurada y ansiosa que se inclina hacia lo que esperabas oír. Escribir primero las cartas, sentarse con ellas y luego interpretar por escrito ralentiza la práctica lo suficiente para que la honestidad te alcance.
          </p>
        </div>
      </section>

      {/* Section: What to Record */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem' }}>
          Qué registrar
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          Una buena entrada tiene ocho componentes. Llevan menos tiempo del que parece, y te devuelven el favor cada vez que hojeas lecturas antiguas.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {recordItems.map(({ name, body }, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.12)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem', marginTop: 2 }}>
                {i + 1}
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.4rem' }}>{name}</div>
                <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Three Journal Templates */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem' }}>
          Tres plantillas de diario
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          Copia cualquiera de ellas en tu cuaderno o en una app de notas. La estructura hace la mayor parte del trabajo — tú sólo rellenas los campos.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {templates.map((t, i) => (
            <div key={i} style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.95rem', marginBottom: '.5rem' }}>{t.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.7, marginBottom: '1rem' }}>{t.blurb}</p>
              <div style={{ paddingTop: '.85rem', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '.55rem' }}>
                {t.fields.map((f, j) => (
                  <div key={j} style={{ display: 'flex', gap: '.65rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.78rem', flexShrink: 0, marginTop: 1 }}>·</span>
                    <span style={{ color: 'var(--text)', fontSize: '.85rem', lineHeight: 1.7, opacity: .9 }}>{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: How Often to Journal */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Con qué frecuencia escribir
        </h2>
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            Para principiantes, las entradas diarias funcionan mejor — idealmente acompañadas de una tirada matinal de una sola carta. La repetición es lo que construye familiaridad con la baraja, y una lectura diaria de una carta es lo bastante pequeña como para mantenerla de verdad. Para practicantes establecidos, los resúmenes semanales suelen funcionar mejor que los diarios: un registro de cualquier lectura completa hecha esa semana, más una nota breve de seguimiento de patrones sobre qué cartas o temas siguieron surgiendo. Lo importante es la constancia, no el volumen. Cinco minutos al día durante un mes te enseñarán más que una sesión de tres horas cada seis semanas.
          </p>
        </div>
      </section>

      {/* Section: TarotAxis Has a Journal Built In */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          TarotAxis incluye un diario
        </h2>
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            Nuestra <Link href="/es/lectura-gratis" style={{ color: 'var(--gold)' }}>herramienta de lectura gratis</Link> guarda automáticamente cada lectura de forma local en tu dispositivo, así que puedes usarla como diario digital junto a cualquier cuaderno físico que ya tengas. La fecha, la tirada, las cartas y la interpretación están todas ahí para revisarlas — buscables, en orden y sin enviarse nunca a ningún lugar fuera de tu equipo. Muchas lectoras encuentran que la combinación funciona bien: la app gestiona el registro y el cuaderno acoge las reflexiones más largas que conviene escribir a mano.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <Link href="/es/lectura-gratis" style={{ padding: '.8rem 1.6rem', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.35)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Prueba una lectura gratis →
        </Link>
        <Link href="/es/como-leer-tarot" style={{ padding: '.8rem 1.6rem', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Cómo leer el tarot →
        </Link>
        <Link href="/es/como-preguntar-al-tarot" style={{ padding: '.8rem 1.6rem', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Cómo preguntar al tarot →
        </Link>
      </div>

      {/* FAQ */}
      <section>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.5rem' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
