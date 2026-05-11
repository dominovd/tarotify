'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CARDS, type Card } from '@/lib/cards'
import ShareButton from '@/components/ShareButton'
import CardImage from '@/components/CardImage'

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const ROMAN: Record<number, string> = {
  0: '0', 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII',
  8: 'VIII', 9: 'IX', 10: 'X', 11: 'XI', 12: 'XII', 13: 'XIII', 14: 'XIV',
  15: 'XV', 16: 'XVI', 17: 'XVII', 18: 'XVIII', 19: 'XIX', 20: 'XX',
  21: 'XXI',
}

function calcBirthCardNumber(day: number, month: number, year: number): number {
  const str = String(day).padStart(2, '0') + String(month).padStart(2, '0') + String(year)
  let sum = str.split('').reduce((a, c) => a + parseInt(c), 0)
  while (sum > 22) {
    sum = String(sum).split('').reduce((a, c) => a + parseInt(c), 0)
  }
  return sum // 22 = The Fool (id 0)
}

function buildCalcSteps(day: number, month: number, year: number, result: Card): string {
  const str = String(day).padStart(2, '0') + String(month).padStart(2, '0') + String(year)
  const digits = str.split('').join('+')
  const firstSum = str.split('').reduce((a, c) => a + parseInt(c), 0)

  const steps: string[] = [`${digits} = ${firstSum}`]
  let current = firstSum
  while (current > 22) {
    const next = String(current).split('').reduce((a, c) => a + parseInt(c), 0)
    steps.push(`${String(current).split('').join('+')} = ${next}`)
    current = next
  }
  steps.push(result.name)
  return steps.join(' → ')
}

function formatDate(day: number, month: number, year: number): string {
  return `${String(day).padStart(2, '0')} ${MONTHS[month - 1]} ${year}`
}

const currentYear = new Date().getFullYear()
const years = Array.from({ length: currentYear - 1929 }, (_, i) => currentYear - i)
const days = Array.from({ length: 31 }, (_, i) => i + 1)

