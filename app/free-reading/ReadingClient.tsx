'use client'

import { useState, useCallback, useEffect } from 'react'
import Link from 'next/link'
import { CARDS, type Card } from '@/lib/cards'
import CardImage from '@/components/CardImage'

// ─── Spreads ────────────────────────────────────────────────────────────────

const SPREADS = [
  {
    id: 'daily',
    name: 'Daily Card',
    count: 1,
    desc: 'One card for focus and intention',
    positions: ['Your energy today'],
    mode: 'general' as const,
  },
  {
    id: 'three',
    name: 'Three Card',
    count: 3,
    desc: 'Past · Present · Future at a glance',
    positions: ['Past', 'Present', 'Future'],
    mode: 'general' as const,
  },
  {
    id: 'six',
    name: 'Six Card',
    count: 6,
    desc: 'A complete snapshot of your situation',
    positions: ['How you feel', 'What you want', 'Your fears', 'What helps you', 'What challenges you', 'The outcome'],
    mode: 'general' as const,
  },
  {
    id: 'love',
    name: 'Love Reading',
    count: 5,
    desc: 'Insight into your romantic energy',
    positions: ['Your energy', 'Their energy', 'The connection', 'The challenge', 'The potential'],
    mode: 'love' as const,
  },
]

// ─── Personalisation ─────────────────────────────────────────────────────────

type Theme = 'general' | 'love' | 'career' | 'family' | 'money' | 'spirit' | 'health'
type Frequency = 'single' | 'daily' | 'weekly' | 'monthly' | 'yearly'
type ZodiacSign = '' | 'aries' | 'taurus' | 'gemini' | 'cancer' | 'leo' | 'virgo' | 'libra' | 'scorpio' | 'sagittarius' | 'capricorn' | 'aquarius' | 'pisces'

const THEMES: { id: Theme; label: string }[] = [
  { id: 'general', label: 'General' },
  { id: 'love',    label: 'Love' },
  { id: 'career',  label: 'Career' },
  { id: 'family',  label: 'Family' },
  { id: 'money',   label: 'Money' },
  { id: 'spirit',  label: 'Spirit' },
  { id: 'health',  label: 'Health' },
]

const FREQUENCIES: { id: Frequency; label: string; lead: string }[] = [
  { id: 'single',  label: 'One-off',  lead: 'Right now,' },
  { id: 'daily',   label: 'Daily',    lead: 'Over the next day,' },
  { id: 'weekly',  label: 'Weekly',   lead: 'In the coming week,' },
  { id: 'monthly', label: 'Monthly',  lead: 'Through this month,' },
  { id: 'yearly',  label: 'Yearly',   lead: 'Across the year ahead,' },
]

const ZODIAC: { id: ZodiacSign; label: string; ruling: string }[] = [
  { id: '',            label: 'None',         ruling: '' },
  { id: 'aries',       label: 'Aries',        ruling: 'The Emperor' },
  { id: 'taurus',      label: 'Taurus',       ruling: 'The Hierophant' },
  { id: 'gemini',      label: 'Gemini',       ruling: 'The Lovers' },
  { id: 'cancer',      label: 'Cancer',       ruling: 'The Chariot' },
  { id: 'leo',         label: 'Leo',          ruling: 'Strength' },
  { id: 'virgo',       label: 'Virgo',        ruling: 'The Hermit' },
  { id: 'libra',       label: 'Libra',        ruling: 'Justice' },
  { id: 'scorpio',     label: 'Scorpio',      ruling: 'Death' },
  { id: 'sagittarius', label: 'Sagittarius',  ruling: 'Temperance' },
  { id: 'capricorn',   label: 'Capricorn',    ruling: 'The Devil' },
  { id: 'aquarius',    label: 'Aquarius',     ruling: 'The Star' },
  { id: 'pisces',      label: 'Pisces',       ruling: 'The Moon' },
]

const PREFS_KEY = 'tarotify_freereading_prefs'

// ─── CSS for 3D flip ────────────────────────────────────────────────────────

