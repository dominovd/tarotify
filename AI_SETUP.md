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

### 1. Apply migration 002 in Supabase

Supabase Dashboard → SQL Editor → "New query" → paste contents of
`supabase/migrations/002_ai_anonymous_quota.sql` → Run.

Verify with the sanity queries at the bottom of the file. Expected:
`user_id` becomes nullable, four new columns appear, two new indexes
appear.

### 2. Configure Google OAuth provider

**Google Cloud Console:**

1. Open https://console.cloud.google.com/apis/credentials
2. Pick (or create) a project for tarotaxis.
3. **APIs & Services → OAuth consent screen:**
   - User type: External
   - App name: `TarotAxis`
   - Support email: `info@tarotaxis.com`
   - App domain: `https://tarotaxis.com`
   - Authorised domain: `supabase.co` (Supabase hosts the callback)
   - Developer contact: `info@tarotaxis.com`
   - Scopes: just `openid`, `email`, `profile` — defaults are fine.
4. **Credentials → Create credentials → OAuth client ID:**
   - Type: Web application
   - Name: `TarotAxis Web`
   - Authorised JavaScript origins:
     - `https://tarotaxis.com`
     - `https://zvfpnigaegrbgmllbsqe.supabase.co`
   - Authorised redirect URIs:
     - `https://zvfpnigaegrbgmllbsqe.supabase.co/auth/v1/callback`
   - Save. Copy the **Client ID** and **Client Secret**.

**Supabase Dashboard:**

1. Authentication → Providers → Google → Enable.
2. Paste Client ID + Client Secret.
3. Save.

**Verify:** open `https://tarotaxis.com/auth/signin` → click
"Continue with Google" → consent screen → redirected back signed in.

### 3. Add ANTHROPIC_API_KEY to Vercel

```
Vercel → tarotify project → Settings → Environment Variables
Name : ANTHROPIC_API_KEY
Value: sk-ant-api03-...   (create at console.anthropic.com)
Scope: Production + Preview + Development
```

Redeploy after adding so edge workers pick up the new var.

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
| Anonymous      | 1 reading lifetime         | `browser_id` cookie |
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
