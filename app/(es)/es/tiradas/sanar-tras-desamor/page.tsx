import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tarot para Sanar tras el Desamor — Lectura de 5 Cartas | TarotAxis',
  description: 'Una tirada de 5 cartas para sanar tras una ruptura. Procesa la pérdida, encuentra la lección, reconoce lo que te llevas contigo y descubre el próximo paso.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/sanar-tras-desamor',
    languages: {
      'en': 'https://tarotaxis.com/spreads/healing-after-heartbreak',
      'es': 'https://tarotaxis.com/es/tiradas/sanar-tras-desamor',
      'x-default': 'https://tarotaxis.com/spreads/healing-after-heartbreak',
    },
  },
  openGraph: {
    title: 'Tirada de Tarot para Sanar tras el Desamor — Lectura de 5 Cartas',
    description: 'Una tirada de 5 cartas para sanar tras una ruptura. Procesa la pérdida, encuentra la lección, reconoce lo que te llevas contigo y descubre el próximo paso.',
    url: 'https://tarotaxis.com/es/tiradas/sanar-tras-desamor',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'Lo que aún cargo',
    desc: 'El duelo, la rabia, el anhelo, el arrepentimiento o la vergüenza específicos que todavía no han sido liberados. Esta carta nombra el peso que sigue presente de forma activa — no la versión del desamor que cuentas a los demás, sino la que cargas a las tres de la madrugada cuando nadie te ve.',
  },
  {
    num: 2,
    name: 'Lo que esta relación me enseñó',
    desc: 'La sabiduría genuina de este capítulo — no lo que «deberías» haber aprendido, sino lo que realmente sabes ahora sobre el amor y sobre ti. Esta carta honra la lección verdadera, que suele ser más silenciosa y menos ordenada que la que escribirías en un diario.',
  },
  {
    num: 3,
    name: 'Lo que es mío para quedarme',
    desc: 'Las cualidades, capacidades y autoconocimiento ganados a través de esta relación que te pertenecen sin importar cómo terminó. El crecimiento fue real aunque la unión no fuera duradera. Esta carta te pide reconocer lo que se ha vuelto permanentemente tuyo.',
  },
  {
    num: 4,
    name: 'Lo que es mío para soltar',
    desc: 'La historia, el rol, la identidad o el apego que necesita ser dejado en el suelo para hacer espacio a lo que viene. Esto no es la persona — es la versión de ti que se construyó alrededor de ella, o la narrativa que ya cumplió su función.',
  },
  {
    num: 5,
    name: 'Mi próximo paso',
    desc: 'La acción práctica o interior que más apoyaría la sanación ahora mismo — no el viaje entero, solo el próximo paso. Esta carta se niega a abrumarte con un plan a cinco años. Te ofrece la única cosa que vale la pena hacer esta semana.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo después de una ruptura debería hacer esta tirada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Espera al menos de dos a cuatro semanas. El primer tramo tras una ruptura es para sentir, no para analizar — el sistema nervioso necesita tiempo para registrar lo que ha ocurrido antes de que la mente pueda darle un sentido honesto. Necesitas un suelo lo suficientemente estable para recibir lo que traen las cartas, porque parte de ello no será halagüeño ni cómodo. Si todavía estás en la fase aguda en la que no puedes comer ni dormir, la tirada simplemente te devolverá ese caos. Espera a que el peor de los ruidos se haya asentado.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Y si las cartas revelan sentimientos para los que aún no estoy lista?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Deja la lectura a un lado y vuelve a ella más tarde. Las cartas son un espejo, no un plazo — nada de lo que muestran debe procesarse hoy. Escribe lo que ha aparecido, cierra el diario, y vuelve dentro de una semana o un mes cuando tengas más capacidad. La sanación del desamor no es lineal, y una tirada que resultó insoportable en octubre puede convertirse en justo lo que necesitabas para enero. La sabiduría espera. Honra tu propio ritmo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Puede esta tirada ayudarme si yo fui quien provocó la ruptura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí — el duelo funciona en ambas direcciones, a menudo de forma más silenciosa para quien decide irse. La persona que termina una relación rara vez queda libre de dolor; simplemente carga una versión distinta de él, mezclada con culpa, duda y el extraño duelo de llorar a alguien que sigue vivo. Esta tirada no asume inocencia ni victimismo de ningún lado. Pregunta qué se sigue cargando, qué se aprendió y qué viene después — preguntas que pertenecen a cualquiera, sin importar quién cerró la puerta.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Volveré a amar después de esto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí — la verdadera pregunta es cuándo te sentirás lista, no si el amor regresará. La capacidad de amar no se agota con el desamor; se reconfigura. Quizás ames de forma distinta la próxima vez, más despacio o con más cuidado, y eso no es un fracaso sino una respuesta honesta a lo que ahora sabes. La mayoría de las personas vuelven a amar, y muchas describen lo que viene después como más tranquilo, más estable y más reconocible que lo anterior. El tiempo es tuyo.',
      },
    },
  ],
}

