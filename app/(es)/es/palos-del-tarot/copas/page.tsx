import type { Metadata } from 'next'
import Link from 'next/link'
import { CARDS } from '@/lib/cards'
import { localizeCardSlug } from '@/lib/i18n/slugs'

export const metadata: Metadata = {
  title: 'Palo de Copas — Las 14 cartas, elemento y significados | TarotAxis',
  description: 'El palo de Copas en el tarot — elemento Agua, regente del amor, la emoción y la intuición. Las 14 cartas del As al Rey con palabras clave y significados.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/palos-del-tarot/copas',
    languages: {
      'en': 'https://tarotaxis.com/tarot-suits/cups',
      'es': 'https://tarotaxis.com/es/palos-del-tarot/copas',
      'x-default': 'https://tarotaxis.com/tarot-suits/cups',
    },
  },
  openGraph: {
    title: 'Palo de Copas — Las 14 cartas, elemento y significados',
    description: 'El palo de Copas — elemento Agua, amor y emoción. Las 14 cartas exploradas en profundidad.',
    url: 'https://tarotaxis.com/es/palos-del-tarot/copas',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const ES_NAMES: Record<string, string> = {
  'ace-of-cups': 'As de Copas',
  'two-of-cups': 'Dos de Copas',
  'three-of-cups': 'Tres de Copas',
  'four-of-cups': 'Cuatro de Copas',
  'five-of-cups': 'Cinco de Copas',
  'six-of-cups': 'Seis de Copas',
  'seven-of-cups': 'Siete de Copas',
  'eight-of-cups': 'Ocho de Copas',
  'nine-of-cups': 'Nueve de Copas',
  'ten-of-cups': 'Diez de Copas',
  'page-of-cups': 'Sota de Copas',
  'knight-of-cups': 'Caballero de Copas',
  'queen-of-cups': 'Reina de Copas',
  'king-of-cups': 'Rey de Copas',
}

const THEMES = [
  { title: 'Amor y conexión', text: 'El romance, la amistad y los lazos que unen un corazón con otro son el territorio natural de las Copas.' },
  { title: 'Sanación emocional', text: 'El duelo, el perdón y el lento trabajo de reparar la vida interior. Las Copas sostienen tanto la herida como la medicina.' },
  { title: 'Intuición y sueños', text: 'El saber silencioso que llega sin explicación. Las Copas rigen la sensibilidad psíquica y la vida simbólica de los sueños.' },
  { title: 'Familia y pertenencia', text: 'Vínculos de sangre, familia elegida y el calor de la comunidad. Las Copas hablan de dónde te sientes en casa.' },
  { title: 'Inspiración creativa', text: 'El arte y la belleza nacidos del sentimiento. El artista que crea desde el corazón trabaja en el elemento de las Copas.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué representa el palo de Copas en el tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El palo de Copas representa la vida interior — las emociones, el amor, la intuición, las relaciones, los sueños y la imaginación creativa. Regido por el elemento Agua, las Copas se ocupan de cómo se sienten las cosas más que de cómo se ven o de lo que logran. Cuando aparecen Copas en una lectura, se está preguntando por la situación en su nivel emocional. Hablan del romance, los lazos familiares, las amistades, la sanación emocional y la voz quieta y sabia del corazón.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Es el palo de Copas un palo positivo en el tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las Copas tienen una reputación generalmente suave y cálida porque muchas de sus cartas representan amor, alegría y conexión — el Dos de Copas, el Tres de Copas, el Nueve de Copas y el Diez de Copas son algunas de las imágenes más alegres de la baraja. Pero las Copas también contienen las aguas emocionales más oscuras del palo: el duelo del Cinco de Copas, la apatía del Cuatro, el engaño del Siete. Las Copas no son simplemente positivas — son el palo del espectro emocional completo, tanto la dulzura como el dolor.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué elemento se asocia a las Copas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las Copas corresponden al elemento Agua. El Agua es el elemento del sentimiento, la intuición y el inconsciente — aquello que fluye, refleja, profundiza y sueña. Astrológicamente, los signos de agua Cáncer, Escorpio y Piscis comparten la cualidad elemental de las Copas: sensibilidad emocional, percepción psíquica y una fuerte conexión con el mundo interior. Cuando ves un cáliz, un río que fluye o un estanque calmo en una imagen de tarot, estás mirando la simbología de las Copas aunque la carta pertenezca a otro palo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué significa tener muchas Copas en una lectura de tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cuando aparecen varias Copas en una sola tirada, la lectura es fundamentalmente emocional — sea cual sea la pregunta de superficie. Una tirada de carrera cargada de Copas pregunta en realidad cómo te sientes con tu trabajo, no qué hacer al respecto. Una tirada de relación llena de Copas confirma que la situación está genuinamente guiada por el corazón, para bien o para mal. Muchas Copas también pueden indicar que la intuición está especialmente clara ahora, que los sueños están trayendo mensajes, o que la sanación emocional es el asunto más urgente al que atender.',
      },
    },
  ],
}

