# AI Reading Setup — Sprint Notes

This sprint adds the free AI tarot reading tier. Backend infrastructure
landed; UI integration on `/free-reading` and `/reading-analysis` is the
next session.

## What's in this commit

```
supabase/migrations/002_ai_anonymous_quota.sql   Migration — adds anon tracking
lib/ai/prompts.ts                                System prompt builders EN+ES
lib/ai/quota.ts                                  Quota & rate-limit check
lib/cookies/browser-id.ts                        Signed cookie helpers
app/api/ai-reading/route.ts                      Edge endpoint w/ streaming
middleware.ts                                    Issues browser_id cookie
app/(en)/auth/signin/SignInForm.tsx              + "Continue with Google"
app/(es)/es/auth/signin/SignInForm.tsx           + "Continuar con Google"
```

## Steps Denis needs to do before this works

### 1. Apply migrations in Supabase

Supabase Dashboard → SQL Editor → "New query".

**Migration 002 (anonymous quota tracking):** paste contents of
`supabase/migrations/002_ai_anonymous_quota.sql` → Run.
Verify: `user_id` becomes nullable, columns `browser_id`, `ip_hash`,
`source`, `locale` appear.

**Migration 003 (AI reading cache):** paste contents of
`supabase/migrations/003_ai_reading_cache.sql` → Run.
Verify: `ai_reading_cache` table exists with RLS enabled and no client
policies (service-role only). Helper function `bump_ai_cache_hit` is in
place.

### 2. Configure Google OAuth provider — step by step

The flow at runtime:

```
User clicks "Continue with Google" on tarotaxis.com
    ↓
Supabase redirects to accounts.google.com (Google's consent screen)
    ↓
User grants access
    ↓
Google redirects to <supabase>/auth/v1/callback?code=...
    ↓
Supabase exchanges code → session, then redirects to your redirectTo
    ↓
Your /auth/callback route finishes the session and redirects to /account
```

So we need to set up two halves: **Google side** (where the consent screen lives) and **Supabase side** (which handles the callback and stores the session). Plus one careful **redirect URL allowlist** in Supabase.

---

#### Part A — Google Cloud Console

**A.1 Open or create the project**

1. Open https://console.cloud.google.com/ — sign in with the Google account you want to own the OAuth app (use a stable account, not a throwaway).
2. Top-left dropdown next to "Google Cloud" → "New Project" if there isn't already a `TarotAxis` project. Name: `TarotAxis`. Skip organisation. Create. Wait ~10 seconds, then switch into the project via the same dropdown.

**A.2 OAuth consent screen**

Left sidebar → **APIs & Services → OAuth consent screen**.

If this is a fresh project Google asks you to choose a user type:

- **User type: External** (you want anyone with a Google account to sign in, not just your workspace).

Click **Create**. You land on a 4-step form. Fill out:

*Step 1 — App information*
- App name: `TarotAxis`
- User support email: `info@tarotaxis.com` (or your Gmail — must be a real address that gets mail)
- App logo: optional (skip for now, can add later)
- Application home page: `https://tarotaxis.com`
- Application privacy policy link: `https://tarotaxis.com/privacy`
- Application terms of service link: `https://tarotaxis.com/terms`
- Authorised domains → **Add domain** → `supabase.co`. Add another → `tarotaxis.com`. Both are required because Supabase hosts the callback and your site initiates the flow.
- Developer contact information: `info@tarotaxis.com`

**Save and continue.**

*Step 2 — Scopes*
- Click **Add or remove scopes**.
- Tick: `.../auth/userinfo.email`, `.../auth/userinfo.profile`, `openid`. Nothing else.
- **Update → Save and continue.**

*Step 3 — Test users*
- While the app is in "Testing" mode (default), only listed test users can sign in.
- Add: your own Gmail address as a test user (so you can test the flow).
- Add a couple of friends' Gmail addresses if you want them to try.
- **Save and continue.**

*Step 4 — Summary* — review, click **Back to dashboard**.

⚠️ **Important:** the app is now in "Testing" mode. Real users (other than test users) will hit a "Google hasn't verified this app" screen and be **blocked**. Before public launch you need to click **Publish app** on the OAuth consent screen — this puts you in production mode without requiring full verification, as long as you stay within the basic scopes (which we do).

**A.3 Create the OAuth client ID**

