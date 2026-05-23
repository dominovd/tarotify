import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Limitaciones de la IA en las lecturas de tarot — Qué puede y qué no puede hacer | TarotAxis',
  description:
    'Un relato franco y técnico de lo que la IA detrás de las lecturas de TarotAxis puede hacer, dónde se queda corta y las medidas que aplicamos para mantener las interpretaciones honestas, útiles y seguras.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/limitaciones-de-ia',
    languages: {
      en: 'https://tarotaxis.com/ai-limitations',
      es: 'https://tarotaxis.com/es/limitaciones-de-ia',
      'x-default': 'https://tarotaxis.com/ai-limitations',
    },
  },
  openGraph: {
    title: 'Limitaciones de la IA en las lecturas de tarot — TarotAxis',
    description:
      'Qué puede y qué no puede hacer la IA detrás de las lecturas de TarotAxis.',
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

export default function LimitacionesDeIAPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Limitaciones de la IA en las lecturas de tarot',
    description:
      'Qué puede y qué no puede hacer la IA detrás de las lecturas de TarotAxis.',
    author: { '@type': 'Organization', name: 'Equipo editorial de TarotAxis', url: 'https://tarotaxis.com' },
    publisher: {
      '@type': 'Organization',
      name: 'TarotAxis',
      url: 'https://tarotaxis.com',
      logo: { '@type': 'ImageObject', url: 'https://tarotaxis.com/og?slug=the-fool' },
    },
    datePublished: '2026-05-23',
    dateModified: '2026-05-23',
    mainEntityOfPage: 'https://tarotaxis.com/es/limitaciones-de-ia',
    inLanguage: 'es',
    about: [
      { '@type': 'Thing', name: 'Lecturas de tarot con IA' },
      { '@type': 'Thing', name: 'Modelos de lenguaje' },
      { '@type': 'Thing', name: 'Seguridad de IA en aplicaciones de adivinación' },
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
        <span style={{ color: 'var(--gold)' }}>Limitaciones de la IA</span>
      </nav>

      <header style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.22em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Normas editoriales
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '.6rem' }}>
          Limitaciones de la IA en las lecturas de tarot
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, maxWidth: 580, margin: '0 auto' }}>
          Una explicación clara de qué hace realmente el modelo detrás de las
          lecturas de TarotAxis, dónde falla y qué salvaguardas aplicamos para
          mantener la experiencia honesta.
        </p>
      </header>

      <p style={PROSE}>
        TarotAxis utiliza la familia de modelos de lenguaje Claude de
        Anthropic para convertir las cartas que sacas en una reflexión
        personalizada. La IA es un motor interpretativo potente, pero no es
        un instrumento místico ni omnisciente. Esta página existe para que
        sepas, en detalle, qué está haciendo realmente el modelo — y qué no
        puede hacer por más que se reformule la pregunta.
      </p>

      <h2 style={SECTION_HEADER}>Lo que el modelo hace bien</h2>
      <p style={PROSE}>
        Claude se entrena con un cuerpo muy grande de texto que incluye
        miles de obras sobre tarot, simbolismo, mitología y psicología
        profunda. Dado una tirada concreta, puede reconocer las cartas como
        entidades nombradas, recordar sus significados canónicos derechos
        e invertidos, entrelazar las palabras clave de varias cartas en una
        narrativa coherente y anclar esa narrativa en la pregunta que ha
        planteado la persona. También puede ajustar el tono — más suave,
        más directo, más práctico — y traducir la misma lectura de forma
        idiomática al español o al inglés.
      </p>
      <p style={PROSE}>
        Dicho de otra manera: es un explicador inusualmente bueno del
        simbolismo establecido. Los significados que utiliza no los
        inventó el modelo; los heredó de las mismas fuentes
        Rider-Waite-Smith y junguianas que consultaría una lectora humana.
      </p>

      <h2 style={SECTION_HEADER}>Lo que el modelo literalmente no puede hacer</h2>
      <p style={PROSE}>
        No puede percibirte. No hay expresión facial, ni tono de voz, ni
        lenguaje corporal, ni conocimiento de tu historia, tus relaciones,
        tu historial médico, tus finanzas o cualquier cosa fuera de las
        pocas frases que escribiste. Cada afirmación que hace sobre &quot;tu
        situación&quot; se infiere enteramente de las cartas y de tu pregunta.
        Cuando suena inquietantemente específico, esa especificidad viene
        del simbolismo, no de ningún conocimiento directo de tu vida.
      </p>
      <p style={PROSE}>
        No puede predecir el futuro. El modelo no tiene un modelo causal
        de tu mundo. Cuando usa lenguaje en tiempo futuro está apuntando a
        posibilidades sugeridas por las cartas, no haciendo pronósticos.
        Los prompts de TarotAxis están escritos explícitamente para evitar
        predicciones duras (&quot;vas a&quot;, &quot;en tres meses&quot;) y hablar en cambio
        de invitaciones, patrones, energías y elecciones.
      </p>
      <p style={PROSE}>
        No puede darte hechos que no se le han dado. El modelo no tiene
        acceso a tu calendario, a las noticias posteriores a su fecha de
        corte de entrenamiento, al tiempo, a tus mensajes ni a nada que
        esté sucediendo en internet en vivo. Si una lectura parece saber
        algo que no debería, esa impresión es coincidencia de patrones —
        no filtración de información.
      </p>

      <h2 style={SECTION_HEADER}>Dónde tiende a fallar el modelo</h2>
      <p style={PROSE}>
        Tres modos de fallo aparecen de manera constante en las lecturas
        de tarot asistidas por IA:
      </p>
      <p style={PROSE}>
        <strong>Exceso de confianza.</strong> Los modelos de lenguaje
        tienden a una voz fluida y segura aunque la inferencia subyacente
        sea débil. Una tirada respondida con &quot;las cartas sugieren
        claramente&quot; suena más segura de lo que debería. Nuestros prompts
        piden al modelo que hable en invitaciones y posibilidades y que
        nombre la incertidumbre cuando exista — pero la inclinación por
        defecto va hacia la certeza y no podemos eliminarla del todo.
      </p>
      <p style={PROSE}>
        <strong>Adulación.</strong> Si una pregunta está formulada de manera
        dirigida (&quot;las cartas dicen que debería dejar mi trabajo,
        ¿verdad?&quot;), un modelo sin guía a menudo asiente. Los prompts de
        TarotAxis redirigen las preguntas dirigidas hacia las propias
        cartas en lugar de confirmar el encuadre — pero una persona
        decidida puede aún empujar al modelo hacia la respuesta que quería
        oír. La cura es hacer preguntas abiertas, no preguntas de sí/no.
      </p>
      <p style={PROSE}>
        <strong>Confabulación.</strong> Cuando el modelo no está seguro de
        un detalle histórico, a veces inventa uno que suena plausible.
        Mitigamos esto alimentando al modelo con una tabla compacta y
        editada de significados construida desde la biblioteca de cartas
        revisada por humanos, así el modelo tiene una referencia estable y
        no tiene que recordar de memoria. Pero las afirmaciones finas
        sobre fuentes históricas o ediciones específicas de baraja deben
        tratarse como puntos de partida para investigar, no como hechos
        establecidos.
      </p>

      <h2 style={SECTION_HEADER}>Qué hacemos al respecto</h2>
      <p style={PROSE}>
        Varias decisiones de ingeniería están en su lugar para mantener
        las lecturas honestas. El prompt del sistema prohíbe explícitamente
        consejos médicos, legales, financieros y de abandono de
        relaciones; si una pregunta toca uno de esos temas, el modelo
        redirige a &quot;lo que las cartas invitan a reflexionar&quot; en lugar de
        qué hacer. Los significados que ve el modelo son las mismas
        entradas revisadas por humanos publicadas en
        <Link href="/es/cartas" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}> la biblioteca de cartas</Link>,
        lo que mantiene a la IA alineada con el resto del sitio. Las
        respuestas tienen un límite de longitud para que el modelo no
        pueda enterrar inferencias débiles bajo el volumen. Los parámetros
        de decodificación están afinados para favorecer un fraseo
        prudente y reflexivo.
      </p>
      <p style={PROSE}>
        También publicamos nuestro razonamiento para que se pueda poner a
        prueba. La{' '}
        <Link href="/es/metodologia" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>página de metodología</Link>{' '}
        describe el marco interpretativo en detalle, y la página{' '}
        <Link href="/es/reflexion-vs-prediccion" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>reflexión frente a predicción</Link>{' '}
        expone la postura filosófica detrás de esas decisiones.
      </p>

      <h2 style={SECTION_HEADER}>En resumen</h2>
      <p style={PROSE}>
        Una lectura de tarot con IA en TarotAxis se entiende mejor como un
        impulso estructurado a la autorreflexión, expresado con la voz de
        una lectora considerada. No es un pronóstico, ni un diagnóstico,
        ni un sustituto del asesoramiento profesional en ningún ámbito. Si
        una lectura te ayuda a pensar con mayor claridad sobre una
        situación, nombrar un patrón o hacer mejor pregunta — ha cumplido
        su trabajo. Si intenta decirte qué hacer, trátala con el mismo
        escepticismo que extenderías a cualquier extraño con opiniones
        fuertes sobre tu vida.
      </p>

      <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 12 }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .6, textTransform: 'uppercase', marginBottom: '.6rem' }}>
          Páginas editoriales relacionadas
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.4rem', color: 'var(--muted)', fontSize: '.85rem' }}>
          <li><Link href="/es/metodologia" style={{ color: 'var(--gold)' }}>Metodología</Link> — el marco interpretativo detrás de cada lectura</li>
          <li><Link href="/es/reflexion-vs-prediccion" style={{ color: 'var(--gold)' }}>Reflexión vs predicción</Link> — por qué encuadramos el tarot así</li>
          <li><Link href="/es/principios-eticos" style={{ color: 'var(--gold)' }}>Principios éticos</Link> — qué escribimos y qué no</li>
        </ul>
      </div>
    </div>
  )
}
