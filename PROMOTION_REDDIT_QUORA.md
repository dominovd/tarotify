# TarotAxis — Reddit + Quora Content Kit

**Created:** 2026-05-27
**Status:** Active. Use during the SEO recovery window (whitelist deploy on 2026-05-27).
**Companion:** [PROMOTION_STRATEGY.md](PROMOTION_STRATEGY.md) (full 90-day plan)

---

## Critical rule for the current window

Combo pages outside the curated whitelist are now `noindex, follow` (see [combo-whitelist-strategy](.) memo). **Do not link to templated combo URLs in any external post** — Google will not index those landings, and incoming Reddit/Quora traffic should hit pages that *do* rank long-term.

**Safe link inventory (link to these):**

- `/cards/<slug>` — 78 cards, all upright (rich content)
- `/cards/<slug>/reversed` — 78 reversed (2477 lines of authored content)
- `/cards/<slug>/feelings` — 78 "as feelings" (targets 40k vol/mo keyword)
- `/yes-no/<slug>` — 78 yes/no per-card pages
- `/spreads/<spread>` — ~30 spread pages
- `/zodiac/<sign>` — 12 zodiac × tarot pages
- `/methodology`, `/ai-limitations`, `/ethical-guidelines`, `/reflection-vs-prediction` — authority cluster
- `/how-to-read-tarot`, `/tarot-for-beginners`, `/oracle-vs-tarot`, `/tarot-journal`, `/how-to-ask-tarot-questions`, `/how-to-cleanse-tarot-cards`, `/how-to-shuffle-tarot` — guides
- `/free-reading`, `/daily`, `/reading-analysis`, `/quiz`, `/birth-card` — tools

**Linkable curated combinations** (40, full slug list — use exact slug after `/combination/`):

```
death-and-five-of-cups            judgement-and-the-world
death-and-judgement               justice-and-the-hanged-man
death-and-the-tower               the-chariot-and-strength
the-devil-and-the-tower           the-devil-and-three-of-swords
the-empress-and-nine-of-pentacles the-empress-and-the-emperor
the-empress-and-the-lovers        the-fool-and-judgement
the-fool-and-the-magician         the-fool-and-the-tower
the-fool-and-the-world            the-hanged-man-and-death
the-hermit-and-the-hanged-man     the-hermit-and-the-moon
the-hermit-and-the-star           the-hierophant-and-justice
the-hierophant-and-the-lovers     the-high-priestess-and-page-of-swords
the-high-priestess-and-the-hermit the-high-priestess-and-the-moon
the-lovers-and-death              the-lovers-and-knight-of-cups
the-lovers-and-ten-of-cups        the-lovers-and-the-devil
the-lovers-and-the-moon           the-lovers-and-three-of-swords
the-lovers-and-two-of-cups        the-lovers-and-two-of-swords
the-magician-and-ace-of-pentacles the-magician-and-ace-of-wands
the-magician-and-the-world        the-moon-and-three-of-swords
the-sun-and-the-world             the-tower-and-ten-of-swords
the-tower-and-the-star            the-tower-and-three-of-swords
```

**Pattern:** `https://tarotaxis.com/combination/<slug>` (e.g. `/combination/death-and-the-tower`).

---

## Account setup (one-off, ~30 minutes)

### Reddit

1. Use an existing account with karma 200+ if available. New accounts trigger automod bans.
2. If you must use a new account: spend 2 weeks commenting *only* (no posts, no links) in `r/tarot` and `r/learntarot` to accrue ~100 comment karma before the first link post.
3. **Profile bio** (Reddit → Profile → Edit):
   > Founder of TarotAxis — modern tarot meanings, free spreads, and a free 3-card reading. British-English deep-dives, no fluff. tarotaxis.com
4. **Pinned post on profile**: short story about why you built TarotAxis (one paragraph, no marketing-speak). This is a passive trust signal when mods/users click your profile.

### Quora

1. Create account at quora.com.
2. **Bio**:
   > Founder of TarotAxis — modern tarot card meanings, reversed readings, daily card, and free spreads. Practising tarot reader writing for self-reflection rather than fortune-telling.
3. Follow topics: Tarot, Tarot Reading, Divination, Spirituality, Witchcraft, Astrology, Self-Improvement.
4. Add tarotaxis.com as **Credentials → Employment** ("Founder, TarotAxis"). This is the rare place Quora shows a clickable link permanently in your byline.

---

## Reddit playbook

### The 9:1 rule

For every post or comment with a link, nine others should be pure value (no link). Reddit moderators look at link ratio in profile history — exceed 10% and you're shadow-banned. Treat the value comments as the actual work; the link posts are dessert.

### Cadence target (first month)

