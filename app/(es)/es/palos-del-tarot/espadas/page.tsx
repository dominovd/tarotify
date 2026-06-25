import type { Metadata } from 'next'
import Link from 'next/link'
import { CARDS } from '@/lib/cards'
import { localizeCardSlug } from '@/lib/i18n/slugs'
import cardsEsRaw from '@/messages/es/cards.json'

export const metadata: Metadata = {
  title: 'Palo de Espadas — Las 14 cartas, elemento y significados | TarotAxis',
  description: 'El palo de Espadas en el tarot — elemento Aire, regente del pensamiento, la verdad y la comunicación. Las 14 cartas del As al Rey con palabras clave.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/palos-del-tarot/espadas',
    languages: {
      'en': 'https://tarotaxis.com/tarot-suits/swords',
      'es': 'https://tarotaxis.com/es/palos-del-tarot/espadas',
      'x-default': 'https://tarotaxis.com/tarot-suits/swords',
    },
  },
  openGraph: {
    title: 'Palo de Espadas — Las 14 cartas, elemento y significados',
    description: 'El palo de Espadas — elemento Aire, pensamiento y verdad. Las 14 cartas exploradas en profundidad.',
    url: 'https://tarotaxis.com/es/palos-del-tarot/espadas',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const ES_NAMES: Record<string, string> = {
  'ace-of-swords': 'As de Espadas',
  'two-of-swords': 'Dos de Espadas',
  'three-of-swords': 'Tres de Espadas',
  'four-of-swords': 'Cuatro de Espadas',
  'five-of-swords': 'Cinco de Espadas',
  'six-of-swords': 'Seis de Espadas',
  'seven-of-swords': 'Siete de Espadas',
  'eight-of-swords': 'Ocho de Espadas',
  'nine-of-swords': 'Nueve de Espadas',
  'ten-of-swords': 'Diez de Espadas',
  'page-of-swords': 'Sota de Espadas',
  'knight-of-swords': 'Caballero de Espadas',
  'queen-of-swords': 'Reina de Espadas',
  'king-of-swords': 'Rey de Espadas',
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
  { title: 'Verdad y honestidad', text: 'El corte limpio de ver lo que realmente está allí. Las Espadas se niegan a halagar y se niegan a mentir.' },
  { title: 'Decisiones y claridad', text: 'Cuando finalmente hay que tomar una decisión, las Espadas llegan para afilar la mente y poner fin al estancamiento.' },
  { title: 'Comunicación', text: 'Palabras, conversaciones, acuerdos, contratos escritos — el ámbito del lenguaje y de cómo da forma a la realidad.' },
  { title: 'Conflicto y resolución', text: 'Discusiones, separaciones, disputas — y el trabajo difícil pero liberador de resolverlas con honestidad.' },
  { title: 'Patrones mentales', text: 'Ansiedad, sobrepensar, creencias limitantes — y la disciplina de reconocer las jaulas que la mente se construye a sí misma.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Por qué se considera a las Espadas un palo difícil?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las Espadas tienen reputación de ser el palo difícil porque sus imágenes son a menudo crudas — el desamor en el Tres, la restricción en el Ocho, la ansiedad en el Nueve, los finales dolorosos en el Diez. Pero esta dificultad no es lo mismo que mala suerte. Las Espadas nos muestran las verdades que hemos estado evitando: la conversación que seguimos posponiendo, la creencia que nos retiene, la situación que sabemos que ha terminado pero que no logramos nombrar. Sus cortes son limpios. Bien leídas, las Espadas no son el palo del sufrimiento, sino el palo de la honestidad necesaria — la medicina que pone fin al dolor más largo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué representa el palo de Espadas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las Espadas representan el ámbito de la mente — pensamiento, lenguaje, intelecto, comunicación, decisiones, conflicto y el difícil trabajo de decir y escuchar la verdad. Regidas por el elemento Aire, las Espadas se ocupan de cómo pensamos sobre una situación y de lo que realmente se dice sobre ella. Hablan de negociaciones, contratos, asuntos legales, discusiones, salud mental, ansiedad, claridad y las epifanías que llegan cuando la mente finalmente atraviesa la confusión. Cuando aparecen las Espadas, la pregunta vive en la cabeza y en la lengua.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué elemento corresponde a las Espadas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las Espadas corresponden al elemento Aire. El Aire es el elemento del pensamiento, el lenguaje, las ideas y el movimiento — la respiración, la palabra hablada, la brisa que despeja la cabeza, la tormenta que limpia la situación. Astrológicamente, los signos de aire Géminis, Libra y Acuario comparten la cualidad elemental de las Espadas: rapidez intelectual, fluidez con el lenguaje, amor por la equidad y tendencia a vivir más en la mente que en el cuerpo. La imagen de una espada en el tarot representa el filo cortante del discernimiento claro.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué significa tener muchas Espadas en una lectura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cuando una tirada está cargada de Espadas, la situación está dominada por el pensamiento, la comunicación o el conflicto. A menudo indica que la persona que lee está en su cabeza — sobreanalizando, sin poder dormir, ensayando discusiones. También puede indicar que es necesario tener una conversación real, o tomar una decisión real, antes de que la situación pueda avanzar. Múltiples Espadas raramente hablan solo de eventos externos; suelen señalar la dimensión mental y verbal de la pregunta, y piden que se aborde con honestidad en lugar de rodearla.',
      },
    },
  ],
}

