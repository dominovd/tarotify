import type { Metadata } from 'next'
import Link from 'next/link'
import UpgradeButton from '@/components/UpgradeButton'
import { createClient } from '@/lib/supabase/server'
import { getSubscription, isPremium } from '@/lib/subscription'

export const metadata: Metadata = {
  title: 'Precios — Tarot gratis para siempre, Premium para nube + IA | TarotAxis',
  description: 'El tarot gratis sigue siendo gratis. Premium añade un diario sincronizado en la nube en todos los dispositivos, el correo de la carta del día una hora antes y acceso anticipado a las funciones de IA que llegan en 2026. $7/mes o $60/año.',
  alternates: {
    canonical: 'https://tarotaxis.com/es/precios',
    languages: {
      'en': 'https://tarotaxis.com/pricing',
      'es': 'https://tarotaxis.com/es/precios',
      'x-default': 'https://tarotaxis.com/pricing',
    },
  },
  openGraph: {
    title: 'Precios de TarotAxis — Gratis + Premium ($7/mes, $60/año)',
    description: 'El tarot gratis sigue siendo gratis. Premium añade diario en la nube, carta del día prioritaria y acceso anticipado a la IA.',
    type: 'website',
  },
}

const FAQ = [
  {
    q: '¿Algo que ahora es gratis pasará a ser sólo Premium?',
    a: 'No. Las más de 245 páginas de lecturas, cartas, tiradas y aprendizaje seguirán completamente abiertas para siempre. Premium sólo añade funciones nuevas: sincronización del diario en la nube, correo prioritario de la carta del día y acceso anticipado a la IA cuando se lance.',
  },
  {
    q: '¿Cuándo se lanza la función de IA?',
    a: 'La interpretación de lecturas con IA está en desarrollo. Las personas suscritas a Premium entran automáticamente en la lista de acceso anticipado y serán las primeras en recibirla cuando esté lista. El momento exacto depende del tráfico: esperamos hasta que el tamaño de la audiencia justifique el coste por solicitud de la API.',
  },
  {
    q: '¿Cómo funciona la cancelación?',
    a: 'Puedes cancelar cuando quieras desde la página de Cuenta. Conservas el acceso Premium hasta el final del periodo de facturación que ya has pagado. No hay reembolsos más allá de la ventana estándar de 14 días sin preguntas de Paddle, pero tampoco trucos de prorrateo: lo que pagaste, lo recibes.',
  },
  {
    q: '¿Mis lecturas guardadas pasarán a la nube automáticamente cuando me suscriba?',
    a: 'En el primer inicio de sesión como usuario o usuaria Premium, el sitio ofrece una sincronización con un solo clic: tu diario local pasa a la nube y sigue sincronizándose desde ahí. La copia local queda intacta, así que no pierdes nada si algún día decides volver al plan Gratis.',
  },
  {
    q: '¿El plan anual realmente tiene un 28% de descuento?',
    a: 'Casi: $60/año frente a $84 (doce meses a $7) supone un 28,5% de descuento. En la práctica, dos meses gratis, cobrados de una sola vez.',
  },
]

