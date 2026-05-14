// Extended upright-love content for each card.
// Used by /cards/[slug] pages to target long-tail keywords
// like "{card} love", "{card} in love", "what does {card} mean in love".
//
// Each card has a 2-3 paragraph long-form love meaning (UPRIGHT context;
// reversed-love is covered separately by ext.love2 in card-extended and
// by reversed-extended) plus 4 love-specific FAQs.
//
// SEO target: ~50 keywords "{Card} love" / "{Card} in love" — ~25k vol/mo
// long-tail aggregate. Strategy: deep one-page rather than new URLs
// (avoids cannibalising /cards/[slug]).

import { MAJOR_1 } from './card-love-extended/major-1'
import { MAJOR_2 } from './card-love-extended/major-2'
import { CUPS } from './card-love-extended/cups'
import { PENTACLES } from './card-love-extended/pentacles'
import { SWORDS } from './card-love-extended/swords'
import { WANDS } from './card-love-extended/wands'

export interface LoveContext {
  /** 2-3 paragraph long-form upright love meaning */
  loveLong: string
  /** 4 love-context FAQs targeting "{card} love" / "in love" queries */
  loveFaqs: Array<{ q: string; a: string }>
}

export const CARD_LOVE_EXTENDED: Record<string, LoveContext> = {
  ...MAJOR_1,
  ...MAJOR_2,
  ...CUPS,
  ...PENTACLES,
  ...SWORDS,
  ...WANDS,
}
