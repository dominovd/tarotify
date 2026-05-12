'use client'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { CARDS } from '@/lib/cards'
import CardImage from '@/components/CardImage'

type DrawnCard = { card: typeof CARDS[0]; flipped: boolean; reversed: boolean }

const POSITIONS = ['Past', 'Present', 'Future']

const TEMPLATES: Record<string, string[]> = {
  love: [
    'This three-card spread reveals a journey of the heart. The past position shows {past_name} — {past_kw} — laying the emotional foundation you carry into this question. The present, {present_name}, speaks of {present_kw}: this is the current energy shaping your love life right now. Looking ahead, {future_name} offers the energy of {future_kw} — suggesting that the path forward involves {future_theme}. The invitation from these three cards together is to honour what you have felt, engage honestly with what is real now, and move toward love with both courage and clarity.',
    'In matters of the heart, your three cards speak as one unified message. {past_name} in the past shows the emotional pattern or relationship dynamic you are moving from. {present_name} in the present position describes where your heart truly is right now — the energy of {present_kw} is asking to be felt fully, not managed. {future_name} suggests that what is emerging is the possibility of {future_theme}. Trust your emotional intelligence in this — it knows more than your logic.'
  ],
  career: [
    'Your three cards reveal a professional story worth examining. {past_name} in the past position holds the energy of {past_kw} — the professional experience or pattern that has shaped you. In the present, {present_name} brings {present_kw}: this is the current creative and practical energy available to you right now. The future card, {future_name}, points toward {future_theme}. The message across these three cards is clear: the foundation you have built is real, the present moment holds genuine possibility, and what is ahead rewards those who engage with focus, authenticity and strategic vision.',
    'These three cards paint a picture of your professional path. The past shows {past_name} — the skills, experience and energy you bring from previous chapters. {present_name} sits at the centre of your current work life, bringing the themes of {present_kw} into everything you do right now. Your future card, {future_name}, suggests the themes of {future_theme} will define the next chapter. Show up fully for what is in front of you — the path is opening.'
  ],
  default: [
    'Your three cards have a conversation about where you have been, where you are, and where you are heading. {past_name} in the past position carries the energy of {past_kw} — this is the force that has been shaping the ground beneath you. {present_name} describes the living reality of your present moment: {present_kw} is the energy available to you right now, waiting to be used wisely. {future_name} lights the path ahead with the themes of {future_theme}. What strikes me about this spread is the movement it describes — from {past_kw} through {present_kw} toward {future_theme}. This is not a random arrangement. These three cards together are telling you something about the arc of your current journey.',
    'The cards have chosen their places with intention. In the past, {past_name} — with its themes of {past_kw} — tells you something about the root energy you are working from. Right now, {present_name} is the card most alive in your life: {present_kw} is calling for your full attention. And in the future position, {future_name} suggests that what is coming requires the energy of {future_theme}. Hold this spread lightly but take it seriously. The three cards together form a single message — read the through-line, not just the individual meanings.'
  ]
}

function getInterpretation(cards: DrawnCard[], question: string): string {
  const topic = question.toLowerCase().includes('love') || question.toLowerCase().includes('relationship') ? 'love'
    : question.toLowerCase().includes('job') || question.toLowerCase().includes('career') || question.toLowerCase().includes('work') ? 'career'
    : 'default'
  const pool = TEMPLATES[topic]
  const tpl = pool[Math.floor(Math.random() * pool.length)]
  const [past, present, future] = cards.map(d => d.card)
  return tpl
    .replace(/{past_name}/g, past.name)
    .replace(/{past_kw}/g, past.kw_up.slice(0,2).join(' and '))
    .replace(/{present_name}/g, present.name)
    .replace(/{present_kw}/g, present.kw_up.slice(0,2).join(' and '))
    .replace(/{future_name}/g, future.name)
    .replace(/{future_kw}/g, future.kw_up.slice(0,2).join(' and '))
    .replace(/{future_theme}/g, future.kw_up.slice(0,3).join(', '))
}

