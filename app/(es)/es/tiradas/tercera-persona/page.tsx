import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tercera Persona — Triángulo, Infidelidad e Influencia Externa | TarotAxis',
  description: 'Una tirada de 4 cartas para relaciones afectadas por una tercera persona — confirmada, sospechada o tirando por los bordes. Claridad honesta sobre el papel de cada uno.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/tercera-persona',
    languages: {
      'en': 'https://tarotaxis.com/spreads/third-party',
      'es': 'https://tarotaxis.com/es/tiradas/tercera-persona',
      'x-default': 'https://tarotaxis.com/spreads/third-party',
    },
  },
  openGraph: {
    title: 'Tirada de Tercera Persona — Triángulo, Infidelidad e Influencia Externa',
    description: 'Una tirada de 4 cartas para relaciones afectadas por una tercera persona — confirmada, sospechada o tirando por los bordes. Claridad honesta sobre el papel de cada uno.',
    url: 'https://tarotaxis.com/es/tiradas/tercera-persona',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'Tu Posición',
    desc: 'Tu estado honesto en esta dinámica — lo que sientes, lo que estás eligiendo y las partes de ti que pueden estar atrayendo esta situación. No culpa, sino patrón. Los lugares donde has estado ausente, hambrienta o calladamente cómplice.',
  },
  {
    num: 2,
    name: 'La Posición de Tu Pareja',
    desc: 'Lo que tu pareja en realidad está viviendo y eligiendo, bajo la historia superficial que se cuenta o te cuenta. Esta carta a menudo complica las narrativas simples — ni villano ni víctima, sino una persona tomando decisiones dentro de un contexto.',
  },
  {
    num: 3,
    name: 'La Posición de la Tercera Persona',
    desc: 'Lo que esta persona aporta al campo — a veces de forma deliberada, a veces inconscientemente, a veces simplemente por existir en un lugar donde es necesitada o deseada. Sus motivos no siempre son lo que parecen desde tu lado del triángulo.',
  },
  {
    num: 4,
    name: 'El Camino a Través',
    desc: 'La forma genuina de avanzar — que puede ser una conversación honesta, la separación, poner límites, o simplemente ver la dinámica con suficiente claridad para elegir con los ojos abiertos. No un veredicto sobre quién tiene razón, sino el siguiente paso más verdadero.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Puede el tarot confirmar una infidelidad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. El tarot lee patrones energéticos y emocionales, no hechos. Una tirada puede mostrarte que el campo está cargado de secreto, que algo se está ocultando, que el duelo se sienta al centro de una pareja — pero no puede decirte que una persona concreta se encontró con otra persona concreta en un hotel concreto. Si necesitas hechos, persíguelos por otros medios: una conversación directa, tiempo, observación, ayuda profesional. Usa el tarot para lo que hace bien — clarificar tu propia percepción y ayudarte a elegir cómo responder a lo que ves.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Debería hacer esta tirada si sospecho infidelidad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí, con cautela. Haz esta lectura solo cuando estés lo bastante aterrizada para recibir lo que aparezca — no a las tres de la mañana después de revisarle el teléfono, no en medio de un espiral de pánico. La sospecha tiene su propia gravedad y distorsionará la interpretación si lees mientras está en plena fuerza. Siéntate con las cartas como si genuinamente quisieras claridad y no pruebas. Si la parte de ti que conduce la lectura busca sobre todo confirmación, pausa. Vuelve cuando puedas decir con honestidad que quieres ver lo que es, no lo que temes.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si la tercera persona no es una persona, sino otra cosa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La tirada funciona para cualquier fuerza externa que parta la relación. Un trabajo que consume del todo a la pareja, una adicción que vive entre ustedes, una suegra o un familiar cuya presencia es corrosiva, un ex fallecido cuyo recuerdo ocupa más espacio que la pareja viva — todos funcionan como tercera persona. Lee la posición tres como la energía o la entidad, no como una persona. La dinámica es la misma: hay algo en la relación que no pertenece a ustedes dos, y la claridad sobre su papel es el comienzo de elegir qué hacer al respecto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué cartas sugieren una infidelidad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ninguna carta sola confirma una infidelidad, pero varias se agrupan alrededor del tema. El Siete de Espadas carga secreto y ocultamiento. El Cinco de Copas habla del duelo y de lo que se ha perdido. El Tres de Espadas es el clásico triángulo de la ruptura. La Luna apunta a lo oculto, a la ilusión, a cosas no vistas con claridad. El Diablo sugiere enredo, compulsión o un vínculo del que alguien no puede alejarse fácilmente. Los Enamorados invertidos pueden indicar desalineación o compromiso roto. Léelas como preguntas con las que sentarte y no como respuestas — ninguna, sola o en conjunto, es confirmación de nada más allá de una atmósfera que merece ser examinada con honestidad.',
      },
    },
  ],
}

