import type { Metadata } from 'next'
import Link from 'next/link'
import EmailCapture from '@/components/EmailCapture'

export const metadata: Metadata = {
  title: 'Tarot para principiantes — Tus primeros pasos con las cartas | TarotAxis',
  description: 'Una guía completa de tarot para principiantes. Qué son las cartas, cómo empezar a leer, qué tiradas probar primero y los recursos para aprender durante tu primer mes de práctica.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tarot-para-principiantes',
    languages: {
      'en': 'https://tarotaxis.com/tarot-for-beginners',
      'es': 'https://tarotaxis.com/es/tarot-para-principiantes',
      'x-default': 'https://tarotaxis.com/tarot-for-beginners',
    },
  },
  openGraph: {
    title: 'Tarot para principiantes — Tus primeros pasos con las cartas',
    description: 'Una guía completa de tarot para principiantes. Qué son las cartas, cómo empezar a leer y qué hacer durante tu primer mes de práctica.',
    url: 'https://tarotaxis.com/es/tarot-para-principiantes',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarot para principiantes — Tus primeros pasos con las cartas | TarotAxis',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cualquiera puede aprender a leer el tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. El tarot es una práctica que se aprende, no un don heredado. Lo que te pide es disposición: disposición a ser honesto con lo que ves en las cartas, disposición a prestarle atención a la práctica, y disposición a dedicarle tiempo. Al principio no hace falta ninguna capacidad intuitiva especial, y los lectores que desarrollan la intuición más fuerte suelen ser los que simplemente aparecieron de forma constante. La curiosidad importa mucho más que cualquier talento innato.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuál es la mejor baraja de tarot para principiantes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La baraja Rider-Waite-Smith es la recomendación estándar, y por buenos motivos. Casi cada libro, guía y recurso en línea modernos utilizan sus imágenes y estructura como referencia, incluyendo los significados de este sitio. Empezar con una baraja que coincida con tu material de aprendizaje elimina una gran fuente de fricción. Una vez te sientas cómodo, puedes ramificarte hacia barajas con distintos estilos artísticos.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto se tarda en aprender el tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La familiaridad básica con las 78 cartas lleva de uno a tres meses de práctica regular. Una lectura cómoda y fluida para ti y para otros suele tomar de seis a doce meses. La maestría, en el sentido en que la describen los lectores más experimentados, es una búsqueda de por vida — y en realidad no es el objetivo. El tarot es menos una materia que conquistar que una práctica con la que convivir. La mayoría de los lectores descubren que las cartas les siguen enseñando cosas nuevas décadas después.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Tengo que memorizar los significados de las 78 cartas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. La memorización es el camino lento, y produce lecturas rígidas y frágiles. Es mucho mejor trabajar con las cartas a lo largo del tiempo: sacar una al día, sentarte con ella, anotar lo que notas y luego consultar una referencia. Tras unos meses, las cartas se vuelven familiares de la misma forma que las caras de un barrio se vuelven familiares: por exposición repetida, no por estudio deliberado. Confía en la práctica; los significados se asientan por sí solos.',
      },
    },
  ],
}

const essentials = [
  {
    name: 'Una baraja de tarot',
    body: 'La Rider-Waite-Smith es la más referenciada. Cualquier baraja que te hable servirá, pero elige una y quédate con ella.',
    href: '/es',
    cta: 'Explorar',
  },
  {
    name: '10–15 minutos de silencio',
    body: 'No necesitas un altar ni velas. Necesitas tiempo sin interrupciones. Las mañanas tienden a ser la franja más constante.',
  },
  {
    name: 'Un diario',
    body: 'Un simple cuaderno donde anotar la carta, tu reacción y lo que se ha desarrollado durante el día. Aquí es donde el aprendizaje se acumula.',
    href: '/es/diario-de-tarot',
    cta: 'Guía del diario',
  },
  {
    name: 'Una buena pregunta',
    body: 'No "¿qué pasará?" sino "¿qué necesito ver ahora mismo?". Preguntas mejores producen lecturas mejores — siempre.',
    href: '/es/como-preguntar-al-tarot',
    cta: 'Cómo preguntar',
  },
]

