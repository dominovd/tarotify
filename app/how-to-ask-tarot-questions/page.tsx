import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Ask the Right Questions in Tarot — A Practical Guide | TarotAxis',
  description: 'Learn how to ask better tarot questions. Why yes/no questions fall short, how to reframe vague queries with What/How/Why, and 12 examples of poor questions rewritten as powerful ones.',
  alternates: { canonical: 'https://tarotaxis.com/how-to-ask-tarot-questions' },
  openGraph: {
    title: 'How to Ask the Right Questions in Tarot — A Practical Guide',
    description: 'The quality of a tarot reading depends almost entirely on the question. Learn how to ask better ones.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you ask tarot any question?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In principle, yes — tarot will respond to any question. In practice, the structure of your question shapes how useful the answer can be. Open-ended questions about your role, choices and patterns produce far richer readings than yes/no questions about fixed outcomes. The cards do not work less well on certain topics; they work less well with certain phrasings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are yes/no questions discouraged in tarot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes/no questions force the cards to give a binary verdict on a situation that is rarely binary. The 78 cards of tarot are designed to describe energies, patterns and influences — not to deliver predictions. When you pull several cards for a yes/no question, you receive layered meanings that resist being collapsed into a single answer. A reframed question — starting with What, How or Why — uses the cards for what they are best at.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a good tarot question to start with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For beginners, a useful first question is: "What do I most need to understand about this situation right now?" It is open, focused on insight rather than outcome and works for any topic — love, career, family or personal growth. Once you are comfortable, you can specialise: "What energy is shaping this relationship?" or "What is the next step I am avoiding?" — both work better than asking what will happen.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you ask tarot the same question twice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can — but if you have just done a reading and are immediately reshuffling because you did not like the answer, you are not asking a new question. You are looking for a different answer. The most useful approach is to wait at least a week, see how the situation has developed, and then reframe the question to reflect what has changed. Repeating identical questions in a short window tends to produce more confusion than clarity.',
      },
    },
  ],
}

const principles = [
  {
    n: '1',
    name: 'Start with What, How or Why',
    body: 'These three words shift a question away from a fixed prediction toward exploration. "Will I get the promotion?" closes the conversation; "What can I do to improve my chances?" opens it. The cards have far more to offer when they are invited to describe a situation than when they are interrogated for a verdict.',
  },
  {
    n: '2',
    name: 'Focus on Your Role',
    body: 'The most actionable readings come from questions about your own choices, mindset and behaviour. You cannot control what someone else feels or whether an event will occur — but you can always change how you show up. Asking "What is my part in this dynamic?" reliably produces guidance you can use. Asking "Does he love me?" produces guesswork dressed as insight.',
  },
  {
    n: '3',
    name: 'Be Specific Without Being Restrictive',
    body: 'Vague questions like "What is going on in my life?" leave the cards no clear topic to address. Hyper-specific questions like "Will I get married by 31 December?" lock the cards into a rigid timeline they cannot honour. The best questions narrow the focus to a single area or theme while leaving room for the cards to reveal something you did not expect.',
  },
  {
    n: '4',
    name: 'Ask About Patterns, Not Predictions',
    body: 'Tarot is at its strongest when describing the energies and patterns currently in play — and weakest when asked to forecast fixed future events. A question framed around what is influencing a situation, what is blocked, or what wants to emerge will produce a more useful reading than a question framed around what will happen on a specific date.',
  },
  {
    n: '5',
    name: 'One Question per Reading',
    body: 'Stacking three questions into one reading dilutes the cards. If you find yourself asking "Will I find love AND will my career improve AND should I move?" — break it into three separate readings. A spread is a structured answer to a single, well-formed question. Multiple questions produce a reading no card position is really addressing.',
  },
]

const rewrites = [
  {
    before: 'Will I get the promotion?',
    after: 'What can I do to position myself for the promotion?',
    why: 'Shifts the focus from a fixed outcome to your agency. The cards can now describe strengths to lean into and blind spots to address.',
  },
  {
    before: 'Will I find love soon?',
    after: 'What energies am I currently bringing to my love life?',
    why: 'Replaces the timeline trap with a mirror. The reading becomes about what you are radiating, not when someone will appear.',
  },
  {
    before: 'Is he the one?',
    after: 'What is the true nature of the connection between us?',
    why: 'Removes the binary verdict. The cards can describe the dynamic honestly — its strengths, its lessons and its limitations.',
  },
  {
    before: 'Should I quit my job?',
    after: 'What does my career need from me right now?',
    why: 'Quitting is one of many possible answers. Asking what your career needs surfaces the deeper question — which may be about energy, boundaries or direction rather than the job itself.',
  },
  {
    before: 'What is going on with my life?',
    after: 'What is the most important pattern I am being asked to look at this season?',
    why: 'Adds focus without restricting the topic. The cards now have a clear target — one season, one pattern — while keeping the scope wide.',
  },
  {
    before: 'Will my ex come back?',
    after: 'What lessons from this relationship am I still being invited to integrate?',
    why: 'The original question waits for someone else to act. The reframed one keeps the work — and the agency — with you.',
  },
  {
    before: 'Am I going to fail this project?',
    after: 'What challenges does this project hold for me, and what helps me meet them?',
    why: 'Names the fear without surrendering to it. The cards can map the obstacles and the resources available, giving you something to actually do.',
  },
  {
    before: 'Is this relationship going to last?',
    after: 'What is the current state of this relationship, and what does it need to grow?',
    why: 'Trades a prediction for a snapshot plus guidance. The reading describes where you are now and what action would deepen the connection.',
  },
]

