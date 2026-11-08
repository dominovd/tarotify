# AI limits — Redis-backed, configured entirely by env vars

Replaces the `ai_usage` / `ai_reading_cache` Postgres tables. Nothing else in
the app changed: `checkQuota`, `checkDailyBudget`, `logUsage`, `buildCacheKey`,
`lookupCachedReading` and `insertCachedReading` all kept their signatures, so
`app/api/ai-reading/route.ts` and `app/api/cron/prewarm-daily/route.ts` compile
and behave as before.

Files: `lib/kv.ts` (new), `lib/ai/quota.ts`, `lib/ai/cache.ts`.

---

## 1. Provision the store

Vercel KV was retired in December 2024 — existing stores were migrated to
Upstash and new ones come from the Marketplace.

Vercel dashboard → **Storage** → **Marketplace** → **Upstash for Redis** →
create a database in **eu-west-1** (same region as the Vercel functions; a
cross-region hop costs ~80 ms per command). Connect it to the `tarot` project
for Production, Preview and Development.

The integration injects `UPSTASH_REDIS_REST_URL` and
`UPSTASH_REDIS_REST_TOKEN` automatically. Copy both into `.env.local` for local
dev. (`KV_REST_API_URL` / `KV_REST_API_TOKEN` are accepted as aliases if you
ever end up with a legacy store.)

## 2. Set the limits

Two fixed windows per visitor (hour and day) plus an IP failsafe. A window
opens on the first reading and closes exactly 1h / 24h later.

| Variable | Default | Meaning |
|---|---|---|
| `AI_QUOTA_PER_HOUR` | `1` | Readings per hour per browser |
| `AI_QUOTA_PER_DAY` | `5` | Readings per 24h per browser |
| `AI_QUOTA_IP_PER_HOUR` | `3` | Readings per hour per IP (anonymous only) |
| `AI_QUOTA_IP_PER_DAY` | `15` | Readings per 24h per IP (anonymous only) |
| `AI_QUOTA_REG_PER_HOUR` / `AI_QUOTA_REG_PER_DAY` | same as above | Signed-in users, only with `NEXT_PUBLIC_AUTH_ENABLED=1` |
| `AI_DAILY_BUDGET_USD` | `5` | Spend ceiling per 24h across all users |
| `AI_CACHE_TTL_HOURS` | `24` | How long a cached reading stays servable |
| `AI_CACHE_DISABLED` | unset | `1` bypasses the cache entirely |
| `KV_TIMEOUT_MS` | `1500` | Per-request Upstash timeout |

A refused request gives back every counter it touched. Any limit set to `0`
disables that window; `AI_DAILY_BUDGET_USD=0` means no ceiling.

Response headers: `x-quota-remaining` (left today), `x-quota-window`
(`hour`/`day`), `x-quota-resets-at`, and `x-quota-next-at` when a reading used
up the hourly allowance.

## 2b. AI provider

| Variable | Default | Meaning |
|---|---|---|
| `DEEPSEEK_API_KEY` | none | Primary provider |
| `DEEPSEEK_MODEL` | `deepseek-flash` | Model for /free-reading, /daily, prewarm cron |
| `DEEPSEEK_MODEL_DEEP` | = `DEEPSEEK_MODEL` | Model for /reading-analysis |
| `DEEPSEEK_CONNECT_TIMEOUT_MS` | `8000` | Wait for DeepSeek to accept before falling back |
| `ANTHROPIC_API_KEY` | none | Fallback (Haiku 4.5 fast, Sonnet 4.6 deep) |
| `AI_PROVIDER` | `deepseek` | `anthropic` makes Claude primary |
| `AI_FALLBACK` | on | `0` disables the fallback |

Fallback happens only before the first token (connect error, non-200,
timeout). The budget is charged with the provider that actually answered:
DeepSeek ~$0.003, Haiku ~$0.008, Sonnet ~$0.04. The `x-ai-provider` response
header and the `[ai-reading] usage` log line show who answered.

## 2c. Accounts

`NEXT_PUBLIC_AUTH_ENABLED` unset: no sign-in UI anywhere, `/auth/*` and
`/account` redirect home, middleware does not call Supabase, Save writes to
localStorage, Email is hidden. Set to `1` only with a working auth backend.

## 3. Deploy

Redeploy so the new env vars are picked up. Watch the first few readings —
`x-quota-remaining` and `x-quota-resets-at` response headers should count down
and then 429 on the limit.

---

## What behaves differently

**The window is fixed, not rolling.** It used to mean "count rows written in
the last 24 hours", which slid continuously. Now the counter key gets a TTL on
a user's first reading and the whole allowance returns when it expires. The
user gets a straight answer ("resets at 14:20", exposed as
`x-quota-resets-at`), and drip-feeding one request an hour no longer keeps a
rolling window permanently topped up.

**The quota slot is consumed at check time, atomically.** Previously
`checkQuota` counted rows and `logUsage` wrote one later — two concurrent
requests could both read "0 used" and both proceed. Now `INCR` returns 1 and 2,
and the second is rejected. `remaining` is still reported *before*
consumption, so the route's existing `remaining - 1` arithmetic stays correct.

**Redis being down fails closed in production.** No store means no readings —
a 429 with `reason: "storage-unavailable"`. The alternative was an
unmetered endpoint sitting on top of `ANTHROPIC_API_KEY`, which is the one
failure mode actually worth avoiding. Locally (`NODE_ENV !== 'production'`)
it fails open so `npm run dev` works without an Upstash store.

The spend cap fails *open* on a transient Redis error, since the per-user
quota still bounds the damage and a dead AI feature is worse than a few cents.

**Cache entries expire natively.** No `created_at > now() - ttl` filter on
every read, no table that grows forever. `lookupCachedReading(key, ttlMs)` can
still demand something fresher than the key's own TTL.

**Two counters worth peeking at**: `ai:cache:stats:hits` and
`ai:cache:stats:misses` in the Upstash console tell you whether the cache is
earning its keep.

## What did NOT come across

`ai_usage` also stored `tokens_in`, `tokens_out` and the drawn `cards` per
reading — that was the feed for `/trends` via `lib/trends/compute.ts`. Those
fields are still accepted by `logUsage` so callers compile, but nothing
persists them: a per-reading history is a different shape of problem from a
counter, and guessing at it here would have been the wrong call. If `/trends`
should survive the Supabase removal it needs its own decision.

## Cost

Roughly 8-10 Redis commands per reading (quota, IP failsafe, cache, budget).
The Upstash free tier is 500K commands/month and 256 MB — about 50K readings a
month, against the 78 recorded in the last three months. Headroom is not the
constraint here.

## Key layout

```
ai:q:u:<userId>      quota counter, registered      TTL = window
ai:q:b:<browserId>   quota counter, anonymous       TTL = window
ai:q:i:<ipHash>      IP failsafe counter            TTL = window
ai:budget            spend this window, in micros   TTL = window
ai:cache:<sha256>    cached reading (JSON)          TTL = AI_CACHE_TTL_HOURS
ai:cache:stats:*     hit/miss counters              no TTL
```

## Rollback

`git checkout lib/ai/quota.ts lib/ai/cache.ts && rm lib/kv.ts` restores the
Postgres version. It keeps working for as long as the Supabase project exists.

## Note on auth

`checkQuota` takes `userId: string | null`. When Supabase auth is removed,
`userId` is simply always `null` and every visitor lands on the anonymous +
IP path — no change needed here. At that point `AI_QUOTA_ANON_PER_DAY` becomes
the only per-person limit, so it is probably worth raising from `1`.
