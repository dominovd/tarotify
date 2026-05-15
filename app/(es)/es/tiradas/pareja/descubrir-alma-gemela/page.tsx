import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Alma Gemela — Lectura de 7 Cartas para Descubrir el Alma Gemela | TarotAxis',
  description: 'Una tirada de tarot de 7 cartas para las preguntas más profundas sobre el amor. Lee en quién te estás convirtiendo, el espejo que tu alma gemela sostendrá y el trabajo que la pareja viene a hacer.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/pareja/descubrir-alma-gemela',
    languages: {
      'en': 'https://tarotaxis.com/spreads/partner/soulmate-discovery',
      'es': 'https://tarotaxis.com/es/tiradas/pareja/descubrir-alma-gemela',
      'x-default': 'https://tarotaxis.com/spreads/partner/soulmate-discovery',
    },
  },
  openGraph: {
    title: 'Tirada Descubrir el Alma Gemela — Lectura Honesta de 7 Cartas',
    description: 'Una tirada de alma gemela que honra la pregunta sin prometer destino — el alma gemela en la que te conviertes coincide con el alma gemela que encuentras.',
    url: 'https://tarotaxis.com/es/tiradas/pareja/descubrir-alma-gemela',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  { num: 1, name: 'Quién Eres Cuando Eres Plenamente Tú', desc: 'La versión de ti que existe cuando no te estás contorsionando para nadie — valores intactos, voz clara. Este es el yo que tu alma gemela reconocerá.' },
  { num: 2, name: 'El Espejo Que Tu Alma Gemela Sostendrá', desc: 'La cualidad específica que esta pareja reflejará de vuelta hacia ti. No halago, no castigo — un espejo profundo y preciso de quién eres realmente.' },
  { num: 3, name: 'Lo Que Necesitas Aprender Antes de Que Llegue', desc: 'El umbral que las cartas te están pidiendo cruzar ahora. A veces es un trozo de duelo, a veces un trozo de confianza, a veces simplemente un hábito de abandonarte a ti mismo/a.' },
  { num: 4, name: 'Dónde Está en Su Vida', desc: 'Una lectura general de la estación que esta persona está atravesando actualmente — el terreno emocional que cruza, el capítulo que está cerrando. Energía, no identidad.' },
  { num: 5, name: 'El Camino Que Les Une', desc: 'El hilo que el universo está tejiendo — la ruta inesperada, la decisión significativa, la disposición en cada uno que abre la puerta al encuentro.' },
  { num: 6, name: 'La Primera Señal de Reconocimiento', desc: 'Cómo lo sabrás. Normalmente no es un momento de Hollywood — más a menudo es una quietud, una familiaridad extraña o la sensación de haber estado esperando sin saber a quién.' },
  { num: 7, name: 'El Trabajo Que la Pareja Viene a Hacer', desc: 'El propósito más profundo de esta conexión — lo que ustedes dos están siendo reunidos para hacer crecer, sanar o aportar. Las almas gemelas siempre llegan trayendo trabajo.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Puede el tarot decirme si alguien es mi alma gemela?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tarot puede describir la cualidad de una conexión, pero no puede etiquetar a nadie con el sello de alma gemela. La manera más honesta de plantearlo es que el alma gemela que encuentras siempre coincide con el alma gemela en la que te estás convirtiendo. Una tirada de alma gemela es más útil para mostrarte en quién estás creciendo que para emitir un veredicto sobre una persona en particular.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre un alma gemela y una llama gemela?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Distintas tradiciones usan estos términos de forma diferente. En la mayoría de las lecturas modernas, un alma gemela es alguien cuya presencia apoya tu crecimiento más profundo y se siente como un hogar, mientras que una llama gemela se describe como una dinámica más turbulenta, similar a un espejo, que expone todo lo que necesita sanar. A las cartas no les importan realmente las etiquetas — responden a la pregunta que realmente haces.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuándo conoceré a mi alma gemela según el tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tarot rara vez ofrece fechas exactas, y cualquier tirada que prometa una está sobrepasándose. Lo que esta tirada sí puede decirte es lo que actualmente se está completando en ti para que ese encuentro se haga posible. Cuando la posición 3 (lo que necesitas aprender) empieza a sentirse resuelta en tu vida cotidiana, el resto de la tirada se vuelve muy interesante.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Y si ya creo haber conocido a mi alma gemela pero la tirada dice lo contrario?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Confía en la tirada y luego confía en ti. Si las cartas apuntan lejos de la persona que tienes en mente, no significa necesariamente que la conexión sea errónea — puede significar que el marco de alma gemela es la lente equivocada para ella. Algunas de las relaciones más significativas de nuestra vida no son almas gemelas en el sentido de propósito profundo, y eso no las disminuye.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Es saludable preguntarle a las cartas por el alma gemela?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es saludable cuando la pregunta se sostiene con ligereza. La idea de alma gemela puede ser una hermosa invitación a crecer, o una forma de posponer tu vida hasta que llegue una persona mítica. Usa esta tirada para profundizar primero la relación contigo mismo/a. El resto llegará en su propio tiempo, y estarás listo/a para recibirlo.',
      },
    },
  ],
}

