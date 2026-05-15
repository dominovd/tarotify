import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import CardImage from '@/components/CardImage'
import { notFound, redirect } from 'next/navigation'
import { CARDS_BY_SLUG } from '@/lib/cards'
import {
  makeComboSlug,
  parseComboSlug,
  MAJOR_COMBOS,
  PRIORITY_MINOR_COMBOS,
} from '@/lib/combinations'
import { getCard } from '@/lib/i18n/get-card'
import { localizeCardSlug } from '@/lib/i18n/slugs'

interface Props { params: { slug: string } }

// The Spanish dynamic route preserves the English-based combo slug
// (e.g. /es/combinaciones/death-and-justice) so hreflang mapping stays trivial
// and we avoid awkward compound-Spanish slugs.
export async function generateStaticParams() {
  return [...MAJOR_COMBOS, ...PRIORITY_MINOR_COMBOS].map(slug => ({ slug }))
}

const ELEMENT_ES: Record<string, string> = {
  Air: 'Aire',
  Water: 'Agua',
  Fire: 'Fuego',
  Earth: 'Tierra',
}

type RelType = 'amplifying' | 'nurturing' | 'tension' | 'grounding' | 'resonant' | 'complex'

interface Rel { type: RelType; desc: string }

function getElementRel(e1: string, e2: string): Rel {
  const has = (e: string, s: string) => e.includes(s)
  if ((has(e1,'Fire')&&has(e2,'Air'))||(has(e1,'Air')&&has(e2,'Fire')))
    return { type: 'amplifying', desc: 'El Fuego y el Aire se alimentan mutuamente — esta combinación se eleva con inspiración y un avance rápido.' }
  if ((has(e1,'Earth')&&has(e2,'Water'))||(has(e1,'Water')&&has(e2,'Earth')))
    return { type: 'nurturing', desc: 'La Tierra y el Agua crean un suelo fértil — una combinación de crecimiento, nutrición y manifestación paciente.' }
  if ((has(e1,'Fire')&&has(e2,'Water'))||(has(e1,'Water')&&has(e2,'Fire')))
    return { type: 'tension', desc: 'El Fuego y el Agua generan vapor — esta combinación sostiene pasión y complejidad emocional en una oposición dinámica.' }
  if ((has(e1,'Air')&&has(e2,'Earth'))||(has(e1,'Earth')&&has(e2,'Air')))
    return { type: 'grounding', desc: 'El Aire y la Tierra equilibran el pensamiento con la acción — aterriza tus ideas en realidad práctica.' }
  if (e1 === e2 || e1.includes(e2) || e2.includes(e1))
    return { type: 'resonant', desc: 'Al compartir el mismo elemento, estas cartas hablan el mismo idioma — sus energías se amplifican y se profundizan mutuamente con fuerza.' }
  return { type: 'complex', desc: 'Estas dos cartas portan energías elementales distintas que crean una combinación estratificada y multifacética.' }
}

