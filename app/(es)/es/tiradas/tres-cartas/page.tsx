import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tres Cartas — Guía Pasado, Presente, Futuro | TarotAxis',
  description: 'Aprende la tirada de tres cartas — la disposición más versátil del tarot. Descubre todas las variaciones de posiciones: pasado-presente-futuro, mente-cuerpo-espíritu, situación-acción-resultado y más.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/tres-cartas',
    languages: {
      'en': 'https://tarotaxis.com/spreads/three-card',
      'es': 'https://tarotaxis.com/es/tiradas/tres-cartas',
      'x-default': 'https://tarotaxis.com/spreads/three-card',
    },
  },
  openGraph: {
    title: 'Tirada de Tres Cartas — Guía Completa',
    description: 'Domina la tirada de tarot de 3 cartas: la disposición perfecta para lecturas diarias, guía rápida y práctica para principiantes.',
    url: 'https://tarotaxis.com/es/tiradas/tres-cartas',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const VARIATIONS = [
  {
    name: 'Pasado · Presente · Futuro',
    slug: 'pasado-presente-futuro',
    desc: 'La clásica. La Carta 1 muestra la energía pasada que da forma a la situación, la Carta 2 captura dónde te encuentras ahora mismo y la Carta 3 revela la dirección más probable si las energías actuales continúan.',
    positions: ['Pasado', 'Presente', 'Futuro'],
    best: 'Cualquier situación en la que quieras entender cómo llegaste aquí y hacia dónde se dirigen las cosas.',
  },
  {
    name: 'Situación · Acción · Resultado',
    slug: 'situacion-accion-resultado',
    desc: 'Práctica y decisiva. La Carta 1 define lo que está sucediendo, la Carta 2 muestra la acción más útil que se puede tomar y la Carta 3 revela el resultado de esa acción.',
    positions: ['Situación', 'Acción', 'Resultado'],
    best: 'Toma de decisiones, resolución de problemas o cuando necesitas una guía clara en lugar de reflexión.',
  },
  {
    name: 'Mente · Cuerpo · Espíritu',
    slug: 'mente-cuerpo-espiritu',
    desc: 'Un chequeo holístico a través de tus tres planos. La Carta 1 aborda patrones mentales y pensamientos, la Carta 2 refleja la energía física y el cuerpo, la Carta 3 habla del crecimiento espiritual y el propósito del alma.',
    positions: ['Mente', 'Cuerpo', 'Espíritu'],
    best: 'Chequeos de bienestar, lecturas de autocuidado o cuando te sientes fuera de equilibrio.',
  },
  {
    name: 'Opción A · Opción B · Lo que Considerar',
    slug: 'opcion-a-opcion-b',
    desc: 'Para decisiones entre dos caminos. La Carta 1 ilumina la primera opción, la Carta 2 la segunda y la Carta 3 revela el factor oculto que más necesitas considerar antes de elegir.',
    positions: ['Opción A', 'Opción B', 'Factor clave'],
    best: 'Decisiones en encrucijadas — dos trabajos, dos relaciones, dos direcciones.',
  },
  {
    name: 'Lo que Acoger · Lo que Liberar · Lo que Aprender',
    slug: 'acoger-liberar-aprender',
    desc: 'Una lectura para la transición y el crecimiento. La Carta 1 muestra hacia qué moverse, la Carta 2 qué soltar y la Carta 3 la lección que este período de tu vida te pide integrar.',
    positions: ['Acoger', 'Liberar', 'Aprender'],
    best: 'Nuevos comienzos, finales, períodos de cambio, lecturas de año nuevo o cumpleaños.',
  },
]

const MAIN_POSITIONS = [
  {
    num: 1,
    name: 'Pasado',
    subtitle: 'Lo que dio forma a esto',
    desc: 'La primera carta representa la energía pasada, el evento o patrón que ha conducido a la situación actual. No tiene por qué ser historia distante — puede ser tan reciente como la semana pasada. Esta carta responde: ¿cuál es la raíz de esta situación y qué he atravesado ya que sea relevante aquí?',
  },
  {
    num: 2,
    name: 'Presente',
    subtitle: 'Dónde estás ahora',
    desc: 'La carta central captura la energía actual, el sentimiento o la circunstancia — el corazón del asunto tal como está hoy. Suele ser la carta más emocionalmente resonante de la tirada. Refleja tanto la situación exterior como tu estado interior dentro de ella.',
  },
  {
    num: 3,
    name: 'Futuro',
    subtitle: 'Hacia dónde se dirigen las cosas',
    desc: 'La tercera carta muestra la dirección o resultado más probable si las energías actuales continúan. No es un destino fijo — es una trayectoria. Úsala como guía: si este es el resultado que deseas, la tirada te muestra cómo alcanzarlo. Si no, las cartas del pasado y del presente revelan qué abordar.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una tirada de tarot de tres cartas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada de tarot de tres cartas es una lectura que usa exactamente tres cartas, cada una colocada en una posición específica con un significado definido. La versión más común usa las posiciones Pasado, Presente y Futuro, pero hay muchas variaciones: Situación-Acción-Resultado, Mente-Cuerpo-Espíritu, Qué Acoger-Liberar-Aprender, y más. La tirada de tres cartas es la más utilizada del tarot — lo bastante sencilla para principiantes, lo bastante profunda para lectores experimentados.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo se hace una tirada de tarot de 3 cartas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Baraja tu mazo mientras te concentras en tu pregunta o situación. Cuando te sientas listo/a, saca tres cartas y colócalas boca abajo de izquierda a derecha. Asigna un significado a cada posición antes de darles la vuelta — por ejemplo, Pasado, Presente, Futuro. Luego da la vuelta a las cartas una por una, leyendo cada una en su posición antes de pasar a la siguiente. Finalmente, lee las tres juntas como una sola historia o mensaje.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la mejor tirada de tres cartas para el amor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para preguntas de amor, las variaciones de tres cartas más útiles son: (1) Pasado-Presente-Futuro para entender la trayectoria de una relación, (2) Tú-Ellos-La Conexión para explorar la dinámica entre dos personas, o (3) Qué Acoger-Liberar-Aprender para tener claridad sobre lo que necesita una relación. Para una lectura de amor más profunda con 5-7 cartas, consulta nuestra Tirada de Amor.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Pueden los principiantes usar una tirada de tres cartas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí — la tirada de tres cartas es el punto de partida ideal para principiantes del tarot. Tres cartas son manejables sin agobiarse, y aun así ofrecen una guía significativa. Empieza con Pasado-Presente-Futuro usando sólo los Arcanos Mayores si el mazo completo de 78 cartas se siente intimidante. A medida que crezca tu confianza, podrás explorar otras variaciones y tiradas más grandes como la Cruz Celta.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Con qué frecuencia debería hacer una lectura de tres cartas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Muchos lectores de tarot usan una sencilla tirada de tres cartas a diario como práctica matutina — sacando una carta para cada uno de mente, cuerpo y espíritu, o simplemente pasado-presente-futuro sobre el día por venir. Para preguntas o situaciones específicas, no hay una frecuencia fija. Confía en tu intuición: si te sientes llamado/a a sacar cartas, hazlo. Evita releer la misma pregunta varias veces en un solo día, ya que esto tiende a crear confusión en lugar de claridad.',
      },
    },
  ],
}

