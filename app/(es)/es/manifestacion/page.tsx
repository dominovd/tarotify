import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tiradas de Tarot para Manifestación — Trabajo Interior para Dinero, Amor, Éxito y Más | TarotAxis',
  description: 'Cinco tiradas de tarot para la manifestación — dinero, amor, éxito, salud y energía sexual. Cada tirada revela tu bloqueo, tu apoyo y el siguiente paso concreto hacia adelante.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/manifestacion',
    languages: {
      'en': 'https://tarotaxis.com/manifestation',
      'es': 'https://tarotaxis.com/es/manifestacion',
      'x-default': 'https://tarotaxis.com/manifestation',
    },
  },
  openGraph: {
    title: 'Tiradas de Tarot para Manifestación — Trabajo Interior para un Cambio Real',
    description: 'Cinco tiradas de tarot para el trabajo interior detrás de la manifestación — dinero, amor, éxito, salud y energía sexual.',
    url: 'https://tarotaxis.com/es/manifestacion',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const SUB_SPREADS = [
  {
    href: '/es/manifestacion/dinero',
    title: 'Manifestar Dinero',
    cards: 3,
    desc: 'Tres cartas que nombran la relación interior con el dinero que da forma a lo que llega, lo que sostiene tu abundancia y el cambio concreto que puedes hacer esta semana.',
  },
  {
    href: '/es/manifestacion/amor',
    title: 'Manifestar Amor',
    cards: 3,
    desc: 'Tres cartas sobre lo que mantiene al amor a distancia, lo que ya te está abriendo y el siguiente movimiento hacia una conexión genuina.',
  },
  {
    href: '/es/manifestacion/exito',
    title: 'Manifestar Éxito',
    cards: 3,
    desc: 'Tres cartas sobre lo que se interpone en el éxito que deseas, lo que fortalece tu dirección y la acción que comprime el tiempo.',
  },
  {
    href: '/es/manifestacion/salud',
    title: 'Manifestar Salud y Bienestar',
    cards: 3,
    desc: 'Tres cartas sobre lo que te está agotando, lo que ya te está nutriendo y el pequeño cambio que se acumula con el tiempo.',
  },
  {
    href: '/es/manifestacion/energia-sexual',
    title: 'Manifestar Energía Sexual',
    cards: 3,
    desc: 'Tres cartas sobre lo que se ha silenciado en ti, lo que activa tu vitalidad y la práctica que te devuelve a tu propio deseo.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una tirada de tarot para manifestación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada de tarot para manifestación es una lectura enfocada y basada en posiciones diseñada para el trabajo interior detrás de un objetivo concreto — dinero, amor, éxito, salud o vitalidad sexual. Cada posición nombra algo útil: el patrón que se interpone en tu camino, el recurso que ya tienes y la siguiente acción específica. No son rituales de lista de deseos. Las tiradas no te van a decir que escribas tus deseos en un papel y esperes. Te dirán lo que ya sabes a medias y has estado evitando mirar directamente.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Funciona realmente la manifestación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La manifestación funciona en la medida en que es trabajo interior honesto seguido de acción concreta. La práctica disciplinada de notar lo que genuinamente te está bloqueando, reconocer los recursos que ya están en juego y dar un pequeño paso cada semana produce un cambio real a lo largo de meses. El marketing que promete dinero, amor o éxito simplemente pensando los pensamientos correctos te está vendiendo algo. Estas tiradas están diseñadas para el primer tipo de trabajo, no para el segundo. Las cartas revelan — no entregan.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Con qué frecuencia debería hacer una tirada de manifestación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada por tema al mes es suficiente. La tentación es volver a barajar cuando no te gusta lo que salió, o hacer la misma pregunta dos días después desde otro ángulo. Resiste. La lectura está pensada para vivirla durante semanas, no para consumirla y desecharla. Si sacas una carta que no entiendes, déjala en tu escritorio. El significado suele llegar dos semanas después, cuando la vida te pone en la situación que la carta señalaba.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puede el tarot garantizar que manifestaré lo que quiero?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No — y cualquier herramienta, maestro o app que prometa garantizar la manifestación te está vendiendo algo. El tarot es un espejo. Puede mostrarte los patrones, los recursos y el siguiente paso con una claridad notable. No puede hacer que des el paso y no puede doblar la realidad a tus preferencias. Lo que sí puede hacer es acortar el tiempo entre la confusión y la acción útil, que es lo que la mayoría de las personas realmente necesita. Los practicantes honestos de este trabajo dicen todos lo mismo.',
      },
    },
  ],
}