export default async function PreciosPage() {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const sub = user ? await getSubscription(user.id) : null
  const premium = user ? await isPremium(user.id) : false

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  // Product schema — helps Google show pricing in rich results.
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'TarotAxis Premium',
    description: 'Diario de tarot sincronizado en la nube, correo prioritario de la carta del día y acceso anticipado a la interpretación de tarot con IA.',
    brand: { '@type': 'Brand', name: 'TarotAxis' },
    offers: [
      {
        '@type': 'Offer',
        name: 'Mensual',
        price: '7.00',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '7.00',
          priceCurrency: 'USD',
          billingDuration: 'P1M',
          billingIncrement: 1,
        },
        availability: 'https://schema.org/InStock',
        url: 'https://tarotaxis.com/es/precios',
      },
      {
        '@type': 'Offer',
        name: 'Anual',
        price: '60.00',
        priceCurrency: 'USD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '60.00',
          priceCurrency: 'USD',
          billingDuration: 'P1Y',
          billingIncrement: 1,
        },
        availability: 'https://schema.org/InStock',
        url: 'https://tarotaxis.com/es/precios',
      },
    ],
  }

  return (
    <div style={{ maxWidth: 980, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      {/* Breadcrumb */}
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
        <Link href="/es" style={{ color: 'var(--muted)' }}>Inicio</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Precios</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '1.4rem', color: 'var(--gold)', opacity: .55, marginBottom: '.75rem', letterSpacing: '.2em' }}>✦ ☽ ◈</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4.4vw,2.1rem)', color: 'var(--gold)', marginBottom: '.75rem', letterSpacing: '.04em' }}>
          El tarot gratis sigue siendo gratis.
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 620, margin: '0 auto', lineHeight: 1.7 }}>
          Premium añade un diario sincronizado en la nube en todos los dispositivos, el correo de la carta del día una hora antes y acceso anticipado a las funciones de IA que llegan en 2026.
        </p>
      </div>

      {/* Status banner — current user state */}
      {premium && (
        <div style={{ background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.22)', borderRadius: 12, padding: '1rem 1.4rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.86rem', letterSpacing: '.04em' }}>
            ✦ Estás en Premium ({sub?.plan === 'premium-yearly' ? 'anual' : 'mensual'}) · <Link href="/account" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>Gestionar en Cuenta</Link>
          </span>
        </div>
      )}

      {/* Pricing grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {/* Free plan */}
        <div style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 14, padding: '2rem 1.75rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', marginBottom: '.6rem' }}>
            Gratis
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '.4rem', marginBottom: '1rem' }}>
            <span style={{ fontFamily: "'Cinzel',serif", fontSize: '2rem', color: 'var(--gold)' }}>$0</span>
            <span style={{ color: 'var(--muted)', fontSize: '.85rem' }}>para siempre</span>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Todo lo que publicamos actualmente, sin tope ni límite. Lee, aprende, lleva tu diario localmente.
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '1.75rem', display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
            {[
              'Lecturas completas de 78 cartas con tirada de tres cartas, Cruz Celta y más de 30 tiradas',
              '78 páginas de cartas — significados, invertidas, como sentimientos, en el amor, en la carrera, en el espíritu',
              '78 páginas de oráculo sí/no + tirada interactiva',
              'Carta del Día — visible en el sitio cada día',
              'Quiz de Tarot, Analizador de Lecturas, Calculadora de Combinaciones',
              'Diario en el dispositivo local (20 entradas)',
              'Bilingüe (Inglés + Español)',
            ].map(item => (
              <li key={item} style={{ display: 'flex', gap: '.6rem', color: 'var(--text)', fontSize: '.86rem', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--gold)', flexShrink: 0 }}>✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          {user ? (
            <div style={{ textAlign: 'center', color: 'var(--muted)', fontSize: '.82rem', fontFamily: "'Cinzel',serif", letterSpacing: '.04em', padding: '.85rem 0' }}>
              {premium ? 'Incluido en tu plan' : 'Estás aquí'}
            </div>
          ) : (
            <Link
              href="/auth/signup"
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '.85rem 1.75rem',
                borderRadius: 10,
                fontFamily: "'Cinzel',serif",
                fontSize: '.88rem',
                letterSpacing: '.07em',
                textDecoration: 'none',
                color: 'var(--gold)',
                border: '1px solid var(--gold)',
                background: 'transparent',
              }}
            >
              ✦ Crea una cuenta gratis
            </Link>
          )}
        </div>

        {/* Premium plan */}
        <div style={{ background: 'linear-gradient(135deg, rgba(201,168,76,.06), rgba(201,168,76,.01))', border: '1px solid rgba(201,168,76,.28)', borderRadius: 14, padding: '2rem 1.75rem', boxShadow: '0 8px 32px rgba(201,168,76,.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.6rem' }}>
            <span style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', textTransform: 'uppercase' }}>
              Premium
            </span>
            <span style={{ padding: '.2rem .65rem', background: 'rgba(201,168,76,.18)', border: '1px solid rgba(201,168,76,.3)', borderRadius: 16, fontSize: '.62rem', fontFamily: "'Cinzel',serif", letterSpacing: '.1em', color: 'var(--gold)', textTransform: 'uppercase' }}>
              Mejor valor
            </span>
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '.4rem' }}>
              <span style={{ fontFamily: "'Cinzel',serif", fontSize: '2rem', color: 'var(--gold)' }}>$60</span>
              <span style={{ color: 'var(--muted)', fontSize: '.85rem' }}>/ año</span>
            </div>
            <div style={{ color: 'var(--muted)', fontSize: '.78rem', marginTop: '.25rem' }}>
              O $7 / mes · Cancela cuando quieras
            </div>
          </div>

          <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Todo lo de Gratis, más lo que sólo tiene sentido para quienes usan el sitio semana tras semana.
          </p>

          <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '1.75rem', display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
            {[
              'Diario sincronizado en la nube en todos los dispositivos',
              'Historial de lecturas ilimitado (Gratis se limita a 20 entradas)',
              'Correo de la carta del día una hora antes que la lista gratuita',
              'Resumen semanal de TarotAxis con lecturas largas seleccionadas',
              'Acceso anticipado a la interpretación de lecturas con IA (llega en 2026)',
              'Sin anuncios para siempre',
              'Fija tus cartas, tiradas y lecturas favoritas',
            ].map(item => (
              <li key={item} style={{ display: 'flex', gap: '.6rem', color: 'var(--text)', fontSize: '.86rem', lineHeight: 1.6 }}>
                <span style={{ color: 'var(--gold)', flexShrink: 0 }}>✦</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {premium ? (
            <div style={{ textAlign: 'center', color: 'var(--gold)', fontSize: '.82rem', fontFamily: "'Cinzel',serif", letterSpacing: '.04em', padding: '.85rem 0' }}>
              ✦ Estás suscrito
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem' }}>
              <UpgradeButton interval="yearly" locale="es" variant="primary" fullWidth />
              <UpgradeButton interval="monthly" locale="es" variant="ghost" fullWidth />
            </div>
          )}
        </div>
      </div>

      {/* Comparison detail row — D6 daily card */}
      <div style={{ background: 'var(--on-bg-02)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.5rem 1.75rem', marginBottom: '2.5rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.7rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '.85rem' }}>
          ¿Quién recibe primero la carta del día?
        </div>
        <p style={{ color: 'var(--text)', fontSize: '.9rem', lineHeight: 1.7, margin: 0 }}>
          Las personas suscritas a Premium reciben el correo de la Carta del Día a las <strong>06:00 UTC</strong>, una hora antes que el resto. El público suscrito al plan Gratis recibe el mismo contenido a las <strong>12:00 UTC</strong>. La carta en sí permanece pública en el sitio en todo momento — el correo es el privilegio de «ser el primero en saberlo».
        </p>
      </div>

      {/* FAQ */}
      <h2 style={{ fontFamily: "'Cinzel',serif", fontSize: '1.05rem', letterSpacing: '.06em', color: 'var(--gold)', marginBottom: '1rem' }}>
        Preguntas frecuentes
      </h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', marginBottom: '2.5rem' }}>
        {FAQ.map(({ q, a }) => (
          <div key={q} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{q}</div>
            <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
          </div>
        ))}
      </div>

      {/* Methodology pointer — links to E-E-A-T anchor */}
      <div style={{ textAlign: 'center', background: 'var(--on-bg-02)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14, padding: '1.75rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .6, textTransform: 'uppercase', marginBottom: '.75rem' }}>
          ¿Tienes curiosidad por cómo funcionan las lecturas?
        </div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
          El marco interpretativo, las fuentes y la posición editorial detrás de cada lectura del sitio.
        </p>
        <Link href="/es/metodologia" style={{ display: 'inline-block', padding: '.8rem 2rem', background: 'transparent', border: '1px solid var(--gold)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em', textDecoration: 'none' }}>
          ✦ Lee la metodología
        </Link>
      </div>
    </div>
  )
}
