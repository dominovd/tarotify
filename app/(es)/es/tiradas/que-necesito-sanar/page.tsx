import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '¿Qué Necesito Sanar? Tirada de Tarot — Lectura de Trabajo Interior de 3 Cartas | TarotAxis',
  description: 'Una tirada de tarot de 3 cartas para identificar la herida interior que pide atención. Nombra la herida, comprende su origen y encuentra el próximo paso hacia la integración.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/que-necesito-sanar',
    languages: {
      'en': 'https://tarotaxis.com/spreads/what-do-i-need-to-heal',
      'es': 'https://tarotaxis.com/es/tiradas/que-necesito-sanar',
      'x-default': 'https://tarotaxis.com/spreads/what-do-i-need-to-heal',
    },
  },
  openGraph: {
    title: '¿Qué Necesito Sanar? Tirada de Tarot — Lectura de Trabajo Interior de 3 Cartas',
    description: 'Una tirada de tarot de 3 cartas para identificar la herida interior que pide atención, su origen y el próximo paso hacia la integración.',
    url: 'https://tarotaxis.com/es/tiradas/que-necesito-sanar',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'La herida',
    desc: 'El dolor específico, el patrón o la experiencia no integrada que pide atención ahora mismo. Suele ser más antiguo que el detonante actual — el momento presente simplemente lo ha hecho audible. La carta nombra qué parte de ti está genuinamente tierna, no la que sospechas que «debería» ser atendida.',
  },
  {
    num: 2,
    name: 'Su origen',
    desc: 'Dónde se formó la herida por primera vez — la experiencia temprana, la dinámica relacional o el momento que enseñó el patrón protector. Esta carta no es sobre culpa; es sobre contexto. Entender el origen le da a la herida una historia coherente y afloja su agarre sobre el presente.',
  },
  {
    num: 3,
    name: 'El camino de integración',
    desc: 'No cómo arreglarla, sino cómo estar con ella. La postura interior, la práctica o el cambio que permite que la herida se convierta en sabiduría en vez de en un sistema meteorológico abierto. Esta carta describe la relación que se te invita a construir con esta parte de ti.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Cuál es la diferencia entre esta tirada y la terapia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El tarot ilumina; la terapia integra. Una tirada como esta puede nombrar una herida con una claridad sorprendente y darte lenguaje para algo que llevabas cargando sin palabras — pero nombrar es solo el primer movimiento de la sanación. El trabajo más lento y relacional de desenredar patrones viejos, de regular un sistema nervioso que ha aprendido a tensarse, y de reescribir guiones de apego pertenece a la terapia, al trabajo somático o a otro profesional cualificado. Las cartas trabajan junto a ese trabajo, nunca como sustituto.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Y si la herida que aparece es abrumadora?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Deja la lectura a un lado y vuelve a ella. Siéntate con alguien de confianza — una amiga, una terapeuta, una línea de apoyo — y deja que el material sea testimoniado en vez de tragado a solas. Las cartas no te exigen enfrentarte a nada en una sola sesión, y el ritmo es parte de la sanación, no un fracaso de ella. Si lo que sale toca duelo, trauma o pensamientos de hacerte daño, por favor contacta con una profesional cualificada. Una tirada es una puerta, no una instrucción.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Pueden las heridas sanar por completo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Algunas sí; muchas no, y eso no es un fracaso. La integración — en vez del borrado — es la meta realista y generosa. Una herida que ha sido vista, nombrada y a la que se le ha dado significado deja de ser un cable expuesto. Se convierte en una cicatriz que te informa sin emboscarte. Puede que aún sientas su forma en ciertos días, especialmente en aniversarios o ante detonantes concretos, pero ya no dirige el espectáculo. La sabiduría sacada de heridas reales es una de las cosas más útiles que una persona puede cargar.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Con qué frecuencia puedo hacer esta tirada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No más de una vez al mes, y a menudo menos. Las tiradas de trabajo interior no son lecturas diarias. El material que sacan a la superficie necesita tiempo para asentarse, para ser sentido en la vida diaria, para ser probado contra la fricción de los días ordinarios. Sacar la misma tirada la semana siguiente tiende a producir ruido en vez de claridad, porque nada se ha movido aún dentro de ti. Date al menos cuatro semanas entre lecturas — seis suele ser mejor — y escribe en un diario en el intervalo.',
      },
    },
  ],
}