export default function ManifestacionHubPage() {
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
        <span style={{ color: 'var(--gold)' }}>Manifestación</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tiradas de Tarot para Manifestación
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Cinco tiradas de tarot para el trabajo interior detrás del cambio real. Cada esquema revela el bloqueo, el recurso que ya tienes contigo y el siguiente paso que realmente mueve algo.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['5 Tiradas', 'Trabajo Interior', '3 Cartas Cada Una'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* What is manifestation */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Qué Es Realmente la Manifestación
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            La manifestación no es pensar pensamientos positivos hasta que la realidad se reorganice por sí sola. Es el proceso disciplinado de notar lo que realmente te está bloqueando, reconocer qué recursos ya están en juego y dar pasos concretos durante semanas y meses. El trabajo no tiene glamour. La mayor parte ocurre entre lecturas, en conversaciones que has estado evitando y hábitos que finalmente ajustas. Las cartas no hacen el trabajo — te muestran, con una precisión inusual, dónde está el trabajo.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            El marketing contemporáneo de la ley de la atracción — los cursos, las apps de afirmaciones, las promesas de que las listas de gratitud llenarán tu cuenta bancaria — existe porque vende. No es lo mismo que lo que los practicantes serios del trabajo interior han querido decir con manifestación durante los últimos siglos. La versión seria asume que eres una persona adulta que ha notado que querer algo no es lo mismo que recibirlo, y te pide que mires la distancia entre las dos cosas con honestidad.
          </p>
          <p>
            Estas cinco tiradas toman cada una un área de la vida — dinero, amor, éxito, salud, energía sexual — y hacen las mismas tres preguntas con voces distintas: qué patrón está dando forma a lo que llega, qué ya te está apoyando y cuál es el siguiente movimiento concreto. Están diseñadas para vivirlas, no para consumirlas. Lee una, siéntate con ella unas semanas, y nota qué cambia cuando dejas de actuar la manifestación y empiezas a practicarla.
          </p>
        </div>
      </div>

      {/* The 5 sub-spreads */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Las Cinco Tiradas de Manifestación
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Elige el área de la vida que pide atención honesta. Cada tirada son tres cartas — lo suficientemente corta para usarse de verdad, lo suficientemente larga para decir algo cierto.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '.75rem' }}>
          {SUB_SPREADS.map(s => (
            <Link key={s.href} href={s.href} style={{ display: 'block', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.2rem', textDecoration: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '.5rem', marginBottom: '.5rem' }}>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', letterSpacing: '.03em' }}>{s.title}</div>
                <span style={{ flexShrink: 0, padding: '.15rem .55rem', borderRadius: 20, fontSize: '.62rem', background: 'rgba(201,168,76,.1)', color: 'var(--gold)', fontFamily: "'Cinzel',serif", letterSpacing: '.06em' }}>{s.cards}c</span>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '.82rem', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* How to use these spreads */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Cómo Usar Estas Tiradas
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Una tirada por semana es la dosis máxima. Una tirada por tema al mes es el promedio honesto. El trabajo de manifestación no falla porque las cartas estén equivocadas, sino porque la gente consume lecturas en lugar de practicarlas. Saca las cartas, anota lo que salió y cierra la baraja. Deja que la intuición tenga las siguientes tres semanas para actuar sobre tu vida.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Trata lo que aparece como un conjunto de preguntas para escribir en tu diario, no como mandamientos. Si la tirada dice que tu historia con el dinero está formada por una escasez heredada, la lectura te está pidiendo que mires eso — no te está dando un veredicto. Escribe sobre el patrón. Nota cuándo aparece esta semana. Pregunta a una persona de tu vida si lo reconoce en ti. El trabajo ocurre fuera de la página.
          </p>
          <p>
            Acompaña cada lectura con un solo cambio de conducta pequeño y concreto durante el mes siguiente. No cinco cambios. Uno. La manifestación que dura se construye con pequeños movimientos consistentes: el correo difícil enviado el martes, el límite mantenido el jueves, la solicitud entregada el domingo. Los gestos dramáticos suelen ser actuación. Los pequeños suelen ser el trabajo.
          </p>
        </div>
      </div>

      {/* FAQ */}
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

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Comienza con una lectura gratuita</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Saca tus tres cartas ahora y luego vuelve a la tirada que corresponde a tu pregunta para leer lo que significa cada posición.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/lectura-gratis" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Lectura Gratuita de Tarot
          </Link>
          <Link href="/es/cartas" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Todas las Cartas
          </Link>
        </div>
      </div>
    </div>
  )
}
