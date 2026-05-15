import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tarot de Reconciliación — Lectura para Volver con un Ex | TarotAxis',
  description: 'Usa la tirada de tarot de reconciliación para explorar si reconectar con un ex es lo más sabio. Disposiciones de 5 y 7 cartas con el significado completo de cada posición.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/amor/reconciliacion',
    languages: {
      'en': 'https://tarotaxis.com/spreads/love/reconciliation',
      'es': 'https://tarotaxis.com/es/tiradas/amor/reconciliacion',
      'x-default': 'https://tarotaxis.com/spreads/love/reconciliation',
    },
  },
  openGraph: {
    title: 'Tirada de Tarot de Reconciliación — ¿Deberías Reconectar?',
    description: 'Una tirada de tarot dedicada a las preguntas de reconciliación y vuelta del ex. Guía honesta sobre si el reencuentro está alineado con tu mayor bien.',
    url: 'https://tarotaxis.com/es/tiradas/amor/reconciliacion',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS_5 = [
  { num: 1, name: 'Dónde estás tú', desc: 'Tu estado emocional actual y cómo te sientes realmente respecto a esta persona — por debajo del anhelo y de las historias que te cuentas.' },
  { num: 2, name: 'Dónde está la otra persona', desc: 'La energía de la otra persona ahora mismo. Lo que carga, lo que siente y hacia dónde apuntan sus pensamientos en relación contigo.' },
  { num: 3, name: 'Lo que terminó la conexión', desc: 'La raíz de la separación — la herida central, el patrón o la circunstancia que llevó a la ruptura. Esta carta pide honestidad.' },
  { num: 4, name: 'Lo que ha cambiado', desc: 'El crecimiento, el cambio o la nueva comprensión que ha ocurrido desde la separación. ¿Hay un cambio genuino o siguen presentes los mismos patrones?' },
  { num: 5, name: 'El camino a seguir', desc: 'Lo que está alineado con tu mayor bien ahora — ya sea reconciliación, sanar por separado o algo completamente distinto.' },
]

const POSITIONS_7 = [
  { num: 1, name: 'Tus verdaderos sentimientos', desc: 'Lo que sientes genuinamente, sin pensamiento ilusorio — la verdad emocional cruda bajo la superficie.' },
  { num: 2, name: 'Su energía actual', desc: 'Dónde se encuentra esta persona emocional y mentalmente ahora mismo en relación contigo y con la relación.' },
  { num: 3, name: 'La raíz de la ruptura', desc: 'La razón central por la que terminó la relación — el problema real, no solo el detonante.' },
  { num: 4, name: 'Lecciones de la separación', desc: 'Lo que este tiempo separados ha enseñado a cada uno — el crecimiento que el universo pretendía.' },
  { num: 5, name: 'Obstáculos para la reconciliación', desc: 'Lo que se interpondría si volvieran a estar juntos — barreras prácticas, emocionales o energéticas.' },
  { num: 6, name: 'Cómo sería la reconciliación', desc: 'La forma realista que tomaría la relación si volvieran — lo que realmente sería, no lo que esperas que fuera.' },
  { num: 7, name: 'Guía', desc: 'El mensaje general de las cartas sobre tu camino más alto — la respuesta más clara sobre si la reconciliación sirve a tu crecimiento.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una tirada de tarot de reconciliación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada de tarot de reconciliación es una disposición específica de cartas diseñada para dar una visión honesta sobre si reconectar con un ex es lo más sabio. Examina la energía actual de ambas personas, la causa raíz de la separación, qué ha cambiado de verdad y qué resultado serviría a tu mayor bien.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puede el tarot decirme si mi ex volverá?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tarot no predice futuros fijos, pero sí puede iluminar las energías actuales alrededor de una situación y revelar lo más probable si nada cambia. Una tirada de reconciliación es más útil para ayudarte a entender tus propios sentimientos, ver la relación con claridad y tomar una decisión consciente que para predecir el comportamiento de otra persona.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué cartas son señales positivas en una tirada de reconciliación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cartas como Los Enamorados, el Dos de Copas, La Estrella, el As de Copas, el Diez de Copas y el Seis de Copas suelen llevar energía positiva en las lecturas de reconciliación — sugiriendo apertura emocional, conexión renovada o sanación. La Rueda de la Fortuna puede indicar un giro significativo. Sin embargo, el contexto lo es todo — lee siempre las cartas en relación con su posición y con las cartas que las rodean.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué significa si aparece La Torre en una tirada de reconciliación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Torre en una lectura de reconciliación a menudo señala que la relación se rompió por una razón significativa — una que no se puede simplemente parchear. Puede sugerir que la separación, aunque dolorosa, era necesaria, y que intentar reconstruir sobre los mismos cimientos quizá no sirva a ninguno de los dos. No es un no definitivo, pero pide una honestidad radical sobre lo que realmente salió mal.',
      },
    },
  ],
}

