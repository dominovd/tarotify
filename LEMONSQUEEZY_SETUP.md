# Lemon Squeezy Setup — Sprint 2 Walkthrough

> ⚠ **OBSOLETE — DO NOT FOLLOW THIS FILE.**
>
> Switched to Paddle Billing after discovering Lemon Squeezy uses Stripe Connect for
> payouts, which is currently unavailable for Ukrainian merchants. Paddle supports
> Wise / SWIFT payouts to Ukraine.
>
> **Use `PADDLE_SETUP.md` instead.** This file is kept for historical reference only.
> The Lemon Squeezy account at `gettarotaxis.lemonsqueezy.com` can be deleted via
> LS dashboard → Settings → Store → Delete store.

---

**Goal:** create a Lemon Squeezy store with a TarotAxis Premium product (monthly $7 / yearly $60), configure a webhook to keep our `subscriptions` table in sync, get five env vars into Vercel.

**Time estimate:** 25–40 minutes (plus a verification period for the merchant approval).

**Important:** Lemon Squeezy requires identity / tax info before payouts. You can create the store and test checkout in **test mode** immediately, but real payments need their merchant approval (24-48 hours).

---

## 1. Create the Lemon Squeezy account

1. Go to **https://lemonsqueezy.com** → **Sign up**.
2. Sign up with the same email that owns this project's other accounts (`dominov.denis@gmail.com`).
3. After confirming the email, you land on the dashboard.

## 2. Create the store

1. Sidebar → **Store**. Click **Set up your store**.
2. Fill in:
   - **Store name:** `TarotAxis` (this is what customers see on receipts and checkout)
   - **Store URL:** suggested slug like `tarotaxis` → final URL `tarotaxis.lemonsqueezy.com`
   - **Country:** your country of residence
   - **Currency:** `USD`
   - **Description:** something short like "Tarot reading platform — premium features"
3. Save.

You're now in **test mode** by default. We'll keep it that way until real merchant approval is done.

---

## 3. Create the Premium product with two variants

This is the trickiest part — variants are how monthly/yearly pricing lives on the same product.