export default function TerceraPersonaPage() {
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
        <span style={{ color: 'var(--gold)' }}>Tercera Persona</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>△</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tarot Tercera Persona
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Una tirada de cuatro cartas para triángulos amorosos, sospechas de infidelidad y cualquier influencia externa que tira de una relación. No está diseñada para repartir culpas — está diseñada para mostrar la posición honesta de cada persona para que puedas elegir con claridad.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['4 Cartas', 'Triángulo', 'Dinámicas Ocultas'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* About this spread */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Sobre Esta Tirada
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Esta es una de las tiradas más cargadas emocionalmente del tarot, y esa carga es justamente lo que la vuelve peligrosa si se lee con descuido. Hecha desde la celosía, la sospecha o la búsqueda de pruebas, las cartas en su mayoría te devolverán tu propia activación — cada Siete de Espadas parecerá confirmación, cada Luna parecerá traición. Antes de barajar, pregúntate si buscas claridad o munición. Solo lo primero produce una lectura útil.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            La tirada sirve tanto para terceras personas confirmadas como sospechadas, pero el trabajo es distinto en cada caso. Con una tercera persona confirmada, la lectura te ayuda a ver la forma de lo que es, incluidas las partes que quizá has minimizado o dramatizado en exceso. Con una sospechada, te ayuda a ubicar la fuente de tu inquietud — a veces esa fuente es el comportamiento de tu pareja, a veces es una herida no sanada de una relación anterior, a veces es tu intuición hablando claro. Las cartas no siempre te dirán cuál, pero te darán algo más honesto que tu peor escenario con lo que trabajar.
          </p>
          <p>
            Ten claro qué harás con lo que veas. Una lectura revela; tu discernimiento actúa. La tirada no te autoriza a confrontar, a irte, a perdonar ni a callar. Esas son tus decisiones, tomadas con toda la demás información que tienes sobre tu vida, tu pareja y tú misma. Las cartas suman una capa más de honestidad a esa decisión. No la sustituyen.
          </p>
        </div>
      </div>

      {/* Spread layout */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Las Cuatro Posiciones
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Coloca las tres primeras cartas en un triángulo — tú, tu pareja, la tercera persona — y pon la cuarta debajo como el camino a través.
        </p>

        {/* Visual Layout */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Disposición de Cartas
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
          Preguntas Frecuentes
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Ver la dinámica con claridad</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Saca tus cuatro cartas cuando estés lo bastante aterrizada para recibir lo que muestren. La claridad honesta es el comienzo de cualquier elección genuina.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/tiradas/me-quedo-o-me-voy" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Tirada Me Quedo o Me Voy
          </Link>
          <Link href="/es/tiradas/sanar-tras-desamor" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Sanar Tras Desamor
          </Link>
          <Link href="/es/tiradas/amor" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Tirada de Amor
          </Link>
        </div>
      </div>
    </div>
  )
}
