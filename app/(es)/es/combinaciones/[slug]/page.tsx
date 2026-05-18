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
  detectSignals,
  type ComboSignals,
} from '@/lib/combinations'
import { getCard } from '@/lib/i18n/get-card'
import { localizeCardSlug } from '@/lib/i18n/slugs'
import { CARDS_BY_SLUG as ALL_CARDS } from '@/lib/cards'

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

// Spanish signal-engine fragments — mirrors lib/combinations.ts buildShadowForm/etc.
function buildShadowFormES(name1: string, name2: string, s: ComboSignals): string {
  if (s.crisis)
    return `La sombra de esta pareja es el colapso sin liberación — pequeñas rupturas repetidas en lugar de una sola ruptura limpia. ${name1} o ${name2} sigue sacando a la luz la misma fragilidad bajo una forma ligeramente distinta, y la persona pregunta por qué la situación regresa. El trabajo es estructural, no cosmético.`
  if (s.shadow)
    return `La sombra es el relato que la persona se ha contado para evitar una verdad más callada y menos halagadora. ${name1} y ${name2} rara vez engañan a propósito; resaltan la explicación que se ha vuelto demasiado cómoda como para cuestionarse.`
  if (s.commitment)
    return `La sombra es el compromiso disfrazado de inevitabilidad — quedarse porque irse se siente como fracaso, o porque la alternativa es desconocida, en lugar de quedarse porque la permanencia aún sirve a ambas vidas involucradas.`
  if (s.healing)
    return `La sombra de esta pareja es declarar completado el camino en la puerta equivocada. Las combinaciones sanadoras como ${name1} y ${name2} suelen aparecer en mitad del trabajo, no al final. El alivio se siente definitivo hasta que la vida pone a prueba si realmente terminó.`
  if (s.transition)
    return `La sombra es la transición estirada indefinidamente — mantener un pie en la vida anterior porque comprometerse del todo con la nueva se siente como traicionar la antigua. ${name1} y ${name2} señalan ese cruce inacabado.`
  if (s.willpower)
    return `La sombra es la fuerza aplicada donde se requería paciencia, o la paciencia sostenida donde la acción estaba ya retrasada. ${name1} y ${name2} agudizan el error que la persona ha estado cometiendo.`
  if (s.archetype === 'two-majors')
    return `La sombra de las parejas de dos arcanos mayores es leer la tirada como destino en lugar de diagnóstico. ${name1} y ${name2} describen la dinámica en juego, no las elecciones que aún quedan abiertas dentro de ella.`
  if (s.elementalRelation === 'tension')
    return `La sombra es tratar la tensión como un problema que hay que resolver. ${name1} y ${name2} sostienen dos energías válidas en fricción; el trabajo está en dejar que ambas permanezcan presentes en vez de forzar una resolución.`
  if (s.elementalRelation === 'amplifying')
    return `La sombra es la aceleración sin dirección — un impulso que parece progreso pero multiplica lo que ya estaba descentrado. ${name1} y ${name2} amplifican el sistema tal como es, no como la persona desearía que fuera.`
  if (s.elementalRelation === 'nurturing')
    return `La sombra es cuidar de más — quedarse tanto tiempo en modo paciente que el crecimiento se convierte calladamente en estancamiento.`
  if (s.elementalRelation === 'grounding')
    return `La sombra es un pragmatismo extremo que apaga la chispa imaginativa que la pareja estaba ofreciendo. ${name1} y ${name2} piden seguimiento, no que la visión original quede archivada.`
  if (s.elementalRelation === 'resonant')
    return `La sombra es la cámara de eco — la misma energía concentrada en una sola nota dominante que ahoga la información adyacente que la tirada también está ofreciendo.`
  return `La sombra de esta pareja es confundir su complejidad con incoherencia. ${name1} y ${name2} piden una lectura más cuidadosa, no una distinta.`
}

