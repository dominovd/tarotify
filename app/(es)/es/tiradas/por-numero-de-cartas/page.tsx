import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tiradas de Tarot por Número de Cartas — Disposiciones de 1, 3, 5, 7 y 10 Cartas | TarotAxis',
  description: 'Explora tiradas de tarot organizadas por número de cartas. Desde sencillas tiradas de 1 carta y disposiciones de 3 cartas pasado-presente-futuro hasta la Cruz Celta completa de 10 cartas. Encuentra la tirada adecuada para tu pregunta.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/por-numero-de-cartas',
    languages: {
      'en': 'https://tarotaxis.com/spreads/by-card-count',
      'es': 'https://tarotaxis.com/es/tiradas/por-numero-de-cartas',
      'x-default': 'https://tarotaxis.com/spreads/by-card-count',
    },
  },
  openGraph: {
    title: 'Tiradas de Tarot por Número de Cartas — Disposiciones de 1, 3, 5, 7 y 10 Cartas',
    description: 'Tiradas de tarot agrupadas por número de cartas — desde rápidas tiradas de una sola carta hasta la Cruz Celta completa.',
    url: 'https://tarotaxis.com/es/tiradas/por-numero-de-cartas',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

type Reading = {
  href: string
  title: string
  desc: string
  tag?: string
}

type Group = {
  count: number
  heading: string
  intro: string
  items: Reading[]
}

const GROUPS: Group[] = [
  {
    count: 1,
    heading: 'Lecturas de Una Carta',
    intro: 'Una sola carta va directo al grano. Las lecturas de una carta son las mejores para chequeos diarios, preguntas rápidas de sí/no y un momento de reflexión enfocada — la energía que necesitas reconocer en este momento.',
    items: [
      { href: '/es/carta-del-dia', title: 'Carta del Día', desc: 'Una sola carta sembrada por la fecha — la misma carta aparece para todos los que leen hoy. El ritual matutino perfecto para fijar el tono del día.', tag: 'Ritual diario' },
      { href: '/es/si-no', title: 'Oráculo Sí / No', desc: 'Una carta, una respuesta binaria. Saca una carta y nuestro lector la interpreta como un sí, no o quizá claro — con el matiz detrás del veredicto.', tag: 'Respuesta rápida' },
    ],
  },
  {
    count: 2,
    heading: 'Lecturas de Dos Cartas',
    intro: 'Dos cartas crean una relación — contraste, elección o causa y efecto. Las disposiciones de dos cartas destacan en decisiones, comparaciones y al sacar a la luz la dinámica entre dos fuerzas.',
    items: [
      { href: '/es', title: 'Calculadora de Carta de Nacimiento', desc: 'Dos cartas calculadas a partir de tu fecha de nacimiento — tu Carta de Personalidad (lo que el mundo ve) y tu Carta del Alma (tu verdad interior). Tuyas de por vida.', tag: 'Numerología' },
      { href: '/es', title: 'Combinaciones de Cartas', desc: 'Explora cientos de combinaciones de dos cartas a partir de pares de Arcanos Mayores. Descubre cómo dos cartas se hablan entre sí en una lectura.', tag: 'Referencia' },
    ],
  },
  {
    count: 3,
    heading: 'Lecturas de Tres Cartas',
    intro: 'La tirada más versátil del tarot. Tres cartas revelan un arco natural — pasado, presente, futuro, o mente, cuerpo, espíritu, o situación, acción, resultado. El punto de partida perfecto para cada lector.',
    items: [
      { href: '/es/tiradas/tres-cartas', title: 'Tirada de Tres Cartas (6 disposiciones)', desc: 'Seis variaciones de la clásica disposición de tres cartas — pasado/presente/futuro, situación/acción/resultado, mente/cuerpo/espíritu y más. La tirada más útil que aprenderás jamás.', tag: 'Esenciales para principiantes' },
      { href: '/es/tiradas/tres-cartas/pasado-presente-futuro', title: 'Tirada Pasado · Presente · Futuro', desc: 'La disposición de tarot más reconocida del mundo. Tres cartas trazan la trayectoria de una situación a través del tiempo.', tag: 'Clásica' },
      { href: '/es', title: 'Cómo se Sienten Conmigo', desc: 'Tres cartas que revelan sus sentimientos, la historia que se cuentan a sí mismos y a qué es probable que conduzca su estado actual.', tag: 'Amor y sentimientos' },
      { href: '/es', title: 'Qué Bloquea mi Amor', desc: 'Tres cartas que nombran el bloqueo interior, el apoyo que ya está contigo y el siguiente paso concreto hacia la apertura.', tag: 'Trabajo interior' },
      { href: '/es', title: 'Qué Necesito Sanar', desc: 'Tres cartas para nombrar la herida que pide atención, dónde comenzó y el camino de integración.', tag: 'Sanación' },
    ],
  },
  {
    count: 4,
    heading: 'Lecturas de Cuatro Cartas',
    intro: 'Cuatro cartas añaden una capa de acción o resultado al clásico arco de tres cartas. A menudo se usan cuando un tercero, una influencia externa o una decisión concreta deben considerarse junto con la situación en sí.',
    items: [
      { href: '/es/tiradas/luna-menguante', title: 'Tirada de Luna Menguante', desc: 'Cuatro cartas para la fase descendente del ciclo lunar — reflexión, integración y crear espacio antes de la próxima luna nueva.', tag: 'Ritual lunar' },
      { href: '/es', title: '¿Volverá mi Ex?', desc: 'Cuatro cartas para una claridad genuina sobre una posible reunión — cómo se siente cada uno ahora, qué bloquea la reconciliación y hacia dónde se dirige todo esto.', tag: 'Reconciliación' },
      { href: '/es', title: 'Tirada del Tercero / Triángulo', desc: 'Cuatro cartas para relaciones afectadas por una influencia externa — tu posición, la suya, la del tercero y el camino genuino para atravesarlo.', tag: 'Dinámicas ocultas' },
    ],
  },
  {
    count: 5,
    heading: 'Lecturas de Cinco Cartas',
    intro: 'Cinco cartas logran el equilibrio entre profundidad y claridad. Suficientes cartas para mapear una situación completa — estado actual, influencias, consejo, resultado — sin abrumar al lector. El caballo de batalla del tarot intermedio.',
    items: [
      { href: '/es/tiradas/amor', title: 'Tirada de Amor', desc: 'Cuatro disposiciones dedicadas al amor y las relaciones, incluyendo una inmersión profunda de relación de 5 cartas. Guía honesta para el corazón.', tag: 'Relaciones' },
      { href: '/es', title: 'Sanando Tras un Desamor', desc: 'Cinco cartas para procesar una ruptura — lo que aún cargas, lo que te enseñó, lo que es tuyo para conservar, lo que liberar y el siguiente paso.', tag: 'Recuperación' },
      { href: '/es/tiradas/eclipse', title: 'Tirada de Eclipse', desc: 'Cinco cartas para navegar eclipses solares y lunares — lo que está saliendo a la luz, lo que termina, la verdad que quiere salir, la reacción a evitar y el camino hacia adelante.', tag: 'Temporada de eclipses' },
      { href: '/es/tiradas/amor/nueva-relacion', title: 'Tirada de Nueva Relación', desc: 'Una disposición enfocada de 5 cartas para las primeras etapas del amor — compatibilidad, tu energía, su energía, la conexión y la perspectiva.', tag: 'Amor nuevo' },
      { href: '/es/tiradas/amor/reconciliacion', title: 'Tirada de Reconciliación', desc: 'Cinco cartas para considerar si reparar una relación — qué se rompió, qué queda, qué necesitaría cambiar y el camino realista hacia adelante.', tag: 'Segundas oportunidades' },
      { href: '/es/tiradas/amor/amor-propio', title: 'Tirada de Amor Propio', desc: 'Cinco cartas vueltas hacia el interior — lo que cargas, lo que te das a ti misma/o, lo que retienes, lo que necesitas y el siguiente paso en tu propio valor.', tag: 'Trabajo interior' },
      { href: '/es/tiradas/alma-gemela', title: 'Tirada de Alma Gemela', desc: 'Cinco cartas revelan tu energía actual, lo que realmente buscas, lo que necesitas liberar, el camino a seguir y la naturaleza de tu conexión de alma gemela.', tag: 'Solteros' },
      { href: '/es/tiradas/carrera', title: 'Tirada de Carrera', desc: 'Una lectura de dirección profesional de 5 cartas que cubre la situación actual, los desafíos ocultos, las energías de apoyo, la acción recomendada y la perspectiva.', tag: 'Trabajo y propósito' },
      { href: '/es/tiradas/carrera/oferta-de-trabajo', title: 'Tirada de Oferta de Trabajo', desc: 'Cinco cartas para evaluar una oferta específica — el puesto en sí, las personas, el potencial, las desventajas y el veredicto.', tag: 'Decisión' },
      { href: '/es/tiradas/luna-nueva', title: 'Tirada de Luna Nueva', desc: 'Una disposición ritual de 5 cartas para el inicio del ciclo lunar — qué plantar, qué nutrir, qué soltar y la semilla de intención.', tag: 'Ritual lunar' },
    ],
  },
  {
    count: 6,
    heading: 'Lecturas de Seis Cartas',
    intro: 'Seis cartas añaden una capa de matiz que cinco no llegan a sostener — típicamente una exploración más profunda de las energías, integración de opuestos o guía a través de múltiples áreas de la vida.',
    items: [
      { href: '/es/tiradas/luna-llena', title: 'Tirada de Luna Llena (4 o 6 cartas)', desc: 'Dos disposiciones — un ritual sencillo de 4 cartas y una lectura más profunda de claridad de 6 cartas que cubre culminación, liberación, gratitud y guía para el siguiente ciclo.', tag: 'Ritual lunar' },
      { href: '/es', title: '¿Me Quedo o Me Voy?', desc: 'Seis cartas para encrucijadas de relación — la verdad, el camino de quedarse, el camino de irse, la respuesta que tu corazón ya carga, lo que debe cambiar de cualquier modo y guía.', tag: 'Encrucijadas' },
    ],
  },
  {
    count: 7,
    heading: 'Lecturas de Siete Cartas',
    intro: 'Siete cartas son el tarot en su forma más narrativa — un arco completo con espacio para influencias ocultas, consejo y resultado. La tirada clásica de peso medio para cualquier pregunta significativa.',
    items: [
      { href: '/es/tiradas/herradura', title: 'Tirada de la Herradura', desc: 'Un arco clásico de 7 cartas que cubre pasado, presente, influencias ocultas, obstáculos, fuerzas externas, consejo y el resultado más probable. Funciona para cualquier pregunta.', tag: 'Disposición clásica' },
      { href: '/es/tiradas/semanal', title: 'Tirada Semanal', desc: 'Una carta para cada día de la semana — un pronóstico energético completo. Fija intenciones el domingo y navega cada día con claridad.', tag: 'Ritual semanal' },
      { href: '/es', title: 'Amor Verdadero — Inmersión Profunda', desc: 'Siete cartas para una relación establecida — tus sentimientos, los suyos, el corazón de la conexión, lo que cada uno aporta, dónde vive la fricción y el camino hacia adelante.', tag: 'Amor establecido' },
    ],
  },
  {
    count: 10,
    heading: 'Lecturas de Diez Cartas',
    intro: 'La tirada de diez cartas es el tarot en su forma más completa — cada faceta de una situación considerada, desde la superficie consciente hasta las profundidades subconscientes, desde la influencia pasada hasta el resultado final.',
    items: [
      { href: '/es/tiradas/cruz-celta', title: 'Cruz Celta', desc: 'La tirada de tarot más completa del mundo. Diez cartas revelan el presente, el desafío, el pasado, el futuro, lo consciente y lo subconsciente, factores externos, consejo, esperanzas/miedos y el resultado.', tag: 'Lectura profunda' },
    ],
  },
  {
    count: 13,
    heading: 'Tirada Anual (12+1 Cartas)',
    intro: 'La lectura de tarot estándar más larga — una carta por mes, más una carta de tema general. Un mapa energético completo del año por venir y el ritual anual más poderoso del tarot.',
    items: [
      { href: '/es/tiradas/anual', title: 'Tirada Anual', desc: 'Trece cartas — de enero a diciembre más una sola carta de tema coronando el año. Se saca al inicio de un año calendario, en un cumpleaños o cuando comienza un nuevo capítulo.', tag: 'Ritual anual' },
    ],
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuántas cartas debería usar en una tirada de tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El número correcto de cartas depende de la profundidad de tu pregunta. Usa una sola carta para un chequeo diario o un sí/no rápido. Usa tres cartas para la disposición de tarot más común — pasado, presente y futuro — o cualquier otro arco lineal. Usa cinco cartas cuando quieras más matiz, como una lectura de amor o carrera. Usa siete cartas para una tirada narrativa completa con consejo y resultado. Reserva la Cruz Celta de diez cartas para las situaciones más complejas, donde necesitas ver cada ángulo. Como regla general, cuantas más cartas hay en una tirada, más habilidad interpretativa requiere.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la tirada de tarot más sencilla?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La tirada de tarot más sencilla es una lectura de una sola carta — a menudo llamada carta del día o lectura de una carta. Barajas el mazo, sacas una carta y la lees como la energía o tema dominante para la pregunta o el día. Las lecturas de una carta son la base de una práctica diaria de tarot y son la mejor manera de aprender las 78 cartas con el tiempo. A partir de ahí, las tiradas de tres cartas son el siguiente paso natural.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la tirada de tarot más popular?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La tirada de tres cartas es la disposición de tarot más popular del mundo — particularmente la variación pasado-presente-futuro. Es lo bastante sencilla para principiantes, lo bastante flexible para responder casi cualquier pregunta y lo bastante rápida para usarse a diario. La Cruz Celta de diez cartas es la tirada más famosa para lecturas más profundas, pero su complejidad hace que se use menos a menudo que las disposiciones de tres cartas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puedo crear mi propia tirada de tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí — muchos lectores experimentados diseñan sus propias tiradas para preguntas específicas. La clave es asignar un significado claro a cada posición antes de sacar las cartas. Empieza por la pregunta que quieres responder, luego desglósala en los ángulos que te ayudarían a verla por completo — estado actual, lo que está oculto, qué hacer, el resultado probable, etcétera. Una tirada es simplemente una pregunta estructurada visualmente. No hay regla sobre cuántas cartas debe contener una tirada.',
      },
    },
  ],
}

