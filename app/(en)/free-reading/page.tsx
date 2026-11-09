import type { Metadata } from 'next'
import ReadingClient from './ReadingClient'
import SeoContent, { SeoLink, seoList, seoP, type SeoSection } from '@/components/SeoContent'

export const metadata: Metadata = {
  title: 'Free AI Tarot Reading Online — Full 78-Card Deck | TarotAxis',
  description: 'Get a free AI tarot reading online with a full 78-card deck including reversals. Personalised AI interpretation for a daily, three-card, six-card or love spread. No sign-up needed for your first reading.',
  alternates: {
    canonical: 'https://tarotaxis.com/free-reading',
    languages: {
      'en': 'https://tarotaxis.com/free-reading',
      'es': 'https://tarotaxis.com/es/lectura-gratis',
      'x-default': 'https://tarotaxis.com/free-reading',
    },
  },
}

const SECTIONS: SeoSection[] = [
  {
    heading: 'How the free AI tarot reading works',
    body: (
      <>
        <p style={seoP}>
          Pick a spread and draw. The full 78-card deck is shuffled for every reading, and roughly one card in
          four lands reversed, as it would with a physical deck you shuffle by hand. Each drawn card shows its
          upright or reversed meaning straight away.
        </p>
        <p style={seoP}>
          When you want more than the card-by-card meanings, ask for the AI interpretation. It reads the cards
          in their positions and in relation to each other, and ties them to your question if you wrote one.
        </p>
      </>
    ),
  },
  {
    heading: 'Choosing a spread',
    body: (
      <ul style={seoList}>
        <li><strong>Daily Card</strong> (1 card): one focus for the day ahead. Good for building a habit.</li>
        <li><strong>Three Card</strong> (3 cards): past, present and future of a single situation. The best place to start.</li>
        <li><strong>Six Card</strong> (6 cards): a wider snapshot when several things pull at you at once.</li>
        <li><strong>Love Reading</strong> (5 cards): you, the other person and the connection between you.</li>
      </ul>
    ),
  },
  {
    heading: 'Limits and privacy',
    body: (
      <>
        <p style={seoP}>
          AI readings are free with a fair-use limit: one reading per hour and up to five a day per browser.
          The card meanings themselves have no limit.
        </p>
        <p style={seoP}>
          Your question is sent to the AI model only to write your reading. Readings that include a personal
          question are never cached or shown to anyone else. Readings you save go to the journal in your own
          browser, not to our servers.
        </p>
      </>
    ),
  },
  {
    heading: 'Getting more from a reading',
    body: (
      <p style={seoP}>
        Open questions work better than yes-or-no ones; see <SeoLink href="/how-to-ask-tarot-questions">how to
        ask tarot questions</SeoLink>. Read the full <SeoLink href="/cards">card meanings</SeoLink> for any card that
        surprises you, and keep in mind <SeoLink href="/ai-limitations">what the AI can and cannot do</SeoLink>. For
        larger layouts with position-by-position guides, browse the <SeoLink href="/spreads">tarot spreads</SeoLink>.
      </p>
    ),
  },
]

export default function ReadingPage() {
  return (
    <>
      <ReadingClient />
      <SeoContent sections={SECTIONS} />
    </>
  )
}
