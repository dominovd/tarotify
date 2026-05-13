'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CARDS, type Card } from '@/lib/cards'
import CardImage from '@/components/CardImage'

type QMode = 'mixed' | 'image' | 'keywords' | 'element'
type QType = 'image' | 'keywords' | 'element'

interface Option { id: string; label: string }
interface Question {
  type: QType
  card: Card
  options: Option[]
  correctId: string
}

interface Stats {
  bestScore: number
  bestStreak: number
  games: number
}

const ELEMENTS = ['Fire', 'Water', 'Air', 'Earth']
const MAJOR: Card[] = CARDS.filter(c => c.suit === 'major')
const ROUND_LEN = 10
const STATS_KEY = 'tarotify_quiz_stats'
const VALID_MODES: QMode[] = ['mixed', 'image', 'keywords', 'element']
const MODE_LABEL: Record<QMode, string> = {
  mixed: 'Mixed Round',
  image: 'Identify by Image',
  keywords: 'Identify by Keywords',
  element: 'Match the Element',
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function pickN<T>(arr: T[], n: number): T[] { return shuffle(arr).slice(0, n) }

function buildQuestion(card: Card, type: QType): Question {
  if (type === 'image' || type === 'keywords') {
    const distractors = pickN(MAJOR.filter(c => c.slug !== card.slug), 3)
    const options: Option[] = shuffle([card, ...distractors]).map(c => ({ id: c.slug, label: c.name }))
    return { type, card, options, correctId: card.slug }
  }
  // element
  const distractors = pickN(ELEMENTS.filter(e => e !== card.element), 3)
  const options: Option[] = shuffle([card.element, ...distractors]).map(e => ({ id: e, label: e }))
  return { type, card, options, correctId: card.element }
}

function buildRound(mode: QMode): Question[] {
  const cards = pickN(MAJOR, ROUND_LEN)
  return cards.map(c => {
    const t: QType =
      mode === 'mixed'
        ? (['image', 'keywords', 'element'] as QType[])[Math.floor(Math.random() * 3)]
        : (mode as QType)
    return buildQuestion(c, t)
  })
}

function readStats(): Stats {
  if (typeof window === 'undefined') return { bestScore: 0, bestStreak: 0, games: 0 }
  try {
    const raw = localStorage.getItem(STATS_KEY)
    if (!raw) return { bestScore: 0, bestStreak: 0, games: 0 }
    const p = JSON.parse(raw) as Partial<Stats>
    return {
      bestScore: typeof p.bestScore === 'number' ? p.bestScore : 0,
      bestStreak: typeof p.bestStreak === 'number' ? p.bestStreak : 0,
      games: typeof p.games === 'number' ? p.games : 0,
    }
  } catch {
    return { bestScore: 0, bestStreak: 0, games: 0 }
  }
}

function writeStats(s: Stats) {
  if (typeof window === 'undefined') return
  try { localStorage.setItem(STATS_KEY, JSON.stringify(s)) } catch {}
}

export default function MajorQuizClient() {
  const [mode, setMode] = useState<QMode>('mixed')
  const [round, setRound] = useState<Question[] | null>(null)
  const [idx, setIdx] = useState(0)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [maxStreak, setMaxStreak] = useState(0)
  const [wrongCards, setWrongCards] = useState<Card[]>([])
  const [stats, setStats] = useState<Stats>({ bestScore: 0, bestStreak: 0, games: 0 })
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const raw = params.get('mode')
    const initMode: QMode = VALID_MODES.includes(raw as QMode) ? (raw as QMode) : 'mixed'
    setMode(initMode)
    setStats(readStats())
    setRound(buildRound(initMode))
    setHydrated(true)
  }, [])

  function restart(newMode?: QMode) {
    const m = newMode ?? mode
    setMode(m)
    setIdx(0)
    setSelectedId(null)
    setScore(0)
    setStreak(0)
    setMaxStreak(0)
    setWrongCards([])
    setRound(buildRound(m))
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href)
      url.searchParams.set('mode', m)
      window.history.replaceState({}, '', url.toString())
    }
  }

  if (!hydrated || !round) {
    return (
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--muted)' }}>Shuffling the deck…</p>
      </main>
    )
  }

  const finished = idx >= round.length

  function handleAnswer(optionId: string) {
    if (selectedId || finished) return
    const q = round![idx]
    setSelectedId(optionId)
    if (optionId === q.correctId) {
      setScore(s => s + 1)
      const ns = streak + 1
      setStreak(ns)
      if (ns > maxStreak) setMaxStreak(ns)
    } else {
      setStreak(0)
      setWrongCards(w => [...w, q.card])
    }
  }

  function next() {
    setSelectedId(null)
    const nextIdx = idx + 1
    if (nextIdx >= round!.length) {
      const newStats: Stats = {
        bestScore: Math.max(stats.bestScore, score),
        bestStreak: Math.max(stats.bestStreak, maxStreak),
        games: stats.games + 1,
      }
      setStats(newStats)
      writeStats(newStats)
    }
    setIdx(nextIdx)
  }

  // -------- End screen --------
  if (finished) {
    const pct = Math.round((score / round.length) * 100)
    const isNewBestScore = score > 0 && score >= stats.bestScore
    const isNewBestStreak = maxStreak > 0 && maxStreak >= stats.bestStreak

    return (
      <main style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
        <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.4rem' }}>
            {pct >= 80 ? '✨' : pct >= 50 ? '🌒' : '🌑'}
          </div>
          <h1 style={{
            fontFamily: "'Cinzel',serif",
            fontSize: 'clamp(1.6rem, 4.2vw, 2.1rem)',
            color: 'var(--gold)',
            marginBottom: '0.4rem',
            letterSpacing: '0.04em',
          }}>
            Round complete
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>
            {MODE_LABEL[mode]} · {round.length} questions
          </p>
        </header>

        {/* Score panel */}
        <section style={{
          background: 'rgba(255,255,255,.025)',
          border: '1px solid var(--border)',
          borderRadius: 14,
          padding: '2rem 1.75rem',
          marginBottom: '1.5rem',
          textAlign: 'center',
        }}>
          <div style={{
            fontFamily: "'Cinzel',serif",
            fontSize: 'clamp(2.5rem, 8vw, 3.5rem)',
            color: 'var(--gold)',
            lineHeight: 1,
            marginBottom: '0.6rem',
          }}>
            {score}<span style={{ color: 'var(--muted)', fontSize: '0.5em' }}> / {round.length}</span>
          </div>
          <p style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.78rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: '1.25rem',
          }}>
            {pct}% · longest streak {maxStreak}
          </p>

          {(isNewBestScore || isNewBestStreak) && (
            <p style={{
              color: 'var(--gold)',
              fontSize: '0.85rem',
              fontFamily: "'Cinzel',serif",
              letterSpacing: '0.06em',
              marginBottom: '1rem',
            }}>
              ✦ New personal best
            </p>
          )}

          <div style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            color: 'var(--muted)',
            fontSize: '0.8rem',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border)',
          }}>
            <span>Best score: <span style={{ color: 'var(--gold)' }}>{stats.bestScore}</span></span>
            <span>Best streak: <span style={{ color: 'var(--gold)' }}>{stats.bestStreak}</span></span>
            <span>Games played: <span style={{ color: 'var(--gold)' }}>{stats.games}</span></span>
          </div>
        </section>

        {/* Wrong cards review */}
        {wrongCards.length > 0 && (
          <section style={{
            background: 'rgba(255,255,255,.025)',
            border: '1px solid var(--border)',
            borderRadius: 14,
            padding: '1.5rem 1.75rem',
            marginBottom: '1.5rem',
          }}>
            <h2 style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '1.05rem',
              color: 'var(--gold)',
              letterSpacing: '0.04em',
              marginBottom: '0.5rem',
            }}>
              Cards to revisit
            </h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
              Tap any to read its full meaning before the next round.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
              gap: '0.85rem',
            }}>
              {wrongCards.map((c, i) => (
                <Link
                  key={`${c.slug}-${i}`}
                  href={`/cards/${c.slug}`}
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    color: 'var(--text)',
                  }}
                >
                  <div style={{
                    aspectRatio: '2 / 3',
                    borderRadius: 8,
                    overflow: 'hidden',
                    border: '1px solid var(--border)',
                    marginBottom: '0.4rem',
                  }}>
                    <CardImage slug={c.slug} alt={c.name} />
                  </div>
                  <p style={{
                    fontFamily: "'Cinzel',serif",
                    fontSize: '0.78rem',
                    color: 'var(--gold)',
                    textAlign: 'center',
                    letterSpacing: '0.03em',
                    margin: 0,
                  }}>
                    {c.name}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Action buttons */}
        <div style={{
          display: 'flex',
          gap: '0.85rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '1.5rem',
        }}>
          <button
            onClick={() => restart()}
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.9rem',
              color: 'var(--gold)',
              background: 'transparent',
              border: '1px solid var(--gold)',
              borderRadius: 8,
              padding: '0.7rem 1.6rem',
              cursor: 'pointer',
              letterSpacing: '0.06em',
            }}
          >
            Play again
          </button>
          <Link
            href="/cards"
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.9rem',
              color: 'var(--muted)',
              border: '1px solid var(--border)',
              borderRadius: 8,
              padding: '0.7rem 1.6rem',
              textDecoration: 'none',
              letterSpacing: '0.06em',
            }}
          >
            Browse all 78 cards
          </Link>
        </div>

        {/* Switch mode */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.72rem',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: '0.75rem',
          }}>
            Try a different mode
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {VALID_MODES.map(m => (
              <button
                key={m}
                onClick={() => restart(m)}
                style={{
                  fontFamily: "'Cinzel',serif",
                  fontSize: '0.78rem',
                  color: m === mode ? 'var(--gold)' : 'var(--muted)',
                  background: 'transparent',
                  border: '1px solid',
                  borderColor: m === mode ? 'var(--gold)' : 'var(--border)',
                  borderRadius: 20,
                  padding: '0.4rem 0.95rem',
                  cursor: 'pointer',
                  letterSpacing: '0.05em',
                }}
              >
                {MODE_LABEL[m]}
              </button>
            ))}
          </div>
        </div>
      </main>
    )
  }

  // -------- Playing screen --------
  const q = round[idx]
  const answered = selectedId !== null
  const wasCorrect = answered && selectedId === q.correctId

  function optionStyle(opt: Option): React.CSSProperties {
    const base: React.CSSProperties = {
      fontFamily: "'Cinzel',serif",
      fontSize: '0.92rem',
      letterSpacing: '0.04em',
      background: 'transparent',
      border: '1px solid var(--border)',
      borderRadius: 10,
      padding: '0.85rem 1rem',
      cursor: answered ? 'default' : 'pointer',
      color: 'var(--text)',
      textAlign: 'center',
      transition: 'all .2s',
      minHeight: 56,
    }
    if (!answered) return base
    if (opt.id === q.correctId) {
      return { ...base, borderColor: '#5fc18a', color: '#5fc18a', background: 'rgba(95,193,138,0.08)' }
    }
    if (opt.id === selectedId) {
      return { ...base, borderColor: '#e07b7b', color: '#e07b7b', background: 'rgba(224,123,123,0.08)' }
    }
    return { ...base, opacity: 0.4 }
  }

  const progress = ((idx + (answered ? 1 : 0)) / round.length) * 100

  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '2.5rem 1.5rem 5rem' }}>

      {/* Top bar */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: '1rem',
      }}>
        <span style={{
          fontFamily: "'Cinzel',serif",
          fontSize: '0.72rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--muted)',
        }}>
          {MODE_LABEL[mode]}
        </span>
        <span style={{
          fontFamily: "'Cinzel',serif",
          fontSize: '0.85rem',
          color: 'var(--gold)',
          letterSpacing: '0.05em',
        }}>
          {idx + 1} / {round.length} · {score} ✦
        </span>
      </div>

      {/* Progress bar */}
      <div style={{
        height: 3,
        background: 'rgba(255,255,255,.06)',
        borderRadius: 2,
        overflow: 'hidden',
        marginBottom: '2rem',
      }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          background: 'var(--gold)',
          transition: 'width .25s',
        }} />
      </div>

      {/* Question */}
      <section style={{
        background: 'rgba(255,255,255,.025)',
        border: '1px solid var(--border)',
        borderRadius: 14,
        padding: '1.75rem 1.5rem',
        marginBottom: '1.25rem',
      }}>
        <h1 style={{
          fontFamily: "'Cinzel',serif",
          fontSize: '0.95rem',
          color: 'var(--gold)',
          letterSpacing: '0.06em',
          marginBottom: '1.25rem',
          textAlign: 'center',
        }}>
          {q.type === 'image' && 'Which Major Arcana card is this?'}
          {q.type === 'keywords' && 'Which card matches these keywords?'}
          {q.type === 'element' && "What is this card's element?"}
        </h1>

        {/* Image (for image + element questions) */}
        {(q.type === 'image' || q.type === 'element') && (
          <div style={{
            width: 150,
            aspectRatio: '2 / 3',
            margin: '0 auto 1.5rem',
            borderRadius: 10,
            overflow: 'hidden',
            border: '1px solid var(--border)',
          }}>
            <CardImage slug={q.card.slug} alt={answered ? q.card.name : 'A Major Arcana card'} />
          </div>
        )}

        {/* Keywords block */}
        {q.type === 'keywords' && (
          <div style={{
            display: 'flex',
            gap: '0.55rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '0.5rem',
          }}>
            {q.card.kw_up.slice(0, 3).map(kw => (
              <span key={kw} style={{
                fontFamily: "'Cinzel',serif",
                fontSize: '0.85rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                border: '1px solid var(--gold)',
                borderRadius: 22,
                padding: '0.45rem 1rem',
              }}>
                {kw}
              </span>
            ))}
          </div>
        )}
      </section>

      {/* Options */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '0.7rem',
        marginBottom: '1.25rem',
      }}>
        {q.options.map(opt => (
          <button
            key={opt.id}
            onClick={() => handleAnswer(opt.id)}
            disabled={answered}
            style={optionStyle(opt)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Feedback + Continue */}
      {answered && (
        <section style={{
          background: 'rgba(255,255,255,.025)',
          border: '1px solid var(--border)',
          borderRadius: 14,
          padding: '1.25rem 1.5rem',
          marginBottom: '1rem',
        }}>
          <p style={{
            fontFamily: "'Cinzel',serif",
            fontSize: '0.82rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: wasCorrect ? '#5fc18a' : '#e07b7b',
            marginBottom: '0.6rem',
          }}>
            {wasCorrect ? '✓ Correct' : '✗ Not quite'}
          </p>
          <p style={{
            color: 'var(--text)',
            fontSize: '0.95rem',
            lineHeight: 1.65,
            marginBottom: '0.75rem',
          }}>
            {q.type === 'image' && (
              <>
                This is <strong style={{ color: 'var(--gold)' }}>{q.card.name}</strong>. Key themes: {q.card.kw_up.slice(0, 3).join(', ')}.
              </>
            )}
            {q.type === 'keywords' && (
              <>
                Those keywords belong to <strong style={{ color: 'var(--gold)' }}>{q.card.name}</strong>. {q.card.up.split('.')[0]}.
              </>
            )}
            {q.type === 'element' && (
              <>
                <strong style={{ color: 'var(--gold)' }}>{q.card.name}</strong> is associated with the element of <strong style={{ color: 'var(--gold)' }}>{q.card.element}</strong>.
              </>
            )}
          </p>
          <Link
            href={`/cards/${q.card.slug}`}
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.82rem',
              color: 'var(--muted)',
              letterSpacing: '0.05em',
              textDecoration: 'underline',
              textUnderlineOffset: 3,
            }}
          >
            Read the full {q.card.name} meaning →
          </Link>
        </section>
      )}

      {answered && (
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={next}
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.95rem',
              color: 'var(--gold)',
              background: 'transparent',
              border: '1px solid var(--gold)',
              borderRadius: 8,
              padding: '0.7rem 2rem',
              cursor: 'pointer',
              letterSpacing: '0.08em',
            }}
          >
            {idx + 1 >= round.length ? 'See results →' : 'Continue →'}
          </button>
        </div>
      )}
    </main>
  )
}
