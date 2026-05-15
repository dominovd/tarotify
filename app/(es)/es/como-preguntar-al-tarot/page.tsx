import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Preguntas para hacer al tarot — 50 ejemplos y guía práctica | TarotAxis',
  description: '50 preguntas para hacer al tarot, organizadas por tema (sobre ti, amor, carrera, decisiones, práctica diaria). Por qué las preguntas de sí/no se quedan cortas y cómo replantear consultas vagas con Qué/Cómo/Por qué.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/como-preguntar-al-tarot',
    languages: {
      'en': 'https://tarotaxis.com/how-to-ask-tarot-questions',
      'es': 'https://tarotaxis.com/es/como-preguntar-al-tarot',
      'x-default': 'https://tarotaxis.com/how-to-ask-tarot-questions',
    },
  },
  openGraph: {
    title: 'Cómo hacer las preguntas correctas al tarot — Guía práctica',
    description: 'La calidad de una lectura de tarot depende casi por completo de la pregunta. Aprende a formular mejores consultas.',
    url: 'https://tarotaxis.com/es/como-preguntar-al-tarot',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cómo hacer las preguntas correctas al tarot — Guía práctica | TarotAxis',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Se le puede preguntar al tarot cualquier cosa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'En principio, sí — el tarot responderá a cualquier pregunta. En la práctica, la estructura de tu pregunta condiciona qué tan útil puede ser la respuesta. Las preguntas abiertas sobre tu papel, tus elecciones y tus patrones producen lecturas mucho más ricas que las preguntas de sí/no sobre desenlaces fijos. Las cartas no funcionan peor con ciertos temas; funcionan peor con ciertas formulaciones.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Por qué se desaconsejan las preguntas de sí/no en el tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Las preguntas de sí/no obligan a las cartas a emitir un veredicto binario sobre una situación que rara vez lo es. Las 78 cartas del tarot están diseñadas para describir energías, patrones e influencias — no para entregar predicciones. Cuando sacas varias cartas para una pregunta de sí/no, recibes significados en capas que se resisten a ser reducidos a una sola respuesta. Una pregunta replanteada — que empiece con Qué, Cómo o Por qué — usa las cartas para aquello en lo que son mejores.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es una buena pregunta para empezar con el tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para principiantes, una primera pregunta útil es: "¿Qué necesito entender sobre esta situación ahora mismo?" Es abierta, está centrada en la comprensión más que en el desenlace y funciona para cualquier tema — amor, carrera, familia o crecimiento personal. Una vez te sientas cómodo, puedes especializarte: "¿Qué energía está moldeando esta relación?" o "¿Cuál es el próximo paso que estoy evitando?" — ambas funcionan mejor que preguntar qué va a pasar.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Se puede hacer la misma pregunta dos veces al tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Se puede — pero si acabas de hacer una lectura y estás barajando de nuevo porque no te gustó la respuesta, no estás haciendo una pregunta nueva. Estás buscando una respuesta distinta. El enfoque más útil es esperar al menos una semana, ver cómo ha evolucionado la situación y luego replantear la pregunta para reflejar lo que ha cambiado. Repetir preguntas idénticas en un periodo corto tiende a producir más confusión que claridad.',
      },
    },
  ],
}

const principles = [
  {
    n: '1',
    name: 'Empieza con Qué, Cómo o Por qué',
    body: 'Estas tres palabras desplazan una pregunta desde la predicción fija hacia la exploración. "¿Conseguiré el ascenso?" cierra la conversación; "¿Qué puedo hacer para mejorar mis posibilidades?" la abre. Las cartas tienen mucho más que ofrecer cuando se las invita a describir una situación que cuando se las interroga buscando un veredicto.',
  },
  {
    n: '2',
    name: 'Céntrate en tu papel',
    body: 'Las lecturas más útiles vienen de preguntas sobre tus propias elecciones, tu mentalidad y tu comportamiento. No puedes controlar lo que siente otra persona ni si va a ocurrir un evento — pero siempre puedes cambiar cómo te presentas. Preguntar "¿Cuál es mi parte en esta dinámica?" produce de forma fiable una guía que puedes usar. Preguntar "¿Me ama?" produce conjeturas disfrazadas de claridad.',
  },
  {
    n: '3',
    name: 'Sé específico sin ser restrictivo',
    body: 'Las preguntas vagas como "¿Qué pasa en mi vida?" dejan a las cartas sin un tema claro al que dirigirse. Las preguntas hiperespecíficas como "¿Me casaré antes del 31 de diciembre?" encierran a las cartas en un calendario rígido que no pueden honrar. Las mejores preguntas estrechan el foco a un área o tema concreto pero dejan espacio para que las cartas revelen algo que no esperabas.',
  },
  {
    n: '4',
    name: 'Pregunta por patrones, no por predicciones',
    body: 'El tarot brilla más cuando describe las energías y los patrones actualmente en juego — y se queda corto cuando se le pide pronosticar eventos futuros fijos. Una pregunta formulada en torno a qué está influyendo en una situación, qué está bloqueado, o qué quiere emerger producirá una lectura más útil que una pregunta formulada en torno a qué va a ocurrir en una fecha concreta.',
  },
  {
    n: '5',
    name: 'Una pregunta por lectura',
    body: 'Apilar tres preguntas en una lectura diluye a las cartas. Si te encuentras preguntando "¿Encontraré el amor Y mejorará mi carrera Y debería mudarme?" — divídelo en tres lecturas separadas. Una tirada es una respuesta estructurada a una única pregunta bien formulada. Varias preguntas producen una lectura que ninguna posición de carta está realmente respondiendo.',
  },
]