1. Sidebar → **Products** → **New product**.
2. **Product type:** **Subscription** (NOT one-time payment)
3. **Status:** Draft (we'll publish in step 5)
4. **Product name:** `TarotAxis Premium`
5. **Description:** copy from MONETISATION_PLAN.md Section 12 — something like:
   > Premium for TarotAxis — cloud-synced journal across devices, full reading history, priority daily card, ad-free, and first access to AI features launching in 2026.
6. **Pricing:**
   - First variant — set up the monthly plan:
     - **Variant name:** `Monthly`
     - **Price:** `7.00 USD`
     - **Billing interval:** `Every 1 month`
     - **Free trial:** leave off for now (can add later)
     - **Setup fee:** off
   - Click **Save** → this creates variant #1.
7. Inside the same product → **Variants** tab → **New variant**:
   - **Variant name:** `Yearly`
   - **Price:** `60.00 USD`
   - **Billing interval:** `Every 12 months`
   - **Free trial:** off
   - **Setup fee:** off
   - Save → variant #2 created.
8. **Important — get the variant IDs:**
   - Click each variant. The URL in your browser will look like `.../variants/123456`. The number is the variant ID. Copy both.
   - Or: sidebar → **Variants** → table shows all variant IDs.

   | Variable name                        | Value         |
   |--------------------------------------|---------------|
   | `LEMONSQUEEZY_VARIANT_MONTHLY`       | (monthly ID)  |
   | `LEMONSQUEEZY_VARIANT_YEARLY`        | (yearly ID)   |

---

## 4. Get the API key

1. Sidebar → **Settings** → **API** (top-right user menu may also have it).
2. Click **Create API key**.
3. **Name:** `tarotaxis-production`
4. **Scopes:** check **All scopes** (or at minimum: subscriptions read/write, customers read, checkouts write).
5. **Save** → copy the token **immediately** (Lemon Squeezy shows it only once). It looks like a long JWT.

   | Variable name                | Value                |
   |------------------------------|----------------------|
   | `LEMONSQUEEZY_API_KEY`       | (copied token)       |

---

## 5. Get the store ID and publish the product

1. Sidebar → **Settings** → **Stores**. The store ID is shown next to the store name (small number).
2. Sidebar → **Products** → click `TarotAxis Premium` → **Publish** (top-right button). Status changes from Draft to Published.

   | Variable name              | Value          |
   |----------------------------|----------------|
   | `LEMONSQUEEZY_STORE_ID`    | (store ID)     |

---

## 6. Configure the webhook

The webhook is the link between Lemon Squeezy's reality and our `subscriptions` table. Every time a user subscribes, cancels, or fails a payment, Lemon Squeezy POSTs to us.

1. Sidebar → **Settings** → **Webhooks** → **New webhook**.
2. Fill in:
   - **Endpoint URL:** `https://tarotaxis.com/api/lemonsqueezy/webhook`
   - **Signing secret:** generate a long random string (Lemon Squeezy has a "Generate" button — use it). **Copy this value** before saving — it shows only once.

     | Variable name                        | Value             |
     |--------------------------------------|-------------------|
     | `LEMONSQUEEZY_WEBHOOK_SECRET`        | (signing secret)  |

   - **Events to listen to:**
     - ✓ `subscription_created`
     - ✓ `subscription_updated`
     - ✓ `subscription_cancelled`
     - ✓ `subscription_resumed`
     - ✓ `subscription_expired`
     - ✓ `subscription_paused`
     - ✓ `subscription_unpaused`
     - ✓ `subscription_payment_success`
     - ✓ `subscription_payment_failed`
3. Save.

The webhook endpoint doesn't exist yet — we'll create it as part of the code I'll write next. Lemon Squeezy won't break — failed delivery attempts retry exponentially for a few days.

---

## 7. Add env vars to Vercel

In Vercel → `tarotify` project → **Settings** → **Environment Variables**, add five values. Tick **Production**, **Preview**, **Development** for all.

| Name                            | Value                              |
|---------------------------------|------------------------------------|
| `LEMONSQUEEZY_API_KEY`          | (from step 4)                      |
| `LEMONSQUEEZY_STORE_ID`         | (from step 5)                      |
| `LEMONSQUEEZY_WEBHOOK_SECRET`   | (from step 6)                      |
| `LEMONSQUEEZY_VARIANT_MONTHLY`  | (from step 3)                      |
| `LEMONSQUEEZY_VARIANT_YEARLY`   | (from step 3)                      |

**Local development:** also add these to `.env.local`:

```
LEMONSQUEEZY_API_KEY=...
LEMONSQUEEZY_STORE_ID=...
LEMONSQUEEZY_WEBHOOK_SECRET=...
LEMONSQUEEZY_VARIANT_MONTHLY=...
LEMONSQUEEZY_VARIANT_YEARLY=...
```

---

## 8. Smoke test (test mode)

Before I write the code, you can verify the setup works using Lemon Squeezy's test-mode checkout directly:

1. Sidebar → **Products** → `TarotAxis Premium` → click `Monthly` variant → **Test buy link** (or "Get checkout URL").
2. Open the link → you should see a Lemon Squeezy checkout page with TarotAxis branding, $7/mo plan.
3. In test mode, the checkout accepts dummy cards. Use **Lemon Squeezy's test card:** `4242 4242 4242 4242`, any future expiry, any CVC.
4. Complete the test checkout. You should:
   - Land on a success page
   - Get a confirmation email (to the email you entered)
   - See a new subscription in **Subscriptions** in the LS dashboard

The webhook delivery will fail (because `https://tarotaxis.com/api/lemonsqueezy/webhook` doesn't exist yet) — that's fine. LS dashboard → **Settings** → **Webhooks** → click your webhook → **Recent events** — you'll see failed deliveries with 404. After Sprint 2 code is deployed, you can click **Replay** on each one to retroactively populate `subscriptions`.

---

## 9. Tell me when you're done

Once steps 1–7 are complete, message me:

- ✓ Lemon Squeezy store created
- ✓ Premium product with Monthly + Yearly variants published
- ✓ Webhook configured (URL + signing secret saved to env)
- ✓ Five env vars in Vercel
- ✓ Test checkout succeeded (optional but recommended — confirms the product flow before code lands)

Then I write Sprint 2:

- `lib/lemonsqueezy/client.ts` — fetch wrapper around LS API
- `lib/lemonsqueezy/checkout.ts` — generate signed checkout URLs
- `lib/subscription.ts` — `isPremium(userId)` server util (used everywhere)
- `app/pricing/page.tsx` — Free vs Premium comparison
- `app/api/lemonsqueezy/{webhook,checkout,portal}/route.ts` — webhook handler with HMAC verification + idempotency, signed-in checkout link generator, customer portal redirect
- `/account` update — real subscription state from webhook
- `components/UpgradeButton.tsx` — reusable across the 5 prompt locations from D5

Estimated code time: 2h.

---

## If something goes wrong

- **Lemon Squeezy account locked / pending KYC:** test mode still works. Real payments delayed. Not blocking for development.
- **Test card declined:** use exactly `4242 4242 4242 4242` — that's the test number. Other numbers may simulate failures intentionally.
- **Webhook events not arriving:** check **Settings** → **Webhooks** → **Recent events**. If endpoint returns 404 — expected, code's not there yet. If endpoint returns 500 — code bug after Sprint 2 ships, share the LS event JSON and the response.
- **Variant IDs look like UUIDs not integers:** that's a recent LS UI change. The string still works for our API calls. Just paste whatever LS shows.

---

## What's NOT in Sprint 2

These come later — don't try to set them up now:

- AI Waitlist Resend Audience (Sprint 4 — for "join the waitlist for AI" CTA)
- Anthropic API key (Sprint 4 / when flipping AI on)
- Upstash Redis (Sprint 4 — rate limiting AI requests)
- Customer Portal customisation (Sprint 3 — when we add the management flow)
