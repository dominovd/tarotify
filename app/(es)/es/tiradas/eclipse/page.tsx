import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tarot de Eclipse — Navegar Eclipses Solares y Lunares | TarotAxis',
  description: 'Una tirada de tarot de eclipse para eclipses solares y lunares. Esquema de cinco cartas para cambios repentinos, verdades ocultas y la transformación acelerada de la temporada de eclipses — los momentos más cargados del año astrológico.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/eclipse',
    languages: {
      'en': 'https://tarotaxis.com/spreads/eclipse',
      'es': 'https://tarotaxis.com/es/tiradas/eclipse',
      'x-default': 'https://tarotaxis.com/spreads/eclipse',
    },
  },
  openGraph: {
    title: 'Tirada de Tarot de Eclipse — Navegar Eclipses Solares y Lunares',
    description: 'Una tirada de cinco cartas de eclipse para cambios repentinos, verdades ocultas y la transformación acelerada de la temporada de eclipses.',
    url: 'https://tarotaxis.com/es/tiradas/eclipse',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'Lo Que Este Eclipse Trae Adelante',
    desc: 'El tema o área de vida que el eclipse ilumina — a menudo algo que ha estado creciendo bajo la superficie durante meses. Los eclipses no inventan los problemas; los exponen. Esta carta nombra lo que se vuelve imposible de ignorar.',
  },
  {
    num: 2,
    name: 'Lo Que Está Terminando',
    desc: 'Los eclipses son puntos de finalización. Lo que ha agotado su curso natural se está cerrando — a veces abruptamente, a veces tras una larga resistencia. Esta carta identifica lo que el eclipse retira de la mesa, liberando energía que no sabías que estaba atada.',
  },
  {
    num: 3,
    name: 'Qué Verdad Está Emergiendo',
    desc: 'Los eclipses son famosos por revelar lo oculto — un secreto, un sentimiento, un patrón, una información. Esta carta describe la verdad específica que pide ser reconocida. Puede haber sido sabida en privado por algún tiempo pero solo ahora se vuelve hablable.',
  },
  {
    num: 4,
    name: 'Cómo No Reaccionar',
    desc: 'El error clásico del eclipse es tomar una decisión importante en el calor del momento. La energía del eclipse distorsiona la perspectiva durante varios días antes y después del eclipse exacto. Esta carta te advierte del movimiento reactivo específico con mayor probabilidad de salir mal.',
  },
  {
    num: 5,
    name: 'Cómo Seguir Adelante',
    desc: 'La sabiduría integradora. Una vez que el eclipse ha hecho su trabajo, ¿cuál es el camino constructivo? Esta carta sintetiza las cuatro anteriores en una única pieza de guía para las semanas que siguen al eclipse, cuando el polvo se asienta y la dirección se vuelve más clara.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una tirada de tarot de eclipse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada de tarot de eclipse es un esquema de cartas diseñado para usarse alrededor de un eclipse solar o lunar — los momentos astrológicamente más cargados del año. Los eclipses ocurren cuando el sol, la luna y la Tierra se alinean en un nodo lunar, y se asocian tradicionalmente con cambios repentinos, verdades ocultas que se vuelven visibles, finalizaciones que llegan abruptamente y la aceleración de cambios que ya estaban en marcha. Una tirada de eclipse usa estos temas como significados de posición, ayudándote a navegar la energía desorientadora que estas ventanas pueden traer.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuándo debería hacer una lectura de tarot de eclipse?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La ventana del eclipse es más amplia que el eclipse mismo. Astrológicamente, la energía del eclipse se siente aproximadamente una semana antes y una semana después del momento exacto, con el período más intenso siendo las 48 horas que lo rodean. El tiempo ideal para hacer una tirada de eclipse es dos o tres días antes, para prepararse, o dos o tres días después, para integrar. Hacer una en la ventana exacta del eclipse es posible, pero la energía es tan cargada que la interpretación puede ser más difícil.',
      },
    },
    {
      '@type': 'Question',
      name: '¿La tirada de eclipse es para eclipses solares o lunares?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ambos. Las cinco posiciones de esta tirada funcionan para cualquier tipo de eclipse, porque ambos comparten los temas centrales de revelación, finalización y cambio. La distinción está principalmente en el tono. Los eclipses solares tienden a traer cambios del mundo exterior — eventos, noticias, comienzos disfrazados de finales. Los eclipses lunares tienden a traer cambios del mundo interior — verdades emocionales emergiendo, patrones rompiéndose, lo inconsciente volviéndose consciente. Las cartas se calibran naturalmente al tipo de eclipse alrededor del cual estés leyendo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué se consideran intensos los eclipses en astrología?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Los eclipses son versiones amplificadas de las lunas nuevas (eclipses solares) y las lunas llenas (eclipses lunares). Lo que una lunación ordinaria podría tardar seis meses en desarrollar, un eclipse puede comprimirlo en una semana. Se asocian con noticias repentinas, capítulos cerrados, revelaciones sorprendentes y el tipo de cambio que no pide tu permiso. Tradicionalmente, las astrólogas advierten contra tomar decisiones importantes durante las ventanas de eclipse — no porque las decisiones sean equivocadas, sino porque la energía del eclipse distorsiona la perspectiva y el panorama suele verse muy distinto dos semanas después.',
      },
    },
  ],
}