function interpret(c1: { name: string; kw_up: string[]; element: string }, c2: { name: string; kw_up: string[]; element: string }) {
  const rel = getElementRel(c1.element, c2.element)
  const kw1 = c1.kw_up.slice(0, 2).join(' y ')
  const kw2 = c2.kw_up.slice(0, 2).join(' y ')

  const mains: Record<RelType, string> = {
    amplifying: `La pareja de ${c1.name} y ${c2.name} crea una corriente poderosamente amplificada. ${c1.name} aporta ${c1.kw_up[0]} y ${c1.kw_up[1]}, mientras que ${c2.name} suma ${c2.kw_up[0]} y ${c2.kw_up[1]}. ${rel.desc} Juntas encienden el impulso — las ideas y las acciones se mueven con rapidez. Los temas centrales que recorren esta combinación son ${kw1} encontrándose con ${kw2}. Algo está acelerándose: se te llama a actuar con conciencia y empuje a la vez.`,
    nurturing: `${c1.name} y ${c2.name} crean una pareja profundamente sostenedora. ${c1.name} porta ${kw1}, y ${c2.name} sostiene ${kw2}. ${rel.desc} Juntas te piden ser paciente, cuidar lo que está creciendo y confiar en el proceso. Esta combinación recompensa la constancia, el cuidado y el pensamiento a largo plazo por encima de los logros rápidos.`,
    tension: `${c1.name} y ${c2.name} crean una tensión dinámica y cargada. ${kw1} de ${c1.name} y ${kw2} de ${c2.name} — no son tanto fuerzas opuestas como polaridades complementarias. ${rel.desc} El tirón entre ellas es el corazón del mensaje: ambas energías son válidas; el trabajo está en sostenerlas juntas.`,
    grounding: `${c1.name} y ${c2.name} tienden un puente entre la visión y la realidad. ${kw1} se encuentra con ${kw2}. ${rel.desc} Esta combinación recompensa a quienes saben pensar con claridad y dar seguimiento con método. Las ideas deben convertirse en acciones.`,
    resonant: `Cuando ${c1.name} se encuentra con ${c2.name}, su naturaleza elemental compartida crea una resonancia profunda. ${kw1} y ${kw2} se entretejen en un mensaje unificado — una combinación de refuerzo y profundidad. Lo que cada carta sugiere por sí sola se vuelve más cierto y más importante al estar juntas.`,
    complex: `${c1.name} y ${c2.name} reúnen dos corrientes arquetípicas distintas. ${kw1} está en diálogo con ${kw2}. ${rel.desc} Leer esta combinación requiere sostener ambas energías — cada una aporta su propia sabiduría, y el mensaje emerge del espacio entre ellas.`,
  }

  return {
    relType: rel.type,
    relDesc: rel.desc,
    main: mains[rel.type],
    love: `En el amor, ${c1.name} y ${c2.name} sugieren una relación moldeada por ${c1.kw_up[0]} y ${c2.kw_up[0]}. Esta combinación apunta a un vínculo donde tanto la verdad emocional como el crecimiento personal son temas centrales.`,
    career: `En lo profesional, el encuentro de la energía de ${c1.kw_up[0]} de ${c1.name} con la energía de ${c2.kw_up[0]} de ${c2.name} describe una dinámica en la que ${rel.type === 'amplifying' ? 'los movimientos audaces y las decisiones rápidas conducen a avances' : rel.type === 'grounding' ? 'la planificación cuidadosa y el esfuerzo constante producen los mejores resultados' : 'la colaboración genuina y la evaluación honesta son tus mayores aliados'}.`,
    spirit: `Para el crecimiento personal, estas dos cartas te invitan a explorar la relación entre ${c1.kw_up[0]} y ${c2.kw_up[0]}. ${c1.name} te ha preparado; ${c2.name} te muestra hacia dónde ir. La lección es la integración — ¿cómo pueden ambas cualidades fortalecerse mutuamente en tu interior?`,
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const parsed = parseComboSlug(params.slug)
  if (!parsed) return {}
  const [s1, s2] = parsed
  const baseC1 = CARDS_BY_SLUG[s1]
  const baseC2 = CARDS_BY_SLUG[s2]
  if (!baseC1 || !baseC2) return {}

  const [c1, c2] = await Promise.all([getCard(s1, 'es'), getCard(s2, 'es')])
  if (!c1 || !c2) return {}

  const canonical = makeComboSlug(s1, s2)
  const result = interpret(c1, c2)
  const kw1 = c1.kw_up[0]
  const kw2 = c2.kw_up[0]

  return {
    title: `${c1.name} y ${c2.name} — Combinación de Cartas del Tarot | TarotAxis`,
    description: `¿Qué significan ${c1.name} y ${c2.name} juntas en el tarot? ${result.main.slice(0, 140)}…`,
    alternates: {
      canonical: `https://tarotaxis.com/es/combinaciones/${canonical}`,
      languages: {
        'en': `https://tarotaxis.com/combination/${canonical}`,
        'es': `https://tarotaxis.com/es/combinaciones/${canonical}`,
        'x-default': `https://tarotaxis.com/combination/${canonical}`,
      },
    },
    openGraph: {
      title: `${c1.name} + ${c2.name} — Combinación de Tarot`,
      description: `${kw1} se encuentra con ${kw2}. Descubre qué significan estas dos cartas juntas en amor, carrera y crecimiento personal.`,
      url: `https://tarotaxis.com/es/combinaciones/${canonical}`,
      locale: 'es_ES',
      alternateLocale: ['en_US'],
      images: [{
        url: `https://tarotaxis.com/og?type=combination&slug=${s1}&slug2=${s2}&locale=es`,
        width: 1200,
        height: 630,
        alt: `${c1.name} y ${c2.name} combinación de tarot`,
      }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${c1.name} + ${c2.name} — Combinación de Tarot`,
      images: [`https://tarotaxis.com/og?type=combination&slug=${s1}&slug2=${s2}&locale=es`],
    },
  }
}

export default async function ComboPageES({ params }: Props) {
  const parsed = parseComboSlug(params.slug)
  if (!parsed) notFound()

  const [s1, s2] = parsed
  const baseC1 = CARDS_BY_SLUG[s1]
  const baseC2 = CARDS_BY_SLUG[s2]
  if (!baseC1 || !baseC2) notFound()

  // Redirect non-canonical slug (reversed order) to canonical
  const canonical = makeComboSlug(s1, s2)
  if (params.slug !== canonical) redirect(`/es/combinaciones/${canonical}`)

  const [c1, c2] = await Promise.all([getCard(s1, 'es'), getCard(s2, 'es')])
  if (!c1 || !c2) notFound()

  const result = interpret(c1, c2)

  const relLabel: Record<RelType, string> = {
    amplifying: 'Amplificadora',
    nurturing: 'Nutricia',
    tension: 'Tensión dinámica',
    grounding: 'Aterrizadora',
    resonant: 'Resonante',
    complex: 'Compleja',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'es',
    mainEntity: [
      {
        '@type': 'Question',
        name: `¿Qué significan ${c1.name} y ${c2.name} en el tarot?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: result.main,
        },
      },
      {
        '@type': 'Question',
        name: `¿Qué significan ${c1.name} y ${c2.name} en el amor?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: result.love,
        },
      },
      {
        '@type': 'Question',
        name: `¿Qué significan ${c1.name} y ${c2.name} en la carrera?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: result.career,
        },
      },
    ],
  }

  const esSlug1 = localizeCardSlug(s1, 'es')
  const esSlug2 = localizeCardSlug(s2, 'es')

  const elementLabel1 = ELEMENT_ES[baseC1.element] ?? baseC1.element
  const elementLabel2 = ELEMENT_ES[baseC2.element] ?? baseC2.element

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <Link href="/es" style={{ color: 'var(--muted)' }}>Inicio</Link>
        <span>/</span>
        <Link href="/es/combinaciones" style={{ color: 'var(--muted)' }}>Combinaciones</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>{c1.name} + {c2.name}</span>
      </nav>

      {/* Hero — two cards */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 130, height: 200, borderRadius: 10, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,.4)', margin: '0 auto .6rem' }}>
              <CardImage slug={s1} alt={`${c1.name} carta de tarot`} />
            </div>
            <Link href={`/es/cartas/${esSlug1}`} style={{ fontFamily: "'Cinzel',serif", fontSize: '.78rem', color: 'var(--gold)', letterSpacing: '.05em' }}>{c1.name}</Link>
          </div>

          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '1.8rem', color: 'var(--gold)', opacity: .4 }}>✦</div>

          <div style={{ textAlign: 'center' }}>
            <div style={{ width: 130, height: 200, borderRadius: 10, overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,.4)', margin: '0 auto .6rem' }}>
              <CardImage slug={s2} alt={`${c2.name} carta de tarot`} />
            </div>
            <Link href={`/es/cartas/${esSlug2}`} style={{ fontFamily: "'Cinzel',serif", fontSize: '.78rem', color: 'var(--gold)', letterSpacing: '.05em' }}>{c2.name}</Link>
          </div>
        </div>

        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.3rem,4vw,1.9rem)', color: 'var(--gold)', marginBottom: '.6rem' }}>
          {c1.name} y {c2.name}
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem' }}>Significado de la combinación de tarot</p>

        <div style={{ marginTop: '.75rem' }}>
          <span style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>
            Energía {relLabel[result.relType]}
          </span>
        </div>
      </div>

      {/* Combined Energy */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.75rem' }}>
          Energía combinada
        </h2>
        <p style={{ color: 'var(--text)', lineHeight: 1.75 }}>{result.main}</p>
      </div>

      {/* Elemental relationship note */}
      <div style={{ background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.12)', borderRadius: 10, padding: '1rem 1.25rem', marginBottom: '1.5rem', display: 'flex', gap: '.75rem', alignItems: 'flex-start' }}>
        <span style={{ fontSize: '1rem', flexShrink: 0 }}>⚗️</span>
        <div>
          <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', color: 'var(--gold)', opacity: .6, letterSpacing: '.1em', textTransform: 'uppercase' }}>Dinámica elemental · </span>
          <span style={{ color: 'var(--muted)', fontSize: '.85rem' }}>{elementLabel1} × {elementLabel2} — {result.relDesc}</span>
        </div>
      </div>

      {/* Love / Career / Spirit */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '.75rem', marginBottom: '2rem' }}>
        {[
          ['❤️', 'Amor y relaciones', result.love],
          ['💼', 'Carrera y dinero', result.career],
          ['🌿', 'Crecimiento personal', result.spirit],
        ].map(([icon, label, text]) => (
          <div key={label as string} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem' }}>
            <div style={{ fontSize: '1.1rem', marginBottom: '.4rem' }}>{icon}</div>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.67rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.5rem' }}>{label}</div>
            <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.65, margin: 0 }}>{text as string}</p>
          </div>
        ))}
      </div>

      {/* Individual card links */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.75rem', marginBottom: '2rem' }}>
        {[
          { enSlug: s1, esSlug: esSlug1, name: c1.name, kw: c1.kw_up },
          { enSlug: s2, esSlug: esSlug2, name: c2.name, kw: c2.kw_up },
        ].map(c => (
          <Link key={c.enSlug} href={`/es/cartas/${c.esSlug}`} style={{ display: 'flex', gap: '.75rem', alignItems: 'center', padding: '1rem', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12 }}>
            <div style={{ position: 'relative', width: 36, height: 54, borderRadius: 6, overflow: 'hidden', flexShrink: 0 }}>
              <Image src={`/cards/${c.enSlug}.webp`} alt={c.name} fill sizes="36px" style={{ objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.8rem', color: 'var(--gold)', marginBottom: '.2rem' }}>{c.name}</div>
              <div style={{ color: 'var(--muted)', fontSize: '.72rem' }}>{c.kw.slice(0, 2).join(', ')}</div>
            </div>
          </Link>
        ))}
      </div>

      {/* FAQ */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
            <div key={name} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA — back to hub */}
      <div style={{ textAlign: 'center', background: 'rgba(255,255,255,.02)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14, padding: '1.75rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .6, textTransform: 'uppercase', marginBottom: '.75rem' }}>
          Explora más combinaciones
        </div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
          Descubre cómo se relacionan entre sí cualquiera de las 78 cartas del tarot.
        </p>
        <Link href="/es/combinaciones" style={{ display: 'inline-block', padding: '.8rem 2rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
          ✦ Ver todas las combinaciones
        </Link>
      </div>
    </div>
  )
}
