import type { Metadata } from 'next'
import Link from 'next/link'
import { CARDS } from '@/lib/cards'
import { localizeCardSlug } from '@/lib/i18n/slugs'
import cardsEsRaw from '@/messages/es/cards.json'

export const metadata: Metadata = {
  title: 'Palo de Pentáculos — Las 14 cartas, elemento y significados | TarotAxis',
  description: 'El palo de Pentáculos en el tarot — elemento Tierra, regente del dinero, el trabajo, el cuerpo y el mundo material. Las 14 cartas del As al Rey con palabras clave.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/palos-del-tarot/pentaculos',
    languages: {
      'en': 'https://tarotaxis.com/tarot-suits/pentacles',
      'es': 'https://tarotaxis.com/es/palos-del-tarot/pentaculos',
      'x-default': 'https://tarotaxis.com/tarot-suits/pentacles',
    },
  },
  openGraph: {
    title: 'Palo de Pentáculos — Las 14 cartas, elemento y significados',
    description: 'El palo de Pentáculos — elemento Tierra, dinero y mundo material. Las 14 cartas exploradas en profundidad.',
    url: 'https://tarotaxis.com/es/palos-del-tarot/pentaculos',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const ES_NAMES: Record<string, string> = {
  'ace-of-pentacles': 'As de Pentáculos',
  'two-of-pentacles': 'Dos de Pentáculos',
  'three-of-pentacles': 'Tres de Pentáculos',
  'four-of-pentacles': 'Cuatro de Pentáculos',
  'five-of-pentacles': 'Cinco de Pentáculos',
  'six-of-pentacles': 'Seis de Pentáculos',
  'seven-of-pentacles': 'Siete de Pentáculos',
  'eight-of-pentacles': 'Ocho de Pentáculos',
  'nine-of-pentacles': 'Nueve de Pentáculos',
  'ten-of-pentacles': 'Diez de Pentáculos',
  'page-of-pentacles': 'Sota de Pentáculos',
  'knight-of-pentacles': 'Caballero de Pentáculos',
  'queen-of-pentacles': 'Reina de Pentáculos',
  'king-of-pentacles': 'Rey de Pentáculos',
}

interface EsCardRecord {
  name?: string
  kw_up?: string[]
}

const cardsEs = cardsEsRaw as Record<string, EsCardRecord>

function cardNameEs(slug: string, fallback: string): string {
  return cardsEs[slug]?.name ?? ES_NAMES[slug] ?? fallback
}

function cardKeywordsEs(slug: string, fallback: string[]): string[] {
  return cardsEs[slug]?.kw_up ?? fallback
}

const THEMES = [
  { title: 'Dinero y finanzas', text: 'Ingresos, ahorros, inversiones y la realidad práctica de cómo fluyen los recursos por tu vida.' },
  { title: 'Carrera y oficio', text: 'El trabajo como vocación — la lenta construcción de la destreza, la satisfacción de la maestría, el oficio al que entregas tus días.' },
  { title: 'Hogar y estabilidad', text: 'Casa, hogar, vivienda. El espacio físico en el que vives y la seguridad que te ofrece, o que no te ofrece.' },
  { title: 'Cuerpo y salud', text: 'Los Pentáculos son un palo encarnado. Alimentación, ejercicio, niveles de energía y el ritmo constante del bienestar físico.' },
  { title: 'Manifestación lenta', text: 'Lo que crece de semilla a cosecha. Los Pentáculos enseñan que la verdadera abundancia se compone con el tiempo paciente.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué representa el palo de Pentáculos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El palo de Pentáculos representa el mundo material — dinero, trabajo, cuerpo, hogar y el crecimiento lento y constante de la realidad práctica. Regidos por el elemento Tierra, los Pentáculos se ocupan de lo que se puede tocar, medir y construir. Hablan de la carrera y la artesanía, la seguridad financiera, la salud física, la herencia familiar y los largos ciclos pacientes mediante los cuales se construye una vida de sustancia. Cuando aparecen los Pentáculos, la pregunta está anclada en lo que es real y material más que en lo que es sentido o imaginado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Son los Pentáculos solo sobre dinero en el tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los Pentáculos hablan de dinero, pero el dinero es solo una expresión de un ámbito mucho más amplio. El tema profundo es todo el mundo material: la salud física, el hogar en el que vives, el trabajo de tus manos, la comida sobre tu mesa, el cuerpo que habitas. Una carta de Pentáculos en una lectura de finanzas habla genuinamente de finanzas — pero la misma carta en una lectura de salud habla de vitalidad, en una de carrera de vocación, y en una de hogar de seguridad y arraigo. Lee los Pentáculos como el palo de la vida práctica y encarnada.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué elemento se asocia a los Pentáculos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los Pentáculos corresponden al elemento Tierra. La Tierra es el elemento de la estabilidad, la fertilidad, el crecimiento lento y la realidad física — la tierra que sostiene la semilla, el cuerpo que sostiene al espíritu, el suelo que sostiene la casa. Astrológicamente, los signos de tierra Tauro, Virgo y Capricornio comparten la cualidad elemental de los Pentáculos: practicidad, fiabilidad, placer sensorial en el mundo físico y la mirada larga que construye algo duradero. El pentáculo mismo — una estrella de cinco puntas dentro de un círculo — es un antiguo símbolo de los elementos en equilibrio terrestre.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué significa que los Pentáculos dominen una lectura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cuando los Pentáculos dominan una tirada, la situación es esencialmente práctica y material — sin importar cómo se haya formulado. Una lectura de relación cargada de Pentáculos pregunta por las finanzas compartidas, el hogar, el compromiso a largo plazo y la compatibilidad tangible, no por los sentimientos románticos. Una lectura de carrera llena de Pentáculos confirma que el trabajo en sí es sólido y que el camino es de construcción paciente. Muchos Pentáculos también pueden indicar que el ritmo es lento más que dramático, y que se te está pidiendo paciencia y esfuerzo constante.',
      },
    },
  ],
}