- 3–5 value comments/week in `r/tarot`, `r/TarotReading`, `r/learntarot`.
- 1 launch post in `r/SideProject` (one-off).
- 1 launch post in `r/indiehackers` (one-off).
- 1 soft post in `r/TarotDecks` (one-off, showing the Midjourney art).
- 0 link drops in `r/tarot` until you have ~150 comment karma in that sub specifically.

---

### Launch post — `r/SideProject` (one-shot)

**Title** (test 2–3 variations, pick the one that lands best):

- "I built a free tarot site after getting frustrated with paywalls — 6 weeks in, here's what I learned"
- "After 6 weeks of building TarotAxis (free tarot meanings + AI readings), here's what worked"
- "I shipped a tarot site with 78 hand-drawn cards and 40+ spreads in 18 days — AMA on the stack"

**Body:**

```
A few weeks ago I shipped TarotAxis (tarotaxis.com). It's a free tarot site —
78 cards with upright, reversed, and "as feelings" meanings, 30+ spreads, daily
card, yes/no oracle, birth card calculator, and a free AI reading using Claude.

What I was trying to fix: every decent tarot site is either paywalled past the
fold, drowning in ads, or built around a single "pay $X for your reading" funnel.
I wanted somewhere I'd actually use myself.

Stack: Next.js 14 (App Router), Supabase, Vercel, Claude API for the readings,
Midjourney for the 78-card art deck (I now have three deck variants users can
switch between).

Stats so far:
- Free reading: ~5 AI readings/day per registered user, 1 lifetime per anon
- Spanish locale shipped at full content parity (~544 routes)
- 50% reduction in indexed pages last week after I culled templated combo pages
  — turns out 87% of my corpus was boilerplate and Google noticed

What I'd love feedback on:
- Is the homepage doing its job? (Most users land directly on /cards/X)
- The AI reading UI on /free-reading — is the streaming output smooth on mobile?
- The Midjourney deck — would you actually use this, or does AI art feel wrong
  for tarot specifically?

Happy to answer anything about the build, the SEO mistakes I made (there were
several), or the monetisation plan.
```

**Why this works:** opens with the problem (paywall fatigue), shows real stats including the recent SEO incident (transparency reads as authority), invites specific feedback. Length ~300 words is the r/SideProject sweet spot.

---

### Launch post — `indiehackers.com/post` (variant)

Same story, slightly more business-focused:

```
Title: TarotAxis — how a 50% indexed-page cull might have saved my new domain

Body:
Two weeks ago I launched TarotAxis (free tarot site, Next.js + Claude API).
First 10 days were dreamlike — Google indexed 2.6k pages, traffic peaked at
~100 clicks/day during the new-domain "honeymoon period". Then on day 14 it
collapsed to 2 clicks/day.

The audit told me what I'd done wrong: I'd shipped ~1,137 templated card-
combination pages (generated from a 22-card matrix), and 87% of my indexed
corpus was boilerplate. Google's domain-level quality score cratered.

Yesterday I shipped a whitelist policy: only 40 hand-curated combos remain
indexable, the other 1,137 are noindex+follow. Sitemap mirrors the same
whitelist. Expected effect: indexable corpus drops to ~660 high-quality pages
over the next 2-4 weeks.

What I learned:
1. New domains get a temporary honeymoon. The collapse afterwards isn't always
   a "Google update" — it's a quality nominal kicking in.
2. Templated content at scale is the single most expensive mistake on a young
   site. Even with unique slugs and FAQs, if the prose skeleton is identical,
   Google will identify it.
3. noindex+follow is much safer than deletion — internal link equity is
   preserved while you grow the curated set back up.

If you've shipped a content site recently, the most useful thing you can do is
count the percentage of your indexed pages that share a template. If it's over
50%, you're rolling dice.

Site: tarotaxis.com — would love eyes on it.
```

**Why this works:** Indie Hackers loves transparent post-mortems with actual numbers. The link is justified by the lesson, not as the point of the post.

---

### Reddit value-comment templates

These go in r/tarot, r/TarotReading, r/learntarot. **No links** unless someone asks. The point is karma, profile visibility, and getting your username associated with thoughtful replies — the link traffic comes from people clicking your profile after several good comments.

**Template A — Reversed meaning question**

> {Card} reversed in {context} usually points to {one specific dynamic, not vague themes}. The thing reversals do that uprights don't is signal that the energy is *blocked*, *internalised*, or *expressed shadow-side* — not "the opposite of upright". So {Card} reversed isn't "no {keyword}"; it's "the {keyword} hasn't fully landed yet, and here's where it's stuck."
>
> Three things to journal on:
> - What in this situation feels like it should be moving but isn't?
> - Whose voice is talking when you tell yourself you can't have {keyword}?
> - If the upright version of this card showed up tomorrow, what would have changed first?
>
> The reversal isn't a verdict, it's a diagnostic.