export default function HowToAskTarotQuestionsPage() {
  return (
    <div style={{ maxWidth: 720, margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
        <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>How to Ask Tarot Questions</span>
      </nav>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '.66rem', letterSpacing: '.2em', color: 'var(--gold)', opacity: .55, fontFamily: "'Cinzel',serif", textTransform: 'uppercase', marginBottom: '.5rem' }}>
          Practitioner&apos;s Guide
        </div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.5rem,4vw,2rem)', color: 'var(--gold)', marginBottom: '1rem', lineHeight: 1.25 }}>
          How to Ask the Right Questions in Tarot
        </h1>
        <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.95rem' }}>
          The quality of a tarot reading depends almost entirely on the quality of the question. The same three cards can deliver a generic, vaguely encouraging reading or a piece of genuinely useful guidance — the difference is in how the question is framed. Most readers eventually realise that the cards have always been working at full strength; it is the question that has been doing the limiting.
        </p>
      </div>

      {/* Section: Why yes/no falls short */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          Why Yes/No Questions Fall Short
        </h2>
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', marginBottom: '1rem' }}>
            Yes/no questions are not forbidden — and a single-card yes/no draw is perfectly valid for a quick check-in. But yes/no framing reaches its limit very quickly. Tarot describes <em>energies, influences and patterns</em>; it does not pass verdicts. When you draw five cards in response to a yes/no question, you receive five layers of nuance that resist being collapsed into a single binary answer.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            The deeper issue is that yes/no questions assume the situation is fixed and only the outcome is uncertain. Most situations are the opposite: the outcome depends on factors still in motion — including your own choices. A question that ignores those factors throws away the most useful thing tarot has to offer.
          </p>
        </div>
      </section>

      {/* Section: 5 Principles */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
          Five Principles for Better Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
          {principles.map(({ n, name, body }) => (
            <div key={n} style={{ display: 'flex', gap: '1rem', background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(201,168,76,.12)', border: '1px solid rgba(201,168,76,.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.78rem', marginTop: 2 }}>
                {n}
              </div>
              <div>
                <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.4rem' }}>{name}</div>
                <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: Rewrites */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '.5rem' }}>
          Eight Questions, Rewritten
        </h2>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
          The fastest way to internalise these principles is to see them applied. Here are eight common questions reformulated to open the reading up.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {rewrites.map((r, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
              <div style={{ marginBottom: '.85rem' }}>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.18em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '.3rem' }}>Before</div>
                <div style={{ color: 'var(--text)', fontSize: '.95rem', fontStyle: 'italic', opacity: .7 }}>&ldquo;{r.before}&rdquo;</div>
              </div>
              <div style={{ marginBottom: '.85rem' }}>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.18em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '.3rem' }}>After</div>
                <div style={{ color: 'var(--gold)', fontSize: '.95rem', fontStyle: 'italic' }}>&ldquo;{r.after}&rdquo;</div>
              </div>
              <div style={{ paddingTop: '.75rem', borderTop: '1px solid var(--border)' }}>
                <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.66rem', letterSpacing: '.18em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '.3rem' }}>Why it works</div>
                <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.7, margin: 0 }}>{r.why}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section: When yes/no IS fine */}
      <section style={{ marginBottom: '2.5rem' }}>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1rem' }}>
          When Yes/No <em>Is</em> Fine
        </h2>
        <div style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 14, padding: '1.25rem 1.5rem' }}>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', marginBottom: '1rem' }}>
            None of this means yes/no readings are wrong. A single-card yes/no draw is a fast, useful tool for a moment of friction — should I send this message, should I take the meeting, should I go to the gathering. The structure matches the question: one card for one decision in front of you right now.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: '.9rem', margin: 0 }}>
            The trouble starts when yes/no framing is applied to a situation that is not really binary — relationships, careers, life direction, identity. For those, the principles above will serve you far better. If a yes/no question is genuinely what you need, use our <Link href="/yes-no" style={{ color: 'var(--gold)' }}>Yes/No Oracle</Link>. For anything deeper, reframe before you shuffle.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
        <Link href="/free-reading" style={{ padding: '.8rem 1.6rem', background: 'rgba(201,168,76,.1)', border: '1px solid rgba(201,168,76,.35)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          Try a Free Reading →
        </Link>
        <Link href="/how-to-read-tarot" style={{ padding: '.8rem 1.6rem', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          How to Read Tarot →
        </Link>
        <Link href="/how-to-shuffle-tarot" style={{ padding: '.8rem 1.6rem', background: 'rgba(255,255,255,.03)', border: '1px solid var(--border)', borderRadius: 10, color: 'var(--muted)', fontFamily: "'Cinzel',serif", fontSize: '.82rem', letterSpacing: '.07em', textDecoration: 'none' }}>
          How to Shuffle →
        </Link>
      </div>

      {/* FAQ */}
      <section>
        <h2 style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
          Common Questions
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqSchema.mainEntity.map((item, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,.025)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
              <div style={{ fontFamily: "'Cinzel',serif", color: 'var(--gold)', fontSize: '.88rem', marginBottom: '.5rem' }}>{item.name}</div>
              <p style={{ color: 'var(--muted)', fontSize: '.83rem', lineHeight: 1.8, margin: 0 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
