import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Piscis Tarot — La Luna, Elemento y Guía de Lectura | TarotAxis',
  description: 'Guía de tarot para Piscis: La Luna es tu carta regente. Descubre por qué este Arcano Mayor encarna el agua de Piscis, el palo de Copas y las tiradas ideales para un signo Mutable de Agua.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/zodiaco/piscis',
    languages: {
      'en': 'https://tarotaxis.com/zodiac/pisces',
      'es': 'https://tarotaxis.com/es/zodiaco/piscis',
      'x-default': 'https://tarotaxis.com/zodiac/pisces',
    },
  },
  openGraph: {
    title: 'Piscis Tarot — La Luna, Elemento y Guía de Lectura',
    description: 'Guía de tarot para Piscis: La Luna es tu Arcano Mayor regente.',
    url: 'https://tarotaxis.com/es/zodiaco/piscis',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'website',
  },
}

const FAQ = [
  {
    q: '¿Por qué La Luna es la carta de tarot de Piscis?',
    a: 'La Luna rige a Piscis según las correspondencias de la Golden Dawn. Ambos arquetipos comparten la misma firma jupiteriano-neptuniana de sueño, disolución y borde poroso del yo. Los dos peces de Piscis y el sendero entre dos torres en La Luna describen el mismo territorio — el lugar donde el mundo consciente encuentra el inconsciente profundo y ninguno está plenamente al mando.',
  },
  {
    q: '¿Qué tirada es la mejor para Piscis?',
    a: 'Los signos Mutables de Agua responden bien a tiradas flexibles y conscientes de lo lunar. La herradura, la semanal de siete cartas y la de luna llena acompañan el ritmo pisciano de la indagación guiada por el sentimiento. Las tiradas rígidas y muy analíticas pueden sentirse como tratar de clavar agua a la pared.',
  },
  {
    q: '¿Qué palo de tarot le corresponde a Piscis?',
    a: 'El palo de Copas le corresponde a Piscis. Los tres signos de Agua — Cáncer, Escorpio y Piscis — comparten Copas porque este palo encarna el sentimiento y la vida interior profunda. Piscis lee las Copas tan nativamente que atender deliberadamente a otros palos en tus lecturas suele valer la pena.',
  },
  {
    q: '¿Son compatibles Piscis y Virgo en el tarot?',
    a: 'Piscis y Virgo se sitúan opuestos en la rueda del zodíaco, y sus cartas de tarot (La Luna y El Ermitaño) forman un eje de sueño y discernimiento. En el trabajo de tarot esta oposición es rica — las lecturas sobre dinámicas Piscis-Virgo suelen sostener la pregunta de cómo honrar tanto la mente soñadora como la discerniente sin convertir a una en la equivocada, y cómo cada una completa lo que la otra no puede hacer.',
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

export default function PiscisEsPage() {
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
        <span style={{ color: 'var(--gold)' }}>Piscis</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--gold)', lineHeight: 1 }}>♓</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.5rem', lineHeight: 1.3 }}>
          Piscis Tarot
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto .5rem', fontSize: '.9rem' }}>
          19 febrero – 20 marzo · Agua · Mutable · Regido por Júpiter/Neptuno
        </p>
        <p style={{ color: 'var(--text)', maxWidth: 580, margin: '0 auto', fontSize: '.97rem', lineHeight: 1.7, fontStyle: 'italic', opacity: .85 }}>
          Disolución, sueños, el borde poroso del yo.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(90,120,180,.18)', border: '1px solid rgba(90,120,180,.4)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--text)' }}>Agua</span>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>Mutable</span>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>Regido por Júpiter/Neptuno</span>
        </div>
      </div>

      {/* Carta regente */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Tu carta regente del tarot
        </h2>
        <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <Link
            href="/es/cartas/la-luna"
            style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', textDecoration: 'none', color: 'inherit', flexWrap: 'wrap' }}
          >
            <div style={{ width: 100, height: 150, borderRadius: 10, border: '1px solid rgba(201,168,76,.35)', background: 'linear-gradient(135deg,rgba(201,168,76,.12),rgba(201,168,76,.04))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1.6rem', color: 'var(--gold)' }}>♓</div>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.7rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.4rem' }}>Arcanos Mayores</div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1.3rem', color: 'var(--gold)', marginBottom: '.4rem' }}>La Luna</div>
              <div style={{ fontSize: '.82rem', color: 'var(--muted)' }}>Ver el significado completo →</div>
            </div>
          </Link>
          <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              La Luna rige a Piscis porque ambos arquetipos viven en el borde poroso del yo. La Luna muestra un sendero que corre entre dos torres, con una langosta saliendo del agua al pie de la carta y una luna en lo alto vertiendo su luz complicada sobre todo. Nada en la imagen es plenamente sólido. Piscis es el signo de los dos peces que nadan en direcciones opuestas, la figura que lo siente todo y a veces no está segura de dónde termina ella y empieza otra persona. Ambos están hechos de materia onírica.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Astrológicamente, Piscis está regido tradicionalmente por Júpiter y modernamente por Neptuno, y La Luna carga esa firma neptuniana de disolución, sueño y de lo inconsciente. La carta no te pide pensar para salir de lo que muestra. Cuando aparece en una lectura de Piscis, suele señalar una situación donde la verdad se siente antes de saberse — y donde arrastrarla a la luz del día prematuramente solo la distorsionará.
            </p>
            <p style={{ marginBottom: 0 }}>
              Vale la pena nombrar la sombra del par. Piscis desequilibrado se convierte en la figura que escapa al sueño en lugar de cuidarlo; La Luna desequilibrada se convierte en la energía de la confusión confundida con profundidad. Ambas lecciones son la misma: la imaginación es una puerta, y estás destinado a atravesarla en lugar de vivir en el umbral para siempre. La expresión sana es la soñadora que regresa del sueño con algo útil que compartir.
            </p>
          </div>
        </div>
      </div>

      {/* Elemento */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          La conexión con el Agua
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            El Agua es el elemento del sentimiento, la memoria y el inconsciente. En el tarot vive en el palo de Copas — los cálices alzados al corazón, las figuras en paisajes oníricos, la profundidad con la que no se puede discutir. Para Piscis, la firma de Agua es la más difusa de las tres — Agua como océano más que como río, la sensación de que todo está conectado con todo.
          </p>
          <p style={{ marginBottom: 0 }}>
            El palo de Copas es tu palo. Cuando domina tus lecturas, suele significar que la pregunta es sobre el sentimiento, la intuición, el arte, la devoción o las formas en que tu mundo interior se filtra al exterior. Piscis lee las Copas tan nativamente que a veces vale la pena atender deliberadamente a otros palos — cargan información que tu registro por defecto puede pasar por alto.
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
          Tiradas adecuadas al temperamento Mutable de Agua de Piscis. Son sugerencias, no reglas — cada lector encuentra su propio camino.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          <Link
            href="/es/tiradas/herradura"
            style={{ display: 'block', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.95rem', color: 'var(--gold)', marginBottom: '.4rem', letterSpacing: '.03em' }}>Tirada de la Herradura</div>
            <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0, opacity: .9 }}>El Agua Mutable se acomoda a una tirada que mapea el movimiento emocional. La herradura le da a Piscis una forma clara — obstáculo, consejo, resultado — sin aplanar el sentimiento.</p>
          </Link>
          <Link
            href="/es/tiradas/semanal"
            style={{ display: 'block', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.95rem', color: 'var(--gold)', marginBottom: '.4rem', letterSpacing: '.03em' }}>Tirada Semanal</div>
            <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0, opacity: .9 }}>Los estados de ánimo piscianos se mueven con las mareas. Una tirada semanal de siete cartas te permite rastrear la corriente cambiante del sentimiento sin comprometerte con un pronóstico anual que no podría dar cuenta de cómo realmente vives.</p>
          </Link>
          <Link
            href="/es/tiradas/luna-llena"
            style={{ display: 'block', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.95rem', color: 'var(--gold)', marginBottom: '.4rem', letterSpacing: '.03em' }}>Tirada de Luna Llena</div>
            <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0, opacity: .9 }}>Ningún signo se beneficia más del trabajo lunar explícito que Piscis. La tirada de luna llena le da al difuso registro pisciano un contenedor ritual para hacer su trabajo de liberación.</p>
          </Link>
        </div>
      </div>

      {/* Temas */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Temas en tu año de tarot
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '.75rem' }}>
          <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Sueños</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>Tus lecturas regresarán a lo imaginal — sueños nocturnos reales, ensoñaciones, la visión artística que no terminas de nombrar. La Luna, La Estrella y los Siete de Copas cartografían este territorio.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Compasión</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>Un don pisciano. La Emperatriz, los Seis de Copas y El Hierofante aparecen cuando la pregunta es sobre lo que cuidas para los demás, a veces más que para ti.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Fortalezas</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>Piscis es el signo de la práctica mística. El Hierofante, El Ermitaño y La Templanza aparecen cuando la pregunta es sobre tu vida espiritual y la forma que quiere tomar.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Sombras</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>Los límites son el borde de crecimiento. Los Dos de Espadas, el Caballero de Copas y los Ocho de Copas señalan el momento en el que la apertura ha cruzado a no poder marcharse. Piscis tiene permiso para cerrar una puerta.</p>
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
            <div key={q} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{q}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14, marginBottom: '2.5rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Profundiza con Piscis</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Lee tu carta regente en detalle, prueba una lectura gratuita o explora el palo que lleva el elemento de Piscis.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/cartas/la-luna" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            La Luna
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
        <Link href="/es/zodiaco/acuario" style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem', textDecoration: 'none' }}>
          ← ♒ Acuario
        </Link>
        <Link href="/es/zodiaco/aries" style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem', textDecoration: 'none' }}>
          Aries ♈ →
        </Link>
      </div>
    </div>
  )
}
