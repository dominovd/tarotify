import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '¿Qué Bloquea Mi Amor? Tirada de Tarot — Lectura de 3 Cartas | TarotAxis',
  description: 'Una tirada de 3 cartas para entender qué está bloqueando el amor en tu vida. Identifica el patrón interno, ve lo que te sostiene y encuentra el próximo paso hacia la apertura.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/que-bloquea-mi-amor',
    languages: {
      'en': 'https://tarotaxis.com/spreads/what-blocks-my-love',
      'es': 'https://tarotaxis.com/es/tiradas/que-bloquea-mi-amor',
      'x-default': 'https://tarotaxis.com/spreads/what-blocks-my-love',
    },
  },
  openGraph: {
    title: '¿Qué Bloquea Mi Amor? Tirada de Tarot — Lectura de 3 Cartas',
    description: 'Una tirada de 3 cartas para entender qué está bloqueando el amor en tu vida. Identifica el patrón interno, ve lo que te sostiene y encuentra el próximo paso hacia la apertura.',
    url: 'https://tarotaxis.com/es/tiradas/que-bloquea-mi-amor',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'Lo que me bloquea',
    desc: 'El patrón interno, la creencia, la herida o el miedo que está manteniendo el amor a distancia de forma más activa. A menudo sutil, a menudo más antiguo que el capítulo actual — frecuentemente formado mucho antes de las apps de citas y de las decepciones, y ahora corriendo en silencio al fondo de cada conexión.',
  },
  {
    num: 2,
    name: 'Lo que me sostiene',
    desc: 'La fuerza, el recurso o la cualidad que ya está presente y en la que puedes apoyarte mientras trabajas con el bloqueo. No lo que falta o lo que aún necesitas adquirir — lo que está aquí, ahora, en ti. Las cartas suelen apuntar a algo que has estado infravalorando.',
  },
  {
    num: 3,
    name: 'Primer paso hacia la apertura',
    desc: 'El movimiento concreto y accionable que más directamente suavizaría el bloqueo. Lo bastante pequeño como para hacerse esta semana — una sola conversación honesta, un solo límite sostenido de forma distinta, una sola historia vieja dejada en el suelo. No una transformación. Un paso.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué cartas suelen indicar que el amor está bloqueado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Varias cartas se repiten en lecturas sobre amor bloqueado. El Cinco de Pentáculos habla de sentirse dejada fuera, en el frío — a menudo una sensación interior de no merecer más que una carencia real. El Cuatro de Copas sugiere retirada emocional — el regalo siendo ofrecido pero no visto. El Ocho de Espadas señala la limitación autoimpuesta, la jaula cuya puerta está abierta. La Torre invertida indica aferrarse a estructuras viejas que necesitan caer. El Cinco de Espadas revela actitud defensiva — el hábito de ganar pequeñas discusiones al precio de la intimidad.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué no encuentro el amor haga lo que haga?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El hacer puede ser parte del bloqueo. Cuando el amor se siente como esfuerzo — apps interminables, performance, optimización — el sistema nervioso lee la conexión como trabajo, que es justo el estado opuesto al que permite que la intimidad aterrice. Esta tirada reformula la pregunta. En vez de preguntar qué más deberías hacer, pregunta qué se está protegiendo en silencio, qué historia vieja sigue corriendo y qué único paso honesto cambiaría la dinámica. A veces el cambio más útil es hacer menos, no más.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo hacer esta tirada si estoy en una relación pero me siento distante?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí — el bloqueo suele ser interno más que relacional. Las parejas pueden sentarse frente a frente mientras el obstáculo real vive en el sistema nervioso de una persona, en patrones protectores antiguos, en un miedo silencioso a ser plenamente vista. Esta tirada no asume soltería. Pregunta qué está manteniendo el amor a distancia, y esa distancia puede existir dentro de un matrimonio largo tan fácilmente como dentro de un piso vacío. Muchas personas en pareja encuentran esta tirada más útil que las explícitamente relacionales.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Con qué frecuencia puedo hacer esta lectura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Deja de cuatro a seis semanas entre lecturas. La primera saca a la luz material que necesita tiempo para ser trabajado realmente — un bloqueo reconocido un lunes no es un bloqueo resuelto el martes. Volver demasiado pronto suele producir variaciones de la misma respuesta porque el patrón de fondo aún no ha tenido la oportunidad de moverse. Usa el tiempo entre lecturas para practicar el primer paso que las cartas sugirieron. Después vuelve, y la tirada probablemente te mostrará algo genuinamente nuevo.',
      },
    },
  ],
}

export default function QueBloqueaMiAmorPage() {
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
        <span style={{ color: 'var(--gold)' }}>¿Qué bloquea mi amor?</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tarot ¿Qué Bloquea Mi Amor?
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Una tirada de tres cartas para la pregunta debajo de la pregunta — qué está manteniendo realmente al amor a distancia, qué te sostiene ya, y el único próximo paso que suavizaría el patrón.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['3 Cartas', 'Trabajo Interior', 'Solteras y Parejas'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* About */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Sobre esta tirada
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            La mayoría de los bloqueos al amor no son sobre ser inadmirable. Son sobre estar inconscientemente comprometida con la protección — con una versión de seguridad que se aprendió en circunstancias anteriores y nunca se actualizó al presente. El cuerpo recuerda lo que costó ser herida, y silenciosamente arregla las cosas para que nada de esa magnitud pueda volver a ocurrir. Esto es inteligente. También es, con el tiempo, lo que necesita renegociarse. Las cartas de esta tirada no están aquí para avergonzar a la parte protectora. Están aquí para presentarla a la versión de ti que ya está lista para algo más abierto.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Hay una diferencia real entre los límites sanos y los muros protectores, y la diferencia rara vez es visible desde dentro. Los límites son responsivos — cambian con el contexto, dejan entrar lo que es seguro y rechazan lo que no, y suelen ser comunicados en vez de impuestos en silencio. Los muros no se mueven. Lo dejan todo fuera, incluidas las cosas que de verdad quieres, y normalmente están construidos alrededor de un dolor que no ha sido plenamente llorado. Esta tirada te ayuda a notar con cuál de los dos estás trabajando.
          </p>
          <p>
            Tres cartas son suficientes. Profundizar más a menudo produce más evasión que claridad — una tirada de diez cartas sobre esta pregunta tiende a darle a la mente analítica material suficiente para no actuar nunca. Tres posiciones, un bloqueo, un recurso, un paso. La pequeñez es el punto. Cualquier cosa más grande se convierte en otra forma de pensar sobre el amor en vez de moverse hacia él.
          </p>
        </div>
      </div>

      {/* Spread Layout */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Las tres posiciones
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Saca las cartas en orden, respirando entre cada una. La carta del medio — lo que te sostiene — es la que la mayoría de los lectores subestiman; siéntate con ella más tiempo antes de leer la tercera.
        </p>

        {/* Visual Layout */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Disposición de cartas
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

      {/* FAQ */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Preguntas frecuentes
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>¿Lista para mirar el patrón?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Saca tus tres cartas con nuestra herramienta de lectura gratuita y vuelve aquí para interpretar cada posición con honestidad.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/lectura-gratis" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Sacar Cartas Ahora
          </Link>
          <Link href="/es/tiradas/que-necesito-sanar" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ¿Qué necesito sanar?
          </Link>
          <Link href="/es/tiradas/sanar-tras-desamor" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Sanar tras el Desamor
          </Link>
          <Link href="/es/tiradas/amor" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Tirada de Amor
          </Link>
        </div>
      </div>
    </div>
  )
}
