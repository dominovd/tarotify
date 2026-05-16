'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CardImage from '@/components/CardImage'
import { CARDS, type Card } from '@/lib/cards'

// Top combinations by search volume (from SEMrush analysis)
const POPULAR_COMBOS = [
  { slug: 'the-high-priestess-and-page-of-swords', label: 'The High Priestess & Page of Swords' },
  { slug: 'the-world-and-the-star',                label: 'The World & The Star' },
  { slug: 'the-sun-and-the-moon',                  label: 'The Sun & The Moon' },
  { slug: 'justice-and-judgement',                 label: 'Justice & Judgement' },
  { slug: 'death-and-judgement',                   label: 'Death & Judgement' },
  { slug: 'death-and-justice',                     label: 'Death & Justice' },
  { slug: 'the-moon-and-the-tower',                label: 'The Moon & The Tower' },
  { slug: 'death-and-the-tower',                   label: 'Death & The Tower' },
  { slug: 'the-lovers-and-the-devil',              label: 'The Lovers & The Devil' },
  { slug: 'the-hierophant-and-the-lovers',         label: 'The Hierophant & The Lovers' },
  { slug: 'death-and-strength',                    label: 'Death & Strength' },
  { slug: 'death-and-the-devil',                   label: 'Death & The Devil' },
  { slug: 'the-magician-and-temperance',           label: 'The Magician & Temperance' },
  { slug: 'judgement-and-temperance',              label: 'Judgement & Temperance' },
  { slug: 'the-empress-and-the-lovers',            label: 'The Empress & The Lovers' },
  { slug: 'the-chariot-and-strength',              label: 'The Chariot & Strength' },
  { slug: 'the-hermit-and-the-high-priestess',     label: 'The Hermit & The High Priestess' },
  { slug: 'death-and-the-hermit',                  label: 'Death & The Hermit' },
  { slug: 'the-star-and-the-moon',                 label: 'The Star & The Moon' },
  { slug: 'the-devil-and-the-world',               label: 'The Devil & The World' },
  { slug: 'the-emperor-and-strength',              label: 'The Emperor & Strength' },
  { slug: 'the-hanged-man-and-death',              label: 'The Hanged Man & Death' },
  { slug: 'the-fool-and-the-magician',             label: 'The Fool & The Magician' },
  { slug: 'the-chariot-and-death',                 label: 'The Chariot & Death' },
]

function getElementRel(e1: string, e2: string) {
  const has = (e: string, s: string) => e.includes(s)
  if ((has(e1,'Fire')&&has(e2,'Air'))||(has(e1,'Air')&&has(e2,'Fire'))) return {type:'amplifying', desc:'Fire and Air feed each other — this combination surges with inspiration and rapid forward movement.'}
  if ((has(e1,'Earth')&&has(e2,'Water'))||(has(e1,'Water')&&has(e2,'Earth'))) return {type:'nurturing', desc:'Earth and Water create fertile ground — a combination of growth, nourishment and patient manifestation.'}
  if ((has(e1,'Fire')&&has(e2,'Water'))||(has(e1,'Water')&&has(e2,'Fire'))) return {type:'tension', desc:'Fire and Water create steam — this combination holds passion and emotional complexity in dynamic opposition.'}
  if ((has(e1,'Air')&&has(e2,'Earth'))||(has(e1,'Earth')&&has(e2,'Air'))) return {type:'grounding', desc:'Air and Earth balance thought with action — ground your ideas into practical reality.'}
  if (e1===e2||e1.includes(e2)||e2.includes(e1)) return {type:'resonant', desc:'Sharing the same element, these cards speak the same language — their energies amplify and deepen each other powerfully.'}
  return {type:'complex', desc:'These two cards carry distinct elemental energies creating a layered, multifaceted combination.'}
}

