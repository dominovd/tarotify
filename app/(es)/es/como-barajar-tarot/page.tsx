import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cómo barajar el tarot — 5 métodos explicados | TarotAxis',
  description: 'Aprende cinco formas de barajar las cartas del tarot — desde el barajado americano hasta el de montones — además de cómo fijar tu intención, qué hacer con las cartas caídas y si usar o no las invertidas.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/como-barajar-tarot',
    languages: {
      'en': 'https://tarotaxis.com/how-to-shuffle-tarot',
      'es': 'https://tarotaxis.com/es/como-barajar-tarot',
      'x-default': 'https://tarotaxis.com/how-to-shuffle-tarot',
    },
  },
  openGraph: {
    title: 'Cómo barajar el tarot — 5 métodos explicados',
    description: 'Cinco formas de barajar las cartas del tarot, más cómo fijar tu intención, qué hacer con las cartas caídas y si usar las invertidas.',
    url: 'https://tarotaxis.com/es/como-barajar-tarot',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cómo barajar el tarot — 5 métodos explicados | TarotAxis',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cómo se barajan correctamente las cartas del tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cualquier método que te resulte natural y que permita una mezcla genuina. La forma "correcta" de barajar es aquella que realmente vas a usar de forma constante antes de las lecturas. La intención que pones detrás del barajado importa tanto como la técnica.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuántas veces hay que barajar las cartas del tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hasta que te sientas listo. Algunos lectores usan un número fijo como 3 o 7; otros barajan hasta que una carta salta o hasta que la pregunta se les presenta del todo en la mente. No hay un número universalmente correcto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Hay que barajar las cartas del tarot de una forma concreta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. El barajado es personal. Algunos lectores insisten en el americano; otros prefieren el riffle; muchos combinan métodos. Lo que importa es que te involucres genuinamente con el proceso en lugar de cumplir el trámite.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puede otra persona barajar tus cartas del tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Si estás leyendo para otra persona, que ella baraje — o como mínimo corte la baraja — es una práctica habitual. Sus manos llevan su energía a las cartas. Algunos lectores barajan primero ellos mismos y luego pasan la baraja al consultante para que corte.',
      },
    },
  ],
}

const methods = [
  {
    n: '1',
    name: 'Barajado americano (overhand)',
    body: 'El método más común: sostén la baraja en una mano y usa la otra para transferir pequeños paquetes de cartas desde atrás hacia delante, de forma repetida. Es suave con las cartas y fácil de hacer mientras mantienes tu pregunta en mente. Como la mezcla es gradual, encaja con los lectores que prefieren un enfoque más lento y meditativo de la preparación.',
  },
  {
    n: '2',
    name: 'Barajado riffle',
    body: 'Divide la baraja en dos mitades aproximadamente iguales e intercala las cartas soltándolas alternativamente con cada pulgar. Rápido y eficaz — un solo riffle consigue más mezcla que varias pasadas del americano. La contrapartida es que con el tiempo puede doblar o marcar las cartas. Hazlo sobre una superficie blanda y evítalo con barajas delicadas u oversize.',
  },
  {
    n: '3',
    name: 'Barajado por montones',
    body: 'Reparte las cartas una a una en varios montones boca abajo — normalmente entre tres y siete — y después apila los montones en cualquier orden. Repite el proceso una o dos veces. Es metódico y asegura una mezcla a fondo sin estresar físicamente las cartas. Muchos lectores encuentran que el ritmo deliberado les ayuda a enfocar la pregunta.',
  },
  {
    n: '4',
    name: 'Extender y mezclar',
    body: 'Coloca las 78 cartas boca abajo sobre una superficie plana y arremolínalas libremente con ambas manos — una mezcla caótica e intuitiva. Muy táctil, este método atrae a los lectores que quieren involucrar todo el cuerpo en el proceso. Una vez mezcladas, recoge las cartas formando un montón. Funciona mejor sobre un paño o un fieltro que permita deslizar las cartas con facilidad.',
  },
  {
    n: '5',
    name: 'Corte de la baraja',
    body: 'Divide la baraja en tres montones boca abajo de forma intuitiva — sin contar — y vuelve a reunirlos en el orden que elijas. Rara vez se usa como barajado autónomo; es más eficaz como paso final tras uno de los métodos anteriores. Muchos lectores también lo emplean cuando otra persona corta la baraja antes de la lectura.',
  },
]