export default function HomeClient() {
  const [question, setQuestion] = useState('')
  const [screen, setScreen] = useState<'home' | 'draw' | 'reading'>('home')
  const [drawn, setDrawn] = useState<DrawnCard[]>([])
  const [allFlipped, setAllFlipped] = useState(false)
  const [interpretation, setInterpretation] = useState('')
  const [typing, setTyping] = useState(false)
  const [displayText, setDisplayText] = useState('')
  const readingRef = useRef<HTMLDivElement>(null)

  function drawCards() {
    const shuffled = [...CARDS].sort(() => Math.random() - .5)
    const three = shuffled.slice(0, 3).map(card => ({
      card, flipped: false, reversed: Math.random() > .65
    }))
    setDrawn(three)
    setAllFlipped(false)
    setScreen('draw')
  }

  function flipCard(i: number) {
    setDrawn(prev => {
      const next = [...prev]
      next[i] = { ...next[i], flipped: true }
      const allNowFlipped = next.every(c => c.flipped)
      if (allNowFlipped) setAllFlipped(true)
      return next
    })
  }

  function revealAll() {
    setDrawn(prev => prev.map(c => ({ ...c, flipped: true })))
    setAllFlipped(true)
  }

  function getReading() {
    const text = getInterpretation(drawn, question)
    setInterpretation(text)
    setDisplayText('')
    setTyping(true)
    setScreen('reading')
    let i = 0
    const interval = setInterval(() => {
      i++
      setDisplayText(text.slice(0, i))
      if (i >= text.length) { clearInterval(interval); setTyping(false) }
    }, 18)
  }

  function saveToJournal() {
    const entries = JSON.parse(localStorage.getItem('tarotify_journal') || '[]')
    entries.unshift({
      date: new Date().toLocaleDateString(),
      question,
      cards: drawn.map(d => d.card.name),
      reading: interpretation
    })
    localStorage.setItem('tarotify_journal', JSON.stringify(entries.slice(0, 20)))
    alert('Saved to journal ✓')
  }

  if (screen === 'home') return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem', textAlign: 'center' }}>
      <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>🌙</div>
      <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.6rem,4vw,2.4rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
        What does the universe<br />want you to know?
      </h1>
      <p style={{ color: 'var(--muted)', maxWidth: 480, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
        Ask a question, draw three cards, and receive a personalised reading to guide your reflection.
      </p>
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '1.5rem' }}>
        <div style={{ fontFamily:"'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase', marginBottom: '.75rem' }}>
          Your Question
        </div>
        <textarea
          value={question}
          onChange={e => setQuestion(e.target.value)}
          placeholder="e.g. What should I focus on right now? What does this relationship need?"
          style={{ width:'100%', background:'rgba(255,255,255,.04)', border:'1px solid rgba(201,168,76,.2)', borderRadius:10, color:'var(--text)', fontFamily:"'Lato',sans-serif", fontSize:'1rem', padding:'1rem', resize:'none', height:90, outline:'none' }}
        />
      </div>
      <button
        onClick={drawCards}
        style={{ display:'block', width:'100%', padding:'1rem', background:'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border:'1px solid var(--gold)', borderRadius:12, color:'var(--gold)', fontFamily:"'Cinzel',serif", fontSize:'1rem', letterSpacing:'.1em', cursor:'pointer' }}>
        ✦ Draw Three Cards
      </button>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(130px,1fr))', gap:'.65rem', marginTop:'3rem' }}>
        {([
          { icon: '🔮', label: 'Yes / No',       href: '/yes-no' },
          { icon: 'card',label: 'Card Meanings',  href: '/cards' },
          { icon: '✦',  label: 'Spreads',         href: '/spreads' },
          { icon: '☽',  label: 'Card of the Day', href: '/daily' },
          { icon: '◈',  label: 'Combinations',    href: '/combination' },
          { icon: '📖', label: 'How to Read',     href: '/how-to-read-tarot' },
          { icon: '★',  label: 'Birth Card',      href: '/birth-card' },
          { icon: '✺',  label: 'Manifestation',   href: '/manifestation' },
        ]).map(({ icon, label, href }) => (
          <Link key={href} href={href} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'.5rem', color:'var(--muted)', padding:'.9rem .75rem', border:'1px solid var(--border)', borderRadius:12, textDecoration:'none', transition:'border-color .2s' }}>
            {icon === 'card' ? (
              <svg width="28" height="42" viewBox="0 0 28 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1" y="1" width="26" height="40" rx="3.5" stroke="rgba(201,168,76,.55)" strokeWidth="1"/>
                <rect x="4" y="4" width="20" height="34" rx="2" stroke="rgba(201,168,76,.25)" strokeWidth=".6"/>
                <circle cx="14" cy="21" r="5" stroke="rgba(201,168,76,.45)" strokeWidth=".8"/>
                <line x1="14" y1="9" x2="14" y2="13" stroke="rgba(201,168,76,.3)" strokeWidth=".7"/>
                <line x1="14" y1="29" x2="14" y2="33" stroke="rgba(201,168,76,.3)" strokeWidth=".7"/>
                <line x1="8"  y1="21" x2="20" y2="21" stroke="rgba(201,168,76,.3)" strokeWidth=".7" />
                <circle cx="14" cy="21" r="1.8" fill="rgba(201,168,76,.5)"/>
              </svg>
            ) : (
              <span style={{ fontSize:'1.35rem' }}>{icon}</span>
            )}
            <span style={{ fontFamily:"'Cinzel',serif", fontSize:'.7rem', letterSpacing:'.05em', textAlign:'center', lineHeight:1.3 }}>{label}</span>
          </Link>
        ))}
      </div>
    </div>
  )

  if (screen === 'draw') return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 1rem 5rem', textAlign: 'center' }}>
      <h2 style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', marginBottom:'.5rem', fontSize:'1.1rem', letterSpacing:'.08em' }}>Your Three-Card Spread</h2>
      {question && <p style={{ color:'var(--muted)', fontSize:'.9rem', marginBottom:'1.5rem', fontStyle:'italic' }}>"{question}"</p>}
      <p style={{ color:'var(--muted)', fontSize:'.82rem', marginBottom:'2rem' }}>Tap each card to reveal</p>
      <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap', marginBottom:'2rem' }}>
        {drawn.map((d, i) => (
          <div key={i} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'.75rem' }}>
            <div style={{ fontSize:'.72rem', fontFamily:"'Cinzel',serif", letterSpacing:'.12em', color:'var(--muted)', textTransform:'uppercase' }}>{POSITIONS[i]}</div>
            <div
              onClick={() => !d.flipped && flipCard(i)}
              style={{ width:140, height:220, perspective:1000, cursor: d.flipped ? 'default' : 'pointer' }}
            >
              <div style={{ width:'100%', height:'100%', position:'relative', transformStyle:'preserve-3d', transition:'transform .7s cubic-bezier(.4,0,.2,1)', transform: d.flipped ? 'rotateY(180deg)' : 'none' }}>
                <div style={{ position:'absolute', inset:0, backfaceVisibility:'hidden', borderRadius:12, background:'linear-gradient(145deg,#1a1a3a,#0d0d2b)', border:'2px solid rgba(201,168,76,.3)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2.5rem', opacity:.3 }}>☽✦☾</div>
                <div style={{ position:'absolute', inset:0, backfaceVisibility:'hidden', transform:'rotateY(180deg)', borderRadius:12, overflow:'hidden', border:'2px solid rgba(201,168,76,.4)' }}>
                  <CardImage slug={d.card.slug} alt={d.card.name} reversed={d.reversed} />
                  <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'.5rem .4rem', background:'linear-gradient(to top, rgba(0,0,0,.9) 0%, transparent 100%)', textAlign:'center' }}>
                    <div style={{ fontFamily:"'Cinzel',serif", fontSize:'.65rem', color:'#e8d5a0', letterSpacing:'.06em' }}>{d.card.name}</div>
                    <div style={{ fontSize:'.55rem', color:'rgba(232,213,160,.6)', letterSpacing:'.1em', textTransform:'uppercase', marginTop:1 }}>{d.card.suitLabel}</div>
                    {d.reversed && <div style={{ fontSize:'.5rem', color:'#c9a84c', letterSpacing:'.08em', textTransform:'uppercase', marginTop:1 }}>Reversed</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!allFlipped && (
        <button onClick={revealAll} style={{ marginBottom:'1rem', padding:'.7rem 1.5rem', background:'transparent', border:'1px solid var(--border)', borderRadius:10, color:'var(--muted)', fontFamily:"'Cinzel',serif", fontSize:'.82rem', letterSpacing:'.08em', cursor:'pointer' }}>
          Reveal All Cards
        </button>
      )}
      {allFlipped && (
        <button onClick={getReading} style={{ display:'block', width:'100%', maxWidth:400, margin:'0 auto', padding:'1rem', background:'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border:'1px solid var(--gold)', borderRadius:12, color:'var(--gold)', fontFamily:"'Cinzel',serif", fontSize:'1rem', letterSpacing:'.1em', cursor:'pointer' }}>
          ✦ Get Your Reading
        </button>
      )}
    </div>
  )

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '2rem 1.5rem 5rem' }} ref={readingRef}>
      <h2 style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', textAlign:'center', marginBottom:'.5rem', letterSpacing:'.08em' }}>Your Reading</h2>
      {question && <p style={{ color:'var(--muted)', textAlign:'center', fontSize:'.9rem', marginBottom:'1.5rem', fontStyle:'italic' }}>"{question}"</p>}
      <div style={{ display:'flex', gap:'.75rem', justifyContent:'center', marginBottom:'2.5rem', flexWrap:'wrap' }}>
        {drawn.map((d, i) => (
          <div key={i} style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'.4rem', padding:'.75rem', background:'rgba(201,168,76,.06)', border:'1px solid var(--border)', borderRadius:10, minWidth:100 }}>
            <div style={{ width:56, height:84, borderRadius:6, overflow:'hidden', border:'1px solid rgba(201,168,76,.3)', flexShrink:0 }}>
              <CardImage slug={d.card.slug} alt={d.card.name} reversed={d.reversed} />
            </div>
            <div style={{ fontFamily:"'Cinzel',serif", fontSize:'.7rem', color:'var(--gold)', letterSpacing:'.06em', textAlign:'center' }}>{d.card.name}</div>
            <div style={{ fontSize:'.6rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'.08em' }}>{POSITIONS[i]}</div>
          </div>
        ))}
      </div>
      <div style={{ background:'rgba(255,255,255,.03)', border:'1px solid var(--border)', borderRadius:14, padding:'1.75rem', marginBottom:'1.5rem' }}>
        <h3 style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', marginBottom:'1rem', fontSize:'.9rem', letterSpacing:'.1em' }}>✦ Your Reflection</h3>
        {typing ? (
          <p style={{ color:'var(--text)', lineHeight:1.8, fontSize:'.97rem' }}>{displayText}<span style={{ animation:'blink 1s infinite' }}>|</span></p>
        ) : (
          <p style={{ color:'var(--text)', lineHeight:1.8, fontSize:'.97rem' }}>{displayText}</p>
        )}
      </div>
      {!typing && (
        <>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'.75rem', marginBottom:'1.5rem' }}>
            {drawn.map((d,i) => (
              <Link key={i} href={`/cards/${d.card.slug}`} style={{ padding:'1rem', background:'rgba(255,255,255,.02)', border:'1px solid var(--border)', borderRadius:10 }}>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:'.7rem', color:'var(--gold)', opacity:.65, letterSpacing:'.12em', textTransform:'uppercase', marginBottom:'.4rem' }}>{POSITIONS[i]}</div>
                <div style={{ fontSize:'.85rem', color:'var(--text)', marginBottom:'.25rem' }}>{d.card.name}</div>
                <div style={{ fontSize:'.75rem', color:'var(--muted)' }}>{(d.reversed ? d.card.kw_rev : d.card.kw_up).slice(0,3).join(' · ')}</div>
              </Link>
            ))}
          </div>
          <div style={{ display:'flex', gap:'.75rem', flexWrap:'wrap' }}>
            <button onClick={saveToJournal} style={{ flex:1, minWidth:140, padding:'.85rem', background:'transparent', border:'1px solid var(--border)', borderRadius:10, color:'var(--muted)', fontFamily:"'Cinzel',serif", fontSize:'.82rem', letterSpacing:'.06em', cursor:'pointer' }}>
              Save to Journal
            </button>
            <button onClick={() => setScreen('home')} style={{ flex:1, minWidth:140, padding:'.85rem', background:'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border:'1px solid var(--gold)', borderRadius:10, color:'var(--gold)', fontFamily:"'Cinzel',serif", fontSize:'.82rem', letterSpacing:'.06em', cursor:'pointer' }}>
              New Reading
            </button>
          </div>
        </>
      )}
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </div>
  )
}
