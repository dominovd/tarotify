import type { Metadata } from 'next'
import Link from 'next/link'
import { CARDS } from '@/lib/cards'
import { localizeCardSlug } from '@/lib/i18n/slugs'

export const metadata: Metadata = {
  title: 'Palo de Bastos — Las 14 cartas, elemento y significados | TarotAxis',
  description: 'El palo de Bastos en el tarot — elemento Fuego, regente de la pasión, la acción, la voluntad y la creatividad. Las 14 cartas del As al Rey con palabras clave.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/palos-del-tarot/bastos',
    languages: {
      'en': 'https://tarotaxis.com/tarot-suits/wands',
      'es': 'https://tarotaxis.com/es/palos-del-tarot/bastos',
      'x-default': 'https://tarotaxis.com/tarot-suits/wands',
    },
  },
  openGraph: {
    title: 'Palo de Bastos — Las 14 cartas, elemento y significados',
    description: 'El palo de Bastos — elemento Fuego, pasión e impulso creativo. Las 14 cartas exploradas en profundidad.',
    url: 'https://tarotaxis.com/es/palos-del-tarot/bastos',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const ES_NAMES: Record<string, string> = {
  'ace-of-wands': 'As de Bastos',
  'two-of-wands': 'Dos de Bastos',
  'three-of-wands': 'Tres de Bastos',
  'four-of-wands': 'Cuatro de Bastos',
  'five-of-wands': 'Cinco de Bastos',
  'six-of-wands': 'Seis de Bastos',
  'seven-of-wands': 'Siete de Bastos',
  'eight-of-wands': 'Ocho de Bastos',
  'nine-of-wands': 'Nueve de Bastos',
  'ten-of-wands': 'Diez de Bastos',
  'page-of-wands': 'Sota de Bastos',
  'knight-of-wands': 'Caballero de Bastos',
  'queen-of-wands': 'Reina de Bastos',
  'king-of-wands': 'Rey de Bastos',
}

const THEMES = [
  { title: 'Pasión e impulso', text: 'Lo que te enciende, lo que no puedes evitar perseguir, el fuego que te saca de la cama por la mañana.' },
  { title: 'Creatividad y proyectos', text: 'Trabajo creativo, nuevos emprendimientos, proyectos ambiciosos — todo lo que requiere energía imaginativa sostenida.' },
  { title: 'Acción e impulso', text: 'Los Bastos se mueven. Hablan de dar el primer paso, de generar impulso y de negarse al estancamiento.' },
  { title: 'Coraje y voluntad', text: 'La fuerza para afrontar la oposición, defender lo que importa y mantenerte firme cuando otros no lo harían.' },
  { title: 'Sexualidad y vitalidad', text: 'Fuego en el cuerpo — deseo, química, fuerza vital, la chispa de estar plenamente vivo en el momento.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué representa el palo de Bastos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El palo de Bastos representa la pasión, la acción, la voluntad y el impulso creativo — el fuego de estar plenamente vivo y comprometido. Regidos por el elemento Fuego, los Bastos se ocupan de lo que quieres, de aquello por lo que estás dispuesto a luchar y de aquello en lo que estás poniendo tu energía. Hablan de proyectos creativos, ambiciones, química sexual, coraje, liderazgo y el impulso de una vida en movimiento. Cuando aparecen los Bastos, la pregunta es de energía y compromiso: ¿qué vas a hacer realmente, y cuánto fuego tienes para ello?',
      },
    },
    {
      '@type': 'Question',
      name: '¿Hablan los Bastos de carrera o de romance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los Bastos hablan de ambos, y de ninguno exclusivamente. En una lectura de carrera, los Bastos señalan la ambición, el impulso creativo, el liderazgo y la energía que aportas a tu trabajo — el fuego detrás del rol más que su dimensión financiera, que pertenece a los Pentáculos. En una lectura romántica, los Bastos señalan química, atracción, pasión y energía sexual — el calor entre dos personas más que el lazo emocional profundo, que pertenece a las Copas. Siempre que la pregunta sea realmente sobre energía, voluntad o aquello hacia lo que alguien se siente movido, los Bastos hablarán.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué elemento se asocia a los Bastos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los Bastos corresponden al elemento Fuego. El Fuego es el elemento de la pasión, la voluntad, la acción y el espíritu creativo — la chispa que enciende, la llama que calienta, el incendio que transforma. Astrológicamente, los signos de fuego Aries, Leo y Sagitario comparten la cualidad elemental de los Bastos: audacia, carisma, optimismo, ambición y amor por la aventura. La vara o bastón en el tarot suele representarse con hojas o brotes, indicando una rama viva — fuerza vital en movimiento, la madera verde que aún sustenta la llama.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué significa tener muchos Bastos en una lectura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cuando una tirada está cargada de Bastos, la pregunta es sobre energía, voluntad y acción. Sea cual sea el tema de superficie, las cartas insisten en que la lectura trata realmente de aquello hacia lo que estás movido y de cuánto fuego tienes para ello. Múltiples Bastos suelen aparecer cuando una persona está en una fase de iniciación audaz — un proyecto nuevo, un capítulo nuevo, un brote creativo. También pueden indicar conflicto y competencia cuando las cartas son desafiantes. Lee muchos Bastos como una llamada a actuar más que a analizar.',
      },
    },
  ],
}

