import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tarot de Luna Oscura — Trabajo de Sombra y Verdad Interior | TarotAxis',
  description: 'Una tirada de tarot de luna oscura para el trabajo de sombra y la verdad interior. Esquema de tres cartas para los días antes de la luna nueva — el punto más profundo e introspectivo del ciclo lunar.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/luna-oscura',
    languages: {
      'en': 'https://tarotaxis.com/spreads/dark-moon',
      'es': 'https://tarotaxis.com/es/tiradas/luna-oscura',
      'x-default': 'https://tarotaxis.com/spreads/dark-moon',
    },
  },
  openGraph: {
    title: 'Tirada de Tarot de Luna Oscura — Trabajo de Sombra y Verdad Interior',
    description: 'Una tirada de tres cartas de luna oscura para el trabajo de sombra y la verdad interior — el punto más profundo del ciclo lunar.',
    url: 'https://tarotaxis.com/es/tiradas/luna-oscura',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'La Sombra Que He Estado Evitando',
    desc: 'El aspecto de ti mismo, la verdad o el sentimiento que has rehusado mirar directamente este ciclo. La luna oscura es el contenedor más seguro en el que encontrarlo. Esta carta nombra lo que pide ser visto — con suavidad y honestidad.',
  },
  {
    num: 2,
    name: 'Lo Que Esta Sombra Está Protegiendo',
    desc: 'Las sombras no son arbitrarias. Lo que has estado evitando está protegiendo algo — usualmente una parte más joven de ti, una estrategia de supervivencia que alguna vez funcionó o un valor para el que aún no has encontrado palabras. Esta carta revela a qué sirve realmente tu sombra.',
  },
  {
    num: 3,
    name: 'Cómo Sostenerla con Ternura',
    desc: 'La luna oscura no te pide arreglar o desterrar la sombra. Te pide sostenerla. Esta carta ofrece la forma específica de estar con lo que acabas de descubrir — el gesto, la práctica o la actitud interior que permite integración en vez de lucha.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una tirada de tarot de luna oscura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada de tarot de luna oscura es un esquema de cartas diseñado para los dos o tres días finales del ciclo lunar, cuando la luna ha menguado hasta la invisibilidad y la próxima luna nueva aún no ha comenzado. La luna oscura se asocia tradicionalmente con el trabajo de sombra, la verdad interior, el descanso profundo y el descenso al inconsciente. Una tirada de luna oscura usa estos temas como significados de posición, creando un ritual estructurado para encontrar las partes de ti mismo que el resto del ciclo mantiene fuera de vista.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre la luna oscura y la luna nueva?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los términos a veces se usan indistintamente, pero describen fases distintas. La luna oscura es la parte final del ciclo menguante — la luna es completamente invisible porque toda la cara visible está en sombra. La luna nueva es técnicamente un único momento en astrología — la conjunción exacta de luna y sol — y los días que siguen son cuando se fijan las intenciones. La luna oscura es para el descenso y el trabajo de sombra; la luna nueva es para la emergencia y las intenciones.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Es la luna oscura un mal momento para el tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — al contrario. La luna oscura es uno de los momentos más poderosos para el trabajo interior, incluyendo el tarot. Para lo que no es buena es para la planificación hacia adelante, la acción o los objetivos externos. Reserva eso para la luna creciente. Reserva la luna oscura para las preguntas que normalmente no tienes el valor de hacerte: qué estoy escondiendo, de qué tengo miedo, qué parte de mí he exiliado. Las cartas se encuentran bien con esta energía.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cómo hago trabajo de sombra con tarot de forma segura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tres principios. Primero, no hagas trabajo de sombra cuando ya estás en crisis — las cartas descubren cosas, y necesitas suelo estable para integrarlas. Segundo, trabaja con curiosidad en vez de juicio: pregunta qué protege tu sombra en vez de cómo deshacerte de ella. Tercero, date tiempo para integrar — no apiles una lectura de luna oscura encima de un día pesado. Si una lectura saca algo a la superficie que no puedes sostener sola, esa es una señal para llevarlo a una terapeuta, amiga o guía de confianza.',
      },
    },
  ],
}

export default function LunaOscuraPage() {
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        <Link href="/es" style={{ color: 'var(--muted)' }}>Inicio</Link>
        <span>/</span>
        <Link href="/es/tiradas" style={{ color: 'var(--muted)' }}>Tiradas de Tarot</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Tirada de Luna Oscura</span>
      </nav>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>●</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tarot de Luna Oscura
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          La luna oscura es el punto más bajo, profundo y privado del ciclo lunar — los días en que la luna es invisible y el mundo se queda en silencio. Usa esta tirada para el trabajo interior que el resto del ciclo te impide hacer.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['3 Cartas', 'Trabajo de Sombra', 'Verdad Interior'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          La Energía de la Luna Oscura
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            La luna oscura — a veces llamada luna balsámica — cubre aproximadamente las 72 horas finales antes de la luna nueva. Astronómicamente, la luna está cerca del sol y no es visible en el cielo nocturno en absoluto. En toda práctica lunar tradicional, este es el descenso — la fase del inframundo del ciclo. Los griegos llamaban a este aspecto de la luna Hécate, diosa de las encrucijadas y guardiana de lo oculto.
          </p>
          <p style={{ margin: 0 }}>
            No es un tiempo para la actividad, el optimismo o la planificación. Es un tiempo para la quietud, los sueños, el trabajo ancestral y las partes de ti que solo hablan cuando nadie está mirando. La luna oscura es genuinamente difícil para muchas personas — y genuinamente transformadora para quienes aprenden a honrarla. Una tirada de tarot de luna oscura no es una práctica casual. Hazla en una tarde tranquila, sola, sin agenda sobre lo que encuentres.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          La Tirada — 3 Cartas
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Tres cartas sacadas con lentitud. La luna oscura no recompensa la velocidad — pausa entre cada carta y deja que la anterior se asiente antes de sacar la siguiente.
        </p>

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

      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Una Nota Sobre Hacer Este Trabajo de Forma Segura
        </h2>
        <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            El trabajo de sombra es más efectivo cuando estás por lo demás estable. No hagas una lectura de luna oscura en medio de una crisis — las cartas descubren, y necesitas suelo para integrar lo que muestran. Trabaja con curiosidad en vez de juicio, date tiempo no estructurado después de la lectura y recuerda que el objetivo no es arreglar nada. Si algo emerge que no puedes sostener sola, llévalo a una terapeuta, una amiga de confianza o una guía que te conozca.
          </p>
        </div>
      </div>

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

      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Del descenso a la renovación</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Tras la luna oscura llega la luna nueva — lo que acabas de descubrir se vuelve el suelo del próximo ciclo.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/tiradas/luna-nueva" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>Tirada de Luna Nueva</Link>
          <Link href="/es/tiradas/luna-menguante" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>Tirada de Luna Menguante</Link>
          <Link href="/es/tiradas/eclipse" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>Tirada de Eclipse</Link>
        </div>
      </div>
    </div>
  )
}