export default function ReconciliacionSpreadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/es/tiradas" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Tiradas</Link>
          <span style={{ opacity: .4 }}>›</span>
          <Link href="/es/tiradas/amor" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Amor</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Reconciliación</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>🌹</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Tirada de Tarot de Reconciliación
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            Una tirada dedicada a las preguntas sobre volver con un ex y reencuentros. Estas disposiciones están diseñadas para darte claridad honesta — no solo lo que quieres oír, sino lo que más necesitas saber.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Antes de Comenzar
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Las lecturas de reconciliación funcionan mejor cuando te acercas a ellas con apertura genuina — no como una herramienta para confirmar que tu ex está volviendo, sino como una forma de ver la situación con claridad. Las cartas reflejarán las energías honestas en juego, incluidas dinámicas dentro de ti que tal vez prefieras no examinar.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Define tu intención antes de sacar las cartas. Sostén la relación en tu mente — no solo el anhelo o el recuerdo de los buenos momentos, sino la verdad completa. Después baraja hasta que te sientas listo y saca.
          </p>
        </div>

        {/* 5-card spread */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            La Tirada de Reconciliación de 5 Cartas
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            El punto de partida más claro para la mayoría de las preguntas sobre volver con un ex. Cinco cartas te dan suficiente profundidad para ver el panorama completo sin saturar la lectura.
          </p>

          {/* Layout diagram */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {[1, 2, 3, 4, 5].map(n => (
              <div key={n} style={{ width: 52, height: 80, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>
                {n}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS_5.map(({ num, name, desc }) => (
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

        {/* 7-card spread */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            La Inmersión Profunda de 7 Cartas
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Para relaciones largas, situaciones más complejas o cuando la tirada de 5 cartas aún te deja con preguntas abiertas. Esta disposición examina el arco completo — causa raíz, lecciones, obstáculos y cómo se vería realmente el reencuentro.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS_7.map(({ num, name, desc }) => (
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

        {/* Interpreting tips */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Cómo Leer Tus Resultados
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Busca la historia que recorre la tirada, no solo los significados aislados de cada carta. Si las cartas en las posiciones 3 (causa raíz) y 5 (camino a seguir) están en tensión — por ejemplo, La Torre seguida del Dos de Copas — la lectura te pide hacer el trabajo interior antes de que cualquier reencuentro externo sea posible.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Presta especial atención a las cartas de la corte: a menudo representan directamente a la otra persona. Un Rey o una Reina invertida en la posición 2 puede señalar indisponibilidad emocional, mientras que un Caballo del derecho puede indicar movimiento e iniciativa en su energía hacia ti.
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
          <Link href="/es/tiradas/amor" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Más tiradas</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Todas las tiradas de amor →</div>
          </Link>
          <Link href="/es/lectura-gratis" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Pruébala ahora</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Lectura de tarot gratis →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
