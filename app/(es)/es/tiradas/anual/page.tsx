import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tarot Anual — Guía de Lectura para el Año por Delante 2026 | TarotAxis',
  description: 'Haz una tirada de tarot del año por delante para 2026 — una carta por cada mes más una carta de tema general. Guía paso a paso con significados de posición, consejos y FAQ.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/anual',
    languages: {
      'en': 'https://tarotaxis.com/spreads/year-ahead',
      'es': 'https://tarotaxis.com/es/tiradas/anual',
      'x-default': 'https://tarotaxis.com/spreads/year-ahead',
    },
  },
  openGraph: {
    title: 'Tirada de Tarot Anual — Lectura del Año por Delante 2026',
    description: 'Traza tu año con el tarot. Una tirada anual de 13 cartas — una carta por cada mes más un tema general que guía el año.',
    url: 'https://tarotaxis.com/es/tiradas/anual',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const MONTHS = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre',
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una tirada de tarot del año por delante?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada de tarot del año por delante es una lectura anual que utiliza una carta para cada mes del año entrante, más una carta opcional de tema general. Te da un mapa energético amplio del año — no una predicción precisa, sino una imagen de los temas, retos y oportunidades que probablemente surgirán en cada periodo. La mayoría de lectores realiza esta tirada en diciembre o enero, aunque puede hacerse en cualquier umbral significativo: un cumpleaños, un año nuevo en otra tradición, o cualquier gran punto de inflexión vital.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuántas cartas tiene una tirada de tarot del año por delante?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La tirada clásica del año por delante usa 12 cartas — una por cada mes. Muchos lectores añaden una decimotercera carta como tema general o mensaje para el año en su conjunto. Algunas variantes utilizan dos cartas por mes (una para el trabajo interior, otra para los eventos externos) para un total de 24 o 25 cartas, pero esto encaja mejor con lectores con experiencia.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuándo se debe hacer una tirada del año por delante?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El momento más natural es alrededor del cambio de año en el calendario — finales de diciembre o principios de enero. Pero una tirada del año por delante funciona igual de bien en tu cumpleaños (un año nuevo personal), en el equinoccio de primavera, o en cualquier umbral significativo: un nuevo trabajo, una mudanza, el inicio de un nuevo capítulo. La tirada cartografía los próximos 12 meses desde el punto desde el que la lees, así que no hay un mal momento.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué cartas del tarot son buenas para una lectura anual?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En una tirada del año por delante, las cartas de los Arcanos Mayores en una posición mensual tienen un peso particular — señalan meses de cambio, decisión o crecimiento significativos. Las cartas de la corte (Reyes, Reinas, Caballeros, Sotas) a menudo indican personas que jugarán un papel ese mes. Las cartas Ases sugieren nuevos comienzos en el ámbito del palo correspondiente. No te obsesiones con cartas "buenas" o "malas" — incluso La Torre o la Muerte en una posición mensual simplemente marcan un periodo de transformación, no un desastre literal.',
      },
    },
  ],
}

