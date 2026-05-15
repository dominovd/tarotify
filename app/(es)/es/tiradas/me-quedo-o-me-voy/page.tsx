import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada ¿Me Quedo o Me Voy? — Encrucijada de 6 Cartas | TarotAxis',
  description: 'Tirada de tarot de 6 cartas para encrucijadas de pareja. Compara quedarte vs irte, mira lo que cada camino guarda y accede a la sabiduría profunda que ya cargas.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/me-quedo-o-me-voy',
    languages: {
      'en': 'https://tarotaxis.com/spreads/should-i-stay-or-should-i-go',
      'es': 'https://tarotaxis.com/es/tiradas/me-quedo-o-me-voy',
      'x-default': 'https://tarotaxis.com/spreads/should-i-stay-or-should-i-go',
    },
  },
  openGraph: {
    title: 'Tirada ¿Me Quedo o Me Voy? — Encrucijada de 6 Cartas',
    description: 'Tirada de tarot de 6 cartas para encrucijadas de pareja. Compara quedarte vs irte, mira lo que cada camino guarda y accede a la sabiduría profunda que ya cargas.',
    url: 'https://tarotaxis.com/es/tiradas/me-quedo-o-me-voy',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'La Verdad de la Relación Hoy',
    desc: 'Una instantánea sin maquillaje de dónde está realmente esta relación — no donde esperas que esté, no la versión que cuentas a tus amigos. Esta carta es honesta con el momento presente y te pide recibir esa honestidad sin suavizarla.',
  },
  {
    num: 2,
    name: 'Si Te Quedas',
    desc: 'El camino más probable y el clima energético si te quedas. No es una profecía fija, sino una lectura clara de la trayectoria actual si nada cambia en lo fundamental. Atiende a tu cuerpo cuando voltees esta carta.',
  },
  {
    num: 3,
    name: 'Si Te Vas',
    desc: 'El camino y la energía más probables si te vas. Tampoco es destino — es la forma del camino. Ambas opciones suelen contener dificultad, así que la pregunta se convierte en cuál dificultad se siente viva y cuál se siente como más de lo mismo.',
  },
  {
    num: 4,
    name: 'Lo Que Tu Corazón Ya Sabe',
    desc: 'La respuesta que llevas dentro pero que quizá estás evitando. La intuición que ha estado hablando por lo bajo bajo el análisis. Esta carta rara vez es una sorpresa — suele nombrar lo que aún no te has permitido decir en voz alta.',
  },
  {
    num: 5,
    name: 'Lo Que Necesita Cambiar de Todos Modos',
    desc: 'El cambio que se pide en cualquiera de los caminos — a menudo más transformador que la decisión misma de irte o quedarte. Un patrón en ti, una forma de relacionarte, un límite que no has sostenido. El trabajo que te seguirá vayas donde vayas.',
  },
  {
    num: 6,
    name: 'Guía',
    desc: 'La sabiduría que sintetiza — lo más sabio que las cartas tienen que decir una vez que todo lo demás está sobre la mesa. No es una instrucción, sino una voz que serena. Lee esta carta al final y deja que se asiente antes de actuar.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cómo hago una lectura de me quedo o me voy con honestidad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Empieza por declarar tu sesgo en voz alta antes de barajar. Si ya quieres irte, dilo — esa admisión te impide dirigir la interpretación de forma inconsciente. Aterriza antes de sacar: esta tirada no es fiable cuando se lee durante la peor pelea o en la calma posterior a la reconciliación. A muchos lectores les resulta útil hacer dos tiradas en días distintos, idealmente con una semana de diferencia, y compararlas. Si los mismos temas se repiten en ambas, eso es señal. Si las lecturas se contradicen, tu sistema nervioso está hablando más alto que las cartas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué hago si las cartas de "si te quedas" y "si te vas" se ven duras las dos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Es lo más frecuente y es honesto. Rara vez hay un camino a través de una encrucijada de pareja que no implique duelo. La pregunta real es qué duelo libera — el de construir algo nuevo sobre el mismo terreno, o el de irse y empezar de nuevo en otra parte. Mira la textura de la dificultad en cada carta. La dificultad que tiene movimiento es distinta de la dificultad que gira en bucle. La primera te invita hacia adelante; la segunda te dice que algo está atorado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Hago esta tirada sola o con mi pareja?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Probablemente sola primero. Compartir esta lectura demasiado pronto puede presionar tanto a las cartas como a la conversación — tu pareja puede sentirse emboscada, tú puedes sentirte observada y el significado se moldea por su reacción más que por tu propio discernimiento. Siéntate con lo que aparezca en privado. Si después decides que una lectura compartida ayudaría, ese es un ritual aparte con reglas distintas: elige un momento tranquilo, acuerden interpretar juntos en vez de defender, y acepta que dos personas verán la misma carta de forma distinta. Eso es parte del trabajo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puede el tarot decirme si quedarme o irme?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, y cualquier lector que te diga que sí está pasándose. El tarot te muestra lo que es — la energía de la relación, la trayectoria de cada camino, las partes de ti sobre las que has callado. Tú decides qué hacer con esa información. Una lectura puede facilitar enfrentar una decisión, o hacer más difícil seguir evitándola, pero el acto de elegir te pertenece solo a ti. Esa pertenencia no es una limitación de las cartas; es el sentido mismo de hacer la lectura.',
      },
    },
  ],
}