export default function SanarTrasDesamorPage() {
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
        <span style={{ color: 'var(--gold)' }}>Sanar tras el Desamor</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>♡</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tarot para Sanar tras el Desamor
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Una tirada de cinco cartas para el trabajo que viene después de que lo peor del duelo haya pasado. No se trata de recuperarles, no se trata de fingir que estás bien — se trata de la tarea más lenta y honesta de recuperarte a ti misma.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['5 Cartas', 'Sanación', 'Recuperación'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* About */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Sobre esta tirada
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            El desamor casi siempre tarda más de lo que la gente espera — más de lo que los amigos pueden sostenerte, más de lo que la cultura de la productividad quiere reconocer, más de lo que tú misma creíste posible cuando empezó. Apresurarlo es el error más común. La presión por «haberlo superado ya» en algún plazo imaginario no acelera la sanación; simplemente empuja el duelo bajo tierra, donde tiende a esperar hasta la próxima relación para resurgir. La lentitud aquí no es debilidad. Es la forma real del trabajo.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Esta tirada se construye en torno a la distinción entre sanar y olvidar. Las cartas no borran la relación, ni a la persona, ni el amor que fue real. Lo integran — te ayudan a llevar la experiencia sin estar definida por ella. Seguirás recordando. Es posible que todavía sientas pequeñas olas de duelo durante mucho tiempo. Lo que cambia es que el recuerdo deja de ser una herida y empieza a ser un capítulo — terminado, honrado y tuyo para conservar sin que te cueste el presente.
          </p>
          <p>
            El momento adecuado para esta lectura no es la primera semana, cuando lo crudo necesita ser sentido más que analizado, y tampoco años después, cuando llevas esperando permiso para volver a mirarlo. En algún punto entre unas semanas y varios meses, cuando puedes pensar en esa persona sin que la habitación gire, pero las lecciones aún no han aterrizado del todo — ese es el momento en el que la tirada hace su mejor trabajo. Si no estás segura de si es el momento, el hecho de que estés leyendo esto suele ser un sí silencioso.
          </p>
        </div>
      </div>

      {/* Spread Layout */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Las cinco posiciones
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Saca las cinco cartas en orden, respirando entre cada una. La secuencia importa — pasas de lo que aún cargas, a lo que aprendiste, a lo que conservas y lo que sueltas, y finalmente hacia un único próximo paso honesto.
        </p>

        {/* Visual Layout */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Disposición de cartas
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {POSITIONS.map(pos => (
              <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                <div style={{ width: 72, height: 108, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1.1rem', color: 'var(--gold)' }}>
                  {pos.num}
                </div>
                <div style={{ fontSize: '.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', maxWidth: 72 }}>{pos.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {POSITIONS.map(pos => (
            <div key={pos.num} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.8rem', color: 'var(--gold)' }}>
                {pos.num}
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.88rem', color: 'var(--gold)', marginBottom: '.5rem' }}>{pos.name}</div>
                <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{pos.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>¿Lista para empezar el trabajo?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Saca tus cartas con nuestra herramienta de lectura gratuita y vuelve aquí para interpretar cada posición a tu propio ritmo.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/lectura-gratis" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Sacar Cartas Ahora
          </Link>
          <Link href="/es/tiradas/que-bloquea-mi-amor" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ¿Qué bloquea mi amor?
          </Link>
          <Link href="/es/tiradas/que-necesito-sanar" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ¿Qué necesito sanar?
          </Link>
          <Link href="/es/tiradas/amor" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Tirada de Amor
          </Link>
        </div>
      </div>
    </div>
  )
}
