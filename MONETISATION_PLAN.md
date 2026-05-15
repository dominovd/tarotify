# TarotAxis — Monetisation Plan

**Status:** planning — no code written yet
**Author:** drafted 2026-05-14
**Principle:** build the infrastructure now, switch on the API later when traffic justifies it.

---

## 0. Why this approach

The reasoning behind shipping monetisation infrastructure *before* there is paying traffic.

1. **Auth and billing are not retrofits.** They touch the layout, the navigation, middleware, env vars, sitemap exclusions, error handling, and every page that wants to gate content. Doing them while the codebase is still small is cheap; doing them after 6 months of growth is painful.
2. **Free tiers cover the pre-traffic period at $0/mo.** Supabase free covers 500 MB DB, 50k MAU, unlimited auth. Lemon Squeezy is free until you take a payout. You can fully integrate and self-test for nothing.
3. **Account collection while it's free is the warmest-possible audience for when AI launches.** Every user who registers for cloud journal / cross-device sync is a primed channel to broadcast "AI is live" later. Without accounts, AI launch is to cold traffic only.

Three-step product narrative this enables:

```
Today          →  Site has free, deep content (245 URLs) — no accounts needed
After Sprint 3 →  Optional sign-up unlocks cloud features (journal sync, history)
After AI flip  →  Premium tier adds AI reading interpretation
```

---

## 1. Architecture overview

Two orthogonal axes — separate access tiers from feature flags.

### Access tiers (live from Sprint 1)

| Tier      | Identifier             | What they can do                                                                                |
|-----------|------------------------|------------------------------------------------------------------------------------------------|
| Guest     | no auth                | Everything currently public on tarotaxis.com — readings, cards, quizzes, journal in localStorage |
| Free user | signed in, no sub      | Same as guest, plus cloud journal, cross-device sync, email preferences, account dashboard      |
| Premium   | signed in + active sub | Free + every premium feature that's currently flipped on                                        |

### Feature flags (turned on individually)

| Feature key      | Phase 1 (Sprint 3 launch) | Phase 2 (when AI flips)            |
|------------------|---------------------------|------------------------------------|
| `cloud-journal`  | ✓ on                      | ✓ on                               |
| `reading-history`| ✓ on                      | ✓ on                               |
| `ad-free`        | ✓ on (no ads yet anyway)  | ✓ on                               |
| `email-priority` | ✓ on                      | ✓ on                               |
| `ai-analysis`    | ✗ placeholder UI only     | ✓ on — Claude API replaces stub    |
| `ai-card-meanings`| ✗ placeholder UI only    | ✓ on — Claude API replaces stub    |
| `custom-spreads` | ✗ placeholder UI only     | ✓ on — Claude API replaces stub    |

The whole point of the split: AI features ship at Sprint 3 as visible-but-not-working placeholders that say "launching soon". Premium subscriptions sell on the Phase-1 features alone. When AI is flipped, every existing premium subscriber gets it for free (no price change, no migration).

---

## 2. Sprint plan

Four sprints of ~1.5–2 hours each. Can be done back-to-back or staggered.

### Sprint 1 — Auth foundation (Supabase)

**Goal:** A user can sign up with email, receive a magic link, be signed in, see their account page, and sign out. No payment yet.

**External setup (Denis):**
- Create Supabase project — region eu-west-1 to match Resend.
- Copy `SUPABASE_URL` + `SUPABASE_ANON_KEY` + `SUPABASE_SERVICE_ROLE_KEY` (server-only) into Vercel env.
- In Supabase: turn on Email Auth → Magic Link, set Site URL to `https://tarotaxis.com`, add redirect URL `https://tarotaxis.com/auth/callback`.
- Configure Resend in Supabase SMTP so auth emails are branded TarotAxis (not the default Supabase domain). Uses existing `RESEND_API_KEY`.

**Code (this repo):**
- `lib/supabase/client.ts` — browser client (uses anon key)
- `lib/supabase/server.ts` — RSC/route handler client (uses cookies for session)
- `lib/supabase/admin.ts` — service-role client (server-only, never exposed)
- `app/auth/signin/page.tsx` — magic-link sign-in form
- `app/auth/signup/page.tsx` — same form, different copy
- `app/auth/callback/route.ts` — exchange auth code for session, set cookie, redirect
- `app/auth/signout/route.ts` — POST handler, clears session
- `app/account/page.tsx` — server component, requires auth, shows profile + sub status
- `components/UserMenu.tsx` — client component injected into `Nav.tsx` (signed-out: "Sign in" link; signed-in: avatar dropdown with /account + Sign out)
- `middleware.ts` — refresh session on each request, redirect protected routes to /auth/signin
- `hooks/useUser.ts` — client-side `useUser()` returning current user from Supabase client + auth state subscription