**Template B — "I keep pulling X"**

> Repeated draws of a card almost always mean one of two things: either the situation hasn't moved since the last reading, or your question hasn't moved.
>
> Try this: instead of asking the same question and pulling again, ask the card directly. "{Card}, what am I refusing to see?" Pull one clarifier. The pattern often breaks immediately, because the question changes shape.
>
> If you've drawn {Card} three or more times in a week, it's worth journaling for ten minutes on what you've been *avoiding deciding* about. {Card}'s specific job is to surface that — it's not random.

**Template C — "What's a good spread for X"**

> For {situation}, a 3-card past-present-future is the default but it tends to flatten the question into a timeline. A better choice for {situation} is usually one of:
>
> - {situation}-specific 5-card: situation / what's blocking you / what to release / what to embrace / outcome
> - The "hopes vs fears" spread: 4 cards — what you hope, what you fear, what's actually true, what the next right action is
> - Single-card with three clarifiers — sometimes one card with focused follow-ups is more honest than a layout
>
> Avoid spreads with more than 7 positions for emotional questions — the more cards on the table, the more your interpretation drifts.

**Template D — "How they feel about me"**

> "As feelings" readings are some of the most interpretively dangerous because they ask the cards for something the cards don't actually do well — read another person's interior state. What tarot *can* do is reflect the energy you're feeling between you and them. That's still useful, but it's a different question.
>
> A reframe that works better: "What is the dynamic between us right now?" Then pull. The card tells you the shape of the connection rather than pretending to read their mind. {Card} in that position usually means {nuanced read}, which is far more actionable than "they love you / they don't".

**Template E — Beginner question**

> Three things that made tarot actually click for me, in order of how much they helped:
>
> 1. Stop trying to memorise meanings. Pull one card every morning, write down what you *feel* it's saying, then check a reference. After ~30 days the cards start speaking in your own vocabulary.
> 2. Use reversals or don't, but commit. Half the spreads I see online use reversals randomly. Either you read upside-down cards differently or you flip them upright — there's no "sometimes."
> 3. Ask better questions. "Will I get the job" is a closed question and a closed question deserves a closed card. "What do I need to know about this job opportunity" opens the deck up.
>
> Most "I can't read tarot" feelings are actually "I'm asking yes/no questions of an open-ended tool."

---

### Reddit link-comments (only when invited)

When someone says "where can I read more about X" or "any good tarot sites" — **then** the link is value, not promo. Templates:

- "If you want a longer write-up on {Card} reversed in love specifically, I wrote one here: tarotaxis.com/cards/{slug}/reversed — has a section on the dating dynamics that get missed in shorter takes."
- "There's a free 3-card reading on tarotaxis.com if you want to pull cards on this without a deck handy. No login, no email gate."
- "For 'as feelings' I'd genuinely send you to tarotaxis.com/cards/{slug}/feelings — it's the longest treatment I've found on what {card} actually says about another person's interior state."

**Always:** lowercase URL, no markdown link with cute anchor text. Reddit users trust raw URLs more than `[click here](...)`.

---

## Quora playbook

Quora answers rank in Google for 2–3 years if they're well-written. One good answer that ranks for "what does the Tower reversed mean" can drive 50–200 referrals/month indefinitely. The investment per answer is ~20 minutes; the ROI is the highest of any channel.

### Where to find questions

Sort by **Most Viewed** (not "most recent"). High-view questions already have proven search interest — Quora's algorithm has decided they're worth promoting. Search:

- "tarot card meaning"
- "yes no tarot"
- "what does {any card} mean"
- "tarot reversed"
- "tarot spread for {topic}"
- "how to learn tarot"

Pick the 20 with the most views and lowest answer count (high views, < 5 answers = highest leverage).

### Answer formula

1. **Opening sentence answers the question literally.** No throat-clearing. Quora hides answers that don't open with the answer.
2. **2–3 paragraphs of context** — what the card/spread/concept actually does.
3. **A specific example or journaling prompt** — this is what separates a Quora answer from a Wikipedia summary.
4. **One footer line with a link** to the most relevant page. Use the Credentials byline link plus one in-body link maximum.

### Three ready answers

Adapt these to the exact question wording on Quora, but the structure is reusable.

---

**Q: "What does The Tower reversed mean in tarot?"**

