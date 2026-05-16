import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sombra y luz — Tirada diaria de dos cartas | TarotAxis',
  description: 'Una práctica diaria de tarot con dos cartas: una para la sombra, otra para la luz. Un ritual matutino honesto que reconoce ambas caras del día antes de empezar.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/carta-del-dia/sombra-y-luz',
    languages: {
      'en': 'https://tarotaxis.com/daily/shadow-and-light',
      'es': 'https://tarotaxis.com/es/carta-del-dia/sombra-y-luz',
      'x-default': 'https://tarotaxis.com/daily/shadow-and-light',
    },
  },
  openGraph: {
    title: 'Sombra y luz — Tirada diaria de dos cartas de tarot',
    description: 'Empareja sombra y luz en una tirada diaria de dos cartas. Reflexión matutina honesta que evita el bypass espiritual.',
    url: 'https://tarotaxis.com/es/carta-del-dia/sombra-y-luz',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'Sombra',
    desc: 'Lo que pide atención hoy. La verdad incómoda, la parte de ti que ha estado esperando en silencio a ser vista, la fricción que — si se ignora — se filtrará por otro lado. La carta de la sombra no es una mala noticia. Es la noticia honesta.',
  },
  {
    num: 2,
    name: 'Luz',
    desc: 'Lo que te sostiene hoy. El recurso en el que puedes apoyarte, el regalo que ya está presente, la energía que quiere expresarse. La carta de la luz te muestra dónde estás silenciosamente sostenida — a menudo de maneras que has dejado de notar.',
  },
]

const PROMPTS = [
  '¿Qué me está pidiendo reconocer la carta de la sombra que preferiría no nombrar?',
  '¿En qué parte de mi cuerpo siento hoy la carta de la sombra? ¿Qué quiere?',
  '¿Cómo puede sostenerme activamente la carta de la luz mientras me siento con la sombra?',
  'Si honrara ambas cartas por igual hoy, ¿qué cambiaría en mi forma de transitar el día?',
  '¿Hay alguna relación, decisión o hábito donde este emparejamiento ya me resulta familiar?',
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una tirada de tarot de sombra y luz?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada de sombra y luz es una práctica diaria de dos cartas en la que la primera representa lo que pide atención o sanación hoy (la sombra) y la segunda representa lo que te sostiene, te nutre o te da recursos (la luz). Es una alternativa más honesta a una sola carta positiva diaria, porque te pide reconocer tanto lo incómodo como lo útil.',
      },
    },
    {
      '@type': 'Question',
      name: '¿A qué hora del día conviene hacer una tirada de sombra y luz?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lo ideal es a primera hora de la mañana, antes de que el teléfono, el correo o las noticias tiren de tu atención hacia afuera. El sentido de la práctica es fijar una base honesta para el día, y eso es más difícil una vez que ya has absorbido la urgencia de otras personas. Cinco minutos tranquilos con las cartas y un diario son suficientes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué se diferencia esto de una carta diaria normal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una sola carta diaria te da un tema para sostener. Una tirada de sombra y luz te da dos hilos que están deliberadamente en tensión. El emparejamiento evita el bypass espiritual — el hábito de tirar cartas solo en busca de afirmación. Ves tanto lo que el día te pide enfrentar como lo que tienes disponible para encontrarlo, y eso suele producir una reflexión más honesta.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo usar cartas invertidas en una tirada de sombra y luz?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, y muchas lectoras encuentran las inversiones especialmente útiles en esta práctica. Una carta invertida en la posición de sombra puede señalar algo bloqueado, internalizado o reconocido a medias. Una carta invertida en la posición de luz puede sugerir un recurso presente pero infrautilizado. Si normalmente no lees inversiones, puedes hacer esta tirada solo con cartas del derecho.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Y si la carta de la sombra me asusta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las cartas clásicas "que dan miedo" — la Torre, la Muerte, el Diez de Espadas, el Diablo — casi siempre se leen con más suavidad en un contexto diario que en una tirada sobre una gran pregunta vital. En una lectura diaria, suelen señalar una energía pasajera, un patrón a observar o una atmósfera emocional, más que un desastre literal. Lee la carta de la luz junto a ella y pregúntate qué recurso se te está dando para encontrarte con el día.',
      },
    },
  ],
}