Left sidebar → **APIs & Services → Credentials**.

Click **+ Create Credentials → OAuth client ID**.

- Application type: **Web application**
- Name: `TarotAxis Web` (just a label, users never see it)

**Authorised JavaScript origins** — click **+ Add URI** for each:
- `https://tarotaxis.com`
- `http://localhost:3000` (so the same client works for `npm run dev`)

**Authorised redirect URIs** — click **+ Add URI**:
- `https://zvfpnigaegrbgmllbsqe.supabase.co/auth/v1/callback`

That's the only redirect URI you need. **Not** your own `/auth/callback` — Google sends users to Supabase first, Supabase then bounces them to your callback. The redirect URI must match **exactly** (no trailing slash, https, that exact host).

Click **Create**. A modal pops up with two values:

- **Client ID** — copy it somewhere temporary
- **Client secret** — copy it somewhere temporary

Then close.

---

#### Part B — Supabase Dashboard

**B.1 Enable the Google provider**

Open https://supabase.com/dashboard → pick the `tarotify` project (it's named after the old brand).

Left sidebar → **Authentication → Providers**. Scroll to **Google** in the list.

- Toggle **Enable Google provider** → on.
- **Client ID (for OAuth)** → paste the Client ID from Part A.3.
- **Client Secret (for OAuth)** → paste the Client Secret.
- **Authorised Client IDs** → leave empty (this is for native iOS/Android apps).
- **Skip nonce checks** → leave unchecked.
- Click **Save**.

**B.2 URL Configuration — allow your domain as a redirect target**

This is the step everyone forgets. Supabase has a strict allowlist of post-auth redirect URLs; if your `redirectTo` isn't on it, you get a cryptic "redirect_to is not allowed" error after Google consent.

Left sidebar → **Authentication → URL Configuration**.

- **Site URL**: `https://tarotaxis.com` (the canonical home of your app — should already be set from magic-link sprint).
- **Redirect URLs**: add ALL of these (one per line, click "Add URL" for each):
  - `https://tarotaxis.com/auth/callback`
  - `https://tarotaxis.com/auth/callback?next=*`
  - `https://tarotaxis.com/es/account`
  - `https://tarotaxis.com/account`
  - `http://localhost:3000/auth/callback`
  - `http://localhost:3000/auth/callback?next=*`

The `?next=*` patterns are needed because our client code appends `?next=...` to track where the user was heading. Supabase's allowlist supports wildcards (`*`) on query strings.

Click **Save**.

---

#### Part C — Test it

**Production:**

1. Open `https://tarotaxis.com/auth/signin` in an incognito window (so no cached session).
2. Click **Continue with Google**.
3. Google consent screen appears — pick the test-user Gmail you added in A.2 step 3.
4. After consent, you should be redirected back to tarotaxis.com and land on `/account` already signed in (avatar appears in the Nav).

If you see "Access blocked: TarotAxis has not completed the Google verification process" — that's the Testing-mode block. Either add yourself as a test user (A.2 step 3) or publish the app (A.2 dashboard → **Publish app**).

If you see "redirect_uri_mismatch" — the redirect URI on Google side doesn't match exactly. Open the Credentials page (A.3) and re-check it's `https://zvfpnigaegrbgmllbsqe.supabase.co/auth/v1/callback`, nothing else.

If you see "redirect_to is not allowed" after consent — the post-auth redirect target isn't on Supabase's allowlist. Go back to B.2 and confirm `https://tarotaxis.com/auth/callback` is there.

**Spanish flow:**

Same as above but start at `https://tarotaxis.com/es/auth/signin`. After consent you should land on `/es/account`. If you land on `/account` instead, the `next` query param isn't being preserved — re-check that `?next=*` patterns are in B.2.

**Local dev:**

```bash
npm run dev
# Open http://localhost:3000/auth/signin
# Continue with Google → consent → back to localhost:3000/account
```

If local dev doesn't work but production does, you probably forgot `http://localhost:3000` in the Authorised JavaScript origins (A.3) or in Supabase Redirect URLs (B.2).

---

#### Part D — When you're ready for public launch

The Testing-mode block only affects external (non-test-user) accounts. Before you announce the AI feature publicly:

1. Go back to Google Cloud Console → **APIs & Services → OAuth consent screen**.
2. Click **Publish app** at the top of the page.
3. Confirm. Status changes to "In production".

