import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tarot ¿Volverá Mi Ex? — Lectura de 4 Cartas | TarotAxis',
  description: 'Una tirada de tarot de 4 cartas para tener claridad sobre si la reconciliación está en marcha — lo que cada persona siente, qué bloquea el reencuentro y el camino honesto hacia adelante.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/volvera-mi-ex',
    languages: {
      'en': 'https://tarotaxis.com/spreads/will-my-ex-come-back',
      'es': 'https://tarotaxis.com/es/tiradas/volvera-mi-ex',
      'x-default': 'https://tarotaxis.com/spreads/will-my-ex-come-back',
    },
  },
  openGraph: {
    title: 'Tirada de Tarot ¿Volverá Mi Ex? — Lectura de 4 Cartas',
    description: 'Una tirada de tarot de 4 cartas para tener claridad sobre si la reconciliación está en marcha — lo que cada persona siente, qué bloquea el reencuentro y el camino honesto hacia adelante.',
    url: 'https://tarotaxis.com/es/tiradas/volvera-mi-ex',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'Cómo Se Siente Ahora',
    desc: 'El estado emocional presente de tu ex respecto a ti y a la relación, por debajo de lo que se ha dicho en público o publicado en redes. Esta carta atraviesa la actuación de haber pasado página y muestra lo que en realidad está presente cuando se sienta a solas con el recuerdo de ti.',
  },
  {
    num: 2,
    name: 'Cómo Te Sientes Ahora',
    desc: 'Tu verdad emocional honesta — incluidas las partes que quizá te ocultas a ti mismo. A veces echamos de menos a una persona; a veces echamos de menos haber sido elegidos, o conocidos, o la versión de nosotros que éramos dentro de esa relación. Esta carta nombra lo que en realidad está en el centro de tu anhelo.',
  },
  {
    num: 3,
    name: 'Lo Que Bloquea el Reencuentro',
    desc: 'El verdadero obstáculo entre el lugar donde están las cosas y la reconciliación. Puede ser interno — heridas no sanadas, necesidades incompatibles, un patrón que aún no se ha roto — o externo — circunstancias, una tercera persona, distancia, tiempo. Esta carta lo nombra con claridad para que deje de mover los hilos desde la sombra.',
  },
  {
    num: 4,
    name: 'El Camino Más Probable',
    desc: 'Hacia dónde se dirige esto realmente si las energías actuales siguen su curso. No es destino ni garantía. Es la trayectoria — la conclusión natural de las fuerzas ya en movimiento en ambos. Conocer el camino te da la oportunidad de recorrerlo conscientemente o de cambiarlo.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Puede el tarot predecir si mi ex volverá?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tarot no predice en sentido estricto — lee la energía en movimiento en el momento de la lectura y traza hacia dónde es más probable que conduzca. Las personas tienen libre albedrío, las circunstancias cambian y una lectura hecha hoy refleja hoy. Lo que las cartas sí pueden mostrar con honestidad es si la conexión entre ustedes aún carga una energía viva, si tu ex realmente está procesando o realmente está cerrado, y si existen las condiciones para el reencuentro. Toma la lectura como un espejo claro de la energía presente, no como un veredicto sobre el futuro.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuánto tiempo después de una ruptura debo hacer esta lectura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Espera al menos de dos a tres semanas. En el inmediato después de una ruptura la energía está demasiado cruda y demasiado cargada para que la lectura sea útil — tanto la tuya como la suya. Sacarás cartas atravesado por el duelo, ellos estarán moviéndose en su propio impacto, y las cartas reflejarán sobre todo la tormenta en vez de mostrar lo que hay debajo. Esperar permite que el polvo se asiente lo suficiente para que el patrón más profundo se vuelva visible. Si la ruptura es muy reciente, suele ser más útil hacer primero una tirada de sanación o de aterrizaje.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué cartas sugieren que un ex volverá?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El Seis de Copas es la carta clásica del retorno nostálgico — viejas conexiones que reemergen del pasado. El Juicio señala una segunda oportunidad, una llamada de vuelta, un ajuste honesto que puede abrir la puerta a la reconciliación. La Rueda de la Fortuna habla de ciclos que giran y del retorno natural de lo que se ha ido. El Dos de Copas, en especial cuando aparece del derecho tras una lectura difícil, apunta a que el reconocimiento mutuo vuelve a ser posible. Los Enamorados y la Sota de Copas también pueden señalar una nueva apertura emocional desde la otra persona.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué hago si la lectura dice que no volverá?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Honra lo que las cartas te han mostrado y deja que esa honestidad sea el comienzo de tu sanación y no el final de tu esperanza. Un no claro es un regalo extraño — te devuelve tu atención, tu energía y tu tiempo. Pasa la próxima estación en las partes de tu vida que llevan tiempo esperando en silencio que vuelvas a habitarlas. Una tirada centrada en la sanación tras un desamor suele ser el siguiente paso adecuado. Consulta nuestra tirada de sanación tras desamor para una forma estructurada de empezar.',
      },
    },
  ],
}

export default function VolveraMiExPage() {
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
        <span style={{ color: 'var(--gold)' }}>¿Volverá Mi Ex?</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tarot ¿Volverá Mi Ex?
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Una tirada de cuatro cartas para tener claridad sobre si la reconciliación está en marcha — lo que cada persona siente honestamente, lo que se interpone entre ustedes y el camino que las energías actuales son más propensas a recorrer.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['4 Cartas', 'Reconciliación', 'Claridad Honesta'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* About this spread */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Sobre Esta Tirada
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Hay una diferencia significativa entre hacer esta pregunta desde el anhelo y hacerla desde la claridad. Las cartas responden a ambas, pero responden distinto. Una lectura hecha en plena tristeza fresca traerá a la superficie la propia tristeza — los bucles, las negociaciones, las conversaciones ensayadas. Una lectura hecha desde un lugar sereno te mostrará la conexión con más honestidad. Si todavía no puedes pensar en tu ex sin que se te apriete el pecho, la tirada no está lista para ti aún. Dale tiempo y deja que sea el momento justo cuando llegue.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Conviene decir con claridad que una lectura positiva no significa que debas perseguir a tu ex. Las cartas pueden revelar que aún sienten algo fuerte por ti, que la conexión está viva, que el reencuentro es energéticamente posible — y nada de eso responde a la pregunta de si la vuelta sería realmente buena para alguno de los dos. Una relación que terminó por motivos reales no se vuelve sana solo porque el anhelo sea mutuo. Usa esta tirada para ver, no para planear.
          </p>
          <p>
            También hay un valor genuino en hacer esta lectura incluso cuando no quieres que vuelvan. A veces la pregunta latente es lo que mantiene la puerta entreabierta en tu imaginación, y ver la forma honesta de las cosas te da permiso para cerrarla. El cierre es otra forma de retorno — la energía vuelve a ti. Sea lo que sea lo que muestren las cartas, esta tirada está pensada para honrar lo que es real para que practiques encontrarte con tu vida desde ahí.
          </p>
        </div>
      </div>

      {/* Spread Layout */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Las Cuatro Posiciones
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Cuatro cartas sacadas en orden. Cada carta sostiene una capa distinta de la situación — sus sentimientos, los tuyos, el obstáculo y el camino más probable.
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
            <div key={pos.num} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
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
            <div key={item.name} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>¿Lista para sacar tus cuatro cartas?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Usa nuestra herramienta gratuita de tarot para sacar tus cartas y luego vuelve aquí para interpretar cada posición con honestidad.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/lectura-gratis" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Sacar Cartas Ahora
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
