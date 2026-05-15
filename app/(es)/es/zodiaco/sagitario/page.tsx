import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sagitario Tarot — La Templanza, Elemento y Guía de Lectura | TarotAxis',
  description: 'Guía de tarot para Sagitario: La Templanza es tu carta regente. Descubre por qué este Arcano Mayor encarna el fuego de Sagitario, el palo de Bastos y las tiradas ideales para un signo Mutable de Fuego.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/zodiaco/sagitario',
    languages: {
      'en': 'https://tarotaxis.com/zodiac/sagittarius',
      'es': 'https://tarotaxis.com/es/zodiaco/sagitario',
      'x-default': 'https://tarotaxis.com/zodiac/sagittarius',
    },
  },
  openGraph: {
    title: 'Sagitario Tarot — La Templanza, Elemento y Guía de Lectura',
    description: 'Guía de tarot para Sagitario: La Templanza es tu Arcano Mayor regente.',
    url: 'https://tarotaxis.com/es/zodiaco/sagitario',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'website',
  },
}

const FAQ = [
  {
    q: '¿Por qué La Templanza es la carta de tarot de Sagitario?',
    a: 'La Templanza rige a Sagitario según las correspondencias de la Golden Dawn. Ambos arquetipos comparten la firma de Júpiter de expansión sostenida en mesura, y ambos expresan la misma lección: la visión es real, pero la paciencia para mezclar opuestos a lo largo del tiempo es lo que permite que la visión aterrice. Muchas barajas muestran a La Templanza con un pie en tierra y otro en el agua — ya una imagen del rango sagitariano.',
  },
  {
    q: '¿Qué tirada es la mejor para Sagitario?',
    a: 'Los signos Mutables de Fuego responden bien a tiradas en forma de arco. La herradura, la tirada semanal de siete cartas y la anual acompañan el amor sagitariano por la trayectoria, el viaje y la vista larga. Las tiradas estáticas sin movimiento hacia adelante pueden sentirse constrictivas.',
  },
  {
    q: '¿Qué palo de tarot le corresponde a Sagitario?',
    a: 'El palo de Bastos le corresponde a Sagitario. Los tres signos de Fuego — Aries, Leo y Sagitario — comparten Bastos porque este palo encarna la voluntad, la vitalidad y el movimiento hacia afuera. Sagitario lee los Bastos particularmente bien para preguntas sobre dirección y horizonte.',
  },
  {
    q: '¿Son compatibles Sagitario y Géminis en el tarot?',
    a: 'Sagitario y Géminis se sitúan opuestos en la rueda del zodíaco, y sus cartas de tarot (La Templanza y Los Enamorados) forman un eje de síntesis y elección. En el trabajo de tarot esta oposición es generativa — las lecturas sobre dinámicas Sagitario-Géminis suelen plantear cómo elegir entre dos caminos y cómo mezclarlos una vez elegidos.',
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

export default function SagitarioEsPage() {
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
        <span style={{ color: 'var(--gold)' }}>Sagitario</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--gold)', lineHeight: 1 }}>♐</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.5rem', lineHeight: 1.3 }}>
          Sagitario Tarot
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto .5rem', fontSize: '.9rem' }}>
          22 noviembre – 21 diciembre · Fuego · Mutable · Regido por Júpiter
        </p>
        <p style={{ color: 'var(--text)', maxWidth: 580, margin: '0 auto', fontSize: '.97rem', lineHeight: 1.7, fontStyle: 'italic', opacity: .85 }}>
          Visión, el arco largo, mezclar opuestos con paciencia.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(201,90,60,.18)', border: '1px solid rgba(201,90,60,.4)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--text)' }}>Fuego</span>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>Mutable</span>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>Regido por Júpiter</span>
        </div>
      </div>

      {/* Carta regente */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Tu carta regente del tarot
        </h2>
        <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <Link
            href="/es/cartas/la-templanza"
            style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', textDecoration: 'none', color: 'inherit', flexWrap: 'wrap' }}
          >
            <div style={{ width: 100, height: 150, borderRadius: 10, border: '1px solid rgba(201,168,76,.35)', background: 'linear-gradient(135deg,rgba(201,168,76,.12),rgba(201,168,76,.04))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1.6rem', color: 'var(--gold)' }}>♐</div>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.7rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.4rem' }}>Arcanos Mayores</div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1.3rem', color: 'var(--gold)', marginBottom: '.4rem' }}>La Templanza</div>
              <div style={{ fontSize: '.82rem', color: 'var(--muted)' }}>Ver el significado completo →</div>
            </div>
          </Link>
          <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              La Templanza rige a Sagitario porque ambos arquetipos tratan del arco largo y de la mezcla paciente de opuestos. La Templanza muestra a un ángel vertiendo líquido entre dos cálices en un chorro firme que no debería funcionar pero funciona — un pequeño milagro de integración. Sagitario es el signo del arquero, la figura que tensa el arco y apunta a un horizonte lo bastante distante como para que la flecha tenga tiempo de ser vista en vuelo. Ambos confían en que el viaje haga su trabajo.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Astrológicamente, Sagitario está regido por Júpiter, y La Templanza carga esa firma jupiteriana de expansividad sostenida en mesura. La carta no trata de la restricción en el sentido seco — trata del tipo de mezcla que produce una tercera cosa que ninguno de los dos elementos originales podría haber hecho solo. Cuando aparece en una lectura de Sagitario, suele señalar una síntesis que por fin está disponible porque has vivido lo suficiente con los ingredientes.
            </p>
            <p style={{ marginBottom: 0 }}>
              Vale la pena nombrar la sombra del par. Sagitario desequilibrado se convierte en la figura que lanza flechas sin apuntar; La Templanza desequilibrada se convierte en la energía de la mezcla interminable sin verter nunca el resultado. Ambas lecciones son la misma: la visión está destinada a aterrizar en algún lugar. La expresión sana es el arquero que tiene la paciencia de esperar el tiro correcto y el coraje de lanzarlo cuando aparece.
            </p>
          </div>
        </div>
      </div>

      {/* Elemento */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          La conexión con el Fuego
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            El Fuego es el elemento de la voluntad, la vitalidad y el salto antes de la mirada. En el tarot vive en el palo de Bastos — los báculos que brotan hojas frescas, las figuras que avanzan hacia horizontes, el calor en el pecho que dice "ve". Para Sagitario, la firma de Fuego es la más visionaria de las tres — el Fuego extendido hacia la distancia, la chispa lanzada como flecha en lugar de encendida como cerilla.
          </p>
          <p style={{ marginBottom: 0 }}>
            El palo de Bastos es tu palo. Cuando domina tus lecturas, suele significar que la pregunta es sobre dirección, aventura o el próximo horizonte al que vale la pena apuntar. Los Ocho de Bastos, los Tres de Bastos y el Caballero de Bastos forman un trío particularmente sagitariano que conviene conocer bien.
          </p>
        </div>
        <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px dashed var(--border)' }}>
          <Link
            href="/es/palos-del-tarot/bastos"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.55rem 1.1rem', border: '1px solid rgba(201,168,76,.3)', borderRadius: 20, color: 'var(--gold)', fontSize: '.82rem', fontFamily: "'Cinzel',serif", letterSpacing: '.06em', textDecoration: 'none' }}
          >
            Explora el palo de Bastos →
          </Link>
        </div>
      </div>

      {/* Tiradas */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Tiradas recomendadas
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          Tiradas adecuadas al temperamento Mutable de Fuego de Sagitario. Son sugerencias, no reglas — cada lector encuentra su propio camino.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          <Link
            href="/es/tiradas/herradura"
            style={{ display: 'block', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.95rem', color: 'var(--gold)', marginBottom: '.4rem', letterSpacing: '.03em' }}>Tirada de la Herradura</div>
            <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0, opacity: .9 }}>El Fuego Mutable se acomoda a una tirada que mapea un viaje. La herradura ofrece obstáculo, consejo y resultado en un arco claro — que es exactamente cómo ya piensa una mente sagitariana.</p>
          </Link>
          <Link
            href="/es/tiradas/semanal"
            style={{ display: 'block', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.95rem', color: 'var(--gold)', marginBottom: '.4rem', letterSpacing: '.03em' }}>Tirada Semanal</div>
            <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0, opacity: .9 }}>Los ritmos sagitarianos cambian rápido. Una tirada semanal de siete cartas te mantiene honesto con la trayectoria del momento sin obligarte a comprometerte con un mapa anual al que sobrepasarás.</p>
          </Link>
          <Link
            href="/es/tiradas/anual"
            style={{ display: 'block', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.95rem', color: 'var(--gold)', marginBottom: '.4rem', letterSpacing: '.03em' }}>Tirada Anual</div>
            <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0, opacity: .9 }}>Cuando la pregunta es genuinamente grande — una mudanza, un curso de estudios, un proyecto plurianual — la tirada anual le da a la visión sagitariana el lienzo que realmente necesita.</p>
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
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Visión</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>Tus lecturas regresarán a aquello hacia lo que apuntas. Los Tres de Bastos, La Estrella y El Mundo cartografían el territorio del pensamiento de horizonte.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Aventura</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>El Loco, los Ocho de Bastos y los Seis de Espadas cargan la pregunta de la partida — cuándo irse, qué dejar atrás, qué llevarse.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Fortalezas</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>El sentido del significado es un don sagitariano. El Hierofante, La Templanza y El Ermitaño aparecen cuando la pregunta es sobre propósito, filosofía o el marco dentro del que intentas construir una vida.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Sombras</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>El seguimiento es el borde de crecimiento. Los Siete de Pentáculos, los Cuatro de Pentáculos y los Ocho de Pentáculos señalan el momento en el que comenzar se ha convertido en sustituto de terminar.</p>
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Profundiza con Sagitario</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Lee tu carta regente en detalle, prueba una lectura gratuita o explora el palo que lleva el elemento de Sagitario.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/cartas/la-templanza" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            La Templanza
          </Link>
          <Link href="/es/lectura-gratis" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Lectura gratuita
          </Link>
          <Link href="/es/palos-del-tarot/bastos" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Palo de Bastos
          </Link>
        </div>
      </div>

      {/* Prev / Next */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        <Link href="/es/zodiaco/escorpio" style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem', textDecoration: 'none' }}>
          ← ♏ Escorpio
        </Link>
        <Link href="/es/zodiaco/capricornio" style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem', textDecoration: 'none' }}>
          Capricornio ♑ →
        </Link>
      </div>
    </div>
  )
}
