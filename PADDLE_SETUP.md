# Paddle Setup — Sprint 2 Walkthrough (revised from Lemon Squeezy)

**Goal:** create a Paddle Billing account with a TarotAxis Premium product (monthly $7 / yearly $60), configure a webhook to sync our `subscriptions` table, get six env vars into Vercel.

**Why Paddle instead of Lemon Squeezy:** Paddle supports Ukrainian merchants with Wise / SWIFT payouts. Lemon Squeezy uses Stripe Connect for payouts, which is currently unavailable for Ukraine. Functionally both are Merchants of Record with the same 5% + $0.50 fee — Paddle is just the one that actually pays.

**Time estimate:** 30 minutes for sandbox setup. **Production approval takes 1-2 weeks** — but we can build and test in sandbox immediately while approval is pending.

**Important:** Paddle Billing is the new product (launched 2023). Do NOT use **Paddle Classic** (the legacy product, paddle.com/classic). Make sure you're signing up at **vendors.paddle.com** for Paddle Billing.

---

## 1. Create a Paddle Billing account

1. Go to **https://www.paddle.com/billing** → **Get started**.
2. Sign up with `dominov.denis@gmail.com`.
3. **Important — choose "Paddle Billing" not "Paddle Classic"** during onboarding. Classic is the legacy product. Billing is the modern API-first one we want.
4. Verify email.
5. Land on the **Vendor Dashboard** at `vendors.paddle.com`.

Paddle gives you two environments simultaneously:

- **Sandbox** (`sandbox-vendors.paddle.com`) — for development. Active **immediately**, no KYC needed. Test cards work. Webhooks fire normally. **Use this for Sprint 2 code.**
- **Production** (`vendors.paddle.com`) — for real money. Requires **identity + business verification** which takes 1-2 weeks. Apply now so it's ready when code is live.

The two environments have **different** API keys, product IDs, webhook secrets. You'll use sandbox values during development, swap to production values when going live.

---

## 2. Submit production verification (do this NOW, while it processes in background)

In the main (production) Vendor Dashboard:

1. Sidebar → **Verification** (or top banner "Get verified").
2. Provide:
   - **Identity:** passport scan + selfie (Veriff or similar verification flow)
   - **Address proof:** utility bill / bank statement (within last 3 months), Ukrainian address fine
   - **Business info:**
     - Type: **Sole Proprietor** (соответствует ФОП)
     - Country: **Ukraine**
     - Registration number: your **РНОКПП / ІПН** (individual tax number)
     - Business name: your full legal name as on ФОП registration
   - **Product info:**
     - Product URL: `https://tarotaxis.com`
     - Description: brief summary of what you sell
     - Estimated monthly volume: be conservative ("$100-1000" for new sites)
   - **Bank details for payouts:**
     - **Method:** Wise Business or SWIFT bank transfer
     - **Currency:** USD (Wise) or EUR (some banks)
     - Wise gives you USD-denominated account details that work for international payouts and then converts to UAH at withdrawal — preferred for UA-ФОП.
3. Submit. Status changes to **Pending review** (1-2 weeks typically).

While this is pending, **everything in this guide from step 3 onwards happens in the SANDBOX environment** (`sandbox-vendors.paddle.com`).

---

## 3. Switch to Sandbox environment

1. Top-right corner of `vendors.paddle.com` → switch to **Sandbox**.
2. URL changes to `sandbox-vendors.paddle.com`.
3. You're now in a parallel universe — no real money, full feature parity.

---

## 4. Get the API key (sandbox)

1. Sidebar → **Developer Tools** → **Authentication**.
2. Click **Generate API key**.
3. **Name:** `tarotaxis-sandbox-server`
4. **Permissions:** check **Full access** (or at minimum: products read/write, prices read/write, customers read/write, subscriptions read/write, transactions read, checkout sessions write).
5. **Save** → copy the token **immediately**. It looks like `pdl_sdbx_apikey_01...`. Lost? Generate a new one.

   | Env var name                | Value                                          |
   |-----------------------------|------------------------------------------------|
   | `PADDLE_API_KEY`            | (copied token — starts with `pdl_sdbx_apikey_`) |
   | `PADDLE_ENVIRONMENT`        | `sandbox` (until production approval)          |

---

## 5. Get the Client-side token (sandbox)

Paddle's checkout overlay (Paddle.js) needs a **client token** — a public, browser-safe identifier separate from the API key.

