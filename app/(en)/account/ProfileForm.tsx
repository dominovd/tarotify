'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

const ZODIAC = ['', 'aries', 'taurus', 'gemini', 'cancer', 'leo', 'virgo', 'libra', 'scorpio', 'sagittarius', 'capricorn', 'aquarius', 'pisces']
const THEMES = ['', 'general', 'love', 'career', 'family', 'money', 'spirit', 'health']
const FREQUENCIES = ['', 'single', 'daily', 'weekly', 'monthly', 'yearly']

function label(s: string): string {
  if (!s) return '—'
  return s.charAt(0).toUpperCase() + s.slice(1)
}

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
      setError('Not signed in')
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
    background: 'rgba(255,255,255,.03)',
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
    <section style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem 1.75rem' }}>
      <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', letterSpacing: '.06em', marginTop: 0, marginBottom: '.4rem' }}>
        Personalisation
      </h2>
      <p style={{ color: 'var(--muted)', fontSize: '.82rem', lineHeight: 1.65, marginTop: 0, marginBottom: '1.5rem' }}>
        These prefs pre-fill the filters on /free-reading and bias your daily email content.
      </p>

      <form onSubmit={onSave} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '1rem' }}>
        <label>
          <span style={labelStyle}>Display name</span>
          <input
            type="text"
            value={displayName}
            onChange={e => setDisplayName(e.target.value)}
            placeholder="Optional"
            style={fieldStyle}
          />
        </label>

        <label>
          <span style={labelStyle}>Zodiac sign</span>
          <select value={zodiac} onChange={e => setZodiac(e.target.value)} style={fieldStyle}>
            {ZODIAC.map(z => <option key={z || 'none'} value={z}>{label(z)}</option>)}
          </select>
        </label>

        <label>
          <span style={labelStyle}>Preferred theme</span>
          <select value={theme} onChange={e => setTheme(e.target.value)} style={fieldStyle}>
            {THEMES.map(t => <option key={t || 'none'} value={t}>{label(t)}</option>)}
          </select>
        </label>

        <label>
          <span style={labelStyle}>Reading frequency</span>
          <select value={frequency} onChange={e => setFrequency(e.target.value)} style={fieldStyle}>
            {FREQUENCIES.map(f => <option key={f || 'none'} value={f}>{label(f)}</option>)}
          </select>
        </label>

        <div style={{ gridColumn: '1 / -1', display: 'flex', gap: '.85rem', alignItems: 'center', marginTop: '.5rem', flexWrap: 'wrap' }}>
          <button
            type="submit"
            disabled={saving}
            style={{
              background: saving ? 'rgba(255,255,255,.02)' : 'rgba(201,168,76,.13)',
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
            {saving ? 'Saving…' : 'Save'}
          </button>
          {saved && <span style={{ color: '#5fc18a', fontSize: '.82rem', fontFamily: "'Cinzel',serif" }}>✓ Saved</span>}
          {error && <span style={{ color: '#e07b7b', fontSize: '.82rem' }}>{error}</span>}
        </div>
      </form>
    </section>
  )
}
