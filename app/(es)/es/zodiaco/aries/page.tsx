import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tarot de Aries — El Emperador, Elemento y Guía de Lectura | TarotAxis',
  description:
    'Guía de tarot para Aries: El Emperador es tu carta regente. Descubre por qué este Arcano Mayor encaja con el fuego de Aries, el palo de Bastos y las tiradas para un signo de Fuego Cardinal.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/zodiaco/aries',
    languages: {
      'en': 'https://tarotaxis.com/zodiac/aries',
      'es': 'https://tarotaxis.com/es/zodiaco/aries',
      'x-default': 'https://tarotaxis.com/zodiac/aries',
    },
  },
  openGraph: {
    title: 'Tarot de Aries — El Emperador, Elemento y Guía de Lectura',
    description:
      'Guía de tarot para Aries: El Emperador es tu carta regente. Descubre por qué este Arcano Mayor encaja con el fuego de Aries y el palo de Bastos.',
    url: 'https://tarotaxis.com/es/zodiaco/aries',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'website',
  },
}

const sign = {
  name: 'Aries',
  symbol: '♈',
  dates: '21 marzo — 19 abril',
  element: 'Fuego' as const,
  modality: 'Cardinal' as const,
  ruler: 'Marte',
  theme: 'Iniciación, coraje, el yo en bruto',
  rulingCard: { slug: 'el-emperador', name: 'El Emperador' },
  suit: { slug: 'bastos', name: 'Bastos' },
  prev: { slug: 'piscis', name: 'Piscis', symbol: '♓' },
  next: { slug: 'tauro', name: 'Tauro', symbol: '♉' },
}

const ELEMENT_COLOUR = 'rgba(201,90,60,.18)'
const ELEMENT_BORDER = 'rgba(201,90,60,.4)'

const rulingCardParagraphs = [
  'El Emperador rige a Aries porque ambos arquetipos tratan de tomar el trono. Aries es el primer signo del zodíaco — la chispa del yo, el momento en que "soy" se convierte en una frase. El Emperador es la figura que ha construido un reino a partir de esa misma energía: con fronteras, defendido, gobernado. Donde Aries aporta el coraje para empezar, El Emperador aporta la estructura que permite que un comienzo se convierta en una vida.',
  'Astrológicamente, Aries está regido por Marte, el planeta de la voluntad y la afirmación, y El Emperador encaja de lleno bajo esa firma marciana. Su armadura no es decoración; es la forma visible de un límite. Cuando esta carta aparece en una lectura de Aries, suele señalar dónde se te está pidiendo que reclames autoridad sobre tu propio territorio — tu tiempo, tu trabajo, tu "no" — en lugar de esperar a que otra persona establezca los términos.',
  'La sombra del emparejamiento vale la pena nombrarla. Aries desequilibrado se convierte en el matón; El Emperador desequilibrado se convierte en el tirano. Las dos lecciones son la misma: el poder que no sirve a la vida acaba volviéndose en su contra. La expresión sana es la del fundador que construye algo sobre lo que otros puedan apoyarse, y luego se aparta para dejar que lo hagan.',
]

const elementParagraphs = [
  'El Fuego es el elemento de la voluntad, la vitalidad y el salto antes de mirar. En el tarot vive en el palo de los Bastos — los bastones brotando hojas frescas, las figuras avanzando hacia el horizonte, el calor en el pecho que dice "ve". Para un Aries, la firma del Fuego significa que las lecturas tienden a sacar preguntas de impulso: dónde estás bloqueado, dónde estás cargando sin dirección, dónde quiere aterrizar la chispa.',
  'El palo de Bastos es tu palo. Cuando domina tus lecturas suele significar que la pregunta es sobre identidad y acción, no sobre sentimiento o pensamiento. Presta atención a las cartas de Bastos incluso cuando aparezcan en los bordes de una tirada — a menudo son el motor que corre por debajo de todo lo demás que está sucediendo para ti.',
]

