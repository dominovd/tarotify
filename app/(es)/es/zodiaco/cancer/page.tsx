import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tarot de Cáncer — El Carro, Elemento y Guía de Lectura | TarotAxis',
  description:
    'Guía de tarot para Cáncer: El Carro es tu carta regente. Descubre por qué este Arcano Mayor encaja con el agua de Cáncer, el palo de Copas y las tiradas para un signo de Agua Cardinal.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/zodiaco/cancer',
    languages: {
      'en': 'https://tarotaxis.com/zodiac/cancer',
      'es': 'https://tarotaxis.com/es/zodiaco/cancer',
      'x-default': 'https://tarotaxis.com/zodiac/cancer',
    },
  },
  openGraph: {
    title: 'Tarot de Cáncer — El Carro, Elemento y Guía de Lectura',
    description:
      'Guía de tarot para Cáncer: El Carro es tu carta regente. Descubre por qué este Arcano Mayor encaja con el agua de Cáncer y el palo de Copas.',
    url: 'https://tarotaxis.com/es/zodiaco/cancer',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'website',
  },
}

const sign = {
  name: 'Cáncer',
  symbol: '♋',
  dates: '21 junio — 22 julio',
  element: 'Agua' as const,
  modality: 'Cardinal' as const,
  ruler: 'Luna',
  theme: 'Contención, armadura emocional, el hogar que construimos',
  rulingCard: { slug: 'el-carro', name: 'El Carro' },
  suit: { slug: 'copas', name: 'Copas' },
  prev: { slug: 'geminis', name: 'Géminis', symbol: '♊' },
  next: { slug: 'leo', name: 'Leo', symbol: '♌' },
}

const ELEMENT_COLOUR = 'rgba(90,120,180,.18)'
const ELEMENT_BORDER = 'rgba(90,120,180,.4)'

const rulingCardParagraphs = [
  'El Carro rige a Cáncer porque ambos arquetipos tratan de la contención. El cangrejo lleva su hogar a cuestas; el auriga conduce dentro de un vehículo blindado al que dirige solo con voluntad. Ambos protegen un interior blando con un exterior duro y deliberado. Ambos avanzan manteniéndose enteros frente a fuerzas que los dispersarían.',
  'Astrológicamente, Cáncer está regido por la Luna, y El Carro — con sus crecientes lunares en los hombros del conductor y el dosel de estrellas sobre la cabeza — lleva esa firma abiertamente. La carta pregunta cómo llevas tu clima interno por el mundo externo sin derramarlo. Cuando aparece en una lectura de Cáncer, suele apuntar a la pregunta de la armadura emocional: cuándo mantenerla puesta, cuándo bajarla, cuándo se ha fundido con tu piel.',
  'La sombra del emparejamiento vale la pena nombrarla. Cáncer desequilibrado se vuelve defensivo; El Carro desequilibrado se vuelve autoritario. La lección es la misma: una concha que nunca se abre deja de ser un hogar y se convierte en una prisión. La expresión sana es la figura que ha construido un contenedor fuerte y también sabe que tiene permiso de salir de él.',
]

const elementParagraphs = [
  'El Agua es el elemento del sentimiento, la memoria y el inconsciente. En el tarot vive en el palo de las Copas — los cálices levantados al corazón, las figuras en paisajes que parecen sueños, la profundidad con la que no se puede discutir porque no trata en argumentos. Para un Cáncer, la firma del Agua significa que las lecturas tienden a sacar preguntas de verdad emocional: lo que realmente sientes debajo de lo que dices sentir, qué ha estado protegiendo tu vida interior.',
  'El palo de Copas es tu palo. Cuando domina tus lecturas suele significar que la pregunta es sobre amor, familia, intuición o la larga memoria del corazón. Las Copas le hablan a Cáncer en su lengua nativa — presta especial atención a qué Copas están derechas y cuáles invertidas, porque la diferencia suele contener toda la lectura.',
]

