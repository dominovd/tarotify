import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Escorpio Tarot — La Muerte, Elemento y Guía de Lectura | TarotAxis',
  description: 'Guía de tarot para Escorpio: La Muerte es tu carta regente. Descubre por qué este Arcano Mayor encarna el agua de Escorpio, el palo de Copas y las tiradas ideales para un signo Fijo de Agua.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/zodiaco/escorpio',
    languages: {
      'en': 'https://tarotaxis.com/zodiac/scorpio',
      'es': 'https://tarotaxis.com/es/zodiaco/escorpio',
      'x-default': 'https://tarotaxis.com/zodiac/scorpio',
    },
  },
  openGraph: {
    title: 'Escorpio Tarot — La Muerte, Elemento y Guía de Lectura',
    description: 'Guía de tarot para Escorpio: La Muerte es tu Arcano Mayor regente.',
    url: 'https://tarotaxis.com/es/zodiaco/escorpio',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'website',
  },
}

const FAQ = [
  {
    q: '¿Por qué La Muerte es la carta de tarot de Escorpio?',
    a: 'La Muerte rige a Escorpio según las correspondencias de la Golden Dawn. Ambos arquetipos comparten la misma firma de Marte y Plutón y la misma lección fundamental: la transformación requiere la voluntad de dejar que termine lo que ya ha terminado. El escorpión, el fénix y la figura de La Muerte cargan la misma energía esencial.',
  },
  {
    q: '¿Qué tirada es la mejor para Escorpio?',
    a: 'Los signos Fijos de Agua responden bien a tiradas profundas y por capas. La tirada anual, la Cruz Celta y la de luna llena le dan a Escorpio la profundidad y la paciencia que el signo realmente quiere. Las tiradas rápidas pueden sentirse insuficientes para el temperamento escorpiano.',
  },
  {
    q: '¿Qué palo de tarot le corresponde a Escorpio?',
    a: 'El palo de Copas le corresponde a Escorpio. Los tres signos de Agua — Cáncer, Escorpio y Piscis — comparten Copas porque este palo encarna el sentimiento y la vida interior profunda. Escorpio lee las Copas con una precisión particular porque el signo vive en el extremo más profundo del registro acuático.',
  },
  {
    q: '¿Son compatibles Escorpio y Tauro en el tarot?',
    a: 'Escorpio y Tauro se sitúan opuestos en la rueda del zodíaco, y sus cartas de tarot (La Muerte y El Hierofante) forman un eje clásico de transformación y permanencia. En el trabajo de tarot esta oposición es fértil — las lecturas sobre dinámicas Escorpio-Tauro suelen plantear, en la misma tirada, qué conservar y qué soltar.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function EscorpioEsPage() {
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
        <Link href="/es/zodiaco" style={{ color: 'var(--muted)' }}>Zodíaco</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Escorpio</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--gold)', lineHeight: 1 }}>♏</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.5rem', lineHeight: 1.3 }}>
          Escorpio Tarot
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto .5rem', fontSize: '.9rem' }}>
          23 octubre – 21 noviembre · Agua · Fija · Regido por Plutón/Marte
        </p>
        <p style={{ color: 'var(--text)', maxWidth: 580, margin: '0 auto', fontSize: '.97rem', lineHeight: 1.7, fontStyle: 'italic', opacity: .85 }}>
          Transformación, lo que debe terminar para que la vida continúe.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(90,120,180,.18)', border: '1px solid rgba(90,120,180,.4)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--text)' }}>Agua</span>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>Fija</span>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>Regido por Plutón/Marte</span>
        </div>
      </div>

      {/* Carta regente */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Tu carta regente del tarot
        </h2>
        <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <Link
            href="/es/cartas/la-muerte"
            style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', textDecoration: 'none', color: 'inherit', flexWrap: 'wrap' }}
          >
            <div style={{ width: 100, height: 150, borderRadius: 10, border: '1px solid rgba(201,168,76,.35)', background: 'linear-gradient(135deg,rgba(201,168,76,.12),rgba(201,168,76,.04))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1.6rem', color: 'var(--gold)' }}>♏</div>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.7rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.4rem' }}>Arcanos Mayores</div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1.3rem', color: 'var(--gold)', marginBottom: '.4rem' }}>La Muerte</div>
              <div style={{ fontSize: '.82rem', color: 'var(--muted)' }}>Ver el significado completo →</div>
            </div>
          </Link>
          <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              La Muerte rige a Escorpio porque ambos arquetipos tratan del final necesario. La Muerte en el tarot rara vez se refiere a la muerte literal — se refiere a la transformación que requiere que se le permita a algo terminar para que lo siguiente pueda comenzar. Escorpio es el signo del escorpión y del fénix, la criatura que termina y renace a la vez, el único signo zodiacal que tiene tres símbolos porque uno no basta para contener todo su rango transformador.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Astrológicamente, Escorpio está regido tradicionalmente por Marte y modernamente por Plutón, y La Muerte carga ambas firmas — la voluntad de Marte de confrontar, la capacidad de Plutón de llevar las cosas hasta la raíz y reconstruirlas. La carta no castiga; es honesta. Cuando aparece en una lectura de Escorpio, suele nombrar un capítulo que ya ha terminado en verdad aunque tú sigas fingiendo que no, y te pide oficializarlo.
            </p>
            <p style={{ marginBottom: 0 }}>
              Vale la pena nombrar la sombra del par. Escorpio desequilibrado se convierte en la figura que quema lo que podía haberse reparado; La Muerte desequilibrada se convierte en la energía de la destrucción innecesaria. Ambas lecciones son la misma: la transformación no es lo mismo que el drama. La expresión sana es la figura que sabe cuándo algo ha terminado, lo dice con claridad, y deja que el futuro tenga su espacio para llegar.
            </p>
          </div>
        </div>
      </div>

      {/* Elemento */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          La conexión con el Agua
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            El Agua es el elemento del sentimiento, la memoria y el inconsciente. En el tarot vive en el palo de Copas — los cálices alzados al corazón, las figuras en paisajes oníricos, la profundidad con la que no se puede discutir. Para Escorpio, la firma de Agua es la más profunda de las tres — el Agua en su forma más concentrada, el pozo en lugar de la ola.
          </p>
          <p style={{ marginBottom: 0 }}>
            El palo de Copas es tu palo. Cuando domina tus lecturas, suele significar que la pregunta es sobre lo que ocurre bajo la superficie — la lealtad que no has nombrado, el resentimiento que no has expresado, el amor que aún no te has permitido recibir. Escorpio lee las Copas con una precisión inusual.
          </p>
        </div>
        <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px dashed var(--border)' }}>
          <Link
            href="/es/palos-del-tarot/copas"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.55rem 1.1rem', border: '1px solid rgba(201,168,76,.3)', borderRadius: 20, color: 'var(--gold)', fontSize: '.82rem', fontFamily: "'Cinzel',serif", letterSpacing: '.06em', textDecoration: 'none' }}
          >
            Explora el palo de Copas →
          </Link>
        </div>
      </div>

      {/* Tiradas */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Tiradas recomendadas
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          Tiradas adecuadas al temperamento Fijo de Agua de Escorpio. Son sugerencias, no reglas — cada lector encuentra su propio camino.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          <Link
            href="/es/tiradas/anual"
            style={{ display: 'block', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.95rem', color: 'var(--gold)', marginBottom: '.4rem', letterSpacing: '.03em' }}>Tirada Anual</div>
            <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0, opacity: .9 }}>Los signos Fijos de Agua están dispuestos a rastrear transformaciones largas y por capas. Una tirada anual acompaña la paciencia escorpiana para procesos que se despliegan a lo largo de estaciones.</p>
          </Link>
          <Link
            href="/es/tiradas/cruz-celta"
            style={{ display: 'block', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.95rem', color: 'var(--gold)', marginBottom: '.4rem', letterSpacing: '.03em' }}>Cruz Celta</div>
            <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0, opacity: .9 }}>La Cruz Celta le ofrece a Escorpio la profundidad que anhela — múltiples posiciones, incluyendo influencias conscientes e inconscientes, son exactamente el territorio en el que el signo prospera.</p>
          </Link>
          <Link
            href="/es/tiradas/luna-llena"
            style={{ display: 'block', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.95rem', color: 'var(--gold)', marginBottom: '.4rem', letterSpacing: '.03em' }}>Tirada de Luna Llena</div>
            <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0, opacity: .9 }}>El trabajo de liberación es territorio escorpiano nativo. La tirada de luna llena le da a la transformación un ritual estructurado en lugar de una erupción caótica.</p>
          </Link>
        </div>
      </div>

      {/* Temas */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Temas en tu año de tarot
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '.75rem' }}>
          <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Transformación</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>Tus lecturas regresarán a finales, comienzos y al umbral entre ambos. La Muerte, La Torre y El Juicio forman tu trío esencial de transformación — y ninguna significa lo que parece.</p>
          </div>
          <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Fortalezas</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>Escorpio rige la intimidad en todas sus formas — sexual, emocional, financiera, ancestral. Los Enamorados, los Dos de Copas y los Diez de Pentáculos cargan peso cuando ésa es la pregunta.</p>
          </div>
          <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Poder</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>Un tema escorpiano que vale la pena rastrear honestamente. El Emperador, El Mago y El Diablo aparecen cuando la pregunta es quién tiene el poder en una situación — y si lo estás usando o escondiendo.</p>
          </div>
          <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Sombras</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>El secretismo es el borde de crecimiento. La Luna, los Siete de Espadas y La Sacerdotisa pueden señalar el momento en el que la privacidad ha cruzado a esconderse. Escorpio tiene permiso para ser conocido.</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {FAQ.map(({ q, a }) => (
            <div key={q} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{q}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14, marginBottom: '2.5rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Profundiza con Escorpio</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Lee tu carta regente en detalle, prueba una lectura gratuita o explora el palo que lleva el elemento de Escorpio.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/cartas/la-muerte" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            La Muerte
          </Link>
          <Link href="/es/lectura-gratis" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Lectura gratuita
          </Link>
          <Link href="/es/palos-del-tarot/copas" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Palo de Copas
          </Link>
        </div>
      </div>

      {/* Prev / Next */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        <Link href="/es/zodiaco/libra" style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem', textDecoration: 'none' }}>
          ← ♎ Libra
        </Link>
        <Link href="/es/zodiaco/sagitario" style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem', textDecoration: 'none' }}>
          Sagitario ♐ →
        </Link>
      </div>
    </div>
  )
}