> The Tower reversed describes a collapse that's been delayed, internalised, or partially avoided. The upright Tower is the structure coming down all at once; reversed, it's the structure already failing but somehow still standing, often because the person inside is bracing it with sheer willpower.
>
> What it usually means in a reading: something you know is over hasn't been allowed to end yet. A relationship that ran out of substance six months ago but still has a shared calendar. A job that's untenable but feels unsafe to leave. An identity that's no longer accurate but you haven't updated. The reversed Tower is the warning that doing the work *now* — voluntarily — is much cheaper than letting the upright version arrive on its own schedule.
>
> The journaling question I'd ask: "What am I currently holding upright that wants to fall?" If you can name it honestly, the reversed Tower has done its job. You don't need to act immediately; you need to stop pretending it isn't there.
>
> Where it gets misread: people see the reversed orientation and assume "less bad than upright." It's not. It's often worse, because the upright Tower brings clarity through collapse, and the reversed version withholds that clarity while extracting the same cost in slow leaks. If you've drawn it, treat it as a more urgent message than the upright, not a softer one.
>
> I've written a longer treatment of this here: [tarotaxis.com/cards/the-tower/reversed](https://tarotaxis.com/cards/the-tower/reversed)

---

**Q: "Is a yes/no tarot reading actually accurate?"**

> Yes/no tarot is accurate to the extent that the question is genuinely a yes/no question — and most aren't.
>
> The mistake most readers make is forcing complex questions through a binary filter. "Will I get the job?" looks like yes/no but it's actually three nested questions: will I be offered it, will I accept it, and will it turn out to be what I think it is. Tarot tends to answer the most useful version of the question rather than the one literally asked, which is why yes/no readings frequently feel "wrong" even when they're correct.
>
> A more honest approach: pull a single card to a yes/no question, then read it for the *quality* of the yes or no. Three of Pentacles upright as a "will I get the job?" answer isn't just yes — it's "yes, and it'll involve collaboration with at least two specific people, and the dynamic between them matters more than the offer itself."
>
> The cards that genuinely behave as yes or no answers are a smaller set than most online lists suggest. The Sun, Star, World, and Three of Cups tend to be clean yeses. The Tower, Five of Pentacles, Eight of Swords, and Ten of Swords tend to be clean nos. Most other cards return "yes but..." or "no, and here's why you're asking the wrong question."
>
> If you want a free per-card yes/no with that nuance built in, I keep one at [tarotaxis.com/yes-no](https://tarotaxis.com/yes-no).

---

**Q: "How do I start learning tarot?"**

> Buy a deck you find beautiful — not one you read is "traditional". The deck you actually want to handle gets handled, and that's all that matters in the first six months.
>
> Pull one card per morning. Don't look up the meaning first. Write 2–3 sentences about what you feel the image is saying, then check a reference. Do this for 30 days. You'll learn more in those 30 days than from any book, because you'll be building a private vocabulary for the cards rather than borrowing someone else's. Most people who say "I can't seem to learn tarot" skipped this step.
>
> Resist the urge to do complex spreads early. A single card with a clear question is more honest than a Celtic Cross from a beginner. Add positions slowly.
>
> Three guides I'd recommend going through in order:
> - One on asking better questions: tarotaxis.com/how-to-ask-tarot-questions
> - One on the basic reading process: tarotaxis.com/how-to-read-tarot
> - And the beginners overview: tarotaxis.com/tarot-for-beginners
>
> Beyond that, the cards teach you. Read them daily, journal what they say, and within three months you'll start to recognise patterns about your own thinking that no other tool surfaces as cleanly.

---

### Quora cadence

- Week 1–4: 2 answers/week. Pick the 8 highest-leverage questions and go deep.
- Week 5+: 1 answer/week, plus 2 short replies to comments on previous answers (Quora's algorithm rewards thread engagement).
- Track which answers drive traffic in Quora's Stats — double down on similar question types.

---

## Tracking sheet

Make a simple sheet (Notion / Google Sheets) with these columns:

| Date | Platform | URL | Type | Topic | Karma/Upvotes | Traffic ref | Notes |

Review monthly. The patterns surface fast: certain subreddits/quora topics convert visibly better. Concentrate effort where the signal is.

---

## What NOT to do

- Do not drop links in r/tarot top-level comments without invitation. The mods are aggressive.
- Do not cross-post the same launch story to more than one subreddit on the same day (filter).
- Do not link to templated combo pages — they're noindex right now. Use `/combination/<slug>` only with slugs from the whitelist in this doc.
- Do not use marketing-speak in answers. "Discover", "unlock", "transform" — tarot Reddit and Quora users sniff these out within a sentence.
- Do not answer with an LLM voice (em-dashes everywhere, "It's worth noting that…", "This combination suggests…"). Concrete examples, specific names, edge cases — that's the voice that earns trust.

---

## When to re-link templated combos

After domain quality recovers (target: 4-8 weeks from 2026-05-27 deploy), some templated combos can be selectively re-indexed by promoting them to curated (i.e., adding hand-written content to lib/combo-context). At that point, Reddit/Quora links to those specific URLs are safe again.

Until then: 40 curated + per-card pages + spreads + guides only.
