import type { Metadata } from 'next'
import Link from 'next/link'
import { CARDS } from '@/lib/cards'
import { localizeCardSlug } from '@/lib/i18n/slugs'
import CardImage from '@/components/CardImage'

export const metadata: Metadata = {
  title: 'Tirada Cómo Se Sienten Conmigo — Lectura de Tarot de 3 Cartas | TarotAxis',
  description: 'Una tirada de 3 cartas para entender lo que alguien siente realmente por ti — sus sentimientos, sus pensamientos y lo que es más probable que haga a continuación.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/como-se-sienten-conmigo',
    languages: {
      'en': 'https://tarotaxis.com/spreads/how-they-feel-about-me',
      'es': 'https://tarotaxis.com/es/tiradas/como-se-sienten-conmigo',
      'x-default': 'https://tarotaxis.com/spreads/how-they-feel-about-me',
    },
  },
  openGraph: {
    title: 'Tirada Cómo Se Sienten Conmigo — Lectura de 3 Cartas',
    description: 'Una tirada de 3 cartas para entender lo que alguien siente realmente por ti — sus sentimientos, sus pensamientos y lo que es más probable que haga a continuación.',
    url: 'https://tarotaxis.com/es/tiradas/como-se-sienten-conmigo',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'Lo Que Sienten',
    desc: 'La verdad emocional bajo las palabras y la conducta — lo que esta persona guarda en realidad por ti cuando nadie la observa. Esta carta habla del sentir corporal de la conexión, del calor o la frialdad en el cuerpo, de la respuesta no dicha que aparece cuando piensan en ti.',
  },
  {
    num: 2,
    name: 'Lo Que Piensan de Ti',
    desc: 'La narrativa consciente que se cuentan a sí mismos sobre quién eres y lo que significa esta conexión. Pensamiento y sentimiento no siempre están alineados. Esta carta revela la historia que su mente ha construido — a veces más guardada, a veces más idealizada que el propio sentimiento.',
  },
  {
    num: 3,
    name: 'Lo Que Es Probable Que Hagan',
    desc: 'La acción o no-acción hacia la que su estado actual los está moviendo. La conducta es el punto de encuentro entre sentir y pensar. Esta carta nombra honestamente hacia dónde se dirige la energía — acercarse, retirarse, esperar, o quedarse exactamente donde están.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Puede el tarot revelar los sentimientos de otra persona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tarot lee energía, no mentes. Lo que sí puede mostrar es la calidad y la dirección de la conexión entre tú y otra persona en el momento de la lectura — el clima emocional alrededor de ella cuando apareciste en sus pensamientos, los patrones en cómo se relaciona contigo. No te dará una transcripción literal de lo que siente, y no puede anular su libre albedrío. Usada con honestidad, esta tirada es una forma de sintonizar con lo que es real en la conexión y no con lo que deseas que fuera real.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué tan precisa es una lectura de "cómo se sienten conmigo"?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La precisión en el tarot tiene menos que ver con predecir y más con resonancia. Cuando la lectura se hace desde un estado mental sereno y honesto, las cartas tienden a reflejar algo que el consultante ya intuye a medias. La razón más común por la que estas lecturas se sienten imprecisas es que la persona repite la tirada hasta obtener la respuesta que quiere, o tuerce una carta difícil hacia un significado más amable. Una sola lectura, aceptada tal como salió, es mucho más útil que diez con las que se negocia.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué cartas indican que alguien tiene sentimientos fuertes por mí?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las cartas de Copas suelen mostrar inversión emocional. El Dos de Copas apunta a un reconocimiento mutuo y un vínculo real. El As de Copas sugiere una apertura fresca y vulnerable del sentir. El Caballo de Copas indica a alguien movido a actuar desde lo que siente, a menudo de forma romántica. Los Enamorados nombran una conexión que toca a la persona en sus valores, no solo en la atracción. La Sota de Copas puede señalar afecto tierno, a veces tímido, mientras que el Dos de Bastos sugiere que están sopesando un futuro que te incluye.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo hacer esta tirada sobre un amigo o un familiar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. La tirada se construye en torno a la estructura de cualquier conexión humana — sentimiento, pensamiento, conducta — y funciona igual de bien para una amistad, un padre o madre distanciados, un compañero de trabajo o un hermano que para una relación romántica. En lecturas no románticas, cartas como el Tres de Copas, el Diez de Pentáculos o el Seis de Copas a menudo pesan más que las cartas tradicionales del amor. Lee las cartas en el registro de la relación por la que en realidad estás preguntando, no en el que el tarot estereotípicamente da por defecto.',
      },
    },
  ],
}