const weeks = [
  {
    n: '1',
    title: 'Conoce los Arcanos Mayores',
    body: 'Saca una carta al día solo de los 22 Arcanos Mayores — las cartas con nombre desde El Loco hasta El Mundo. Lee sobre cada una en una referencia. Anota tu reacción inmediata, sin filtros, antes de consultar el significado del libro. Los Arcanos Mayores describen las fuerzas y transiciones más grandes de una vida; conocerlos primero te da la arquitectura antes que los muebles.',
    href: '/es/cartas',
    cta: 'Explorar los Arcanos Mayores →',
  },
  {
    n: '2',
    title: 'Añade el Sí/No y una carta del día',
    body: 'Empieza cada mañana con una sola carta de la baraja completa (o quédate con los Mayores si prefieres). Cuando surja una pregunta real durante el día, prueba el oráculo de Sí/No para un chequeo rápido. Nota la diferencia entre pedir guía a las cartas y pedirles que tomen las decisiones por ti — lo primero funciona, lo segundo no.',
    href: '/es/como-preguntar-al-tarot',
    cta: 'Sobre hacer mejores preguntas →',
  },
  {
    n: '3',
    title: 'Prueba tu primera tirada',
    body: 'Pasa de una carta a tres. La tirada de tres cartas es la introducción clásica: pasado, presente y futuro es la disposición tradicional, pero también puedes usarla para situación, acción y resultado, o mente, cuerpo y espíritu. Tres cartas te obligan a leer en relación, que es donde el tarot empieza a cobrar vida.',
    href: '/es/lectura-gratis',
    cta: 'Tirada de tres cartas →',
  },
  {
    n: '4',
    title: 'Trabaja con toda la baraja',
    body: 'Añade los 56 Arcanos Menores. Aprende los cuatro palos — Bastos, Copas, Espadas y Pentáculos — y qué gobierna cada uno. Una vez los palos te resulten familiares, prueba la Cruz Celta cuando una situación realmente merezca la atención de diez cartas. No te apresures; la Cruz Celta recompensa la paciencia y castiga la ambición.',
    href: '/es',
    cta: 'Los cuatro palos →',
  },
]

const mistakes = [
  {
    name: 'Pedirle a las cartas que decidan por ti',
    body: 'El tarot describe; no decide. Usa las cartas para entender lo que está en juego, y luego elige por ti mismo.',
  },
  {
    name: 'Volver a barajar porque no te ha gustado la respuesta',
    body: 'Si estás preguntando otra vez de inmediato, no estás haciendo una pregunta nueva. Estás buscando una respuesta distinta. Espera, reflexiona y vuelve a la pregunta más tarde.',
  },
  {
    name: 'Saltarte las cartas invertidas porque "se sienten negativas"',
    body: 'Las inversiones son matiz, no castigo. A menudo señalan dónde algo está bloqueado, interiorizado o aún en desarrollo — información que realmente necesitas.',
  },
  {
    name: 'Tratar cada lectura como de vida o muerte',
    body: 'La mayoría de lecturas son diagnósticas, no oraculares. Describen el paisaje presente para que te muevas por él con más conciencia, no para entregarte un destino.',
  },
  {
    name: 'Usar demasiadas barajas demasiado pronto',
    body: 'Elige una baraja y vive con ella al menos tres meses. La fluidez viene de la profundidad, no de la variedad. Las barajas nuevas son emocionantes; también son una forma de evitar el trabajo más difícil de conocer una a fondo.',
  },
]

const resources = [
  { href: '/es/como-leer-tarot', name: 'Cómo leer el tarot', body: 'La práctica fundamental — desde barajar hasta interpretar.' },
  { href: '/es/como-barajar-tarot', name: 'Cómo barajar el tarot', body: 'Técnicas, preguntas comunes y para qué sirve realmente barajar.' },
  { href: '/es/como-limpiar-cartas-de-tarot', name: 'Cómo limpiar las cartas del tarot', body: 'Cuándo y cómo limpiar una baraja — y cuándo no es necesario.' },
  { href: '/es/como-preguntar-al-tarot', name: 'Cómo hacer preguntas al tarot', body: 'La única habilidad que mejora cada lectura que harás en tu vida.' },
  { href: '/es/diario-de-tarot', name: 'Llevar un diario de tarot', body: 'Qué anotar, cómo estructurar las entradas y por qué importa.' },
  { href: '/es/oraculo-vs-tarot', name: 'Oráculo vs Tarot', body: 'Las diferencias entre cartas oraculares y tarot, y cuándo usar cada una.' },
  { href: '/es/carta-del-dia', name: 'Carta del día', body: 'Una sola carta cada mañana para enfocar tu día.' },
  { href: '/es/lectura-gratis', name: 'Lectura gratis', body: 'Tirada de tres cartas online — pasado, presente y futuro.' },
]