export default function DescubrirAlmaGemelaPage() {
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
          <span>Descubrir el Alma Gemela</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>✨</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Tirada Descubrir el Alma Gemela
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 540, margin: '0 auto', lineHeight: 1.75 }}>
            Una tirada de 7 cartas para la pregunta del alma gemela, sostenida con reverencia y realismo. El alma gemela en la que te conviertes es el alma gemela que encuentras.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Antes de Sacar las Cartas
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            La pregunta del alma gemela es una de las preguntas más antiguas que se le hace a un lector de tarot. También es una de las más fáciles de usar mal. Esta tirada se niega a prometer el destino y se niega a halagar — pero sí honra el anhelo bajo la pregunta, que casi siempre es un anhelo de ser profundamente conocido/a.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Aborda esta lectura no como una profecía, sino como una conversación con la parte de ti que ya sabe para qué clase de pareja se está preparando tu alma. Tómate tu tiempo al barajar. Sostén la pregunta con cuidado — las cartas siempre te encuentran al nivel de seriedad que aportas.
          </p>
        </div>

        {/* Layout */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            La Disposición de 7 Cartas
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Las cartas 1 a 3 miran hacia adentro — te describen a ti y al umbral que tienes delante. La carta 4 se abre a la otra persona. Las cartas 5 a 7 trazan el camino del encuentro y el trabajo compartido que le sigue.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {[1, 2, 3, 4, 5, 6, 7].map(n => (
              <div key={n} style={{ width: 52, height: 80, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>
                {n}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS.map(({ num, name, desc }) => (
              <div key={num} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.1rem', background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12 }}>
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
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Cómo Leer Tu Tirada
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Empieza leyendo las tres primeras posiciones como una sola frase sobre ti. Quién eres cuando eres plenamente tú — el espejo que tu alma gemela sostendrá — lo que necesitas aprender primero. Esa secuencia te dice hacia dónde está creciendo actualmente tu alma.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            La posición 4 se lee mejor con humildad. Es un vistazo a la estación que otra persona está atravesando — no a su carácter permanente. Las cartas fuertes aquí son alentadoras pero no predictivas; las difíciles son una invitación a la compasión más que una advertencia.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Las posiciones 5 y 6 van juntas. El camino que les une suele ser menos lineal de lo que imaginamos — una cadena de pequeñas decisiones, tanto tuyas como suyas. La primera señal de reconocimiento rara vez es dramática; la gente suele describirla después como una especie de certeza sin prisa.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            La posición 7, el trabajo compartido, es la carta más importante de la tirada. Las conexiones de alma gemela no tratan de ser salvado/a — tratan de ser hecho/a crecer. Si esta carta te sorprende, siéntate con ella. El trabajo rara vez es glamoroso, pero siempre es significativo.
          </p>
        </div>

        {/* FAQ */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
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