const FLIP_CSS = `
.tc-wrap { perspective: 700px; }
.tc-inner {
  transform-style: preserve-3d;
  transition: transform .58s cubic-bezier(.4,0,.2,1);
  position: relative; width: 100%; height: 100%;
}
.tc-inner.tc-on { transform: rotateY(180deg); }
.tc-design, .tc-image {
  position: absolute; inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 10px; overflow: hidden;
}
.tc-image { transform: rotateY(180deg); }
.tc-idle:hover .tc-inner { transform: rotateY(-10deg) scale(1.04); transition: transform .22s ease; }
`

// ─── Helpers ─────────────────────────────────────────────────────────────────

function shuffle(arr: Card[]): Card[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

interface DrawnCard { card: Card; reversed: boolean }

// Base meaning text for a card — picks the right field given the theme and
// whether the card is reversed. Themes that don't have a dedicated card field
// (family / money / health) fall back to general meaning and are framed by
// the wrapper text instead.
function themeBase(dc: DrawnCard, theme: Theme): string {
  const { card, reversed } = dc
  if (theme === 'love')   return card.love
  if (theme === 'career') return card.career
  if (theme === 'spirit') return card.spirit
  // general, family, money, health
  return reversed ? card.rev : card.up
}

// Wrapper sentence prefix per theme — gives the reading a contextual frame
// even when the underlying field is the general meaning. Empty for the
// catch-all 'general' theme.
function themeFrame(theme: Theme, position: string): string {
  if (theme === 'general') return ''
  if (theme === 'love')    return `In your love life — ${position.toLowerCase()} —`
  if (theme === 'career')  return `In your career — ${position.toLowerCase()} —`
  if (theme === 'family')  return `Within family dynamics — ${position.toLowerCase()} —`
  if (theme === 'money')   return `Around money and resources — ${position.toLowerCase()} —`
  if (theme === 'spirit')  return `In your spiritual life — ${position.toLowerCase()} —`
  if (theme === 'health')  return `For your wellbeing — ${position.toLowerCase()} —`
  return ''
}

function zodiacFooter(dc: DrawnCard, zodiac: ZodiacSign): string {
  if (!zodiac) return ''
  const row = ZODIAC.find(z => z.id === zodiac)
  if (!row || !row.ruling) return ''
  if (dc.card.name === row.ruling) {
    return ` Your ruling card has arrived — pay close attention; this is your own archetype speaking.`
  }
  return ` As a ${row.label.toLowerCase()}, filter this through ${row.ruling}: your ruling archetype shapes how the message lands.`
}

function interpret(
  dc: DrawnCard,
  spreadMode: 'general' | 'love',
  theme: Theme,
  frequency: Frequency,
  zodiac: ZodiacSign,
  position: string,
): string {
  // The Love spread keeps its native love framing unless the user has chosen
  // a different theme explicitly (i.e. anything other than 'general').
  const effectiveTheme: Theme = theme !== 'general' ? theme : (spreadMode === 'love' ? 'love' : 'general')
  const frame = themeFrame(effectiveTheme, position)
  const base  = themeBase(dc, effectiveTheme)
  const lead  = FREQUENCIES.find(f => f.id === frequency)?.lead ?? ''
  const tail  = zodiacFooter(dc, zodiac)
  return [lead, frame, base + tail].filter(Boolean).join(' ').replace(/\s+/g, ' ').trim()
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function ReadingClient() {
  const [spreadId, setSpreadId]   = useState<string | null>(null)
  const [question, setQuestion]   = useState('')
  const [drawn, setDrawn]         = useState<DrawnCard[]>([])
  const [revealed, setRevealed]   = useState<boolean[]>([])
  const [phase, setPhase]         = useState<'select' | 'draw'>('select')

  // Personalisation — persisted in localStorage between visits.
  const [theme, setTheme]         = useState<Theme>('general')
  const [frequency, setFrequency] = useState<Frequency>('single')
  const [zodiac, setZodiac]       = useState<ZodiacSign>('')

  // Hydrate from localStorage on mount.
  useEffect(() => {
    if (typeof window === 'undefined') return
    try {
      const raw = localStorage.getItem(PREFS_KEY)
      if (!raw) return
      const p = JSON.parse(raw) as { theme?: Theme; frequency?: Frequency; zodiac?: ZodiacSign }
      if (p.theme && THEMES.some(t => t.id === p.theme))             setTheme(p.theme)
      if (p.frequency && FREQUENCIES.some(f => f.id === p.frequency)) setFrequency(p.frequency)
      if (p.zodiac !== undefined && ZODIAC.some(z => z.id === p.zodiac)) setZodiac(p.zodiac)
    } catch {}
  }, [])

  // Persist on change.
  useEffect(() => {
    if (typeof window === 'undefined') return
    try { localStorage.setItem(PREFS_KEY, JSON.stringify({ theme, frequency, zodiac })) } catch {}
  }, [theme, frequency, zodiac])

  const spread      = SPREADS.find(s => s.id === spreadId) ?? null
  const allRevealed = revealed.length > 0 && revealed.every(Boolean)

  const startReading = useCallback(() => {
    if (!spread) return
    const deck = shuffle(CARDS)
    const cards: DrawnCard[] = deck.slice(0, spread.count).map(card => ({
      card,
      reversed: Math.random() < 0.28,
    }))
    setDrawn(cards)
    setRevealed(new Array(spread.count).fill(false))
    setPhase('draw')
  }, [spread])

  const revealCard = (idx: number) =>
    setRevealed(prev => prev.map((v, i) => (i === idx ? true : v)))

  const reset = () => {
    setPhase('select'); setSpreadId(null); setQuestion('')
    setDrawn([]); setRevealed([])
  }

  // Card dimensions by spread size
  const cardW = !spread ? 100 : spread.count === 1 ? 140 : spread.count === 3 ? 108 : 88
  const cardH = Math.round(cardW * 1.5)

  const g = 'var(--gold)', m = 'var(--muted)', b = 'var(--border)'

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: FLIP_CSS }} />
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <div style={{ fontSize: '.68rem', letterSpacing: '.22em', color: g, opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
            Free Online
          </div>
          <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.6rem,4vw,2.2rem)', color: g, marginBottom: '.8rem' }}>
            Tarot Reading
          </h1>
          <p style={{ color: m, maxWidth: 480, margin: '0 auto', lineHeight: 1.85, fontSize: '.92rem' }}>
            Draw from a full 78-card deck with reversals. No sign-up, no fee, no catch.
            Choose a spread, set your intention, and let the cards speak.
          </p>
        </div>

        {/* ── PHASE: SELECT ─────────────────────────────────────────────────── */}
        {phase === 'select' && (
          <div>
            {/* Spread picker */}
            <div style={{ fontSize: '.66rem', letterSpacing: '.16em', color: m, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '1rem', opacity: .65 }}>
              Choose your spread
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(155px,1fr))', gap: '.75rem', marginBottom: '2rem' }}>
              {SPREADS.map(s => (
                <button
                  key={s.id}
                  onClick={() => setSpreadId(s.id)}
                  style={{
                    background: spreadId === s.id ? 'rgba(201,168,76,.12)' : 'rgba(255,255,255,.025)',
                    border: `1px solid ${spreadId === s.id ? 'rgba(201,168,76,.7)' : b}`,
                    borderRadius: 12, padding: '1rem', cursor: 'pointer',
                    textAlign: 'left', transition: 'border-color .18s, background .18s',
                  }}
                >
                  <div style={{ fontFamily: "'Cinzel',serif", color: g, fontSize: '.88rem', marginBottom: '.3rem' }}>{s.name}</div>
                  <div style={{ fontSize: '.6rem', color: m, letterSpacing: '.07em', marginBottom: '.45rem' }}>
                    {s.count} {s.count === 1 ? 'card' : 'cards'}
                  </div>
                  <div style={{ fontSize: '.75rem', color: m, lineHeight: 1.55 }}>{s.desc}</div>
                </button>
              ))}
            </div>

            {/* Personalisation */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ fontSize: '.66rem', letterSpacing: '.16em', color: m, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.55rem', opacity: .65 }}>
                Personalise <span style={{ fontFamily: 'sans-serif', opacity: .5 }}>(optional)</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(170px,1fr))', gap: '.6rem' }}>
                {/* Theme */}
                <label style={{ display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
                  <span style={{ fontSize: '.6rem', color: m, opacity: .55, letterSpacing: '.08em', textTransform: 'uppercase', fontFamily: "'Cinzel',serif" }}>Theme</span>
                  <select
                    value={theme}
                    onChange={e => setTheme(e.target.value as Theme)}
                    style={{
                      background: 'rgba(255,255,255,.03)', border: `1px solid ${b}`, borderRadius: 10,
                      padding: '.55rem .75rem', color: 'var(--text)', fontSize: '.85rem',
                      outline: 'none', fontFamily: 'inherit',
                    }}
                  >
                    {THEMES.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
                  </select>
                </label>

                {/* Frequency */}
                <label style={{ display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
                  <span style={{ fontSize: '.6rem', color: m, opacity: .55, letterSpacing: '.08em', textTransform: 'uppercase', fontFamily: "'Cinzel',serif" }}>Frequency</span>
                  <select
                    value={frequency}
                    onChange={e => setFrequency(e.target.value as Frequency)}
                    style={{
                      background: 'rgba(255,255,255,.03)', border: `1px solid ${b}`, borderRadius: 10,
                      padding: '.55rem .75rem', color: 'var(--text)', fontSize: '.85rem',
                      outline: 'none', fontFamily: 'inherit',
                    }}
                  >
                    {FREQUENCIES.map(f => <option key={f.id} value={f.id}>{f.label}</option>)}
                  </select>
                </label>

                {/* Zodiac */}
                <label style={{ display: 'flex', flexDirection: 'column', gap: '.3rem' }}>
                  <span style={{ fontSize: '.6rem', color: m, opacity: .55, letterSpacing: '.08em', textTransform: 'uppercase', fontFamily: "'Cinzel',serif" }}>Zodiac sign</span>
                  <select
                    value={zodiac}
                    onChange={e => setZodiac(e.target.value as ZodiacSign)}
                    style={{
                      background: 'rgba(255,255,255,.03)', border: `1px solid ${b}`, borderRadius: 10,
                      padding: '.55rem .75rem', color: 'var(--text)', fontSize: '.85rem',
                      outline: 'none', fontFamily: 'inherit',
                    }}
                  >
                    {ZODIAC.map(z => <option key={z.id} value={z.id}>{z.label}</option>)}
                  </select>
                </label>
              </div>
              {(theme !== 'general' || frequency !== 'single' || zodiac !== '') && (
                <div style={{ marginTop: '.6rem', fontSize: '.72rem', color: m, opacity: .65, lineHeight: 1.6 }}>
                  Each card&rsquo;s interpretation will be framed for
                  {theme !== 'general' ? ` your ${THEMES.find(t => t.id === theme)?.label.toLowerCase()} focus` : ' a general focus'}
                  {frequency !== 'single' ? `, set in a ${FREQUENCIES.find(f => f.id === frequency)?.label.toLowerCase()} time window` : ''}
                  {zodiac ? `, and filtered through your ${ZODIAC.find(z => z.id === zodiac)?.label} ruling archetype` : ''}.
                </div>
              )}
            </div>

            {/* Question */}
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', fontSize: '.66rem', letterSpacing: '.16em', color: m, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.55rem', opacity: .65 }}>
                Your question <span style={{ fontFamily: 'sans-serif', opacity: .5 }}>(optional)</span>
              </label>
              <input
                type="text"
                value={question}
                onChange={e => setQuestion(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && spreadId && startReading()}
                placeholder="e.g. What should I focus on this week?"
                style={{
                  width: '100%', background: 'rgba(255,255,255,.03)',
                  border: `1px solid ${b}`, borderRadius: 10,
                  padding: '.75rem 1rem', color: 'var(--text)',
                  fontSize: '.9rem', outline: 'none',
                  boxSizing: 'border-box', fontFamily: 'inherit',
                }}
              />
            </div>

            {/* CTA */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <button
                onClick={startReading}
                disabled={!spreadId}
                style={{
                  background: spreadId ? 'rgba(201,168,76,.13)' : 'rgba(255,255,255,.02)',
                  border: `1px solid ${spreadId ? 'rgba(201,168,76,.65)' : b}`,
                  borderRadius: 10, padding: '.9rem 2.8rem',
                  color: spreadId ? g : m,
                  fontFamily: "'Cinzel',serif", fontSize: '.9rem',
                  letterSpacing: '.09em',
                  cursor: spreadId ? 'pointer' : 'not-allowed',
                  transition: 'all .2s',
                }}
              >
                Shuffle &amp; Draw
              </button>
            </div>

            {/* Before you begin */}
            <div style={{ padding: '1.25rem 1.5rem', background: 'rgba(255,255,255,.02)', border: `1px solid ${b}`, borderRadius: 12 }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.14em', color: g, opacity: .55, textTransform: 'uppercase', marginBottom: '.7rem' }}>
                Before you begin
              </div>
              <p style={{ color: m, fontSize: '.83rem', lineHeight: 1.85, margin: 0 }}>
                Take a breath. Hold your question clearly in mind before drawing. The reading reflects your inner state at this moment — the more focused your intention, the more useful the result. Treat it as a mirror for reflection, not a verdict.
              </p>
            </div>
          </div>
        )}

        {/* ── PHASE: DRAW ───────────────────────────────────────────────────── */}
        {phase === 'draw' && spread && (
          <div>
            {/* Question echo */}
            {question && (
              <div style={{ textAlign: 'center', fontStyle: 'italic', color: m, fontSize: '.88rem', marginBottom: '1.5rem', opacity: .75 }}>
                &ldquo;{question}&rdquo;
              </div>
            )}

            {/* Status label */}
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.16em', color: m, textTransform: 'uppercase', marginBottom: '1.75rem', textAlign: 'center', opacity: .65 }}>
              {allRevealed ? 'Your reading' : `Tap each card to reveal it`}
            </div>

            {/* Card grid */}
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              {drawn.map((dc, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.4rem' }}>

                  {/* Position label */}
                  <div style={{ fontSize: '.56rem', letterSpacing: '.1em', color: m, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', opacity: .65, textAlign: 'center', maxWidth: cardW, lineHeight: 1.3 }}>
                    {spread.positions[idx]}
                  </div>

                  {/* 3-D card */}
                  <div
                    className={`tc-wrap${revealed[idx] ? '' : ' tc-idle'}`}
                    onClick={() => !revealed[idx] && revealCard(idx)}
                    style={{ width: cardW, height: cardH, flexShrink: 0, cursor: revealed[idx] ? 'default' : 'pointer' }}
                  >
                    <div className={`tc-inner${revealed[idx] ? ' tc-on' : ''}`}>

                      {/* Front face — decorative back */}
                      <div className="tc-design" style={{ background: 'linear-gradient(145deg,#1b1330 0%,#0d0b1a 100%)', border: '1px solid rgba(201,168,76,.38)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 3 }}>
                        <svg width={Math.round(cardW * .64)} height={Math.round(cardW * .64)} viewBox="0 0 60 60" fill="none">
                          <circle cx="30" cy="30" r="27"   stroke="rgba(201,168,76,.28)" strokeWidth=".8"/>
                          <circle cx="30" cy="30" r="19"   stroke="rgba(201,168,76,.2)"  strokeWidth=".6"/>
                          <circle cx="30" cy="30" r="11"   stroke="rgba(201,168,76,.28)" strokeWidth=".8"/>
                          <circle cx="30" cy="30" r="3.5"  fill="rgba(201,168,76,.45)"/>
                          <line x1="30" y1="3"    x2="30"   y2="57"   stroke="rgba(201,168,76,.11)" strokeWidth=".6"/>
                          <line x1="3"  y1="30"   x2="57"   y2="30"   stroke="rgba(201,168,76,.11)" strokeWidth=".6"/>
                          <line x1="9"  y1="9"    x2="51"   y2="51"   stroke="rgba(201,168,76,.08)" strokeWidth=".5"/>
                          <line x1="51" y1="9"    x2="9"    y2="51"   stroke="rgba(201,168,76,.08)" strokeWidth=".5"/>
                          <polygon points="30,5 52,17.5 52,42.5 30,55 8,42.5 8,17.5" stroke="rgba(201,168,76,.17)" strokeWidth=".6" fill="none"/>
                        </svg>
                        <div style={{ fontSize: '.4rem', fontFamily: "'Cinzel',serif", letterSpacing: '.14em', color: 'rgba(201,168,76,.38)', textTransform: 'uppercase' }}>
                          TarotAxis
                        </div>
                      </div>

                      {/* Back face — card image */}
                      <div className="tc-image" style={{ background: '#09061a' }}>
                        <CardImage slug={dc.card.slug} alt={dc.card.name} reversed={dc.reversed} />
                      </div>

                    </div>
                  </div>

                  {/* Card name after reveal */}
                  {revealed[idx] && (
                    <div style={{ textAlign: 'center', maxWidth: cardW }}>
                      <div style={{ fontSize: '.58rem', fontFamily: "'Cinzel',serif", color: g, lineHeight: 1.3 }}>
                        {dc.card.name}
                      </div>
                      {dc.reversed && (
                        <div style={{ fontSize: '.52rem', color: m, opacity: .6, marginTop: 1 }}>Reversed</div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ── Interpretations (all revealed) ──────────────────────────── */}
            {allRevealed && (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {drawn.map((dc, idx) => {
                    const text = interpret(dc, spread.mode, theme, frequency, zodiac, spread.positions[idx])
                    const kws  = (dc.reversed ? dc.card.kw_rev : dc.card.kw_up).slice(0, 3)

                    return (
                      <div key={idx} style={{ background: 'rgba(255,255,255,.025)', border: `1px solid ${b}`, borderRadius: 14, padding: '1.25rem 1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '.5rem', marginBottom: '.7rem' }}>
                          <div>
                            <div style={{ fontSize: '.58rem', letterSpacing: '.1em', color: m, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', opacity: .62 }}>
                              {spread.positions[idx]}
                            </div>
                            <div style={{ fontFamily: "'Cinzel',serif", color: g, fontSize: '.98rem', marginTop: '.2rem' }}>
                              {dc.card.name}
                              {dc.reversed && <span style={{ fontSize: '.68rem', opacity: .5 }}> · Reversed</span>}
                            </div>
                          </div>
                          <div style={{ display: 'flex', gap: '.3rem', flexWrap: 'wrap' }}>
                            {kws.map(kw => (
                              <span key={kw} style={{ padding: '.12rem .45rem', background: 'rgba(201,168,76,.07)', border: '1px solid rgba(201,168,76,.18)', borderRadius: 20, fontSize: '.58rem', color: g, fontFamily: "'Cinzel',serif" }}>
                                {kw}
                              </span>
                            ))}
                          </div>
                        </div>

                        <p style={{ color: m, fontSize: '.86rem', lineHeight: 1.85, margin: '0 0 .8rem' }}>{text}</p>

                        <Link href={`/cards/${dc.card.slug}`} style={{ fontSize: '.7rem', color: g, opacity: .6, fontFamily: "'Cinzel',serif", letterSpacing: '.05em' }}>
                          Full {dc.card.name} meaning →
                        </Link>
                      </div>
                    )
                  })}
                </div>

                {/* Action buttons */}
                <div style={{ textAlign: 'center', marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button
                    onClick={startReading}
                    style={{ background: 'rgba(255,255,255,.03)', border: `1px solid ${b}`, borderRadius: 10, padding: '.75rem 1.6rem', color: m, fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', cursor: 'pointer' }}
                  >
                    Shuffle Again
                  </button>
                  <button
                    onClick={reset}
                    style={{ background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.4)', borderRadius: 10, padding: '.75rem 1.6rem', color: g, fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', cursor: 'pointer' }}
                  >
                    New Reading
                  </button>
                </div>

                {/* Explore link */}
                <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
                  <Link href="/spreads" style={{ fontSize: '.75rem', color: m, opacity: .55, fontFamily: "'Cinzel',serif", letterSpacing: '.06em' }}>
                    Explore more spread types →
                  </Link>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  )
}
