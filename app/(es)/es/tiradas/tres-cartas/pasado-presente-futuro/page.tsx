import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada Pasado Presente Futuro — Guía de Lectura de 3 Cartas | TarotAxis',
  description: 'Aprende a leer una tirada de tarot pasado presente futuro. Guía completa de la clásica disposición de 3 cartas con significados de posición, ejemplos y consejos para lecturas certeras.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/tres-cartas/pasado-presente-futuro',
    languages: {
      'en': 'https://tarotaxis.com/spreads/three-card/past-present-future',
      'es': 'https://tarotaxis.com/es/tiradas/tres-cartas/pasado-presente-futuro',
      'x-default': 'https://tarotaxis.com/spreads/three-card/past-present-future',
    },
  },
  openGraph: {
    title: 'Tirada Pasado Presente Futuro — Guía Completa',
    description: 'La guía definitiva de la tirada pasado-presente-futuro — la disposición de 3 cartas más popular para entender cualquier situación.',
    url: 'https://tarotaxis.com/es/tiradas/tres-cartas/pasado-presente-futuro',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cómo se lee una tirada de tarot pasado presente futuro?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Saca tres cartas y colócalas de izquierda a derecha. La primera carta (izquierda) representa el pasado — la energía, evento o patrón que dio forma a la situación actual. La segunda (centro) muestra el presente — dónde estás ahora y la energía dominante en juego. La tercera (derecha) revela el futuro — la dirección más probable si las energías actuales continúan. Lee cada carta individualmente primero, luego busca la historia que conecta las tres.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué significa la carta del pasado en una tirada de tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La carta del pasado en una tirada de tres cartas muestra el cimiento de la situación actual — la experiencia, patrón, decisión o energía que llevó a donde estás. No necesariamente trata de algo lejano; puede representar lo que ocurrió la semana pasada si eso es lo más relevante. Entender la carta del pasado te ayuda a ver las raíces del presente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La carta del futuro en una lectura de tarot está fijada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. La posición del futuro en una tirada de tarot muestra el resultado más probable según las energías actuales — lo que es probable que ocurra si nada cambia. El tarot refleja el momento presente, no un destino inmutable. Si tomas acciones distintas, eliges de otro modo o cambias tu perspectiva, el resultado también puede cambiar. La carta del futuro es una invitación a la consciencia, no un veredicto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo usar la tirada pasado presente futuro para cualquier pregunta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí — la tirada pasado-presente-futuro es una de las disposiciones más versátiles del tarot. Funciona bien para preguntas de relaciones, situaciones de carrera, crecimiento personal y guía general. Es menos adecuada para preguntas de sí/no (usa una sola carta para ésas) y puede sentirse limitada para situaciones muy complejas con muchas personas involucradas (una Cruz Celta funciona mejor ahí).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre pasado-presente-futuro y situación-acción-resultado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ambas son tiradas de tres cartas, pero con orientaciones distintas. Pasado-presente-futuro es narrativa — cuenta la historia de cómo se desarrolló una situación y hacia dónde se dirige. Situación-acción-resultado es prescriptiva — describe lo que está ocurriendo, qué hacer y qué resulta de hacerlo. Usa pasado-presente-futuro para entender; usa situación-acción-resultado cuando necesites actuar.',
      },
    },
  ],
}