**DB schema (Supabase SQL editor):**

```sql
-- profiles: 1:1 with auth.users
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  display_name text,
  -- Pre-fill personalisation prefs (D4 — free account perk)
  zodiac_sign text,
  preferred_theme text,       -- 'general', 'love', 'career', etc.
  preferred_frequency text,   -- 'single', 'daily', 'weekly', etc.
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- quiz_stats: cross-device sync of /quiz progress (D4 — free perk)
create table public.quiz_stats (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  pool text not null,         -- 'major', 'minor', 'cups', ..., 'major_rev'
  best_score int not null default 0,
  best_streak int not null default 0,
  games int not null default 0,
  updated_at timestamptz default now(),
  unique (user_id, pool)
);

-- favourites: free user pinned spreads/cards/readings (D4 — free perk)
create table public.favourites (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  kind text not null check (kind in ('card','spread','reading')),
  target_slug text not null,  -- card slug, spread route, or saved_reading id
  label text,                 -- user-set label (optional)
  created_at timestamptz default now(),
  unique (user_id, kind, target_slug)
);

-- subscriptions: 1:N (history), but only one active row per user
create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  status text not null check (status in ('trialing','active','past_due','cancelled','expired')),
  plan text not null,         -- 'premium-monthly', 'premium-yearly'
  ls_subscription_id text,    -- Lemon Squeezy ID for webhook lookups
  ls_customer_id text,
  current_period_end timestamptz,
  cancel_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
create index on public.subscriptions(user_id);
create index on public.subscriptions(ls_subscription_id);

-- saved_readings: cloud journal for premium users
create table public.saved_readings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  date date not null,
  question text,
  spread_id text,                -- 'three', 'celtic-cross', 'reading-analysis', etc.
  cards jsonb not null,          -- [{slug, reversed, position}, ...]
  interpretation text,           -- generated text at the time of saving
  notes text,                    -- user's own reflection
  created_at timestamptz default now()
);
create index on public.saved_readings(user_id, created_at desc);

-- ai_usage: rate-limiting + cost accounting (created in Sprint 4, reserve here)
create table public.ai_usage (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  feature text not null,         -- 'analyse-reading', 'card-meaning', etc.
  tokens_in int,
  tokens_out int,
  cost_usd_micro int,            -- cost × 1_000_000 to keep as int
  created_at timestamptz default now()
);
create index on public.ai_usage(user_id, created_at desc);

-- Row-level security: users see only their own rows
alter table public.profiles enable row level security;
alter table public.subscriptions enable row level security;
alter table public.saved_readings enable row level security;
alter table public.ai_usage enable row level security;
alter table public.quiz_stats enable row level security;
alter table public.favourites enable row level security;

create policy "profiles_self_read" on public.profiles for select using (auth.uid() = id);
create policy "profiles_self_update" on public.profiles for update using (auth.uid() = id);
create policy "subs_self_read" on public.subscriptions for select using (auth.uid() = user_id);
create policy "readings_self_all" on public.saved_readings for all using (auth.uid() = user_id);
create policy "ai_usage_self_read" on public.ai_usage for select using (auth.uid() = user_id);
create policy "quiz_stats_self_all" on public.quiz_stats for all using (auth.uid() = user_id);
create policy "favourites_self_all" on public.favourites for all using (auth.uid() = user_id);

-- Trigger: create profile on signup
create or replace function public.handle_new_user() returns trigger as $$
begin
  insert into public.profiles (id, email) values (new.id, new.email);
  return new;
end $$ language plpgsql security definer;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();
```