export default function TiradaAnualPage() {
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
        <span style={{ color: 'var(--gold)' }}>Tirada Anual</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tarot Anual — El Año por Delante
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Una carta por cada mes del año, más un tema que guía el viaje en su conjunto. La tirada del año por delante es el ritual anual más poderoso del tarot — un mapa, no una predicción, que se traza en el umbral de un nuevo capítulo.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['13 Cartas', '2026', 'Lectura Anual', 'Año Nuevo'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Layout visual */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
          Esquema de Cartas — 13 Cartas
        </div>

        {/* Theme card */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem' }}>
            <div style={{ width: 68, height: 102, border: '1px solid rgba(201,168,76,.5)', borderRadius: 8, background: 'rgba(201,168,76,.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.8rem', color: 'var(--gold)' }}>
              ✦
            </div>
            <div style={{ fontSize: '.62rem', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '.1em', opacity: .7 }}>Tema</div>
          </div>
        </div>

        {/* Monthly cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '.5rem', maxWidth: 480, margin: '0 auto' }}>
          {MONTHS.map((month, i) => (
            <div key={month} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.3rem' }}>
              <div style={{ width: '100%', aspectRatio: '2/3', border: '1px solid rgba(201,168,76,.25)', borderRadius: 6, background: 'rgba(201,168,76,.03)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.7rem', color: 'var(--gold)' }}>
                {i + 1}
              </div>
              <div style={{ fontSize: '.52rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.06em', textAlign: 'center' }}>{month.slice(0, 3)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Position list — months in Spanish */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Las Trece Posiciones
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
          <div style={{ display: 'flex', gap: '.75rem', alignItems: 'flex-start', padding: '.7rem 1rem', background: 'rgba(201,168,76,.05)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 10 }}>
            <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: '50%', background: 'rgba(201,168,76,.15)', border: '1px solid rgba(201,168,76,.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.7rem', color: 'var(--gold)' }}>✦</span>
            <div>
              <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.85rem', color: 'var(--gold)', marginRight: '.4rem' }}>Tema general del año —</span>
              <span style={{ color: 'var(--muted)', fontSize: '.86rem', lineHeight: 1.6 }}>la energía, lección o invitación que atraviesa los doce meses como un hilo único.</span>
            </div>
          </div>
          {MONTHS.map((month, i) => (
            <div key={month} style={{ display: 'flex', gap: '.75rem', alignItems: 'flex-start', padding: '.7rem 1rem', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 10 }}>
              <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.7rem', color: 'var(--gold)' }}>{i + 1}</span>
              <div>
                <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.85rem', color: 'var(--gold)', marginRight: '.4rem', textTransform: 'capitalize' }}>{month} —</span>
                <span style={{ color: 'var(--muted)', fontSize: '.86rem', lineHeight: 1.6 }}>la energía dominante, oportunidad o reto que define este mes.</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Cómo Hacer Tu Lectura del Año por Delante
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Encuentra un momento de calma — esta lectura merece espacio. Muchos lectores encienden una vela, despejan la mesa y pasan unos minutos en quietud antes de empezar. La lectura del año por delante es un ritual significativo, y la preparación lo refleja.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Baraja a fondo mientras sostienes una sola intención: <em>"¿Qué es lo que más necesito comprender sobre el año por delante?"</em> Cuando estés lista, saca 13 cartas y colócalas boca abajo. Pon la carta 1 (la carta de tema) arriba o en el centro, luego coloca las cartas 2–13 en orden, de enero a diciembre.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Voltéalas una a una, avanzando por los meses en secuencia. Lee cada carta en su mes antes de pasar a la siguiente. Escribe notas breves para cada posición — incluso dos o tres palabras — antes de intentar interpretar la lectura entera.
          </p>
          <p>
            Una vez que todas estén boca arriba, da un paso atrás y mira la tirada completa. ¿Qué meses tienen Arcanos Mayores? ¿Dónde se agrupan las cartas desafiantes? ¿Dónde la energía es ligera y fluida? La imagen general — la forma del año — es tan importante como cualquier mes en particular.
          </p>
        </div>
      </div>

      {/* Reading tips */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Cómo Interpretar Cada Mes
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '.75rem', marginBottom: '1.5rem' }}>
          {[
            ['⚡', 'Meses con Arcanos Mayores', 'Una carta de los Arcanos Mayores en una posición mensual señala un periodo significativo — de transición, decisión o crecimiento profundo. Esos meses merecen atención extra. No son necesariamente difíciles; son importantes.'],
            ['👑', 'Cartas de la corte', 'Un Rey, una Reina, un Caballero o una Sota en un mes a menudo indica una persona — alguien que entra o juega un papel significativo ese mes. También puede representar un aspecto de ti misma que se te pedirá encarnar.'],
            ['🌱', 'Meses con Ases', 'Un As señala un comienzo genuinamente nuevo en el ámbito de su palo: Bastos (creatividad/carrera), Copas (emoción/amor), Espadas (claridad/reto), Pentáculos (material/práctico). Estos meses suelen sentirse como un punto y aparte.'],
            ['🌊', 'Cartas desafiantes', 'La Torre, el Diez de Espadas, el Cinco de Pentáculos y cartas similares indican meses de disrupción o dificultad — pero también son meses de liberación y limpieza. Mira la carta que les sigue para encontrar el camino adelante.'],
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Comienza tu lectura del año por delante</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Baraja tu mazo y saca 13 cartas. Usa nuestra guía de significados para interpretar cada posición.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/cartas" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Ver Significados de las Cartas
          </Link>
          <Link href="/es/tiradas/cruz-celta" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Tirada de la Cruz Celta
          </Link>
        </div>
      </div>
    </div>
  )
}