export default function MeQuedoOMeVoyPage() {
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
        <span style={{ color: 'var(--gold)' }}>¿Me Quedo o Me Voy?</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tarot ¿Me Quedo o Me Voy?
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Una tirada de seis cartas para la encrucijada de pareja. No te empuja a irte o quedarte — despliega lo que es verdad, lo que cada camino guarda y el saber callado del que quizá te has estado convenciendo de salirte.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['6 Cartas', 'Encrucijada', 'Tirada de Decisión'].map(tag => (
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
            "¿Me quedo o me voy?" rara vez es la pregunta de verdad. Debajo hay un conjunto más callado de preguntas — ¿estoy siendo honesta con lo que ocurre aquí?, ¿qué temo perder?, ¿en quién tendría que convertirme para irme?, ¿en quién para quedarme? Esta tirada está hecha para sacar a la superficie esas preguntas, no para dictar un veredicto. Las cartas no votan. Describen.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Haz esta lectura desde un estado de estabilidad, no de crisis. Un tarot sacado en plena peor discusión del año reflejará sobre todo tu sistema nervioso, no la relación. Espera a poder sentarte con el mazo y respirar. Si no logras llegar ahí, eso ya es información — pero es información para otra conversación, quizá con una terapeuta más que con una tirada.
          </p>
          <p>
            El mal uso más común de esta tirada es la externalización. Le entregas la decisión a las cartas porque el coste de elegir es enorme y te gustaría que algo más cargara la responsabilidad. El tarot no va a colaborar con eso. Lo que sí puede hacer es reflejar lo que ya sabes con la suficiente claridad como para que dejes de poder fingir lo contrario. La elección — y las consecuencias, y la dignidad de elegir — siguen siendo tuyas.
          </p>
        </div>
      </div>

      {/* Spread layout */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Las Seis Posiciones
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Coloca las cartas en orden — la verdad presente al centro, los dos caminos a cada lado, el saber del corazón debajo, el cambio requerido y la carta de guía al final.
        </p>

        {/* Visual Layout */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Disposición de Cartas
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {POSITIONS.map(pos => (
              <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                <div style={{ width: 60, height: 90, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1rem', color: 'var(--gold)' }}>
                  {pos.num}
                </div>
                <div style={{ fontSize: '.58rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', textAlign: 'center', maxWidth: 60 }}>{pos.name}</div>
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Siéntate con las cartas antes de actuar</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Usa nuestra herramienta gratuita de tarot para sacar tus seis cartas y luego vuelve aquí a leer cada posición despacio. Toma notas. Duerme con ello.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/tiradas/amor" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ♡ Tirada de Amor
          </Link>
          <Link href="/es/tiradas/que-necesito-sanar" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Qué Necesito Sanar
          </Link>
          <Link href="/es/lectura-gratis" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Lectura Gratis
          </Link>
        </div>
      </div>
    </div>
  )
}