export default function TresCartasPage() {
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
        <span style={{ color: 'var(--gold)' }}>Tirada de Tres Cartas</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tres Cartas
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          La tirada más versátil del tarot. Tres cartas — interpretaciones infinitas. Tanto si lees a diario como ocasionalmente, la tirada de tres cartas te ofrece una guía clara y accionable sobre cualquier pregunta o situación.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['3 cartas', 'Apta para principiantes', 'Uso diario'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Visual Layout */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
          Disposición de las cartas
        </div>
        <div style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center', alignItems: 'flex-start' }}>
          {MAIN_POSITIONS.map(pos => (
            <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
              <div style={{ width: 80, height: 120, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1.2rem', color: 'var(--gold)' }}>
                {pos.num}
              </div>
              <div style={{ fontSize: '.65rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.1em', textAlign: 'center' }}>{pos.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main position descriptions */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '.06em' }}>
          Las tres posiciones explicadas
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {MAIN_POSITIONS.map(pos => (
            <div key={pos.num} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.8rem', color: 'var(--gold)' }}>
                {pos.num}
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.88rem', color: 'var(--gold)', marginBottom: '.15rem' }}>{pos.name}</div>
                <div style={{ fontSize: '.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '.5rem' }}>{pos.subtitle}</div>
                <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{pos.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Variations */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          5 variaciones de la tirada de tres cartas
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          El formato de tres cartas se adapta a casi cualquier pregunta. Aquí están las variaciones más útiles y cuándo usar cada una.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {VARIATIONS.map((v, i) => (
            <div key={v.slug} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '.75rem' }}>
                <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.75rem', color: 'var(--gold)', opacity: .5, flexShrink: 0, paddingTop: '.1rem' }}>0{i + 1}</span>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.92rem', color: 'var(--gold)' }}>{v.name}</div>
              </div>
              <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '.75rem' }}>{v.desc}</p>
              <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap', marginBottom: '.6rem' }}>
                {v.positions.map((p, pi) => (
                  <span key={pi} style={{ padding: '.2rem .65rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 20, fontSize: '.68rem', color: 'var(--gold)', fontFamily: "'Cinzel',serif" }}>
                    {pi + 1}. {p}
                  </span>
                ))}
              </div>
              <div style={{ fontSize: '.78rem', color: 'var(--muted)' }}>
                <span style={{ color: 'var(--gold)', opacity: .6 }}>Ideal para: </span>{v.best}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to read */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Cómo hacer una lectura de tres cartas
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Empieza eligiendo tu variación — Pasado-Presente-Futuro funciona para la mayoría de las situaciones, pero piensa en lo que tu pregunta realmente necesita antes de barajar. Mantén esa pregunta o enfoque claro en tu mente mientras barajas el mazo.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Cuando te sientas listo/a, corta o saca tres cartas y colócalas boca abajo de izquierda a derecha. Nombra las posiciones en voz alta antes de dar la vuelta a cualquier carta — esto enraíza la lectura y te impide encajar los significados de las cartas en las posiciones a posteriori.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Da la vuelta a cada carta una a una, deteniéndote a estar con ella antes de pasar a la siguiente. Lee la carta 1 por completo, luego la 2, luego la 3. Una vez que las tres sean visibles, léelas como una sola frase o historia — las intuiciones más importantes suelen vivir en cómo se hablan las tres cartas entre sí.
          </p>
          <p>
            Fíjate cuando aparecen cartas del mismo palo — tres cartas de Copas en una lectura de amor tienen un peso muy distinto al de una. Presta atención a los números que se repiten, los arquetipos complementarios y el tono visual general de la tirada. Estos patrones te dicen dónde recae el énfasis.
          </p>
        </div>
      </div>

      {/* Tips */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Consejos para una mejor lectura de tres cartas
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '.75rem' }}>
          {[
            ['🎯', 'Nombra las posiciones primero', 'Decide tu variación antes de sacar. Asignar significados después de ver las cartas es sesgo inconsciente disfrazado.'],
            ['🔗', 'Lee el hilo', 'Tras leer cada carta, encuentra la única narrativa que conecta las tres. La historia importa más que cualquier carta individual.'],
            ['↔️', 'Mira el arco', '¿La energía sube, baja o se mantiene estable a través de las cartas 1→2→3? La dirección te dice tanto como las propias cartas.'],
            ['📓', 'Lleva un diario', 'Las lecturas de tres cartas son ideales para el diario diario. Anota la fecha, la pregunta, las cartas y tu interpretación — los patrones emergen con el tiempo.'],
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
          Preguntas frecuentes
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>¿Listo/a para sacar tus tres cartas?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Usa nuestra herramienta gratuita de lectura de tarot — saca tres cartas y obtén una interpretación completa para cualquier pregunta.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Sacar tres cartas
          </Link>
          <Link href="/es/tiradas/cruz-celta" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Probar la Cruz Celta
          </Link>
        </div>
      </div>
    </div>
  )
}