const rewrites = [
  {
    before: '¿Conseguiré el ascenso?',
    after: '¿Qué puedo hacer para posicionarme para el ascenso?',
    why: 'Desplaza el foco desde un desenlace fijo hacia tu capacidad de actuar. Las cartas pueden ahora describir las fortalezas en las que apoyarte y los puntos ciegos que conviene atender.',
  },
  {
    before: '¿Encontraré el amor pronto?',
    after: '¿Qué energías estoy llevando ahora mismo a mi vida amorosa?',
    why: 'Sustituye la trampa del calendario por un espejo. La lectura pasa a ser sobre lo que estás irradiando, no sobre cuándo va a aparecer alguien.',
  },
  {
    before: '¿Es él el indicado?',
    after: '¿Cuál es la naturaleza real de la conexión entre nosotros?',
    why: 'Elimina el veredicto binario. Las cartas pueden describir la dinámica con honestidad — sus fortalezas, sus lecciones y sus límites.',
  },
  {
    before: '¿Debería dejar mi trabajo?',
    after: '¿Qué necesita mi carrera de mí en este momento?',
    why: 'Dejarlo es una de muchas respuestas posibles. Preguntar qué necesita tu carrera saca a la luz la pregunta más profunda — que puede ser sobre energía, límites o dirección antes que sobre el trabajo en sí.',
  },
  {
    before: '¿Qué pasa con mi vida?',
    after: '¿Cuál es el patrón más importante que esta temporada me pide mirar?',
    why: 'Añade foco sin restringir el tema. Las cartas tienen ahora un blanco claro — una temporada, un patrón — manteniendo el alcance amplio.',
  },
  {
    before: '¿Volverá mi ex?',
    after: '¿Qué lecciones de esta relación todavía estoy invitado a integrar?',
    why: 'La pregunta original espera a que actúe otra persona. La replanteada mantiene el trabajo — y la capacidad de actuar — en ti.',
  },
  {
    before: '¿Voy a fracasar en este proyecto?',
    after: '¿Qué retos guarda este proyecto para mí, y qué me ayuda a afrontarlos?',
    why: 'Nombra el miedo sin rendirse a él. Las cartas pueden mapear los obstáculos y los recursos disponibles, dándote algo concreto que hacer.',
  },
  {
    before: '¿Esta relación va a durar?',
    after: '¿Cuál es el estado actual de esta relación y qué necesita para crecer?',
    why: 'Cambia una predicción por una instantánea y una guía. La lectura describe dónde estás ahora y qué acción profundizaría la conexión.',
  },
]