1. Same page — **Developer Tools** → **Authentication**.
2. Click **Generate client-side token**.
3. **Name:** `tarotaxis-sandbox-web`
4. **Save** → copy. Starts with `live_` for production or `test_` for sandbox.

   | Env var name                                  | Value                                  |
   |-----------------------------------------------|----------------------------------------|
   | `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN`             | (copied client token — starts `test_`) |

---

## 6. Create the Premium product with two prices (sandbox)

In Paddle terminology, a **Product** is what you sell (one entity) and each **Price** is a variant (monthly, yearly, etc.). One product can have many prices.

### 6.1 — Create the Product

1. Sidebar → **Catalog** → **Products** → **New product**.
2. Fill in:
   - **Name:** `TarotAxis Premium`
   - **Description:** "Premium for TarotAxis — cloud-synced journal across devices, full reading history, priority daily card, ad-free, and first access to AI features launching in 2026."
   - **Tax category:** `Digital goods` (or `Standard digital goods`, depends on UI version — both fine)
   - **Image:** optional, your TarotAxis logo if you have one in PNG
3. Save.

The product gets an ID like `pro_01h...` — copy it.

| Env var name           | Value                              |
|------------------------|------------------------------------|
| `PADDLE_PRODUCT_ID`    | (product ID, starts `pro_`)        |

### 6.2 — Create the Monthly price

1. Inside the product → **Prices** tab → **Add price**.
2. Fill in:
   - **Internal description:** `Monthly subscription`
   - **Type:** **Recurring**
   - **Billing cycle:** Every **1** **Month**
   - **Amount:** `7.00 USD`
   - **Free trial:** none (can add later)
   - **Tax mode:** **Account default** (let Paddle handle by country)
3. Save.

Price ID like `pri_01h...` — copy it.

### 6.3 — Create the Yearly price

1. Same place — **Add price** again.
2. Fill in:
   - **Internal description:** `Yearly subscription`
   - **Type:** **Recurring**
   - **Billing cycle:** Every **1** **Year**
   - **Amount:** `60.00 USD`
   - **Free trial:** none
   - **Tax mode:** **Account default**
3. Save.

Another price ID — copy.

| Env var name                | Value                              |
|-----------------------------|------------------------------------|
| `PADDLE_PRICE_MONTHLY_ID`   | (monthly price ID, `pri_`)         |
| `PADDLE_PRICE_YEARLY_ID`    | (yearly price ID, `pri_`)          |

---

## 7. Configure the webhook (sandbox)

1. Sidebar → **Developer Tools** → **Notifications** → **New destination**.
2. Fill in:
   - **Description:** `TarotAxis sandbox webhook`
   - **Type:** **Webhook**
   - **URL:** `https://tarotaxis.com/api/paddle/webhook`
     - Yes, point sandbox at the production domain. Paddle sends the event environment in the payload (`event_type` includes context, plus headers `paddle-environment: sandbox` / `production`). Our handler will route accordingly.
     - Alternative: use a separate URL like `https://tarotaxis.com/api/paddle/webhook?env=sandbox` for clarity, then look at the query param.
   - **Events:** check these (most important first):
     - ✓ `subscription.created`
     - ✓ `subscription.updated`
     - ✓ `subscription.canceled`
     - ✓ `subscription.activated`
     - ✓ `subscription.paused`
     - ✓ `subscription.resumed`
     - ✓ `subscription.past_due`
     - ✓ `transaction.completed`
     - ✓ `transaction.payment_failed`
     - ✓ `customer.created` (optional but useful)
3. Save → Paddle gives you the **endpoint secret key** (looks like `pdl_ntfset_...`). **Copy immediately** — shown only once.

   | Env var name                 | Value                                |
   |------------------------------|--------------------------------------|
   | `PADDLE_WEBHOOK_SECRET`      | (notification secret, `pdl_ntfset_`) |

The webhook endpoint doesn't exist yet — code lands in Sprint 2. Paddle will retry failed deliveries with exponential backoff for ~3 days. After Sprint 2 deploy, you can manually replay events from the dashboard.

---

## 8. Add env vars to Vercel

Add seven variables. **Mark Production + Preview + Development** for each (we use sandbox values everywhere until production approval comes through; then swap).

| Name                                | Sandbox value                       |
|-------------------------------------|-------------------------------------|
| `PADDLE_ENVIRONMENT`                | `sandbox`                           |
| `PADDLE_API_KEY`                    | (from step 4)                       |
| `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN`   | (from step 5)                       |
| `PADDLE_PRODUCT_ID`                 | (from step 6.1)                     |
| `PADDLE_PRICE_MONTHLY_ID`           | (from step 6.2)                     |
| `PADDLE_PRICE_YEARLY_ID`            | (from step 6.3)                     |
| `PADDLE_WEBHOOK_SECRET`             | (from step 7)                       |