**Pages/routes that change:**
- `components/Nav.tsx` — add `<UserMenu />` to the right side
- `app/sitemap.ts` — exclude `/auth/*`, `/account`, `/api/*` (they're already private)

**Acceptance criteria:**
- Sign up with magic link works end-to-end.
- After sign-in, `/account` shows email + "Subscription: free" placeholder.
- Sign out works.
- localStorage data is untouched (still works for guests).

**Estimated time:** 1.5–2h.

---

### Sprint 2 — Billing rails (Paddle Billing)

**Goal:** A signed-in free user can click "Upgrade", complete Paddle checkout, return to the site as a premium user. Cancel works. Webhooks keep `subscriptions` table in sync.

**External setup (Denis):** see `PADDLE_SETUP.md` for the step-by-step. Summary:
- Sign up at paddle.com/billing (NOT Paddle Classic). Sandbox active immediately, production approval 1-2 weeks.
- Submit production verification (passport, ФОП registration number, business info, Wise bank details).
- In SANDBOX dashboard: create product "TarotAxis Premium" with two prices — monthly ($7 USD recurring 1 month) and yearly ($60 USD recurring 1 year).
- Create webhook destination → `https://tarotaxis.com/api/paddle/webhook`. Subscribe to: `subscription.{created,updated,canceled,activated,paused,resumed,past_due}`, `transaction.{completed,payment_failed}`, optionally `customer.created`.
- Generate API key (server-side) and Client-side token (browser-safe).

**Env vars (all from sandbox during dev, swap to production values after approval):**
- `PADDLE_ENVIRONMENT` = `sandbox` | `production`
- `PADDLE_API_KEY` — server-only, full-access API key
- `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN` — public, used by Paddle.js overlay
- `PADDLE_PRODUCT_ID` — `pro_...`
- `PADDLE_PRICE_MONTHLY_ID` — `pri_...`
- `PADDLE_PRICE_YEARLY_ID` — `pri_...`
- `PADDLE_WEBHOOK_SECRET` — `pdl_ntfset_...`, used to HMAC-verify webhook bodies

**Code:**
- `lib/paddle/client.ts` — fetch wrapper around Paddle API. Picks `api.paddle.com` vs `sandbox-api.paddle.com` based on `PADDLE_ENVIRONMENT`.
- `lib/paddle/checkout.ts` — `createCheckoutSession(userId, priceId)`. Paddle Billing uses Checkout Sessions API (POST /transactions or /checkout/sessions endpoint), returning a hosted checkout URL with `custom_data.user_id` so the webhook can match.
- `app/api/paddle/webhook/route.ts` — verifies signature via `paddle-signature` header HMAC, parses event, upserts `subscriptions` row. Idempotency via `event.notification_id` stored in `webhook_events`. Edge runtime safe.
- `app/pricing/page.tsx` — pricing table (Free vs Premium), feature comparison, CTA → /api/paddle/checkout/[interval]
- `app/api/paddle/checkout/[interval]/route.ts` — signed-in only (`interval` is `monthly` or `yearly`); creates checkout session, redirects to hosted URL.
- `app/api/paddle/portal/route.ts` — opens Paddle Customer Portal for cancel/update payment.
- `lib/subscription.ts` — `async getSubscription(userId): Subscription | null` + `isPremium(userId): boolean`. Cached via React `cache()`.
- `components/UpgradeButton.tsx` — reusable across the 5 prompt locations from D5.

**Webhook signature verification:** Paddle sends `paddle-signature` header in format `ts=<timestamp>;h1=<hmac>`. HMAC-SHA256 of `<timestamp>:<raw body>` with `PADDLE_WEBHOOK_SECRET`. Reject if timestamp older than 5 minutes (replay protection) or HMAC mismatch.

**Webhook idempotency:** every Paddle notification has a unique `notification_id` (`ntf_...`). Use it as the `event_id` in `webhook_events` table — skip processing if already seen. Paddle retries failed deliveries for ~3 days.

**Pages that change:**
- `app/account/page.tsx` — shows real subscription status, next billing date, "Manage" button → portal
- `components/Nav.tsx` — "Upgrade" link visible for free users only
- `app/sitemap.ts` — `/pricing` added at priority 0.7

**Acceptance criteria:**
- Free user clicks Upgrade → Paddle checkout (sandbox: $7 test card `4000 0000 0000 0002`) → returns to site → /account shows "Premium · monthly · renews on X".
- Cancel via portal updates `subscriptions.cancel_at`. Status flips to `cancelled` on period end via `subscription.canceled` webhook.
- Failed-payment dunning is handled by Paddle automatically; we just receive the eventual `subscription.past_due` then `subscription.canceled`.

**Sandbox → Production migration:** when Paddle approves the live account (1-2 weeks), recreate the same Product + Prices + Webhook in the production dashboard. Update env vars in Vercel. Redeploy. Sandbox values stay for local dev / preview deploys.

**Estimated time:** 2-2.5h.

---

### Sprint 3 — Premium gates + Phase-1 features

**Goal:** A premium user gets real cloud features today. AI-related premium features are visible but stubbed.

**Code — gating primitives:**
- `lib/features.ts` — feature flag map:
  ```ts
  export const FEATURES = {
    'cloud-journal':   { premium: true, available: true },
    'reading-history': { premium: true, available: true },
    'ad-free':         { premium: true, available: true },
    'ai-analysis':     { premium: true, available: false },
    'ai-card-meanings':{ premium: true, available: false },
    'custom-spreads':  { premium: true, available: false },
  } as const
  ```
  When `available: false`, gates render "Launching soon" instead of the actual upgrade prompt.
- `components/PremiumGate.tsx` — client component. Three states:
  1. Free user, feature available → "Upgrade to Premium" CTA
  2. Free user, feature not yet available → "Coming soon" with email-list join button
  3. Premium user, feature not yet available → "Launching soon — you'll get it first"
  4. Premium user, feature available → render `children`
- `hooks/usePremium.ts` — client-side check via Supabase client + cached subscription lookup

**Code — Phase-1 premium feature: cloud journal**
- Schema is already in place (`saved_readings`).
- `lib/journal.ts` — abstraction over localStorage + Supabase. For free users → reads/writes `tarotify_journal` localStorage. For premium → reads/writes `saved_readings` table. Surface a single API: `saveReading(reading)`, `listReadings()`, `deleteReading(id)`.
- `app/journal/page.tsx` — already exists; refactor to use `lib/journal.ts`.
- `app/journal/sync/page.tsx` — one-off "Bring your local readings to the cloud" — runs on user's first sign-in if localStorage has entries. Premium-only.
- `/reading-analysis` — already saves to `tarotify_journal`; switch to `lib/journal.ts`.

**Code — Phase-1 premium feature: cross-device sync**
- "Read on phone, see on desktop" — just works once cloud journal is shared. No extra code.

**Code — AI placeholder UI on /reading-analysis:**
- Add a second action button next to "Analyse" — "Get AI Interpretation" with sparkles icon. Visible to everyone.
- Click handler renders `<PremiumGate feature="ai-analysis">` — guests/free see "Sign up + upgrade" prompt; premium without-AI see "Launching soon — you'll get it first" + Resend "ai-waitlist" Audience subscribe.

**Pricing page copy:**
The trick is to sell Phase-1 features (real, working) and *hint* at Phase-2 features (coming) without lying about what they currently are.

```
Free                              | Premium ($7/mo, $60/yr)
- Free 78-card reading            | Everything in Free
- 4 spreads + 17 themed spreads   | Cloud-synced journal across devices
- 245 card meaning pages          | Reading history (unlimited entries)
- Daily card                      | Priority email subscription
- Tarot quiz                      | Early access to AI features
- Yes/No oracle                   | Ad-free forever
- Reading analyser (template)     |
- 22 yes/no cards                 | Coming in 2026:
- Local-device journal            | - AI reading interpretation
                                  | - Personalised card guidance
                                  | - Custom AI-guided spreads
```

**Acceptance criteria:**
- Free user clicks "Get AI Interpretation" on /reading-analysis → upgrade prompt.
- Premium user clicks same button → "Launching soon" with sparkle animation + waitlist confirmation (already on waitlist since they're premium).
- Premium user's readings now persist across devices.
- Free user's localStorage still works — no functional regression.

**Estimated time:** 2h.

---

### Sprint 4 — AI shell (built, switched off)

**Goal:** Everything the AI feature will need is in place. A single env var flip + replacing one stub function turns it on.

**Code — the shell:**
- `lib/ai/client.ts` — Anthropic SDK wrapper. Reads `ANTHROPIC_API_KEY` from env. Has a kill-switch: if `process.env.AI_ENABLED !== 'true'` it throws `AIDisabledError` immediately, returning 503 from any route that uses it.
- `lib/ai/prompts/analyse-reading.ts` — full system prompt + user prompt template for analysing a /reading-analysis selection. Written now, never changed at flip-time.
- `lib/ai/prompts/card-meaning.ts` — for "ask AI about this card" feature
- `lib/ai/prompts/custom-spread.ts` — for AI-guided custom spread
- `lib/ai/budget.ts` — `checkBudget(userId)`:
  - reads `ai_usage` rows for current month
  - returns `{ allowed, dailyRemaining, monthlyRemaining, reason }`
  - hard caps: per-user 20/day, per-user 200/month
  - global hard cap: $X/month total — soft falls back to template version
- `lib/ai/run.ts` — `runAI(userId, feature, prompt) → { text, tokensIn, tokensOut, cost }` — does the API call, writes to `ai_usage`, returns or throws.
- `app/api/ai/analyse-reading/route.ts` — POST `{cards, question}` → check premium → check budget → run → return result. Currently returns 503 because `AI_ENABLED` is false.
- `app/api/ai/card-meaning/route.ts` — same shape, different prompt.
- `app/api/ai/custom-spread/route.ts` — same shape.
- `components/AIInterpretation.tsx` — client component. Hits /api/ai/* endpoints, shows streaming response (Claude supports SSE), handles "service unavailable" gracefully (falls back to template version with a notice).
- `app/api/ai/waitlist/route.ts` — adds email to Resend Audience `ai-waitlist`.

**Resend setup (Denis, while waiting for flip):**
- New Audience "AI Waitlist" — separate from "General".
- `RESEND_AI_WAITLIST_ID` env var.
- Welcome email for waitlist members: "Thanks — you'll be first to know when AI launches."

**Rate-limiting infrastructure:**
- Optional: Upstash Redis for IP-based rate limiting on `/api/ai/*` (10 req/min/IP). Free tier covers 10k/day, more than enough.
- Per-user limits done in `lib/ai/budget.ts` using Supabase.

**UX while AI is off:**
- Pricing page: "AI launches when our waitlist hits 1,000 subscribers" or similar honest message — creates urgency, no false promises.
- Account dashboard: "AI usage: 0 / day" stat hidden until enabled.

**Env vars needed for Sprint 4 (added to Vercel, blank at first):**
```
ANTHROPIC_API_KEY=
AI_ENABLED=false
AI_MONTHLY_BUDGET_USD=200
RESEND_AI_WAITLIST_ID=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

**Acceptance criteria:**
- `POST /api/ai/analyse-reading` returns 503 `{ error: 'ai_disabled' }`.
- AI button on /reading-analysis shows "Launching soon" gracefully.
- Waitlist signup writes to Resend Audience.
- After flipping `AI_ENABLED=true` and setting `ANTHROPIC_API_KEY`: AI button calls the API, streams response, writes to `ai_usage`, decrements budget. **No other code changes needed.**

**Estimated time:** 2h (writing prompts is the longest part).

---

## 3. The flip: when traffic justifies turning AI on

When the daily traffic + waitlist size make it worth the API spend, the flip is genuinely small:

1. **Vercel dashboard:**
   - Set `ANTHROPIC_API_KEY=sk-ant-...`
   - Set `AI_ENABLED=true`
   - Set `AI_MONTHLY_BUDGET_USD=200` (or whatever you decide)
   - Redeploy (env-var change triggers it automatically).
2. **Email broadcast (Resend):**
   - To `ai-waitlist` audience — "AI reading interpretation is live."
   - Link to /reading-analysis with `?ref=ai-launch` for tracking.
3. **In `lib/features.ts`:** flip `available: true` for `ai-analysis`, `ai-card-meanings`, `custom-spreads`. Commit + push.
4. **Smoke test:** sign in as test premium user, click AI button, verify response streams, verify `ai_usage` row written.

Day-of-flip work: ~30 minutes.

---

## 4. Cost guardrails — limits I'd set on day one

| Limit type        | Setting                                          | Rationale                                            |
|-------------------|--------------------------------------------------|------------------------------------------------------|
| Per user / day    | 20 AI requests                                   | Stops accidental loops / abuse                       |
| Per user / month  | 200 AI requests                                  | Heavy user worth $7/mo at ~$0.02/req = $4/mo cost    |
| Global / month    | `AI_MONTHLY_BUDGET_USD` env var (start at $100) | Hard cap; falls back to template version             |
| Per request tokens| max_tokens: 1024 output                          | One reading analysis ~500-800 tokens                 |
| Model             | `claude-haiku-4-5-20251001` first                | Cheapest tier, still strong; upgrade if quality matters |

**Cost rough math (Haiku 4.5):**
- ~$0.001/1k input, ~$0.005/1k output (illustrative — verify before launch).
- One reading analysis: ~3k input + 800 output ≈ $0.007.
- 200 requests/month/user ≈ $1.40/user.
- $5.60 margin per premium subscriber at $7/mo.

If quality matters more, swap to Sonnet — ~5× the cost. Margin tighter, still positive at $1+/user at typical usage.

---

## 5. Premium tier feature menu — what makes a Phase-1 launch credible

A premium tier that only sells "AI coming soon" won't convert. Phase-1 features need to be real, useful, and tied to logged-in state so the subscription's purpose is obvious from day one.

**Concrete Phase-1 features (all built in Sprint 3):**

1. **Cloud journal** — readings save to Supabase, not just this device. Solves the "I read on my phone but want to look back from my laptop" problem that localStorage can't.
2. **Reading history** — unlimited entries. Free users keep the last 20 (current behaviour).
3. **Themed favourites** — pin readings to themes (Career, Love, Spiritual) for organised review.
4. **Ad-free promise** — sells well even when there are no ads; reserves the right not to add them for premium.
5. **Email priority** — premium subscribers get the daily card email 1 hour before everyone else, plus a weekly digest.

**Future Phase-2 add-ons (Sprint 4 placeholder UI, real after flip):**

6. **AI reading interpretation** — adds a "Get AI insight" button to /reading-analysis. Returns 200-400 word personalised reading.
7. **AI card meanings** — context-aware "What does this card mean *for me today*" on each /cards/[slug].
8. **Custom AI-guided spreads** — describe a situation, AI proposes a spread and walks through it.
9. **Personalised daily readings** — adapts the daily card email based on the user's saved questions and patterns.

---

## 6. Decision points — what Denis needs to confirm

These determine concrete numbers, copy, and UX. None are blockers for Sprint 1 (which is purely auth), but Sprint 2+ needs them.

### D1 — Pricing

| Option        | Monthly | Yearly | Why                                                    |
|---------------|---------|--------|--------------------------------------------------------|
| Conservative  | $5      | $40    | Maximises conversion, slim margin on AI               |
| **Default**   | **$7**  | **$60**| Comfortable margin even with Sonnet for AI            |
| Premium feel  | $9      | $80    | Signals high quality, narrower market                  |
| Tarotify.ai   | $9.99   | $79.99 | Direct competitor price; match or undercut             |

Recommendation: $7/mo, $60/yr to start. Easy to raise later for new sign-ups; existing subscribers grandfathered.

### D2 — Free tier limits

Should free have any hard limits on the *existing* free features, to push conversion? Two schools of thought:

- **Tight:** limit daily card emails to 7/week, journal to 5 entries, no /reading-analysis. Punishes free users to convert them.
- **Generous:** keep everything currently free, free. Sell on additional value, not by taking things away.

Recommendation: generous. The 245 URLs are already in Google — limiting them hurts SEO and breaks the "free for casual users" pact. Make premium *additive*.

### D3 — Lemon Squeezy vs Stripe

| Factor               | Lemon Squeezy          | Stripe                                  |
|----------------------|------------------------|------------------------------------------|
| Merchant of Record   | ✓ they handle VAT/tax | ✗ you handle it (or use Paddle/MoR)     |
| Fees                 | 5% + $0.50/transaction | 2.9% + $0.30/transaction                |
| Setup                | 30 minutes             | Faster but requires VAT registration if EU sales |
| Best for             | Solo, global, no LLC   | Funded startup, US-focused              |

Recommendation: Lemon Squeezy. You're solo, traffic is global, the 5% fee buys you tax compliance peace of mind.

### D4 — Sign-up incentive

What does a guest see that makes them sign up *for free* (before any subscription pitch)?

- Save journal entries to cloud
- Track quiz progress across devices
- Receive personalised daily card email
- Get the weekly TarotAxis digest

These are real Phase-1 features. Free account is the gateway drug to Premium — make it valuable on its own.

### D5 — Where do upgrade prompts appear?

Audit of natural placement points:

- `/reading-analysis` — "Get AI Interpretation" button (Sprint 3 placeholder, Sprint 4 stub, post-flip real)
- `/journal` — "Sync to cloud" banner for free users with >5 entries
- `/account` — "You're on Free — Upgrade for cloud sync" if signed-in free
- `/free-reading` after a reading — "Save this reading forever" prompt
- Nav bar — small "Upgrade" link for signed-in free users

Don't add upgrade prompts to /cards/[slug] or /yes-no/* — those are SEO pages where prompts hurt conversion downstream.

### D6 — Daily card automation: keep for free or premium-only?

Currently `/api/cron/daily-card` broadcasts to entire Resend Audience. Options:

- **Keep public:** anyone with email gets daily card → big top-of-funnel reach.
- **Time-shift:** premium gets it at 6 UTC, free gets it at 12 UTC, "be the first to know" sells the difference.
- **Premium-only:** narrow funnel, lose SEO + email-list growth.

Recommendation: time-shift. Best of both — keeps the funnel wide and gives premium a real visible perk.

---

## 7. SEO considerations — what to exclude from sitemap and robots

When auth is live, these routes should be hidden from search:

```ts
// sitemap.ts — exclude
'/auth/signin', '/auth/signup', '/auth/callback', '/auth/signout',
'/account', '/account/*',
'/journal/sync',
'/api/*',
```

`/pricing` should be **included** in sitemap (it ranks for "tarot subscription", "tarot premium").

`robots.txt`:
```
User-agent: *
Allow: /
Disallow: /auth/
Disallow: /account
Disallow: /api/
Disallow: /journal/sync
```

`/account` and `/journal/sync` get `metadata.robots = { index: false, follow: false }` defensively even if sitemap excludes them.

---

## 8. Migration risk — localStorage to cloud

Existing users have `tarotify_journal`, `tarotify_yn`, `tarotify-deck`, `tarotify_quiz_stats_*`, `tarotify_freereading_prefs` in their browsers. None of this should be lost when a user signs up.

Migration strategy:
1. **Sign up does nothing automatically** — localStorage stays where it is.
2. **First sign-in after enabling cloud journal** — `/journal/sync/page.tsx` runs (premium only). Reads localStorage, writes to `saved_readings`, marks `localStorage.setItem('tarotify_journal_synced', 'true')` to prevent re-import.
3. **Free users keep localStorage forever** — no data loss, no forced migration.
4. **Cross-device case:** a premium user on phone for the first time finds an empty journal in cloud (because localStorage was on laptop). Add a banner "Your laptop data isn't here yet — open TarotAxis on your laptop and click Sync."

This is the only fragile bit. Worth testing carefully.

---

## 9. Open questions / things to revisit

- **AI streaming response** — Claude supports SSE. Worth implementing for perceived speed, slightly more code. Decide at Sprint 4.
- **Sonnet vs Haiku** — start Haiku, evaluate output quality on a sample of real readings before launch. Switch model is a one-line env-var change.
- **Refund policy** — Lemon Squeezy default is 14-day no-questions-asked. Worth keeping.
- **Trial period?** — could offer 7-day free Premium trial via Lemon Squeezy. Conversion vs churn trade-off. Decide after Sprint 2 numbers come in.
- **Annual discount %** — 2 months free (28% off) is standard. Tarotify.ai gives 33%. Match-or-beat at $60/year vs $84 monthly = 28%.
- **Multi-language pricing** — when i18n ships, may need PPP (purchasing power parity) tiers for India, Brazil, etc. Lemon Squeezy supports this. Not Sprint 1-4 concern.

---

## 10. Switch-on checklist (the day it goes live)

When the moment comes to flip AI on, work through this top-to-bottom:

- [ ] Anthropic API key created and added to Vercel env
- [ ] `AI_ENABLED=true` in Vercel env
- [ ] `AI_MONTHLY_BUDGET_USD` set to a comfortable starting figure
- [ ] Manual smoke test: signed in as premium → /reading-analysis → click AI button → response streams → /account/usage shows 1 request
- [ ] Budget alert tested: temporarily set budget to $0.01, confirm graceful fallback to template version
- [ ] Resend broadcast drafted to `ai-waitlist` Audience
- [ ] `lib/features.ts` flipped: `'ai-analysis': { available: true }` (etc.) — commit + push
- [ ] Pricing page copy updated: "AI launches in 2026" → "AI is live"
- [ ] Social post + Pinterest pin scheduled
- [ ] Broadcast email sent
- [ ] Monitor `ai_usage` table for first 24h; expect spike

---

## File map summary

By the end of Sprint 4, these new files exist:

```
app/
  account/page.tsx
  auth/
    signin/page.tsx
    signup/page.tsx
    callback/route.ts
    signout/route.ts
  pricing/page.tsx
  api/
    ai/
      analyse-reading/route.ts
      card-meaning/route.ts
      custom-spread/route.ts
      waitlist/route.ts
    paddle/
      webhook/route.ts
      checkout/[interval]/route.ts
      portal/route.ts
  journal/
    sync/page.tsx
components/
  UserMenu.tsx
  PremiumGate.tsx
  UpgradeButton.tsx
  AIInterpretation.tsx
hooks/
  useUser.ts
  usePremium.ts
lib/
  supabase/
    client.ts
    server.ts
    admin.ts
  paddle/
    client.ts
    checkout.ts
  ai/
    client.ts
    run.ts
    budget.ts
    prompts/
      analyse-reading.ts
      card-meaning.ts
      custom-spread.ts
  features.ts
  subscription.ts
  journal.ts (refactor)
middleware.ts
```

That's roughly 30 new files, mostly small. The total code added is maybe 1500-2000 lines.

---

## TL;DR for future-Denis reading this

Build everything except the AI API call now. Get accounts and subscriptions live with cloud journal as the headline premium feature. Collect a waitlist. When traffic justifies the API spend, flip two env vars and one feature flag — 30 minutes of work, and a year of pre-built infrastructure pays off.

---

## 11. Frozen decisions (2026-05-14)

All six decision points are settled. Use these as the source of truth — do not re-litigate during implementation.

### D1 — Pricing
- **Monthly:** $7.00 USD
- **Yearly:** $60.00 USD (28.5% effective discount — close to "two months free")
- All future references in code and copy use these numbers; grandfather existing subscribers if pricing changes later.

### D2 — Free tier strategy: **Generous**
- All 245+ current public pages stay fully open.
- No artificial caps on /reading-analysis, no rate-limits on /quiz, no limit on /daily web access.
- Local-device journal stays free with the existing 20-entry limit (already in place via `arr.slice(0, 20)`).
- Premium is purely additive. We sell on what's added, not what's taken away.

### D3 — Payment provider: **Paddle (Billing)** ⚠ revised from Lemon Squeezy

Originally settled on Lemon Squeezy. Switched to Paddle after discovering Stripe Connect payouts are unavailable for Ukraine, where the ФОП is registered. Paddle supports Ukrainian merchants via Wise / SWIFT payouts.

- **Merchant of Record** — same VAT/sales-tax compliance benefit as LS.
- **Fees:** 5% + $0.50 per transaction (identical to LS).
- **Payout method:** Wise Business (USD denominated, converts to UAH at withdrawal).
- **Onboarding caveat:** Paddle production approval takes 1-2 weeks. Sandbox is instant. All Sprint 2 dev happens in sandbox; flip to production env vars when approved.
- **Setup guide:** `PADDLE_SETUP.md` in repo root.
- **Note:** `LEMONSQUEEZY_SETUP.md` is retained as historical reference but is OBSOLETE — do not follow it.

### D4 — Free account perks (vs. guest)

Signed-in free users get, in addition to everything guests have:

1. **Cross-device quiz progress** — `quiz_stats` table syncs `tarotify_quiz_stats_*` across devices. Free users without an account still get localStorage.
2. **Save favourite spreads/cards** — `favourites` table — pin readings, spreads, or cards for quick recall in /account.
3. **Pre-fill personalisation prefs** — `profiles.zodiac_sign`, `profiles.preferred_theme`, `profiles.preferred_frequency` auto-fill the /free-reading filters and bias the daily card email.
4. **Weekly TarotAxis digest** — Friday-morning email, curated content, free-only since premium gets daily.

Crucially **NOT** in free tier (premium-only):

- **Cloud journal sync** — `saved_readings` table is premium-only (storage is the cost, and this is the strongest reason to upgrade)
- **Unlimited journal history** — free stays at 20 entries
- **Daily card email** at 6:00 UTC (free gets 12:00 UTC version via D6)
- **AI features** (Phase 2)
- **Ad-free promise**

### D5 — Upgrade prompt placement: **Subtle, 5 locations**

In priority order:

1. `/reading-analysis` — "Get AI Interpretation" button (Sprint 3 placeholder, post-flip real)
2. `/journal` — banner for signed-in free users with >5 entries — "Sync these to the cloud, available across devices"
3. `/account` — top of dashboard if free — "You're on the Free plan — upgrade for cloud sync and AI"
4. `/free-reading` after-reading screen — "Save this reading forever" CTA (when journal has hit 20 entries)
5. Nav bar — small "Upgrade" link, signed-in free users only

**Never** on: `/cards/*`, `/yes-no/*`, `/spreads/*`, `/quiz/*`, `/daily`, `/zodiac/*`. These are SEO-critical pages where prompts hurt downstream conversion and add friction to discovery.

### D6 — Daily card email: **Time-shifted**

- Premium: Resend Broadcast at **6:00 UTC**
- Free: Resend Broadcast at **12:00 UTC** with identical content
- Two separate Resend Audiences: `premium-daily` and `free-daily` (in addition to the existing General audience). Subscription webhook moves users between them. Unsubscribed users leave both.
- Cron in `vercel.json` adds a second job:
  ```json
  "crons": [
    { "path": "/api/cron/daily-card?audience=premium", "schedule": "0 6 * * *" },
    { "path": "/api/cron/daily-card?audience=free",    "schedule": "0 12 * * *" }
  ]
  ```
- `/api/cron/daily-card` reads `audience` query param, picks the right Resend Audience ID, otherwise identical logic.

---

## 12. Pricing copy — final wording (frozen)

For `/pricing` page hero and CTA copy:

> **Free** — Everything to read tarot, for free.
> **Premium** — $7/month or $60/year. Save your readings to the cloud, get the daily card before everyone else, and get first access to AI-powered features launching in 2026.

For the comparison table, use the D4/D5/D6 distinctions exactly as above.

---

## 13. Future-session checklist — what to do when starting Sprint 1

If you are an AI agent or future Denis starting Sprint 1, read these files first:

1. **This file (MONETISATION_PLAN.md)** — full plan, sections 1, 2, 6, 7 are most important
2. **memory/project_tarotaxis.md** — current state of the site
3. **memory/feedback_tarotaxis.md** — coding conventions (inline styles, British English, tsc verification, etc.)

Then:

1. Create Supabase project (eu-west-1)
2. Run the SQL schema from Section 2 → Sprint 1 → "DB schema"
3. Add env vars to Vercel (`SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`)
4. Configure Resend SMTP in Supabase for branded auth emails
5. Implement files from Sprint 1's "Code" subsection in order
6. Test sign-up → magic link → /account → sign-out flow end-to-end before moving to Sprint 2