export default function ByCardCountPage() {
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
        <span style={{ color: 'var(--gold)' }}>Por número de cartas</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tiradas de Tarot por Número de Cartas
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 580, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Cada tirada de tarot es una pregunta estructurada visualmente — y el número de cartas es la primera decisión. Explora nuestra biblioteca completa agrupada por número de cartas, desde una sola tirada diaria hasta la Tirada Anual de trece cartas.
        </p>
      </div>

      {/* Intro */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Cómo elegir el número correcto de cartas
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Más cartas no siempre es mejor. Una sola carta puede ser más poderosa que una Cruz Celta cuando la pregunta es sencilla, porque te obliga a enfocarte. El número correcto de cartas depende de la pregunta, no de lo seria que quieras que se sienta la lectura.
          </p>
          <p style={{ margin: 0 }}>
            Una regla aproximada: <strong style={{ color: 'var(--gold)' }}>una carta</strong> para una guía puntual, <strong style={{ color: 'var(--gold)' }}>tres</strong> para cualquier pregunta con principio, medio y fin, <strong style={{ color: 'var(--gold)' }}>cinco</strong> cuando quieras contexto y consejo, <strong style={{ color: 'var(--gold)' }}>siete</strong> para un arco narrativo completo y <strong style={{ color: 'var(--gold)' }}>diez</strong> cuando necesites cada ángulo. Confía en la estructura para que haga la mitad del trabajo por ti.
          </p>
        </div>
      </div>

      {/* Groups */}
      {GROUPS.map(group => (
        <section key={group.count} style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '.75rem', marginBottom: '.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: "'Cinzel',serif", fontSize: '2rem', color: 'var(--gold)', lineHeight: 1 }}>{group.count}</span>
            <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', margin: 0 }}>
              {group.heading}
            </h2>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            {group.intro}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {group.items.map(item => (
              <Link key={item.title} href={item.href} style={{ display: 'block', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', transition: 'border-color .2s' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', alignItems: 'baseline', marginBottom: '.4rem' }}>
                  <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.95rem', letterSpacing: '.03em' }}>{item.title}</div>
                  {item.tag && (
                    <span style={{ padding: '.15rem .55rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.65rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{item.tag}</span>
                  )}
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '.85rem', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {/* FAQ */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {faqSchema.mainEntity.map(item => (
            <div key={item.name} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>¿Listo para sacar tus cartas?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Usa nuestra herramienta de lectura gratuita para sacar cualquier tirada de forma interactiva, o aprende más sobre cómo leer el tarot desde los cimientos.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/lectura-gratis" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Lectura gratis
          </Link>
          <Link href="/es/tiradas" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Todas las tiradas
          </Link>
          <Link href="/es/como-leer-tarot" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Cómo leer tarot
          </Link>
        </div>
      </div>
    </div>
  )
}
