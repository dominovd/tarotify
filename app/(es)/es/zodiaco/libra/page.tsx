import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Libra Tarot — La Justicia, Elemento y Guía de Lectura | TarotAxis',
  description: 'Guía de tarot para Libra: La Justicia es tu carta regente. Descubre por qué este Arcano Mayor encarna el aire de Libra, el palo de Espadas y las tiradas ideales para un signo Cardinal de Aire.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/zodiaco/libra',
    languages: {
      'en': 'https://tarotaxis.com/zodiac/libra',
      'es': 'https://tarotaxis.com/es/zodiaco/libra',
      'x-default': 'https://tarotaxis.com/zodiac/libra',
    },
  },
  openGraph: {
    title: 'Libra Tarot — La Justicia, Elemento y Guía de Lectura',
    description: 'Guía de tarot para Libra: La Justicia es tu Arcano Mayor regente.',
    url: 'https://tarotaxis.com/es/zodiaco/libra',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'website',
  },
}

const FAQ = [
  {
    q: '¿Por qué La Justicia es la carta de tarot de Libra?',
    a: 'La Justicia rige a Libra según las correspondencias de la Golden Dawn. La imagen es directa: la balanza de Libra y la balanza de La Justicia son la misma balanza. Ambos arquetipos comparten la disciplina venusina de sopesar dos lados con cuidado, y ambos expresan la misma lección: la equidad es una práctica, y requiere presencia ante ambas caras de la pregunta.',
  },
  {
    q: '¿Qué tirada es la mejor para Libra?',
    a: 'Los signos Cardinales de Aire responden bien a tiradas con posiciones claramente definidas. La luna nueva, la de tres cartas (opción A, opción B, la verdad entre ambas) y la herradura le ofrecen a Libra el marco que necesita para sopesar bien. Las tiradas abiertas pueden sentirse difusas.',
  },
  {
    q: '¿Qué palo de tarot le corresponde a Libra?',
    a: 'El palo de Espadas le corresponde a Libra. Los tres signos de Aire — Géminis, Libra y Acuario — comparten Espadas porque este palo encarna la mente, el lenguaje y el discernimiento claro. Cuando las Espadas dominan tus lecturas, la pregunta suele ser sobre un acuerdo que necesita renegociarse o una verdad que necesita ser nombrada.',
  },
  {
    q: '¿Son compatibles Libra y Aries en el tarot?',
    a: 'Libra y Aries se sitúan opuestos en la rueda del zodíaco, y sus cartas de tarot (La Justicia y El Emperador) forman un eje de equilibrio y afirmación. En el trabajo de tarot esta oposición es generativa: las lecturas sobre dinámicas Libra-Aries suelen plantear cómo sostener el "yo" y el "nosotros" sin que uno colapse al otro.',
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

export default function LibraEsPage() {
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
        <span style={{ color: 'var(--gold)' }}>Libra</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--gold)', lineHeight: 1 }}>♎</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.5rem', lineHeight: 1.3 }}>
          Libra Tarot
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto .5rem', fontSize: '.9rem' }}>
          23 septiembre – 22 octubre · Aire · Cardinal · Regido por Venus
        </p>
        <p style={{ color: 'var(--text)', maxWidth: 580, margin: '0 auto', fontSize: '.97rem', lineHeight: 1.7, fontStyle: 'italic', opacity: .85 }}>
          Equilibrio, testigo justo, el sopesar de cada verdad.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(140,170,200,.18)', border: '1px solid rgba(140,170,200,.4)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--text)' }}>Aire</span>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>Cardinal</span>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>Regido por Venus</span>
        </div>
      </div>

      {/* Carta regente */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Tu carta regente del tarot
        </h2>
        <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <Link
            href="/es/cartas/la-justicia"
            style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', textDecoration: 'none', color: 'inherit', flexWrap: 'wrap' }}
          >
            <div style={{ width: 100, height: 150, borderRadius: 10, border: '1px solid rgba(201,168,76,.35)', background: 'linear-gradient(135deg,rgba(201,168,76,.12),rgba(201,168,76,.04))', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1.6rem', color: 'var(--gold)' }}>♎</div>
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.7rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.4rem' }}>Arcanos Mayores</div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1.3rem', color: 'var(--gold)', marginBottom: '.4rem' }}>La Justicia</div>
              <div style={{ fontSize: '.82rem', color: 'var(--muted)' }}>Ver el significado completo →</div>
            </div>
          </Link>
          <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
            <p style={{ marginBottom: '1rem' }}>
              La Justicia rige a Libra porque ambos arquetipos tratan del sopesar de las verdades. La Justicia se sienta entronizada con una espada en una mano y una balanza en la otra — discernimiento y equilibrio sostenidos en una ecuanimidad deliberada. Libra es el signo de la balanza misma, el único signo zodiacal representado por un objeto en lugar de una criatura. Ambos hablan el mismo idioma: nada se decide hasta que se han visto ambos lados.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Astrológicamente, Libra está regido por Venus, y La Justicia suaviza su balanza con ese sentido venusino de la equidad como una forma de amor. La carta no trata del castigo — trata del momento en el que se le permite a la verdad volverse visible. Cuando aparece en una lectura de Libra, suele señalar una situación que esperaba una contabilidad honesta, donde ser cortés ha sido el obstáculo para ser justo.
            </p>
            <p style={{ marginBottom: 0 }}>
              Vale la pena nombrar la sombra del par. Libra desequilibrado se convierte en el complaciente que asiente a todo; La Justicia desequilibrada se convierte en el juez que mide sin calidez. Ambas lecciones son la misma: el equilibrio es un acto, no un sentimiento, y exige que estés presente para ambos lados de una situación que preferirías evitar. La expresión sana es el testigo justo que sabe decir una verdad dura sin perder la ternura.
            </p>
          </div>
        </div>
      </div>

      {/* Elemento */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          La conexión con el Aire
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            El Aire es el elemento del pensamiento, el lenguaje y los espacios entre las cosas. En el tarot vive en el palo de Espadas — las hojas alzadas contra un cielo claro, las figuras negociando con su propia mente, la precisión que puede tanto liberar como herir. Para Libra, la firma de Aire es relacional — Aire orientado hacia el "nosotros" más que hacia el "yo", la mente que piensa en términos de acuerdos y contrapesos.
          </p>
          <p style={{ marginBottom: 0 }}>
            El palo de Espadas es tu palo. Cuando domina tus lecturas, suele significar que la pregunta es sobre un acuerdo, una negociación o la historia que dos personas se están contando mutuamente. Libra a veces encuentra las Espadas confrontativas; también son las cartas que más tienen que enseñarte sobre decir lo que realmente piensas.
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

      {/* Tiradas recomendadas */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Tiradas recomendadas
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          Tiradas adecuadas al temperamento Cardinal de Aire de Libra. Son sugerencias, no reglas — cada lector encuentra su propio camino.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          <Link
            href="/es/tiradas/luna-nueva"
            style={{ display: 'block', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.95rem', color: 'var(--gold)', marginBottom: '.4rem', letterSpacing: '.03em' }}>Tirada de Luna Nueva</div>
            <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0, opacity: .9 }}>Libra es un signo Cardinal — capaz de iniciar con belleza cuando la pregunta está bien formulada. La tirada de luna nueva ofrece ese marco, y el ritmo lunar acompaña la cadencia venusina.</p>
          </Link>
          <Link
            href="/es/tiradas/tres-cartas"
            style={{ display: 'block', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.95rem', color: 'var(--gold)', marginBottom: '.4rem', letterSpacing: '.03em' }}>Tirada de Tres Cartas</div>
            <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0, opacity: .9 }}>Opción A, opción B, la verdad entre ambas. Libra fue hecho para este formato — le da a la balanza algo honesto que pesar.</p>
          </Link>
          <Link
            href="/es/tiradas/herradura"
            style={{ display: 'block', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', color: 'inherit' }}
          >
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.95rem', color: 'var(--gold)', marginBottom: '.4rem', letterSpacing: '.03em' }}>Tirada de la Herradura</div>
            <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0, opacity: .9 }}>Cuando la decisión es más pesada, la herradura permite a Libra ver obstáculo, consejo y resultado a la vez — sin pretender que una sola carta pueda resolver el asunto.</p>
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
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Asociación</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>Tus lecturas regresarán una y otra vez al "nosotros" — romántico, creativo, profesional. Los Dos de Copas, Los Enamorados y los Diez de Copas cartografían un territorio que conoces íntimamente.</p>
          </div>
          <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Fortalezas</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>La Justicia misma, El Juicio y los Ocho de Espadas aparecen cuando la equidad es la pregunta — a veces preguntándote si has sido justo contigo mismo primero.</p>
          </div>
          <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Belleza</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>Libra está regido por Venus, y tus lecturas suelen ganar profundidad cuando se leen como preguntas sobre belleza y proporción. La Emperatriz, La Estrella y los Cuatro de Bastos merecen atención.</p>
          </div>
          <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1rem 1.1rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.08em', color: 'var(--gold)', marginBottom: '.5rem', textTransform: 'uppercase' }}>Sombras</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>La indecisión es el borde de crecimiento. Los Dos de Espadas, los Siete de Copas y El Colgado pueden marcar el momento en el que sopesar ha cruzado al estancamiento. Libra tiene permiso para elegir.</p>
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Profundiza con Libra</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Lee tu carta regente en detalle, prueba una lectura gratuita o explora el palo que lleva el elemento de Libra.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/cartas/la-justicia" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            La Justicia
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
        <Link href="/es/zodiaco/virgo" style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem', textDecoration: 'none' }}>
          ← ♍ Virgo
        </Link>
        <Link href="/es/zodiaco/escorpio" style={{ padding: '.65rem 1rem', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--muted)', fontSize: '.82rem', display: 'flex', alignItems: 'center', gap: '.5rem', textDecoration: 'none' }}>
          Escorpio ♏ →
        </Link>
      </div>
    </div>
  )
}