export default function SombraYLuzPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/es/carta-del-dia" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Carta del Día</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Sombra y luz</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>☯</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Sombra y luz — Tarot diario
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
            Una práctica matutina de dos cartas. Una para la sombra que pide atención, otra para la luz que te sostiene. El chequeo diario completo — no el pulido.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Sobre esta práctica
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            La mayoría de las tiradas diarias de tarot son discretamente optimistas. Sacas una carta, lees su significado del derecho, buscas el lado positivo y entras al día con una frase vagamente alentadora en el bolsillo. Es un ritual agradable, pero suele dejar fuera la mitad de lo que en realidad está ocurriendo dentro de ti.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            La tirada de sombra y luz es la corrección. Sacas dos cartas. La primera nombra la parte del día que pide honestidad — una tensión, una incomodidad, un patrón, eso que preferirías no mirar. La segunda nombra el recurso — el apoyo, el regalo, la energía que ya está de tu lado. Las lees juntas, y la verdad del día se asienta en algún punto entre ambas.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Es la práctica para cualquiera que haya notado que fingir que todo está bien por la mañana no hace, de hecho, que el día transcurra con más fluidez. Honrar tanto la sombra como la luz es lo que convierte una carta diaria en un verdadero chequeo, y no en un cliché de autoayuda.
          </p>
        </div>

        {/* How to do it */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '1rem' }}>
            Cómo hacer la tirada
          </h2>
          <ol style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', paddingLeft: '1.2rem', margin: 0 }}>
            <li style={{ marginBottom: '.6rem' }}>Siéntate en un lugar tranquilo durante dos o tres minutos antes de tomar el mazo. Nota la textura real de tu mañana — tu energía, tu humor, los pensamientos inacabados de ayer.</li>
            <li style={{ marginBottom: '.6rem' }}>Baraja sosteniendo una intención sencilla: <em>muéstrame la sombra y la luz de hoy.</em> Sin pregunta específica, sin buscar una respuesta concreta.</li>
            <li style={{ marginBottom: '.6rem' }}>Saca dos cartas. La primera es la sombra. La segunda es la luz. Colócalas lado a lado.</li>
            <li style={{ marginBottom: '.6rem' }}>Lee primero la carta de la sombra. Resiste el impulso de suavizarla. Pregúntate qué está nombrando, aunque nombrarlo sea incómodo.</li>
            <li style={{ marginBottom: '.6rem' }}>Después lee la carta de la luz. ¿Qué recurso señala? ¿Dónde vive ya en tu día hoy — no en teoría, sino en la práctica?</li>
            <li>Escribe una breve entrada de diario. Tres o cuatro frases bastan. La práctica se profundiza notablemente con incluso una reflexión escrita breve.</li>
          </ol>
        </div>

        {/* Position meanings */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            Las dos posiciones
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Cada posición lleva una pregunta distinta detrás. Tenlas presentes mientras lees las cartas.
          </p>
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

        {/* Journal prompts */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Consignas de diario
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontSize: '.88rem', margin: '0 0 1rem' }}>
            Elige una o dos — no hace falta responder a todas. El objetivo es aterrizar las cartas en tu día real, no producir una entrada perfecta.
          </p>
          <ul style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.9rem', paddingLeft: '1.2rem', margin: 0 }}>
            {PROMPTS.map(p => <li key={p} style={{ marginBottom: '.5rem' }}>{p}</li>)}
          </ul>
        </div>

        {/* When to use this variant */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Cuándo elegir esta variante
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Recurre a la tirada de sombra y luz en los días en que una sola carta se siente demasiado fina. Si notas un murmullo bajo de evitación — algo discretamente sin procesar, un sentimiento que vienes rodeando — la estructura de dos cartas lo sacará a la superficie sin forzar la cuestión.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            También es adecuada para etapas de transición: volver de vacaciones, el final de un proyecto, los días posteriores a una conversación difícil. Momentos en que la superficie parece bien pero algo debajo está moviéndose. La carta diaria estándar es una hermosa compañía cotidiana. Esta es la práctica en la que vas creciendo cuando estás lista para ser más honesta contigo misma antes de que empiece el día.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
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
          <Link href="/es/carta-del-dia" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Carta de hoy</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Tarot diario estándar →</div>
          </Link>
          <Link href="/es/lectura-gratis" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Pruébalo ahora</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Lectura de tarot gratis →</div>
          </Link>
          <Link href="/es/cartas" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Significados</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Las 78 cartas →</div>
          </Link>
          <Link href="/es/diario-de-tarot" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Lleva registro</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Diario de tarot →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
