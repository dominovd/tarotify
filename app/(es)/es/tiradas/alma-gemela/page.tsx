import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tarot del Alma Gemela — Encuentra Tu Conexión Profunda | TarotAxis',
  description: 'Usa la tirada de tarot del alma gemela para explorar qué aportas al amor, qué necesitas realmente y cómo podrías reconocer una conexión profunda de alma cuando llegue.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/alma-gemela',
    languages: {
      'en': 'https://tarotaxis.com/spreads/soulmate',
      'es': 'https://tarotaxis.com/es/tiradas/alma-gemela',
      'x-default': 'https://tarotaxis.com/spreads/soulmate',
    },
  },
  openGraph: {
    title: 'Tirada de Tarot del Alma Gemela — Encuentra Tu Conexión Profunda',
    description: 'Una tirada de 5 cartas que explora tu energía en el amor, lo que buscas y necesitas, y la naturaleza de tu conexión de alma gemela.',
    url: 'https://tarotaxis.com/es/tiradas/alma-gemela',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  { num: 1, label: 'Tu energía' },
  { num: 2, label: 'Lo que buscas' },
  { num: 3, label: 'Lo que necesitas' },
  { num: 4, label: 'El camino' },
  { num: 5, label: 'La conexión' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una tirada de tarot del alma gemela?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada de tarot del alma gemela es una lectura enfocada en explorar los temas alrededor de la conexión romántica profunda. En lugar de predecir a una persona concreta, te ayuda a entender qué aportas actualmente a las relaciones, qué buscas y necesitas genuinamente en una pareja y las condiciones energéticas alrededor de encontrar o reconocer un vínculo significativo. Es una herramienta tanto para la autorreflexión como para la introspección sobre las relaciones.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuántas cartas tiene una tirada del alma gemela?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La versión más accesible usa 5 cartas, cada una cubriendo un aspecto distinto del viaje del alma gemela: tu energía actual, lo que buscas conscientemente, lo que realmente necesitas, el camino hacia la conexión y la naturaleza del vínculo en sí. Algunos lectores la amplían a 7 cartas o más para explorar tiempos u obstáculos, pero 5 cartas ofrecen una lectura completa y manejable para la mayoría.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puede el tarot decirte cuándo conocerás a tu alma gemela?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tarot no es muy fiable para predicciones de tiempos precisos, y tratarlo así tiende a producir ansiedad en lugar de claridad. Lo que sí puede hacer es iluminar las condiciones internas que apoyan o dificultan una conexión significativa — las creencias que sostienes, los patrones que repites y las cualidades que estás lista para invitar. Muchas lectoras notan que cuando esas condiciones internas cambian, las circunstancias siguen de forma natural.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué cartas del tarot indican una conexión de alma gemela?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las cartas a menudo asociadas con la conexión profunda incluyen Los Enamorados (unión consciente y valores alineados), La Estrella (esperanza y atracción magnética), el Dos de Copas (reconocimiento mutuo y resonancia emocional), el Diez de Copas (plenitud emocional duradera) y El Mundo (consumación y totalidad). Las cartas de los Arcanos Mayores en las posiciones 4 o 5 de la tirada son especialmente significativas, sugiriendo una conexión de peso y sentido real.',
      },
    },
  ],
}

