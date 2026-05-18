import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How TarotAxis Interpretations Are Built — Methodology | TarotAxis',
  description: 'The interpretive framework behind every reading on TarotAxis: Rider-Waite-Smith foundation, elemental dignities, numerology, Jungian archetypal layer, and transparent AI assistance.',
  alternates: {
    canonical: 'https://tarotaxis.com/methodology',
    languages: {
      'en': 'https://tarotaxis.com/methodology',
      'es': 'https://tarotaxis.com/es/metodologia',
      'x-default': 'https://tarotaxis.com/methodology',
    },
  },
  openGraph: {
    title: 'How TarotAxis Interpretations Are Built',
    description: 'The framework behind every reading: Rider-Waite-Smith, elemental dignities, numerology, Jungian archetypes, transparent AI assistance.',
    type: 'article',
  },
}

const SECTION_HEADER: React.CSSProperties = {
  fontFamily: "'Cinzel',serif",
  fontSize: '1.05rem',
  letterSpacing: '.06em',
  color: 'var(--gold)',
  marginTop: '2.5rem',
  marginBottom: '1rem',
}

const SECTION_SUB: React.CSSProperties = {
  fontFamily: "'Cinzel',serif",
  fontSize: '.85rem',
  letterSpacing: '.04em',
  color: 'var(--gold)',
  opacity: .85,
  marginTop: '1.5rem',
  marginBottom: '.6rem',
}

const PROSE: React.CSSProperties = {
  color: 'var(--text)',
  lineHeight: 1.78,
  fontSize: '.95rem',
  marginBottom: '1rem',
}