const spreads = [
  { slug: 'luna-nueva',  name: 'Tirada de Luna Nueva',  why: 'Cáncer está regido por la Luna — cada tirada de luna nueva es, en cierto sentido, una lectura de Cáncer. El formato honra tu ritmo lunar natural de establecer intenciones.' },
  { slug: 'tres-cartas', name: 'Tirada de Tres Cartas', why: 'Pasado-presente-futuro es inusualmente potente para Cáncer porque Cáncer es el signo que recuerda. La carta del "pasado" hace más trabajo para ti que para cualquier otro signo.' },
  { slug: 'luna-llena',  name: 'Tirada de Luna Llena',  why: 'El trabajo de liberación se adapta a la capacidad de Cáncer de sentir las cosas plenamente. Las tiradas de luna llena dan al agua emocional un lugar adonde ir.' },
]

const themes = [
  { title: 'Hogar',       body: 'Dónde vives, quién vive contigo y el hogar interior que llevas dentro. El Diez de Copas, el Cuatro de Bastos y La Emperatriz mapean todos este territorio.' },
  { title: 'Familia',     body: 'Las lecturas de Cáncer a menudo sacan preguntas ancestrales y de familia de origen, hayan sido formuladas o no. Las cartas de corte y las invertidas merecen una lectura cuidadosa aquí.' },
  { title: 'Intuición',   body: 'Un don de Cáncer. La Sacerdotisa, La Luna y la Sota de Copas son invitaciones a confiar en la voz interior que llega antes que la evidencia exterior.' },
  { title: 'Límites',     body: 'El borde de crecimiento. Cáncer lo siente todo, incluido lo que no es suyo cargar. El Carro mismo, el Dos de Espadas y el Caballero de Copas enseñan versiones de esta lección.' },
]

const faq = [
  { q: '¿Por qué El Carro es la carta de tarot de Cáncer?', a: 'El Carro rige a Cáncer a través de las correspondencias de la Golden Dawn. Ambos arquetipos comparten una firma lunar — las crecientes en los hombros del auriga son la misma luna que rige al cangrejo — y ambos expresan el mismo don de sostener un interior blando dentro de una forma protectora fuerte. El Carro es lo que parece la autocontención canceriana en movimiento.' },
  { q: '¿Qué tirada es mejor para Cáncer?', a: 'Los signos de Agua Cardinal responden bien a las tiradas que honran los ciclos emocionales. La luna nueva, las tres cartas pasado-presente-futuro y la de luna llena dan a Cáncer el ritmo lunar y la profundidad emocional que el signo necesita. Las tiradas muy analíticas pueden sentirse áridas.' },
  { q: '¿Qué palo del tarot corresponde a Cáncer?', a: 'El palo de Copas corresponde a Cáncer. Los tres signos de Agua — Cáncer, Escorpio y Piscis — comparten el palo de Copas porque las Copas cargan el elemento del sentimiento, la intuición y la vida interior profunda. Cuando las Copas dominan tus lecturas, la pregunta suele ser sobre el corazón y lo que ha estado sosteniendo.' },
  { q: '¿Son Cáncer y Capricornio compatibles en el tarot?', a: 'Cáncer y Capricornio están en oposición en la rueda zodiacal, y sus cartas de tarot (El Carro y El Diablo) forman un eje de autodominio y autoatadura. En el trabajo con tarot esta oposición es instructiva — las lecturas sobre dinámicas Cáncer-Capricornio a menudo sostienen la pregunta "qué contenedor me está protegiendo y qué contenedor se ha convertido en mi prisión" al mismo tiempo.' },
]