export default function EclipsePage() {
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        <Link href="/es" style={{ color: 'var(--muted)' }}>Inicio</Link>
        <span>/</span>
        <Link href="/es/tiradas" style={{ color: 'var(--muted)' }}>Tiradas de Tarot</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Tirada de Eclipse</span>
      </nav>

      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>◐</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tarot de Eclipse
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Los eclipses son los grandes aceleradores del año astrológico — momentos en que el sol, la luna y la Tierra se alinean y el cambio se mueve más rápido de lo habitual. Usa esta tirada para navegar la energía desorientadora de la temporada de eclipses con intención en vez de reactividad.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['5 Cartas', 'Solar o Lunar', 'Temporada de Eclipses'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          La Energía de un Eclipse
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Los eclipses vienen en pares y tríos, dos o tres a la vez, dos veces al año. Un eclipse solar es una luna nueva amplificada — la luna pasa directamente entre la Tierra y el sol, bloqueándolo brevemente. Un eclipse lunar es una luna llena amplificada — la sombra de la Tierra cae sobre la luna, a menudo tiñéndola de rojo profundo. Ambos son dramáticos en el cielo y dramáticos en la vida humana.
          </p>
          <p style={{ margin: 0 }}>
            Astrológicamente, los eclipses son puntos de finalización y puntos de inflexión. Lo que una lunación normal podría tardar seis meses en madurar, un eclipse puede comprimirlo en una semana. La verdad emerge. Los capítulos se cierran. Las noticias llegan. Decisiones que parecían imposibles se vuelven de repente obvias — o decisiones imposibles se toman por ti. La sabiduría tradicional es <em>no</em> tomar decisiones importantes en la ventana exacta del eclipse, porque la perspectiva está distorsionada y el panorama suele verse muy distinto dos semanas después. Las cartas se encuentran bien con la energía del eclipse precisamente porque el tarot está estructurado para describir fuerzas en vez de predecir resultados — y durante un eclipse, las fuerzas son inusualmente claras.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          La Tirada — 5 Cartas
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Cinco cartas que mapean el arco del eclipse: qué emerge, qué termina, qué verdad pide salir, qué reacción evitar y cómo seguir adelante realmente una vez que el polvo se asienta.
        </p>

        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Esquema de Cartas
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {POSITIONS.map(pos => (
              <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                <div style={{ width: 64, height: 96, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1.05rem', color: 'var(--gold)' }}>
                  {pos.num}
                </div>
                <div style={{ fontSize: '.58rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', textAlign: 'center', maxWidth: 64 }}>{pos.name}</div>
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

      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Práctica de Lectura en Eclipse
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '.75rem' }}>
          {[
            ['◐', 'Cuida la ventana', 'Lee dos o tres días antes o después del eclipse, no en el pico exacto. La energía está menos distorsionada en los bordes de la ventana.'],
            ['✦', 'Anota el signo', 'Los eclipses siempre caen en dos signos opuestos del zodíaco a lo largo de un ciclo de 12 a 18 meses. Conocer el signo te dice el tema que se está completando.'],
            ['◇', 'Escríbelo', 'Las interpretaciones de la semana del eclipse se ven muy distintas dos semanas después. Lleva un registro para revisar la lectura con perspectiva.'],
            ['◑', 'Espera para actuar', 'Si la tirada muestra una decisión importante, deja pasar al menos una semana antes de comprometerte. Lo que se siente urgente ahora a menudo no se siente urgente entonces.'],
          ].map(([icon, title, text]) => (
            <div key={title as string} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1.1rem', color: 'var(--gold)', marginBottom: '.4rem' }}>{icon}</div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.78rem', letterSpacing: '.08em', color: 'var(--gold)', opacity: .8, marginBottom: '.4rem', textTransform: 'uppercase' }}>{title}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.6, margin: 0 }}>{text as string}</p>
            </div>
          ))}
        </div>
      </div>

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

      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Otras tiradas lunares</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Los eclipses son lunaciones amplificadas. La misma energía en dosis más pequeñas atraviesa el ciclo ordinario.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/tiradas/luna-nueva" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>Tirada de Luna Nueva</Link>
          <Link href="/es/tiradas/luna-llena" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>Tirada de Luna Llena</Link>
          <Link href="/es/tiradas/luna-oscura" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>Tirada de Luna Oscura</Link>
        </div>
      </div>
    </div>
  )
}