export default function BastosSuitPage() {
  const wands = CARDS.filter(c => c.suit === 'wands')

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
        <span style={{ color: 'var(--gold)' }}>Bastos</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>🜂</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          El Palo de Bastos
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Los Bastos son las cartas del fuego — pasión, acción, voluntad e impulso creativo. Regido por el elemento Fuego, este palo habla de lo que te enciende y de aquello a lo que estás dispuesto a entregar tu energía.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['14 cartas', 'Elemento Fuego', 'Pasión y acción'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* About the suit */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Sobre el palo de Bastos
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            El basto es una rama viva — un bastón cortado de un árbol pero que todavía muestra hojas y brotes en muchas ilustraciones de tarot. Este detalle importa. Un basto no es un trozo de madera muerta; es un vehículo de fuerza vital, la misma energía verde que impulsa la savia hacia arriba y empuja los brotes a través de la piedra. El elemento Fuego que anima al palo es el elemento de la voluntad, la pasión y el espíritu creativo — la chispa que se vuelve llama que se vuelve la obra de toda una vida.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Los Bastos rigen todo el ámbito de la energía y la acción — la ambición, los proyectos creativos, la sexualidad, el coraje, el liderazgo, los emprendimientos, los viajes, el impulso. Son el palo del artista, del fundador, del explorador, del amante en el calor inicial de la atracción. También son el palo del conflicto y la competencia, porque el fuego que no tiene a dónde ir quemará lo que pueda alcanzar. Cuando aparecen los Bastos, la pregunta es fundamentalmente sobre aquello a lo que estás dispuesto a comprometerte — y aquello tras lo cual ya no estás dispuesto a poner energía.
          </p>
          <p>
            Reconoces la energía de los Bastos en una lectura por su urgencia y por su insistencia en el movimiento. Una tirada cargada de Bastos no te dejará permanecer en la deliberación; preguntará qué vas a hacer, y cuándo. La medicina de los Bastos es la acción tomada desde la pasión genuina — la diferencia entre forzarte hacia una meta y ser atraído por algo que genuinamente te enciende.
          </p>
        </div>
      </div>

      {/* Aces, Pips, Court */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          As, cartas numeradas y cartas de la corte
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Los Bastos contienen la misma estructura de catorce cartas que todos los palos: un As, nueve cartas numeradas del Dos al Diez, y cuatro cartas de la corte. El As de Bastos es una ignición creativa — una nueva pasión, un proyecto que comienza, una chispa fresca de inspiración. Las cartas numeradas trazan el viaje de un emprendimiento ardiente: planificación en el Dos, expansión en el Tres, celebración en el Cuatro, conflicto en el Cinco, victoria en el Seis, perseverancia en el Siete, movimiento veloz en el Ocho, resiliencia en el Nueve, y la pesada carga del exceso de compromiso en el Diez.
          </p>
          <p>
            Las cuatro cartas de la corte representan el desarrollo de la energía del fuego. La Sota de Bastos es la principiante entusiasta — curiosa, atrevida, ansiosa por comenzar. El Caballero de Bastos es la acción audaz hecha cuerpo: rápido, carismático, a veces imprudente, siempre en movimiento. La Reina de Bastos es el liderazgo creativo confiado — cálida, magnética, independiente, cómoda siendo vista. El Rey de Bastos es la maestría visionaria: el fundador que ve lo que podría ser y tiene el coraje y la autoridad para traerlo a la existencia.
          </p>
        </div>
      </div>

      {/* All 14 cards */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '.06em' }}>
          Las 14 cartas de Bastos
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '.75rem' }}>
          {wands.map(c => (
            <Link key={c.slug} href={`/es/cartas/${localizeCardSlug(c.slug, 'es')}`} style={{ display: 'block', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem', textDecoration: 'none' }}>
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
          Temas frecuentes en Bastos
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: '.75rem' }}>
          {THEMES.map(t => (
            <div key={t.title} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
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
            <div key={item.name} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
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
          Bastos es uno de cuatro. Continúa tu viaje a través de los Arcanos Menores con los otros palos elementales.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/palos-del-tarot/copas" style={{ padding: '.85rem 1.5rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            Copas · Agua
          </Link>
          <Link href="/es/palos-del-tarot/pentaculos" style={{ padding: '.85rem 1.5rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            Pentáculos · Tierra
          </Link>
          <Link href="/es/palos-del-tarot/espadas" style={{ padding: '.85rem 1.5rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            Espadas · Aire
          </Link>
          <Link href="/es/palos-del-tarot" style={{ padding: '.85rem 1.5rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            ✦ Todos los palos
          </Link>
        </div>
      </div>
    </div>
  )
}
