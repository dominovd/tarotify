import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tarot de Leo — La Fuerza, Elemento y Guía de Lectura | TarotAxis',
  description:
    'Guía de tarot para Leo: La Fuerza es tu carta regente. Descubre por qué este Arcano Mayor encaja con el fuego de Leo, el palo de Bastos y las tiradas para un signo de Fuego Fijo.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/zodiaco/leo',
    languages: {
      'en': 'https://tarotaxis.com/zodiac/leo',
      'es': 'https://tarotaxis.com/es/zodiaco/leo',
      'x-default': 'https://tarotaxis.com/zodiac/leo',
    },
  },
  openGraph: {
    title: 'Tarot de Leo — La Fuerza, Elemento y Guía de Lectura',
    description:
      'Guía de tarot para Leo: La Fuerza es tu carta regente. Descubre por qué este Arcano Mayor encaja con el fuego de Leo y el palo de Bastos.',
    url: 'https://tarotaxis.com/es/zodiaco/leo',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'website',
  },
}

const sign = {
  name: 'Leo',
  symbol: '♌',
  dates: '23 julio — 22 agosto',
  element: 'Fuego' as const,
  modality: 'Fija' as const,
  ruler: 'Sol',
  theme: 'Corazón, coraje visible, el gobernante gentil',
  rulingCard: { slug: 'la-fuerza', name: 'La Fuerza' },
  suit: { slug: 'bastos', name: 'Bastos' },
  prev: { slug: 'cancer', name: 'Cáncer', symbol: '♋' },
  next: { slug: 'virgo', name: 'Virgo', symbol: '♍' },
}

const ELEMENT_COLOUR = 'rgba(201,90,60,.18)'
const ELEMENT_BORDER = 'rgba(201,90,60,.4)'

const rulingCardParagraphs = [
  'La Fuerza rige a Leo porque ambos arquetipos llevan al león. En la imagen Rider–Waite–Smith, una mujer con una corona de flores posa las manos suavemente sobre el hocico de un león que, claramente, se lo está permitiendo. La carta se llama La Fuerza pero en realidad es una carta sobre la gentileza — el tipo de poder que no necesita rugir porque no tiene nada que probar. Leo, el signo del león, siempre iba a estar regido por esta carta.',
  'Astrológicamente, Leo está regido por el Sol, y La Fuerza lleva el símbolo solar del infinito sobre la cabeza de la mujer. La carta pregunta cómo se muestra tu coraje no en el momento de la confrontación sino en el momento de la contención. Cuando aparece en una lectura de Leo, suele apuntar a la diferencia entre actuar la fuerza y encarnarla — entre ser el que ruge y ser aquel sobre quien otros se apoyan.',
  'La sombra del emparejamiento vale la pena nombrarla. Leo desequilibrado se vuelve el intérprete que necesita público; La Fuerza desequilibrada se vuelve la figura que esconde su poder porque teme lo que le costaría reclamarlo. Las dos lecciones son la misma: la autoridad real no depende de ser observada. La expresión sana es el corazón que calienta una habitación simplemente por ser él mismo.',
]

const elementParagraphs = [
  'El Fuego es el elemento de la voluntad, la vitalidad y el salto antes de mirar. En el tarot vive en el palo de los Bastos — los bastones brotando hojas frescas, las figuras avanzando hacia los horizontes, el calor en el pecho que dice "ve". Para un Leo, la firma del Fuego es solar más que marciana — menos la chispa del comienzo y más el calor constante que sostiene.',
  'El palo de Bastos es tu palo. Cuando domina tus lecturas suele significar que la pregunta es sobre visibilidad, creatividad y el coraje de ser visto como realmente eres. La Sota de Bastos, el Seis de Bastos y El Sol mismo forman un trío particularmente leonino que vale la pena conocer bien.',
]

const spreads = [
  { slug: 'anual',       name: 'Tirada Anual',          why: 'Leo es un signo Fijo — dispuesto a comprometerse con un mapa largo. Una anual de doce cartas se adapta al sentido leonino de la vida como un proyecto creativo sostenido en lugar de una serie de giros.' },
  { slug: 'cruz-celta',  name: 'Cruz Celta',            why: 'La Cruz Celta es en capas y ceremonial — lo que se adapta al amor de Leo por hacer las cosas como es debido. También recompensa la paciencia que los signos Fijos tienden a subestimar en sí mismos.' },
  { slug: 'luna-llena',  name: 'Tirada de Luna Llena',  why: 'Leo está opuesto a Acuario en la rueda, y las lunas llenas en Acuario son dramáticas para las posiciones leoninas. La tirada de luna llena da a esa energía un canal estructurado.' },
]

const themes = [
  { title: 'Corazón',     body: 'Tus lecturas volverán una y otra vez a lo que amas. El Dos de Copas, el Diez de Copas y Los Enamorados llevan peso aquí — pero también El Sol, que es tu carta de una manera más silenciosa que La Fuerza.' },
  { title: 'Visibilidad', body: 'Ser visto es una pregunta leonina. El Seis de Bastos, La Estrella y la Sota de Bastos suelen marcar momentos en los que la pregunta es si dar un paso al frente o quedarse entre bastidores.' },
  { title: 'Creatividad', body: 'Un don de Leo y una responsabilidad de Leo. La Emperatriz, el Tres de Pentáculos y el Caballero de Bastos hablan de hacer — y del coraje de poner tu trabajo en el mundo sin pulirlo más allá de la honestidad.' },
  { title: 'Orgullo',     body: 'El borde de crecimiento. Sacar el Cinco de Pentáculos, el Siete de Espadas o la Torre en una lectura de Leo a menudo apunta a un momento en que el orgullo es lo que bloquea el siguiente paso. La Fuerza misma es el antídoto.' },
]

const faq = [
  { q: '¿Por qué La Fuerza es la carta de tarot de Leo?', a: 'La Fuerza rige a Leo a través de las correspondencias de la Golden Dawn. La imagen es inequívoca — un león en el centro de la carta, el signo del león como el centro de la energía de Fuego Fijo del zodíaco. Ambos arquetipos comparten la misma firma solar y la misma lección: el poder real es gentil, y no necesita actuarse.' },
  { q: '¿Qué tirada es mejor para Leo?', a: 'Los signos de Fuego Fijo responden bien a tiradas ceremoniales y sostenidas. La anual, la Cruz Celta y la de luna llena dan a Leo el sentido de ocasión y el arco largo en los que el signo prospera. Las tiradas rápidas funcionan pero pueden sentirse un poco anticlimáticas para el temperamento leonino.' },
  { q: '¿Qué palo del tarot corresponde a Leo?', a: 'El palo de Bastos corresponde a Leo. Los tres signos de Fuego — Aries, Leo y Sagitario — comparten el palo de Bastos porque los Bastos cargan el elemento de la voluntad, la vitalidad y el coraje visible. Cuando los Bastos dominan tus lecturas, la pregunta suele ser sobre cómo se está mostrando tu fuego en el mundo.' },
  { q: '¿Son Leo y Acuario compatibles en el tarot?', a: 'Leo y Acuario están en oposición en la rueda zodiacal, y sus cartas de tarot (La Fuerza y La Estrella) forman un eje de coraje personal y colectivo. En el trabajo con tarot esta oposición es inusualmente hermosa — las lecturas sobre dinámicas Leo-Acuario a menudo sacan la pregunta de cómo se encuentran el coraje individual y la visión compartida.' },
]

export default function LeoPage() {
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
        <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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

      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
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
              style={{ display: 'block', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', color: 'inherit' }}
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
            <div key={t.title} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
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
            <div key={q} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
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
