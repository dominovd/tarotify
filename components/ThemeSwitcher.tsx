'use client'
import { useTheme, type Theme } from '@/hooks/useTheme'

/**
 * Dark / Light toggle for the Nav. Visual style matches DeckSwitcher —
 * Cinzel small caps, segmented pill, gold accent on the active option.
 *
 * Default theme is dark. Users who pick light have their choice persisted
 * in localStorage('tarotify-theme') and applied pre-paint by the inline
 * anti-flash script in the layout <head>.
 */
export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  const options: { id: Theme; label: string; aria: string }[] = [
    { id: 'dark',  label: '☾', aria: 'Dark theme'  },
    { id: 'light', label: '☀', aria: 'Light theme' },
  ]

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '.4rem' }}>
      <span style={{
        fontSize: '.65rem',
        color: 'var(--muted)',
        fontFamily: "'Cinzel',serif",
        letterSpacing: '.08em',
        opacity: .6,
      }}>
        Theme
      </span>
      <div style={{
        display: 'flex',
        borderRadius: 8,
        overflow: 'hidden',
        border: '1px solid var(--border)',
      }}>
        {options.map(opt => (
          <button
            key={opt.id}
            onClick={() => setTheme(opt.id)}
            aria-label={opt.aria}
            aria-pressed={theme === opt.id}
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '.8rem',
              lineHeight: 1,
              padding: '.25rem .55rem',
              cursor: 'pointer',
              border: 'none',
              background: theme === opt.id ? 'rgba(201,168,76,.18)' : 'transparent',
              color: theme === opt.id ? 'var(--gold)' : 'var(--muted)',
              transition: 'background .2s, color .2s',
            }}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  )
}
