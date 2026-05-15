import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tirada de la Cruz Celta — Guía de la Disposición de 10 Cartas | TarotAxis',
  description: 'Aprende a leer la tirada de la Cruz Celta — la disposición de 10 cartas más poderosa del tarot. Descubre qué significa cada posición y cómo interpretar cada carta en contexto.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/tiradas/cruz-celta',
    languages: {
      'en': 'https://tarotaxis.com/spreads/celtic-cross',
      'es': 'https://tarotaxis.com/es/tiradas/cruz-celta',
      'x-default': 'https://tarotaxis.com/spreads/celtic-cross',
    },
  },
  openGraph: {
    title: 'Tirada de la Cruz Celta — Guía Completa',
    description: 'Domina la Cruz Celta: la clásica tirada de tarot de 10 cartas usada para lecturas profundas y completas sobre cualquier pregunta.',
    url: 'https://tarotaxis.com/es/tiradas/cruz-celta',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'El presente',
    subtitle: 'El corazón del asunto',
    desc: 'Esta carta representa el tema central, la situación o la energía que rodea tu pregunta en este momento. Es el corazón de la lectura — todo lo demás se relaciona con ella. Esta carta captura la energía dominante en tu vida en este momento.',
    placement: 'Centro',
  },
  {
    num: 2,
    name: 'La cruz',
    subtitle: 'Lo que te cruza',
    desc: 'Colocada horizontalmente sobre la carta 1, esta carta muestra lo que te está cruzando o desafiando — el obstáculo inmediato, la fuerza opuesta o el factor que complica. No es necesariamente negativa; a veces una carta cruzada representa una tensión útil o un desafío necesario.',
    placement: 'Cruzando el centro',
  },
  {
    num: 3,
    name: 'El cimiento',
    subtitle: 'Causa raíz / Pasado lejano',
    desc: 'Esta carta revela la raíz inconsciente de la situación — lo que subyace a todo, a menudo algo del pasado que ha estado influyendo en los acontecimientos sin tu plena consciencia. Es el cimiento sobre el que descansa la situación actual.',
    placement: 'Debajo del centro',
  },
  {
    num: 4,
    name: 'El pasado reciente',
    subtitle: 'Lo que está pasando',
    desc: 'Esta carta muestra lo que está saliendo de tu vida — energías, eventos o circunstancias que han influido recientemente en la situación y que ahora se desvanecen. Entender lo que se va ayuda a clarificar lo que se está liberando.',
    placement: 'A la izquierda del centro',
  },
  {
    num: 5,
    name: 'La corona',
    subtitle: 'Tu potencial / Meta consciente',
    desc: 'Esta carta representa aquello a lo que apuntas conscientemente, lo que esperas o piensas en relación con la pregunta. También puede mostrar lo que es posible pero aún no es seguro — el techo potencial de la situación.',
    placement: 'Encima del centro',
  },
  {
    num: 6,
    name: 'El futuro cercano',
    subtitle: 'Lo que viene',
    desc: 'Esta carta revela lo que se mueve hacia ti — la siguiente energía, evento o desarrollo significativo que probablemente se desplegará a corto plazo. No es el resultado final, sino el siguiente capítulo.',
    placement: 'A la derecha del centro',
  },
  {
    num: 7,
    name: 'Tú mismo/a',
    subtitle: 'Cómo te ves a ti misma/o',
    desc: 'La primera carta de la columna del bastón, esta posición revela cómo te ves a ti misma/o en relación con esta situación — tu autoimagen, tus miedos, tu sentido de poder personal o limitación. Refleja tu postura interna.',
    placement: 'Bastón — Inferior',
  },
  {
    num: 8,
    name: 'Tu entorno',
    subtitle: 'Influencias externas',
    desc: 'Esta carta muestra a las personas y circunstancias a tu alrededor — cómo te ven los demás, qué fuerzas externas están en juego y el entorno en el que se desarrolla la situación. Es el papel del mundo exterior en tu pregunta.',
    placement: 'Bastón — Segunda',
  },
  {
    num: 9,
    name: 'Esperanzas y miedos',
    subtitle: 'Lo que esperas y temes',
    desc: 'Una de las posiciones psicológicamente más ricas de la tirada. Esta carta a menudo muestra lo mismo como tu esperanza más profunda y tu miedo más profundo — porque lo que más queremos suele ser también lo que más tememos. Siéntate con ambas interpretaciones.',
    placement: 'Bastón — Tercera',
  },
  {
    num: 10,
    name: 'El resultado',
    subtitle: 'Resultado final',
    desc: 'La carta culminante de la lectura — el resultado más probable si las energías actuales continúan tal como están. Este no es un destino inmutable; muestra la trayectoria de la situación. Usa las nueve cartas anteriores para entender plenamente este mensaje final.',
    placement: 'Bastón — Superior',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: 'es',
  mainEntity: [
    {
      '@type': 'Question',
      name: '¿Qué es la tirada de la Cruz Celta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Cruz Celta es la tirada de tarot más utilizada del mundo. Usa 10 cartas dispuestas en un patrón específico para proporcionar una lectura completa de cualquier pregunta o situación. La tirada examina el presente, el desafío, el pasado, el futuro, las influencias inconscientes, las esperanzas y miedos, y el resultado probable — ofreciendo una de las imágenes más completas disponibles en una sola lectura de tarot.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Cuántas cartas hay en la tirada de la Cruz Celta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Cruz Celta usa 10 cartas de tarot. Seis cartas se disponen en una formación de cruz (representando la situación central, el desafío, el pasado, el futuro, el cimiento y el potencial), y cuatro cartas se colocan en un bastón o columna vertical a la derecha (representando tu estado interior, las influencias externas, las esperanzas y miedos, y el resultado).',
      },
    },
    {
      '@type': 'Question',
      name: '¿Es la Cruz Celta buena para principiantes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Cruz Celta es poderosa pero compleja — generalmente se recomienda para lectores que ya están cómodos con los significados individuales de las cartas y con tiradas más pequeñas como la de tres cartas. Dicho esto, los principiantes que la aborden lentamente, posición a posición, pueden obtener una enorme intuición de ella. Empieza con nuestra Tirada de Tres Cartas si eres nuevo/a en el tarot, y vuelve a la Cruz Celta a medida que crezca tu confianza.',
      },
    },
    {
      '@type': 'Question',
      name: '¿Para qué preguntas es mejor la Cruz Celta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La Cruz Celta es ideal para preguntas profundas y abiertas sobre situaciones complejas: dinámicas de relación, decisiones vitales importantes, encrucijadas profesionales o cualquier pregunta en la que quieras un panorama completo en lugar de una respuesta rápida. Es menos adecuada para preguntas simples de sí/no — para ésas, el Oráculo Sí o No es más eficaz.',
      },
    },
  ],
}