export default function AlmaGemelaPage() {
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
        <span style={{ color: 'var(--gold)' }}>Alma Gemela</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tarot del Alma Gemela
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Una tirada de 5 cartas para explorar el amor en su nivel más profundo. Descubre qué aportas a la conexión, qué necesitas realmente en una pareja y la naturaleza energética del vínculo que te espera.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['5 Cartas', 'Amor y Relaciones', 'Alma Gemela', 'Solteros'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Layout visual */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
          Esquema de Cartas — 5 Cartas
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '.5rem', maxWidth: 480, margin: '0 auto' }}>
          {POSITIONS.map(({ num, label }) => (
            <div key={num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.3rem' }}>
              <div style={{ width: '100%', aspectRatio: '2/3', border: '1px solid rgba(201,168,76,.25)', borderRadius: 6, background: 'rgba(201,168,76,.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.7rem', color: 'var(--gold)' }}>
                {num}
              </div>
              <div style={{ fontSize: '.5rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', textAlign: 'center', lineHeight: 1.3 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* How to do the reading */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Cómo Hacer Tu Lectura del Alma Gemela
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Antes de comenzar, crea un momento de quietud genuina. Deja el teléfono a un lado, respira despacio unas cuantas veces y deja que la actividad del día se asiente. Una lectura sobre la conexión profunda se beneficia de la misma calidad de presencia que querrías llevar a la relación misma.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Baraja tu mazo despacio y con intención. Sostén en mente una pregunta clara y abierta — algo como <em>«¿Qué necesito saber sobre encontrar a mi alma gemela?»</em> o <em>«¿Cuál es la naturaleza de la conexión de alma que está disponible para mí?»</em>. Evita preguntas de sí o no; la tirada funciona mejor cuando invitas al matiz y no a un veredicto.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Saca 5 cartas y colócalas boca abajo en una fila horizontal de izquierda a derecha, siguiendo el orden de las posiciones: Tu energía, Lo que buscas, Lo que necesitas, El camino, La conexión. Voltea cada carta una a una, deteniéndote a sentirla antes de continuar.
          </p>
          <p>
            Presta especial atención a las posiciones 2 y 3 juntas — la distancia entre lo que buscas y lo que necesitas suele ser donde vive la percepción más importante. Una lectura que te sorprenda aquí está haciendo exactamente lo que debe.
          </p>
        </div>
      </div>

      {/* Position meanings */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Significado de las Posiciones
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', marginBottom: '1.5rem' }}>
          {[
            ['1', 'Tu energía', 'Lo que aportas actualmente a la búsqueda del amor. Esta carta refleja tu estado emocional, tu disposición y cualquier patrón o creencia que esté dando forma a cómo te muestras en las relaciones ahora. No es un juicio — es un punto de partida.'],
            ['2', 'Lo que buscas', 'Las cualidades, sentimientos y experiencias que deseas conscientemente en un alma gemela. Esta carta habla de tus deseos e ideales activos. Compárala con la posición 3 — la alineación entre ambas sugiere claridad; la tensión sugiere que hay trabajo útil por hacer.'],
            ['3', 'Lo que necesitas', 'Lo que realmente requieres para una conexión duradera y nutritiva — que puede diferir de forma significativa de lo que crees querer. Suele ser la carta más reveladora de la tirada, apuntando a necesidades profundas que tal vez aún no estén plenamente reconocidas.'],
            ['4', 'El camino', 'Cómo te encontrarás o reconocerás a tu alma gemela. Esta carta suele hablar de las condiciones, los cambios internos o las circunstancias vitales a través de las cuales una conexión significativa se vuelve posible. Una carta de los Arcanos Mayores aquí sugiere un punto de inflexión significativo, incluso destinado.'],
            ['5', 'La conexión', 'La naturaleza y la calidad potencial del vínculo del alma gemela. Esta carta describe el carácter energético de la relación — sus fortalezas, sus dones y el tipo de crecimiento que probablemente traerá. Es una imagen de posibilidad, no una garantía.'],
          ].map(([num, title, text]) => (
            <div key={num} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ minWidth: 28, height: 28, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, background: 'rgba(201,168,76,.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.75rem', color: 'var(--gold)', flexShrink: 0, marginTop: '.05rem' }}>
                {num}
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.4rem', letterSpacing: '.03em' }}>{title}</div>
                <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reading tips */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Interpretar las Posiciones
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '.75rem', marginBottom: '1.5rem' }}>
          {[
            ['✦', 'Arcanos Mayores en 4 o 5', 'Una carta de los Arcanos Mayores en la posición del Camino o la Conexión sugiere una conexión de verdadera importancia — una que carga sentido, peso y quizás un aire de inevitabilidad. Es un vínculo que probablemente catalizará un crecimiento genuino.'],
            ['👑', 'Cartas de la corte', 'Un Rey, una Reina, un Caballo o una Sota suelen apuntar a una persona específica que tal vez ya está en tu órbita, o a un aspecto de tu propio carácter listo para emerger. Presta atención al rango de la corte — sugiere la madurez y la energía de la persona.'],
            ['🌊', 'Cartas desafiantes', 'Cartas como La Torre, el Cinco de Espadas o el Tres de Espadas en esta tirada suelen indicar que es necesario algún trabajo interior — soltar viejos patrones o sanar heridas pasadas — antes de que una conexión profunda pueda florecer. No son un «no»; son un «todavía no, y aquí está el motivo».'],
            ['🌱', 'Cartas de Ases', 'Un As en cualquier lugar de la tirada trae energía de nuevo comienzo a esa posición. En una lectura del alma gemela, los Ases — especialmente el As de Copas — sugieren que un nuevo capítulo emocional está realmente disponible para ti ahora.'],
          ].map(([icon, title, text]) => (
            <div key={title as string} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem' }}>
              <div style={{ fontSize: '1.3rem', marginBottom: '.4rem' }}>{icon}</div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.78rem', letterSpacing: '.08em', color: 'var(--gold)', opacity: .8, marginBottom: '.4rem', textTransform: 'uppercase' }}>{title}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.6, margin: 0 }}>{text as string}</p>
            </div>
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
            <div key={item.name} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Comienza tu lectura del alma gemela</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Baraja tu mazo, sostén tu intención y saca 5 cartas. Usa nuestra guía de significados para explorar cada posición.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/cartas" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Ver Significados de las Cartas
          </Link>
          <Link href="/es/tiradas/amor" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Tirada del Amor
          </Link>
        </div>
      </div>
    </div>
  )
}
