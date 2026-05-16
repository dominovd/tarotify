import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Celtic Cross Tarot Spread — 10-Card Layout Guide | TarotAxis',
  description: 'Learn how to read the Celtic Cross tarot spread — the most powerful 10-card layout in tarot. Discover what each position means and how to interpret every card in context.',
  alternates: {
    canonical: 'https://tarotaxis.com/spreads/celtic-cross',
    languages: {
      'en': 'https://tarotaxis.com/spreads/celtic-cross',
      'es': 'https://tarotaxis.com/es/tiradas/cruz-celta',
      'x-default': 'https://tarotaxis.com/spreads/celtic-cross',
    },
  },
  openGraph: {
    title: 'Celtic Cross Tarot Spread — Complete Guide',
    description: 'Master the Celtic Cross: the classic 10-card tarot spread used for deep, comprehensive readings on any question.',
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'The Present',
    subtitle: 'The Heart of the Matter',
    desc: 'This card represents the central issue, situation or energy surrounding your question right now. It is the heart of the reading — everything else relates back to it. This card captures the dominant energy in your life at this moment.',
    placement: 'Centre',
  },
  {
    num: 2,
    name: 'The Cross',
    subtitle: 'What Crosses You',
    desc: 'Placed horizontally across card 1, this card shows what is crossing or challenging you — the immediate obstacle, opposing force or complicating factor. It is not necessarily negative; sometimes a crossing card represents a helpful tension or a necessary challenge.',
    placement: 'Crossing Centre',
  },
  {
    num: 3,
    name: 'The Foundation',
    subtitle: 'Root Cause / Distant Past',
    desc: 'This card reveals the unconscious root of the situation — what underlies everything, often something from the past that has been influencing events without your full awareness. It is the foundation on which the current situation rests.',
    placement: 'Below Centre',
  },
  {
    num: 4,
    name: 'The Recent Past',
    subtitle: 'What Is Passing Away',
    desc: 'This card shows what is moving out of your life — energies, events or circumstances that have recently influenced the situation and are now fading. Understanding what is leaving helps clarify what is being released.',
    placement: 'Left of Centre',
  },
  {
    num: 5,
    name: 'The Crown',
    subtitle: 'Your Potential / Conscious Goal',
    desc: 'This card represents what you are consciously aiming for, hoping for or thinking about in relation to the question. It can also show what is possible but not yet certain — the potential ceiling of the situation.',
    placement: 'Above Centre',
  },
  {
    num: 6,
    name: 'The Near Future',
    subtitle: 'What Is Coming',
    desc: 'This card reveals what is moving toward you — the next significant energy, event or development likely to unfold in the near term. It is not the final outcome, but the next chapter.',
    placement: 'Right of Centre',
  },
  {
    num: 7,
    name: 'Your Self',
    subtitle: 'How You See Yourself',
    desc: 'The first card in the staff column, this position reveals how you see yourself in relation to this situation — your self-image, your fears, your sense of personal power or limitation. It reflects your internal stance.',
    placement: 'Staff — Bottom',
  },
  {
    num: 8,
    name: 'Your Environment',
    subtitle: 'External Influences',
    desc: 'This card shows the people and circumstances around you — how others see you, what external forces are at play, and the environment in which the situation is unfolding. It is the outer world\'s role in your question.',
    placement: 'Staff — Second',
  },
  {
    num: 9,
    name: 'Hopes and Fears',
    subtitle: 'What You Hope and Fear',
    desc: 'One of the most psychologically rich positions in the spread. This card often shows the same thing as both your deepest hope and your deepest fear — because what we want most is often also what we fear most. Sit with both interpretations.',
    placement: 'Staff — Third',
  },
  {
    num: 10,
    name: 'The Outcome',
    subtitle: 'Final Result',
    desc: 'The culminating card of the reading — the most likely outcome if current energies continue as they are. This is not an unchangeable fate; it shows the trajectory of the situation. Use all nine cards before it to fully understand this final message.',
    placement: 'Staff — Top',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the Celtic Cross tarot spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Celtic Cross is the most widely used tarot spread in the world. It uses 10 cards laid out in a specific pattern to provide a comprehensive reading of any question or situation. The spread examines the present, the challenge, the past, the future, unconscious influences, hopes and fears, and the likely outcome — giving one of the most complete pictures available in a single tarot reading.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many cards are in the Celtic Cross spread?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Celtic Cross uses 10 tarot cards. Six cards are laid out in a cross formation (representing the central situation, challenge, past, future, foundation and potential), and four cards are placed in a vertical staff or column to the right (representing your inner state, external influences, hopes and fears, and the outcome).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Celtic Cross good for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Celtic Cross is powerful but complex — it is generally recommended for readers who are already comfortable with individual card meanings and smaller spreads like the three-card spread. That said, beginners who approach it slowly, position by position, can gain enormous insight from it. Start with our Three-Card Spread if you are new to tarot, and return to the Celtic Cross as your confidence grows.',
      },
    },
    {
      '@type': 'Question',
      name: 'What questions is the Celtic Cross best for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Celtic Cross is ideal for deep, open-ended questions about complex situations: relationship dynamics, major life decisions, career crossroads, or any question where you want a full picture rather than a quick answer. It is less suited to simple yes/no questions — for those, the Yes or No Oracle is more effective.',
      },
    },
  ],
}

