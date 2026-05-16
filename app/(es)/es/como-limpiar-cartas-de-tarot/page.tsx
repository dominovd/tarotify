import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cómo limpiar las cartas del tarot — 7 métodos que funcionan | TarotAxis',
  description: 'Libera la energía vieja y reinicia tu baraja de tarot con siete métodos prácticos de limpieza — desde la luz lunar y el aliento hasta la sal y el sonido. Aprende cuándo y cómo limpiar tus cartas.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/como-limpiar-cartas-de-tarot',
    languages: {
      'en': 'https://tarotaxis.com/how-to-cleanse-tarot-cards',
      'es': 'https://tarotaxis.com/es/como-limpiar-cartas-de-tarot',
      'x-default': 'https://tarotaxis.com/how-to-cleanse-tarot-cards',
    },
  },
  openGraph: {
    title: 'Cómo limpiar las cartas del tarot — 7 métodos que funcionan',
    description: 'Siete métodos prácticos para limpiar tu baraja de tarot — luz lunar, aliento, sal, sonido y más.',
    url: 'https://tarotaxis.com/es/como-limpiar-cartas-de-tarot',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cómo limpiar las cartas del tarot — 7 métodos que funcionan | TarotAxis',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cómo se limpian las cartas del tarot por primera vez?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Empieza con algo sencillo: golpea la baraja con los nudillos tres veces, después sostenla y exhala una intención clara sobre ella. Esto lleva menos de un minuto y reinicia la energía de la baraja antes de tu primera lectura. Si quieres una limpieza más profunda, puedes complementarla con luz lunar o con un cristal encima.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Hace falta limpiar las cartas del tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No es estrictamente necesario, pero la mayoría de lectores nota que limpiar la baraja ayuda a que las lecturas se sientan más claras, sobre todo después de un uso intenso o de que otra persona la haya manipulado. Piénsalo como un reinicio, no como un requisito ritual. Si tus lectures se sienten certeras y claras, tu enfoque actual está funcionando.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se limpian las cartas del tarot sin salvia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hay varias alternativas eficaces: luz lunar durante la noche, colocar una selenita o un cuarzo transparente sobre la baraja, golpear tres veces con los nudillos, sonido (campana o cuenco tibetano) o aliento intencionado. Todas funcionan sin humo ni materiales quemados.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se pueden limpiar las cartas del tarot con sal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí — rodea la baraja (en su caja o bolsa, sin contacto directo con las cartas) con sal marina durante 24 horas. Es uno de los métodos de limpieza más a fondo. Evita que la sal suelta toque las cartas directamente, porque puede rayarlas o deformarlas.',
      },
    },
  ],
}

const methods = [
  {
    title: 'Luz lunar',
    body: 'Deja la baraja boca abajo bajo la luz de la luna toda la noche — un alféizar de ventana sirve perfectamente. La luna llena es la elección tradicional, pero cualquier fase es eficaz. Uno de los métodos más suaves y menos invasivos, no requiere nada más que paciencia y una noche despejada.',
  },
  {
    title: 'Aliento e intención',
    body: 'Sostén la baraja con ambas manos, toma aire lentamente y exhala de forma deliberada sobre las cartas mientras mantienes una intención clara de limpiar y reiniciar. Sencillo, se puede hacer en cualquier lugar y lleva unos 30 segundos. La especificidad de tu intención importa más que la técnica en sí.',
  },
  {
    title: 'Golpear la baraja',
    body: 'Golpea la baraja tres veces con el nudillo. Un reinicio energético rápido que muchos lectores profesionales emplean entre clientes. Sorprendentemente eficaz como reset entre lecturas — la interrupción abrupta parece ayudar a marcar el límite entre una sesión y la siguiente.',
  },
  {
    title: 'Humo (salvia, palo santo o incienso)',
    body: 'Pasa la baraja lentamente por el humo de salvia, palo santo o incienso ardiendo. Es un método de limpieza tradicional presente en muchas culturas — la salvia blanca y el palo santo, en particular, proceden de tradiciones indígenas americanas; si los usas, hazlo con respeto por su origen y considera fuentes de origen ético. Practica en un espacio ventilado y deja que el humo fluya por todos los lados de la baraja en lugar de concentrarlo en una zona.',
  },
  {
    title: 'Cristales encima',
    body: 'Coloca un cristal limpiador — cuarzo transparente, selenita o turmalina negra — sobre la baraja toda la noche. La selenita es especialmente popular porque es uno de los pocos cristales que no necesita ser limpiado a su vez. Guarda el cristal con cuidado para que no raye la superficie de las cartas.',
  },
  {
    title: 'Sonido',
    body: 'Sostén la baraja cerca de un cuenco tibetano, una campana o un diapasón y deja que la vibración la atraviese. La limpieza por sonido es rápida y a fondo: alcanza todas las cartas simultáneamente en lugar de exigir un tratamiento superficie por superficie. Cualquier tono sostenido y resonante hace el trabajo.',
  },
  {
    title: 'Enterrarla en sal',
    body: 'Rodea la baraja — en su caja o bolsa, sin contacto directo con las cartas — con sal marina durante 24 horas. El método más a fondo disponible; muy adecuado para barajas que se sienten muy usadas, atascadas o que han pasado por muchas manos. Retírala y elimina toda la sal por completo antes de volver a usarla.',
  },
]