Because our scopes are limited to `openid`, `email`, `profile`, Google does **not** require a verification review — you're public immediately. Verification is only needed if you ask for sensitive scopes like Drive/Gmail.

### 3. Add ANTHROPIC_API_KEY to Vercel

```
Vercel → tarotify project → Settings → Environment Variables
Name : ANTHROPIC_API_KEY
Value: sk-ant-api03-...   (create at console.anthropic.com)
Scope: Production + Preview + Development
```

Redeploy after adding so edge workers pick up the new var.

### 3b. (Optional) Tune AI_DAILY_BUDGET_USD

The AI route includes a circuit-breaker that refuses new generations
once total spend in any rolling 24h window exceeds the configured cap.
Default cap is **$5/day**. Cache hits don't count (they cost ~$0).

```
Vercel → Settings → Environment Variables
Name : AI_DAILY_BUDGET_USD
Value: 5         (raise or lower as you scale)
Scope: Production + Preview + Development
```

At ~$0.04 per fresh call, $5 = ~125 fresh readings/day. Cache hits
on /daily mean once-per-day generation serves every visitor.

When the cap trips, the endpoint returns 503 with `error:
"budget-exceeded"` and the UI shows the «AI is taking a rest» panel
instead of the sign-up wall.

### 4. (Optional) Add COOKIE_SECRET

The middleware uses `UNSUBSCRIBE_SECRET` to sign the `tarotify_bid`
cookie (already set in production). If you'd rather isolate concerns,
add `COOKIE_SECRET` as a separate value; the code prefers it when both
are present.

## Testing the endpoint with curl

```bash
# Anonymous draw (browser_id cookie not present in curl — endpoint will 400)
# So we first fetch any page to receive the cookie, then send it back.

curl -i -c /tmp/cookies.txt https://tarotaxis.com/ >/dev/null

curl -i -b /tmp/cookies.txt \
  -X POST https://tarotaxis.com/api/ai-reading \
  -H 'content-type: application/json' \
  -d '{
    "locale": "en",
    "source": "free-reading",
    "spreadName": "Past · Present · Future",
    "cards": [
      { "slug": "the-fool",        "reversed": false, "position": "Past" },
      { "slug": "the-magician",    "reversed": false, "position": "Present" },
      { "slug": "the-high-priestess", "reversed": false, "position": "Future" }
    ],
    "question": "What should I focus on this week?"
  }'
```

Expected: streaming `text/plain` response, headers include
`x-quota-remaining: 0` (anon got their one read), `x-quota-scope: anonymous`.

A second identical call returns 429 with header `x-quota-remaining: 0`,
`x-quota-scope: anonymous`.

To test the registered path, sign in via the website first, copy the
Supabase session cookie, and replay with `-b`.

## Cost & quota policy

| Audience       | Limit                      | Tracked via         |
|----------------|----------------------------|---------------------|
| Registered     | 5 readings / rolling 24h   | `user_id`           |
| Anonymous      | 1 reading / rolling 24h    | `browser_id` cookie |
| Abuse failsafe | 5 readings / 24h per IP    | `ip_hash`           |

Sonnet 4.6 with prompt caching (~6k cached system prompt). Per reading:
~$0.025 cached / ~$0.04 cold cache.

Max monthly cost projections:

| Scenario                          | Max spend / month |
|-----------------------------------|-------------------|
| 1 000 anon visitors, 1 read each  | ~$30              |
| 1 000 reg users, 5 reads/day each | ~$5 400 worst case (rare — most users use 1–2) |
| Realistic mix (1k anon + 500 reg × 2 reads/day avg) | ~$330       |

If costs surprise, the obvious knobs are:
1. Drop registered limit from 5 → 3 per day.
2. Cap output `MAX_TOKENS` (currently 1800; could go 1200).
3. Swap MODEL to `claude-haiku-4-5-20251001` — cuts output cost ~3×.

## What's NOT done in this session (next session)

- AI button + result rendering on `/free-reading` (EN + ES)
- AI button + result rendering on `/reading-analysis` (EN + ES)
- Quota indicator UI ("4 readings left today")
- Sign-up wall modal when anon hits limit
- Promo banners on homepage + key surfaces
- "Upgrade for unlimited" placeholder (will be wired to Lemon Squeezy
  in Sprint 2 monetisation work)
