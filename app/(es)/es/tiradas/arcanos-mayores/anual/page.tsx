import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada Anual de Arcanos Mayores — Disposición de 12 Meses | TarotAxis',
  description: 'Una tirada anual de tarot con 12 cartas de Arcanos Mayores — un triunfo por mes para un mapa arquetípico del año. Úsala en cumpleaños, Año Nuevo o cualquier umbral personal.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/arcanos-mayores/anual',
    languages: {
      'en': 'https://tarotaxis.com/spreads/major/year-ahead',
      'es': 'https://tarotaxis.com/es/tiradas/arcanos-mayores/anual',
      'x-default': 'https://tarotaxis.com/spreads/major/year-ahead',
    },
  },
  openGraph: {
    title: 'Tirada Anual de Arcanos Mayores — 12 Triunfos para 12 Meses',
    description: 'Doce cartas de Arcanos Mayores, una por cada mes — un pronóstico del nivel del alma de las lecciones arquetípicas del año.',
    url: 'https://tarotaxis.com/es/tiradas/arcanos-mayores/anual',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  { num: 1, name: 'Enero', desc: 'La nota arquetípica del primer mes del año. El triunfo aquí da forma a la lección del alma en el umbral — qué se cierra del año pasado y qué está siendo iniciado.' },
  { num: 2, name: 'Febrero', desc: 'El triunfo para el mes tranquilo, a menudo interior. Suele apuntar al trabajo interior, al soñar o a una ternura relacional que pide atención.' },
  { num: 3, name: 'Marzo', desc: 'El arquetipo que rompe el patrón invernal. Una carta de agitación — qué se le pide despertar, echar raíces o moverse hacia adelante.' },
  { num: 4, name: 'Abril', desc: 'El triunfo para el umbral de la primavera. A menudo una carta de nueva identidad, coraje fresco, o un arquetipo juvenil que regresa al sistema.' },
  { num: 5, name: 'Mayo', desc: 'La energía arquetípica del florecimiento pleno. La carta aquí matiza cómo el deseo, la belleza y la fuerza creativa se moverán durante el mes.' },
  { num: 6, name: 'Junio', desc: 'El triunfo en el punto de inflexión del año. A menudo una carta de decisión, de pareja o de llegada — un momento en que un tema de larga duración revela su forma.' },
  { num: 7, name: 'Julio', desc: 'El arquetipo del interior del alto verano. Una carta que habla de vitalidad, alegría, exposición o el calor del devenir visible.' },
  { num: 8, name: 'Agosto', desc: 'El triunfo para el mes de la consolidación. A menudo una carta de fuerza, integración o trabajo con lo que ya ha madurado.' },
  { num: 9, name: 'Septiembre', desc: 'La lección arquetípica de la cosecha. Una carta de balance — qué ha crecido realmente, qué está listo para recogerse, qué no ha dado fruto.' },
  { num: 10, name: 'Octubre', desc: 'El triunfo para el descenso. Una carta que a menudo habla de liberación, desprendimiento, encuentro con el inframundo o disposición a dejar morir algo.' },
  { num: 11, name: 'Noviembre', desc: 'El arquetipo del oscuro profundo. El triunfo aquí apunta a lo que se está encontrando en ausencia de distracción — duelo, antepasados, dones ocultos.' },
  { num: 12, name: 'Diciembre', desc: 'El triunfo para el cierre del año. Una carta de retorno, culminación o umbral — la lección del alma hacia la que todo el año ha estado dando forma.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuándo es el mejor momento para hacer una tirada anual de Arcanos Mayores?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada anual es más poderosa en un umbral significativo — tu cumpleaños, el Año Nuevo, el equinoccio de primavera o de otoño, u otro punto de inflexión personal. El umbral da a las cartas un marco claro y te ayuda a sentarte con la lectura a lo largo de los meses por delante. También puedes usarla a mitad de un año si percibes que un capítulo ha cambiado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué significa si las 12 cartas son Arcanos Mayores?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En esta tirada cada posición será una carta Mayor por diseño, ya que estás sacando del mazo sólo de triunfos. Una lectura genuinamente fatídica de este tipo sugiere que el año entero operará al nivel del alma, con cada mes portando una lección arquetípica distinta más que detalle práctico ordinario. Presta especial atención a los temas que se repiten — triunfos de código ígneo en varios meses, por ejemplo, apuntan a un año de voluntad y acción.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Debo mirar todo el año a la vez o mes a mes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ambas cosas. Empieza con una mirada amplia sobre toda la tirada para sentir el arco general del año y notar los movimientos mayores — dónde aterrizan las cartas pesadas, dónde llegan las más ligeras como alivio. Después revisita la carta de cada mes al inicio de ese mes para una lectura más cercana. La carta a menudo se abre de modo distinto cuando estás dentro del tiempo que describe.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si una carta difícil aterriza en un mes importante?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una carta Mayor difícil en un mes importante no es una sentencia de desastre; es una descripción honesta del clima arquetípico. La Torre en el mes de una boda, por ejemplo, puede hablar del colapso necesario de una vieja autoimagen más que de la relación misma. Lee la carta con curiosidad, pregunta qué está enseñando, y recuerda que conocer la lección de antemano es en sí mismo una forma de gracia.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo sacar una carta clarificadora para algún mes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. Si la carta de un mes particular se siente poco clara, puedes sacar un único Arcano Mayor adicional para desarrollarla. Sé moderada/o — una carta clarificadora por mes como máximo — o la lectura pierde foco. A menudo es mejor dejar la carta original madurar y volver a ella cuando llegue el momento, ya que el significado frecuentemente se clarifica por sí solo en la experiencia vivida.',
      },
    },
  ],
}

