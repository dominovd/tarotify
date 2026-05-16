import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada Atracción Amorosa — Lectura de 5 Cartas para Manifestar el Amor | TarotAxis',
  description: 'Una tirada de tarot de atracción amorosa de 5 cartas para personas solteras listas para invitar al amor real. Lee lo que estás bloqueando, la creencia a actualizar y la señal de que el amor está cerca.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/pareja/atraccion-amorosa',
    languages: {
      'en': 'https://tarotaxis.com/spreads/partner/love-attraction',
      'es': 'https://tarotaxis.com/es/tiradas/pareja/atraccion-amorosa',
      'x-default': 'https://tarotaxis.com/spreads/partner/love-attraction',
    },
  },
  openGraph: {
    title: 'Tirada Atracción Amorosa — Lectura de Trabajo Interior para Manifestar',
    description: 'Cinco cartas para personas solteras centradas en el trabajo interior que permite que el amor real llegue — sin manipular a ninguna persona en concreto.',
    url: 'https://tarotaxis.com/es/tiradas/pareja/atraccion-amorosa',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  { num: 1, name: 'A Quién Estoy Pidiendo Que el Amor Encuentre', desc: 'El yo que estás presentando actualmente al campo del amor — lo que tu energía está emitiendo honestamente, debajo de la versión de ti que aparece en las apps de citas.' },
  { num: 2, name: 'Lo Que Estoy Bloqueando Sin Querer', desc: 'La persiana de la que no eres consciente. El reflejo que se encoge cuando el amor se acerca, o la historia que te dice todavía no, o yo no, o esto no.' },
  { num: 3, name: 'La Creencia Que Necesita Actualizarse', desc: 'La vieja idea sobre el amor que ha dirigido silenciosamente el espectáculo — normalmente heredada, a menudo anticuada, a veces heredada de alguien que nunca tuvo lo que estás buscando.' },
  { num: 4, name: 'Qué Encarnar Ahora', desc: 'La cualidad que las cartas te piden que vivas. No representar — encarnar. La forma de ser que permite al amor reconocerte y caminar hacia ti.' },
  { num: 5, name: 'La Señal de Que el Amor Está Cerca', desc: 'La pista que el universo enviará para que no la pases por alto. A veces un sentimiento, a veces un tipo particular de persona apareciendo, a veces una repentina facilidad donde había lucha.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Puede una tirada de tarot ayudarme a manifestar el amor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada de tarot no puede invocar a una persona específica a tu puerta — y una lectura que lo prometa se ignora mejor. Lo que una tirada de atracción sí puede hacer es iluminar las condiciones internas que estás emitiendo y ayudarte a ajustar lo que está en tus manos ajustar. El amor responde a quién estás siendo, no a lo que estás exigiendo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Esta tirada es lo mismo que un ritual de manifestación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Es una lectura, no un trabajo. No hay sigilo, vela o persona específica como objetivo. La tirada se parece más a un espejo — una forma de mirar tu propia disposición para que el amor, cuando llegue, no sea bloqueado por algo que podrías haber visto y suavemente cambiado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si la posición 2 (lo que estoy bloqueando) muestra algo doloroso?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trátalo con ternura. El bloqueo casi siempre es una parte de ti que aprendió a protegerte en circunstancias difíciles — merece gratitud, no castigo. Reconocerlo suele ser suficiente para empezar a ablandarlo. Algunos bloqueos se disuelven en el momento en que se nombran; otros piden un trabajo más lento.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tardará el amor en llegar después de una lectura así?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No hay un calendario que las cartas puedan dar honestamente. El amor no funciona por meses de calendario. Lo que cambia tras esta lectura es tu relación contigo mismo/a — y en el momento en que esa relación se vuelve más cálida, el campo a tu alrededor se desplaza. A veces el amor llega en semanas; a veces lleva una temporada o más. El trabajo en sí es el punto.',
      },
    },
  ],
}

export default function AtraccionAmorosaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/es/tiradas" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Tiradas</Link>
          <span style={{ opacity: .4 }}>›</span>
          <Link href="/es/tiradas/pareja" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Pareja</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Atracción Amorosa</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>🌹</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Tirada Atracción Amorosa
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
            Una tirada de 5 cartas para personas solteras listas para hacer el verdadero trabajo interior que permite la llegada del amor. Sin apuntar a personas específicas — solo una mirada honesta a lo que estás emitiendo.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Sobre Esta Tirada
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            La mayor parte del trabajo de atracción amorosa se desvía en el momento en que se vuelve específico. La versión que promete una persona nombrada, una fecha fija o un resultado garantizado casi siempre decepciona — y a menudo desempodera en silencio. Esta tirada toma otro camino. No le pide al universo que entregue a alguien. Te pide que mires el amor que ya está tratando de encontrarte y la puerta que tal vez no te das cuenta de que está entreabierta.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Antes de sacar las cartas, tómate un momento para ser honesto/a contigo mismo/a sobre lo que realmente quieres. No una lista de características, sino un sentimiento — la cualidad particular del amor dentro del cual estás listo/a para vivir. Luego baraja con suavidad. Las cartas funcionan mejor cuando se les acerca con la verdad.
          </p>
        </div>

        {/* Layout */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            La Disposición de 5 Cartas
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Coloca las cinco cartas en una fila. Las tres primeras miran dónde estás ahora; las dos últimas miran el camino hacia adelante.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {[1, 2, 3, 4, 5].map(n => (
              <div key={n} style={{ width: 52, height: 80, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>
                {n}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS.map(({ num, name, desc }) => (
              <div key={num} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.1rem', background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12 }}>
                <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem' }}>{num}</div>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', marginBottom: '.3rem' }}>{name}</div>
                  <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interpreting */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Cómo Leer Tu Tirada
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Lee las posiciones 1, 2 y 3 como una sola frase sobre tu momento presente: este es a quién estoy pidiendo que el amor encuentre, esto es lo que estoy bloqueando sin querer, esta es la creencia que corre por debajo. A menudo esa frase es incómoda de decir en voz alta. Esa incomodidad es la puerta.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Presta especial atención a las cartas invertidas en las posiciones 2 y 3. Las inversiones aquí a menudo sugieren que un bloqueo o una creencia se está debilitando por sí solo — vas a medio camino de soltarlo. Las cartas difíciles del derecho normalmente apuntan a algo que aún necesita tu atención consciente.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            La posición 4 se lee mejor como una práctica diaria más que como una gran transformación. Cualquier carta que aterrice aquí, pregúntate cómo sería encarnar esta cualidad durante las próximas dos semanas. La posición 5 se convierte entonces en una especie de marcador — una señal a observar. Cuando llegue, lo sabrás. Hasta entonces, tu único trabajo es seguir viviendo la posición 4.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
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
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <Link href="/es/tiradas/pareja" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Más tiradas</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Todas las tiradas de pareja →</div>
          </Link>
          <Link href="/es/lectura-gratis" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Pruébalo ahora</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Lectura de tarot gratis →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
