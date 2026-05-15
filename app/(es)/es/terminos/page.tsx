import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | TarotAxis',
  description: 'Términos y condiciones de uso de TarotAxis — qué es el sitio, qué no es, y cómo usarlo de forma responsable.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/terminos',
    languages: {
      'en': 'https://tarotaxis.com/terms',
      'es': 'https://tarotaxis.com/es/terminos',
      'x-default': 'https://tarotaxis.com/terms',
    },
  },
  openGraph: {
    title: 'Términos y Condiciones | TarotAxis',
    description: 'Términos y condiciones de uso de TarotAxis — qué es el sitio, qué no es, y cómo usarlo de forma responsable.',
    url: 'https://tarotaxis.com/es/terminos',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'website',
  },
}

const LAST_UPDATED = '12 de mayo de 2026'

export default function TerminosPage() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        <Link href="/es" style={{ color: 'var(--muted)' }}>Inicio</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Términos y Condiciones</span>
      </nav>

      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.2em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Legal
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '.5rem', lineHeight: 1.25 }}>
          Términos y Condiciones
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '.78rem', margin: 0 }}>
          Última actualización: {LAST_UPDATED}
        </p>
      </div>

      <Section title="La Versión Corta">
        TarotAxis es una herramienta educativa y reflexiva gratuita para la auto-exploración. Las lecturas, significados de cartas y artículos del sitio son solo para entretenimiento e insight personal — no son asesoramiento profesional. Al usar el sitio aceptas estos términos.
      </Section>

      <Section title="Qué Es Este Sitio">
        TarotAxis (el &ldquo;Sitio&rdquo;) ofrece significados de cartas de tarot, lecturas interactivas, tiradas, rituales lunares y contenido educativo. Es un recurso gratuito para personas interesadas en el tarot como práctica reflexiva.
      </Section>

      <Section title="Qué No Es Este Sitio — Aviso Importante">
        <p style={{ marginBottom: '.75rem' }}>El Sitio no proporciona ni sustituye:</p>
        <ul style={{ paddingLeft: '1.25rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
          <li><strong style={{ color: 'var(--text)' }}>Consejo médico</strong> — si tienes una preocupación de salud, consulta a un profesional cualificado.</li>
          <li><strong style={{ color: 'var(--text)' }}>Tratamiento de salud mental</strong> — si estás en crisis o atravesando dificultades, contacta con un profesional de salud mental o con los servicios de emergencia correspondientes.</li>
          <li><strong style={{ color: 'var(--text)' }}>Asesoramiento legal</strong> — para temas legales, consulta a un abogado cualificado en tu jurisdicción.</li>
          <li><strong style={{ color: 'var(--text)' }}>Asesoramiento financiero</strong> — para decisiones financieras, consulta a un asesor financiero regulado.</li>
          <li><strong style={{ color: 'var(--text)' }}>Una garantía de eventos futuros</strong> — el tarot es reflexivo, no predictivo. Ninguna lectura de este Sitio es un pronóstico de lo que va a ocurrir.</li>
        </ul>
      </Section>

      <Section title="Uso del Sitio">
        Puedes usar el Sitio para uso personal y no comercial — sacar lecturas, estudiar significados de cartas, aprender sobre tarot. Aceptas no intentar interrumpir, hacer ingeniería inversa ni scrapear el Sitio, y no usarlo para acosar a otras personas ni para infringir ninguna ley aplicable.
      </Section>

      <Section title="Propiedad Intelectual">
        Todo el contenido escrito, los significados de las cartas, las ilustraciones y el diseño de TarotAxis son propiedad intelectual de TarotAxis o están licenciados para su uso en el Sitio. Puedes citar pasajes breves para discusión personal y no comercial, con atribución. No puedes republicar el contenido del Sitio en bloque, redistribuir las imágenes de las cartas ni atribuirte la autoría de nuestros textos. Para consultas de licencia, escribe a <a href="mailto:info@tarotaxis.com" style={{ color: 'var(--gold)' }}>info@tarotaxis.com</a>.
      </Section>

      <Section title="Responsabilidad del Usuario">
        Cómo uses las lecturas es tu responsabilidad. Las cartas reflejan; las decisiones son tuyas. Si una lectura provoca sentimientos angustiantes, por favor busca apoyo en una persona de confianza o en un profesional. El Sitio no puede asumir ni asume responsabilidad por las acciones tomadas en base a una lectura.
      </Section>

      <Section title="Sin Garantías">
        El Sitio se ofrece &ldquo;tal cual&rdquo;, sin garantía de ningún tipo. Hacemos todo lo posible por mantenerlo preciso y disponible, pero no podemos garantizar un acceso ininterrumpido, un funcionamiento libre de errores ni que el contenido se ajuste a un propósito particular.
      </Section>

      <Section title="Limitación de Responsabilidad">
        En la máxima medida permitida por la ley, TarotAxis y sus operadores no se hacen responsables de daños directos, indirectos, incidentales, consecuentes ni punitivos derivados del uso o de la imposibilidad de usar el Sitio.
      </Section>

      <Section title="Cambios en Estos Términos">
        Podemos actualizar estos términos de vez en cuando. Los cambios significativos se indicarán con una fecha actualizada en la parte superior de la página. El uso continuado del Sitio tras los cambios implica la aceptación de los términos revisados.
      </Section>

      <Section title="Contacto">
        Dudas sobre estos términos: <a href="mailto:info@tarotaxis.com" style={{ color: 'var(--gold)' }}>info@tarotaxis.com</a>
      </Section>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '2rem' }}>
      <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.95rem', marginBottom: '.75rem', letterSpacing: '.06em' }}>
        {title}
      </h2>
      <div style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.85 }}>
        {children}
      </div>
    </section>
  )
}
