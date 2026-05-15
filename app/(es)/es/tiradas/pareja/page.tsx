import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tiradas de Tarot de Pareja y Relación — Lecturas Honestas de Conexión | TarotAxis',
  description: 'Seis tiradas dedicadas para citas, alma gemela, compatibilidad y crecimiento de la relación. Disposiciones honestas y con los pies en la tierra que se centran en el campo relacional, no en el destino.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/pareja',
    languages: {
      'en': 'https://tarotaxis.com/spreads/partner',
      'es': 'https://tarotaxis.com/es/tiradas/pareja',
      'x-default': 'https://tarotaxis.com/spreads/partner',
    },
  },
  openGraph: {
    title: 'Tiradas de Tarot de Pareja y Relación',
    description: 'Tiradas de citas, alma gemela, compatibilidad y crecimiento para quienes buscan una conexión genuina — sin manipulación ni certezas falsas.',
    url: 'https://tarotaxis.com/es/tiradas/pareja',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const SPREADS = [
  { slug: 'conexion-en-citas', title: 'Tirada Conexión en Citas', cards: '5 cartas', desc: 'Claridad en las primeras citas — qué se está intercambiando y si conviene continuar.' },
  { slug: 'crecimiento-de-relacion', title: 'Tirada Crecimiento de la Relación', cards: '6 cartas', desc: 'Para parejas establecidas que quieren profundizar el vínculo y encontrar la siguiente frontera.' },
  { slug: 'descubrir-alma-gemela', title: 'Tirada Descubrir el Alma Gemela', cards: '7 cartas', desc: 'Una mirada honesta a la pregunta del alma gemela — en quién te estás convirtiendo y quién te encontrará.' },
  { slug: 'alineacion-de-pareja', title: 'Tirada Alineación con la Pareja', cards: '5 cartas', desc: 'Examen honesto de compatibilidad — valores, alineación y diferencias significativas.' },
  { slug: 'atraccion-amorosa', title: 'Tirada Atracción Amorosa', cards: '5 cartas', desc: 'Tirada de trabajo interior para personas solteras listas para invitar al amor real a su vida.' },
  { slug: 'guia-de-citas', title: 'Tirada Guía para Citas', cards: '4 cartas', desc: 'Ayuda situacional rápida cuando estás atascado en un bucle de citas.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una tirada de tarot de pareja?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada de tarot de pareja es una disposición de cartas diseñada para explorar la energía entre dos personas — el campo relacional, el intercambio y la dinámica — en lugar de predecir un resultado fijo. Las tiradas de pareja se diferencian de las tiradas generales del amor porque se centran en la conexión en el momento presente, incluida la parte que tú estás aportando.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué se diferencia una tirada de pareja de una tirada del amor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las tiradas del amor suelen mirar el deseo, el anhelo, el romance o el destino. Las tiradas de pareja miran la relación real como algo vivo hecho por dos personas — qué aporta cada una, dónde se encuentran las energías y qué quiere crecer. Son más prácticas y más honestas, lo que las convierte en mejores herramientas para decisiones del mundo real.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puede una tirada de tarot decirme qué está pensando mi pareja?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tarot puede reflejar la energía que una persona está aportando a la conexión, pero no puede leer otra mente. Las lecturas de pareja más útiles tratan su carta como un espejo del campo relacional, no como una ventana hacia la otra persona. Si te encuentras intentando espiar a alguien, las cartas suelen redirigirte de vuelta a tu propia consciencia.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Con qué tirada de pareja debería empezar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Si estás en las primeras semanas saliendo con alguien, empieza con la tirada Conexión en Citas. Si estás en una relación comprometida y quieres profundizarla, prueba Crecimiento de la Relación. Si estás soltero/a y haciéndote las preguntas más grandes, las tiradas Descubrir el Alma Gemela o Atracción Amorosa te servirán. Guía para Citas es la mejor cuando simplemente necesitas un siguiente paso claro.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuán honesto/a necesito ser al leer una tirada de pareja?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Completamente honesto/a, sobre todo contigo mismo/a. Las tiradas de pareja funcionan mal si las abordas esperando confirmar lo que ya quieres creer. Las cartas reflejarán la verdad del campo — incluidas las partes de ti que tal vez prefieras pasar por alto. La lectura es más útil cuando le dejas sorprenderte.',
      },
    },
  ],
}

