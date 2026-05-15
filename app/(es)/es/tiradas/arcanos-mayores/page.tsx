import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tiradas de Arcanos Mayores — Disposiciones de 22 Cartas | TarotAxis',
  description: 'Una colección curada de tiradas de tarot con sólo los 22 Arcanos Mayores. Usa estas disposiciones arquetípicas para momentos decisivos, preguntas del alma y trabajo de sombra.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/arcanos-mayores',
    languages: {
      'en': 'https://tarotaxis.com/spreads/major',
      'es': 'https://tarotaxis.com/es/tiradas/arcanos-mayores',
      'x-default': 'https://tarotaxis.com/spreads/major',
    },
  },
  openGraph: {
    title: 'Tiradas de Tarot con Arcanos Mayores — Disposiciones Arquetípicas',
    description: 'Cinco tiradas de tarot sólo con los Arcanos Mayores: Cruz Celta, Tirada Anual, Decisión, Trabajo de Sombra y Elemental. Despoja al mazo a sus 22 triunfos para obtener guía cristalina del nivel del alma.',
    url: 'https://tarotaxis.com/es/tiradas/arcanos-mayores',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const SPREADS = [
  {
    href: '/es/tiradas/arcanos-mayores/cruz-celta',
    symbol: '✶',
    title: 'Cruz Celta (Arcanos Mayores)',
    cards: '10 cartas',
    desc: 'La Cruz Celta clásica reconstruida sólo con los 22 triunfos. Para preguntas-umbral en las que el ruido cotidiano se aparta y los arquetipos hablan por sí mismos.',
  },
  {
    href: '/es/tiradas/arcanos-mayores/anual',
    symbol: '☉',
    title: 'Tirada Anual',
    cards: '12 cartas',
    desc: 'Un triunfo por cada mes — un mapa de doce cartas con las lecciones arquetípicas que el año pretende enseñarte. Se saca mejor en un cumpleaños, en Año Nuevo o en otro umbral personal.',
  },
  {
    href: '/es/tiradas/arcanos-mayores/decision',
    symbol: '⚖',
    title: 'Tirada de Decisión',
    cards: '3 cartas',
    desc: 'Dos caminos y la enseñanza más profunda que corre bajo ambos. Una lectura arquetípica de tres cartas para las elecciones donde ni el pros-y-contras ni la lógica llegan del todo.',
  },
  {
    href: '/es/tiradas/arcanos-mayores/trabajo-de-sombra',
    symbol: '☾',
    title: 'Trabajo de Sombra',
    cards: '5 cartas',
    desc: 'Cinco cartas para las partes de ti que has enterrado, exiliado o te has negado a ver. Una excavación enfocada que se encuentra con el inconsciente en sus propios términos arquetípicos.',
  },
  {
    href: '/es/tiradas/arcanos-mayores/elemental',
    symbol: '✦',
    title: 'Equilibrio Elemental',
    cards: '4 cartas',
    desc: 'Fuego, Agua, Aire, Tierra — un triunfo por cada elemento para mostrar dónde estás bien afinada/o y dónde el sistema interior ha quedado en silencio. Una lectura diagnóstica.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué son los 22 Arcanos Mayores?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los Arcanos Mayores son las veintidós cartas triunfales de un mazo de tarot, numeradas del 0 al 21 — empezando con El Loco y terminando con El Mundo. Forman un ciclo completo a menudo llamado el Viaje del Loco, que retrata el paso del alma a través de la inocencia, la iniciación, el descenso, la integración y el regreso. Cada carta representa una gran fuerza arquetípica más que un pequeño suceso cotidiano.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué usar sólo los Arcanos Mayores en una tirada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Despojar al mazo hasta dejar sólo sus triunfos elimina el detalle cotidiano de los Arcanos Menores y deja únicamente las fuerzas del nivel del alma. Esto es útil cuando una pregunta se siente decisiva, fatídica o más allá del consejo práctico — cuando quieres escuchar directamente a los arquetipos en lugar de leer sobre recados y reuniones. Las tiradas sólo con Mayores tienden a sentirse más pesadas y concentradas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo volver a mezclar el resto del mazo después?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. La mayoría de lectores separa físicamente los 22 triunfos, realiza la lectura sólo de Mayores y luego recombina el mazo para el trabajo ordinario. No hay daño metafísico en volver a mezclar las cartas — la separación es una técnica de enfoque, no una regla ritual. Sólo tómate un momento para recombinar y volver a barajar a fondo antes de tu siguiente lectura.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Son los Arcanos Mayores más poderosos que los Menores?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No más poderosos, sino operando a una escala distinta. Los Arcanos Mayores hablan de arcos largos, lecciones del alma y puntos de inflexión arquetípicos; los Arcanos Menores hablan de la textura de la vida diaria. Una tirada cargada de triunfos sugiere un capítulo vital con peso y significado, pero una carta Menor bien sincronizada puede aún cambiarlo todo. Los dos sistemas responden a distintos tipos de preguntas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué significa si saco todos Arcanos Mayores en una tirada normal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una lectura dominada por Arcanos Mayores sugiere que la situación está operando a un nivel más profundo que las circunstancias ordinarias — el alma, el destino o tu camino vital a largo plazo están implicados. A menudo aparece en torno a transiciones significativas, despertares espirituales o momentos en los que un viejo capítulo se está cerrando. Presta mucha atención; éstas no son lecturas que descartar como rutinarias.',
      },
    },
  ],
}

