import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tarot para los 12 Signos del Zodíaco — Tu Carta Regente | TarotAxis',
  description:
    'Cada signo del zodíaco tiene una carta de tarot regente y un elemento. Descubre tu Arcano Mayor, tu elemento y las tiradas que resuenan con tu energía.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/zodiaco',
    languages: {
      'en': 'https://tarotaxis.com/zodiac',
      'es': 'https://tarotaxis.com/es/zodiaco',
      'x-default': 'https://tarotaxis.com/zodiac',
    },
  },
  openGraph: {
    title: 'Tarot para los 12 Signos del Zodíaco — Tu Carta Regente',
    description:
      'Cada signo del zodíaco tiene una carta de tarot regente y un elemento. Descubre tu Arcano Mayor, tu elemento y las tiradas que resuenan con tu energía.',
    url: 'https://tarotaxis.com/es/zodiaco',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

type SignData = {
  slug: string
  name: string
  symbol: string
  dates: string
  element: 'Fuego' | 'Tierra' | 'Aire' | 'Agua'
  modality: 'Cardinal' | 'Fija' | 'Mutable'
  ruler: string
  rulingCard: { slug: string; name: string }
  theme: string
}

const ZODIAC: SignData[] = [
  { slug: 'aries',       name: 'Aries',       symbol: '♈', dates: '21 mar — 19 abr', element: 'Fuego',  modality: 'Cardinal', ruler: 'Marte',           rulingCard: { slug: 'el-emperador',          name: 'El Emperador' },     theme: 'Iniciación, coraje, el yo en bruto' },
  { slug: 'tauro',       name: 'Tauro',       symbol: '♉', dates: '20 abr — 20 may', element: 'Tierra', modality: 'Fija',     ruler: 'Venus',           rulingCard: { slug: 'el-hierofante',         name: 'El Hierofante' },    theme: 'Constancia, presencia sensual, lo que perdura' },
  { slug: 'geminis',     name: 'Géminis',     symbol: '♊', dates: '21 may — 20 jun', element: 'Aire',   modality: 'Mutable',  ruler: 'Mercurio',        rulingCard: { slug: 'los-enamorados',        name: 'Los Enamorados' },   theme: 'Curiosidad, comunicación, sostener dos verdades' },
  { slug: 'cancer',      name: 'Cáncer',      symbol: '♋', dates: '21 jun — 22 jul', element: 'Agua',   modality: 'Cardinal', ruler: 'Luna',            rulingCard: { slug: 'el-carro',              name: 'El Carro' },         theme: 'Contención, armadura emocional, el hogar que construimos' },
  { slug: 'leo',         name: 'Leo',         symbol: '♌', dates: '23 jul — 22 ago', element: 'Fuego',  modality: 'Fija',     ruler: 'Sol',             rulingCard: { slug: 'la-fuerza',             name: 'La Fuerza' },        theme: 'Corazón, coraje visible, el gobernante gentil' },
  { slug: 'virgo',       name: 'Virgo',       symbol: '♍', dates: '23 ago — 22 sep', element: 'Tierra', modality: 'Mutable',  ruler: 'Mercurio',        rulingCard: { slug: 'el-ermitano',           name: 'El Ermitaño' },      theme: 'Discernimiento, devoción al oficio, el camino interior' },
  { slug: 'libra',       name: 'Libra',       symbol: '♎', dates: '23 sep — 22 oct', element: 'Aire',   modality: 'Cardinal', ruler: 'Venus',           rulingCard: { slug: 'la-justicia',           name: 'La Justicia' },      theme: 'Equilibrio, testigo justo, el peso de cada verdad' },
  { slug: 'escorpio',    name: 'Escorpio',    symbol: '♏', dates: '23 oct — 21 nov', element: 'Agua',   modality: 'Fija',     ruler: 'Plutón/Marte',    rulingCard: { slug: 'la-muerte',             name: 'La Muerte' },        theme: 'Transformación, lo que debe terminar para que la vida continúe' },
  { slug: 'sagitario',   name: 'Sagitario',   symbol: '♐', dates: '22 nov — 21 dic', element: 'Fuego',  modality: 'Mutable',  ruler: 'Júpiter',         rulingCard: { slug: 'la-templanza',          name: 'La Templanza' },     theme: 'Visión, el arco largo, mezclar opuestos con paciencia' },
  { slug: 'capricornio', name: 'Capricornio', symbol: '♑', dates: '22 dic — 19 ene', element: 'Tierra', modality: 'Cardinal', ruler: 'Saturno',         rulingCard: { slug: 'el-diablo',             name: 'El Diablo' },        theme: 'Ambición, estructura, las ataduras que confundimos con columna vertebral' },
  { slug: 'acuario',     name: 'Acuario',     symbol: '♒', dates: '20 ene — 18 feb', element: 'Aire',   modality: 'Fija',     ruler: 'Saturno/Urano',   rulingCard: { slug: 'la-estrella',           name: 'La Estrella' },      theme: 'Esperanza, visión colectiva, el futuro ya dentro de ti' },
  { slug: 'piscis',      name: 'Piscis',      symbol: '♓', dates: '19 feb — 20 mar', element: 'Agua',   modality: 'Mutable',  ruler: 'Júpiter/Neptuno', rulingCard: { slug: 'la-luna',               name: 'La Luna' },          theme: 'Disolución, sueños, el borde poroso del yo' },
]

const ELEMENT_COLOUR: Record<SignData['element'], string> = {
  Fuego:  'rgba(201,90,60,.18)',
  Tierra: 'rgba(120,140,80,.18)',
  Aire:   'rgba(140,170,200,.18)',
  Agua:   'rgba(90,120,180,.18)',
}

const ELEMENT_BORDER: Record<SignData['element'], string> = {
  Fuego:  'rgba(201,90,60,.4)',
  Tierra: 'rgba(120,140,80,.4)',
  Aire:   'rgba(140,170,200,.4)',
  Agua:   'rgba(90,120,180,.4)',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuál es mi carta de tarot del zodíaco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tu carta de tarot del zodíaco es el Arcano Mayor tradicionalmente asociado a tu signo solar a través de las correspondencias de la Golden Dawn. Por ejemplo, El Emperador rige a Aries, El Hierofante a Tauro, Los Enamorados a Géminis, y así a través de los doce signos. El emparejamiento se basa en las cualidades elementales y planetarias de la carta y del signo — ambos expresan el mismo arquetipo en un lenguaje diferente. Para encontrar el tuyo, busca el rango de fechas en el que cae tu cumpleaños y sigue el enlace a la página correspondiente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se conectan el tarot y la astrología?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tarot y la astrología comparten el mismo vocabulario simbólico. Ambos sistemas mapean doce energías arquetípicas sobre los cuatro elementos — Fuego, Tierra, Aire y Agua — y ambos usan planetas, signos y elementos para describir cómo un estado interior se desarrolla en el tiempo. La Golden Dawn, una orden ocultista del siglo XIX, formalizó las correspondencias que la mayoría de los lectores todavía usa hoy: cada uno de los veintidós Arcanos Mayores se alinea con un signo, un planeta o un elemento, y cada uno de los cuatro palos del tarot se alinea con uno de los cuatro elementos. Esto significa que una lectura de tarot también es, de manera silenciosa, una lectura astrológica.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué cada signo del zodíaco tiene una carta del Arcano Mayor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hay doce signos del zodíaco y veintidós Arcanos Mayores, así que la correspondencia no es uno a uno — las diez cartas restantes se alinean con planetas y con los elementos mismos. Los doce signos se emparejan cada uno con un Arcano Mayor cuya energía refleja la suya: Aries el iniciador recibe El Emperador, el gobernante fundador; Libra que pesa las verdades recibe La Justicia; Escorpio el transformador recibe La Muerte; y así sucesivamente. Estos emparejamientos no son arbitrarios. Fueron elegidos porque el arquetipo de la carta y el arquetipo del signo se solapan genuinamente en temperamento, lección y don.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo usar mi carta de tarot del zodíaco como guía?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Tu carta de tarot del zodíaco es una de varias "cartas firma" en el trabajo del tarot — junto con tu carta natal y tu carta del año — y muchos lectores mantienen la suya visible durante las lecturas como punto de referencia. Meditar sobre sus imágenes, leer sus significados y notar cuándo aparece en tus tiradas puede profundizar tu sentido de cómo la energía del signo se está moviendo en tu vida ahora mismo. No predecirá tu futuro, pero te dará un espejo claro y constante al que consultar.',
      },
    },
  ],
}

