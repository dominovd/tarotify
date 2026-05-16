import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tarot de Luna Llena — Guía de Soltar y Ritual | TarotAxis',
  description: 'Descubre la mejor tirada de tarot para la luna llena — esquemas de 4 y 6 cartas para soltar, gratitud e intención. Guía completa con significados de posición y consejos rituales.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/luna-llena',
    languages: {
      'en': 'https://tarotaxis.com/spreads/full-moon',
      'es': 'https://tarotaxis.com/es/tiradas/luna-llena',
      'x-default': 'https://tarotaxis.com/spreads/full-moon',
    },
  },
  openGraph: {
    title: 'Tirada de Tarot de Luna Llena — Guía de Soltar y Ritual',
    description: 'Descubre la mejor tirada de tarot para la luna llena — esquemas de 4 y 6 cartas para soltar, gratitud e intención.',
    url: 'https://tarotaxis.com/es/tiradas/luna-llena',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const SIMPLE_POSITIONS = [
  {
    num: 1,
    name: 'Qué Está Culminando',
    desc: 'La energía, situación o tema que ha estado creciendo y ahora alcanza su punto máximo. Esta carta revela lo que la luna llena ilumina en tu vida — aquello que es plenamente visible, para bien o para mal, bajo esta luz lunar brillante.',
  },
  {
    num: 2,
    name: 'Qué Soltar',
    desc: 'Aquello que se te invita a liberar. La luna llena es el momento más poderoso para el trabajo de soltar — esta carta nombra el patrón, creencia, dinámica relacional o energía que ha completado su ciclo y está lista para irse.',
  },
  {
    num: 3,
    name: 'Por Qué Estoy Agradecido',
    desc: 'El regalo de este ciclo. Incluso en la dificultad, cada lunación trae algo digno de reconocimiento. Esta carta te invita a nombrar y honrar lo que ha crecido, llegado o cambiado para mejor desde la última luna nueva.',
  },
  {
    num: 4,
    name: 'Mensaje de la Luna',
    desc: 'La guía general para esta luna llena. Esta carta habla directamente a lo que el universo, tu yo superior o el arquetipo de la luna misma más desea que sepas en este momento de culminación.',
  },
]

const CLARITY_POSITIONS = [
  {
    num: 1,
    name: 'Dónde Estoy',
    desc: 'Tu posición actual — emocional, energética, práctica. Una instantánea honesta de dónde te encuentras al elevarse esta luna llena.',
  },
  {
    num: 2,
    name: 'Qué Está Completo',
    desc: 'El capítulo, ciclo o fase de crecimiento que ahora se ha cerrado por completo. Reconócelo con honestidad — no todo lo que termina es una pérdida.',
  },
  {
    num: 3,
    name: 'Qué Soltar',
    desc: 'La energía, hábito, historia o apego específico que la luna llena te pide rendir conscientemente.',
  },
  {
    num: 4,
    name: 'Qué Recibir',
    desc: 'El regalo, percepción u oportunidad que se vuelve disponible cuando sueltas lo que ya no es tuyo para cargar.',
  },
  {
    num: 5,
    name: 'Qué Celebrar',
    desc: 'El logro, crecimiento o momento de belleza de este ciclo pasado que merece ser visto y honrado antes de seguir adelante.',
  },
  {
    num: 6,
    name: 'Guía para el Próximo Ciclo',
    desc: 'Un único tema o intención guía para llevar desde esta luna llena hasta la luna menguante y la luna nueva que siguen.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una tirada de tarot de luna llena?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada de tarot de luna llena es un esquema de cartas diseñado para usarse en el punto máximo del ciclo lunar, cuando la luna está en plena iluminación. La luna llena se asocia tradicionalmente con la culminación, la finalización, el soltar y la gratitud — aquello que ha estado creciendo desde la luna nueva ahora alcanza su expresión más plena. Una tirada de luna llena usa estos temas como significados de posición, ofreciéndote un ritual estructurado para reflexionar sobre lo que ha fructificado y lo que está listo para ser soltado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuántas cartas se usan en una tirada de tarot de luna llena?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las tiradas de tarot de luna llena más comunes usan entre 4 y 6 cartas. Una tirada de 4 cartas cubre lo esencial: qué está culminando, qué soltar, por qué estar agradecido y un mensaje de la luna. Una tirada de 6 cartas añade más matices, incluyendo qué está completo, qué recibir y guía para el próximo ciclo. Ambos formatos funcionan bien — elige 4 cartas para un ritual enfocado y 6 para una exploración más profunda de la energía de la luna llena.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es el mejor momento para hacer una tirada de tarot de luna llena?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La ventana ideal para una tirada de tarot de luna llena son los tres días que rodean la luna llena exacta: el día anterior, el día y el día siguiente. La energía de la luna llena se siente a lo largo de esta ventana en vez de solo en el momento preciso de iluminación máxima. Muchos lectores prefieren hacer su lectura por la tarde, cuando la luna se eleva o es plenamente visible. No necesitas un cielo despejado ni estar al aire libre — la energía lunar está disponible donde sea que estés.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué preguntas debería hacer en una lectura de tarot de luna llena?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las preguntas de luna llena se centran mejor en la culminación, el soltar y la gratitud, más que en los nuevos comienzos (que pertenecen a la luna nueva). Preguntas útiles incluyen: ¿Qué ha traído este ciclo a la luz? ¿Qué estoy listo para soltar? ¿Qué he logrado o he crecido desde la última luna nueva? ¿Qué está iluminando la luna que he estado evitando? ¿Qué necesita ser honrado o celebrado antes de seguir adelante? La luna llena no es típicamente un momento para preguntas sobre iniciar nuevos proyectos — guárdalas para la luna nueva.',
      },
    },
  ],
}