export default function ArcanosMayoresHub() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/es/tiradas" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Tiradas</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Arcanos Mayores</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Tiradas de Arcanos Mayores
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.75 }}>
            Tiradas de tarot construidas sólo con las 22 cartas triunfales. Para momentos decisivos, preguntas del nivel del alma y las lecturas que piden peso arquetípico en lugar de detalle cotidiano.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Por qué una tirada sólo de Mayores
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Un mazo estándar de 78 cartas porta dos registros a la vez. Los Arcanos Menores describen la textura de la vida ordinaria — la taza de té, el correo incómodo, las pequeñas corrientes de sentimiento que atraviesan una semana. Los Arcanos Mayores hablan en otra voz, haciendo sonar las notas arquetípicas profundas del alma, el destino y los puntos de inflexión. Cuando separas los triunfos y lees sólo con ellos, el registro cotidiano se aparta y queda únicamente la capa arquetípica.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Ese enfoque es la clave. Las tiradas sólo de Mayores son para las preguntas que ya se sienten pesadas — una encrucijada vocacional, una relación que puede estar terminando, una vieja herida que pide ser atendida. Las cinco disposiciones de abajo enmarcan ese peso de modos distintos. Elige la forma que corresponda a tu pregunta.
          </p>
        </div>

        {/* Spread cards grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2.5rem' }}>
          {SPREADS.map(({ href, symbol, title, cards, desc }) => (
            <Link key={href} href={href} style={{ display: 'block', padding: '1.25rem 1.25rem', background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.85rem', marginBottom: '.55rem' }}>
                <div style={{ fontSize: '1.3rem', color: 'var(--gold)', opacity: .85 }}>{symbol}</div>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem' }}>{title}</div>
                <div style={{ marginLeft: 'auto', fontSize: '.7rem', color: 'var(--muted)', letterSpacing: '.08em', textTransform: 'uppercase' }}>{cards}</div>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{desc}</p>
            </Link>
          ))}
        </div>

        {/* When to use */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Cuándo recurrir a una tirada sólo de Mayores
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Usa los triunfos solos cuando la pregunta sea grande. Una pregunta profesional que en realidad es sobre vocación; una pregunta de relación que en realidad es sobre identidad; un duelo o una transición que no puedes nombrar del todo. Los Arcanos Menores responderían a la versión práctica de esas preguntas — el siguiente paso, el momento oportuno, el obstáculo a despejar — pero los triunfos responden a la versión que hay debajo, donde el alma se está moviendo.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Las tiradas sólo de Mayores también funcionan bien en los umbrales: cumpleaños, aniversarios, el giro del año, el inicio de un nuevo capítulo o el final de uno. El lenguaje arquetípico que hablan es el lenguaje de esos momentos. Son menos útiles para preguntas estrechamente prácticas — qué ponerse para la entrevista, si enviar el mensaje esta noche — donde las cartas Menores ofrecen mejor resolución.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Un buen uso más: cuando una lectura previa ha sido toda Arcanos Mayores. Eso es que las cartas te están diciendo que el asunto es más grande de lo que parece. Una tirada enfocada sólo de triunfos puede entonces profundizar en el mismo territorio en lugar de descartar la señal.
          </p>
        </div>

        {/* How to prepare */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Cómo preparar un mazo sólo de Mayores
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Toma tu mazo de tarot habitual y retira toda carta que no esté numerada del 0 al 21. Te quedarás con El Loco, El Mago, La Suma Sacerdotisa, La Emperatriz, El Emperador, El Hierofante, Los Enamorados, El Carro, La Fuerza, El Ermitaño, La Rueda de la Fortuna, La Justicia, El Colgado, La Muerte, La Templanza, El Diablo, La Torre, La Estrella, La Luna, El Sol, El Juicio y El Mundo — veintidós cartas en total.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Pon el resto del mazo a un lado, boca abajo, en su propio espacio tranquilo. Baraja los triunfos a fondo — se sentirán curiosamente finos comparados con el mazo completo, lo cual es parte del efecto de enfoque. Cuando la lectura termine, recombina el mazo y vuelve a barajar a fondo para que las lecturas futuras funcionen con normalidad.
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
          <Link href="/es/cartas" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Referencia</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Significados de las 78 cartas →</div>
          </Link>
          <Link href="/es/lectura-gratis" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Pruébalo ahora</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Lectura de tarot gratis →</div>
          </Link>
          <Link href="/es/tiradas/cruz-celta" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Tirada clásica</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Cruz Celta completa →</div>
          </Link>
          <Link href="/es/tiradas" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Más tiradas</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Todas las tiradas de tarot →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
