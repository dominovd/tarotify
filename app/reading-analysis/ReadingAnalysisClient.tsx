'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { CARDS, type Card } from '@/lib/cards'
import CardImage from '@/components/CardImage'

const MAX_SELECTIONS = 22

type SelectionState = 'none' | 'upright' | 'reversed'

interface Selection {
  slug: string
  reversed: boolean
}

interface Theme { title: string; body: string }

interface Analysis {
  total: number
  reversedCount: number
  reversedPct: number
  bySuit: Record<string, number>
  dominantSuit: { key: string; label: string; pct: number; count: number } | null
  majorCount: number
  majorPct: number
  courtCount: number
  aceCount: number
  headline: string
  themes: Theme[]
}

const SUITS_ORDER: { key: Card['suit']; label: string }[] = [
  { key: 'major',     label: 'Major Arcana' },
  { key: 'wands',     label: 'Wands' },
  { key: 'cups',      label: 'Cups' },
  { key: 'swords',    label: 'Swords' },
  { key: 'pentacles', label: 'Pentacles' },
]

const SUIT_THEME: Record<string, string> = {
  wands:     'inspiration, willpower, ambition and creative momentum',
  cups:      'emotion, relationships, intuition and inner life',
  swords:    'thought, decision, communication and conflict',
  pentacles: 'work, money, body and material reality',
  major:     'pivotal life themes',
}

function getCourtRank(card: Card): 'Page' | 'Knight' | 'Queen' | 'King' | null {
  if (card.name.startsWith('Page of ')) return 'Page'
  if (card.name.startsWith('Knight of ')) return 'Knight'
  if (card.name.startsWith('Queen of ')) return 'Queen'
  if (card.name.startsWith('King of ')) return 'King'
  return null
}

function isAce(card: Card): boolean { return card.name.startsWith('Ace of ') }

function analyse(selections: Selection[], cardMap: Map<string, Card>): Analysis {
  const items = selections
    .map(s => {
      const c = cardMap.get(s.slug)
      return c ? { card: c, reversed: s.reversed } : null
    })
    .filter((x): x is { card: Card; reversed: boolean } => x !== null)

  const total = items.length
  const reversedCount = items.filter(i => i.reversed).length
  const reversedPct = total ? (reversedCount / total) * 100 : 0

  const bySuit: Record<string, number> = { major: 0, wands: 0, cups: 0, swords: 0, pentacles: 0 }
  let courtCount = 0
  let aceCount = 0

  items.forEach(({ card }) => {
    bySuit[card.suit] = (bySuit[card.suit] || 0) + 1
    if (getCourtRank(card)) courtCount++
    if (isAce(card)) aceCount++
  })

  const majorCount = bySuit.major
  const majorPct = total ? (majorCount / total) * 100 : 0

  const minorSuits: Card['suit'][] = ['wands', 'cups', 'swords', 'pentacles']
  const sortedSuits = [...minorSuits].sort((a, b) => bySuit[b] - bySuit[a])
  const topSuit = sortedSuits[0]
  const dominantSuit = total > 0 && bySuit[topSuit] >= 2 && bySuit[topSuit] / total >= 0.3
    ? {
        key: topSuit,
        label: topSuit[0].toUpperCase() + topSuit.slice(1),
        pct: (bySuit[topSuit] / total) * 100,
        count: bySuit[topSuit],
      }
    : null

  const themes: Theme[] = []

  if (dominantSuit) {
    themes.push({
      title: `The ${dominantSuit.label} are pulling rank`,
      body: `${dominantSuit.count} of your ${total} cards belong to the suit of ${dominantSuit.label}. This suit governs ${SUIT_THEME[dominantSuit.key]}. Take that as the underlying current of the reading — even questions you thought were about something else are being answered through this lens.`,
    })
  } else if (total >= 3) {
    themes.push({
      title: 'A balanced spread',
      body: `Your cards are distributed across multiple suits, which suggests the situation is multi-dimensional. No single theme dominates — you are being asked to consider work, feeling, thought and action together rather than focus on one front.`,
    })
  }

  if (total >= 3 && majorPct >= 40) {
    themes.push({
      title: 'A pivotal chapter',
      body: `${majorCount} Major Arcana out of ${total} cards is a high count. These are the archetypal forces — the cards that name events the soul remembers. Whatever this reading concerns is not ordinary; it is shaping the next chapter of your life.`,
    })
  } else if (total >= 5 && majorCount === 0) {
    themes.push({
      title: 'The everyday plane',
      body: `No Major Arcana appeared. Your reading is set in the day-to-day texture of life rather than fated turning points. The shifts are real, but they are within your hands to direct — make small, deliberate adjustments and they will compound.`,
    })
  }

  if (total >= 3 && reversedPct >= 60) {
    themes.push({
      title: 'Inner work, blocks and integration',
      body: `Most of your cards are reversed — the reading is turning your attention inward. Where you might expect outer action, the prompt is internal: examine what is blocked, what has been pushed down, what needs honouring before it can move. Reversal is not bad news; it is a request for honesty.`,
    })
  } else if (total >= 4 && reversedCount === 0) {
    themes.push({
      title: 'Energy moving outward',
      body: `No reversed cards. The energies here are flowing in their full, undirected forms — outward, expressive, available. This is a good moment to act on what the cards suggest rather than over-analyse.`,
    })
  }

  if (courtCount >= 3) {
    themes.push({
      title: 'People are at the centre',
      body: `${courtCount} court cards appear. Court cards represent personalities — sometimes you in a particular mode, sometimes others in your life. The reading is asking you to consider relationships and the people involved, not only your private situation.`,
    })
  }

  if (aceCount >= 2) {
    themes.push({
      title: 'New beginnings emerging',
      body: `${aceCount} Aces are present. Aces are seed cards — pure, undifferentiated energy at the start of something. Pay attention to fresh impulses, invitations and unfamiliar pulls; the cards are telling you a chapter is opening.`,
    })
  }

  if (total > 15) {
    themes.push({
      title: 'You drew a lot of cards',
      body: `With ${total} cards selected the signal can blur. If the reading feels overwhelming, try focusing on the three or four that struck you most when you turned them over — those are usually where the meaning lives.`,
    })
  }

  let headline: string
  if (total === 0) headline = 'Select a few cards to begin'
  else if (dominantSuit && majorPct >= 40) headline = `A ${dominantSuit.label}-led reading set against pivotal energies`
  else if (dominantSuit) headline = `Your reading is led by the suit of ${dominantSuit.label}`
  else if (majorPct >= 40) headline = `A reading defined by Major Arcana — fate is in the foreground`
  else if (reversedPct >= 60) headline = `A reading turned inward — most cards are reversed`
  else if (total <= 3) headline = `A focused snapshot of where you stand today`
  else headline = `A balanced, multi-faceted picture of the moment`

  return {
    total, reversedCount, reversedPct,
    bySuit, dominantSuit,
    majorCount, majorPct,
    courtCount, aceCount,
    headline, themes,
  }
}