export default function ComoPreguntarAlTarotPage() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        <Link href="/es" style={{ color: 'var(--muted)' }}>Inicio</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Cómo preguntar al tarot</span>
      </nav>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.2em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Guía práctica
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '1rem', lineHeight: 1.25 }}>
          Preguntas para hacer al tarot — 50 ejemplos y guía práctica
        </h1>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.95rem' }}>
          La calidad de una lectura de tarot depende casi por completo de la calidad de la pregunta. Las mismas tres cartas pueden entregar una lectura genérica y vagamente alentadora o una orientación genuinamente útil — la diferencia está en cómo se formula la pregunta. La mayoría de los lectores acaba dándose cuenta de que las cartas siempre estuvieron funcionando a pleno rendimiento; era la pregunta la que limitaba la lectura.
        </p>
      </div>

      {/* Section: Why yes/no falls short */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Por qué las preguntas de sí/no se quedan cortas
        </h2>
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', marginBottom: '1rem' }}>
            Las preguntas de sí/no no están prohibidas — y una tirada de una sola carta de sí/no es perfectamente válida para una consulta rápida. Pero el formato sí/no llega a su límite muy pronto. El tarot describe <em>energías, influencias y patrones</em>; no dicta veredictos. Cuando sacas cinco cartas en respuesta a una pregunta de sí/no, recibes cinco capas de matiz que se resisten a colapsarse en una sola respuesta binaria.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            El problema más profundo es que las preguntas de sí/no asumen que la situación es fija y que sólo el desenlace es incierto. La mayoría de las situaciones son lo contrario: el desenlace depende de factores aún en movimiento — incluidas tus propias decisiones. Una pregunta que ignora esos factores tira por la borda lo más útil que el tarot tiene para ofrecer.
          </p>
        </div>
      </section>

      {/* Section: 5 Principles */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
          Cinco principios para mejores preguntas
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {principles.map(({ n, name, body }) => (
            <div key={n} style={{ display: 'flex', gap: '1rem', background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.12)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem', marginTop: 2 }}>
                {n}
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.4rem' }}>{name}</div>
                <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Rewrites */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem' }}>
          Ocho preguntas, reformuladas
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          La forma más rápida de interiorizar estos principios es verlos aplicados. Aquí tienes ocho preguntas habituales reformuladas para abrir la lectura.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {rewrites.map((r, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
              <div style={{ marginBottom: '.85rem' }}>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.18em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '.3rem' }}>Antes</div>
                <div style={{ color: 'var(--text)', fontSize: '.95rem', fontStyle: 'italic', opacity: .7 }}>&ldquo;{r.before}&rdquo;</div>
              </div>
              <div style={{ marginBottom: '.85rem' }}>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.18em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '.3rem' }}>Después</div>
                <div style={{ color: 'var(--gold)', fontSize: '.95rem', fontStyle: 'italic' }}>&ldquo;{r.after}&rdquo;</div>
              </div>
              <div style={{ paddingTop: '.75rem', borderTop: '1px solid var(--border)' }}>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.18em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '.3rem' }}>Por qué funciona</div>
                <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.7, margin: 0 }}>{r.why}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: When yes/no IS fine */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Cuándo sí/no <em>sí</em> funciona
        </h2>
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', marginBottom: '1rem' }}>
            Nada de esto significa que las lecturas de sí/no estén mal. Una tirada de una sola carta de sí/no es una herramienta rápida y útil para un momento de fricción — debería mandar este mensaje, debería aceptar la reunión, debería ir al encuentro. La estructura encaja con la pregunta: una carta para una decisión que tienes delante ahora mismo.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            El problema empieza cuando el formato sí/no se aplica a una situación que no es realmente binaria — relaciones, carreras, dirección vital, identidad. Para esas, los principios anteriores te servirán mucho mejor. Si una pregunta de sí/no es genuinamente lo que necesitas, usa nuestro <Link href="/es/si-no" style={{ color: 'var(--gold)' }}>Oráculo de Sí/No</Link>. Para cualquier cosa más profunda, replantea antes de barajar.
          </p>
        </div>
      </section>

      {/* 50 Questions by Theme */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.04em' }}>
          50 preguntas para hacer al tarot — por tema
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
          Úsalas como puntos de partida. Las preguntas más fuertes al tarot son abiertas, asumen responsabilidad por tu parte en la situación y preguntan por patrones o guía en lugar de por un desenlace fijo. Adapta la formulación a tu vida real — las cartas responden a preguntas que sientes de verdad.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1rem' }}>
          {([
            {
              theme: 'Sobre ti y crecimiento personal',
              icon: '✦',
              questions: [
                '¿Qué patrón en mi vida está pidiendo ser visto ahora mismo?',
                '¿Qué parte de mí mismo he estado evitando?',
                '¿Qué fortaleza estoy subestimando actualmente en mí?',
                '¿Cómo puedo ser más honesto conmigo mismo esta semana?',
                '¿Qué lección me está enseñando el capítulo actual de mi vida?',
                '¿A qué me estoy aferrando que necesita ser soltado?',
                '¿Qué le está pidiendo mi alma que mi mente sigue desautorizando?',
                '¿Qué historia sobre mí mismo estoy listo para actualizar?',
                '¿Cómo honro mi propio ritmo ahora mismo?',
                '¿Qué aspecto tendría hoy el respeto por mí mismo en mi situación?',
              ],
            },
            {
              theme: 'Amor y relaciones',
              icon: '❦',
              questions: [
                '¿Cuál es la energía que estoy llevando a mi vida amorosa ahora mismo?',
                '¿Qué quiere realmente mi corazón, debajo del ruido?',
                '¿Qué patrón se repite en mis relaciones, y por qué?',
                '¿Cómo puedo amar mejor en mi relación actual?',
                '¿Cómo sería sanar después de mi última conexión?',
                '¿Qué necesita esta relación más de mí en este momento?',
                '¿Qué tengo miedo de decirle a mi pareja?',
                '¿Cómo distingo entre una conexión real y una distracción?',
                '¿Cuál es el papel que esta persona juega en mi crecimiento?',
                '¿Qué haría diferente si confiara en que merezco amor?',
              ],
            },
            {
              theme: 'Carrera y trabajo',
              icon: '◈',
              questions: [
                '¿Cuál es el próximo paso honesto en mi carrera?',
                '¿Qué fortaleza mía está actualmente infrautilizada en el trabajo?',
                '¿Qué está haciendo que mi trabajo actual se sienta pesado?',
                '¿Qué aspecto tendría profesionalmente la alineación con mis valores reales?',
                '¿Cómo puedo presentarme con más plenitud en el trabajo esta semana?',
                '¿Qué estoy evitando hacer que cambiaría mi situación?',
                '¿Para qué me está preparando este capítulo laboral?',
                '¿Cómo puedo liderar desde la sustancia y no desde la actuación?',
                '¿Qué aspecto tiene realmente el éxito para mí, no para la versión de mí que otros esperan?',
                '¿Qué límite en el trabajo necesita ser renegociado?',
              ],
            },
            {
              theme: 'Decisiones y elecciones',
              icon: '★',
              questions: [
                '¿Qué necesito entender antes de tomar esta decisión?',
                '¿Cuál es el coste de decir sí? ¿Cuál es el coste de decir no?',
                '¿Cuál es la pregunta debajo de la pregunta que estoy haciendo?',
                '¿Qué información me sigue faltando?',
                '¿Qué elegiría si no tuviera miedo?',
                '¿Cómo distingo si esto es miedo o intuición?',
                '¿Qué sabe mi cuerpo sobre esta elección que mi mente todavía no admite?',
                '¿De qué se trata realmente esta decisión?',
                '¿Cuál opción me deja más parecido a mí mismo dentro de un año?',
                '¿Qué aspecto tiene aquí un discernimiento honesto?',
              ],
            },
            {
              theme: 'Diario y sombra',
              icon: '☽',
              questions: [
                '¿Qué energía está más viva en mí hoy?',
                '¿Qué necesito escuchar más esta mañana?',
                '¿Cómo puedo trabajar con el día que tengo delante?',
                '¿Qué está pidiendo mi atención ahora mismo?',
                '¿Cuál es el regalo escondido en la dificultad que enfrento?',
                '¿Qué herida antigua está siendo tocada por la situación presente?',
                '¿Qué parte de mí mismo estoy proyectando sobre otra persona?',
                '¿Qué aspecto tendría integrar esta sombra?',
                '¿Qué me agradecerá mi yo futuro por haber hecho hoy?',
                '¿Qué puedo dejar inconcluso esta noche?',
              ],
            },
          ] as const).map(({ theme, icon, questions }) => (
            <div key={theme} style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.85rem', paddingBottom: '.6rem', borderBottom: '1px solid rgba(201,168,76,.15)' }}>
                <span style={{ color: 'var(--gold)', fontSize: '1.1rem' }}>{icon}</span>
                <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.78rem', letterSpacing: '.1em', color: 'var(--gold)', textTransform: 'uppercase' }}>{theme}</span>
              </div>
              <ol style={{ margin: 0, paddingLeft: '1.15rem', color: 'var(--text)', fontSize: '.86rem', lineHeight: 1.7 }}>
                {questions.map((q, i) => (
                  <li key={i} style={{ marginBottom: '.4rem' }}>{q}</li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <Link href="/es/lectura-gratis" style={{ padding: '.8rem 1.6rem', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.35)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Prueba una lectura gratis →
        </Link>
        <Link href="/es/como-leer-tarot" style={{ padding: '.8rem 1.6rem', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Cómo leer el tarot →
        </Link>
        <Link href="/es/como-barajar-tarot" style={{ padding: '.8rem 1.6rem', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Cómo barajar →
        </Link>
      </div>

      {/* FAQ */}
      <section>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.5rem' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
