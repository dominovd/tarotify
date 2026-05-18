import Link from 'next/link'

type Locale = 'en' | 'es'

interface Props {
  interval?: 'monthly' | 'yearly'
  locale?: Locale
  variant?: 'primary' | 'ghost'
  label?: string
  fullWidth?: boolean
}

const COPY: Record<Locale, { monthly: string; yearly: string; defaultLabel: string }> = {
  en: {
    monthly: 'Upgrade — $7 / month',
    yearly:  'Upgrade — $60 / year',
    defaultLabel: 'Upgrade to Premium',
  },
  es: {
    monthly: 'Mejora — $7 / mes',
    yearly:  'Mejora — $60 / año',
    defaultLabel: 'Mejora a Premium',
  },
}

/**
 * Reusable upgrade CTA. Targets the checkout route at
 * /api/paddle/checkout/{interval}. Renders disabled style if pricing
 * env is not configured (signals to deploys before Paddle setup).
 */
export default function UpgradeButton({
  interval = 'yearly',
  locale = 'en',
  variant = 'primary',
  label,
  fullWidth = false,
}: Props) {
  const t = COPY[locale]
  const text = label ?? (interval === 'monthly' ? t.monthly : t.yearly)
  const href = `/api/paddle/checkout/${interval}`

  const baseStyle: React.CSSProperties = {
    display: 'inline-block',
    width: fullWidth ? '100%' : undefined,
    textAlign: 'center',
    padding: '.85rem 1.75rem',
    borderRadius: 10,
    fontFamily: "'Cinzel',serif",
    fontSize: '.9rem',
    letterSpacing: '.07em',
    textDecoration: 'none',
    transition: 'transform .15s ease, box-shadow .15s ease',
  }

  const variantStyle: React.CSSProperties = variant === 'primary'
    ? {
        background: 'linear-gradient(135deg, rgba(201,168,76,.95), rgba(201,168,76,.75))',
        color: 'var(--bg)',
        border: '1px solid var(--gold)',
        boxShadow: '0 4px 16px rgba(201,168,76,.18)',
      }
    : {
        background: 'transparent',
        color: 'var(--gold)',
        border: '1px solid var(--gold)',
      }

  return (
    <Link href={href} style={{ ...baseStyle, ...variantStyle }}>
      ✦ {text}
    </Link>
  )
}