export default function ReadingAnalysisClient() {
  const [selections, setSelections] = useState<Selection[]>([])
  const [analysed, setAnalysed] = useState(false)

  const cardMap = useMemo(() => {
    const m = new Map<string, Card>()
    CARDS.forEach(c => m.set(c.slug, c))
    return m
  }, [])

  const stateMap = useMemo(() => {
    const m = new Map<string, SelectionState>()
    selections.forEach(s => m.set(s.slug, s.reversed ? 'reversed' : 'upright'))
    return m
  }, [selections])

  function cycle(slug: string) {
    if (analysed) setAnalysed(false)
    setSelections(prev => {
      const idx = prev.findIndex(s => s.slug === slug)
      if (idx === -1) {
        if (prev.length >= MAX_SELECTIONS) return prev
        return [...prev, { slug, reversed: false }]
      }
      const cur = prev[idx]
      if (!cur.reversed) {
        const next = [...prev]
        next[idx] = { slug, reversed: true }
        return next
      }
      return prev.filter(s => s.slug !== slug)
    })
  }

  function clearAll() {
    setSelections([])
    setAnalysed(false)
  }

  function runAnalysis() {
    setAnalysed(true)
    requestAnimationFrame(() => {
      const el = document.getElementById('analysis-result')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const analysis = useMemo(() => analyse(selections, cardMap), [selections, cardMap])
  const reversedCount = selections.filter(s => s.reversed).length

  return (
    <main style={{ maxWidth: 980, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>

      {/* Hero */}
      <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>🜄</div>
        <h1 style={{
          fontFamily: "'Cinzel',serif",
          fontSize: 'clamp(1.7rem, 4.5vw, 2.4rem)',
          color: 'var(--gold)',
          marginBottom: '0.6rem',
          letterSpacing: '0.04em',
        }}>
          Tarot Reading Analyser
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '1rem', maxWidth: 620, margin: '0 auto 1.25rem' }}>
          Did your reading at home with a physical deck? Tap the cards you drew below and receive a structured interpretation — no sign-up, no AI fee.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {['78 cards', 'Reversed-aware', 'Free forever'].map(t => (
            <span key={t} style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.72rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              border: '1px solid var(--border)',
              borderRadius: 20,
              padding: '0.3rem 0.8rem',
            }}>
              {t}
            </span>
          ))}
        </div>
      </header>

      {/* Instructions */}
      <section style={{
        background: 'rgba(255,255,255,.025)',
        border: '1px solid var(--border)',
        borderRadius: 12,
        padding: '1rem 1.25rem',
        marginBottom: '1.5rem',
        fontSize: '0.88rem',
        color: 'var(--muted)',
        lineHeight: 1.65,
      }}>
        <strong style={{
          color: 'var(--gold)',
          fontFamily: "'Cinzel',serif",
          fontSize: '0.78rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}>
          How to use
        </strong>
        <p style={{ margin: '0.4rem 0 0' }}>
          One tap selects a card as <span style={{ color: 'var(--gold)' }}>upright</span>. A second tap marks it <span style={{ color: 'var(--gold)' }}>reversed</span> (image flips). A third tap removes it. Up to {MAX_SELECTIONS} cards.
        </p>
      </section>

      {/* Selection counter + actions (top) */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1.25rem',
        flexWrap: 'wrap',
        gap: '0.75rem',
        position: 'sticky',
        top: 54,
        background: 'rgba(7,7,26,.92)',
        backdropFilter: 'blur(8px)',
        padding: '0.6rem 0',
        zIndex: 50,
      }}>
        <span style={{
          fontFamily: "'Cinzel',serif",
          fontSize: '0.85rem',
          color: 'var(--gold)',
          letterSpacing: '0.05em',
        }}>
          {selections.length} selected · {reversedCount} reversed
          {selections.length >= MAX_SELECTIONS && (
            <span style={{ color: '#e07b7b', marginLeft: 8, fontSize: '0.78rem' }}>(max)</span>
          )}
        </span>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {selections.length > 0 && (
            <button
              onClick={clearAll}
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: '0.78rem',
                color: 'var(--muted)',
                background: 'transparent',
                border: '1px solid var(--border)',
                borderRadius: 6,
                padding: '0.45rem 0.85rem',
                cursor: 'pointer',
                letterSpacing: '0.05em',
              }}
            >
              Clear
            </button>
          )}
          <button
            onClick={runAnalysis}
            disabled={selections.length === 0}
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.85rem',
              color: 'var(--gold)',
              background: 'transparent',
              border: '1px solid var(--gold)',
              borderRadius: 6,
              padding: '0.5rem 1.2rem',
              cursor: selections.length === 0 ? 'not-allowed' : 'pointer',
              opacity: selections.length === 0 ? 0.4 : 1,
              letterSpacing: '0.06em',
            }}
          >
            {analysed ? 'Re-analyse' : 'Analyse →'}
          </button>
        </div>
      </div>

      {/* Card grid by suit */}
      {SUITS_ORDER.map(suit => {
        const suitCards = CARDS.filter(c => c.suit === suit.key)
        return (
          <section key={suit.key} style={{ marginBottom: '2.5rem' }}>
            <h2 style={{
              fontFamily: "'Cinzel',serif",
              color: 'var(--gold)',
              fontSize: '0.85rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '0.9rem',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid var(--border)',
            }}>
              {suit.label} <span style={{ color: 'var(--muted)', fontWeight: 'normal', fontSize: '0.78em' }}>· {suitCards.length} cards</span>
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(82px, 1fr))',
              gap: '0.55rem',
            }}>
              {suitCards.map(card => {
                const state = stateMap.get(card.slug) || 'none'
                const isSelected = state !== 'none'
                const isRev = state === 'reversed'
                return (
                  <button
                    key={card.slug}
                    onClick={() => cycle(card.slug)}
                    title={card.name + (isRev ? ' (reversed)' : isSelected ? ' (upright)' : '')}
                    style={{
                      position: 'relative',
                      padding: 0,
                      background: 'transparent',
                      border: '2px solid',
                      borderColor: isSelected ? 'var(--gold)' : 'var(--border)',
                      borderRadius: 6,
                      cursor: 'pointer',
                      overflow: 'hidden',
                      aspectRatio: '2 / 3',
                      transition: 'border-color .15s, transform .15s, box-shadow .15s',
                      transform: isSelected ? 'translateY(-2px)' : undefined,
                      boxShadow: isSelected ? '0 4px 16px rgba(201,168,76,.25)' : undefined,
                    }}
                  >
                    <CardImage slug={card.slug} alt={card.name} reversed={isRev} />

                    {/* Card name overlay */}
                    <span style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '0.5rem 0.25rem 0.3rem',
                      background: 'linear-gradient(to top, rgba(0,0,0,.88) 0%, rgba(0,0,0,.5) 60%, transparent 100%)',
                      fontFamily: "'Cinzel',serif",
                      fontSize: '.58rem',
                      color: '#e8d5a0',
                      letterSpacing: '.04em',
                      lineHeight: 1.2,
                      textAlign: 'center',
                      pointerEvents: 'none',
                    }}>
                      {card.name}
                    </span>

                    {isRev && (
                      <span style={{
                        position: 'absolute',
                        top: 4,
                        right: 4,
                        background: 'rgba(7,7,26,.85)',
                        color: 'var(--gold)',
                        fontFamily: "'Cinzel',serif",
                        fontSize: '.6rem',
                        letterSpacing: '.08em',
                        padding: '2px 5px',
                        borderRadius: 3,
                        border: '1px solid var(--gold)',
                      }}>
                        R
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </section>
        )
      })}

      {/* Bottom analyse button when not yet analysed */}
      {selections.length > 0 && !analysed && (
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <button
            onClick={runAnalysis}
            style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '0.95rem',
              color: 'var(--gold)',
              background: 'transparent',
              border: '1px solid var(--gold)',
              borderRadius: 8,
              padding: '0.8rem 2.2rem',
              cursor: 'pointer',
              letterSpacing: '0.08em',
            }}
          >
            Analyse my reading →
          </button>
        </div>
      )}

      {/* Analysis output */}
      {analysed && selections.length > 0 && (
        <section id="analysis-result" style={{ scrollMarginTop: 70 }}>

          {/* Headline panel */}
          <div style={{
            background: 'rgba(255,255,255,.025)',
            border: '1px solid var(--gold)',
            borderRadius: 14,
            padding: '1.75rem',
            marginBottom: '1.5rem',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: "'Cinzel',serif",
              fontSize: '.72rem',
              letterSpacing: '.15em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginBottom: '.5rem',
            }}>
              Your reading
            </p>
            <h2 style={{
              fontFamily: "'Cinzel',serif",
              fontSize: 'clamp(1.15rem, 3.5vw, 1.5rem)',
              color: 'var(--gold)',
              letterSpacing: '.04em',
              marginBottom: '1rem',
              lineHeight: 1.4,
            }}>
              {analysis.headline}
            </h2>

            <div style={{
              display: 'flex',
              gap: '1.2rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              color: 'var(--muted)',
              fontSize: '0.82rem',
              paddingTop: '1rem',
              borderTop: '1px solid var(--border)',
            }}>
              <span><strong style={{ color: 'var(--gold)' }}>{analysis.total}</strong> cards</span>
              <span><strong style={{ color: 'var(--gold)' }}>{analysis.majorCount}</strong> Major</span>
              <span><strong style={{ color: 'var(--gold)' }}>{analysis.reversedCount}</strong> reversed</span>
              <span><strong style={{ color: 'var(--gold)' }}>{analysis.courtCount}</strong> court</span>
              {analysis.aceCount > 0 && (
                <span><strong style={{ color: 'var(--gold)' }}>{analysis.aceCount}</strong> aces</span>
              )}
            </div>
          </div>

          {/* Themes */}
          {analysis.themes.length > 0 && (
            <div style={{ marginBottom: '2rem' }}>
              {analysis.themes.map((t, i) => (
                <article key={i} style={{
                  background: 'rgba(255,255,255,.025)',
                  border: '1px solid var(--border)',
                  borderRadius: 12,
                  padding: '1.25rem 1.4rem',
                  marginBottom: '0.85rem',
                }}>
                  <h3 style={{
                    fontFamily: "'Cinzel',serif",
                    fontSize: '1.02rem',
                    color: 'var(--gold)',
                    letterSpacing: '0.03em',
                    marginBottom: '0.5rem',
                  }}>
                    {t.title}
                  </h3>
                  <p style={{ color: 'var(--text)', fontSize: '0.94rem', lineHeight: 1.7, margin: 0 }}>
                    {t.body}
                  </p>
                </article>
              ))}
            </div>
          )}

          {/* Per-card summary */}
          <section style={{ marginBottom: '2rem' }}>
            <h2 style={{
              fontFamily: "'Cinzel',serif",
              color: 'var(--gold)',
              fontSize: '1rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid var(--border)',
            }}>
              Card by card
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {selections.map(sel => {
                const c = cardMap.get(sel.slug)
                if (!c) return null
                const meaning = sel.reversed ? c.rev : c.up
                return (
                  <Link
                    key={sel.slug}
                    href={`/cards/${c.slug}${sel.reversed ? '/reversed' : ''}`}
                    style={{
                      display: 'flex',
                      gap: '0.85rem',
                      background: 'rgba(255,255,255,.025)',
                      border: '1px solid var(--border)',
                      borderRadius: 12,
                      padding: '0.9rem 1rem',
                      textDecoration: 'none',
                      color: 'var(--text)',
                      alignItems: 'flex-start',
                    }}
                  >
                    <div style={{
                      width: 64,
                      aspectRatio: '2/3',
                      flexShrink: 0,
                      borderRadius: 6,
                      overflow: 'hidden',
                      border: '1px solid var(--border)',
                    }}>
                      <CardImage slug={c.slug} alt={c.name} reversed={sel.reversed} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: '0.5rem',
                        flexWrap: 'wrap',
                        marginBottom: '0.3rem',
                      }}>
                        <h3 style={{
                          fontFamily: "'Cinzel',serif",
                          fontSize: '0.95rem',
                          color: 'var(--gold)',
                          letterSpacing: '0.03em',
                          margin: 0,
                        }}>
                          {c.name}
                        </h3>
                        {sel.reversed && (
                          <span style={{
                            fontSize: '0.66rem',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: '#e07b7b',
                            border: '1px solid #e07b7b',
                            borderRadius: 10,
                            padding: '1px 6px',
                            fontFamily: "'Cinzel',serif",
                          }}>
                            Reversed
                          </span>
                        )}
                        <span style={{
                          fontSize: '0.68rem',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: 'var(--muted)',
                          fontFamily: "'Cinzel',serif",
                        }}>
                          {c.suitLabel}
                        </span>
                      </div>
                      <p style={{
                        color: 'var(--text)',
                        fontSize: '0.88rem',
                        lineHeight: 1.65,
                        margin: 0,
                      }}>
                        {meaning}
                      </p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>

          {/* CTA */}
          <div style={{
            display: 'flex',
            gap: '0.75rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '2.5rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
          }}>
            <button
              onClick={clearAll}
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: '0.85rem',
                color: 'var(--muted)',
                background: 'transparent',
                border: '1px solid var(--border)',
                borderRadius: 8,
                padding: '0.7rem 1.4rem',
                cursor: 'pointer',
                letterSpacing: '0.05em',
              }}
            >
              Start over
            </button>
            <Link
              href="/free-reading"
              style={{
                fontFamily: "'Cinzel',serif",
                fontSize: '0.85rem',
                color: 'var(--gold)',
                border: '1px solid var(--gold)',
                borderRadius: 8,
                padding: '0.7rem 1.4rem',
                textDecoration: 'none',
                letterSpacing: '0.05em',
              }}
            >
              Try a digital reading →
            </Link>
          </div>
        </section>
      )}

      {/* Bottom info */}
      <section style={{
        background: 'rgba(255,255,255,.025)',
        border: '1px solid var(--border)',
        borderRadius: 14,
        padding: '1.75rem',
        marginTop: '3rem',
      }}>
        <h2 style={{
          fontFamily: "'Cinzel',serif",
          fontSize: '1.1rem',
          color: 'var(--gold)',
          letterSpacing: '0.04em',
          marginBottom: '0.85rem',
        }}>
          How the analyser reads your selection
        </h2>
        <p style={{ color: 'var(--text)', fontSize: '0.94rem', lineHeight: 1.75, marginBottom: '0.8rem' }}>
          A tarot reading is more than the sum of its cards. The analyser looks for patterns across what you drew — which suit dominates, how many Major Arcana appear, the proportion of reversed cards, whether court figures point to people in the situation, and whether aces are seeding something new. From those signals it constructs a written interpretation alongside an entry for each card.
        </p>
        <p style={{ color: 'var(--text)', fontSize: '0.94rem', lineHeight: 1.75, margin: 0 }}>
          The text is deterministic — the same selection always yields the same reading, so you can revisit your analysis whenever you wish. It is not a replacement for sitting quietly with your cards. Treat it as a second pair of eyes that has read tarot before, and let your own intuition have the final word.
        </p>
      </section>

    </main>
  )
}
