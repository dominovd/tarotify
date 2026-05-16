import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tarot para Manifestar Amor — Lectura de 3 Cartas para Llamar al Amor | TarotAxis',
  description: 'Una tirada de tarot de 3 cartas para manifestar amor. Ve qué mantiene al amor a distancia, qué ya te está abriendo y el próximo paso concreto hacia una conexión genuina.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/manifestacion/amor',
    languages: {
      'en': 'https://tarotaxis.com/manifestation/love',
      'es': 'https://tarotaxis.com/es/manifestacion/amor',
      'x-default': 'https://tarotaxis.com/manifestation/love',
    },
  },
  openGraph: {
    title: 'Tirada de Tarot para Manifestar Amor — Lectura de 3 Cartas',
    description: 'Una tirada de tarot de 3 cartas para manifestar amor — nombra el bloqueo, reconoce la apertura, da el siguiente paso.',
    url: 'https://tarotaxis.com/es/manifestacion/amor',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'Lo Que Mantiene al Amor a Distancia',
    desc: 'El compromiso inconsciente, la historia o la autoprotección que actualmente mantiene al amor a un brazo de distancia. Normalmente más antiguo y más sutil que "estoy muy ocupado". La carta suele nombrar una postura que adoptaste hace años por muy buenas razones y has olvidado que sigues sosteniendo.',
  },
  {
    num: 2,
    name: 'Lo Que Ya Te Está Abriendo',
    desc: 'La cualidad, la sanación o la experiencia que ya te está suavizando y haciendo disponible para el amor. El trabajo está más avanzado de lo que crees. Esta carta es el recordatorio de la lectura de que no estás empezando desde cero — algo te ha estado preparando en silencio.',
  },
  {
    num: 3,
    name: 'El Siguiente Paso Hacia la Conexión',
    desc: 'La acción específica, de esta semana, que más directamente invitaría a una conexión real. A menudo algo fuera de pantalla — un lugar al que ir, una persona a la que escribir, un hábito que romper. Ocasionalmente algo interno. Siempre algo que puedes empezar en los próximos siete días.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué cartas del tarot significan que viene el amor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Dos de Copas señala un reconocimiento mutuo entre dos personas. El As de Copas es una apertura emocional — tuya o de alguien más. Los Enamorados habla de un vínculo significativo que se forma o de una elección importante entre conexiones. El Caballo de Copas sugiere a alguien que llega con sentimiento e intención. La Sota de Copas es un mensaje, una invitación o un primer movimiento. Ninguna de estas es una predicción de llegada. Describen las condiciones en las que el amor suele aterrizar, y aparecen con más frecuencia para personas que también están haciendo el trabajo interior.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Esta tirada me dirá cuándo conoceré a alguien?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — el tiempo no es lo que el tarot hace de forma fiable. La tirada te dice lo que está en movimiento ahora: qué bloquea, qué abre, sobre qué actuar. Los lectores honestos en este campo han dicho todos lo mismo, que las predicciones de tiempos son donde el tarot pierde credibilidad rápidamente. Lo que las cartas sí pueden hacer es acortar la distancia entre la deriva y la acción, lo que normalmente acorta la distancia entre tú y la persona para la que realmente estás disponible. Concéntrate en la tercera carta. El tiempo viene después.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo hacer esta tirada si ya estoy en una relación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí — la tirada lee el amor en sentido amplio, y funciona bien para profundizar una conexión existente en lugar de conocer a alguien nuevo. La primera carta se convierte en lo que está silenciando el amor entre tú y tu pareja. La segunda se convierte en lo que ya está vivo en la relación y que has dejado de notar. La tercera se convierte en el siguiente paso hacia una conexión genuina dentro de esta pareja. Muchas parejas encuentran esta versión más útil que las tiradas de "revisión de relación" porque apunta a la acción en lugar de describir la dinámica.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Y si sigo obteniendo la misma carta en lecturas distintas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La carta es la lección — todavía no has terminado con ella. Trabaja con ella en lugar de volver a barajar. Las cartas recurrentes son la forma en que la baraja insiste en una pieza de trabajo interior que has estado declinando educadamente. Siéntate con lo que la carta está nombrando, escribe sobre ello durante una semana, pregunta a una persona de confianza si reconoce el patrón en ti, y actúa sobre el pequeño movimiento que sugiere. Luego vuelve a sacar al mes siguiente. La carta casi siempre cambia una vez que te has comprometido de verdad con lo que estaba señalando.',
      },
    },
  ],
}