export default function CopasSuitPage() {
  const cups = CARDS.filter(c => c.suit === 'cups')

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
        <Link href="/es/palos-del-tarot" style={{ color: 'var(--muted)' }}>Palos del Tarot</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Copas</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>🜄</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          El Palo de Copas
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Las Copas son las cartas del corazón — amor, emoción, intuición y vida interior. Regido por el elemento fluido del Agua, este palo sostiene todo el espectro del sentimiento, desde la dulzura de la nueva conexión hasta las profundidades del duelo y la sanación.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['14 cartas', 'Elemento Agua', 'Amor y emoción'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* About the suit */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Sobre el palo de Copas
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            El cáliz es uno de los objetos sagrados más antiguos de la cultura humana — el recipiente que sostiene lo precioso, la copa de comunión, el grial de la leyenda. El tarot hereda toda esta simbología. Una copa en este palo es el recipiente interior del corazón humano: lo que sentimos, lo que recibimos, lo que estamos dispuestos a derramar por otro. El elemento Agua que anima al palo es el elemento del flujo, de la profundidad, del reflejo. El agua toma la forma de aquello que la contiene, igual que el sentimiento toma la forma de la relación que lo convoca.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Las Copas rigen todo el ámbito de la vida interior — el amor en todas sus formas, la familia, la amistad, la intuición, los sueños, la imaginación, el inconsciente, la sanación emocional. Cuando una pregunta toca el corazón, las Copas hablarán. Son el palo que más quieres ver en una lectura de amor, el palo que da permiso para sentir profundamente en una lectura de duelo, y el palo que confirma un saber silencioso cuando la intuición está siendo dudada.
          </p>
          <p>
            Reconoces la energía de las Copas en una lectura por su suavidad y por su franqueza acerca del sentimiento. Una tirada cargada de Copas no te dejará permanecer en la cabeza — preguntará, una y otra vez, cuál es la verdad emocional aquí. Revelará el amor que aún está presente bajo una discusión, el anhelo bajo la ambición, el duelo bajo la prisa. La medicina de las Copas es el sentir honesto.
          </p>
        </div>
      </div>

      {/* Aces, Pips, Court */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          As, cartas numeradas y cartas de la corte
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Como todo palo, las Copas contienen un As, nueve cartas numeradas (del Dos al Diez) y cuatro cartas de la corte: la Sota, el Caballero, la Reina y el Rey. El As de Copas es la apertura — un nuevo comienzo emocional, un corazón recién servido. Las cartas numeradas trazan el despliegue de un viaje emocional: conexión en el Dos, celebración en el Tres, retraimiento en el Cuatro, duelo en el Cinco, y así sucesivamente hasta el Diez de Copas, que es la imagen del palo de la plenitud emocional completa.
          </p>
          <p>
            Las cuatro cartas de la corte representan la madurez emocional en distintas etapas. La Sota de Copas es la principiante sensible — abierta, soñadora, a veces sobrepasada. El Caballero de Copas es el romántico en una búsqueda, siguiendo al corazón a donde sea que le lleve. La Reina de Copas es la maestría intuitiva: lo siente todo, lo sostiene con gracia y ofrece compasión sin perderse a sí misma. El Rey de Copas es el anciano emocionalmente sabio, calmo en la tormenta, gobernando el océano interior en lugar de ser arrastrado por él.
          </p>
        </div>
      </div>

      {/* All 14 cards */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '.06em' }}>
          Las 14 cartas de Copas
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '.75rem' }}>
          {cups.map(c => (
            <Link key={c.slug} href={`/es/cartas/${localizeCardSlug(c.slug, 'es')}`} style={{ display: 'block', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem', textDecoration: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '.5rem', marginBottom: '.4rem' }}>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', letterSpacing: '.03em' }}>{ES_NAMES[c.slug] ?? c.name}</div>
                <span style={{ flexShrink: 0, padding: '.15rem .55rem', borderRadius: 20, fontSize: '.6rem', background: 'rgba(201,168,76,.1)', color: 'var(--gold)', fontFamily: "'Cinzel',serif", letterSpacing: '.06em' }}>{c.number}</span>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '.76rem', lineHeight: 1.55, margin: 0, fontStyle: 'italic' }}>
                {c.kw_up.slice(0, 3).join(' · ')}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Common Themes */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Temas frecuentes en Copas
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '.75rem' }}>
          {THEMES.map(t => (
            <div key={t.title} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.06em', color: 'var(--gold)', marginBottom: '.45rem' }}>{t.title}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.82rem', lineHeight: 1.6, margin: 0 }}>{t.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Preguntas frecuentes
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Explora los otros tres palos</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Copas es uno de cuatro. Continúa tu viaje a través de los Arcanos Menores con los otros palos elementales.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/palos-del-tarot/pentaculos" style={{ padding: '.85rem 1.5rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            Pentáculos · Tierra
          </Link>
          <Link href="/es/palos-del-tarot/espadas" style={{ padding: '.85rem 1.5rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            Espadas · Aire
          </Link>
          <Link href="/es/palos-del-tarot/bastos" style={{ padding: '.85rem 1.5rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            Bastos · Fuego
          </Link>
          <Link href="/es/palos-del-tarot" style={{ padding: '.85rem 1.5rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            ✦ Todos los palos
          </Link>
        </div>
      </div>
    </div>
  )
}
