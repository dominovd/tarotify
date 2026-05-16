import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tarot de Virgo — El Ermitaño, Elemento y Guía de Lectura | TarotAxis',
  description:
    'Guía de tarot para Virgo: El Ermitaño es tu carta regente. Descubre por qué este Arcano Mayor encaja con la tierra de Virgo, el palo de Pentáculos y las tiradas para un signo de Tierra Mutable.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/zodiaco/virgo',
    languages: {
      'en': 'https://tarotaxis.com/zodiac/virgo',
      'es': 'https://tarotaxis.com/es/zodiaco/virgo',
      'x-default': 'https://tarotaxis.com/zodiac/virgo',
    },
  },
  openGraph: {
    title: 'Tarot de Virgo — El Ermitaño, Elemento y Guía de Lectura',
    description:
      'Guía de tarot para Virgo: El Ermitaño es tu carta regente. Descubre por qué este Arcano Mayor encaja con la tierra de Virgo y el palo de Pentáculos.',
    url: 'https://tarotaxis.com/es/zodiaco/virgo',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'website',
  },
}

const sign = {
  name: 'Virgo',
  symbol: '♍',
  dates: '23 agosto — 22 septiembre',
  element: 'Tierra' as const,
  modality: 'Mutable' as const,
  ruler: 'Mercurio',
  theme: 'Discernimiento, devoción al oficio, el camino interior',
  rulingCard: { slug: 'el-ermitano', name: 'El Ermitaño' },
  suit: { slug: 'pentaculos', name: 'Pentáculos' },
  prev: { slug: 'leo', name: 'Leo', symbol: '♌' },
  next: { slug: 'libra', name: 'Libra', symbol: '♎' },
}

const ELEMENT_COLOUR = 'rgba(120,140,80,.18)'
const ELEMENT_BORDER = 'rgba(120,140,80,.4)'

const rulingCardParagraphs = [
  'El Ermitaño rige a Virgo porque ambos arquetipos tratan del camino interior. El Ermitaño está de pie en la ladera de una montaña en la oscuridad, sosteniendo en alto una linterna que ilumina solo el siguiente paso. Virgo es el signo de la cosecha — la figura inclinada sobre el campo, separando el trigo de la paja con manos pacientes y enfocadas. Ambos son solitarios no por accidente sino por diseño. Ambos saben que ciertos tipos de claridad solo llegan cuando la multitud se ha ido.',
  'Astrológicamente, Virgo está regido por Mercurio, y El Ermitaño lleva esa firma mercuriana en un tono contemplativo — lenguaje vuelto hacia adentro, análisis dirigido al alma en lugar de a la hoja de cálculo. La carta pregunta qué has estado tratando de resolver en compañía que necesita resolverse a solas. Cuando aparece en una lectura de Virgo, suele apuntar al valor del retiro como estrategia en lugar de como fracaso.',
  'La sombra del emparejamiento vale la pena nombrarla. Virgo desequilibrado se vuelve el perfeccionista que nunca termina; El Ermitaño desequilibrado se vuelve el recluso que deja de volver al pueblo. Las dos lecciones son la misma: el camino interior está pensado para ser una estación, no una dirección permanente. La expresión sana es la figura que sube la montaña, encuentra lo que fue a buscar y vuelve con ello.',
]

const elementParagraphs = [
  'La Tierra es el elemento del cuerpo, la estación y la materia. En el tarot vive en el palo de los Pentáculos — las monedas levantadas hacia la luz, los jardines siendo cuidados, el artesano en el banco de trabajo. Para un Virgo, la firma de la Tierra es la más laboriosa de las tres — Virgo es donde la Tierra se encuentra con la atención al detalle, donde el oficio se convierte en devoción.',
  'El palo de Pentáculos es tu palo. Cuando domina tus lecturas suele significar que la pregunta es sobre trabajo, salud, práctica diaria o el lento refinamiento de una habilidad. El Tres de Pentáculos, el Ocho de Pentáculos y el Rey de Pentáculos forman juntos tu trío esencial de oficio.',
]

const spreads = [
  { slug: 'herradura',   name: 'Tirada de Herradura',   why: 'La Tierra Mutable prospera con el análisis estructurado. La herradura te da obstáculo, consejo y resultado en una secuencia clara — lo que se adapta al amor de Virgo por un plan bien trazado.' },
  { slug: 'semanal',     name: 'Tirada Semanal',        why: 'Virgo vive en lo diario y lo semanal más que en lo anual. Una tirada semanal de siete cartas te da un arco manejable para seguir, refinar y ajustar.' },
  { slug: 'tres-cartas', name: 'Tirada de Tres Cartas', why: 'Para trabajo diagnóstico rápido — situación, complicación, consejo. Virgo puede extraer más de tres cartas que la mayoría de los signos de diez.' },
]

const themes = [
  { title: 'Devoción',       body: 'Tus lecturas volverán una y otra vez a lo que sirves. El Hierofante, el Tres de Pentáculos y el Dos de Pentáculos llevan todos la pregunta de dónde se está colocando tu esfuerzo diario.' },
  { title: 'Salud',          body: 'Virgo rige el sistema digestivo en astrología tradicional, y tus lecturas a menudo sacan preguntas sobre lo que estás absorbiendo — física y de otras formas. La Estrella, La Templanza y el Seis de Pentáculos cargan peso sanador aquí.' },
  { title: 'Discernimiento', body: 'Un don de Virgo. Sacar El Juicio o La Justicia en una lectura de Virgo a menudo confirma un veredicto interior que ya has alcanzado en privado.' },
  { title: 'Perfeccionismo', body: 'El borde de crecimiento. El Caballero de Pentáculos, el Nueve de Bastos y el Cuatro de Pentáculos pueden marcar el momento en el que "hacerlo bien" ha cruzado a "no terminar nunca".' },
]

const faq = [
  { q: '¿Por qué El Ermitaño es la carta de tarot de Virgo?', a: 'El Ermitaño rige a Virgo a través de las correspondencias de la Golden Dawn. Ambos arquetipos comparten una firma mercuriana — pero en su forma interior y contemplativa en lugar de la comunicativa. El Ermitaño es lo que parece el discernimiento de Virgo cuando vuelve su atención silenciosa y cuidadosa hacia el alma en lugar de la cosecha.' },
  { q: '¿Qué tirada es mejor para Virgo?', a: 'Los signos de Tierra Mutable responden bien a tiradas estructuradas y analíticas. La herradura, la semanal de siete cartas y la diagnóstica de tres cartas se adaptan al amor de Virgo por las posiciones claras, las preguntas bien definidas y el tipo de detalle que recompensa la atención cuidadosa.' },
  { q: '¿Qué palo del tarot corresponde a Virgo?', a: 'El palo de Pentáculos corresponde a Virgo. Los tres signos de Tierra — Tauro, Virgo y Capricornio — comparten el palo de Pentáculos porque los Pentáculos cargan el elemento del cuerpo, el oficio y el refinamiento lento de la habilidad. Cuando los Pentáculos dominan tus lecturas, la pregunta suele ser sobre lo que estás cuidando.' },
  { q: '¿Son Virgo y Piscis compatibles en el tarot?', a: 'Virgo y Piscis están en oposición en la rueda zodiacal, y sus cartas de tarot (El Ermitaño y La Luna) forman un eje de claridad y disolución. En el trabajo con tarot esta oposición es rica — las lecturas sobre dinámicas Virgo-Piscis a menudo sostienen la pregunta de cómo honrar tanto la mente que discierne como la que sueña sin volver equivocada a ninguna.' },
]

export default function VirgoPage() {
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