export default function ManifestarAmorPage() {
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
        <Link href="/es/manifestacion" style={{ color: 'var(--muted)' }}>Manifestación</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Manifestar Amor</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>♡</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tarot para Manifestar Amor
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Una lectura de tres cartas para llamar al amor a tu vida. Nombra lo que mantiene al amor a distancia, reconoce lo que ya te está suavizando hacia la conexión y encuentra el próximo paso concreto.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['3 Cartas', 'Llamar al Amor', 'Trabajo Interior'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Why this spread */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Por Qué Funciona Esta Tirada
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Hay una diferencia real entre manifestar el amor y perseguir el amor. Manifestar amor significa convertirte en el tipo de persona que puede reconocer, recibir y sostener una conexión genuina cuando aparece. Perseguir el amor significa centrarse en una persona en particular, en un resultado en particular, en un plazo en particular — y tratar el tarot como un mando a distancia para el comportamiento de otra persona. Las cartas se niegan a ayudar con el segundo tipo de trabajo. Te redirigirán, a veces de forma incómoda, hacia el primero.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            La mayoría de la gente no está bloqueada para el amor por otras personas. Está bloqueada por sus propios patrones protectores — las partes de sí mismos que aprendieron, a menudo temprano y por razones legítimas, que la intimidad era insegura o poco fiable. La primera carta de esta tirada nombra exactamente ese patrón. Rara vez dice algo dramático. Suele nombrar algo pequeño y persistente: la forma en que sales del momento cuando alguien se acerca demasiado, la forma en que te mantienes lo bastante ocupado para no sentirte solo, la forma en que sobreseleccionas a alguien que ya sabes a medias que no se quedará.
          </p>
          <p>
            La tercera carta a veces apunta hacia afuera — ve al lugar, envía el mensaje, acepta la invitación. A veces apunta hacia adentro — termina el duelo, cierra el asunto pendiente con el ex, conviértete en un amigo con el que tú mismo querrías estar. Ambas direcciones son movimientos reales hacia el amor. Resiste la tentación de descartar una acción interna como que no cuenta. Las cartas saben en qué orden las cosas necesitan suceder para ti, aunque tú no lo sepas.
          </p>
        </div>
      </div>

      {/* Spread layout */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          La Tirada — Tres Cartas
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Baraja con una sola pregunta honesta: <em>¿Qué necesito ver sobre el amor en mi vida ahora mismo?</em> Saca tres cartas de izquierda a derecha.
        </p>

        {/* Visual Layout */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Esquema de Cartas
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {POSITIONS.map(pos => (
              <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                <div style={{ width: 72, height: 108, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1.1rem', color: 'var(--gold)' }}>
                  {pos.num}
                </div>
                <div style={{ fontSize: '.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', maxWidth: 88 }}>{pos.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {POSITIONS.map(pos => (
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Continúa el trabajo interior</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          El amor y la vitalidad se mueven juntos. Acompaña esta tirada con la lectura de energía sexual, o vuelve al conjunto completo.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/manifestacion/energia-sexual" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Manifestar Energía Sexual
          </Link>
          <Link href="/es/manifestacion" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Todas las Tiradas de Manifestación
          </Link>
          <Link href="/es/cartas" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Todas las Cartas
          </Link>
        </div>
      </div>
    </div>
  )
}