export default function ComoSeSientenConmigoPage() {
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
        <Link href="/es/tiradas" style={{ color: 'var(--muted)' }}>Tiradas de Tarot</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Cómo Se Sienten Conmigo</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>♡</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tarot Cómo Se Sienten Conmigo
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Una lectura de tres cartas para la pregunta que casi todos hacemos en algún momento — ¿qué siente esta persona realmente por mí, qué piensa y hacia dónde va todo esto? Una tirada honesta para una respuesta honesta.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['3 Cartas', 'Sus Sentimientos', 'Lectura Honesta'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* About this spread */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Sobre Esta Tirada
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Esta es una de las preguntas más recurrentes en el tarot, y se hace con razón. Rara vez tenemos acceso honesto a lo que otra persona siente por nosotros. Las palabras pueden ser corteses, distantes o ensayadas. La conducta puede ser ambigua. Esta tirada ofrece una forma estructurada de sentarse con la conexión misma y escuchar lo que hay debajo — pero conviene tener claro lo que el tarot puede y no puede hacer. Refleja la energía en movimiento entre ustedes. No te ofrece certeza sobre la vida interior de otro ser humano, y cualquier lector que prometa eso está sobrevendiendo el oficio.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            La disciplina que esta lectura te pide es llegar a las cartas sin haber decidido ya lo que quieres encontrar. Si barajas mientras ensayas en silencio la versión de los hechos que esperas que sea cierta, leerás las cartas a través de ese filtro y aprenderás muy poco. Siéntate con la pregunta primero. Nota lo que temes que sea la respuesta. Nota lo que esperas. Después suelta ambas cosas, respira y saca. Las cartas responden mejor a una indagación honesta.
          </p>
          <p>
            Cuando aparece una carta que parece poco favorable — el Cinco de Copas, el Cuatro de Pentáculos, un Caballo invertido, el Ermitaño — resiste el impulso de suavizarla hacia algo que no dice. Una lectura que te diga que la conexión es más fría de lo que esperabas te está prestando un verdadero servicio. Es mucho más duro pasar meses esperando un sentimiento que las cartas ya han nombrado como ausente. El propósito de esta tirada no es tranquilizarte. Es reconocer lo que es real para que puedas actuar desde la claridad y no desde la fantasía.
          </p>
        </div>
      </div>

      {/* Spread Layout */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Las Tres Posiciones
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Tres cartas, sacadas de izquierda a derecha. Cada posición sostiene una capa distinta de la conexión — lo que sienten, lo que piensan y lo que es probable que hagan.
        </p>

        {/* Visual Layout */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Disposición de Cartas
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {POSITIONS.map(pos => (
              <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                <div style={{ width: 72, height: 108, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1.1rem', color: 'var(--gold)' }}>
                  {pos.num}
                </div>
                <div style={{ fontSize: '.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', maxWidth: 72 }}>{pos.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {POSITIONS.map(pos => (
            <div key={pos.num} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.8rem', color: 'var(--gold)' }}>
                {pos.num}
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.88rem', color: 'var(--gold)', marginBottom: '.5rem' }}>{pos.name}</div>
                <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{pos.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Per-card feelings interpretation grid */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Qué Significa Cada Carta en una Lectura de Sentimientos
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Una vez que hayas sacado tus cartas, pulsa cualquiera de las de abajo para una interpretación en profundidad de lo que revela sobre cómo alguien se siente contigo — tanto del derecho como invertida.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(110px,1fr))', gap: '.5rem' }}>
          {CARDS.map(card => (
            <Link
              key={card.slug}
              href={`/es/cartas/${localizeCardSlug(card.slug, 'es')}/sentimientos`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '.3rem',
                padding: '.5rem',
                background: 'rgba(255,255,255,.03)',
                border: '1px solid var(--border)',
                borderRadius: 8,
                textDecoration: 'none',
              }}
            >
              <div style={{ position: 'relative', width: '100%', aspectRatio: '2/3', borderRadius: 6, overflow: 'hidden' }}>
                <CardImage slug={card.slug} alt={`${card.name} carta de tarot como sentimientos`} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '.25rem .3rem', background: 'linear-gradient(to top, rgba(0,0,0,.85) 0%, transparent 100%)', textAlign: 'center' }}>
                  <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.55rem', color: '#e8d5a0', letterSpacing: '.04em', lineHeight: 1.2, display: 'block' }}>{card.name}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Preguntas Frecuentes
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>¿Lista para sacar tus tres cartas?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Usa nuestra herramienta gratuita de tarot para sacar tus cartas y luego vuelve aquí para interpretar cada posición.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/lectura-gratis" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Sacar Cartas Ahora
          </Link>
          <Link href="/es/tiradas/amor" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Tirada de Amor
          </Link>
          <Link href="/es/tiradas/amor-verdadero" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Tirada del Amor Verdadero
          </Link>
        </div>
      </div>
    </div>
  )
}