export default function TarotParaPrincipiantesPage() {
  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        <Link href="/es" style={{ color: 'var(--muted)' }}>Inicio</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Tarot para principiantes</span>
      </nav>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.2em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Empieza aquí
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '1rem', lineHeight: 1.25 }}>
          Tarot para principiantes
        </h1>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.95rem', marginBottom: '1rem' }}>
          El tarot es un sistema de 78 imágenes arquetípicas diseñadas para reflejar la experiencia interna al lector. Las cartas no predicen el futuro y no tienen opiniones propias. Lo que hacen es ofrecer un espejo estructurado — un vocabulario de símbolos lo bastante rico como para describir casi cualquier situación humana, y lo bastante disciplinado como para empujar más allá del relato superficial que ya te estás contando.
        </p>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.95rem' }}>
          Las únicas habilidades que necesitas para empezar son la disposición a ser honesto y la disposición a mirar. Las cartas hacen el resto. No necesitas un maestro, un linaje ni una creencia particular sobre cómo funciona el tarot. Necesitas una baraja, un poco de tiempo y la paciencia para dejar que la práctica se vuelva familiar. Todo lo demás en esta página está al servicio de eso.
        </p>
      </div>

      {/* What You Need to Get Started */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
          Lo que necesitas para empezar
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '.85rem' }}>
          {essentials.map(({ name, body, href, cta }) => (
            <div key={name} style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.4rem' }}>{name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.7, margin: 0, flex: 1 }}>{body}</p>
              {href && cta && (
                <Link href={href} style={{ display: 'inline-block', marginTop: '.85rem', color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.08em', textDecoration: 'none', textTransform: 'uppercase' }}>
                  {cta} →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Your First Month */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem' }}>
          Tu primer mes — Una ruta de 4 semanas
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          Un currículo sencillo y secuenciado para llevarte desde abrir la caja hasta hacer una tirada real. Cada semana se construye sobre la anterior.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {weeks.map(({ n, title, body, href, cta }) => (
            <div key={n} style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginBottom: '.6rem' }}>
                <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: 'rgba(201,168,76,.12)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.82rem' }}>
                  {n}
                </div>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.18em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '.25rem' }}>Semana {n}</div>
                  <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem' }}>{title}</div>
                </div>
              </div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.85, margin: '0 0 .85rem' }}>{body}</p>
              <Link href={href} style={{ color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.74rem', letterSpacing: '.08em', textDecoration: 'none', textTransform: 'uppercase' }}>
                {cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Common Beginner Mistakes */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Errores comunes de principiante
        </h2>
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {mistakes.map(({ name, body }, i) => (
              <div key={i} style={{ paddingBottom: i === mistakes.length - 1 ? 0 : '1rem', borderBottom: i === mistakes.length - 1 ? 'none' : '1px solid var(--border)' }}>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', marginBottom: '.35rem' }}>{name}</div>
                <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.75, margin: 0 }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Practise */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Cómo practicar
        </h2>
        <div style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', marginBottom: '1rem' }}>
            La forma de una práctica de tarot sólida es poco glamurosa: una carta al día, unas líneas en un diario, una lectura cuando realmente la necesitas. La constancia le gana a la intensidad. Diez minutos cada mañana te enseñarán más en seis meses que una sesión de dos horas una vez al mes en tres años. Las cartas recompensan al lector que aparece.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            Llevar un diario es la otra mitad de la práctica. Anota la carta que has sacado, lo que pensaste de inmediato y, al final del día, lo que realmente ha ocurrido. Los patrones surgen rápidamente. Tras unos meses tendrás un comentario personal sobre la baraja que te será más útil que cualquier libro. La alfabetización en tarot consiste sobre todo en horas con las cartas, no en una técnica concreta; la técnica está al servicio de las horas.
          </p>
        </div>
      </section>

      {/* Recommended First Resources */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem' }}>
          Primeros recursos recomendados
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          Una lista corta y comisariada del resto de TarotAxis. Cada uno se apoya en el terreno que ya has cubierto aquí.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '.85rem' }}>
          {resources.map(({ href, name, body }) => (
            <Link key={href} href={href} style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', textDecoration: 'none', display: 'block' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.4rem' }}>{name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.82rem', lineHeight: 1.7, margin: 0 }}>{body}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.5rem' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Email capture */}
      <div style={{ marginBottom: '2.5rem' }}>
        <EmailCapture
          source="beginners-es"
          headline="Aprende una carta al día, sin esfuerzo"
          copy="Recibe un Arcano Mayor en tu correo cada mañana, con una breve reflexión. A las dos semanas la baraja empieza a sentirse como una vieja amiga."
          cta="Empezar a aprender"
        />
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center' }}>
        <div style={{ color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.78rem', letterSpacing: '.2em', textTransform: 'uppercase', opacity: .55, marginBottom: '1.25rem' }}>
          ✦ Comienza
        </div>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/carta-del-dia" style={{ padding: '.8rem 1.6rem', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.35)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
            Empezar con la carta de hoy →
          </Link>
          <Link href="/es/lectura-gratis" style={{ padding: '.8rem 1.6rem', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
            Lectura gratis →
          </Link>
          <Link href="/es/cartas" style={{ padding: '.8rem 1.6rem', background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
            Ver todas las cartas →
          </Link>
        </div>
      </div>
    </div>
  )
}