export default function PasadoPresenteFuturoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/es/tiradas" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Tiradas</Link>
          <span style={{ opacity: .4 }}>›</span>
          <Link href="/es/tiradas/tres-cartas" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Tres Cartas</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Pasado Presente Futuro</span>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>⏳</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Tirada Pasado, Presente y Futuro
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            La tirada de tres cartas más usada del tarot. Sencilla de disponer, rica de interpretar — y una de las formas más poderosas de entender cualquier situación de un vistazo.
          </p>
        </div>

        {/* Layout */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.75rem', marginBottom: '2rem', textAlign: 'center' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .6, textTransform: 'uppercase', marginBottom: '1.25rem' }}>La disposición</div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
            {[
              { num: 1, label: 'Pasado' },
              { num: 2, label: 'Presente' },
              { num: 3, label: 'Futuro' },
            ].map(({ num, label }) => (
              <div key={num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                <div style={{ width: 60, height: 95, border: '1px solid rgba(201,168,76,.4)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', background: 'rgba(201,168,76,.06)' }}>{num}</div>
                <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.08em', color: 'var(--gold)', opacity: .7 }}>{label}</span>
              </div>
            ))}
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.6, margin: 0 }}>
            Coloca las cartas de izquierda a derecha tras barajar. Lee primero la carta 1, luego la 2, luego la 3 — después da un paso atrás y encuentra el hilo que conecta las tres.
          </p>
        </div>

        {/* Position meanings */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '1.25rem' }}>
            Significado de las posiciones
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {[
              { num: 1, name: 'Pasado', desc: 'La energía, evento, patrón o decisión que dio forma a la situación actual. Esta es la raíz — lo que trajo las cosas hasta donde están ahora. Puede referirse a algo reciente o a algo más antiguo, dependiendo de lo que revele la carta. Entender esta carta te ayuda a ver por qué el presente se ve como se ve.' },
              { num: 2, name: 'Presente', desc: 'Dónde estás ahora mismo — la energía, el estado de ánimo o la circunstancia dominante activa en este momento. Este es el corazón de la lectura. Si la carta te sorprende, presta mucha atención: puede estar señalando algo que no estás reconociendo del todo sobre tu situación actual.' },
              { num: 3, name: 'Futuro', desc: 'La dirección más probable si las energías actuales continúan sin cambios. Esta no es una predicción fija — es una proyección basada en lo que está pasando ahora. Si la carta es desafiante, es una invitación a cambiar algo en el presente. Si es alentadora, afirma que vas por buen camino.' },
            ].map(({ num, name, desc }) => (
              <div key={num} style={{ display: 'flex', gap: '1rem', padding: '1.25rem 1.25rem', background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12 }}>
                <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem' }}>{num}</div>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', marginBottom: '.4rem' }}>{name}</div>
                  <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '.85rem' }}>
            Consejos de lectura
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {[
              { tip: 'Encuentra el hilo narrativo', desc: 'Las tres cartas cuentan una historia. Tras leer cada una individualmente, da un paso atrás y pregúntate: ¿qué viaje describen estas tres cartas? Las conexiones entre ellas suelen revelar la intuición más profunda.' },
              { tip: 'Fíjate en el flujo elemental', desc: '¿Te mueves de una carta de Fuego (Bastos) a una de Agua (Copas)? ¿Del conflicto a la resolución? ¿Del pensamiento al sentimiento? El cambio de palo o elemento del pasado al presente al futuro suele mostrar exactamente dónde se está moviendo la energía.' },
              { tip: 'Deja que la carta del futuro informe el presente', desc: 'Si la carta del futuro es desafiante, mira atrás a la del presente y pregúntate: ¿qué podría cambiarse aquí? El futuro no es fijo. El tarot te muestra hacia dónde te diriges — tú decides qué hacer con esa información.' },
              { tip: 'Una pregunta clara funciona mejor', desc: 'La tirada pasado-presente-futuro ofrece la lectura más clara cuando tu pregunta es específica. "¿Qué está pasando con mi situación laboral?" da mejores resultados que "¿Qué me depara el futuro?"' },
            ].map(({ tip, desc }) => (
              <div key={tip} style={{ paddingBottom: '.75rem', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.82rem', marginBottom: '.3rem', opacity: .9 }}>{tip}</div>
                <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '1.1rem' }}>Preguntas frecuentes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {faqSchema.mainEntity.map((item, i, arr) => (
              <div key={item.name} style={{ paddingBottom: i < arr.length - 1 ? '1.1rem' : 0, borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <p style={{ fontFamily: "'Cinzel',serif", fontSize: '.85rem', color: 'var(--gold)', margin: '0 0 .4rem' }}>{item.name}</p>
                <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <Link href="/es/tiradas/tres-cartas" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Más disposiciones</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Todas las variaciones de 3 cartas →</div>
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