export default function QueNecesitoSanarPage() {
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
        <span style={{ color: 'var(--gold)' }}>¿Qué necesito sanar?</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>❋</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          Tirada de Tarot ¿Qué Necesito Sanar?
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          Una tirada de tres cartas para trabajo interior, trabajo de sombra y la preparación silenciosa que a menudo precede a un nuevo amor. No es terapia — pero sí un espejo útil. Úsala para identificar lo que pide ser sentido, dónde comenzó, y cómo caminar con ello a partir de aquí.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['3 Cartas', 'Trabajo Interior', 'Sanación'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* Energy / About */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Sobre esta tirada
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Hay una diferencia significativa entre la sanación como arreglo y la sanación como integración. El modelo del arreglo trata la herida como un problema a resolver, un fallo a eliminar antes de que la vida pueda continuar. La integración trata esa misma herida como información — un lugar tierno que, una vez reconocido y al que se le hace sitio, deja de distorsionar todo lo que la rodea. Esta tirada pertenece a la segunda tradición. No te prometerá quitar el dolor. Te ayudará a dejar de pelearte con él.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            Nombrar una herida tiene su propio efecto sanador, antes incluso de que empiece cualquier trabajo posterior. La mayor parte del dolor interior vive en un registro sin palabras: un apretón en el pecho cuando llama una persona concreta, un sobresalto que no sabes explicar, una historia en la que te sigues encontrando dentro. Cuando las cartas le ponen nombre a ese patrón — abandono, necesidad no cubierta, una versión más joven de ti todavía esperando a alguien que nunca vino — el cuerpo a menudo suelta una respiración contenida. El reconocimiento en sí mismo es medicina, y es lo primero que esta tirada ofrece.
          </p>
          <p>
            Hay momentos en los que esta tirada no es suficiente. Si lo que aparece es abrumador, si toca trauma para el que no has tenido apoyo previo, si saca a la superficie duelo, disociación o pensamientos de hacerte daño, por favor trátalo como una señal para involucrar a una terapeuta cualificada o profesional de confianza, no como una señal para sacar más cartas. El mazo es una puerta. Atravesarla bien a veces significa atravesarla acompañada por alguien entrenada para sostener lo que hay al otro lado.
          </p>
        </div>
      </div>

      {/* Spread */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          Las tres cartas
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Saca las tres cartas en orden, de izquierda a derecha. Léelas despacio. Resiste el impulso de pasar a la siguiente carta antes de haberte sentado honestamente con la anterior.
        </p>

        {/* Visual Layout */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Disposición de cartas
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {POSITIONS.map(pos => (
              <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                <div style={{ width: 80, height: 120, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1.15rem', color: 'var(--gold)' }}>
                  {pos.num}
                </div>
                <div style={{ fontSize: '.62rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', maxWidth: 80 }}>{pos.name}</div>
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
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>¿Lista para comenzar el trabajo interior?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Saca tus tres cartas y siéntate con ellas antes de buscar la interpretación. Las tiradas relacionadas debajo llevan este trabajo más lejos.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/es/tiradas/sanar-tras-desamor" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Sanar tras el Desamor
          </Link>
          <Link href="/es/tiradas/que-bloquea-mi-amor" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ¿Qué bloquea mi amor?
          </Link>
          <Link href="/es/tiradas/amor/amor-propio" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Amor Propio
          </Link>
        </div>
      </div>
    </div>
  )
}
