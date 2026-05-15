import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Acuario Tarot — La Estrella, Elemento y Guía de Lectura | TarotAxis',
  description: 'Guía de tarot para Acuario: La Estrella es tu carta regente. Descubre por qué este Arcano Mayor encarna el aire de Acuario, el palo de Espadas y las tiradas ideales para un signo Fijo de Aire.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/zodiaco/acuario',
    languages: {
      'en': 'https://tarotaxis.com/zodiac/aquarius',
      'es': 'https://tarotaxis.com/es/zodiaco/acuario',
      'x-default': 'https://tarotaxis.com/zodiac/aquarius',
    },
  },
  openGraph: {
    title: 'Acuario Tarot — La Estrella, Elemento y Guía de Lectura',
    description: 'Guía de tarot para Acuario: La Estrella es tu Arcano Mayor regente.',
    url: 'https://tarotaxis.com/es/zodiaco/acuario',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'website',
  },
}

const FAQ = [
  {
    q: '¿Por qué La Estrella es la carta de tarot de Acuario?',
    a: 'La Estrella rige a Acuario según las correspondencias de la Golden Dawn. La imagen es casi demasiado directa — el aguador de Acuario y la figura de La Estrella, arrodillada y vertiendo agua para el bien colectivo, son la misma figura en dos lenguajes visuales. Ambos arquetipos comparten la misma firma saturnino-uraniana y la misma lección: la esperanza es la práctica de verter sin medir.',
  },
  {
    q: '¿Qué tirada es la mejor para Acuario?',
    a: 'Los signos Fijos de Aire responden bien a tiradas estructuralmente complejas. La anual, la Cruz Celta y la de luna llena le ofrecen a Acuario la profundidad y el rango que realmente desea. Las tiradas simples pueden sentirse subdiseñadas para el temperamento acuariano.',
  },
  {
    q: '¿Qué palo de tarot le corresponde a Acuario?',
    a: 'El palo de Espadas le corresponde a Acuario. Los tres signos de Aire — Géminis, Libra y Acuario — comparten Espadas porque este palo encarna la mente y el pensamiento claro. Acuario lee las Espadas particularmente bien para preguntas sobre ideología, historia colectiva y arquitectura de la creencia.',
  },
  {
    q: '¿Son compatibles Acuario y Leo en el tarot?',
    a: 'Acuario y Leo se sitúan opuestos en la rueda del zodíaco, y sus cartas de tarot (La Estrella y La Fuerza) forman un eje de coraje colectivo y personal. En el trabajo de tarot esta oposición es inusualmente hermosa — las lecturas sobre dinámicas Acuario-Leo suelen plantear cómo se encuentran la calidez de un corazón y la visión fría de los muchos, sin que ninguno tenga que disculparse por sí mismo.',
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

export default function AcuarioEsPage() {
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
        <span style={{ color: 'var(--gold)' }}>Acuario</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--gold)', lineHeight: 1 }}>♒</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.5rem', lineHeight: 1.3 }}>
          Acuario Tarot
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto .5rem', fontSize: '.9rem' }}>
          20 enero – 18 febrero · Aire · Fija · Regido por Saturno/Urano
        </p>
        <p style={{ color: 'var(--text)', maxWidth: 580, margin: '0 auto', fontSize: '.97rem', lineHeight: 1.7, fontStyle: 'italic', opacity: .85 }}>
          Esperanza, visión colectiva, el futuro que ya vive dentro de ti.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(140,170,200,.18)', border: '1px solid rgba(140,170,200,.4)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--text)' }}>Aire</span>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>Fija</span>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>Regido por Saturno/Urano</span>
        </div>
      </div>

      {/* Carta regente */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Tu carta regente del tarot
        </h2>
        <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <Link
            href="/es/cartas/la-estrella"
            style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', textDecoration: 'none', color: 'inherit', flexWrap: 'wrap' }}
          >
            <div style={{ width: 100, height: 150, borderRadius: 10, border: '1px solid rgba(201,168,76,.35)', background: 'linear-gradient(135deg,rgba(201,168,76,.12),rgba(201,168,76,.04))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1.6rem', color: 'var(--gold)' }}>♒</div>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.7rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.4rem' }}>Arcanos Mayores</div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1.3rem', color: 'var(--gold)', marginBottom: '.4rem' }}>La Estrella</div>
              <div style={{ fontSize: '.82rem', color: 'var(--muted)' }}>Ver el significado completo →</div>
            </div>
          </Link>
          <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              La Estrella rige a Acuario porque ambos arquetipos tratan de la esperanza y del futuro que ya vive dentro de ti. La Estrella muestra a una figura arrodillada al borde de un estanque, vertiendo agua sobre la tierra y sobre el agua — un acto silencioso de reabastecimiento bajo un cielo lleno de estrellas. Acuario es el signo del aguador, la figura que lleva una urna de agua para compartir con la colectividad. Ambos están vertiendo algo sin llevar la cuenta. Ambos creen que vale la pena alimentar el futuro.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Astrológicamente, Acuario está regido tradicionalmente por Saturno y modernamente por Urano, y La Estrella carga ambas firmas — la vista larga de Saturno, la súbita visión uraniana de lo que podría ser. La carta es una de las más amables de la baraja, pero no es ingenua; sigue a La Torre por una razón. Cuando aparece en una lectura de Acuario, suele señalar el momento tranquilo, posterior al colapso, en el que la esperanza regresa no como un sentimiento sino como una práctica.
            </p>
            <p style={{ marginBottom: 0 }}>
              Vale la pena nombrar la sombra del par. Acuario desequilibrado se convierte en la figura que ama a la humanidad en abstracto mientras descuida a los humanos concretos cercanos; La Estrella desequilibrada se convierte en la energía de la visión desligada del trabajo de hacerla aterrizar. Ambas lecciones son la misma: la urna tiene que verterse sobre tierra concreta. La expresión sana es la figura que puede ver lo bastante lejos como para saber qué plantar — y lo planta.
            </p>
          </div>
        </div>
      </div>

      {/* Elemento */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          La conexión con el Aire
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            El Aire es el elemento del pensamiento, el lenguaje y los espacios entre las cosas. En el tarot vive en el palo de Espadas — las hojas alzadas contra un cielo claro, las figuras negociando con su propia mente, la precisión que puede liberar o herir. Para Acuario, la firma de Aire es la más orientada al futuro de las tres — Aire vuelto hacia lo colectivo y lo aún-no, la mente que piensa en términos de lo que podría ser verdad si suficientes personas lo decidieran.
          </p>
          <p style={{ marginBottom: 0 }}>
            El palo de Espadas es tu palo. Cuando domina tus lecturas, suele significar que la pregunta es sobre ideas, ideología o la historia que cuentas sobre cómo deberían ser las cosas. A veces Acuario lee las Espadas como más frías de lo que son — también son el palo de la claridad, que es uno de tus grandes dones.
          </p>
        </div>
        <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px dashed var(--border)' }}>
          <Link
            href="/es/palos-del-tarot/espadas"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', padding: '.55rem 1.1rem', border: '1px solid rgba(201,168,76,.3)', borderRadius: 20, color: 'var(--gold)', fontSize: '.82rem', fontFamily: "'Cinzel',serif", letterSpacing: '.06em', textDecoration: 'none' }}
          >
            Explora el palo de Espadas →
          </Link>
        </div>
      </div>

      {/* Tiradas */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Tiradas recomendadas
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          Tiradas adecuadas al temperamento Fijo de Aire de Acuario. Son sugerencias, no reglas — cada lector encuentra su propio camino.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          <Link
            href="/es/tiradas/anual"
            style={{ display: 'block', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.95rem', color: 'var(--gold)', marginBottom: '.4rem', letterSpacing: '.03em' }}>Tirada Anual</div>
            <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0, opacity: .9 }}>Los signos Fijos de Aire están dispuestos a rastrear ideas a lo largo de arcos extensos. Una tirada anual acompaña la tendencia acuariana de plantar semillas intelectuales y éticas que tardan estaciones en florecer.</p>
          </Link>
          <Link
            href="/es/tiradas/cruz-celta"
            style={{ display: 'block', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.95rem', color: 'var(--gold)', marginBottom: '.4rem', letterSpacing: '.03em' }}>Cruz Celta</div>
            <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0, opacity: .9 }}>La Cruz Celta es densa y estructural — lo que acomoda a la mente acuariana que disfruta leyendo patrones a través de muchas posiciones simultáneamente.</p>
          </Link>
          <Link
            href="/es/tiradas/luna-llena"
            style={{ display: 'block', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.95rem', color: 'var(--gold)', marginBottom: '.4rem', letterSpacing: '.03em' }}>Tirada de Luna Llena</div>
            <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0, opacity: .9 }}>Acuario es opuesto a Leo en la rueda, y las lunas llenas en Leo son particularmente potentes para colocaciones acuarianas. La tirada de luna llena le da a esa energía un recipiente.</p>
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
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>Tus lecturas regresarán a lo que puedes ver que otros aún no han visto. La Estrella, El Ermitaño y los Tres de Bastos cartografían este territorio.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Comunidad</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>Acuario es el más comunal de los signos de aire. Los Tres de Copas, los Seis de Copas y los Diez de Pentáculos aparecen cuando la pregunta es sobre tu gente — quiénes son, a quiénes estás eligiendo.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Fortalezas</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>La innovación es un don acuariano. El Mago, El Loco y los Ocho de Pentáculos aparecen cuando la pregunta es sobre lo que estás inventando — y si lo inventas por sí mismo o para el beneficio de alguien.</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Sombras</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>El desapego es el borde de crecimiento. Los Cuatro de Copas, El Ermitaño (en su exceso) y el Rey de Espadas señalan el momento en el que la distancia se ha convertido en una forma de evitar la calidez que Acuario secretamente necesita.</p>
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Profundiza con Acuario</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Lee tu carta regente en detalle, prueba una lectura gratuita o explora el palo que lleva el elemento de Acuario.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/cartas/la-estrella" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            La Estrella
          </Link>
          <Link href="/es/lectura-gratis" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Lectura gratuita
          </Link>
          <Link href="/es/palos-del-tarot/espadas" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Palo de Espadas
          </Link>
        </div>
      </div>

      {/* Prev / Next */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
        <Link href="/es/zodiaco/capricornio" style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem', textDecoration: 'none' }}>
          ← ♑ Capricornio
        </Link>
        <Link href="/es/zodiaco/piscis" style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem', textDecoration: 'none' }}>
          Piscis ♓ →
        </Link>
      </div>
    </div>
  )
}
