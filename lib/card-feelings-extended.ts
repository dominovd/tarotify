// Extended "as feelings" content for each card.
// Used by /cards/[slug]/feelings pages to target long-tail keywords
// like "{card} as feelings", "{card} reversed as feelings",
// "how does {person} feel about me" via per-card context.
//
// Each card has 2-3 paragraph long-form sections for:
//   - upright as feelings
//   - reversed as feelings
//   - how they feel about you (conversational read)
// Plus 3-4 feelings-specific FAQ entries.

import { MAJOR_1 } from './card-feelings-extended/major-1'
import { MAJOR_2 } from './card-feelings-extended/major-2'
import { CUPS } from './card-feelings-extended/cups'
import { PENTACLES } from './card-feelings-extended/pentacles'
import { SWORDS } from './card-feelings-extended/swords'
import { WANDS } from './card-feelings-extended/wands'

export interface FeelingsContext {
  /** 2-3 paragraph long-form upright meaning when card surfaces as feelings */
  uprightLong: string
  /** 2-3 paragraph long-form reversed meaning when card surfaces as feelings */
  reversedLong: string
  /** 1-2 paragraph conversational read of "how they feel about you right now" */
  howTheyFeel: string
  /** 3-4 feelings-context FAQs targeting "{card} as feelings" related queries */
  feelingsFaqs: Array<{ q: string; a: string }>
}

export const CARD_FEELINGS_EXTENDED: Record<string, FeelingsContext> = {
  ...MAJOR_1,
  ...MAJOR_2,
  ...CUPS,
  ...PENTACLES,
  ...SWORDS,
  ...WANDS,
}