export default function LunaLlenaPage() {
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
        <span style={{ color: 'var(--gold)' }}>Tirada de Luna Llena</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>○</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tarot de Luna Llena
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          La luna llena es el punto máximo del ciclo lunar — un momento de culminación, iluminación y liberación. Usa esta tirada para honrar lo que ha fructificado, reconocer lo que está completo y soltar conscientemente lo que ya no sirve a tu crecimiento.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['4–6 Cartas', 'Apto para Principiantes', 'Ritual Lunar'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Full Moon Energy */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          La Energía de la Luna Llena
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            En el ciclo lunar, la luna llena marca el momento de máxima iluminación — tanto literal como simbólicamente. Lo que ha estado creciendo desde la luna nueva ahora se muestra plenamente revelado. Los proyectos alcanzan hitos. Las emociones que han estado fermentando suben a la superficie. Las verdades ocultas se vuelven imposibles de ignorar. La luna llena no inicia cosas; las completa.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Astrológicamente, la luna llena cae siempre en el signo opuesto al sol, creando una polaridad de energía que nos pide integrar dos fuerzas aparentemente contradictorias. Esta tensión es generativa — es donde viven las percepciones más poderosas. Una luna llena en Escorpio con el sol en Tauro, por ejemplo, crea fricción entre profundidad y comodidad, transformación y seguridad. Tu tirada de tarot a menudo reflejará esta polaridad en las cartas que aparezcan.
          </p>
          <p>
            Las prácticas tradicionales de la luna llena — soltar, rituales de intención, gratitud y corte de cordones — todas surgen de este simbolismo. La luna llena es el momento natural para desprenderse de lo que ha completado su propósito, para que el ciclo de la luna menguante pueda llevárselo. El tarot es una herramienta ideal para este trabajo: hace visible lo invisible, dando forma a las energías que estás listo para nombrar y soltar.
          </p>
        </div>
      </div>

      {/* Simple Full Moon Spread */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Esquema 1 — Luna Llena Simple (4 Cartas)
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Un ritual enfocado de cuatro cartas que cubre los temas esenciales de la luna llena: qué ha salido a la luz, qué soltar, qué celebrar y el mensaje de la luna. Ideal para una práctica mensual.
        </p>

        {/* Visual Layout */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Esquema de Cartas
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {SIMPLE_POSITIONS.map(pos => (
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
          {SIMPLE_POSITIONS.map(pos => (
            <div key={pos.num} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
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

      {/* Full Moon Clarity Spread */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Esquema 2 — Claridad de Luna Llena (6 Cartas)
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Una tirada más profunda de seis cartas para una reflexión más completa de la luna llena. Este esquema examina dónde estás, qué ha terminado, qué soltar y recibir, qué celebrar y cómo seguir adelante hacia el próximo ciclo.
        </p>

        {/* Visual Layout — arc of 6 */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Esquema de Cartas
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {CLARITY_POSITIONS.map(pos => (
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
          {CLARITY_POSITIONS.map(pos => (
            <div key={pos.num} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
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

      {/* Ritual Tips */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Consejos de Ritual para la Luna Llena
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '.75rem' }}>
          {[
            ['○', 'Elige el momento', 'Haz tu tirada dentro de los tres días de la luna llena exacta. La energía culmina la noche de la luna llena pero permanece potente un día antes y un día después.'],
            ['✦', 'Prepara el espacio', 'Atenúa las luces, enciende una vela y, si es posible, trabaja cerca de una ventana donde pueda llegar la luz lunar. El contenedor ritual importa.'],
            ['◇', 'Escríbelo', 'Tras la lectura, escribe en un papel los nombres de lo que estás soltando. Muchos lectores lo queman con cuidado o lo entierran como un acto físico de liberación.'],
            ['○', 'Carga tu baraja', 'Deja tu baraja de tarot en una ventana toda la noche bajo la luna llena para limpiar y recargar su energía — una práctica transmitida por generaciones de lectores de cartas.'],
          ].map(([icon, title, text]) => (
            <div key={title as string} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1.1rem', color: 'var(--gold)', marginBottom: '.4rem' }}>{icon}</div>
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

      {/* Related: The Moon card */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.95rem', marginBottom: '.6rem', letterSpacing: '.06em' }}>
          La carta de La Luna
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: '0 0 .75rem' }}>
          La Luna, en los Arcanos Mayores, comparte tema con esta tirada — sueños, intuición, lo que se mueve bajo la superficie. Si aparece en tu tirada de luna llena, vale la pena leer su significado en profundidad.
        </p>
        <Link href="/es/cartas/la-luna" style={{ fontSize: '.82rem', color: 'var(--gold)', fontFamily: "'Cinzel',serif", letterSpacing: '.06em' }}>
          Significado de La Luna →
        </Link>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>¿Lista para sacar tus cartas de luna llena?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Usa nuestra lectura gratuita de tarot para sacar tus cartas, luego vuelve aquí para interpretar cada posición.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/lectura-gratis" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Sacar Cartas Ahora
          </Link>
          <Link href="/es/tiradas/luna-nueva" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Tirada de Luna Nueva
          </Link>
          <Link href="/es" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Todas las Tiradas
          </Link>
        </div>
      </div>
    </div>
  )
}