export default function PentaculosSuitPage() {
  const pentacles = CARDS.filter(c => c.suit === 'pentacles')

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
        <span style={{ color: 'var(--gold)' }}>Pentáculos</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>🜃</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          El Palo de Pentáculos
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Los Pentáculos son las cartas del mundo material — dinero, trabajo, cuerpo y hogar. Regido por el elemento constante de la Tierra, este palo honra los lentos ciclos pacientes mediante los cuales se construye una vida de sustancia.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['14 cartas', 'Elemento Tierra', 'Trabajo y dinero'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* About the suit */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Sobre el palo de Pentáculos
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            El pentáculo — una estrella de cinco puntas dentro de un círculo — es un antiguo símbolo de los cuatro elementos sostenidos en equilibrio por el quinto, el espíritu. En el tarot, el pentáculo se representa como una moneda, un disco, una pieza de sólida moneda terrenal. El palo toma su nombre de esta imagen porque los Pentáculos son el palo de lo que se puede sostener en la mano: la moneda, el pan, la herramienta, el propio cuerpo. Su elemento es la Tierra, el elemento del tiempo lento, los sistemas de raíces, el suelo que devuelve solo lo que ha sido cuidadosamente atendido.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Los Pentáculos rigen todo el ámbito práctico — finanzas y ahorros, carrera y oficio, hogar y casa, cuerpo y salud, la manifestación de sueños en forma sólida. Cuando le preguntas a las cartas sobre algo que requiere un esfuerzo constante en el mundo real, los Pentáculos hablarán. Son el palo del artesano, del jardinero, del inversor a largo plazo, del cabeza de familia. Creen en la dignidad del trabajo paciente y en la realidad de las ganancias que se componen lentamente.
          </p>
          <p>
            Reconoces la energía de los Pentáculos en una lectura por su solidez y por su insistencia en lo práctico. Una tirada cargada de Pentáculos no se conmoverá con intenciones elevadas; preguntará qué estás haciendo realmente, qué puedes contar realmente, qué es genuinamente sostenible. La medicina de los Pentáculos es el arraigo — el regreso desde la ansiedad y la abstracción a los pies sobre el suelo y al trabajo del día.
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
            Los Pentáculos contienen la misma estructura de catorce cartas que todos los palos: un As, nueve cartas numeradas del Dos al Diez, y cuatro cartas de la corte. El As de Pentáculos es una apertura material — una nueva oportunidad, un comienzo financiero, una semilla de abundancia práctica. Las cartas numeradas siguen el viaje de la construcción: equilibrio en el Dos, colaboración en el Tres, conservación en el Cuatro, dificultad en el Cinco, generosidad en el Seis, paciencia en el Siete, maestría en el Ocho, suficiencia en el Nueve, y la riqueza multigeneracional y el legado del Diez.
          </p>
          <p>
            Las cartas de la corte de Pentáculos representan la sabiduría material en cuatro etapas. La Sota de Pentáculos es la aprendiz estudiosa — ávida de aprender un oficio, lista para construir algo real. El Caballero de Pentáculos es constante, fiable y metódico, el trabajador que se presenta día tras día. La Reina de Pentáculos es la abundancia nutritiva: práctica, generosa, encarnada, sosteniendo el hogar y la familia con gracia. El Rey de Pentáculos es el maestro del mundo material — el proveedor establecido, el anciano financiero, el fundador de un legado duradero.
          </p>
        </div>
      </div>

      {/* All 14 cards */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '.06em' }}>
          Las 14 cartas de Pentáculos
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '.75rem' }}>
          {pentacles.map(c => (
            <Link key={c.slug} href={`/es/cartas/${localizeCardSlug(c.slug, 'es')}`} style={{ display: 'block', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem', textDecoration: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '.5rem', marginBottom: '.4rem' }}>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', letterSpacing: '.03em' }}>{cardNameEs(c.slug, c.name)}</div>
                <span style={{ flexShrink: 0, padding: '.15rem .55rem', borderRadius: 20, fontSize: '.6rem', background: 'rgba(201,168,76,.1)', color: 'var(--gold)', fontFamily: "'Cinzel',serif", letterSpacing: '.06em' }}>{c.number}</span>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '.76rem', lineHeight: 1.55, margin: 0, fontStyle: 'italic' }}>
                {cardKeywordsEs(c.slug, c.kw_up).slice(0, 3).join(' · ')}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Common Themes */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Temas frecuentes en Pentáculos
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
          Pentáculos es uno de cuatro. Continúa tu viaje a través de los Arcanos Menores con los otros palos elementales.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/palos-del-tarot/copas" style={{ padding: '.85rem 1.5rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            Copas · Agua
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
