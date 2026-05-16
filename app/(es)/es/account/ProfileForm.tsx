'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

// Submit values stay English (DB schema is keyed on EN). Labels are Spanish.
const ZODIAC: { value: string; label: string }[] = [
  { value: '', label: '—' },
  { value: 'aries', label: 'Aries' },
  { value: 'taurus', label: 'Tauro' },
  { value: 'gemini', label: 'Géminis' },
  { value: 'cancer', label: 'Cáncer' },
  { value: 'leo', label: 'Leo' },
  { value: 'virgo', label: 'Virgo' },
  { value: 'libra', label: 'Libra' },
  { value: 'scorpio', label: 'Escorpio' },
  { value: 'sagittarius', label: 'Sagitario' },
  { value: 'capricorn', label: 'Capricornio' },
  { value: 'aquarius', label: 'Acuario' },
  { value: 'pisces', label: 'Piscis' },
]

const THEMES: { value: string; label: string }[] = [
  { value: '', label: '—' },
  { value: 'general', label: 'General' },
  { value: 'love', label: 'Amor' },
  { value: 'career', label: 'Carrera' },
  { value: 'family', label: 'Familia' },
  { value: 'money', label: 'Dinero' },
  { value: 'spirit', label: 'Espíritu' },
  { value: 'health', label: 'Salud' },
]

const FREQUENCIES: { value: string; label: string }[] = [
  { value: '', label: '—' },
  { value: 'single', label: 'Una vez' },
  { value: 'daily', label: 'Diario' },
  { value: 'weekly', label: 'Semanal' },
  { value: 'monthly', label: 'Mensual' },
  { value: 'yearly', label: 'Anual' },
]

interface Props {
  initial: {
    display_name: string
    zodiac_sign: string
    preferred_theme: string
    preferred_frequency: string
  }
}

export default function ProfileForm({ initial }: Props) {
  const [displayName, setDisplayName] = useState(initial.display_name)
  const [zodiac, setZodiac] = useState(initial.zodiac_sign)
  const [theme, setTheme] = useState(initial.preferred_theme)
  const [frequency, setFrequency] = useState(initial.preferred_frequency)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSave(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError(null)
    setSaved(false)

    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      setError('No has iniciado sesión')
      setSaving(false)
      return
    }

    const { error } = await supabase
      .from('profiles')
      .update({
        display_name: displayName || null,
        zodiac_sign: zodiac || null,
        preferred_theme: theme || null,
        preferred_frequency: frequency || null,
      })
      .eq('id', user.id)

    setSaving(false)
    if (error) {
      setError(error.message)
    } else {
      setSaved(true)
      setTimeout(() => setSaved(false), 2500)
    }
  }

  const fieldStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--on-bg-03)',
    border: '1px solid var(--border)',
    borderRadius: 10,
    padding: '.65rem .85rem',
    color: 'var(--text)',
    fontSize: '.92rem',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '.62rem',
    letterSpacing: '.12em',
    color: 'var(--muted)',
    fontFamily: "'Cinzel',serif",
    textTransform: 'uppercase',
    marginBottom: '.4rem',
    opacity: .65,
  }

  return (
    <section style={{ background: 'var(--on-bg-025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem 1.75rem' }}>
      <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginTop: 0, marginBottom: '.4rem' }}>
        Personalización
      </h2>
      <p style={{ color: 'var(--muted)', fontSize: '.82rem', lineHeight: 1.65, marginTop: 0, marginBottom: '1.5rem' }}>
        Estas preferencias rellenan los filtros en /es/lectura-gratis y orientan el contenido de tu correo diario.
      </p>

      <form onSubmit={onSave} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1rem' }}>
        <label>
          <span style={labelStyle}>Nombre para mostrar</span>
          <input
            type="text"
            value={displayName}
            onChange={e => setDisplayName(e.target.value)}
            placeholder="Opcional"
            style={fieldStyle}
          />
        </label>

        <label>
          <span style={labelStyle}>Signo del zodíaco</span>
          <select value={zodiac} onChange={e => setZodiac(e.target.value)} style={fieldStyle}>
            {ZODIAC.map(z => <option key={z.value || 'none'} value={z.value}>{z.label}</option>)}
          </select>
        </label>

        <label>
          <span style={labelStyle}>Tema preferido</span>
          <select value={theme} onChange={e => setTheme(e.target.value)} style={fieldStyle}>
            {THEMES.map(t => <option key={t.value || 'none'} value={t.value}>{t.label}</option>)}
          </select>
        </label>

        <label>
          <span style={labelStyle}>Frecuencia preferida</span>
          <select value={frequency} onChange={e => setFrequency(e.target.value)} style={fieldStyle}>
            {FREQUENCIES.map(f => <option key={f.value || 'none'} value={f.value}>{f.label}</option>)}
          </select>
        </label>

        <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '.85rem', alignItems: 'center', marginTop: '.5rem', flexWrap: 'wrap' }}>
          <button
            type="submit"
            disabled={saving}
            style={{
              background: saving ? 'var(--on-bg-02)' : 'rgba(201,168,76,.13)',
              border: `1px solid ${saving ? 'var(--border)' : 'rgba(201,168,76,.65)'}`,
              borderRadius: 10,
              padding: '.65rem 1.4rem',
              color: saving ? 'var(--muted)' : 'var(--gold)',
              fontFamily: "'Cinzel',serif",
              fontSize: '.85rem',
              letterSpacing: '.07em',
              cursor: saving ? 'not-allowed' : 'pointer',
            }}
          >
            {saving ? 'Guardando…' : 'Guardar'}
          </button>
          {saved && <span style={{ color: '#5fc18a', fontSize: '.82rem', fontFamily: "'Cinzel',serif" }}>✓ Guardado</span>}
          {error && <span style={{ color: '#e07b7b', fontSize: '.82rem' }}>{error}</span>}
        </div>
      </form>
    </section>
  )
}
