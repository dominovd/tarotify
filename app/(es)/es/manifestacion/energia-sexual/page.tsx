import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tarot para Manifestar Energía Sexual — Lectura de 3 Cartas de Vitalidad | TarotAxis',
  description: 'Una tirada de tarot de 3 cartas para la energía sexual y la vitalidad. Nombra lo que se ha silenciado en ti, reconoce qué activa tu vitalidad y encuentra la práctica que te devuelve a tu propio deseo.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/manifestacion/energia-sexual',
    languages: {
      'en': 'https://tarotaxis.com/manifestation/sexual-energy',
      'es': 'https://tarotaxis.com/es/manifestacion/energia-sexual',
      'x-default': 'https://tarotaxis.com/manifestation/sexual-energy',
    },
  },
  openGraph: {
    title: 'Tirada de Tarot para Manifestar Energía Sexual — Lectura de 3 Cartas',
    description: 'Una tirada de tarot de 3 cartas para la energía sexual y la vitalidad. Nombra lo silenciado, reconoce lo que te activa y encuentra la práctica que te devuelve a tu deseo.',
    url: 'https://tarotaxis.com/es/manifestacion/energia-sexual',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'Lo Que Se Ha Silenciado',
    desc: 'La forma específica en que tu vitalidad ha sido amortiguada — a veces por trauma, a veces por exceso de trabajo, a veces por largos tramos de vida que no te incluyeron. Esta carta nombra la cualidad de sentimiento, sensación o deseo que se ha quedado en silencio. Es la parte de ti que pide volver a sentirse.',
  },
  {
    num: 2,
    name: 'Lo Que Te Activa',
    desc: 'La cualidad, el entorno, la práctica o el tipo de atención que de verdad te devuelve a tu cuerpo y a tu deseo. Suele ser más específico y más ordinario de lo que la gente espera — un tipo particular de música, un tipo particular de soledad, un ritmo particular de tacto. La carta invita a la honestidad en lugar de la performance.',
  },
  {
    num: 3,
    name: 'La Práctica Que Te Devuelve al Deseo',
    desc: 'La práctica pequeña y repetible que reconstruye la relación con tu propia energía erótica y vital. En solitario primero, normalmente. Diaria o casi diaria, normalmente. Esta carta señala el trabajo nada glamoroso y encarnado que, a lo largo de semanas y meses, permite que la vitalidad vuelva a estar en línea sin forzar ni actuar.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Es apropiada esta tirada si soy soltero?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí — y en muchos sentidos es más útil cuando se hace en soledad. Esta tirada trata fundamentalmente de tu relación con tu propia vitalidad, no de tu relación con otra persona. La pareja es opcional; el deseo no lo es. Tanto si has estado soltero una semana como una década, el trabajo de reconocer lo que te silencia, lo que te activa y la práctica que te devuelve a ti mismo te pertenece a ti primero. Una pareja solo puede encontrarte donde ya te has encontrado a ti mismo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Es apropiada esta tirada si soy asexual?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sí. La energía sexual en esta tirada significa fuerza vital y deseo en el sentido más amplio — la disposición a querer, a sentir, a ser conmovido por la belleza, a estar encarnado en una vida que te incluya. La tirada no requiere práctica sexual para ser útil y no asume que la vitalidad deba expresarse a través del sexo. Muchos lectores asexuales encuentran esta lectura genuinamente clarificadora, porque nombra la energía erótica como una cualidad de estar vivo en lugar de un guion de conducta.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Y si la carta de "silenciado" señala un trauma pasado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A veces lo hace, y la tirada debe tomarse en serio cuando ocurre. El tarot puede ser una puerta — una forma de nombrar lo que ha sido difícil de nombrar — pero no es un sustituto del apoyo profesional. Si la primera carta saca a flote algo tierno o desestabilizador, por favor procede con suavidad, ralentiza la lectura y considera trabajar con un terapeuta con formación en trauma junto a cualquier práctica interior. El honor de este trabajo está en no empujar más allá de lo que tu cuerpo te está diciendo.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Debería compartir esta lectura con mi pareja?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No necesariamente, y a menudo no de inmediato. Este trabajo tiende a ser más honesto cuando se hace en privado primero, porque en el momento en que una lectura se realiza para una pareja puede doblarse silenciosamente hacia lo que imaginas que quieren oír. Siéntate con las cartas a solas. Deja que actúen sobre ti durante unas semanas. Si más tarde algo de la lectura quiere ser dicho en voz alta a alguien en quien confías, lo sabrás — y para entonces será tuyo para compartir en lugar de tuyo para negociar.',
      },
    },
  ],
}