const spreads = [
  { slug: 'luna-nueva',  name: 'Tirada de Luna Nueva',  why: 'Aries es un signo Cardinal — el iniciador. La tirada de Luna Nueva está construida en torno a empezar de nuevo, lo que encaja con el ritmo ariano de los comienzos mejor que cualquier otro formato.' },
  { slug: 'tres-cartas', name: 'Tirada de Tres Cartas', why: 'Aries piensa en líneas rectas. La clásica tirada de tres cartas pasado-presente-futuro se ajusta a esa franqueza — te lleva al insight sin hacerte aguantar cinco cartas extra que no necesitas.' },
  { slug: 'herradura',   name: 'Tirada de Herradura',   why: 'Cuando quieres profundidad, la herradura te da obstáculo, consejo y resultado juntos. Ese trío responde a la pregunta ariana — "qué hay en mi camino y cómo lo muevo" — sin perder impulso.' },
]

const themes = [
  { title: 'Comienzos',  body: 'Tus lecturas volverán una y otra vez a los umbrales — proyectos, mudanzas, relaciones, identidades. La carta a la que debes prestar atención es la que nombra hacia dónde caminas, no solo lo que estás dejando atrás.' },
  { title: 'Autoridad',  body: 'Las preguntas sobre liderazgo, reclamar espacio y ser tu propio jefe se repiten para Aries. El Emperador y las cartas con sabor a Marte (la Torre, el Carro) suelen aparecer cuando este tema está activo.' },
  { title: 'Ira',        body: 'Las lecturas de Aries se benefician de ser honestas sobre la ira como información. El Cinco de Bastos, el Caballero de Bastos y la Torre cargan mensajes útiles sobre el calor que necesita ir a alguna parte.' },
  { title: 'Paciencia',  body: 'El borde de crecimiento para Aries en el trabajo con tarot es sentarse con cartas que no le gustan. Sacar El Colgado o el Cuatro de Espadas puede sentirse como un castigo — suele ser un regalo.' },
]

const faq = [
  { q: '¿Por qué El Emperador es la carta de tarot de Aries?', a: 'El Emperador rige a Aries a través de las correspondencias de la Golden Dawn. Ambos arquetipos comparten una firma marciana — afirmación, estructura, la fundación de un dominio — y ambos representan el primer acto consciente de decir "esto es mío y lo defenderé". El Emperador es lo que parece la energía de Aries una vez que ha construido algo que gobernar.' },
  { q: '¿Qué tirada es mejor para Aries?', a: 'Los signos de Fuego Cardinal responden bien a tiradas rápidas y orientadas hacia adelante. La tirada de Luna Nueva, la de tres cartas pasado-presente-futuro y la herradura son todas buenas opciones. Las tiradas meditativas largas como la Cruz Celta pueden frustrar a Aries — son excelentes pero requieren paciencia.' },
  { q: '¿Qué palo del tarot corresponde a Aries?', a: 'El palo de Bastos corresponde a Aries. Los tres signos de Fuego — Aries, Leo y Sagitario — comparten el palo de Bastos porque los Bastos cargan el mismo elemento de voluntad, vitalidad y movimiento hacia afuera. Cuando los Bastos dominan tus lecturas, la pregunta suele ser sobre acción e identidad.' },
  { q: '¿Son Aries y Leo compatibles en el tarot?', a: 'Sí — ambos son signos de Fuego y ambos tienen asociaciones fuertes con los Arcanos Mayores (El Emperador para Aries, La Fuerza para Leo). En el trabajo con tarot estas firmas se complementan: Aries aporta la chispa del comienzo, Leo aporta el calor que permite que la chispa se sostenga. Las lecturas sobre dinámicas Aries-Leo suelen sacar cartas de Bastos por ambos lados.' },
]

export default function AriesPage() {
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

      {/* Breadcrumb */}
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <Link href="/es" style={{ color: 'var(--muted)' }}>Inicio</Link>
        <span>/</span>
        <Link href="/es/zodiaco" style={{ color: 'var(--muted)' }}>Zodíaco</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>{sign.name}</span>
      </nav>

      {/* Hero */}
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

      {/* Ruling Tarot Card */}
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

      {/* Element Connection */}
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

      {/* Spreads */}
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

      {/* Themes */}
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

      {/* FAQ */}
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

      {/* CTA */}
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

      {/* Prev / Next */}
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