function interpret(c1: Card, c2: Card) {
  const rel = getElementRel(c1.element, c2.element)
  const kw1 = c1.kw_up.slice(0,2).join(' and '), kw2 = c2.kw_up.slice(0,2).join(' and ')
  const mains: Record<string, string> = {
    amplifying: `The pairing of ${c1.name} and ${c2.name} creates a powerfully amplified current. ${c1.name} brings ${c1.kw_up[0]} and ${c1.kw_up[1]}, while ${c2.name} adds ${c2.kw_up[0]} and ${c2.kw_up[1]}. ${rel.desc} Together they ignite momentum — ideas and actions move fast. The core themes running through this combination are ${kw1} meeting ${kw2}. Something is accelerating: you are being called to act with both awareness and drive.`,
    nurturing: `${c1.name} and ${c2.name} create a deeply supportive pairing. ${c1.name} carries ${kw1}, and ${c2.name} holds ${kw2}. ${rel.desc} Together they ask you to be patient, tend to what is growing, and trust the process. This combination rewards steadiness, care and long-term thinking over quick wins.`,
    tension: `${c1.name} and ${c2.name} create a dynamic, charged tension. ${kw1} from ${c1.name} and ${kw2} from ${c2.name} — these are not opposing forces so much as complementary polarities. ${rel.desc} The pull between them is the heart of this combination's message: both energies are valid; the work is in holding them together.`,
    grounding: `${c1.name} and ${c2.name} bridge vision with reality. ${kw1} meets ${kw2}. ${rel.desc} This combination rewards those who can think clearly and follow through methodically. The ideas must become actions.`,
    resonant: `When ${c1.name} meets ${c2.name}, their shared elemental nature creates deep resonance. ${kw1} and ${kw2} weave into a unified message — a combination of reinforcement and depth. What each card suggests alone becomes more certain and more important together.`,
    complex: `${c1.name} and ${c2.name} bring together two distinct archetypal currents. ${kw1} exists in dialogue with ${kw2}. ${rel.desc} Reading this combination requires holding both energies — each brings its own wisdom, and the message emerges in the space between them.`,
  }
  return {
    main: mains[rel.type],
    love: `In love, ${c1.name} and ${c2.name} suggest a relationship shaped by ${c1.kw_up[0]} and ${c2.kw_up[0]}. This combination points to a partnership where both emotional truth and personal growth are central themes.`,
    career: `Professionally, the meeting of ${c1.name}'s ${c1.kw_up[0]} with ${c2.name}'s ${c2.kw_up[0]} describes a dynamic where ${rel.type === 'amplifying' ? 'bold moves and fast decisions lead to breakthroughs' : rel.type === 'grounding' ? 'careful planning and steady effort produce the best results' : 'genuine collaboration and honest assessment are your greatest assets'}.`,
    spirit: `For personal growth, these two cards invite you to explore the relationship between ${c1.kw_up[0]} and ${c2.kw_up[0]}. ${c1.name} has prepared you; ${c2.name} shows you where to go next. The lesson is integration — how can both qualities strengthen each other within you?`,
  }
}