export default function ManifestarEnergiaSexualPage() {
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
        <Link href="/es/manifestacion" style={{ color: 'var(--muted)' }}>Manifestación</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Energía Sexual</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>❋</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tarot para Manifestar Energía Sexual
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Una lectura de tres cartas para el trabajo más callado y honesto de volver a tu propia vitalidad. No un guion para la performance — una invitación a reconocer lo que se ha silenciado, lo que te activa y la práctica que devuelve el deseo a la luz.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['3 Cartas', 'Vitalidad', 'Encarnación'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Why this spread */}
      <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Por Qué Esta Tirada
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            De todos los temas de manifestación, la energía sexual es el que más a menudo se nombra mal. La expresión se reduce a actos sexuales, performance y química — pero debajo de la palabra se asienta algo más grande y más honesto. La energía sexual es fuerza vital. Es la disposición a querer, a ser conmovido, a sentir la belleza en el cuerpo. Cuando esto está vivo en una persona, el sexo es una de muchas expresiones de ello; cuando esto está silenciado, ninguna cantidad de técnica o consejo de relación toca el problema real. Esta tirada trata la energía erótica en ese nivel más amplio — como vitalidad, como deseo en tanto fuerza vital — y trabaja desde ahí hacia atrás.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Por esa razón, esta lectura es mejor hacerla a solas y en privado, sin importar tu estado relacional. Tanto si estás soltero, en pareja, atravesando un largo tramo de celibato, trabajando un trauma o simplemente cansado, las preguntas te pertenecen a ti primero. Una tirada hecha delante de (o incluso mentalmente hacia) alguien más tiende a doblarse hacia la tranquilidad o la performance. Hecha en soledad, con la puerta cerrada y el teléfono fuera, las cartas tienen espacio para ser honestas — y tú también. La lectura es la misma para quien la tome: no hay presunción aquí sobre cómo debería ser tu vitalidad.
          </p>
          <p>
            Esta tirada no es una lectura de amor o romance, y la distinción importa. Una tirada de amor trata de la conexión con otra persona — la dinámica, los tiempos, lo no dicho entre dos personas. Esta tirada trata de la relación con tu propio deseo, que tiene su propia vida haya o no alguien más en la habitación. Las dos lecturas pueden complementarse, pero no son sustitutas. Si has estado confundiendo una con otra, este es un buen lugar para empezar a separarlas.
          </p>
        </div>
      </div>

      {/* Spread layout */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Las Tres Cartas
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Una línea simple de tres: lo que se ha silenciado en ti, lo que de verdad activa tu vitalidad y la pequeña práctica diaria que reconstruye la relación con tu propio deseo. Sácalas despacio. Siéntate con cada una antes de pasar a la siguiente.
        </p>

        {/* Visual Layout */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Esquema de Cartas
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {POSITIONS.map(pos => (
              <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                <div style={{ width: 72, height: 108, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1.1rem', color: 'var(--gold)' }}>
                  {pos.num}
                </div>
                <div style={{ fontSize: '.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', maxWidth: 96 }}>{pos.name}</div>
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>¿Listo para sentarte con tus tres cartas?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Haz esta lectura en privado, sin prisa. Acompáñala con la tirada de amor o salud si una imagen más completa honraría la pregunta que de verdad te estás haciendo.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/manifestacion/amor" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Tirada de Amor
          </Link>
          <Link href="/es/manifestacion/salud" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Tirada de Salud
          </Link>
          <Link href="/es/manifestacion" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Todas las Tiradas de Manifestación
          </Link>
        </div>
      </div>
    </div>
  )
}