export default function MethodologyPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How TarotAxis Interpretations Are Built',
    description: 'The interpretive framework behind every reading on TarotAxis: Rider-Waite-Smith foundation, elemental dignities, numerology, Jungian archetypal layer, and transparent AI assistance.',
    author: {
      '@type': 'Organization',
      name: 'TarotAxis Editorial',
      url: 'https://tarotaxis.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TarotAxis',
      url: 'https://tarotaxis.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tarotaxis.com/og?slug=the-fool',
      },
    },
    datePublished: '2026-05-18',
    dateModified: '2026-05-18',
    mainEntityOfPage: 'https://tarotaxis.com/methodology',
    inLanguage: 'en',
    about: [
      { '@type': 'Thing', name: 'Tarot' },
      { '@type': 'Thing', name: 'Rider-Waite-Smith tarot deck' },
      { '@type': 'Thing', name: 'Elemental dignities' },
      { '@type': 'Thing', name: 'Tarot numerology' },
      { '@type': 'Thing', name: 'Jungian archetypes' },
    ],
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TarotAxis',
    url: 'https://tarotaxis.com',
    description: 'Free tarot readings, all 78 card meanings, spreads, and lunar rituals — built on the Rider-Waite-Smith framework, refined with AI assistance.',
    sameAs: [],
    knowsAbout: [
      'Tarot',
      'Rider-Waite-Smith tarot',
      'Elemental dignities',
      'Tarot numerology',
      'Major Arcana psychology',
      'Tarot spreads',
      'Tarot combinations',
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Are TarotAxis readings written by humans or AI?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Both. The interpretive framework — the symbolic logic of cards, suits, numbers, elements, and combinations — is human work, grounded in the Rider-Waite-Smith tradition and contemporary practitioners. The application of that framework to specific card draws and the long-form writing is AI-assisted, then reviewed against the framework. We do not pretend the writing is human-only, and we do not pretend the framework is AI-derived. Each layer is honest about what it is.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which tarot tradition does TarotAxis follow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'TarotAxis uses the Rider-Waite-Smith framework as its primary interpretive foundation. This is the most widely shared modern tradition, established by Arthur Edward Waite and illustrated by Pamela Colman Smith in 1909, and it is the basis for most tarot literature written in English over the last century. We supplement the RWS imagery with elemental dignities from the Golden Dawn correspondence system and numerological progression principles common to both Marseille and Thoth approaches.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does TarotAxis handle reversed cards?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Reversed cards on TarotAxis are read as the upright energy in shadow form, blocked, internalised, or in the early stages of expression — not as the opposite of the upright meaning. This follows the contemporary mainstream of practitioners (Mary K Greer, Rachel Pollack, and others) over the older "reversed equals opposite" approach. For each card we publish a long-form reversed reading that names specific failure modes, blocks, and integration paths rather than simply negating the upright text.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do the same cards always produce the same interpretation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, by design. Every interpretive output on TarotAxis is deterministic — the same card draw on the same page produces the same text. This is a transparency choice. The framework is consistent enough that two readers applying it carefully should arrive at similar interpretations, and the writing on the site reflects that consistency. Where the framework permits genuine ambiguity — such as Death + Tower in a recovery context versus a fresh crisis context — we name the ambiguity explicitly rather than picking one reading and pretending it is the only one.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does TarotAxis explicitly not do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We do not predict death, terminal illness, or any other irreversible outcome. We do not name third parties or claim to read for people who have not consented to the reading. We do not replace medical, legal, or mental-health care, and where readings touch areas that intersect with those, we point readers toward appropriate professionals. We do not promise specific future events — tarot describes the energetic structure of a moment, not a deterministic timeline.',
        },
      },
    ],
  }

  return (
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '2rem 1.5rem 5rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <nav style={{ fontSize: '.78rem', color: 'var(--muted)', marginBottom: '1.5rem', display: 'flex', gap: '.5rem', alignItems: 'center' }}>
        <Link href="/" style={{ color: 'var(--muted)' }}>Home</Link>
        <span>/</span>
        <span style={{ color: 'var(--gold)' }}>Methodology</span>
      </nav>

      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
        <div style={{ fontSize: '1.6rem', color: 'var(--gold)', opacity: .55, marginBottom: '.75rem', letterSpacing: '.2em' }}>✦ ☽ ◈</div>
        <h1 style={{ fontFamily: "'Cinzel',serif", fontSize: 'clamp(1.4rem,4.4vw,2rem)', color: 'var(--gold)', marginBottom: '.75rem', letterSpacing: '.04em' }}>
          How TarotAxis Interpretations Are Built
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: '.92rem', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
          The interpretive framework, sources, and editorial stance behind every reading on the site.
        </p>
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '.5rem', flexWrap: 'wrap' }}>
          {['Rider-Waite-Smith', 'Elemental dignities', 'Numerology', 'Jungian layer', 'AI-assisted'].map(tag => (
            <span key={tag} style={{ padding: '.25rem .8rem', background: 'rgba(201,168,76,.08)', border: '1px solid rgba(201,168,76,.18)', borderRadius: 20, fontSize: '.68rem', fontFamily: "'Cinzel',serif", letterSpacing: '.06em', color: 'var(--gold)' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Opening framing */}
      <div style={{ background: 'linear-gradient(135deg, rgba(201,168,76,.06), rgba(201,168,76,.01))', border: '1px solid rgba(201,168,76,.16)', borderRadius: 14, padding: '1.5rem 1.75rem', marginBottom: '2.5rem' }}>
        <p style={{ fontFamily: "'Cinzel',serif", color: 'var(--text)', fontSize: '1rem', lineHeight: 1.7, fontStyle: 'italic', margin: 0 }}>
          Tarot is not divination by inference from a black box. It is a structured symbolic language with rules. The pages on this site are written from that stance — the cards mean specific things, the combinations follow legible logic, and where the framework genuinely permits multiple readings, we say so out loud.
        </p>
      </div>

      {/* Section 1 — Foundation */}
      <h2 style={SECTION_HEADER}>1. The Rider-Waite-Smith Foundation</h2>
      <p style={PROSE}>
        Every card meaning on TarotAxis is grounded in the <strong>Rider-Waite-Smith</strong> tarot, first published in 1909 by William Rider &amp; Son. The deck&apos;s imagery was designed by Arthur Edward Waite, a scholar of the Hermetic Order of the Golden Dawn, and illustrated by Pamela Colman Smith, an artist working in the Symbolist tradition. Together they produced the first widely distributed deck with fully illustrated minor arcana — an innovation that turned tarot from an esoteric coded system into a reading practice anyone could learn from the pictures themselves.
      </p>
      <p style={PROSE}>
        We chose this tradition for three reasons. First, it is the most widely shared modern foundation — almost every tarot book written in English since 1970 takes RWS as its starting point. Second, the imagery itself is unusually narratively rich; the pictures encode much of the meaning, which means a careful reader and a careful reading can largely converge. Third, RWS preserves and modernises the Hermetic correspondences (elemental, planetary, kabbalistic) without turning them into a barrier to entry for readers without an occult background.
      </p>
      <p style={PROSE}>
        Where contemporary practitioners have refined RWS — Rachel Pollack&apos;s archetypal lens, Mary K Greer&apos;s reversal taxonomy, Benebell Wen&apos;s timing system, Lindsay Mack&apos;s trauma-aware reading — we incorporate the refinement when it produces a more useful interpretation. We are not purists about the 1909 text. We are loyal to the framework, not the period costume.
      </p>

      {/* Section 2 — Elemental dignities */}
      <h2 style={SECTION_HEADER}>2. Elemental Dignities</h2>
      <p style={PROSE}>
        Each card belongs to one of four elements: <strong>Fire</strong> (Wands and the Sun-aligned Majors), <strong>Water</strong> (Cups and the Moon-aligned Majors), <strong>Air</strong> (Swords and the mental Majors), and <strong>Earth</strong> (Pentacles and the embodied Majors). When two cards appear together, the elemental relationship modifies the reading in legible ways.
      </p>
      <ul style={{ ...PROSE, marginBottom: '1.5rem', paddingLeft: '1.25rem' }}>
        <li><strong>Fire and Air</strong> — amplifying. Inspiration meets action, ideas catch wind. Readings tend to accelerate.</li>
        <li><strong>Earth and Water</strong> — nurturing. Structure meets feeling, the conditions for growth. Readings tend to deepen and slow.</li>
        <li><strong>Fire and Water</strong> — tension. Passion meets feeling — steam. Holds complexity rather than resolving it.</li>
        <li><strong>Air and Earth</strong> — grounding. Thought meets matter. Readings reward planning and follow-through.</li>
        <li><strong>Same-element pairs</strong> — resonant. Energies compound. The reading sharpens whatever the single card was already saying.</li>
      </ul>
      <p style={PROSE}>
        This system is inherited from the Golden Dawn, where it was used to evaluate the strength and quality of cards in proximity. On TarotAxis it shows up on every combination page in the elemental note, and it informs how we describe interactions between cards in spread readings.
      </p>

      {/* Section 3 — Numerology */}
      <h2 style={SECTION_HEADER}>3. Numerology — The Spine of the Minor Arcana</h2>
      <p style={PROSE}>
        The forty Pip cards (Ace through Ten across four suits) follow a numerical progression that holds across all suits. Reading numerology alongside suit gives the minor arcana its narrative shape.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '.75rem', marginBottom: '1.5rem' }}>
        {[
          ['Aces', 'Pure potential, opening, seed energy. The first stirring of the suit&apos;s element.'],
          ['Twos', 'Duality, choice, partnership. The first relationship.'],
          ['Threes', 'Expansion, expression, first manifestation. The third creates the system.'],
          ['Fours', 'Stability, structure, pause. The first plateau.'],
          ['Fives', 'Crisis, conflict, disruption of the four. The system tested.'],
          ['Sixes', 'Restoration, resolution, harmony after the crisis.'],
          ['Sevens', 'Reflection, complexity, the inner reckoning. Half-way uncertainty.'],
          ['Eights', 'Mastery, mature application of the suit&apos;s skill.'],
          ['Nines', 'Culmination, the suit at near-completion. Often solitary.'],
          ['Tens', 'Full completion, threshold to the next cycle. Both fulfilment and weight.'],
        ].map(([num, body]) => (
          <div key={num} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 10, padding: '.85rem 1.05rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.78rem', color: 'var(--gold)', letterSpacing: '.06em', marginBottom: '.3rem' }}>{num}</div>
            <p style={{ color: 'var(--muted)', fontSize: '.82rem', lineHeight: 1.6, margin: 0 }} dangerouslySetInnerHTML={{ __html: body }} />
          </div>
        ))}
      </div>
      <p style={PROSE}>
        The court ranks — Page, Knight, Queen, King — describe modes of engagement with the suit: Page (curiosity, learning), Knight (active pursuit), Queen (mastery from within), King (mastery applied outward). On TarotAxis we read the courts as both literal people in the querent&apos;s life and as facets of the querent&apos;s own way of engaging with the suit&apos;s domain.
      </p>

      {/* Section 4 — Jungian / archetypal layer */}
      <h2 style={SECTION_HEADER}>4. The Jungian Layer — Major Arcana as Individuation</h2>
      <p style={PROSE}>
        The twenty-two Major Arcana are read as the stations of a single archetypal journey — what Carl Jung called <em>individuation</em>, and what tarot tradition calls the Fool&apos;s Journey. The Fool (0) sets out unformed; he meets the Magician (1) and the High Priestess (2) — the first conscious and unconscious teachers. He learns through the Empress and Emperor (parental archetypes), the Hierophant (cultural authority), and the Lovers (relational maturity). By the Chariot, Strength, and Hermit (7-9), he is taking responsibility for his own movement. The Wheel and Justice (10-11) introduce fate and ethics. The Hanged Man and Death (12-13) are the surrender and ending that make further growth possible. Temperance, Devil, Tower, and Star (14-17) move through integration, shadow, collapse, and renewal. Moon and Sun (18-19) close the unconscious work and bring it into daylight. Judgement and World (20-21) name the moment of being called fully into oneself and the completion of the cycle.
      </p>
      <p style={PROSE}>
        When Majors appear in a reading, they signal that the question is operating at the archetypal layer — life-defining rather than situational. When several Majors cluster, the reading is usually about a phase of life rather than a single decision. We treat this seriously without becoming mystical about it; the Jungian framework is a language for naming what most readers already recognise.
      </p>

      {/* Section 5 — Reversed handling */}
      <h2 style={SECTION_HEADER}>5. How We Read Reversed Cards</h2>
      <p style={PROSE}>
        A reversed card on TarotAxis is the upright energy in shadow form, blocked, internalised, or arriving early or late — not the simple opposite. We follow Mary K Greer&apos;s reversal taxonomy, which distinguishes between energy that is <em>not yet manifest</em>, <em>blocked or resisted</em>, <em>over-extended into its shadow</em>, or <em>turning inward</em>. Each of the 78 cards has a dedicated reversed page with long-form love, career, and spiritual readings, plus contextual FAQs, written from this stance rather than as the negation of the upright.
      </p>
      <p style={PROSE}>
        We deliberately avoid the older &ldquo;reversed equals bad&rdquo; convention. The Devil reversed is usually <em>release</em>, not <em>worse devil</em>. The Tower reversed is often <em>resisting necessary change</em>, not <em>safety</em>. The Sun reversed can be <em>delayed joy</em> or <em>over-exposure</em>, depending on surrounding cards. This nuance is part of what makes reversals worth reading at all.
      </p>

      {/* Section 6 — Combinations */}
      <h2 style={SECTION_HEADER}>6. How Combinations Work</h2>
      <p style={PROSE}>
        Combination readings on TarotAxis follow a two-layer system. For high-intent pairs — Death and The Tower, The Lovers and The Devil, The Lovers and Two of Cups, and roughly forty others — we publish <strong>hand-curated nuanced readings</strong> that name specific dynamics, shadow forms, edge cases, and how a working reader handles the pair. For the remaining combinations, a procedural engine builds the reading from elemental dignity, numerological pattern, and archetypal interaction — deterministic, framework-driven, transparent.
      </p>
      <p style={PROSE}>
        We are honest about which is which. Hand-curated entries open with a one-line essence in italics and include a &ldquo;Reader&apos;s Note&rdquo; section. Procedural entries lead with the &ldquo;Combined Energy&rdquo; heading. Either way, the underlying framework is the same — same elemental rules, same numerological progression, same archetypal layer.
      </p>

      {/* Section 7 — AI transparency */}
      <h2 style={SECTION_HEADER}>7. AI Assistance — What It Does and Does Not Do</h2>
      <p style={PROSE}>
        TarotAxis uses AI assistance in three specific places: drafting long-form interpretive content (which is then edited against the framework), translating English content into other languages (currently Spanish), and producing the procedural combination engine&apos;s output. AI is <strong>not</strong> used to alter the symbolic logic of the cards, to randomise which card &ldquo;means&rdquo; what, or to produce content that has not been checked against the established RWS framework.
      </p>
      <p style={PROSE}>
        We name this openly because the alternative — pretending the writing is human-only — is both dishonest and a missed opportunity. Tarot has always been a hybrid of fixed symbolic structure and the reader&apos;s craft in applying it. AI assistance is the modern equivalent of a junior reader who has read all the books and writes the first draft. The senior reader (the framework, the editorial review) decides what stays.
      </p>

      {/* Section 8 — What we don't do */}
      <h2 style={SECTION_HEADER}>8. What TarotAxis Does Not Do</h2>
      <p style={PROSE}>
        We do not predict death, terminal illness, or any other irreversible outcome. Death the card and death the event are different things. We do not read for people who have not consented to being read about — questions like &ldquo;does my partner love me&rdquo; we will answer about the relationship, not about the other person&apos;s private interior. We do not name third parties. We do not promise specific timelines beyond the seasonal-cadence intuitions the framework genuinely supports.
      </p>
      <p style={PROSE}>
        We do not replace medical, legal, or mental-health care. Where readings touch on those areas, we point toward appropriate professionals rather than substituting for them. Tarot is a tool for self-reflection and pattern recognition; it is not a diagnostic instrument.
      </p>

      {/* Editorial / authorship */}
      <h2 style={SECTION_HEADER}>Editorial</h2>
      <p style={PROSE}>
        TarotAxis is edited by <strong>TarotAxis Editorial</strong> — a working group whose interpretive standard is calibrated against contemporary practitioners (Rachel Pollack, Mary K Greer, Benebell Wen, Lindsay Mack, Camelia Elias) and the underlying RWS literature. Every long-form page passes a framework-consistency check before publication. We welcome corrections from working readers — see the contact link below.
      </p>

      {/* Sources */}
      <h2 style={SECTION_HEADER}>Selected Sources</h2>
      <ul style={{ ...PROSE, paddingLeft: '1.25rem' }}>
        <li>Waite, A E. <em>The Pictorial Key to the Tarot</em>. 1910.</li>
        <li>Pollack, Rachel. <em>Seventy-Eight Degrees of Wisdom</em>. 1980.</li>
        <li>Greer, Mary K. <em>The Complete Book of Tarot Reversals</em>. 2002.</li>
        <li>Wen, Benebell. <em>Holistic Tarot</em>. 2015.</li>
        <li>Elias, Camelia. <em>Marseille Tarot: Towards the Art of Reading</em>. 2014.</li>
        <li>Mack, Lindsay. <em>Tarot for the Wild Soul</em> (podcast and writing, 2017&ndash;present).</li>
      </ul>

      {/* FAQ */}
      <h2 style={SECTION_HEADER}>Frequently Asked Questions</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem', marginBottom: '2.5rem' }}>
        {faqSchema.mainEntity.map(({ name, acceptedAnswer }) => (
          <div key={name} style={{ background: 'var(--on-bg-03)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.1rem 1.25rem' }}>
            <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.82rem', color: 'var(--gold)', marginBottom: '.5rem', letterSpacing: '.03em' }}>{name}</div>
            <p style={{ color: 'var(--muted)', fontSize: '.88rem', lineHeight: 1.7, margin: 0 }}>{acceptedAnswer.text}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: 'center', background: 'var(--on-bg-02)', border: '1px solid rgba(201,168,76,.15)', borderRadius: 14, padding: '1.75rem' }}>
        <div style={{ fontFamily: "'Cinzel',serif", fontSize: '.72rem', letterSpacing: '.14em', color: 'var(--gold)', opacity: .6, textTransform: 'uppercase', marginBottom: '.75rem' }}>
          Try the framework in action
        </div>
        <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
          Pull a free three-card reading and see how the elemental, numerological, and archetypal layers come together on a real spread.
        </p>
        <Link href="/free-reading" style={{ display: 'inline-block', padding: '.8rem 2rem', background: 'linear-gradient(135deg,rgba(201,168,76,.15),rgba(201,168,76,.08))', border: '1px solid var(--gold)', borderRadius: 10, color: 'var(--gold)', fontFamily: "'Cinzel',serif", fontSize: '.88rem', letterSpacing: '.08em' }}>
          ✦ Pull a Free Reading
        </Link>
      </div>
    </div>
  )
}
