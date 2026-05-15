import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada Guía para Citas — Lectura de Tarot de 4 Cartas para Consejo en Citas | TarotAxis',
  description: 'Una tirada de tarot de citas de 4 cartas para la frustración continua en las citas. Lee de qué trata realmente la situación, qué sigues pasando por alto y el próximo paso correcto.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/pareja/guia-de-citas',
    languages: {
      'en': 'https://tarotaxis.com/spreads/partner/dating-guidance',
      'es': 'https://tarotaxis.com/es/tiradas/pareja/guia-de-citas',
      'x-default': 'https://tarotaxis.com/spreads/partner/dating-guidance',
    },
  },
  openGraph: {
    title: 'Tirada Guía para Citas — Un Próximo Paso Claro',
    description: 'Cuatro cartas para cuando estás atascado/a en un bucle de citas y simplemente necesitas una dirección honesta — sin adivinaciones, solo claridad.',
    url: 'https://tarotaxis.com/es/tiradas/pareja/guia-de-citas',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  { num: 1, name: 'De Qué Trata Realmente Esta Situación', desc: 'La pregunta más profunda debajo de la frustración de las citas. Casi siempre distinta de la pregunta superficial — y casi siempre más útil una vez nombrada.' },
  { num: 2, name: 'Lo Que Sigo Pasando Por Alto', desc: 'El detalle, el patrón o el sentimiento que te ha estado silenciosamente visible y junto al que sigues pasando. Amable — pero específico.' },
  { num: 3, name: 'La Pregunta Amable Que Debo Hacerme', desc: 'Una pregunta con la que vivir los próximos días. No una pregunta que castigue — una amable. Las cartas la ofrecen porque responderla lo cambia todo.' },
  { num: 4, name: 'El Próximo Paso Correcto', desc: 'Una acción única y concreta. No el plan entero, no el destino final — solo el siguiente movimiento que se alinea con lo que ha mostrado el resto de la tirada.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Debería seguir saliendo con esta persona?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tarot no da respuestas limpias de debería-o-no-debería, y la pregunta misma a menudo oculta una más útil. Usa esta tirada para sacar a la superficie lo que está pasando realmente para ti en la situación. Una vez que eso es claro, la respuesta sobre si seguir saliendo con alguien tiende a volverse obvia sin que las cartas necesiten deletrearla.',
      },
    },
    {
      '@type': 'Question',
      name: '¿En qué se diferencia esto de la tirada de conexión en citas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La tirada Conexión en Citas es para entender el campo entre dos personas en las primeras semanas. Esta es más rápida y más personal — es para los momentos en los que estás atascado/a en tu propia cabeza acerca de una situación de citas y solo necesitas un siguiente paso claro. Cuatro cartas, centradas en ti.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si sigo sacando las mismas cartas en las lecturas de citas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las cartas que se repiten casi siempre significan que la misma enseñanza se está ofreciendo hasta que se escuche. En lugar de pedirle a las cartas una pregunta distinta, siéntate con la carta que sigue apareciendo y pregúntale qué intenta aterrizar en ti. Una vez que el mensaje aterriza, la repetición suele detenerse.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Con qué frecuencia puedo hacer esta tirada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una vez por semana como máximo para la misma situación. Hacerla con más frecuencia la convierte en una comprobación ansiosa en lugar de guía — y las cartas se vuelven menos receptivas cuando se usan así. Deja que el próximo paso correcto sea realmente dado antes de sacar otra vez.',
      },
    },
  ],
}

export default function GuiaDeCitasPage() {
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
          <span>Guía para Citas</span>
        </div>

        {/* Hero */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>🧭</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Tirada Guía para Citas
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            Una tirada enfocada de 4 cartas para cuando las citas te tienen atrapado/a en un bucle. Diseñada para sacar a la superficie la pregunta real y luego darte un único próximo paso que puedas realmente dar.
          </p>
        </div>

        {/* Intro */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Cuándo Recurrir a Esta Tirada
          </h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            Esta es la tirada para los momentos con los que la mayoría de los consejos sobre citas no ayuda — la tercera semana de señales mezcladas, la noche tranquila tras una cita incómoda, la mañana en que te encuentras redactando el mismo mensaje por séptima vez. No está construida para adivinar. Está construida para la pequeña e importante pregunta: qué hago realmente a continuación.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Cuatro cartas bastan. Cualquier cosa más y la lectura tiende a convertirse en otro bucle. Siéntate con la situación, baraja sin prisa y saca las cartas. La tirada es amable por diseño — no te castigará por estar incierto/a. Simplemente te mostrará lo que hay debajo de la incertidumbre.
          </p>
        </div>

        {/* Layout */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            La Disposición de 4 Cartas
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Coloca las cuatro cartas en una fila sencilla. La tirada se mueve de la profundidad hacia la acción — de la pregunta real, a lo que has estado pasando por alto, a una pregunta amable con la que vivir, al próximo paso.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {[1, 2, 3, 4].map(n => (
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
            La posición 1 replantea la situación. Si llegaste a las cartas preguntándote si le gustas a alguien, la posición 1 podría revelar discretamente que la pregunta real es si te estás eligiendo a ti mismo/a dentro de la dinámica. Nota cómo cambia la forma de la pregunta. Ese cambio es el corazón de esta lectura.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: '0 0 .75rem' }}>
            La posición 2 se recibe mejor sin defensividad. La carta no expone un defecto — apunta a algo que ya has medio notado pero junto a lo que sigues pasando. Nombrarlo en voz alta a menudo afloja su agarre.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '.93rem', margin: 0 }}>
            Las posiciones 3 y 4 trabajan juntas. La pregunta de la posición 3 es algo con lo que vivir durante dos o tres días — no para responder de inmediato. La acción de la posición 4 tendrá más sentido una vez que la pregunta haya tenido tiempo de hacer su trabajo. Da el paso que la carta sugiere, aunque sea más pequeño de lo que querías. Los pasos pequeños y honestos son la forma en que las citas avanzan de verdad.
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
