import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad | TarotAxis',
  description: 'Política de privacidad de TarotAxis — qué datos recogemos, cómo los usamos y cómo funciona el almacenamiento local de tus lecturas de tarot.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/privacidad',
    languages: {
      'en': 'https://tarotaxis.com/privacy',
      'es': 'https://tarotaxis.com/es/privacidad',
      'x-default': 'https://tarotaxis.com/privacy',
    },
  },
  openGraph: {
    title: 'Política de Privacidad | TarotAxis',
    description: 'Política de privacidad de TarotAxis — qué datos recogemos, cómo los usamos y cómo funciona el almacenamiento local.',
    url: 'https://tarotaxis.com/es/privacidad',
    locale: 'es_ES',
    alternateLocale: ['en_US'],
    type: 'website',
  },
}

const LAST_UPDATED = '12 de mayo de 2026'

export default function PrivacidadPage() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        <Link href="/es" style={{ color: 'var(--muted)' }}>Inicio</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Política de Privacidad</span>
      </nav>

      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.2em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Legal
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '.5rem', lineHeight: 1.25 }}>
          Política de Privacidad
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '.78rem', margin: 0 }}>
          Última actualización: {LAST_UPDATED}
        </p>
      </div>

      <Section title="La Versión Corta">
        TarotAxis no requiere una cuenta, no solicita tu información personal y no vende datos a nadie. Las lecturas de tarot que realizas en el sitio se guardan localmente en tu dispositivo, dentro de tu navegador, no en nuestros servidores. Recogemos analíticas anónimas de uso para entender cómo se utiliza el sitio y mejorarlo.
      </Section>

      <Section title="Qué Recogemos">
        <ul style={{ paddingLeft: '1.25rem', margin: '.5rem 0 0', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
          <li><strong style={{ color: 'var(--text)' }}>Analíticas anónimas</strong> — páginas vistas, país, tipo de dispositivo, sitio de referencia. Usamos Vercel Analytics, que no utiliza cookies y no rastrea a personas a través de distintos sitios.</li>
          <li><strong style={{ color: 'var(--text)' }}>Almacenamiento local en tu dispositivo</strong> — tus lecturas de tarot guardadas, tu preferencia de baraja y el historial de sí/no. Estos datos viven únicamente en tu navegador y nunca se envían a nuestros servidores.</li>
          <li><strong style={{ color: 'var(--text)' }}>Correspondencia por correo</strong> — si nos escribes a info@tarotaxis.com, conservamos ese correo mientras la conversación siga siendo relevante.</li>
        </ul>
      </Section>

      <Section title="Qué No Recogemos">
        <ul style={{ paddingLeft: '1.25rem', margin: '.5rem 0 0', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
          <li>No recogemos tu nombre, dirección, fecha de nacimiento, número de teléfono ni otra información identificativa.</li>
          <li>No te rastreamos con cookies de terceros.</li>
          <li>No ejecutamos rastreadores publicitarios de redes como Google Ads o Meta Pixel.</li>
          <li>No construimos perfiles de usuarios.</li>
        </ul>
      </Section>

      <Section title="Cookies">
        TarotAxis no usa cookies de rastreo. El navegador puede usar almacenamiento local para guardar tus lecturas y preferencias — es un mecanismo distinto y vive exclusivamente en tu dispositivo. Puedes borrarlo en cualquier momento desde la configuración de tu navegador.
      </Section>

      <Section title="Servicios de Terceros">
        TarotAxis está alojado en Vercel, que proporciona la infraestructura y las analíticas anónimas. Vercel puede registrar información técnica (dirección IP, tiempos de petición) por seguridad y rendimiento, conservada brevemente y no usada para identificar a personas. Su política de privacidad está disponible en <a href="https://vercel.com/legal/privacy-policy" style={{ color: 'var(--gold)' }}>vercel.com/legal/privacy-policy</a>.
      </Section>

      <Section title="Tus Datos, Tu Control">
        Como no recogemos datos personales, no hay nada que podamos borrar a petición. Las lecturas en tu dispositivo son tuyas para conservar o eliminar en cualquier momento desde tu navegador. Si nos has escrito por correo y deseas que se borre la conversación, escribe a <a href="mailto:info@tarotaxis.com" style={{ color: 'var(--gold)' }}>info@tarotaxis.com</a> y lo haremos.
      </Section>

      <Section title="Menores">
        TarotAxis está dirigido a un público adulto. No recogemos conscientemente datos de menores de 13 años. Si un padre, madre o tutor cree que su hijo nos ha proporcionado información, por favor contáctanos y lo gestionaremos de inmediato.
      </Section>

      <Section title="Cambios en Esta Política">
        Podemos actualizar esta política de vez en cuando. Los cambios materiales se indicarán con una fecha actualizada en la parte superior de la página. El uso continuado del sitio tras los cambios implica la aceptación de la política revisada.
      </Section>

      <Section title="Contacto">
        Dudas sobre privacidad: <a href="mailto:info@tarotaxis.com" style={{ color: 'var(--gold)' }}>info@tarotaxis.com</a>
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
