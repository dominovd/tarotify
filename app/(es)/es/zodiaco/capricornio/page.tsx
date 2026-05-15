import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Capricornio Tarot — El Diablo, Elemento y Guía de Lectura | TarotAxis',
  description: 'Guía de tarot para Capricornio: El Diablo es tu carta regente. Descubre por qué este Arcano Mayor encarna la tierra de Capricornio, el palo de Pentáculos y las tiradas ideales para un signo Cardinal de Tierra.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/zodiaco/capricornio',
    languages: {
      'en': 'https://tarotaxis.com/zodiac/capricorn',
      'es': 'https://tarotaxis.com/es/zodiaco/capricornio',
      'x-default': 'https://tarotaxis.com/zodiac/capricorn',
    },
  },
  openGraph: {
    title: 'Capricornio Tarot — El Diablo, Elemento y Guía de Lectura',
    description: 'Guía de tarot para Capricornio: El Diablo es tu Arcano Mayor regente.',
    url: 'https://tarotaxis.com/es/zodiaco/capricornio',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'website',
  },
}

const FAQ = [
  {
    q: '¿Por qué El Diablo es la carta de tarot de Capricornio?',
    a: 'El Diablo rige a Capricornio según las correspondencias de la Golden Dawn. Ambos arquetipos comparten la firma de Saturno — pero en su registro de sombra, donde la disciplina se vuelve atadura y la estructura se vuelve prisión. El emparejamiento no es peyorativo; es honesto sobre la trampa concreta a la que Capricornio es propenso, y sobre la llave concreta que se le da al signo para escapar de ella.',
  },
  {
    q: '¿Qué tirada es la mejor para Capricornio?',
    a: 'Los signos Cardinales de Tierra responden bien a tiradas que producen mapas concretos y accionables. La luna nueva, la de tres cartas pasado-presente-futuro y la anual acompañan el amor capricorniano por la planificación y la ejecución. Las tiradas muy intuitivas y abiertas pueden sentirse imprecisas.',
  },
  {
    q: '¿Qué palo de tarot le corresponde a Capricornio?',
    a: 'El palo de Pentáculos le corresponde a Capricornio. Los tres signos de Tierra — Tauro, Virgo y Capricornio — comparten Pentáculos porque este palo encarna el cuerpo, el trabajo y la lenta construcción de estructura. Capricornio lee los Pentáculos con precisión particular para preguntas de legado y trabajo a largo plazo.',
  },
  {
    q: '¿Son compatibles Capricornio y Cáncer en el tarot?',
    a: 'Capricornio y Cáncer se sitúan opuestos en la rueda del zodíaco, y sus cartas de tarot (El Diablo y El Carro) forman un eje de atadura y autodominio. En el trabajo de tarot esta oposición es instructiva — las lecturas sobre dinámicas Capricornio-Cáncer suelen plantear la pregunta de qué estructuras te protegen y cuáles se han convertido en tu jaula.',
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

export default function CapricornioEsPage() {
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
        <span style={{ color: 'var(--gold)' }}>Capricornio</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--gold)', lineHeight: 1 }}>♑</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.5rem', lineHeight: 1.3 }}>
          Capricornio Tarot
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto .5rem', fontSize: '.9rem' }}>
          22 diciembre – 19 enero · Tierra · Cardinal · Regido por Saturno
        </p>
        <p style={{ color: 'var(--text)', maxWidth: 580, margin: '0 auto', fontSize: '.97rem', lineHeight: 1.7, fontStyle: 'italic', opacity: .85 }}>
          Ambición, estructura, las ataduras que confundimos con columna vertebral.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(120,140,80,.18)', border: '1px solid rgba(120,140,80,.4)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--text)' }}>Tierra</span>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>Cardinal</span>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>Regido por Saturno</span>
        </div>
      </div>

      {/* Carta regente */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Tu carta regente del tarot
        </h2>
        <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <Link
            href="/es/cartas/el-diablo"
            style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', textDecoration: 'none', color: 'inherit', flexWrap: 'wrap' }}
          >
            <div style={{ width: 100, height: 150, borderRadius: 10, border: '1px solid rgba(201,168,76,.35)', background: 'linear-gradient(135deg,rgba(201,168,76,.12),rgba(201,168,76,.04))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1.6rem', color: 'var(--gold)' }}>♑</div>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.7rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.4rem' }}>Arcanos Mayores</div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1.3rem', color: 'var(--gold)', marginBottom: '.4rem' }}>El Diablo</div>
              <div style={{ fontSize: '.82rem', color: 'var(--muted)' }}>Ver el significado completo →</div>
            </div>
          </Link>
          <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              El Diablo rige a Capricornio, y el emparejamiento sorprende a la gente cada vez. El Diablo es una de las cartas más calumniadas de la baraja — pero no es, a pesar de la imagen, una carta sobre el mal. Es una carta sobre las cosas a las que estamos atados: los contratos, los apetitos, las estructuras que hemos construido y luego olvidado que podíamos abandonar. Capricornio es el signo de la cabra de monte, el arquitecto de la ambición, la figura capaz de construir un reino y luego confundir las paredes con quién es.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Astrológicamente, Capricornio está regido por Saturno, y El Diablo carga esa firma saturnina en su forma de sombra — la disciplina endurecida en limitación, la estructura que ha dejado de servir a la vida en su interior. La carta pregunta qué confundes con columna vertebral. Cuando aparece en una lectura de Capricornio, suele señalar un lugar donde la ambición se ha convertido en servidumbre disfrazada — y donde las cadenas, al mirarlas de cerca, ni siquiera están echadas con llave.
            </p>
            <p style={{ marginBottom: 0 }}>
              Vale la pena nombrar la sombra del par, aunque aquí la sombra es justamente la cuestión. Capricornio desequilibrado se convierte en la figura que sacrifica todo a una estructura que ya no merece el sacrificio; El Diablo desequilibrado se convierte en la figura que no recuerda que tiene la llave. La expresión sana es el escalador que sabe qué cumbre vale su vida y cuál es solo una colina que alguien más le dijo que escalara.
            </p>
          </div>
        </div>
      </div>

      {/* Elemento */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          La conexión con la Tierra
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            La Tierra es el elemento del cuerpo, la estación y la materia. En el tarot vive en el palo de Pentáculos — las monedas alzadas a la luz, los jardines siendo cuidados, el artesano en el banco de trabajo. Para Capricornio, la firma de Tierra es la más arquitectónica de las tres — la Tierra construida hacia arriba en lugar de cuidada hacia afuera, la catedral en lugar del campo.
          </p>
          <p style={{ marginBottom: 0 }}>
            El palo de Pentáculos es tu palo. Cuando domina tus lecturas, suele significar que la pregunta es sobre trabajo, legado, dinero o las estructuras largas que estás construyendo con tu vida. El Rey de Pentáculos, los Diez de Pentáculos y los Cuatro de Pentáculos forman juntos tu trío esencial del legado.
          </p>
        </div>
        <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px dashed var(--border)' }}>
          <Link
            href="/es/palos-del-tarot/pentaculos"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.55rem 1.1rem', border: '1px solid rgba(201,168,76,.3)', borderRadius: 20, color: 'var(--gold)', fontSize: '.82rem', fontFamily: "'Cinzel',serif", letterSpacing: '.06em', textDecoration: 'none' }}
          >
            Explora el palo de Pentáculos →
          </Link>
        </div>
      </div>

      {/* Tiradas */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Tiradas recomendadas
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          Tiradas adecuadas al temperamento Cardinal de Tierra de Capricornio. Son sugerencias, no reglas — cada lector encuentra su propio camino.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          <Link
            href="/es/tiradas/luna-nueva"
            style={{ display: 'block', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.95rem', color: 'var(--gold)', marginBottom: '.4rem', letterSpacing: '.03em' }}>Tirada de Luna Nueva</div>
            <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0, opacity: .9 }}>Capricornio es un signo Cardinal — sorprendentemente bueno en los comienzos cuando estos vienen dignificados por estructura. La tirada de luna nueva ofrece el marco que a Capricornio le gusta en torno al acto de empezar.</p>
          </Link>
          <Link
            href="/es/tiradas/tres-cartas"
            style={{ display: 'block', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.95rem', color: 'var(--gold)', marginBottom: '.4rem', letterSpacing: '.03em' }}>Tirada de Tres Cartas</div>
            <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0, opacity: .9 }}>Capricornio es eficiente. La de tres cartas pasado-presente-futuro te lleva a una intuición accionable sin ceremonia — útil cuando realmente tienes trabajo que hacer.</p>
          </Link>
          <Link
            href="/es/tiradas/anual"
            style={{ display: 'block', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.95rem', color: 'var(--gold)', marginBottom: '.4rem', letterSpacing: '.03em' }}>Tirada Anual</div>
            <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0, opacity: .9 }}>Para el arco más largo, ningún signo se beneficia más de una tirada anual que Capricornio. La voluntad de comprometerse con un mapa de varios meses está incorporada al signo.</p>
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
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Ambición</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>Tus lecturas regresarán a aquello que estás escalando. Los Ocho de Pentáculos, el Rey de Bastos y El Carro cargan peso aquí — y también El Diablo, en su forma de pregunta.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Estructura</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>El Hierofante, los Cuatro de Pentáculos y La Justicia cargan la pregunta arquitectónica — qué has construido, qué es sólido, qué debería permitirse que se desmorone.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Fortalezas</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>Un tema capricorniano: el legado. Los Diez de Pentáculos, El Mundo y El Emperador aparecen cuando la pregunta es qué dejas atrás y si perdurará en una forma de la que estés orgulloso.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Sombras</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>El descanso es el borde de crecimiento. Los Cuatro de Espadas, El Colgado y los Siete de Pentáculos señalan el momento en el que "descansaré cuando termine" se ha convertido en la mentira que dirige tu vida. Capricornio tiene permiso para detenerse.</p>
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Profundiza con Capricornio</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Lee tu carta regente en detalle, prueba una lectura gratuita o explora el palo que lleva el elemento de Capricornio.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/cartas/el-diablo" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            El Diablo
          </Link>
          <Link href="/es/lectura-gratis" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Lectura gratuita
          </Link>
          <Link href="/es/palos-del-tarot/pentaculos" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Palo de Pentáculos
          </Link>
        </div>
      </div>

      {/* Prev / Next */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        <Link href="/es/zodiaco/sagitario" style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem', textDecoration: 'none' }}>
          ← ♐ Sagitario
        </Link>
        <Link href="/es/zodiaco/acuario" style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem', textDecoration: 'none' }}>
          Acuario ♒ →
        </Link>
      </div>
    </div>
  )
}
