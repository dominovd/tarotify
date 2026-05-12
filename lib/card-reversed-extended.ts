// Extended reversed-context content for each card.
// Used by /cards/[slug]/reversed pages to target long-tail keywords
// like "{card} reversed love", "{card} reversed career", etc.
//
// Each card has 2-3 paragraph long-form sections for love / career / spirit
// in the reversed context, plus 3-4 reversed-specific FAQ entries.

import { MAJOR_1 } from './card-reversed-extended/major-1'
import { MAJOR_2 } from './card-reversed-extended/major-2'
import { CUPS } from './card-reversed-extended/cups'
import { PENTACLES } from './card-reversed-extended/pentacles'
import { SWORDS } from './card-reversed-extended/swords'
import { WANDS } from './card-reversed-extended/wands'

export interface ReversedContext {
  /** 2-3 paragraph long-form love meaning when card is reversed */
  loveLong: string
  /** 2-3 paragraph long-form career meaning when card is reversed */
  careerLong: string
  /** 2-3 paragraph long-form spiritual meaning when card is reversed */
  spiritLong: string
  /** 3-4 reversed-context FAQs targeting "{card} reversed love/career/etc" queries */
  reversedFaqs: Array<{ q: string; a: string }>
}

export const CARD_REVERSED_EXTENDED: Record<string, ReversedContext> = {
  ...MAJOR_1,
  ...MAJOR_2,
  ...CUPS,
  ...PENTACLES,
  ...SWORDS,
  ...WANDS,
}