export default function BirthCardClient() {
  const [day, setDay] = useState<number | null>(null)
  const [month, setMonth] = useState<number | null>(null)
  const [year, setYear] = useState<number | null>(null)
  const [result, setResult] = useState<Card | null>(null)
  const [calcSteps, setCalcSteps] = useState<string>('')
  const [copied, setCopied] = useState(false)

  function handleCalculate() {
    if (!day || !month || !year) return
    const num = calcBirthCardNumber(day, month, year)
    const card = CARDS.find(c => c.id === (num === 22 ? 0 : num))
    if (!card) return
    setResult(card)
    setCalcSteps(buildCalcSteps(day, month, year, card))
  }

  function handleCopy() {
    navigator.clipboard.writeText('https://tarotify.app/birth-card').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const selectStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,.04)',
    border: '1px solid var(--border)',
    borderRadius: 8,
    color: 'var(--text)',
    fontFamily: "'Cinzel',serif",
    fontSize: '0.9rem',
    padding: '0.6rem 0.75rem',
    cursor: 'pointer',
    flex: 1,
    minWidth: 90,
  }

  return (
    <main style={{ maxWidth: 680, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

      {/* Page header */}
      <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{
          fontFamily: "'Cinzel',serif",
          fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
          color: 'var(--gold)',
          marginBottom: '0.6rem',
          letterSpacing: '0.04em',
        }}>
          Tarot Birth Card Calculator
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 480, margin: '0 auto' }}>
          Discover the Major Arcana card that shapes your life path
        </p>
      </header>

      {/* Date input form */}
      <section style={{
        background: 'rgba(255,255,255,.025)',
        border: '1px solid var(--border)',
        borderRadius: 14,
        padding: '1.75rem',
        marginBottom: '2rem',
      }}>
        <p style={{
          fontFamily: "'Cinzel',serif",
          fontSize: '0.8rem',
          color: 'var(--muted)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          marginBottom: '1rem',
        }}>
          Enter your date of birth
        </p>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          {/* Day */}
          <select
            style={selectStyle}
            value={day ?? ''}
            onChange={e => setDay(e.target.value ? parseInt(e.target.value) : null)}
            aria-label="Day"
          >
            <option value="">Day</option>
            {days.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          {/* Month */}
          <select
            style={{ ...selectStyle, flex: 2, minWidth: 130 }}
            value={month ?? ''}
            onChange={e => setMonth(e.target.value ? parseInt(e.target.value) : null)}
            aria-label="Month"
          >
            <option value="">Month</option>
            {MONTHS.map((m, i) => (
              <option key={m} value={i + 1}>{m}</option>
            ))}
          </select>

          {/* Year */}
          <select
            style={selectStyle}
            value={year ?? ''}
            onChange={e => setYear(e.target.value ? parseInt(e.target.value) : null)}
            aria-label="Year"
          >
            <option value="">Year</option>
            {years.map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>

        <button
          onClick={handleCalculate}
          disabled={!day || !month || !year}
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.9rem',
            letterSpacing: '0.08em',
            color: 'var(--gold)',
            background: 'transparent',
            border: '1px solid var(--gold)',
            borderRadius: 8,
            padding: '0.65rem 1.75rem',
            cursor: (!day || !month || !year) ? 'not-allowed' : 'pointer',
            opacity: (!day || !month || !year) ? 0.45 : 1,
            transition: 'opacity 0.2s',
          }}
        >
          Calculate
        </button>
      </section>

      {/* Result */}
      {result && day && month && year && (
        <section style={{
          background: 'rgba(255,255,255,.025)',
          border: '1px solid var(--border)',
          borderRadius: 14,
          padding: '2rem 1.75rem',
          marginBottom: '2rem',
          textAlign: 'center',
        }}>
          {/* Card image */}
          <div style={{ width: 150, height: 225, borderRadius: 12, overflow: 'hidden', border: '2px solid var(--gold)', margin: '0 auto 1.25rem' }}>
            <CardImage slug={result.slug} alt={result.name} />
          </div>

          {/* "Your Birth Card" label */}
          <p style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.7rem',
            color: 'var(--muted)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '0.4rem',
          }}>
            Your Birth Card
          </p>

          {/* Card name */}
          <h2 style={{
            fontFamily: "'Cinzel',serif",
            fontSize: 'clamp(1.4rem, 3.5vw, 1.9rem)',
            color: 'var(--gold)',
            marginBottom: '0.5rem',
            letterSpacing: '0.04em',
          }}>
            {result.name}
          </h2>

          {/* Number badge */}
          <p style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.8rem',
            color: 'var(--muted)',
            letterSpacing: '0.1em',
            marginBottom: '1rem',
          }}>
            {ROMAN[result.id]} · Major Arcana
          </p>

          {/* Keywords */}
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
            {result.kw_up.slice(0, 3).map(kw => (
              <span
                key={kw}
                style={{
                  fontFamily: "'Cinzel',serif",
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--gold)',
                  border: '1px solid var(--border)',
                  borderRadius: 20,
                  padding: '0.25rem 0.75rem',
                }}
              >
                {kw}
              </span>
            ))}
          </div>

          {/* Description paragraph */}
          <p style={{
            color: 'var(--text)',
            fontSize: '0.95rem',
            lineHeight: 1.7,
            maxWidth: 520,
            margin: '0 auto 1.5rem',
            textAlign: 'left',
          }}>
            Born on {formatDate(day, month, year)}, your birth card is <strong style={{ color: 'var(--gold)' }}>{result.name}</strong>.{' '}
            {result.up}
          </p>

          {/* Link to full card meaning */}
          <Link
            href={`/cards/${result.slug}`}
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.85rem',
              color: 'var(--gold)',
              textDecoration: 'none',
              letterSpacing: '0.05em',
              display: 'inline-block',
              marginBottom: '1.5rem',
            }}
          >
            Explore the full {result.name} meaning →
          </Link>

          {/* Share */}
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
            <ShareButton type="birth" cardName={result.name} />
          </div>
        </section>
      )}

      {/* Calculation breakdown — shown after result */}
      {result && calcSteps && day && month && year && (
        <section style={{
          background: 'rgba(255,255,255,.025)',
          border: '1px solid var(--border)',
          borderRadius: 14,
          padding: '1.5rem 1.75rem',
          marginBottom: '2rem',
        }}>
          <h2 style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '1rem',
            color: 'var(--gold)',
            letterSpacing: '0.05em',
            marginBottom: '0.75rem',
          }}>
            How is the Birth Card Calculated?
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '0.75rem' }}>
            Every digit of your birth date (DD·MM·YYYY) is added together and reduced until the total falls between 1 and 22. That number maps to a Major Arcana card. 22 wraps back to The Fool.
          </p>
          <div style={{
            background: 'rgba(0,0,0,.25)',
            borderRadius: 8,
            padding: '0.9rem 1rem',
            fontFamily: 'monospace',
            fontSize: '0.88rem',
            color: 'var(--text)',
            lineHeight: 1.7,
            wordBreak: 'break-word',
          }}>
            <span style={{ color: 'var(--muted)', marginRight: 8 }}>
              {String(day).padStart(2, '0')} · {String(month).padStart(2, '0')} · {year}
            </span>
            → {calcSteps}
          </div>
        </section>
      )}

      {/* Explanation section */}
      <section style={{
        background: 'rgba(255,255,255,.025)',
        border: '1px solid var(--border)',
        borderRadius: 14,
        padding: '1.75rem',
        marginBottom: '2rem',
      }}>
        <h2 style={{
          fontFamily: "'Cinzel',serif",
          fontSize: '1.15rem',
          color: 'var(--gold)',
          letterSpacing: '0.04em',
          marginBottom: '0.75rem',
        }}>
          What is a Tarot Birth Card?
        </h2>
        <p style={{ color: 'var(--text)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '1.5rem' }}>
          A birth card is the Major Arcana card that corresponds to your date of birth through numerology. It is calculated by reducing your birth date digits to a number between 1 and 22, then mapping it to the Major Arcana. Your birth card represents a core energy or archetype that runs as a constant thread through your life — not your destiny, but a fundamental lens through which you tend to experience the world.
        </p>

        <h2 style={{
          fontFamily: "'Cinzel',serif",
          fontSize: '1.15rem',
          color: 'var(--gold)',
          letterSpacing: '0.04em',
          marginBottom: '0.75rem',
        }}>
          How to Find Your Birth Tarot Card
        </h2>
        <p style={{ color: 'var(--text)', fontSize: '0.95rem', lineHeight: 1.75 }}>
          Enter your day, month and year of birth in the calculator above and press Calculate. The tool sums all eight digits of your birth date (two for day, two for month, four for year), then reduces the total by summing its digits again — repeating until the number is 22 or below. The resulting number identifies your personal Major Arcana card. There is nothing mystical about the arithmetic itself; the value lies in using the card as a reflective mirror for your own patterns and tendencies.
        </p>
      </section>

      {/* CTA links */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        <Link
          href="/free-reading"
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.85rem',
            color: 'var(--gold)',
            border: '1px solid var(--gold)',
            borderRadius: 8,
            padding: '0.65rem 1.4rem',
            textDecoration: 'none',
            letterSpacing: '0.05em',
          }}
        >
          Try a Full Reading →
        </Link>
        <Link
          href="/cards"
          style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.85rem',
            color: 'var(--muted)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: '0.65rem 1.4rem',
            textDecoration: 'none',
            letterSpacing: '0.05em',
          }}
        >
          Browse All 78 Cards →
        </Link>
      </div>

    </main>
  )
}