**Local development** — also add to `.env.local`:

```
PADDLE_ENVIRONMENT=sandbox
PADDLE_API_KEY=pdl_sdbx_apikey_...
NEXT_PUBLIC_PADDLE_CLIENT_TOKEN=test_...
PADDLE_PRODUCT_ID=pro_...
PADDLE_PRICE_MONTHLY_ID=pri_...
PADDLE_PRICE_YEARLY_ID=pri_...
PADDLE_WEBHOOK_SECRET=pdl_ntfset_...
```

---

## 9. Smoke test (sandbox checkout)

Before I write the Sprint 2 code, verify the setup works with a sandbox checkout:

1. In sandbox dashboard → **Catalog** → **Prices** → click your `pri_...` for monthly → **Get checkout link** (or "Generate checkout URL").
2. Open the link → Paddle checkout overlay with $7.00 USD billing.
3. Use **Paddle's test cards** (Paddle Billing uses these):
   - ✅ Approve: `4000 0000 0000 0002` — any future expiry, any CVC, any name
   - ❌ Decline: `4000 0000 0000 0119`
   - ⏳ 3D Secure required: `4000 0000 0000 3220`
4. Complete the approved checkout.
5. Check **Customers** + **Subscriptions** in sandbox dashboard — new entries appear.
6. Check **Notifications** → **Recent events** — see webhook attempts firing at our URL (will be 404 until Sprint 2 deploys, that's fine).

If all four checks pass, sandbox is healthy.

---

## 10. Tell me when you're done

Once steps 1–8 complete (step 9 optional but recommended):

- ✓ Paddle Billing sandbox account created
- ✓ Production verification submitted (will sit pending while we work)
- ✓ Product + Monthly + Yearly prices created in sandbox
- ✓ Webhook configured (URL + secret saved)
- ✓ Seven env vars in Vercel and `.env.local`
- ✓ Sandbox checkout completes with test card (optional)

Then I write Sprint 2 code:

- `lib/paddle/{client,checkout}.ts` — Paddle API wrapper
- `lib/subscription.ts` — `isPremium(userId)` server util
- `app/pricing/page.tsx` — Free vs Premium comparison table
- `app/api/paddle/{webhook,checkout,portal}/route.ts` — webhook handler with HMAC verification + idempotency, checkout session creator, customer portal redirect
- `/account` update — real subscription state from webhook
- `components/UpgradeButton.tsx` — reusable button

Estimated code time: 2-2.5h.

---

## 11. When production approval comes through

When Paddle approves your live account (1-2 weeks, you'll get an email):

1. Production dashboard at `vendors.paddle.com` — repeat steps 4-7 there. You'll get a new API key, new client token, new product+prices IDs, new webhook secret. All starting with `pdl_apikey_` / `live_` / similar (without `sdbx_` or `test_`).
2. In Vercel env vars:
   - Change `PADDLE_ENVIRONMENT` from `sandbox` to `production`
   - Update all six other Paddle env vars to production values
   - **Important:** product+price IDs in production are different from sandbox. Recreate the product and prices in production exactly the same way ($7/mo + $60/yr).
3. Redeploy Vercel (auto on env-var change).
4. Smoke test with a real card on a small amount (or your own card with your own subscription, then refund).
5. Done — real money flows.

We'll handle this together when the time comes.

---

## If something goes wrong

- **Account application rejected:** check email for reason. Common causes: product URL doesn't match what's claimed, business info inconsistent. Fix and reapply.
- **Webhook 404 in sandbox:** expected before Sprint 2 deploys. After Sprint 2, click **Replay** on failed events in **Notifications** → **Recent events**.
- **Webhook 500 after Sprint 2:** share the event JSON from Paddle dashboard + our endpoint response.
- **Sandbox API key not working in code:** check `PADDLE_ENVIRONMENT=sandbox` is set. Different env = different API base URL (`sandbox-api.paddle.com` vs `api.paddle.com`).
- **Identity verification stuck >2 weeks:** ping Paddle support. UA passports occasionally trigger manual review which takes longer.

---

## What's NOT in Sprint 2

These come later — don't try to set them up now:

- AI Waitlist Resend Audience (Sprint 4)
- Anthropic API key (Sprint 4)
- Upstash Redis (Sprint 4)
- Paddle Customer Portal customisation — happens in Sprint 3 when wiring `/account` for cancel/update
- Sandbox-to-production migration (covered in section 11 above)
