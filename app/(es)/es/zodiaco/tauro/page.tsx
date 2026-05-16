import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tarot de Tauro — El Hierofante, Elemento y Guía de Lectura | TarotAxis',
  description:
    'Guía de tarot para Tauro: El Hierofante es tu carta regente. Descubre por qué este Arcano Mayor encaja con la tierra de Tauro, el palo de Pentáculos y las tiradas para un signo de Tierra Fija.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/zodiaco/tauro',
    languages: {
      'en': 'https://tarotaxis.com/zodiac/taurus',
      'es': 'https://tarotaxis.com/es/zodiaco/tauro',
      'x-default': 'https://tarotaxis.com/zodiac/taurus',
    },
  },
  openGraph: {
    title: 'Tarot de Tauro — El Hierofante, Elemento y Guía de Lectura',
    description:
      'Guía de tarot para Tauro: El Hierofante es tu carta regente. Descubre por qué este Arcano Mayor encaja con la tierra de Tauro y el palo de Pentáculos.',
    url: 'https://tarotaxis.com/es/zodiaco/tauro',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'website',
  },
}

const sign = {
  name: 'Tauro',
  symbol: '♉',
  dates: '20 abril — 20 mayo',
  element: 'Tierra' as const,
  modality: 'Fija' as const,
  ruler: 'Venus',
  theme: 'Constancia, presencia sensual, lo que perdura',
  rulingCard: { slug: 'el-hierofante', name: 'El Hierofante' },
  suit: { slug: 'pentaculos', name: 'Pentáculos' },
  prev: { slug: 'aries', name: 'Aries', symbol: '♈' },
  next: { slug: 'geminis', name: 'Géminis', symbol: '♊' },
}

const ELEMENT_COLOUR = 'rgba(120,140,80,.18)'
const ELEMENT_BORDER = 'rgba(120,140,80,.4)'

const rulingCardParagraphs = [
  'El Hierofante rige a Tauro porque ambos arquetipos tratan de lo que perdura. El Hierofante es el guardián de la tradición — la figura que lleva adelante la sabiduría heredada, bendiciendo lo que ha sido probado por el tiempo. Tauro es el signo del toro en el prado, el cuerpo que conoce la estación por el tacto del aire. Ambos se niegan a apresurarse, y ambos otorgan un valor enorme a lo que es constante, sensual y real.',
  'Astrológicamente, Tauro está regido por Venus, y El Hierofante suaviza su arquitectura de Mercurio-y-Saturno con calidez venusina. No es una figura fría de autoridad; es el maestro que recuerda que el ritual existe para que la gente se sienta sostenida. Cuando esta carta aparece en una lectura de Tauro, suele apuntar al linaje, al conocimiento encarnado y al valor de hacer las cosas despacio porque despacio resulta ser la forma que dura.',
  'La sombra del emparejamiento vale la pena nombrarla. Tauro desequilibrado se vuelve testarudo; El Hierofante desequilibrado se vuelve dogmático. La lección es la misma: una tradición que ha dejado de servir a los vivos debe poder retirarse. La expresión sana es la del anciano que conoce las viejas maneras y también sabe cuándo enseñar algo nuevo.',
]

const elementParagraphs = [
  'La Tierra es el elemento del cuerpo, la estación y la materia. En el tarot vive en el palo de los Pentáculos — las monedas levantadas hacia la luz, los jardines siendo cuidados, el artesano en el banco de trabajo. Para un Tauro, la firma de la Tierra significa que las lecturas tienden a sacar preguntas de estabilidad: en qué puedes apoyarte, qué estás construyendo, qué te pide el cuerpo que tu agenda ignora.',
  'El palo de Pentáculos es tu palo. Cuando domina tus lecturas suele significar que la pregunta es sobre recursos, salud, trabajo o la acumulación lenta de algo que vale la pena tener. Los Pentáculos enseñan a Tauro a confiar en la paciencia como estrategia — la semilla que tarda una estación en brotar está haciendo exactamente lo que las semillas hacen.',
]