export default function ComoLimpiarCartasDeTarotPage() {
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
        <span style={{ color: 'var(--gold)' }}>Cómo limpiar las cartas del tarot</span>
      </nav>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.2em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Cuidado de la baraja
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '1rem', lineHeight: 1.25 }}>
          Cómo limpiar las cartas del tarot
        </h1>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.95rem' }}>
          Limpiar una baraja de tarot consiste en reiniciar su energía tras un uso intenso, después de que otra persona la haya manipulado o cuando las lecturas se sienten confusas o poco claras. Piénsalo como limpiar la caché — la baraja sigue trabajando con las mismas cartas, pero sin las impresiones residuales de sesiones anteriores. También es un ritual útil para fijar la intención antes de una lectura importante.
        </p>
      </div>

      {/* Section: When to Cleanse */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Cuándo limpiar la baraja
        </h2>
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 13, padding: '1.25rem 1.4rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            No hay un calendario fijo — limpia cuando lo sientas necesario. Situaciones habituales: cuando estrenas una baraja; después de leer para otra persona; cuando las lecturas empiezan a sentirse confusas, repetitivas o curiosamente fuera de tono; después de una sesión especialmente intensa o cargada emocionalmente; y en luna nueva o al comienzo de una nueva estación como reinicio rutinario. Cualquiera de estas es una señal razonable.
          </p>
        </div>
      </section>

      {/* Section: Seven Methods */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Siete métodos de limpieza
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '1rem' }}>
          {methods.map(({ title, body }, i) => (
            <div key={title} style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.65rem', marginBottom: '.65rem' }}>
                <div style={{ flexShrink: 0, width: 26, height: 26, borderRadius: '50%', background: 'rgba(201,168,76,.12)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.75rem' }}>
                  {i + 1}
                </div>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem' }}>{title}</div>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section: How Often */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          ¿Con qué frecuencia hay que limpiar?
        </h2>
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 13, padding: '1.25rem 1.4rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            Depende del uso que le des a la baraja. Los lectores habituales suelen golpear la baraja o exhalar sobre ella antes de cada sesión, hacer una limpieza con luz lunar una vez al mes y una limpieza completa — sal o humo — cada pocos meses. No hay una regla. Limpia cuando las lecturas se sientan fuera de tono, después de que otra persona maneje la baraja o simplemente cuando lo sientas. Tu propio criterio sobre cuándo la baraja necesita un reset es una guía fiable.
          </p>
        </div>
      </section>

      {/* Section: Does Cleansing Damage Cards */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          ¿La limpieza daña las cartas?
        </h2>
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 13, padding: '1.25rem 1.4rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            La mayoría de los métodos son completamente seguros. Algunas cosas que evitar: no dejes que las cartas entren en contacto con humedad, incluida la sal mojada. Mantén las cartas lejos de llamas directas. Guarda los cristales que uses de forma que no rayen la superficie. La limpieza con humo es adecuada para casi todos los acabados y no afecta a las imágenes impresas. Ninguno de estos métodos altera físicamente las cartas de forma relevante cuando se aplican con sentido común.
          </p>
        </div>
      </section>

      {/* Related guides */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Guías relacionadas
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
          {[
            { name: 'Cómo leer el tarot', href: '/es/como-leer-tarot', use: 'La guía completa para principiantes' },
            { name: 'Cómo barajar el tarot', href: '/es/como-barajar-tarot', use: 'Cinco técnicas y cómo barajar con intención' },
            { name: 'Tarot para principiantes', href: '/es/tarot-para-principiantes', use: 'Tus primeros pasos con la baraja — un mes guiado' },
          ].map(({ name, href, use }) => (
            <Link key={href} href={href} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', padding: '.9rem 1.1rem', background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 10, textDecoration: 'none', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem' }}>{name}</span>
              <span style={{ color: 'var(--muted)', fontSize: '.8rem' }}>{use}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <Link href="/es/como-leer-tarot" style={{ padding: '.8rem 1.6rem', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.35)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Aprender a leer el tarot →
        </Link>
        <Link href="/es/lectura-gratis" style={{ padding: '.8rem 1.6rem', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Probar una lectura gratis →
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
