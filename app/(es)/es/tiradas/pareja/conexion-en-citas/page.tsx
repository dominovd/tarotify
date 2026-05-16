import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada Conexión en Citas — Lectura de Tarot de 5 Cartas para Primeras Citas | TarotAxis',
  description: 'Una tirada de tarot de citas de 5 cartas para las primeras semanas de una conexión nueva. Una mirada honesta a la energía que se intercambia y a si conviene continuar.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/pareja/conexion-en-citas',
    languages: {
      'en': 'https://tarotaxis.com/spreads/partner/dating-connection',
      'es': 'https://tarotaxis.com/es/tiradas/pareja/conexion-en-citas',
      'x-default': 'https://tarotaxis.com/spreads/partner/dating-connection',
    },
  },
  openGraph: {
    title: 'Tirada Conexión en Citas — Claridad en las Primeras Citas',
    description: 'Cinco cartas para leer el campo entre tú y alguien nuevo — qué aporta cada persona, qué se está evitando y si conviene profundizar.',
    url: 'https://tarotaxis.com/es/tiradas/pareja/conexion-en-citas',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  { num: 1, name: 'La Energía Que Aportas', desc: 'Lo que realmente estás trayendo a esta conexión — tu apertura, tu cautela, las esperanzas y los miedos con los que llegas. No lo que desearías estar aportando, sino lo que honestamente está ahí.' },
  { num: 2, name: 'Su Energía Ahora Mismo', desc: 'La energía que la otra persona está aportando en este momento. No un pronóstico de sus sentimientos para siempre, solo lo que está vivo en ella hoy en relación contigo.' },
  { num: 3, name: 'Lo Que Se Está Intercambiando', desc: 'La corriente real entre ustedes — el punto de encuentro. Esta carta muestra la cualidad de la conexión en sí misma, separada de lo que cualquiera de los dos imagina que es.' },
  { num: 4, name: 'Lo Que Se Está Evitando', desc: 'La conversación, la verdad o el sentimiento que ninguno de los dos ha tocado aún. A veces es algo pequeño; a veces es lo más importante en la habitación.' },
  { num: 5, name: 'Si Vale la Pena Profundizar', desc: 'La guía honesta que ofrecen las cartas — no un veredicto de sí o no, sino un reflejo de si la conexión tiene la sustancia para crecer hacia algo más.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuándo debería usar una tirada de conexión en citas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Esta tirada funciona mejor en las primeras semanas de una conexión nueva — aproximadamente en la ventana de dos a seis citas, cuando ya tienes suficiente material para leer pero todavía no estás seguro/a de hacia dónde van las cosas. Es más útil cuando puedes sentir algo real pero no logras nombrarlo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué significa la carta de Los Enamorados en una tirada de citas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los Enamorados en una tirada de citas apunta a una elección significativa, a la alineación o a un encuentro genuino de valores — no necesariamente a un romance para siempre. En la posición 3 (lo que se está intercambiando) sugiere una resonancia auténtica. En la posición 4 (lo que se está evitando) puede indicar que la profundidad de la conexión está siendo minimizada por uno o ambos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si sigo sacando La Torre para alguien con quien estoy saliendo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Que La Torre se repita en lecturas de citas suele señalar que esta conexión reorganizará algo importante en ti, o que la estructura que están construyendo juntos no es lo bastante estable para sostenerse. No es automáticamente un no, pero pide una honestidad radical sobre lo que realmente tendría que cambiar para que esto funcione.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Una tirada de 5 cartas puede realmente decirme si seguir saliendo con alguien?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Puede darte un espejo asombrosamente claro, pero la decisión sigue siendo tuya. La tirada está diseñada para revelar lo que se está intercambiando y lo que se está evitando — las dos preguntas que la mayoría de la gente se salta en las primeras citas. Si las cartas apuntan a la sustancia, eso es significativo. Si apuntan a la evitación, también lo es.',
      },
    },
  ],
}

export default function ConexionEnCitasPage() {
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
          <span>Conexión en Citas</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>🌱</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Tirada Conexión en Citas
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            Una tirada de 5 cartas para las primeras semanas de una conexión nueva. Diseñada para leer la energía que se intercambia realmente — no la versión que tal vez estés esperando.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Antes de Sacar las Cartas
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Las primeras citas son uno de los terrenos emocionales más extraños que navegamos como adultos. Apenas conoces a alguien y ya tu sistema nervioso está construyendo futuros. El propósito de esta tirada no es predecir si las cosas funcionarán — es darte una visión más clara de lo que está sucediendo realmente entre ustedes ahora mismo, mientras aún está sucediendo.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Antes de barajar, respira y nota lo que quieres que las cartas digan. Luego nota ese deseo y déjalo de lado por unos minutos. Sostén a la persona en mente tal como realmente es — no como tu esperanza de ella — y baraja hasta que algo se asiente. Después saca cinco cartas.
          </p>
        </div>

        {/* Layout diagram */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            La Disposición de 5 Cartas
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Coloca las cartas en una fila, de izquierda a derecha. Cada posición tiene una pregunta específica — léelas en orden, pero observa también la historia que recorre toda la tirada.
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
            Cómo Leer Tu Resultado
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            La tensión más reveladora en esta tirada suele vivir entre las posiciones 3 y 4. La posición 3 te muestra lo que se intercambia realmente en la conexión; la posición 4 muestra lo que se está evitando. Si esas dos cartas están en conflicto — por ejemplo, el Dos de Copas en la posición 3 y el Siete de Espadas en la posición 4 — hay una calidez genuina entre ustedes, pero algo también se está reteniendo. Esa es información útil.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Presta atención a las cartas de la corte en la posición 2. A menudo describen la forma en que la otra persona se está relacionando ahora, más que quién es esencialmente. Un Caballero de Copas invertido, por ejemplo, no es un veredicto sobre su carácter — es una instantánea de cómo se está presentando en esta conexión ahora mismo.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            La posición 5 es guía, no profecía. Léela como la invitación que surge del resto de la tirada. Si las cartas apuntan a profundizar, el siguiente paso suele ser una conversación real más que un gran gesto. Si apuntan a alejarse, el movimiento más amable suele ser soltar la conexión sin dramatizarla.
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
