import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tiradas de Tarot — Disposiciones para cada Lectura | TarotAxis',
  description: 'Descubre las mejores tiradas de tarot — desde la clásica Cruz Celta hasta sencillas disposiciones de tres cartas. Aprende a usar cada tirada para amor, carrera y crecimiento personal.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas',
    languages: {
      'en': 'https://tarotaxis.com/spreads',
      'es': 'https://tarotaxis.com/es/tiradas',
      'x-default': 'https://tarotaxis.com/spreads',
    },
  },
  openGraph: {
    title: 'Tiradas de Tarot — Disposiciones para cada Lectura',
    description: 'Descubre las mejores tiradas de tarot — desde la clásica Cruz Celta hasta sencillas disposiciones de tres cartas.',
    url: 'https://tarotaxis.com/es/tiradas',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const SPREADS = [
  {
    slug: 'tres-cartas',
    name: 'Tirada de Tres Cartas',
    cards: 3,
    level: 'Principiante',
    desc: 'La tirada más versátil del tarot. Pasado · Presente · Futuro — o cualquiera de otras cinco variaciones. La práctica diaria perfecta y el punto de partida ideal para cada lector.',
    tags: ['Uso diario', 'Principiantes', 'Guía rápida'],
  },
  {
    slug: 'cruz-celta',
    name: 'Cruz Celta',
    cards: 10,
    level: 'Intermedio',
    desc: 'La tirada de tarot más completa del mundo. Diez cartas revelan el panorama completo de cualquier situación — pasado, presente, futuro, influencias ocultas y resultado.',
    tags: ['Lecturas profundas', 'Cualquier pregunta', 'Situaciones complejas'],
  },
  {
    slug: 'amor',
    name: 'Tirada de Amor',
    cards: 5,
    level: 'Principiante',
    desc: 'Cuatro disposiciones dedicadas al amor y las relaciones — desde un chequeo de una conexión nueva hasta una lectura de quedarse-o-irse. Guía honesta para el corazón.',
    tags: ['Relaciones', 'Solteros', 'Romance'],
  },
  {
    slug: 'anual',
    name: 'Tirada Anual',
    cards: 13,
    level: 'Intermedio',
    desc: 'Una carta por mes más un tema general — un mapa energético completo del año por venir. El ritual anual más poderoso del tarot.',
    tags: ['2026', 'Lectura anual', 'Año nuevo'],
  },
  {
    slug: 'luna-llena',
    name: 'Tirada de Luna Llena',
    cards: 6,
    level: 'Principiante',
    desc: 'Libera lo que ya no te sirve y celebra lo que ha llegado a fruición. Una tirada ritual para el pico del ciclo lunar.',
    tags: ['Ritual lunar', 'Liberación', 'Gratitud'],
  },
  {
    slug: 'herradura',
    name: 'Tirada de la Herradura',
    cards: 7,
    level: 'Intermedio',
    desc: 'Un arco clásico de 7 cartas que cubre pasado, presente, influencias ocultas, obstáculos, fuerzas externas, consejo y resultado.',
    tags: ['Disposición clásica', 'Cualquier pregunta', 'Detallada'],
  },
  {
    slug: 'alma-gemela',
    name: 'Tirada de Alma Gemela',
    cards: 5,
    level: 'Principiante',
    desc: '¿Son ellos los indicados? Cinco cartas revelan tu energía, lo que realmente buscas, lo que necesitas, el camino a seguir y la naturaleza de tu conexión.',
    tags: ['Amor y Relaciones', 'Alma gemela', 'Solteros'],
  },
  {
    slug: 'carrera',
    name: 'Tirada de Carrera',
    cards: 5,
    level: 'Principiante',
    desc: 'Tres disposiciones enfocadas en el trabajo, el propósito y las decisiones — desde una lectura de dirección profesional de 5 cartas hasta una tirada de propósito y vocación de 3 cartas.',
    tags: ['Carrera', 'Propósito', 'Trabajo y Dinero'],
  },
  {
    slug: 'semanal',
    name: 'Tirada Semanal',
    cards: 7,
    level: 'Principiante',
    desc: 'Una carta para cada día de la semana — un pronóstico energético completo para fijar intenciones el domingo y navegar cada día con claridad.',
    tags: ['Ritual semanal', 'Guía diaria', 'Planificación'],
  },
  {
    slug: 'luna-nueva',
    name: 'Tirada de Luna Nueva',
    cards: 5,
    level: 'Principiante',
    desc: 'Una disposición ritual para el inicio del ciclo lunar — qué plantar, qué nutrir, qué soltar y la semilla de intención para el mes por venir.',
    tags: ['Ritual lunar', 'Intenciones', 'Nuevos comienzos'],
  },
  {
    slug: 'luna-menguante',
    name: 'Tirada de Luna Menguante',
    cards: 4,
    level: 'Principiante',
    desc: 'Para la fase descendente del ciclo lunar — reflexión, integración y crear espacio antes de que llegue la próxima luna nueva.',
    tags: ['Ritual lunar', 'Reflexión', 'Integración'],
  },
  {
    slug: 'luna-oscura',
    name: 'Tirada de Luna Oscura',
    cards: 3,
    level: 'Intermedio',
    desc: 'Una tirada de tres cartas para el punto más profundo y privado del ciclo lunar — trabajo de sombra, verdad oculta y las partes de ti que sólo hablan en la quietud.',
    tags: ['Trabajo de sombra', 'Verdad interior', 'Ritual lunar'],
  },
  {
    slug: 'eclipse',
    name: 'Tirada de Eclipse',
    cards: 5,
    level: 'Intermedio',
    desc: 'Para eclipses solares y lunares — los momentos más cargados del año astrológico. Cinco cartas para navegar cambios repentinos, verdades que afloran y transformación acelerada.',
    tags: ['Temporada de eclipses', 'Cambios repentinos', 'Astrología'],
  },
]

const HUBS = [
  {
    href: '/es/tiradas/arcanos-mayores',
    name: 'Tiradas de Arcanos Mayores',
    desc: 'Cinco tiradas que usan sólo los 22 Arcanos Mayores — Cruz Celta, Anual, Decisión, Trabajo de Sombra y Elemental. Para momentos cruciales en los que quieres el plano arquetípico en primer plano.',
    tag: '22 cartas',
  },
  {
    href: '/es/tiradas/pareja',
    name: 'Tiradas de Pareja y Relaciones',
    desc: 'Seis tiradas dedicadas a la conexión — citas, profundización, preguntas de alma gemela, compatibilidad, atracción amorosa y guía para citas. Aterrizadas, amables y honestas.',
    tag: 'Amor y conexión',
  },
]

const FAQS = [
  {
    q: '¿Cuál es la mejor tirada de tarot para principiantes?',
    a: 'La mejor tirada para principiantes suele ser una carta diaria o una tirada de tres cartas. Mantienen la lectura enfocada, facilitan ver la relación entre las cartas y ayudan a ganar confianza antes de pasar a disposiciones más amplias como la Cruz Celta.',
  },
  {
    q: '¿Cómo elijo la tirada de tarot adecuada?',
    a: 'Elige la tirada según tu pregunta. Usa una carta o tres cartas para guía rápida, una tirada de amor o pareja para relaciones, una tirada de carrera para decisiones laborales y la Cruz Celta cuando necesites una visión más profunda.',
  },
  {
    q: '¿Puedo usar la misma tirada para amor, carrera y crecimiento personal?',
    a: 'Sí. Tiradas generales como tres cartas, herradura y Cruz Celta pueden funcionar para casi cualquier tema. Las tiradas dedicadas al amor, la carrera o la sanación son mejores cuando quieres que cada posición hable directamente de esa área.',
  },
  {
    q: '¿Conviene hacer preguntas de sí o no con una tirada?',
    a: 'Puedes hacerlo, pero las preguntas de sí o no suelen funcionar mejor con una lectura enfocada de una carta. Las tiradas de varias cartas son más útiles para preguntas abiertas porque muestran contexto, consejo, bloqueos y posibles resultados.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

export default function TiradasPage() {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontFamily:"'Cinzel',serif", fontSize:'clamp(1.5rem,4vw,2.1rem)', color:'var(--gold)', marginBottom:'.75rem' }}>
          Tiradas de Tarot
        </h1>
        <p style={{ color:'var(--muted)', maxWidth:500, margin:'0 auto', lineHeight:1.8 }}>
          Una tirada de tarot es el mapa para tu lectura — el número de cartas que se sacan y el significado de cada posición. Elige la tirada que se ajuste a tu pregunta.
        </p>
      </div>

      {/* Browse by card count CTA */}
      <Link href="/es/tiradas/por-numero-de-cartas" style={{ display:'block', background:'linear-gradient(135deg,rgba(201,168,76,.08),rgba(201,168,76,.02))', border:'1px solid rgba(201,168,76,.35)', borderRadius:14, padding:'1.25rem 1.5rem', marginBottom:'2rem', textDecoration:'none' }}>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:'1rem', flexWrap:'wrap' }}>
          <div>
            <div style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'.95rem', letterSpacing:'.04em', marginBottom:'.3rem' }}>
              Explorar por número de cartas →
            </div>
            <p style={{ color:'var(--muted)', fontSize:'.83rem', lineHeight:1.6, margin:0 }}>
              Todas las tiradas agrupadas por número de cartas — desde tiradas diarias de 1 carta hasta la Cruz Celta de 10 cartas.
            </p>
          </div>
          <div style={{ display:'flex', gap:'.3rem', flexWrap:'wrap' }}>
            {[1, 3, 5, 7, 10].map(n => (
              <span key={n} style={{ width:28, height:28, borderRadius:'50%', background:'rgba(201,168,76,.08)', border:'1px solid rgba(201,168,76,.25)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'Cinzel',serif", fontSize:'.72rem', color:'var(--gold)' }}>{n}</span>
            ))}
          </div>
        </div>
      </Link>

      {/* Themed hubs */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'.95rem', letterSpacing:'.1em', textTransform:'uppercase', marginBottom:'1rem' }}>
          Colecciones temáticas
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'1rem' }}>
          {HUBS.map(h => (
            <Link key={h.name} href={h.href} style={{ display:'block', background:'linear-gradient(135deg,rgba(201,168,76,.08),rgba(201,168,76,.02))', border:'1px solid rgba(201,168,76,.35)', borderRadius:14, padding:'1.25rem 1.4rem', textDecoration:'none' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', gap:'.75rem', marginBottom:'.5rem' }}>
                <span style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'.95rem', letterSpacing:'.04em' }}>{h.name} →</span>
                <span style={{ padding:'.18rem .55rem', borderRadius:20, fontSize:'.62rem', background:'rgba(201,168,76,.12)', color:'var(--gold)', fontFamily:"'Cinzel',serif", letterSpacing:'.06em' }}>{h.tag}</span>
              </div>
              <p style={{ color:'var(--muted)', fontSize:'.85rem', lineHeight:1.65, margin:0 }}>{h.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      <div style={{ display:'flex', flexDirection:'column', gap:'1rem', marginBottom:'3rem' }}>
        {SPREADS.map(s => (
          <Link key={s.slug} href={`/es/tiradas/${s.slug}`} style={{ display:'block', background:'var(--on-bg-03)', border:'1px solid rgba(201,168,76,.3)', borderRadius:14, padding:'1.5rem', transition:'border-color .2s' }}>
            <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', gap:'1rem', flexWrap:'wrap', marginBottom:'.6rem' }}>
              <div style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'1.05rem', letterSpacing:'.04em' }}>{s.name}</div>
              <div style={{ display:'flex', gap:'.5rem' }}>
                <span style={{ padding:'.2rem .6rem', borderRadius:20, fontSize:'.65rem', background:'rgba(201,168,76,.1)', color:'var(--gold)', fontFamily:"'Cinzel',serif", letterSpacing:'.06em' }}>{s.cards} cartas</span>
                <span style={{ padding:'.2rem .6rem', borderRadius:20, fontSize:'.65rem', background:'var(--on-bg-04)', color:'var(--muted)', fontFamily:"'Cinzel',serif", letterSpacing:'.06em' }}>{s.level}</span>
              </div>
            </div>
            <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.7, marginBottom:'.75rem' }}>{s.desc}</p>
            <div style={{ display:'flex', gap:'.4rem', flexWrap:'wrap' }}>
              {s.tags.map(t => (
                <span key={t} style={{ padding:'.15rem .5rem', background:'var(--on-bg-03)', border:'1px solid var(--border)', borderRadius:20, fontSize:'.65rem', color:'var(--muted)' }}>{t}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      <section style={{ borderTop:'1px solid var(--border)', paddingTop:'2rem' }}>
        <h2 style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'1rem', letterSpacing:'.08em', textTransform:'uppercase', marginBottom:'1rem' }}>
          Preguntas frecuentes sobre tiradas
        </h2>
        <div style={{ display:'grid', gap:'1rem' }}>
          {FAQS.map(faq => (
            <div key={faq.q}>
              <h3 style={{ fontFamily:"'Cinzel',serif", color:'var(--text)', fontSize:'.95rem', letterSpacing:'.03em', marginBottom:'.4rem' }}>
                {faq.q}
              </h3>
              <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.7, margin:0 }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