export default function CancerPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'es',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <Link href="/es" style={{ color: 'var(--muted)' }}>Inicio</Link>
        <span>/</span>
        <Link href="/es/zodiaco" style={{ color: 'var(--muted)' }}>Zodíaco</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>{sign.name}</span>
      </nav>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--gold)', lineHeight: 1 }}>{sign.symbol}</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.5rem', lineHeight: 1.3 }}>
          Tarot de {sign.name}
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto .5rem', fontSize: '.9rem' }}>
          {sign.dates} · {sign.element} · {sign.modality} · Regido por {sign.ruler}
        </p>
        <p style={{ color: 'var(--text)', maxWidth: 580, margin: '0 auto', fontSize: '.97rem', lineHeight: 1.7, fontStyle: 'italic', opacity: .85 }}>
          {sign.theme}.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          <span style={{ padding: '.25rem .85rem', background: ELEMENT_COLOUR, border: `1px solid ${ELEMENT_BORDER}`, borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--text)' }}>{sign.element}</span>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{sign.modality}</span>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>Regido por {sign.ruler}</span>
        </div>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Tu carta regente
        </h2>
        <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <Link
            href={`/es/cartas/${sign.rulingCard.slug}`}
            style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', textDecoration: 'none', color: 'inherit', flexWrap: 'wrap' }}
          >
            <div style={{ width: 100, height: 150, borderRadius: 10, border: '1px solid rgba(201,168,76,.35)', background: 'linear-gradient(135deg,rgba(201,168,76,.12),rgba(201,168,76,.04))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1.6rem', color: 'var(--gold)' }}>{sign.symbol}</div>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.7rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.4rem' }}>Arcanos Mayores</div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1.3rem', color: 'var(--gold)', marginBottom: '.4rem' }}>{sign.rulingCard.name}</div>
              <div style={{ fontSize: '.82rem', color: 'var(--muted)' }}>Ver el significado completo →</div>
            </div>
          </Link>
          <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
            {rulingCardParagraphs.map((p, i) => (
              <p key={i} style={{ marginBottom: i < rulingCardParagraphs.length - 1 ? '1rem' : 0 }}>{p}</p>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          La conexión con {sign.element}
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          {elementParagraphs.map((p, i) => (
            <p key={i} style={{ marginBottom: i < elementParagraphs.length - 1 ? '1rem' : 0 }}>{p}</p>
          ))}
        </div>
        <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px dashed var(--border)' }}>
          <Link
            href={`/es/palos-del-tarot/${sign.suit.slug}`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.55rem 1.1rem', border: '1px solid rgba(201,168,76,.3)', borderRadius: 20, color: 'var(--gold)', fontSize: '.82rem', fontFamily: "'Cinzel',serif", letterSpacing: '.06em', textDecoration: 'none' }}
          >
            Explora el palo de {sign.suit.name} →
          </Link>
        </div>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Tiradas recomendadas
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          Tiradas adaptadas al temperamento {sign.modality} de {sign.element} de {sign.name}. Son sugerencias, no reglas — cada lector encuentra el suyo.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {spreads.map(s => (
            <Link
              key={s.slug}
              href={`/es/tiradas/${s.slug}`}
              style={{ display: 'block', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.95rem', color: 'var(--gold)', marginBottom: '.4rem', letterSpacing: '.03em' }}>{s.name}</div>
              <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0, opacity: .9 }}>{s.why}</p>
            </Link>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Temas en tu año de tarot
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '.75rem' }}>
          {themes.map(t => (
            <div key={t.title} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>{t.title}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>{t.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {faq.map(({ q, a }) => (
            <div key={q} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{q}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14, marginBottom: '2.5rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Profundiza con {sign.name}</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Lee tu carta regente completa o explora el palo que carga el elemento de {sign.name}.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href={`/es/cartas/${sign.rulingCard.slug}`} style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            {sign.rulingCard.name}
          </Link>
          <Link href="/es/lectura-gratis" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Lectura gratis
          </Link>
          <Link href={`/es/palos-del-tarot/${sign.suit.slug}`} style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Palo de {sign.suit.name}
          </Link>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        <Link href={`/es/zodiaco/${sign.prev.slug}`} style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem', textDecoration: 'none' }}>
          ← {sign.prev.symbol} {sign.prev.name}
        </Link>
        <Link href={`/es/zodiaco/${sign.next.slug}`} style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem', textDecoration: 'none' }}>
          {sign.next.name} {sign.next.symbol} →
        </Link>
      </div>
    </div>
  )
}