export default function CombinationClient() {
  const [q1, setQ1] = useState('')
  const [q2, setQ2] = useState('')
  const [chosen, setChosen] = useState<[Card|null, Card|null]>([null, null])
  const [open, setOpen] = useState<1|2|null>(null)
  const [result, setResult] = useState<ReturnType<typeof interpret>|null>(null)
  const ref1 = useRef<HTMLDivElement>(null)
  const ref2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (open === 1 && ref1.current && !ref1.current.contains(e.target as Node)) setOpen(null)
      if (open === 2 && ref2.current && !ref2.current.contains(e.target as Node)) setOpen(null)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  function filtered(q: string, exclude?: Card|null) {
    return CARDS.filter(c => c !== exclude && (c.name.toLowerCase().includes(q.toLowerCase()) || c.suitLabel.toLowerCase().includes(q.toLowerCase()))).slice(0,24)
  }

  function selectCard(i: 1|2, card: Card) {
    setChosen(prev => i === 1 ? [card, prev[1]] : [prev[0], card])
    if (i === 1) setQ1(''); else setQ2('')
    setOpen(null)
    setResult(null)
  }

  function clearCard(i: 1|2) {
    setChosen(prev => i === 1 ? [null, prev[1]] : [prev[0], null])
    setResult(null)
  }

  const [c1, c2] = chosen
  const canInterpret = c1 && c2

  function runInterpret() {
    if (!c1 || !c2) return
    setResult(interpret(c1, c2))
    setTimeout(() => document.getElementById('combo-result')?.scrollIntoView({ behavior:'smooth', block:'start' }), 50)
  }

  const Selector = ({ idx, q, setQ, card, refEl }: { idx: 1|2, q: string, setQ: (s:string)=>void, card: Card|null, refEl: React.RefObject<HTMLDivElement> }) => (
    <div ref={refEl} style={{ background:'var(--on-bg-03)', border:'1px solid var(--border)', borderRadius:14, padding:'1.25rem', flex:1 }}>
      <div style={{ fontFamily:"'Cinzel',serif", fontSize:'.72rem', letterSpacing:'.14em', color:'var(--gold)', opacity:.7, textTransform:'uppercase', marginBottom:'.75rem' }}>
        {idx === 1 ? 'First Card' : 'Second Card'}
      </div>
      {!card ? (
        <div style={{ position:'relative' }}>
          <input
            type="text" value={q} placeholder="Search card name…"
            onChange={e => { setQ(e.target.value); setOpen(idx) }}
            onFocus={() => setOpen(idx)}
            style={{ width:'100%', background:'var(--on-bg-04)', border:'1px solid rgba(201,168,76,.2)', borderRadius:8, color:'var(--text)', fontFamily:"'Lato',sans-serif", fontSize:'.9rem', padding:'.6rem .8rem', outline:'none' }}
          />
          {open === idx && (
            <div style={{ position:'absolute', top:'100%', left:0, right:0, marginTop:4, maxHeight:220, overflowY:'auto', background:'#0e0e28', border:'1px solid var(--border)', borderRadius:8, zIndex:10 }}>
              {filtered(q, idx === 1 ? c2 : c1).map(card => (
                <div key={card.slug} onMouseDown={() => selectCard(idx, card)} style={{ padding:'.5rem .9rem', fontSize:'.82rem', cursor:'pointer', display:'flex', alignItems:'center', gap:'.6rem', color:'var(--text)' }}>
                  <div style={{ position:'relative', width:20, height:30, flexShrink:0, borderRadius:3, overflow:'hidden' }}>
                    <Image src={`/cards/${card.slug}.webp`} alt={card.name} fill sizes="20px" style={{ objectFit:'cover' }} />
                  </div>
                  {card.name}
                  <span style={{ marginLeft:'auto', color:'var(--muted)', fontSize:'.72rem' }}>{card.suitLabel}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div style={{ display:'flex', alignItems:'center', gap:'.75rem', padding:'.75rem', background:'rgba(201,168,76,.06)', border:'1px solid rgba(201,168,76,.2)', borderRadius:8 }}>
          <div style={{ width:40, height:60, flexShrink:0, borderRadius:6, overflow:'hidden', border:'1px solid rgba(201,168,76,.3)' }}>
            <CardImage slug={card.slug} alt={card.name} />
          </div>
          <div style={{ flex:1 }}>
            <div style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'.88rem' }}>{card.name}</div>
            <div style={{ color:'var(--muted)', fontSize:'.72rem' }}>{card.suitLabel} · {card.element}</div>
          </div>
          <button onClick={() => clearCard(idx)} style={{ background:'none', border:'none', color:'var(--muted)', cursor:'pointer', fontSize:'1rem', padding:'.2rem' }}>✕</button>
        </div>
      )}
    </div>
  )

  return (
    <div style={{ maxWidth:820, margin:'0 auto', padding:'3rem 1.5rem 5rem' }}>
      <div style={{ textAlign:'center', marginBottom:'2.5rem' }}>
        <div style={{ fontSize:'2.5rem', marginBottom:'1rem', opacity:.8 }}>✦</div>
        <h1 style={{ fontFamily:"'Cinzel',serif", fontSize:'clamp(1.4rem,4vw,2rem)', color:'var(--gold)', marginBottom:'.75rem' }}>Tarot Combination Calculator</h1>
        <p style={{ color:'var(--muted)', maxWidth:520, margin:'0 auto', lineHeight:1.7 }}>Select any two cards and discover how their energies interact — in love, career and personal growth.</p>
      </div>

      <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap', marginBottom:'1.5rem', alignItems:'flex-start' }}>
        <Selector idx={1} q={q1} setQ={setQ1} card={c1} refEl={ref1} />
        <div style={{ fontFamily:"'Cinzel',serif", fontSize:'1.5rem', color:'var(--gold)', opacity:.3, alignSelf:'center', paddingTop:'.5rem' }}>+</div>
        <Selector idx={2} q={q2} setQ={setQ2} card={c2} refEl={ref2} />
      </div>

      <button
        onClick={runInterpret} disabled={!canInterpret}
        style={{ display:'block', width:'100%', padding:'1rem', background: canInterpret ? 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))' : 'var(--on-bg-02)', border: `1px solid ${canInterpret ? 'var(--gold)' : 'var(--border)'}`, borderRadius:12, color: canInterpret ? 'var(--gold)' : 'var(--muted)', fontFamily:"'Cinzel',serif", fontSize:'1rem', letterSpacing:'.1em', cursor: canInterpret ? 'pointer' : 'not-allowed', marginBottom:'2rem', opacity: canInterpret ? 1 : .5 }}>
        ✦ Interpret This Combination
      </button>

      {result && c1 && c2 && (
        <div id="combo-result" style={{ animation:'fadeUp .5s ease forwards' }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'1rem', marginBottom:'2rem', flexWrap:'wrap' }}>
            {[c1,c2].map((c,i) => (
              <span key={i} style={i===0?{display:'flex',alignItems:'center',gap:'.5rem',background:'rgba(201,168,76,.08)',border:'1px solid var(--border)',borderRadius:100,padding:'.4rem 1rem',fontFamily:"'Cinzel',serif",fontSize:'.82rem',color:'var(--gold)'}:{display:'flex',alignItems:'center',gap:'.5rem',background:'rgba(201,168,76,.08)',border:'1px solid var(--border)',borderRadius:100,padding:'.4rem 1rem',fontFamily:"'Cinzel',serif",fontSize:'.82rem',color:'var(--gold)'}}>
                <div style={{ position:'relative', width:18, height:27, flexShrink:0, borderRadius:3, overflow:'hidden' }}>
                  <Image src={`/cards/${c.slug}.webp`} alt={c.name} fill sizes="18px" style={{ objectFit:'cover' }} />
                </div>
                {c.name}
              </span>
            )).reduce((acc, el, i) => i === 0 ? [el] : [...acc, <span key="plus" style={{color:'var(--muted)',opacity:.5}}>✦</span>, el], [] as React.ReactNode[])}
          </div>

          <div style={{ background:'var(--on-bg-03)', border:'1px solid var(--border)', borderRadius:14, padding:'1.5rem', marginBottom:'1rem' }}>
            <div style={{ fontFamily:"'Cinzel',serif", fontSize:'.7rem', letterSpacing:'.14em', color:'var(--gold)', opacity:.65, textTransform:'uppercase', marginBottom:'.75rem' }}>Combined Energy</div>
            <p style={{ color:'var(--text)', lineHeight:1.75 }}>{result.main}</p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:'.75rem', marginBottom:'1.5rem' }}>
            {[['❤️','Love & Relationships',result.love],['💼','Career & Money',result.career],['🌿','Personal Growth',result.spirit]].map(([icon,label,text])=>(
              <div key={label as string} style={{ background:'var(--on-bg-03)', border:'1px solid var(--border)', borderRadius:12, padding:'1rem' }}>
                <div style={{ fontSize:'1.2rem', marginBottom:'.4rem' }}>{icon}</div>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:'.68rem', letterSpacing:'.12em', color:'var(--gold)', opacity:.65, textTransform:'uppercase', marginBottom:'.5rem' }}>{label}</div>
                <p style={{ color:'var(--muted)', fontSize:'.83rem', lineHeight:1.6 }}>{text as string}</p>
              </div>
            ))}
          </div>

          <div style={{ display:'flex', gap:'.75rem', justifyContent:'center', flexWrap:'wrap', marginBottom:'1.5rem' }}>
            {[c1,c2].map(c => (
              <Link key={c.slug} href={`/cards/${c.slug}`} style={{ padding:'.5rem 1.1rem', border:'1px solid var(--border)', borderRadius:8, color:'var(--muted)', fontSize:'.8rem', fontFamily:"'Cinzel',serif", letterSpacing:'.04em' }}>
                Read {c.name} →
              </Link>
            ))}
          </div>

          <button onClick={() => { setChosen([null,null]); setResult(null); window.scrollTo({top:0,behavior:'smooth'}) }} style={{ display:'block', width:'100%', padding:'.75rem', background:'transparent', border:'1px solid var(--border)', borderRadius:10, color:'var(--muted)', fontFamily:"'Cinzel',serif", fontSize:'.85rem', letterSpacing:'.08em', cursor:'pointer' }}>
            Try Another Combination
          </button>
        </div>
      )}

      {/* Popular Combinations */}
      <div style={{ marginTop:'4rem', borderTop:'1px solid rgba(201,168,76,.1)', paddingTop:'2.5rem' }}>
        <h2 style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'1.1rem', marginBottom:'.5rem', letterSpacing:'.06em' }}>Popular Tarot Combinations</h2>
        <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.7, marginBottom:'1.5rem' }}>
          Explore the most searched tarot card pairings — each with a full interpretation for love, career and personal growth.
        </p>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:'.6rem' }}>
          {POPULAR_COMBOS.map(({ slug, label }) => (
            <Link key={slug} href={`/combination/${slug}`} style={{ display:'flex', alignItems:'center', gap:'.6rem', padding:'.65rem .9rem', background:'var(--on-bg-03)', border:'1px solid var(--border)', borderRadius:10, color:'var(--muted)', fontSize:'.82rem', fontFamily:"'Lato',sans-serif" }}>
              <span style={{ color:'var(--gold)', opacity:.5, fontSize:'.7rem' }}>✦</span>
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div style={{ marginTop:'3rem', borderTop:'1px solid rgba(201,168,76,.1)', paddingTop:'2.5rem' }}>
        <h2 style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'1.1rem', marginBottom:'1rem', letterSpacing:'.06em' }}>How Tarot Combinations Work</h2>
        <p style={{ color:'var(--muted)', lineHeight:1.75, fontSize:'.95rem', marginBottom:'.75rem' }}>In a tarot reading, cards rarely speak alone. Every card carries its own archetypal energy — but the real message emerges when two cards enter into dialogue. Their elemental natures interact: Fire and Air amplify each other into swift, inspired action; Earth and Water create patient, nourishing growth; Fire and Water generate charged, passionate tension; Air and Earth bridge vision with practical reality. These elemental relationships form the foundation of how any pairing should be read.</p>
        <p style={{ color:'var(--muted)', lineHeight:1.75, fontSize:'.95rem', marginBottom:'.75rem' }}>The Tarot Combination Calculator analyses each pairing across three layers. First, it identifies the elemental relationship between the two cards and describes the energetic dynamic that creates. Second, it draws on the core upright keywords and archetypal themes of each card — not just their surface meanings but the deeper currents they represent. Third, it translates that combined energy into three specific contexts: love and relationships, career and finances, and personal growth. The result is a reading that honours the complexity of the pairing rather than reducing it to a single line.</p>
        <p style={{ color:'var(--muted)', lineHeight:1.75, fontSize:'.95rem' }}>Use this tool in three ways: to analyse a pairing that appeared together in a reading you received; to study the deck more deeply by exploring how cards you find challenging relate to cards you understand well; or to investigate a specific combination you are curious about before it appears in a spread. The more you explore how cards speak to each other, the richer your readings will become.</p>
      </div>

      <div style={{ marginTop:'3rem', borderTop:'1px solid rgba(201,168,76,.1)', paddingTop:'2.5rem' }}>
        <h2 style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'1.1rem', marginBottom:'1rem', letterSpacing:'.06em' }}>Reading Three Tarot Card Combinations</h2>
        <p style={{ color:'var(--muted)', lineHeight:1.75, fontSize:'.95rem', marginBottom:'.75rem' }}>When three cards land together in a spread, the most reliable approach is to read them in pairs first: cards 1 and 2, then cards 2 and 3, then cards 1 and 3. Each pair tells part of the story. Once you have read all three pairings, step back and ask what all three cards are saying as a unified group — a triadic message that is often greater than the sum of its parts.</p>
        <p style={{ color:'var(--muted)', lineHeight:1.75, fontSize:'.95rem', marginBottom:'.75rem' }}>Pay close attention to repeating suits: two or three cards from the same suit signal that the energy of that element — Cups for emotions, Wands for passion and drive, Swords for thought and conflict, Pentacles for material life — is the dominant current of the reading. Repeating numbers carry numerological weight: three cards all bearing the number 7, for instance, point to a period of inner reflection and reassessment regardless of their individual meanings.</p>
        <p style={{ color:'var(--muted)', lineHeight:1.75, fontSize:'.95rem' }}>For a full guide to reading three cards together — including the most useful position variations and how to find the narrative thread — visit the <Link href="/spreads/three-card" style={{ color:'var(--gold)', opacity:.8 }}>Three Card Tarot Spread</Link> page.</p>
      </div>
      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </div>
  )
}