export default function ComoBarajarTarotPage() {
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
        <span style={{ color: 'var(--gold)' }}>Cómo barajar el tarot</span>
      </nav>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.2em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Guía de técnica
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '1rem', lineHeight: 1.25 }}>
          Cómo barajar las cartas del tarot
        </h1>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.95rem' }}>
          Barajar no es solo un paso mecánico para mezclar la baraja — es la forma en que limpias los residuos de lecturas anteriores y llevas tu propio enfoque a las cartas. El acto de barajar le da a tu mente un ancla física para la pregunta que sostienes. No hay un único método correcto: el mejor barajado es el que hagas con constancia, con atención genuina, antes de cada lectura.
        </p>
      </div>

      {/* Section 1: Five Methods */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
          Cinco métodos de barajado
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {methods.map(({ n, name, body }) => (
            <div key={n} style={{ display: 'flex', gap: '1rem', background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.12)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem', marginTop: 2 }}>
                {n}
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.4rem' }}>{name}</div>
                <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: How Many Times */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          ¿Cuántas veces deberías barajar?
        </h2>
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            No hay un número mágico. La guía más práctica es tu propia disposición: baraja hasta que la pregunta con la que trabajas se forme con claridad en tu mente, o hasta que te sientas lo bastante asentado como para sacar. En la práctica, la mayoría de los lectores baraja entre 30 y 60 segundos. Algunos trabajan con un número fijo — tres pasadas o siete — como estructura ritual que les ayuda a entrar en un estado de enfoque. Lo que importa es la intención constante, no la técnica concreta ni el conteo.
          </p>
        </div>
      </section>

      {/* Section 3: Reversals */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          ¿Deberías invertir cartas mientras barajas?
        </h2>
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            Si usas las invertidas en tu práctica, sí — permite que las cartas se den la vuelta de forma natural durante el barajado sin corregirlas. Rotar una parte de la baraja 180 grados antes de empezar es una forma de introducir las invertidas deliberadamente. Si no las usas, mantén todas las cartas orientadas en la misma dirección durante todo el proceso. Ningún enfoque es más válido que el otro; la elección depende por completo de tu estilo de lectura.
          </p>
        </div>
      </section>

      {/* Section 4: Dropped Cards */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Qué hacer con las cartas que se caen
        </h2>
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            Si una carta se cae de la baraja mientras barajas, no la devuelvas automáticamente y sigas como si nada. Muchos lectores tratan una carta que salta o se escapa de la baraja como especialmente significativa — en cierto sentido se ha presentado sin que se le pidiera. Puedes incorporarla a tu lectura como carta adicional, dejarla a un lado como aclaratoria de tu tirada, o simplemente tomar nota y devolverla a su sitio. La clave es no descartarla sin considerar al menos hacia qué podría estar apuntando.
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
            { name: 'Cómo leer el tarot', href: '/es/como-leer-tarot', use: 'La guía completa para principiantes — estructura, palos y tu primera lectura' },
            { name: 'Cómo limpiar las cartas del tarot', href: '/es/como-limpiar-cartas-de-tarot', use: 'Siete métodos prácticos — luz lunar, humo, sal y más' },
            { name: 'Tarot para principiantes', href: '/es/tarot-para-principiantes', use: 'Un mes guiado para empezar con buen pie' },
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
        <Link href="/es/lectura-gratis" style={{ padding: '.8rem 1.6rem', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.35)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Empezar una lectura gratis →
        </Link>
        <Link href="/es/como-leer-tarot" style={{ padding: '.8rem 1.6rem', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Aprender a leer el tarot →
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