export default function ZodiacoHubPage() {
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
        <span style={{ color: 'var(--gold)' }}>Zodíaco</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>♈ ♉ ♊</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tarot para tu Signo del Zodíaco
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 580, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          El tarot y la astrología comparten el mismo alfabeto. Cada signo del zodíaco tiene un Arcano Mayor regente, un elemento y una constelación de tiradas que encajan con su temperamento. Encuentra tu signo abajo y descubre el arquetipo que habla tu lengua.
        </p>
      </div>

      {/* How tarot and astrology connect */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Cómo se conectan el tarot y la astrología
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            El tarot y la astrología no fueron diseñados juntos, pero a lo largo de los siglos han crecido tan completamente el uno hacia el otro que la mayoría de los lectores modernos los tratan como dos dialectos del mismo lenguaje simbólico. El puente entre ambos fue construido en gran parte a finales del siglo XIX por la Orden Hermética de la Golden Dawn, cuyos miembros asignaron cada carta del Arcano Mayor a un signo zodiacal, un planeta o un elemento específico. Esas correspondencias son la base de casi todo mazo de tarot publicado desde entonces — el Rider–Waite–Smith incluido.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            El mapeo descansa sobre los cuatro elementos. El Fuego es el palo de los Bastos y rige a Aries, Leo y Sagitario. El Agua es el palo de las Copas y rige a Cáncer, Escorpio y Piscis. El Aire es el palo de las Espadas y rige a Géminis, Libra y Acuario. La Tierra es el palo de los Pentáculos y rige a Tauro, Virgo y Capricornio. Cuando una lectura de tarot tiene mucho peso en un palo, también se inclina hacia ese elemento del zodíaco — y hacia el tipo de pregunta que ese elemento sabe responder.
          </p>
          <p>
            El Arcano Mayor añade una segunda capa. Cada uno de los doce signos zodiacales se empareja con una sola carta mayor cuyo arquetipo refleja al signo en su nivel más profundo. El Emperador para Aries nombra la energía de tomar el trono. La Justicia para Libra nombra la energía del testigo justo. La Muerte para Escorpio nombra la energía del final necesario. Estos emparejamientos son correspondencias, no prescripciones — te dan un punto de partida, no un veredicto. Úsalos para profundizar tu lectura, nunca para aplanarla.
          </p>
        </div>
      </div>

      {/* 12 sign cards grid */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Los doce signos
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '.85rem' }}>
          {ZODIAC.map(sign => (
            <Link
              key={sign.slug}
              href={`/es/zodiaco/${sign.slug}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: 'var(--on-bg-03)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '1.1rem 1.25rem',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '.6rem' }}>
                <div style={{ fontSize: '1.8rem', color: 'var(--gold)', lineHeight: 1 }}>{sign.symbol}</div>
                <span
                  style={{
                    padding: '.2rem .6rem',
                    background: ELEMENT_COLOUR[sign.element],
                    border: `1px solid ${ELEMENT_BORDER[sign.element]}`,
                    borderRadius: 20,
                    fontSize: '.65rem',
                    fontFamily: "'Cinzel',serif",
                    letterSpacing: '.1em',
                    color: 'var(--text)',
                    textTransform: 'uppercase',
                  }}
                >
                  {sign.element}
                </span>
              </div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1rem', color: 'var(--gold)', marginBottom: '.25rem' }}>
                {sign.name}
              </div>
              <div style={{ fontSize: '.75rem', color: 'var(--muted)', marginBottom: '.6rem' }}>
                {sign.dates}
              </div>
              <div style={{ fontSize: '.78rem', color: 'var(--text)', opacity: .85, marginTop: 'auto', paddingTop: '.5rem', borderTop: '1px dashed var(--border)' }}>
                Regido por <span style={{ color: 'var(--gold)' }}>{sign.rulingCard.name}</span>
              </div>
            </Link>
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Profundiza en las cartas</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Explora todos los Arcanos Mayores, o saca una lectura gratis ahora mismo.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/cartas" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Todos los significados
          </Link>
          <Link href="/es/lectura-gratis" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Lectura gratis
          </Link>
          <Link href="/es/carta-del-dia" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Carta del día
          </Link>
        </div>
      </div>
    </div>
  )
}