export default function CruzCeltaPage() {
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav style={{ fontSize:'.78rem', color:'var(--muted)', marginBottom:'1.5rem', display:'flex', gap:'.5rem', alignItems:'center', flexWrap:'wrap' }}>
        <Link href="/es" style={{ color:'var(--muted)' }}>Inicio</Link>
        <span>/</span>
        <Link href="/es/tiradas" style={{ color:'var(--muted)' }}>Tiradas de Tarot</Link>
        <span>/</span>
        <span style={{ color:'var(--gold)' }}>Cruz Celta</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign:'center', marginBottom:'3rem' }}>
        <div style={{ fontSize:'2.5rem', marginBottom:'1rem', opacity:.8 }}>✦</div>
        <h1 style={{ fontFamily:"'Cinzel',serif", fontSize:'clamp(1.5rem,4vw,2.2rem)', color:'var(--gold)', marginBottom:'.75rem', lineHeight:1.3 }}>
          Tirada de la Cruz Celta
        </h1>
        <p style={{ color:'var(--muted)', maxWidth:560, margin:'0 auto', lineHeight:1.8, fontSize:'.97rem' }}>
          La Cruz Celta es la tirada de tarot más poderosa y utilizada del mundo. Diez cartas dispuestas en un patrón preciso ofrecen un panorama completo de cualquier situación — desde sus raíces inconscientes hasta su resultado más probable.
        </p>
      </div>

      {/* Visual Layout */}
      <div style={{ marginBottom:'3rem' }}>
        <div style={{ fontFamily:"'Cinzel',serif", fontSize:'.72rem', letterSpacing:'.14em', color:'var(--gold)', opacity:.65, textTransform:'uppercase', marginBottom:'1.25rem', textAlign:'center' }}>
          Disposición de las cartas
        </div>
        <div style={{ display:'flex', gap:'2rem', justifyContent:'center', alignItems:'flex-start', flexWrap:'wrap' }}>

          {/* Cross formation */}
          <div style={{ position:'relative', width:260, height:300, flexShrink:0 }}>
            {/* Card 3 — Foundation (bottom) */}
            <div style={{ position:'absolute', left:'50%', bottom:0, transform:'translateX(-50%)' }}>
              <CardSlot num={3} label="Cimiento" small />
            </div>
            {/* Card 4 — Recent Past (left) */}
            <div style={{ position:'absolute', left:0, top:'50%', transform:'translateY(-50%)' }}>
              <CardSlot num={4} label="Pasado" small />
            </div>
            {/* Card 1 — Present (centre) */}
            <div style={{ position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)' }}>
              <CardSlot num={1} label="Presente" />
            </div>
            {/* Card 2 — Cross (centre, rotated label) */}
            <div style={{ position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)', opacity:.6 }}>
              <div style={{ width:52, height:52, border:'1px dashed rgba(201,168,76,.4)', borderRadius:4, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'Cinzel',serif", fontSize:'.5rem', color:'var(--gold)', letterSpacing:'.06em', transform:'rotate(90deg)', marginTop:10, marginLeft:10 }}>CRUZ</div>
            </div>
            {/* Card 6 — Near Future (right) */}
            <div style={{ position:'absolute', right:0, top:'50%', transform:'translateY(-50%)' }}>
              <CardSlot num={6} label="Futuro" small />
            </div>
            {/* Card 5 — Crown (top) */}
            <div style={{ position:'absolute', left:'50%', top:0, transform:'translateX(-50%)' }}>
              <CardSlot num={5} label="Corona" small />
            </div>
          </div>

          {/* Staff column */}
          <div style={{ display:'flex', flexDirection:'column', gap:'.5rem', justifyContent:'center' }}>
            {[
              { num: 10, label: 'Resultado' },
              { num: 9,  label: 'Esperanzas/Miedos' },
              { num: 8,  label: 'Entorno' },
              { num: 7,  label: 'Tú' },
            ].map(({ num, label }) => (
              <CardSlot key={num} num={num} label={label} small />
            ))}
          </div>
        </div>
      </div>

      {/* Position descriptions */}
      <div style={{ marginBottom:'3rem' }}>
        <h2 style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'1.1rem', marginBottom:'1.5rem', letterSpacing:'.06em' }}>
          Las 10 posiciones explicadas
        </h2>
        <div style={{ display:'flex', flexDirection:'column', gap:'.75rem' }}>
          {POSITIONS.map(pos => (
            <div key={pos.num} style={{ background:'rgba(255,255,255,.03)', border:'1px solid var(--border)', borderRadius:12, padding:'1.1rem 1.25rem', display:'flex', gap:'1rem', alignItems:'flex-start' }}>
              <div style={{ flexShrink:0, width:32, height:32, borderRadius:'50%', background:'rgba(201,168,76,.1)', border:'1px solid rgba(201,168,76,.3)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'Cinzel',serif", fontSize:'.8rem', color:'var(--gold)' }}>
                {pos.num}
              </div>
              <div>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:'.88rem', color:'var(--gold)', marginBottom:'.15rem' }}>{pos.name}</div>
                <div style={{ fontSize:'.72rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:'.5rem' }}>{pos.subtitle}</div>
                <p style={{ color:'var(--text)', fontSize:'.88rem', lineHeight:1.7, margin:0 }}>{pos.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to read section */}
      <div style={{ background:'rgba(255,255,255,.03)', border:'1px solid var(--border)', borderRadius:14, padding:'1.5rem', marginBottom:'2rem' }}>
        <h2 style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'1rem', marginBottom:'1rem', letterSpacing:'.06em' }}>
          Cómo leer la Cruz Celta
        </h2>
        <div style={{ color:'var(--text)', lineHeight:1.8, fontSize:'.92rem' }}>
          <p style={{ marginBottom:'1rem' }}>
            Empieza barajando tu mazo mientras mantienes tu pregunta claramente en mente. Cuando te sientas listo/a, dispón las diez cartas boca abajo en el orden mostrado arriba, luego dales la vuelta una por una, deteniéndote a absorber cada carta antes de pasar a la siguiente.
          </p>
          <p style={{ marginBottom:'1rem' }}>
            Lee primero las cartas 1 y 2 juntas — establecen la dinámica central de toda la lectura. Luego lee las cartas 3, 4, 5 y 6 como el contexto del entorno: lo que ha sido, lo que podría ser, lo que está pasando y lo que se acerca. Finalmente, lee el bastón (cartas 7–10) como la narrativa personal: cómo te estás mostrando, qué te rodea, qué cargas emocionalmente y hacia dónde se dirigen las cosas.
          </p>
          <p>
            La Cruz Celta recompensa a quienes leen las cartas como una historia completa en lugar de diez mensajes separados. Busca patrones: palos repetidos (temas emocionales, temas intelectuales), números repetidos (repetición kármica) o cartas del mismo arquetipo apareciendo en múltiples posiciones. Estos patrones llevan los mensajes más importantes que la lectura tiene para ofrecer.
          </p>
        </div>
      </div>

      {/* Tips */}
      <div style={{ marginBottom:'2.5rem' }}>
        <h2 style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'1rem', marginBottom:'1rem', letterSpacing:'.06em' }}>
          Consejos para una mejor lectura de la Cruz Celta
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'.75rem' }}>
          {[
            ['🕯️', 'Crea espacio', 'Encuentra un momento de tranquilidad y despeja tu entorno antes de empezar. La Cruz Celta requiere presencia plena — apresurarse produce lecturas superficiales.'],
            ['❓', 'Pregunta con apertura', 'La Cruz Celta prospera con preguntas abiertas: "¿Qué necesito comprender sobre X?" funciona mucho mejor que "¿Ocurrirá X?"'],
            ['📓', 'Escríbelo', 'Anota cada carta y posición antes de comenzar a interpretar. Volver a una tirada escrita días después suele revelar intuiciones que eran invisibles en el momento.'],
            ['🔁', 'Lee la historia', 'Tras leer cada carta individualmente, da un paso atrás y pregunta: ¿qué narrativa única conecta las diez? Esa historia es la lectura real.'],
          ].map(([icon, title, text]) => (
            <div key={title as string} style={{ background:'rgba(255,255,255,.03)', border:'1px solid var(--border)', borderRadius:12, padding:'1rem' }}>
              <div style={{ fontSize:'1.3rem', marginBottom:'.4rem' }}>{icon}</div>
              <div style={{ fontFamily:"'Cinzel',serif", fontSize:'.78rem', letterSpacing:'.08em', color:'var(--gold)', opacity:.8, marginBottom:'.4rem', textTransform:'uppercase' }}>{title}</div>
              <p style={{ color:'var(--muted)', fontSize:'.83rem', lineHeight:1.6, margin:0 }}>{text as string}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ marginBottom:'2.5rem' }}>
        <h2 style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'1rem', marginBottom:'1rem', letterSpacing:'.06em' }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display:'flex', flexDirection:'column', gap:'.75rem' }}>
          {faqSchema.mainEntity.map(item => (
            <div key={item.name} style={{ background:'rgba(255,255,255,.03)', border:'1px solid var(--border)', borderRadius:12, padding:'1.1rem 1.25rem' }}>
              <div style={{ fontFamily:"'Cinzel',serif", fontSize:'.82rem', color:'var(--gold)', marginBottom:'.5rem', letterSpacing:'.03em' }}>{item.name}</div>
              <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.7, margin:0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign:'center', padding:'2rem', background:'rgba(201,168,76,.04)', border:'1px solid rgba(201,168,76,.15)', borderRadius:14 }}>
        <div style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'1rem', marginBottom:'.75rem' }}>¿Listo/a para hacer tu lectura?</div>
        <p style={{ color:'var(--muted)', fontSize:'.88rem', marginBottom:'1.25rem', lineHeight:1.7 }}>
          Saca tus diez cartas y usa la guía de posiciones de arriba para interpretarlas — o empieza con una tirada de tres cartas si es tu primera vez.
        </p>
        <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
          <Link href="/es" style={{ padding:'.85rem 1.75rem', background:'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border:'1px solid var(--gold)', borderRadius:12, color:'var(--gold)', fontFamily:"'Cinzel',serif", fontSize:'.88rem', letterSpacing:'.08em' }}>
            ✦ Sacar tres cartas
          </Link>
          <Link href="/es/cartas" style={{ padding:'.85rem 1.75rem', background:'transparent', border:'1px solid var(--border)', borderRadius:12, color:'var(--muted)', fontFamily:"'Cinzel',serif", fontSize:'.88rem', letterSpacing:'.08em' }}>
            Explorar significados de cartas
          </Link>
        </div>
      </div>
    </div>
  )
}

function CardSlot({ num, label, small }: { num: number; label: string; small?: boolean }) {
  const size = small ? 52 : 64
  const height = size * 1.5
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'.3rem' }}>
      <div style={{ width:size, height, border:'1px solid rgba(201,168,76,.35)', borderRadius:6, background:'rgba(201,168,76,.05)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'Cinzel',serif", fontSize: small ? '.75rem' : '.9rem', color:'var(--gold)' }}>
        {num}
      </div>
      <div style={{ fontSize:'.58rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'.08em', textAlign:'center', maxWidth:60 }}>{label}</div>
    </div>
  )
}