export default function MajorAnualPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/es/tiradas" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Tiradas</Link>
          <span style={{ opacity: .4 }}>›</span>
          <Link href="/es/tiradas/arcanos-mayores" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Arcanos Mayores</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Anual</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>☉</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Tirada Anual de Arcanos Mayores
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            Doce cartas triunfales, una por cada mes — un mapa del nivel del alma de las lecciones arquetípicas que el año pretende enseñar. Sácala en un umbral y deja que madure mes a mes.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Antes de empezar
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Una tirada anual no es un pronóstico en el sentido de un parte meteorológico. Es una descripción del currículo del alma que el año está ofreciendo — los temas arquetípicos que correrán a través de los meses, las lecciones que recurrirán, los umbrales a los que serás llevada/o. Acércate a ella como una enseñanza, no como una predicción.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Saca sólo los 22 Arcanos Mayores. Baraja a fondo, sosteniendo en mente el año por delante. Coloca doce cartas en orden — de izquierda a derecha, en una sola línea, o en círculo si prefieres el recordatorio visual de una rueda que gira. Siéntate con la tirada completa antes de leer ningún mes individual.
          </p>
        </div>

        {/* Layout diagram */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            Los doce meses
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Doce triunfos en secuencia. Puedes empezar desde enero para un año calendario o desde el mes de tu cumpleaños para un año personal — ambos funcionan, siempre que elijas al inicio y te mantengas en ello.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '.5rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => (
              <div key={n} style={{ width: 42, height: 64, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem', background: 'rgba(201,168,76,.06)' }}>
                {n}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS.map(({ num, name, desc }) => (
              <div key={num} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.1rem', background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12 }}>
                <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem' }}>{num}</div>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', marginBottom: '.3rem' }}>{name}</div>
                  <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interpreting tips */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Cómo leer tus resultados
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Mira primero el arco. ¿Dónde aterrizan las cartas pesadas — La Muerte, La Torre, El Juicio — y dónde llegan las cartas más ligeras y generativas como contrapeso — El Sol, La Estrella, El Mundo? El patrón a través de los meses suele ser más revelador que cualquier posición individual.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Fíjate en series de arquetipos relacionados. Tres cartas con código ígneo seguidas (El Mago, El Carro, La Fuerza) hablan de un trimestre de voluntad decisiva y acción exterior. Un grupo de cartas hacia dentro (El Ermitaño, La Luna, El Colgado) marca una estación de introspección que no se dejará apresurar.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Fotografía la tirada. Guarda la imagen en un lugar donde la veas al comienzo de cada mes, y vuelve a leer la carta de ese mes con ojos frescos cuando llegue su tiempo. Un triunfo que parecía oscuro de antemano a menudo se vuelve obvio cuando estás dentro del mes que describe.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '1.1rem' }}>Preguntas frecuentes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {faqSchema.mainEntity.map((item, i, arr) => (
              <div key={item.name} style={{ paddingBottom: i < arr.length - 1 ? '1.1rem' : 0, borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <p style={{ fontFamily: "'Cinzel',serif", fontSize: '.85rem', color: 'var(--gold)', margin: '0 0 .4rem' }}>{item.name}</p>
                <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Related links */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <Link href="/es/tiradas/arcanos-mayores" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Más tiradas</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Todas las tiradas de Arcanos Mayores →</div>
          </Link>
          <Link href="/es/lectura-gratis" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Pruébalo ahora</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Lectura de tarot gratis →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