function buildEdgeCaseES(name1: string, name2: string, s: ComboSignals): string {
  if (s.crisis)
    return `Las parejas de crisis como ${name1} y ${name2} a veces se malinterpretan como predicción del futuro cuando la persona está en realidad en plena recuperación. Lee el momento en que se hace la pregunta, no sólo las cartas — la misma pareja significa cosas muy distintas en el día uno de una ruptura y en el día noventa.`
  if (s.shadow)
    return `Las parejas con fuerte energía del cúmulo de sombra se malinterpretan a menudo como paranoia cuando la señal es intuición acertada, o como acertadas cuando es el sistema de alarma de la persona el que se está disparando sin motivo. Verifica con evidencia externa antes de actuar sobre lo que ${name1} y ${name2} parecen estar diciendo.`
  if (s.archetype === 'major-court')
    return `Las cartas de la corte en la pareja a menudo describen a una persona real en torno a la consultante. Antes de leer ${name1} o ${name2} como una faceta de su propia personalidad, pregunta si hay una persona concreta en la situación a la que la carta pueda estar nombrando.`
  if (s.archetype === 'two-courts')
    return `Dos cortes en una sola pareja describen casi siempre una dinámica relacional entre dos personas concretas. Decide cuál de ${name1} o ${name2} es la consultante en la situación — y cuál está recibiendo — antes de seguir leyendo.`
  if (s.sameNumber)
    return `Las parejas de pips con el mismo número como ${name1} y ${name2} se leen como energía en estéreo — dos palos procesando a la vez el mismo tema numérico. La lectura converge en el tema; los palos quedan como textura.`
  if (s.archetype === 'major-pip')
    return `Una pareja de arcano mayor + pip se lee mejor como la fuerza arquetípica actuando sobre la situación concreta. Resiste leerlas como dos voces de igual peso; una es contexto, la otra es contenido.`
  if (s.healing)
    return `Las combinaciones sanadoras a veces aparecen al inicio de un proceso difícil para señalar que el camino de vuelta existe, no que ya se ha recorrido. No tomes ${name1} y ${name2} como confirmación de que el trabajo ha terminado.`
  if (s.elementalRelation === 'tension')
    return `Las parejas de tensión a veces se leen como advertencias. No lo son. ${name1} y ${name2} describen la fricción que la situación contiene; la advertencia se vería como otras cartas diciendo que esa fricción está destruyendo algo.`
  return `La pareja gana mucho al leerse contra la pregunta que realmente se hizo. ${name1} y ${name2} son lo bastante flexibles como para encajar en varias situaciones cercanas; la precisión en la pregunta produce precisión en la lectura.`
}

function buildReaderNoteES(name1: string, name2: string, s: ComboSignals): string {
  if (s.crisis)
    return `Las lectoras con experiencia no suelen suavizar las parejas de crisis. Nombran el final con honestidad y luego hacen la pregunta más difícil: ¿a qué le era leal la consultante que le impedía salir antes? Esa lealtad — a un voto, a una imagen, a una inversión irrecuperable — suele ser el verdadero tema de la lectura.`
  if (s.commitment)
    return `Las combinaciones de compromiso suelen preguntar «¿qué te costaría la honestidad aquí?». Las cartas no están en contra del compromiso; están en contra del compromiso por inercia. Una practicante que lee ${name1} y ${name2} escucha lo que la consultante ha dejado de decir en voz alta.`
  if (s.shadow)
    return `Las lectoras que ven parejas del cúmulo de sombra revisan primero si la consultante está haciendo la misma pregunta repetida sesión tras sesión. Si es así, las cartas probablemente ya han respondido, y el trabajo ha pasado de la clarificación al enfrentamiento.`
  if (s.healing)
    return `Una practicante experimentada lee las parejas sanadoras como orientación, no como llegada. La pareja confirma la dirección; el tiempo pertenece a la vida de la consultante, no a las cartas.`
  if (s.transition)
    return `Las combinaciones de transición recompensan la paciencia en la lectura misma. ${name1} y ${name2} describen un proceso; comprimirlo en una sola frase da menos valor que nombrar las etapas por las que la consultante está atravesando.`
  if (s.willpower)
    return `Las lectoras con experiencia saben que las parejas de fuerza de voluntad suelen ser una revisión de la aplicación — si la consultante empuja donde tocaba paciencia, o espera donde la acción ya estaba retrasada. ${name1} y ${name2} afinan el diagnóstico; la elección sigue siendo de la consultante.`
  if (s.archetype === 'two-majors')
    return `Las parejas de dos arcanos mayores como ${name1} y ${name2} invitan a la practicante a ir más despacio. La lectura suele ser sobre una fase de vida, no sobre una sola decisión; tratada como lectura de fase, las cartas ofrecerán detalle más útil.`
  if (s.intuition)
    return `Las parejas con fuerte componente intuitivo recompensan la atención a lo que la consultante ya sabe a medias. ${name1} y ${name2} rara vez aportan información nueva; con más frecuencia le dan a la intuición existente una estructura lo bastante clara como para actuar sobre ella.`
  return `La pregunta más útil que se puede traer a ${name1} y ${name2} es qué ha estado evitando preguntarse la consultante sobre la situación. Las cartas no se niegan a responder; señalan la pregunta que aún no se ha articulado.`
}