export default function CelticCrossPage() {
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav style={{ fontSize:'.78rem', color:'var(--muted)', marginBottom:'1.5rem', display:'flex', gap:'.5rem', alignItems:'center', flexWrap:'wrap' }}>
        <Link href="/" style={{ color:'var(--muted)' }}>Home</Link>
        <span>/</span>
        <Link href="/spreads" style={{ color:'var(--muted)' }}>Tarot Spreads</Link>
        <span>/</span>
        <span style={{ color:'var(--gold)' }}>Celtic Cross</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign:'center', marginBottom:'3rem' }}>
        <div style={{ fontSize:'2.5rem', marginBottom:'1rem', opacity:.8 }}>✦</div>
        <h1 style={{ fontFamily:"'Cinzel',serif", fontSize:'clamp(1.5rem,4vw,2.2rem)', color:'var(--gold)', marginBottom:'.75rem', lineHeight:1.3 }}>
          Celtic Cross Tarot Spread
        </h1>
        <p style={{ color:'var(--muted)', maxWidth:560, margin:'0 auto', lineHeight:1.8, fontSize:'.97rem' }}>
          The Celtic Cross is the most powerful and widely used tarot spread in the world. Ten cards arranged in a precise pattern offer a complete picture of any situation — from its unconscious roots to its most likely outcome.
        </p>
      </div>

      {/* Visual Layout */}
      <div style={{ marginBottom:'3rem' }}>
        <div style={{ fontFamily:"'Cinzel',serif", fontSize:'.72rem', letterSpacing:'.14em', color:'var(--gold)', opacity:.65, textTransform:'uppercase', marginBottom:'1.25rem', textAlign:'center' }}>
          Card Layout
        </div>
        <div style={{ display:'flex', gap:'2rem', justifyContent:'center', alignItems:'flex-start', flexWrap:'wrap' }}>

          {/* Cross formation */}
          <div style={{ position:'relative', width:260, height:300, flexShrink:0 }}>
            {/* Card 3 — Foundation (bottom) */}
            <div style={{ position:'absolute', left:'50%', bottom:0, transform:'translateX(-50%)' }}>
              <CardSlot num={3} label="Foundation" small />
            </div>
            {/* Card 4 — Recent Past (left) */}
            <div style={{ position:'absolute', left:0, top:'50%', transform:'translateY(-50%)' }}>
              <CardSlot num={4} label="Past" small />
            </div>
            {/* Card 1 — Present (centre) */}
            <div style={{ position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)' }}>
              <CardSlot num={1} label="Present" />
            </div>
            {/* Card 2 — Cross (centre, rotated label) */}
            <div style={{ position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)', opacity:.6 }}>
              <div style={{ width:52, height:52, border:'1px dashed rgba(201,168,76,.4)', borderRadius:4, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'Cinzel',serif", fontSize:'.5rem', color:'var(--gold)', letterSpacing:'.06em', transform:'rotate(90deg)', marginTop:10, marginLeft:10 }}>CROSS</div>
            </div>
            {/* Card 6 — Near Future (right) */}
            <div style={{ position:'absolute', right:0, top:'50%', transform:'translateY(-50%)' }}>
              <CardSlot num={6} label="Future" small />
            </div>
            {/* Card 5 — Crown (top) */}
            <div style={{ position:'absolute', left:'50%', top:0, transform:'translateX(-50%)' }}>
              <CardSlot num={5} label="Crown" small />
            </div>
          </div>

          {/* Staff column */}
          <div style={{ display:'flex', flexDirection:'column', gap:'.5rem', justifyContent:'center' }}>
            {[
              { num: 10, label: 'Outcome' },
              { num: 9,  label: 'Hopes/Fears' },
              { num: 8,  label: 'Environment' },
              { num: 7,  label: 'Self' },
            ].map(({ num, label }) => (
              <CardSlot key={num} num={num} label={label} small />
            ))}
          </div>
        </div>
      </div>

      {/* Position descriptions */}
      <div style={{ marginBottom:'3rem' }}>
        <h2 style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'1.1rem', marginBottom:'1.5rem', letterSpacing:'.06em' }}>
          The 10 Card Positions Explained
        </h2>
        <div style={{ display:'flex', flexDirection:'column', gap:'.75rem' }}>
          {POSITIONS.map(pos => (
            <div key={pos.num} style={{ background:'var(--on-bg-03)', border:'1px solid var(--border)', borderRadius:12, padding:'1.1rem 1.25rem', display:'flex', gap:'1rem', alignItems:'flex-start' }}>
              <div style={{ flexShrink:0, width:32, height:32, borderRadius:'50%', background:'rgba(201,168,76,.1)', border:'1px solid rgba(201,168,76,.3)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'Cinzel',serif", fontSize:'.8rem', color:'var(--gold)' }}>
                {pos.num}
              </div>
              <div>
                <div style={{ fontFamily:"'Cinzel',serif", fontSize:'.88rem', color:'var(--gold)', marginBottom:'.15rem' }}>{pos.name}</div>
                <div style={{ fontSize:'.72rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:'.5rem' }}>{pos.subtitle}</div>
                <p style={{ color:'var(--text)', fontSize:'.88rem', lineHeight:1.7, margin:0 }}>{pos.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How to read section */}
      <div style={{ background:'var(--on-bg-03)', border:'1px solid var(--border)', borderRadius:14, padding:'1.5rem', marginBottom:'2rem' }}>
        <h2 style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'1rem', marginBottom:'1rem', letterSpacing:'.06em' }}>
          How to Read the Celtic Cross
        </h2>
        <div style={{ color:'var(--text)', lineHeight:1.8, fontSize:'.92rem' }}>
          <p style={{ marginBottom:'1rem' }}>
            Begin by shuffling your deck while holding your question clearly in mind. When you feel ready, lay out all ten cards face-down in the order shown above, then turn them over one at a time, pausing to absorb each card before moving to the next.
          </p>
          <p style={{ marginBottom:'1rem' }}>
            Read cards 1 and 2 together first — they set the central dynamic of the entire reading. Then read cards 3, 4, 5 and 6 as the environmental context: what has been, what could be, what is just passing and what is approaching. Finally, read the staff (cards 7–10) as the personal narrative: how you are showing up, what surrounds you, what you are carrying emotionally, and where things are heading.
          </p>
          <p>
            The Celtic Cross rewards those who read the cards as a whole story rather than ten separate messages. Look for patterns: repeated suits (emotional themes, intellectual themes), repeated numbers (karmic repetition), or cards from the same archetype appearing in multiple positions. These patterns carry the most important messages the reading has to offer.
          </p>
        </div>
      </div>

      {/* Tips */}
      <div style={{ marginBottom:'2.5rem' }}>
        <h2 style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'1rem', marginBottom:'1rem', letterSpacing:'.06em' }}>
          Tips for a Better Celtic Cross Reading
        </h2>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:'.75rem' }}>
          {[
            ['🕯️', 'Create space', 'Find a quiet moment and clear your environment before you begin. The Celtic Cross requires full presence — rushing produces shallow readings.'],
            ['❓', 'Ask openly', 'The Celtic Cross thrives on open questions: "What do I need to understand about X?" works far better than "Will X happen?"'],
            ['📓', 'Write it down', 'Record each card and position before you begin interpreting. Coming back to a written spread days later often reveals insights that were invisible in the moment.'],
            ['🔁', 'Read the story', 'After reading each card individually, step back and ask: what single narrative connects all ten? That story is the real reading.'],
          ].map(([icon, title, text]) => (
            <div key={title as string} style={{ background:'var(--on-bg-03)', border:'1px solid var(--border)', borderRadius:12, padding:'1rem' }}>
              <div style={{ fontSize:'1.3rem', marginBottom:'.4rem' }}>{icon}</div>
              <div style={{ fontFamily:"'Cinzel',serif", fontSize:'.78rem', letterSpacing:'.08em', color:'var(--gold)', opacity:.8, marginBottom:'.4rem', textTransform:'uppercase' }}>{title}</div>
              <p style={{ color:'var(--muted)', fontSize:'.83rem', lineHeight:1.6, margin:0 }}>{text as string}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ marginBottom:'2.5rem' }}>
        <h2 style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'1rem', marginBottom:'1rem', letterSpacing:'.06em' }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display:'flex', flexDirection:'column', gap:'.75rem' }}>
          {faqSchema.mainEntity.map(item => (
            <div key={item.name} style={{ background:'var(--on-bg-03)', border:'1px solid var(--border)', borderRadius:12, padding:'1.1rem 1.25rem' }}>
              <div style={{ fontFamily:"'Cinzel',serif", fontSize:'.82rem', color:'var(--gold)', marginBottom:'.5rem', letterSpacing:'.03em' }}>{item.name}</div>
              <p style={{ color:'var(--muted)', fontSize:'.88rem', lineHeight:1.7, margin:0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign:'center', padding:'2rem', background:'rgba(201,168,76,.04)', border:'1px solid rgba(201,168,76,.15)', borderRadius:14 }}>
        <div style={{ fontFamily:"'Cinzel',serif", color:'var(--gold)', fontSize:'1rem', marginBottom:'.75rem' }}>Ready to do your reading?</div>
        <p style={{ color:'var(--muted)', fontSize:'.88rem', marginBottom:'1.25rem', lineHeight:1.7 }}>
          Draw your ten cards and use the position guide above to interpret them — or start with a three-card spread if this is your first time.
        </p>
        <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
          <Link href="/" style={{ padding:'.85rem 1.75rem', background:'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border:'1px solid var(--gold)', borderRadius:12, color:'var(--gold)', fontFamily:"'Cinzel',serif", fontSize:'.88rem', letterSpacing:'.08em' }}>
            ✦ Draw Three Cards
          </Link>
          <Link href="/cards" style={{ padding:'.85rem 1.75rem', background:'transparent', border:'1px solid var(--border)', borderRadius:12, color:'var(--muted)', fontFamily:"'Cinzel',serif", fontSize:'.88rem', letterSpacing:'.08em' }}>
            Browse Card Meanings
          </Link>
        </div>
      </div>
    </div>
  )
}

function CardSlot({ num, label, small }: { num: number; label: string; small?: boolean }) {
  const size = small ? 52 : 64
  const height = size * 1.5
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'.3rem' }}>
      <div style={{ width:size, height, border:'1px solid rgba(201,168,76,.35)', borderRadius:6, background:'rgba(201,168,76,.05)', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:"'Cinzel',serif", fontSize: small ? '.75rem' : '.9rem', color:'var(--gold)' }}>
        {num}
      </div>
      <div style={{ fontSize:'.58rem', color:'var(--muted)', textTransform:'uppercase', letterSpacing:'.08em', textAlign:'center', maxWidth:60 }}>{label}</div>
    </div>
  )
}
