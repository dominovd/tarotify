import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Compatibilidad — Lectura de 5 Cartas Alineación con la Pareja | TarotAxis',
  description: 'Una tirada de tarot de compatibilidad de 5 cartas que lee lo que cada uno valora, dónde se alinean genuinamente, dónde difieren honestamente y si esas diferencias sirven al vínculo.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/pareja/alineacion-de-pareja',
    languages: {
      'en': 'https://tarotaxis.com/spreads/partner/partner-alignment',
      'es': 'https://tarotaxis.com/es/tiradas/pareja/alineacion-de-pareja',
      'x-default': 'https://tarotaxis.com/spreads/partner/partner-alignment',
    },
  },
  openGraph: {
    title: 'Tirada Alineación con la Pareja — Compatibilidad Consciente',
    description: 'Una lectura de cinco cartas para parejas que comprueban si sus valores, energías y diferencias encajan — sin forzar un veredicto de sí o no.',
    url: 'https://tarotaxis.com/es/tiradas/pareja/alineacion-de-pareja',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  { num: 1, name: 'Lo Que Yo Valoro en el Amor', desc: 'Los valores que tú llevas a la pareja — las cosas que más te importan, las hayas dicho o no en voz alta. La lista real, no la educada.' },
  { num: 2, name: 'Lo Que Ellos Valoran', desc: 'Los valores que la otra persona aporta. A menudo sutilmente distintos de los tuyos de formas que solo se vuelven visibles cuando la relación se examina con esta honestidad.' },
  { num: 3, name: 'Dónde Nos Alineamos Genuinamente', desc: 'El solapamiento — el suelo sobre el que ambos están de pie. Esta carta muestra el terreno común real, no las preferencias superficiales que casualmente comparten.' },
  { num: 4, name: 'Dónde Diferimos Honestamente', desc: 'Las divergencias genuinas. No un veredicto sobre la relación — muchas parejas fuertes se construyen sobre diferencias reales — sino un nombramiento claro de dónde no son iguales.' },
  { num: 5, name: 'Si las Diferencias Nos Sirven', desc: 'La carta más importante de la tirada. Pregunta si las diferencias entre ustedes les afilan, suavizan y estiran de buenas maneras, o si rozan contra algo esencial.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Esta tirada es un sí o no sobre la compatibilidad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, y ese es el punto. La compatibilidad real rara vez es un simple sí o no. Esta tirada mapea dónde se alinean y dónde difieren, y luego hace la pregunta más útil — si esas diferencias sirven al vínculo. Dos personas bien emparejadas a menudo tendrán diferencias significativas; dos personas mal emparejadas a veces coincidirán en la superficie.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo leer esta tirada antes de iniciar una relación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puedes, y funciona particularmente bien en el umbral entre salir y comprometerte. Sostén la pregunta con cuidado — estás trabajando con información limitada sobre la otra persona, así que la posición 2 te dará una sensación sentida más que una lectura forense. Trata la tirada como una conversación contigo mismo/a.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué significa si la posición 4 tiene cartas muy difíciles?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las cartas difíciles en la posición 4 no significan automáticamente que la relación esté condenada — significan que las diferencias entre ustedes son reales y necesitan respeto. Muchas parejas duraderas incluyen diferencias genuinas. Lee la posición 5 con atención — te dice si esas diferencias son una frontera que les hace crecer o una fricción que les desgasta.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué se diferencia esto de una lectura de alma gemela?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada de alma gemela pregunta en quién te estás convirtiendo y quién está destinado a encontrar eso. Una tirada de alineación es más concreta — pregunta cómo dos personas específicas, aquí y ahora, encajan realmente. Ambas son útiles, pero la tirada de alineación es la mejor herramienta cuando hay una decisión real sobre la mesa.',
      },
    },
  ],
}

export default function AlineacionDeParejaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/es/tiradas" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Tiradas</Link>
          <span style={{ opacity: .4 }}>›</span>
          <Link href="/es/tiradas/pareja" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Pareja</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Alineación con la Pareja</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>⚖️</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Tirada Alineación con la Pareja
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            Una tirada de 5 cartas para exámenes honestos de compatibilidad. Diseñada para revelar la alineación real y la diferencia real — y para preguntar si esas diferencias están sirviendo a ambos.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Lo Que la Alineación Significa de Verdad
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            La compatibilidad es una de las ideas más malentendidas en las relaciones. A veces la imaginamos como una lista de preferencias coincidentes, o como la ausencia de conflicto. En la práctica, la alineación se parece más a un sentido compartido de lo que más importa — un acuerdo silencioso sobre hacia dónde quieren crecer ambos. Dos personas pueden estar profundamente alineadas y aun así estar en desacuerdo en casi todo lo demás.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Esta tirada está construida para leer ese tipo de alineación más profunda. No intenta puntuarles del uno al diez. Intenta mostrarles dónde el suelo bajo sus pies es compartido, dónde no lo es y qué está haciendo realmente esa diferencia en la relación.
          </p>
        </div>

        {/* Layout */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            La Disposición de 5 Cartas
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Las cartas 1 y 2 se sientan lado a lado — tus valores, los suyos. Las cartas 3 y 4 se colocan arriba — alineación y diferencia. La carta 5 corona la tirada, sosteniendo la pregunta más profunda.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {[1, 2, 3, 4, 5].map(n => (
              <div key={n} style={{ width: 52, height: 80, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>
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

        {/* Interpreting */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Cómo Leer Tu Tirada
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Empieza con las posiciones 1 y 2 lado a lado. No te apresures a compararlas — primero escucha lo que dice cada carta. Con frecuencia notarás que una persona valora la estructura mientras la otra valora el flujo, o que una se orienta hacia la seguridad mientras la otra se orienta hacia la exploración. Esto no está mal; son simplemente puntos de partida distintos.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Después mira el solapamiento en la posición 3. Este es el suelo. Si la carta es de sustancia — Tres de Copas, Seis de Oros, La Estrella — el fundamento es genuino. Si es más escasa, eso no condena la relación, pero sí significa que el terreno compartido necesitará un cuidado consciente.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            La posición 4 nombra la diferencia; la posición 5 la evalúa. Léelas como un par. Una carta desafiante en 4 emparejada con una carta generativa en 5 a menudo señala una diferencia que ha sido un regalo encubierto. Una carta agradable en 4 emparejada con una carta pesada en 5 puede significar un desajuste sutil que ambos han estado soportando en silencio. La tirada está preguntando, con suavidad, si las diferencias siguen sirviendo al amor.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '1.1rem' }}>Preguntas Frecuentes</h2>
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
          <Link href="/es/tiradas/pareja" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Más tiradas</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Todas las tiradas de pareja →</div>
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
