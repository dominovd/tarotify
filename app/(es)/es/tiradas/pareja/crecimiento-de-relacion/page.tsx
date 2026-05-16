import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada Crecimiento de la Relación — Lectura de 6 Cartas para Parejas | TarotAxis',
  description: 'Una tirada de tarot de 6 cartas sobre el crecimiento de la relación para parejas establecidas. Lee el fundamento, la dinámica actual, lo que aporta cada parte y la próxima frontera del vínculo.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/pareja/crecimiento-de-relacion',
    languages: {
      'en': 'https://tarotaxis.com/spreads/partner/relationship-growth',
      'es': 'https://tarotaxis.com/es/tiradas/pareja/crecimiento-de-relacion',
      'x-default': 'https://tarotaxis.com/spreads/partner/relationship-growth',
    },
  },
  openGraph: {
    title: 'Tirada de Tarot Crecimiento de la Relación para Parejas',
    description: 'Seis cartas para profundizar una relación existente — fundamento, dinámica, contribuciones y la próxima invitación del vínculo.',
    url: 'https://tarotaxis.com/es/tiradas/pareja/crecimiento-de-relacion',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  { num: 1, name: 'Fundamento del Vínculo', desc: 'El suelo subyacente del que creció esta relación — los valores, las experiencias y la resonancia que les unieron y que aún les sostienen. A veces sólido, a veces digno de cuidar.' },
  { num: 2, name: 'Dinámica Actual', desc: 'La forma en que ustedes dos se están relacionando realmente ahora. No el resumen de los mejores momentos, ni el peor día — el clima habitual de la relación en esta temporada.' },
  { num: 3, name: 'Lo Que Tú Aportas Que Apoya el Crecimiento', desc: 'Las cualidades, energías e intenciones que estás contribuyendo actualmente y que permiten que la relación se profundice. Las reales, incluidas las pequeñas cotidianas.' },
  { num: 4, name: 'Lo Que Aporta Tu Pareja', desc: 'La contribución que viene desde el otro lado del vínculo. Lo que tu pareja está ofreciendo al campo, llegue o no de la forma en que espera.' },
  { num: 5, name: 'La Próxima Frontera', desc: 'La frontera de crecimiento para la relación — la nueva capa, conversación o capacidad que está lista para emerger. A menudo ligeramente incómoda, siempre significativa.' },
  { num: 6, name: 'La Invitación', desc: 'La invitación específica que ofrecen las cartas — una postura, una práctica, una pregunta o un paso que ustedes dos pueden dar hacia el próximo capítulo del vínculo.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Esta tirada es adecuada para cualquier etapa de una relación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Esta tirada está diseñada para relaciones establecidas — desde unos pocos meses juntos hasta muchos años. Si estás en las primeras semanas de citas, la tirada Conexión en Citas te servirá mejor. Si estás en un momento de ruptura o crisis, una tirada más enfocada puede ayudarte; esta es para parejas que están bien y quieren estar más bien.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo leer esta tirada para mí si a mi pareja no le interesa el tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, y es una de las formas más honestas de usarla. No estás leyendo su mundo interior — estás leyendo el campo que ustedes dos comparten y escuchando cuál podría ser tu próxima contribución a ese campo. Las percepciones aterrizarán en ti y los cambios seguirán de forma natural.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si las posiciones 3 y 4 se sienten desiguales?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El aparente desequilibrio entre lo que cada persona aporta es normal — las relaciones fluyen y las estaciones de la vida rara vez se sincronizan a la perfección. Lee esas cartas juntas y no por separado. A menudo lo que parece desigualdad en una carta se equilibra con algo distinto en la otra; las parejas rara vez dan en monedas que se igualan.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Con qué frecuencia deberíamos hacer una lectura de crecimiento de la relación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una o dos veces al año es suficiente para la mayoría de las parejas — quizá alrededor de un aniversario o en el cambio de año. Hacerla con demasiada frecuencia diluye la lectura; la próxima frontera necesita tiempo para ser trabajada de verdad. Si la hacen juntos, dénse un espacio tranquilo después para hablar de lo que surgió.',
      },
    },
  ],
}

export default function CrecimientoDeRelacionPage() {
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
          <span>Crecimiento de la Relación</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>🌿</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Tirada Crecimiento de la Relación
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            Una tirada de 6 cartas para parejas establecidas que quieren honrar la relación que han construido y encontrar la próxima capa de profundidad que les espera.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Por Qué Importa una Tirada de Crecimiento
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Lo más difícil de una relación a largo plazo no son los momentos dramáticos — es la forma en que los días corrientes se acumulan en silencio. Los mismos patrones, la misma calidez, las mismas pequeñas evasiones. Con el tiempo, la relación se vuelve muy familiar y ligeramente invisible para las dos personas que están dentro. Una tirada de crecimiento es una forma de volver a enfocar el vínculo y escuchar lo que quiere venir después.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Puedes leer esta tirada solo/a o con tu pareja. Si la leen juntos, saquen las cartas por turnos y conversen cada una a medida que aterriza. Si la lees solo/a, sostén la relación con cuidado — no estás reuniendo pruebas, estás escuchando el campo que comparten.
          </p>
        </div>

        {/* Layout */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            La Disposición de 6 Cartas
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Las cartas 1 y 2 forman la base — fundamento y dinámica actual. Las cartas 3 y 4 se enfrentan arriba — lo que aporta cada parte. Las cartas 5 y 6 se elevan sobre la pareja — la próxima frontera y la invitación que la sigue.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {[1, 2, 3, 4, 5, 6].map(n => (
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
            Empieza por la relación entre las posiciones 1 y 2. Una carta de fundamento sólido con una carta de dinámica actual tensa suele señalar que algo heredado de los primeros días de la relación ya no se está honrando en el día a día. Un fundamento inestable con una dinámica actual fuerte sugiere que los dos han construido algo que ha superado su historia de origen — lo cual es, a su manera, una gracia.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Las posiciones 3 y 4 se leen juntas. Mira lo que ofrece cada carta y pregúntate: ¿estas contribuciones se complementan o se cruzan sin tocarse? A veces las parejas vierten buena energía que la otra simplemente no puede recibir en esa forma. La lectura suele revelar en silencio estos regalos no recibidos.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            La posición 5 — la próxima frontera — rara vez se refiere a una agitación dramática. Más a menudo apunta a una conversación que ha estado esperando, una ternura que quiere expresarse o una capa de confianza lista para ser tomada. La posición 6 traduce entonces esa frontera en una invitación concreta. Trátala con suavidad. El tipo de crecimiento al que apuntan las cartas aquí está hecho para vivirse, no para actuarse.
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