export default function EspadasSuitPage() {
  const swords = CARDS.filter(c => c.suit === 'swords')

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
        <span style={{ color: 'var(--gold)' }}>Espadas</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>🜁</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          El Palo de Espadas
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Las Espadas son las cartas de la mente — pensamiento, verdad, comunicación y decisión. Regido por el elemento Aire, este palo atraviesa la confusión con el filo limpio de la honestidad.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['14 cartas', 'Elemento Aire', 'Pensamiento y verdad'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* About the suit */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Sobre el palo de Espadas
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            La espada es un antiguo símbolo del discernimiento — la hoja que separa lo verdadero de lo falso, lo que es tuyo para conservar de lo que finalmente debe soltarse. En el tarot, la espada se sostiene en alto, se planta en la tierra o se blande en batalla, pero siempre representa el mismo poder esencial: la mente humana en su capacidad de pensar con claridad, de nombrar con precisión y de actuar conforme a lo que sabe. El elemento Aire que anima al palo es el elemento del pensamiento, la respiración y el lenguaje — aquello que se mueve invisiblemente y transforma todo lo que toca.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Las Espadas rigen todo el ámbito mental y verbal — pensar, decidir, hablar, escribir, negociar, discutir, acordar. Hablan del derecho y los contratos, las conversaciones y las confrontaciones, el diagnóstico recibido y la verdad por fin dicha. También hablan del lado sombrío de la mente: la ansiedad que corre en círculos, el sobrepensar que paraliza, la creencia que se hace pasar por hecho, el crítico interno cruel. Las Espadas muestran tanto el don de la mente como su capacidad de aprisionarse a sí misma.
          </p>
          <p>
            Reconoces la energía de las Espadas en una lectura por su agudeza y por su insistencia en la claridad. Una tirada cargada de Espadas no te dejará revolcarte en el sentimiento ni esconderte detrás de la prisa; preguntará qué piensas realmente, qué necesitas decir realmente y qué decisión has estado posponiendo. La reputación de las Espadas como el palo difícil es real, pero sus cortes son limpios. La medicina de las Espadas es la verdad honesta — dicha a uno mismo primero, luego a otros — y la libertad que sigue.
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
            Las Espadas contienen la misma estructura de catorce cartas que los otros palos: un As, nueve cartas numeradas del Dos al Diez, y cuatro cartas de la corte. El As de Espadas es una apertura mental — una epifanía, un momento de claridad, una verdad por fin nombrada. Las cartas numeradas trazan un viaje mental difícil: estancamiento en el Dos, desamor en el Tres, descanso en el Cuatro, conflicto en el Cinco, transición en el Seis, engaño en el Siete, restricción en el Ocho, ansiedad en el Nueve, y el final doloroso pero liberador del Diez.
          </p>
          <p>
            Las cuatro cartas de la corte representan la autoridad mental en distintas etapas. La Sota de Espadas es la curiosa interrogadora — aguda, alerta, recolectando información, a veces demasiado rápida para hablar. El Caballero de Espadas es directo, veloz e intelectualmente audaz, lanzándose hacia la verdad con poca paciencia para la demora. La Reina de Espadas es la sabiduría ganada a través de la dificultad: clara, justa, independiente, capaz de ver una situación sin ilusión. El Rey de Espadas es el estratega y juez curtido, aplicando el intelecto con disciplina y la justicia con cuidado.
          </p>
        </div>
      </div>

      {/* All 14 cards */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '.06em' }}>
          Las 14 cartas de Espadas
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '.75rem' }}>
          {swords.map(c => (
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
          Temas frecuentes en Espadas
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
          Espadas es uno de cuatro. Continúa tu viaje a través de los Arcanos Menores con los otros palos elementales.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/palos-del-tarot/copas" style={{ padding: '.85rem 1.5rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            Copas · Agua
          </Link>
          <Link href="/es/palos-del-tarot/pentaculos" style={{ padding: '.85rem 1.5rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.85rem', letterSpacing: '.08em' }}>
            Pentáculos · Tierra
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
