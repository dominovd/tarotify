import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tarot de Géminis — Los Enamorados, Elemento y Guía de Lectura | TarotAxis',
  description:
    'Guía de tarot para Géminis: Los Enamorados es tu carta regente. Descubre por qué este Arcano Mayor encaja con el aire de Géminis, el palo de Espadas y las tiradas para un signo de Aire Mutable.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/zodiaco/geminis',
    languages: {
      'en': 'https://tarotaxis.com/zodiac/gemini',
      'es': 'https://tarotaxis.com/es/zodiaco/geminis',
      'x-default': 'https://tarotaxis.com/zodiac/gemini',
    },
  },
  openGraph: {
    title: 'Tarot de Géminis — Los Enamorados, Elemento y Guía de Lectura',
    description:
      'Guía de tarot para Géminis: Los Enamorados es tu carta regente. Descubre por qué este Arcano Mayor encaja con el aire de Géminis y el palo de Espadas.',
    url: 'https://tarotaxis.com/es/zodiaco/geminis',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'website',
  },
}

const sign = {
  name: 'Géminis',
  symbol: '♊',
  dates: '21 mayo — 20 junio',
  element: 'Aire' as const,
  modality: 'Mutable' as const,
  ruler: 'Mercurio',
  theme: 'Curiosidad, comunicación, sostener dos verdades',
  rulingCard: { slug: 'los-enamorados', name: 'Los Enamorados' },
  suit: { slug: 'espadas', name: 'Espadas' },
  prev: { slug: 'tauro', name: 'Tauro', symbol: '♉' },
  next: { slug: 'cancer', name: 'Cáncer', symbol: '♋' },
}

const ELEMENT_COLOUR = 'rgba(140,170,200,.18)'
const ELEMENT_BORDER = 'rgba(140,170,200,.4)'

const rulingCardParagraphs = [
  'Los Enamorados rige a Géminis porque ambos arquetipos tratan de sostener dos verdades a la vez. Los Enamorados no es, a pesar de su nombre, solo una carta sobre romance — es la carta de la elección significativa, el momento en que una persona se encuentra entre dos caminos y tiene que decidir cuál honrar. Géminis es el signo de los gemelos, el "y" original entre cualquier par, la mente que se niega a aplanar una pregunta en una sola respuesta cuando hay dos disponibles.',
  'Astrológicamente, Géminis está regido por Mercurio, y Los Enamorados comparte esa firma comunicativa y relacional. La carta te pregunta no qué quieres sino qué eliges — que es una pregunta mercuriana, una pregunta sobre lenguaje, encuadre y las historias que contamos para hacer una decisión soportable. Cuando aparece en una lectura de Géminis, suele apuntar a una elección que no puede tomarse a medias.',
  'La sombra del emparejamiento vale la pena nombrarla. Géminis desequilibrado se vuelve disperso; Los Enamorados desequilibrado se vuelve paralizado. Las dos lecciones son la misma: en algún momento el sostener dos verdades tiene que resolverse en acción. La expresión sana es la mente curiosa que ha pesado las opciones y ahora está lista para comprometerse con una sin mentir sobre la otra.',
]

const elementParagraphs = [
  'El Aire es el elemento del pensamiento, el lenguaje y los espacios entre las cosas. En el tarot vive en el palo de las Espadas — las hojas levantadas contra un cielo claro, las figuras negociando con sus propias mentes, la precisión que puede liberar o herir. Para un Géminis, la firma del Aire significa que las lecturas tienden a sacar preguntas de claridad: dónde estás pensando demasiado, dónde no has pensado lo suficiente, qué historia estás contando que necesita reescribirse.',
  'El palo de Espadas es tu palo. Cuando domina tus lecturas suele significar que la pregunta es mental más que emocional — qué crees, qué temes, qué necesitas decir en voz alta. Las Espadas a veces se leen como el palo "más duro", pero para un Géminis son simplemente el idioma nativo de la lectura.',
]

const spreads = [
  { slug: 'herradura',   name: 'Tirada de Herradura',   why: 'La herradura te da obstáculo, consejo y resultado uno al lado del otro — que es exactamente cómo a una mente de Géminis le gusta sostener un problema. Múltiples ángulos, ningún veredicto forzado.' },
  { slug: 'semanal',     name: 'Tirada Semanal',        why: 'El Aire Mutable prospera con ciclos más cortos. Una tirada semanal de siete cartas te permite seguir preguntas cambiantes sin comprometerte con un arco de un año que inevitablemente reescribirás en marzo.' },
  { slug: 'tres-cartas', name: 'Tirada de Tres Cartas', why: 'Para decisiones rápidas: opción A, opción B, la verdad entre ambas. Esta es la lectura más Géminis que existe.' },
]

const themes = [
  { title: 'Comunicación', body: 'Tus lecturas volverán una y otra vez a lo que se dijo, lo que no se dijo y lo que se está malinterpretando. Los Pajes, el Caballero de Espadas y el Ocho de Bastos son todos mensajeros que vale la pena escuchar con atención.' },
  { title: 'Elección',     body: 'Las cartas de dos-de-algo (el Dos de Espadas, el Dos de Bastos, Los Enamorados mismo) llevan un peso extra para ti. No te están pidiendo que elijas perfectamente — te están pidiendo que elijas, punto.' },
  { title: 'Curiosidad',   body: 'Un don de Géminis. Rastrea a qué cartas vuelve tu mirada incluso cuando no eran la "respuesta" — a menudo contienen la pregunta que realmente viniste a hacer.' },
  { title: 'Inquietud',    body: 'El borde de crecimiento. Sacar la misma carta tres lecturas seguidas suele significar que la lección aún no ha aterrizado — sentarse el tiempo suficiente para recibirla es la práctica de Géminis.' },
]

const faq = [
  { q: '¿Por qué Los Enamorados es la carta de tarot de Géminis?', a: 'Los Enamorados rige a Géminis a través de las correspondencias de la Golden Dawn. Ambos arquetipos comparten una firma mercuriana y ambos tratan fundamentalmente de sostener dos verdades en la misma mano — los gemelos de Géminis, la elección de Los Enamorados. La decisión significativa, no el romance, es el núcleo de esta carta y del signo.' },
  { q: '¿Qué tirada es mejor para Géminis?', a: 'Los signos de Aire Mutable responden bien a tiradas flexibles y de múltiples ángulos. La herradura, la semanal de siete cartas y la de tres cartas opción-A-opción-B-verdad-entre-ambas se adaptan al amor de Géminis por comparar perspectivas sin verse obligado a un solo veredicto demasiado pronto.' },
  { q: '¿Qué palo del tarot corresponde a Géminis?', a: 'El palo de Espadas corresponde a Géminis. Los tres signos de Aire — Géminis, Libra y Acuario — comparten el palo de Espadas porque las Espadas cargan el elemento de la mente, el lenguaje y el pensamiento claro. Cuando las Espadas dominan tus lecturas, la pregunta suele ser sobre lo que estás pensando, diciendo o creyendo.' },
  { q: '¿Son Géminis y Sagitario compatibles en el tarot?', a: 'Géminis y Sagitario están en oposición en la rueda zodiacal, y sus cartas de tarot (Los Enamorados y La Templanza) forman un eje de elección y síntesis. En el trabajo con tarot esta oposición es generativa — las lecturas sobre dinámicas Géminis-Sagitario a menudo sacan las preguntas de "qué elijo" y "cómo lo mezclo con lo que ya elegí" en el mismo aliento.' },
]

export default function GeminisPage() {
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
