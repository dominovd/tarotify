import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de Tarot para Nueva Relación — Lectura de Etapa Inicial | TarotAxis',
  description: 'Una tirada de tarot para nueva relación, pensada para conexiones en etapa temprana. Disposiciones de 3 y 5 cartas para entender el potencial, la compatibilidad y a qué prestar atención al salir con alguien nuevo.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/amor/nueva-relacion',
    languages: {
      'en': 'https://tarotaxis.com/spreads/love/new-relationship',
      'es': 'https://tarotaxis.com/es/tiradas/amor/nueva-relacion',
      'x-default': 'https://tarotaxis.com/spreads/love/new-relationship',
    },
  },
  openGraph: {
    title: 'Tirada de Tarot para Nueva Relación — Etapas Iniciales',
    description: 'Tiradas de tarot diseñadas para conexiones nuevas — entiende la energía, el potencial y la dinámica de una relación que apenas comienza.',
    url: 'https://tarotaxis.com/es/tiradas/amor/nueva-relacion',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS_3 = [
  { num: 1, name: 'Su energía', desc: 'Lo que esta persona está aportando genuinamente a la conexión — quién es en esta situación, sus intenciones y su disposición para una relación.' },
  { num: 2, name: 'Tu energía', desc: 'Lo que tú estás proyectando y sintiendo — tus esperanzas, miedos y cualquier patrón del pasado que pueda estar tiñendo cómo ves a esta persona.' },
  { num: 3, name: 'El potencial', desc: 'La dirección honesta de esta conexión si ambas personas continúan tal como están. No una predicción, sino un reflejo de las energías actuales.' },
]

const POSITIONS_5 = [
  { num: 1, name: 'La base de la conexión', desc: 'Sobre qué está construida realmente esta relación — el verdadero fundamento de la atracción y la compatibilidad entre ustedes.' },
  { num: 2, name: 'Lo que aporta tu pareja', desc: 'Las cualidades, la energía y las intenciones que esta persona trae a la relación ahora mismo.' },
  { num: 3, name: 'Lo que aportas tú', desc: 'Las cualidades, la energía y las necesidades que estás aportando — incluidos los patrones de relaciones pasadas que pueden estar en juego.' },
  { num: 4, name: 'El desafío a navegar', desc: 'El punto potencial de fricción o el punto ciego en esta conexión — sobre qué ser honesto contigo mismo a medida que las cosas avanzan.' },
  { num: 5, name: 'Hacia dónde va', desc: 'La dirección más probable de esta relación según las energías actuales. Una invitación a la conciencia, no un destino fijo.' },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es una tirada de tarot para una nueva relación?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una tirada de tarot para una nueva relación es una disposición de cartas diseñada para conexiones románticas en etapa temprana. En lugar de plantear preguntas amplias sobre el amor, estas tiradas se centran en entender la dinámica concreta entre dos personas — lo que cada uno aporta, sobre qué se construye la conexión y hacia dónde es probable que vayan las cosas.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuán pronto es demasiado pronto para hacer una lectura sobre alguien nuevo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No hay una regla, pero las lecturas suelen ser más útiles una vez que has tenido suficiente interacción real para hacerte una idea de la persona — incluso unas pocas citas. Muy al principio, tu propia proyección y pensamiento ilusorio pueden influir fuertemente en la lectura. La clave es acercarte a la tirada con apertura genuina, no con una respuesta preferida.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué cartas del tarot son señales positivas en una tirada de relación nueva?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'El As de Copas sugiere un potencial emocional fresco y una apertura genuina. El Dos de Copas es la carta clásica de la conexión nueva — atracción mutua y alineación. Los Enamorados apunta a un vínculo significativo que se está formando. La Estrella indica esperanza y conexión auténtica. El Caballo de Copas puede representar a alguien que te corteja con sentimiento romántico genuino. Como siempre, el contexto y la posición importan tanto como la carta en sí.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Qué pasa si me sale una carta desafiante en la posición 4 (El desafío)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Una carta desafiante en la posición del obstáculo es información útil, no un mal presagio. Apunta a algo de lo que ser consciente — quizá un patrón al que prestar atención, una diferencia de compatibilidad que hablar o un ritmo del que estar atento. El Tres de Espadas allí puede sugerir un dolor pasado que necesita sanar; El Ermitaño puede indicar a alguien que necesita más soledad que tú. Úsala como guía, no como veredicto.',
      },
    },
  ],
}

export default function NuevaRelacionSpreadPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        <div style={{ fontSize: '.8rem', color: 'var(--muted)', marginBottom: '2rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
          <Link href="/es/tiradas" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Tiradas</Link>
          <span style={{ opacity: .4 }}>›</span>
          <Link href="/es/tiradas/amor" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Amor</Link>
          <span style={{ opacity: .4 }}>›</span>
          <span>Nueva Relación</span>
        </div>

        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '2.2rem', marginBottom: '1rem', opacity: .8 }}>✨</div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem' }}>
            Tirada de Tarot para Nueva Relación
          </h1>
          <p style={{ color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.75 }}>
            Para conexiones en etapa temprana y relaciones nuevas. Estas disposiciones te ayudan a ver la dinámica con claridad — qué es real, qué es proyección y hacia dónde va realmente esto.
          </p>
        </div>

        {/* 3-card */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            Lectura de Conexión Nueva de 3 Cartas
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Rápida y clara. Tres cartas te dan una lectura honesta de lo que cada persona aporta y hacia dónde va la conexión — sin complicar de más algo que aún es nuevo.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.75rem' }}>
            {[1, 2, 3].map(n => (
              <div key={n} style={{ width: 52, height: 80, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>{n}</div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS_3.map(({ num, name, desc }) => (
              <div key={num} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.1rem', background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12 }}>
                <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem' }}>{num}</div>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', marginBottom: '.3rem' }}>{name}</div>
                  <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5-card */}
        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', letterSpacing: '.06em', marginBottom: '.5rem' }}>
            Inmersión Profunda de 5 Cartas
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Cuando quieres un panorama más completo — incluida la base de la conexión, lo que cada persona aporta, a qué estar atento y hacia dónde van las cosas.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
            {[1, 2, 3, 4, 5].map(n => (
              <div key={n} style={{ width: 52, height: 80, border: '1px solid rgba(201,168,76,.35)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.9rem', background: 'rgba(201,168,76,.06)' }}>{n}</div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
            {POSITIONS_5.map(({ num, name, desc }) => (
              <div key={num} style={{ display: 'flex', gap: '1rem', padding: '1rem 1.1rem', background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12 }}>
                <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem' }}>{num}</div>
                <div>
                  <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.85rem', marginBottom: '.3rem' }}>{name}</div>
                  <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginBottom: '1.1rem' }}>Preguntas Frecuentes</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
            {faqSchema.mainEntity.map((item, i, arr) => (
              <div key={item.name} style={{ paddingBottom: i < arr.length - 1 ? '1.1rem' : 0, borderBottom: i < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <p style={{ fontFamily: "'Cinzel',serif", fontSize: '.85rem', color: 'var(--gold)', margin: '0 0 .4rem' }}>{item.name}</p>
                <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <Link href="/es/tiradas/amor" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Más tiradas</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Todas las tiradas de amor →</div>
          </Link>
          <Link href="/es/tiradas/alma-gemela" style={{ display: 'block', padding: '1rem 1.1rem', background: 'rgba(201,168,76,.06)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 12, textDecoration: 'none' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.65rem', letterSpacing: '.12em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.3rem' }}>Relacionado</div>
            <div style={{ color: 'var(--text)', fontSize: '.88rem' }}>Tirada del alma gemela →</div>
          </Link>
        </div>

      </div>
    </>
  )
}
