import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Reflexión frente a predicción — Por qué TarotAxis lee el tarot así | TarotAxis',
  description:
    'La postura filosófica detrás de TarotAxis: el tarot como espejo para la reflexión personal, no como instrumento predictivo. El razonamiento, la historia y las consecuencias prácticas para cada lectura.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/reflexion-vs-prediccion',
    languages: {
      en: 'https://tarotaxis.com/reflection-vs-prediction',
      es: 'https://tarotaxis.com/es/reflexion-vs-prediccion',
      'x-default': 'https://tarotaxis.com/reflection-vs-prediction',
    },
  },
  openGraph: {
    title: 'Reflexión frente a predicción — TarotAxis',
    description:
      'Por qué TarotAxis trata el tarot como una herramienta reflexiva y no como un dispositivo de adivinación.',
    type: 'article',
  },
}

const SECTION_HEADER: React.CSSProperties = {
  fontFamily: "'Cinzel',serif",
  fontSize: '1.05rem',
  letterSpacing: '.06em',
  color: 'var(--gold)',
  marginTop: '2.5rem',
  marginBottom: '1rem',
}

const PROSE: React.CSSProperties = {
  color: 'var(--text)',
  lineHeight: 1.78,
  fontSize: '.95rem',
  marginBottom: '1rem',
}

export default function ReflexionVsPrediccionPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Reflexión frente a predicción — Por qué TarotAxis lee el tarot así',
    description:
      'La postura filosófica detrás de TarotAxis: tarot como reflexivo, no como predictivo.',
    author: { '@type': 'Organization', name: 'Equipo editorial de TarotAxis', url: 'https://tarotaxis.com' },
    publisher: {
      '@type': 'Organization',
      name: 'TarotAxis',
      url: 'https://tarotaxis.com',
      logo: { '@type': 'ImageObject', url: 'https://tarotaxis.com/og?slug=the-fool' },
    },
    datePublished: '2026-05-23',
    dateModified: '2026-05-23',
    mainEntityOfPage: 'https://tarotaxis.com/es/reflexion-vs-prediccion',
    inLanguage: 'es',
    about: [
      { '@type': 'Thing', name: 'Interpretación del tarot' },
      { '@type': 'Thing', name: 'Práctica reflexiva' },
      { '@type': 'Thing', name: 'Historia de la adivinación' },
      { '@type': 'Thing', name: 'Psicología junguiana' },
    ],
  }

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <Link href="/es" style={{ color: 'var(--muted)' }}>Inicio</Link>
        <span>/</span>
        <Link href="/es/metodologia" style={{ color: 'var(--muted)' }}>Metodología</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Reflexión vs Predicción</span>
      </nav>

      <header style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.22em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Normas editoriales
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '.6rem' }}>
          Reflexión frente a predicción
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, maxWidth: 580, margin: '0 auto' }}>
          Por qué TarotAxis lee el tarot como un espejo del presente, no como
          una ventana al futuro — y qué cuesta y qué aporta esa decisión en
          la práctica.
        </p>
      </header>

      <p style={PROSE}>
        Casi todas las decisiones editoriales en TarotAxis se desprenden de
        una posición: las cartas son un instrumento para la reflexión, no
        un dispositivo de pronóstico. Esto no es una frase de marketing;
        cambia lo que le pedimos al modelo que diga, qué temas rechazamos,
        cómo redactamos las palabras clave y cómo enmarcamos el
        significado de cualquier tirada. La página siguiente expone el
        razonamiento para que puedas evaluarlo por sus propios méritos.
      </p>

      <h2 style={SECTION_HEADER}>Las dos tradiciones, brevemente</h2>
      <p style={PROSE}>
        El tarot se ha leído en ambos modos durante la mayor parte de su
        historia. Desde finales del siglo XVIII, ocultistas franceses como
        Etteilla y los cartománticos marselleses usaron la baraja para la
        adivinación predictiva — tiempos, resultados, nombres, fechas. Su
        tradición sigue viva en la práctica adivinatoria moderna. Junto a
        ella, y especialmente tras la publicación de la baraja
        Rider-Waite-Smith en 1909 y los escritos psicológicos de Carl Jung
        en las décadas de 1930 y 1940, surgió una segunda tradición: el
        tarot como impulso estructurado a la introspección, con las
        cartas funcionando como símbolos arquetípicos de la vida interior.
        Ambas tradiciones existen aún y ambas tienen profesionales
        capacitados. TarotAxis se sitúa claramente en la segunda.
      </p>

      <h2 style={SECTION_HEADER}>Por qué elegimos el marco reflexivo</h2>
      <p style={PROSE}>
        Tres razones. La primera es epistémica. No tenemos buenas pruebas
        de que ninguna baraja de cartas sea capaz de pronosticar
        acontecimientos futuros concretos, y sí muchísimas pruebas de que
        los seres humanos somos extremadamente buenos para reajustar
        declaraciones ambiguas a lo que ocurra después (el &quot;efecto
        Barnum&quot;). Apostar un servicio a afirmaciones predictivas que no
        podemos respaldar sería intelectualmente deshonesto.
      </p>
      <p style={PROSE}>
        La segunda es ética. Las lecturas predictivas son particularmente
        fáciles de usar mal con personas vulnerables — recién duelo,
        ansiosas, crónicamente enfermas — y no queríamos construir un
        producto que pudiera empujar a alguien hacia una decisión que de
        otro modo no tomaría basándose en cartas extraídas al azar. El
        marco reflexivo sigue ayudando a las mismas personas, pero les
        devuelve la agencia.
      </p>
      <p style={PROSE}>
        La tercera es práctica. Las cartas son genuinamente muy buenas en
        la tarea reflexiva. La baraja de 78 cartas codifica un catálogo
        notablemente completo de situaciones humanas reconocibles —
        duelo, ambición, estancamiento, avance, traición, reparación — y
        bajar tres en respuesta a una pregunta saca a la luz ángulos que
        la persona no había articulado. Esto lo reportan lectores desde
        una amplia gama de sistemas de creencias, incluidos escépticos
        declarados.
      </p>

      <h2 style={SECTION_HEADER}>Qué significa esto en una lectura</h2>
      <p style={PROSE}>
        Concretamente, las lecturas en TarotAxis evitan el tiempo futuro
        siempre que el modelo pueda hablar en presente. &quot;Recibirás
        noticias en tres meses&quot; se convierte en &quot;la baraja está
        nombrando un período de espera; ¿qué información estás esperando
        realmente?&quot;. &quot;Volverá&quot; se convierte en &quot;la carta invita a
        mirar qué queda sin resolver entre vosotros, independientemente de
        si se reanuda el contacto&quot;. El cambio es pequeño en palabras y
        grande en efecto: la persona queda posicionada como quien decide,
        las cartas como el detonante.
      </p>
      <p style={PROSE}>
        Algunas preguntas no tratan realmente sobre reflexión — tratan
        sobre resultado. &quot;¿Conseguiré este trabajo?&quot;, &quot;¿Debería
        dejarlo?&quot;, &quot;¿Funcionará la quimio?&quot;. No respondemos esas
        preguntas. En su lugar las reformulamos: qué te ayudaría a
        prepararte independientemente del resultado, qué parte de la
        decisión ya es tuya, qué pregunta harías si la respuesta a esta
        no estuviera disponible.
      </p>

      <h2 style={SECTION_HEADER}>Qué cuesta el marco reflexivo</h2>
      <p style={PROSE}>
        Algunas personas vienen al tarot precisamente porque quieren un
        pronóstico. TarotAxis no es el servicio adecuado para ellas, y
        perderemos esas usuarias frente a otras apps. Creemos que es el
        intercambio correcto. El marco reflexivo es el único que podemos
        defender sin engañar a nadie, y las personas a las que les sirve
        — quienes usan el tarot para pensar con mayor claridad — son las
        que queremos atender bien.
      </p>

      <h2 style={SECTION_HEADER}>Una nota sobre la IA</h2>
      <p style={PROSE}>
        Añadir un modelo de lenguaje grande a la experiencia cambia la
        mecánica de una lectura, pero no su filosofía. Se le pide al
        modelo que hable en el mismo registro reflexivo que usaría una
        lectora humana considerada, y se aplican las mismas reglas duras
        (sin predicciones fuertes, sin consejos médicos / legales /
        financieros / de abandono de relaciones). Si quieres un relato
        más profundo de cómo está restringida la IA y dónde se queda
        corta, mira la{' '}
        <Link href="/es/limitaciones-de-ia" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>página de limitaciones de la IA</Link>.
        Para las reglas editoriales tema por tema, mira los{' '}
        <Link href="/es/principios-eticos" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>principios éticos</Link>.
      </p>

      <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 12 }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .6, textTransform: 'uppercase', marginBottom: '.6rem' }}>
          Páginas editoriales relacionadas
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.4rem', color: 'var(--muted)', fontSize: '.85rem' }}>
          <li><Link href="/es/metodologia" style={{ color: 'var(--gold)' }}>Metodología</Link> — el marco interpretativo detrás de cada lectura</li>
          <li><Link href="/es/limitaciones-de-ia" style={{ color: 'var(--gold)' }}>Limitaciones de la IA</Link> — qué puede y qué no puede hacer el modelo</li>
          <li><Link href="/es/principios-eticos" style={{ color: 'var(--gold)' }}>Principios éticos</Link> — reglas editoriales tema por tema</li>
        </ul>
      </div>
    </div>
  )
}