function interpret(c1: { name: string; kw_up: string[]; element: string; slug?: string }, c2: { name: string; kw_up: string[]; element: string; slug?: string }, baseC1: { slug: string; suit: string; element: string }, baseC2: { slug: string; suit: string; element: string }) {
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

  // Build signals using the base EN card data (consistent slug-based detection).
  const signals = detectSignals(ALL_CARDS[baseC1.slug], ALL_CARDS[baseC2.slug])

  const main = mains[rel.type]
  const love = `En el amor, ${c1.name} y ${c2.name} sugieren una relación moldeada por ${c1.kw_up[0]} y ${c2.kw_up[0]}. ${signals.commitment ? 'El compromiso es parte de la lectura — puesto a prueba, ofrecido o solicitado.' : signals.shadow ? 'Cuida las proyecciones; la relación puede cargar más imaginación que hechos verificados.' : 'Tanto la verdad emocional como el crecimiento personal son temas centrales.'}`
  const career = `En lo profesional, el encuentro de ${c1.kw_up[0]} de ${c1.name} con ${c2.kw_up[0]} de ${c2.name} describe una dinámica en la que ${rel.type === 'amplifying' ? 'los movimientos audaces y las decisiones rápidas conducen a avances' : rel.type === 'grounding' ? 'la planificación cuidadosa y el esfuerzo constante producen los mejores resultados' : signals.crisis ? 'un final o una reestructuración está en marcha — resiste el impulso de reconstruir la forma anterior' : 'la colaboración genuina y la evaluación honesta son tus mayores aliados'}.`
  const spirit = `Para el crecimiento personal, ${c1.name} y ${c2.name} apuntan a la relación entre ${c1.kw_up[0]} y ${c2.kw_up[0]}. ${signals.transition ? 'Una fase está cerrándose o acaba de cerrarse; la tarea espiritual es no precipitar la siguiente fase.' : signals.intuition ? 'El saber interior es la facultad operante aquí — escucharlo en silencio requiere reducir deliberadamente las entradas externas.' : `${c1.name} te ha preparado; ${c2.name} te muestra hacia dónde ir. La lección es la integración.`}`

  // Valence answer for the "positive or negative" FAQ
  const valenceAnswer = signals.crisis && !signals.healing
    ? `Ninguno, en sentido polarizado. ${c1.name} y ${c2.name} juntas describen una sacudida o un final, lo cual se siente negativo en el momento pero rara vez es toda la historia. Muchas consultantes miran después esta pareja como el momento en que una situación atascada por fin se movió.`
    : signals.healing && !signals.crisis
    ? `En balance, sostenedora. ${c1.name} y ${c2.name} portan una señal sanadora o de cierre, aunque las cartas no prometen que el trabajo esté terminado — sólo que la dirección es sólida.`
    : signals.commitment
    ? `Constructiva pero condicional. La pareja recompensa el compromiso honesto y castiga el compromiso por inercia; la lectura depende de cuál de los dos está ofreciendo realmente la consultante.`
    : signals.transition
    ? `Transitoria. ${c1.name} y ${c2.name} describen una situación en movimiento, ni lo bastante estable para llamarla buena ni lo bastante terminada para llamarla mala. La lectura trata sobre la dirección del movimiento, no sobre un veredicto del resultado.`
    : `Las parejas del tarot no se dividen limpiamente en positivas y negativas. ${c1.name} y ${c2.name} describen una dinámica con sombra y luz; lo que la consultante haga con la energía determinará hacia qué lado cae la lectura.`

  const contextFocus = signals.commitment || signals.shadow || baseC1.suit === 'cups' || baseC2.suit === 'cups' ? 'love' : 'career'

  const faqs = [
    { q: `¿Qué significan ${c1.name} y ${c2.name} en el tarot?`, a: main },
    { q: `¿${c1.name} y ${c2.name} es una combinación positiva o negativa?`, a: valenceAnswer },
    {
      q: `¿Qué significa la energía ${rel.type === 'amplifying' ? 'amplificadora' : rel.type === 'nurturing' ? 'nutricia' : rel.type === 'tension' ? 'de tensión' : rel.type === 'grounding' ? 'aterrizadora' : rel.type === 'resonant' ? 'resonante' : 'compleja'} entre ${c1.name} y ${c2.name}?`,
      a: `${rel.desc} En la práctica esto significa que las lecturas con ${c1.name} y ${c2.name} tienden a moverse ${rel.type === 'amplifying' ? 'rápido y recompensan la acción decidida' : rel.type === 'nurturing' ? 'despacio y recompensan la paciencia' : rel.type === 'tension' ? 'con una complejidad que se resiste a una resolución sencilla' : rel.type === 'grounding' ? 'con seguimiento práctico antes que con especulación' : rel.type === 'resonant' ? 'con una claridad concentrada en un solo tema' : 'en varias capas interpretativas que se benefician de una segunda lectura'}.`,
    },
    contextFocus === 'love'
      ? { q: `¿Cómo leo ${c1.name} y ${c2.name} en una pregunta de relación?`, a: love }
      : { q: `¿Cómo leo ${c1.name} y ${c2.name} en una pregunta de carrera?`, a: career },
  ]

  return {
    relType: rel.type,
    relDesc: rel.desc,
    main,
    love,
    career,
    spirit,
    signals,
    shadowForm: buildShadowFormES(c1.name, c2.name, signals),
    edgeCase: buildEdgeCaseES(c1.name, c2.name, signals),
    readerNote: buildReaderNoteES(c1.name, c2.name, signals),
    faqs,
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
  const result = interpret(c1, c2, baseC1, baseC2)
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

  const result = interpret(c1, c2, baseC1, baseC2)

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
    mainEntity: result.faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
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
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem', marginBottom: '1rem' }}>
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

      {/* Shadow form + Edge case + Reader's note — signal-engine ES output */}
      <div style={{ display: 'grid', gap: '.9rem', marginBottom: '1.5rem' }}>
        <div style={{ background: 'var(--on-bg-02)', border: '1px solid rgba(180,80,80,.18)', borderRadius: 12, padding: '1.2rem 1.4rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.14em', color: '#c87878', opacity: .85, textTransform: 'uppercase', marginBottom: '.5rem' }}>
            ☾ Forma de sombra
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, margin: 0 }}>{result.shadowForm}</p>
        </div>

        <div style={{ background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.2rem 1.4rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.5rem' }}>
            ⚠ Cuándo esta combinación engaña
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, margin: 0 }}>{result.edgeCase}</p>
        </div>

        <div style={{ background: 'var(--on-bg-02)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, padding: '1.2rem 1.4rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.68rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .85, textTransform: 'uppercase', marginBottom: '.5rem' }}>
            ✦ Nota del lector
          </div>
          <p style={{ color: 'var(--text)', fontSize: '.9rem', lineHeight: 1.7, margin: 0 }}>{result.readerNote}</p>
        </div>
      </div>

      {/* Love / Career / Spirit */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '.75rem', marginBottom: '2rem' }}>
        {[
          ['❤️', 'Amor y relaciones', result.love],
          ['💼', 'Carrera y dinero', result.career],
          ['🌿', 'Crecimiento personal', result.spirit],
        ].map(([icon, label, text]) => (
          <div key={label as string} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem' }}>
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
          <Link key={c.enSlug} href={`/es/cartas/${c.esSlug}`} style={{ display: 'flex', gap: '.75rem', alignItems: 'center', padding: '1rem', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12 }}>
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
            <div key={name} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA — back to hub */}
      <div style={{ textAlign: 'center', background: 'var(--on-bg-02)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14, padding: '1.75rem' }}>
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
