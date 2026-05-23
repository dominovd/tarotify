import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Principios éticos para lecturas de tarot — Reglas editoriales de TarotAxis | TarotAxis',
  description:
    'Las reglas tema por tema que sigue TarotAxis para sus lecturas de tarot: qué no escribimos, cómo manejamos el malestar, cómo redirigimos preguntas médicas / legales / financieras / de abandono de relación.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/principios-eticos',
    languages: {
      en: 'https://tarotaxis.com/ethical-guidelines',
      es: 'https://tarotaxis.com/es/principios-eticos',
      'x-default': 'https://tarotaxis.com/ethical-guidelines',
    },
  },
  openGraph: {
    title: 'Principios éticos para lecturas de tarot — TarotAxis',
    description:
      'Las reglas editoriales tema por tema detrás de cada lectura de TarotAxis.',
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

export default function PrincipiosEticosPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Principios éticos para lecturas de tarot',
    description:
      'Las reglas editoriales tema por tema que TarotAxis aplica a las lecturas.',
    author: { '@type': 'Organization', name: 'Equipo editorial de TarotAxis', url: 'https://tarotaxis.com' },
    publisher: {
      '@type': 'Organization',
      name: 'TarotAxis',
      url: 'https://tarotaxis.com',
      logo: { '@type': 'ImageObject', url: 'https://tarotaxis.com/og?slug=the-fool' },
    },
    datePublished: '2026-05-23',
    dateModified: '2026-05-23',
    mainEntityOfPage: 'https://tarotaxis.com/es/principios-eticos',
    inLanguage: 'es',
    about: [
      { '@type': 'Thing', name: 'Ética del tarot' },
      { '@type': 'Thing', name: 'Pautas editoriales' },
      { '@type': 'Thing', name: 'Política de seguridad de IA' },
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
        <span style={{ color: 'var(--gold)' }}>Principios éticos</span>
      </nav>

      <header style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.22em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Normas editoriales
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '.6rem' }}>
          Principios éticos
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, maxWidth: 580, margin: '0 auto' }}>
          Qué escribimos, qué nos negamos a escribir y cómo manejamos los
          casos difíciles. Cada lectura de TarotAxis está restringida por
          las reglas siguientes.
        </p>
      </header>

      <p style={PROSE}>
        Las lecturas de tarot tienen influencia real sobre personas que las
        buscan en momentos difíciles. Nos lo tomamos en serio. Las pautas
        siguientes no son aspiraciones — están cableadas en el prompt del
        sistema que restringe cada lectura asistida por IA en TarotAxis y
        en el texto editado por humanos que respalda las interpretaciones
        estáticas. Si alguna vez violamos alguna de ellas en una lectura
        que recibas, por favor escríbenos a info@tarotaxis.com y
        revisaremos el caso.
      </p>

      <h2 style={SECTION_HEADER}>Lo que no escribimos</h2>
      <p style={PROSE}>
        <strong>Consejos médicos.</strong> Las cartas no te dirán si
        mantener, cambiar, detener o rechazar ningún tratamiento,
        medicación, terapia o procedimiento, sin importar cómo se formule
        la pregunta. Si una pregunta implica una decisión médica, la
        lectura redirigirá con suavidad a &quot;lo que las cartas invitan a
        reflexionar mientras hablas con tu clínica o clínico&quot;.
      </p>
      <p style={PROSE}>
        <strong>Consejos legales.</strong> Misma regla. Las cartas no
        aconsejan sobre contratos, acuerdos de divorcio, custodia,
        inmigración, asuntos penales o disputas empresariales. Pueden
        usarse para reflexionar sobre cómo te sientes ante una situación,
        pero nunca como sustituto de un abogado o abogada cualificada.
      </p>
      <p style={PROSE}>
        <strong>Consejos financieros.</strong> Sin operaciones, sin
        selección de inversiones, sin &quot;¿es ahora el momento de comprar?&quot;.
        Las cartas pueden iluminar tu relación con el dinero, la escasez o
        el riesgo — no pueden poner precio a un activo.
      </p>
      <p style={PROSE}>
        <strong>Veredictos sobre &quot;¿debería dejarlo?&quot; en relaciones.</strong>{' '}
        La decisión de terminar una relación íntima o familiar le pertenece
        a la persona que vive dentro de ella. Las cartas no entregarán un
        sí/no en esta categoría. Te ayudarán a nombrar lo que queda
        irresuelto, lo que sigues esperando y lo que estás tolerando — y
        dejarán la decisión donde corresponde.
      </p>
      <p style={PROSE}>
        <strong>Predicciones sobre terceras personas.</strong> &quot;¿Me
        ama?&quot;, &quot;¿Me está engañando?&quot;, &quot;¿Mi jefa me despedirá?&quot; —
        preguntas sobre el estado interno o la acción futura de otra
        persona. Las rechazamos porque (a) no podemos saberlo y (b)
        decirte que podemos saberlo activamente daña la relación sobre la
        que preguntas. La lectura redirigirá hacia tu propia experiencia
        de la situación.
      </p>

      <h2 style={SECTION_HEADER}>Cómo manejamos el malestar</h2>
      <p style={PROSE}>
        Si una pregunta contiene lenguaje que sugiere crisis — autolesión
        explícita, abuso, ideación suicida, miedo por la seguridad
        personal — la lectura con IA no proporcionará una interpretación
        de tarot en el sentido habitual. En su lugar, la respuesta
        reconocerá lo que la persona ha escrito, indicará con suavidad
        que el tarot no es la herramienta adecuada para ese momento y
        dirigirá a la persona a ayuda profesional. Consideramos esto un
        suelo absoluto, no una característica configurable.
      </p>
      <p style={PROSE}>
        Si alguna vez recibes una lectura que no cumpla esto cuando
        debería hacerlo, trátalo como un fallo grave y repórtalo. La
        promesa del marco reflexivo depende de ello.
      </p>

      <h2 style={SECTION_HEADER}>Preguntas difíciles que sí respondemos</h2>
      <p style={PROSE}>
        Sí leemos sobre duelo, desempleo prolongado, enfermedad crónica,
        familias complicadas, bloqueos creativos, conflictos en el
        trabajo, soledad, relaciones confusas. El marco reflexivo
        descrito en la página{' '}
        <Link href="/es/reflexion-vs-prediccion" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>reflexión vs predicción</Link>{' '}
        se aplica en todos los casos: las cartas ayudan a nombrar la
        forma de la situación, sugerir un ángulo útil y devolver la
        agencia a la persona. No le dicen a nadie qué hacer.
      </p>

      <h2 style={SECTION_HEADER}>Qué hacemos con lo que escribes</h2>
      <p style={PROSE}>
        Tu pregunta se envía al modelo de IA junto con las cartas que
        sacaste y la lectura se devuelve en streaming. No almacenamos
        preguntas en texto plano junto a información identificativa y no
        usamos preguntas para entrenar ningún modelo. Los datos agregados
        y anónimos sobre qué cartas se sacaron (slug + orientación, sin
        pregunta, sin datos identificativos) alimentan la página pública
        de{' '}
        <Link href="/es/tendencias" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>tendencias del tarot</Link>.
        La historia completa de privacidad vive en la{' '}
        <Link href="/es/privacidad" style={{ color: 'var(--gold)', textDecoration: 'underline', textUnderlineOffset: '3px' }}>página de privacidad</Link>.
      </p>

      <h2 style={SECTION_HEADER}>Errores y correcciones</h2>
      <p style={PROSE}>
        Actualizamos la biblioteca estática de cartas y los prompts de IA
        cuando se detecta un problema editorial. La página de metodología
        lista las fuentes interpretativas en las que nos apoyamos; si
        detectas un error de hecho — sobre la atribución histórica de una
        carta, una correspondencia elemental, un detalle numerológico —
        escríbenos. Lo corregiremos y reconoceremos la corrección en el
        registro de cambios de la página de metodología.
      </p>

      <div style={{ marginTop: '3rem', padding: '1.5rem', background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 12 }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .6, textTransform: 'uppercase', marginBottom: '.6rem' }}>
          Páginas editoriales relacionadas
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '.4rem', color: 'var(--muted)', fontSize: '.85rem' }}>
          <li><Link href="/es/metodologia" style={{ color: 'var(--gold)' }}>Metodología</Link> — el marco interpretativo detrás de cada lectura</li>
          <li><Link href="/es/reflexion-vs-prediccion" style={{ color: 'var(--gold)' }}>Reflexión vs predicción</Link> — por qué encuadramos el tarot así</li>
          <li><Link href="/es/limitaciones-de-ia" style={{ color: 'var(--gold)' }}>Limitaciones de la IA</Link> — qué puede y qué no puede hacer el modelo</li>
        </ul>
      </div>
    </div>
  )
}