export default function TiradaParejaHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/es/tiradas" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Tiradas</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Pareja</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>💞</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Tiradas de Tarot de Pareja y Relación
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
            Seis disposiciones con los pies en la tierra para citas, compatibilidad, alma gemela y crecimiento de la relación — diseñadas para honrar el campo relacional, no para manipularlo.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Qué Hace Diferente a una Tirada de Pareja
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            La mayoría de las tiradas de tarot del amor se centran en el deseo — quién, cuándo, lo harán, lo sienten. Las tiradas de pareja toman otro ángulo. En lugar de pedir a las cartas que predigan un resultado, les piden que muestren la energía que actualmente se intercambia entre dos personas. La lectura se convierte en un espejo del campo relacional en vez de un pronóstico del destino.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Ese cambio transforma lo que es posible. Una tirada de pareja puede mostrarte qué estás aportando tú, qué está aportando la otra persona, dónde está el punto de encuentro y si la conexión está nutriendo genuinamente a ambos. También puede mostrarte la diferencia entre una conexión que es real y una que se mantiene viva por la esperanza, el anhelo o un dolor familiar.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Estas seis tiradas no se tratan de leer a tu pareja. Se tratan de leer la relación — lo que significa que siempre empiezan por ti.
          </p>
        </div>

        {/* Spread grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2.5rem' }}>
          {SPREADS.map(s => (
            <Link key={s.slug} href={`/es/tiradas/pareja/${s.slug}`} style={{ display: 'block', padding: '1.15rem 1.2rem', background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12, textDecoration: 'none' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.4rem' }}>{s.cards}</div>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.95rem', marginBottom: '.45rem' }}>{s.title}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
            </Link>
          ))}
        </div>

        {/* Approaching honestly */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Cómo Abordar las Lecturas de Relación con Honestidad
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            El error más común que las personas cometen en las lecturas de pareja es usar las cartas como una forma de escudriñar a la otra persona. Queremos saber si realmente nos ama, qué hace cuando no estamos cerca, si sus sentimientos han cambiado. Las cartas responderán a esas preguntas — pero las respuestas seguirán apuntándote de vuelta a ti, porque el único lugar honesto desde donde una lectura puede empezar es la energía que realmente puedes sentir e influir.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Una lectura de pareja con los pies en la tierra hace preguntas distintas. ¿Qué estoy aportando hoy a esta relación? ¿Qué parte de mí espera que las cartas me tranquilicen? ¿Qué ya sé pero no me he permitido decir en voz alta? Cuando lees así, las cartas se convierten en una herramienta para la autoconsciencia y no para la vigilancia — y la guía que recibes se vuelve genuinamente útil.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Ninguna de estas tiradas te dirá que alguien está destinado a ser tuyo, o que otra persona es la fuente de tu felicidad. Sí, sin embargo, te ayudarán a ver la conexión con claridad — y desde la claridad, cualquier buena decisión se vuelve posible.
          </p>
        </div>

        {/* When to use which */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '1rem' }}>
            Cuándo Usar Cada Tirada
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {[
              { when: 'Has tenido entre 2 y 6 citas con alguien y no sabes hacia dónde va', use: 'Conexión en Citas (5 cartas)' },
              { when: 'Estás en una pareja establecida y quieres encontrar la próxima capa de crecimiento', use: 'Crecimiento de la Relación (6 cartas)' },
              { when: 'Sigues preguntándote si alguien es tu alma gemela, o quieres prepararte para una', use: 'Descubrir el Alma Gemela (7 cartas)' },
              { when: 'Te gusta alguien y quieres evaluar honestamente si son compatibles', use: 'Alineación con la Pareja (5 cartas)' },
              { when: 'Estás soltero/a y quieres hacer el trabajo interior que invita al amor real', use: 'Atracción Amorosa (5 cartas)' },
              { when: 'Estás en medio de una situación y solo necesitas un siguiente paso claro', use: 'Guía para Citas (4 cartas)' },
            ].map((row, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '.3rem', padding: '1rem 1.1rem', background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12 }}>
                <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.6, margin: 0 }}>{row.when}</p>
                <p style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', margin: 0 }}>→ {row.use}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '1.1rem' }}>Preguntas Frecuentes</h2>
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          <Link href="/es/tiradas/amor" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Relacionado</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Tiradas de amor →</div>
          </Link>
          <Link href="/es/lectura-gratis" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Pruébalo</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Lectura gratis →</div>
          </Link>
          <Link href="/es/cartas" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Aprender</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Significados de cartas →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