const spreads = [
  { slug: 'anual',       name: 'Tirada Anual',          why: 'Tauro piensa en arcos largos. Una tirada anual de doce cartas le sienta a un signo Fijo que está dispuesto a sentarse con un mapa durante meses en lugar de redibujarlo cada semana.' },
  { slug: 'cruz-celta',  name: 'Cruz Celta',            why: 'La Cruz Celta es densa, en capas y recompensa la paciencia — tres cualidades que Tauro tiene en abundancia. Otros signos la encuentran engorrosa; Tauro la encuentra satisfactoria.' },
  { slug: 'luna-llena',  name: 'Tirada de Luna Llena',  why: 'El trabajo de luna llena consiste en honrar lo que ha crecido y soltar lo que ha terminado — un ritmo profundamente tauriano de cosecha y gratitud.' },
]

const themes = [
  { title: 'Encarnación', body: 'Tus lecturas volverán una y otra vez al cuerpo — sus apetitos, su cansancio, los mensajes que has estado tapando con palabras. Las cartas de Pentáculos en posiciones de cuerpo merecen más atención de la que la mayoría de los lectores les da.' },
  { title: 'Recursos',    body: 'El dinero, las posesiones y la relación con lo suficiente son temas tauros constantes. El Cuatro de Pentáculos, el Cinco de Pentáculos y el Nueve de Pentáculos forman juntos tu trío esencial de recursos.' },
  { title: 'Terquedad',   body: 'Un tema útil para rastrear con honestidad. Cuando la misma carta sigue apareciendo en tus lecturas, suele señalar una posición que estás manteniendo más allá de su fecha de caducidad.' },
  { title: 'Belleza',     body: 'Tauro está regido por Venus, y tus lecturas a menudo ganan profundidad cuando se leen como preguntas sobre belleza — qué alimenta los sentidos, qué se siente como hogar, qué vale la pena conservar por su sola hermosura.' },
]

const faq = [
  { q: '¿Por qué El Hierofante es la carta de tarot de Tauro?', a: 'El Hierofante rige a Tauro a través de las correspondencias de la Golden Dawn. Ambos arquetipos valoran lo que perdura — tradición, ritual, sabiduría encarnada — y ambos se mueven a un ritmo lento y deliberado. El Hierofante es el guardián del tipo de conocimiento que tiene que vivirse para ser entendido, que es exactamente la forma tauriana de aprender.' },
  { q: '¿Qué tirada es mejor para Tauro?', a: 'Los signos de Tierra Fija responden bien a tiradas largas y en capas. La tirada anual, la Cruz Celta y la de luna llena recompensan la disposición tauriana a sentarse con la complejidad a lo largo del tiempo en lugar de pasarla por encima. Las tiradas rápidas de tres cartas pueden sentirse poco nutritivas.' },
  { q: '¿Qué palo del tarot corresponde a Tauro?', a: 'El palo de Pentáculos corresponde a Tauro. Los tres signos de Tierra — Tauro, Virgo y Capricornio — comparten el palo de Pentáculos porque los Pentáculos cargan el elemento del cuerpo, el recurso y el oficio lento de construir. Cuando los Pentáculos dominan tus lecturas, la pregunta suele ser sobre lo que estás cultivando.' },
  { q: '¿Son Tauro y Escorpio compatibles en el tarot?', a: 'Tauro y Escorpio están en oposición en la rueda zodiacal, y sus cartas de tarot (El Hierofante y La Muerte) forman un eje clásico de permanencia y transformación. En el trabajo con tarot esta oposición es fértil — las lecturas sobre dinámicas Tauro-Escorpio a menudo sostienen estabilidad y cambio en la misma tirada, que es exactamente la lección que la pareja existe para enseñar.' },
]

export default function TauroPage() {
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
