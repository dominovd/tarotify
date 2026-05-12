import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'What Blocks My Love Tarot Spread — 3 Card Reading | TarotAxis',
  description: 'A 3-card spread for understanding what is blocking love in your life. Identify the internal pattern, see what supports you, and find the next step toward openness.',
  alternates: { canonical: 'https://tarotaxis.com/spreads/what-blocks-my-love' },
  openGraph: {
    title: 'What Blocks My Love Tarot Spread — 3 Card Reading',
    description: 'A 3-card spread for understanding what is blocking love in your life. Identify the internal pattern, see what supports you, and find the next step toward openness.',
  },
}

const POSITIONS = [
  {
    num: 1,
    name: 'What Blocks Me',
    desc: 'The internal pattern, belief, wound or fear most actively keeping love at a distance. Often subtle, often older than the current chapter — frequently formed long before the dating apps and the disappointments, and now running quietly in the background of every connection.',
  },
  {
    num: 2,
    name: 'What Supports Me',
    desc: 'The strength, resource or quality already present that you can lean on as you work with the block. Not what is missing or what you still need to acquire — what is here, now, in you. The cards will usually point to something you have been undervaluing.',
  },
  {
    num: 3,
    name: 'First Step Toward Openness',
    desc: 'The specific, actionable next move that would most directly soften the block. Small enough to actually do this week — a single honest conversation, a single boundary held differently, a single old story put down. Not a transformation. A step.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are common tarot cards that mean blocked love?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Several cards recur in readings about blocked love. The Five of Pentacles speaks to feeling left out in the cold, often a felt sense of unworthiness rather than an actual lack. The Four of Cups suggests emotional withdrawal — the gift being offered but unseen. The Eight of Swords points to self-imposed limitation, the cage whose door is open. The Tower reversed indicates clinging to old structures that need to fall. The Five of Swords reveals defensiveness — the habit of winning small arguments at the cost of intimacy.',
      },
    },
    {
      '@type': 'Question',
      name: "Why can't I find love no matter what I do?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The doing may itself be part of the block. When love feels effortful — endless apps, performance, optimisation — the nervous system reads connection as work, which is the opposite state from the one that lets intimacy land. This spread reframes the question. Instead of asking what else you should do, it asks what is quietly being protected, what older story is running, and what one honest step would shift the dynamic. Sometimes the most useful change is doing less, not more.',
      },
    },
    {
      '@type': 'Question',
      name: "Can I do this spread if I'm in a relationship but feel distant?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — the block is often internal rather than relational. Couples can sit across the table from each other while the actual obstacle lives in one person\'s nervous system, in old protective patterns, in a quiet fear of being fully seen. This spread does not assume singleness. It asks what is keeping love at a distance, and that distance can exist inside a long marriage as readily as inside an empty flat. Many partnered readers find this spread more useful than the explicitly relational ones.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often can I do this reading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Give it four to six weeks between readings. The first one surfaces material that needs time to actually be worked with — a block recognised on Monday is not a block resolved by Tuesday. Returning too quickly tends to produce variations on the same answer because the underlying pattern has not yet had the chance to shift. Use the time between readings to practise the first step the cards suggested. Then return, and the spread will likely show you something genuinely new.',
      },
    },
  ],
}

export default function WhatBlocksMyLovePage() {
  return (
    <div style={{ maxWidth: 820, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
        <span>/</span>
        <Link href="/spreads" style={{ color: 'var(--muted)' }}>Tarot Spreads</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>What Blocks My Love</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem', opacity: .8 }}>✦</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2.2rem)', color: 'var(--gold)', marginBottom: '.75rem', lineHeight: 1.3 }}>
          What Blocks My Love Tarot Spread
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto', lineHeight: 1.8, fontSize: '.97rem' }}>
          A three-card spread for the question underneath the question — what is actually keeping love at a distance, what already supports you, and the single next step that would soften the pattern.
        </p>
        <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.25rem' }}>
          {['3 Cards', 'Inner Work', 'Singles & Couples'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .85rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.2)', borderRadius: 20, fontSize: '.7rem', fontFamily: "'Cinzel',serif", letterSpacing: '.08em', color: 'var(--gold)' }}>{tag}</span>
          ))}
        </div>
      </div>

      {/* About */}
      <div style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.5rem', marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          About This Spread
        </h2>
        <div style={{ color: 'var(--text)', lineHeight: 1.8, fontSize: '.92rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            Most blocks to love are not about being unlovable. They are about being unconsciously committed to protection — to a version of safety that was learned in earlier circumstances and never updated for the present. The body remembers what it cost to be hurt, and quietly arranges things so that nothing of that scale can happen again. This is intelligent. It is also, eventually, the thing that needs to be renegotiated. The cards in this spread are not here to shame the protective part. They are here to introduce it to the version of you who is now ready for something more open.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            There is a real difference between healthy boundaries and protective walls, and the difference is rarely visible from the inside. Boundaries are responsive — they shift with context, they let in what is safe and refuse what is not, and they tend to be communicated rather than enforced silently. Walls do not move. They keep out everything, including the things you actually want, and they are usually built around a hurt that has not been fully grieved. This spread helps you notice which one you are working with.
          </p>
          <p>
            Three cards is enough. Going deeper often produces more avoidance than insight — a ten-card spread on this question tends to give the analytical mind enough material to never actually act on any of it. Three positions, one block, one resource, one step. The smallness is the point. Anything larger becomes another way to think about love instead of moving toward it.
          </p>
        </div>
      </div>

      {/* Spread Layout */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem', letterSpacing: '.06em' }}>
          The Three Positions
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          Draw the cards in order, taking a breath between each. The middle card — what supports you — is the one most readers underweight; sit with it longest before reading the third.
        </p>

        {/* Visual Layout */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .65, textTransform: 'uppercase', marginBottom: '1.25rem', textAlign: 'center' }}>
            Card Layout
          </div>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {POSITIONS.map(pos => (
              <div key={pos.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
                <div style={{ width: 72, height: 108, border: '1px solid rgba(201,168,76,.35)', borderRadius: 8, background: 'rgba(201,168,76,.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '1.1rem', color: 'var(--gold)' }}>
                  {pos.num}
                </div>
                <div style={{ fontSize: '.6rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '.08em', textAlign: 'center', maxWidth: 72 }}>{pos.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {POSITIONS.map(pos => (
            <div key={pos.num} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: '50%', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", fontSize: '.8rem', color: 'var(--gold)' }}>
                {pos.num}
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.88rem', color: 'var(--gold)', marginBottom: '.5rem' }}>{pos.name}</div>
                <p style={{ color: 'var(--text)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{pos.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '1rem', letterSpacing: '.06em' }}>
          Frequently Asked Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {faqSchema.mainEntity.map(item => (
            <div key={item.name} style={{ background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(201,168,76,.04)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14 }}>
        <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1rem', marginBottom: '.75rem' }}>Ready to look at the pattern?</div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Draw your three cards with our free reading tool, then return here to interpret each position honestly.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{ padding: '.85rem 1.75rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 12, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            ✦ Draw Cards Now
          </Link>
          <Link href="/spreads/what-do-i-need-to-heal" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            What Do I Need to Heal
          </Link>
          <Link href="/spreads/healing-after-heartbreak" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Healing After Heartbreak
          </Link>
          <Link href="/spreads/love" style={{ padding: '.85rem 1.75rem', background: 'transparent', border: '1px solid var(--border)', borderRadius: 12, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
            Love Spread
          </Link>
        </div>
      </div>
    </div>
  )
}
