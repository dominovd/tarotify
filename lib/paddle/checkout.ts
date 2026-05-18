/**
 * Paddle checkout helpers — creates a Transaction in Paddle and returns
 * the hosted checkout URL the user redirects to.
 *
 * Why "Transactions" and not Checkout Sessions: Paddle Billing's newest API
 * lets you create a Transaction in `status: ready` with a hosted checkout URL
 * baked into the response. This avoids the older Sessions endpoint
 * (still works) and keeps payload simple.
 *
 * Reference: https://developer.paddle.com/api-reference/transactions/create-transaction
 */

import { paddleFetch } from './client'

export type PaddleInterval = 'monthly' | 'yearly'

export function priceIdForInterval(interval: PaddleInterval): string {
  const id = interval === 'monthly'
    ? process.env.PADDLE_PRICE_MONTHLY_ID
    : process.env.PADDLE_PRICE_YEARLY_ID
  if (!id) {
    throw new Error(
      `PADDLE_PRICE_${interval.toUpperCase()}_ID is not set`,
    )
  }
  return id
}

interface PaddleTransactionResponse {
  id: string
  status: string
  checkout?: { url?: string }
}

/**
 * Create a Paddle Transaction with a hosted checkout URL.
 *
 * `customData.user_id` is critical — the webhook reads this to link the
 * subscription back to our Supabase user. Without it we can't reconcile
 * payments to accounts.
 */
export async function createCheckoutTransaction(opts: {
  userId: string
  email: string
  interval: PaddleInterval
  successUrl: string
}): Promise<{ url: string; transactionId: string }> {
  const priceId = priceIdForInterval(opts.interval)

  const body = {
    items: [{ price_id: priceId, quantity: 1 }],
    customer: { email: opts.email },
    custom_data: { user_id: opts.userId },
    checkout: { url: opts.successUrl },
    collection_mode: 'automatic',
  }

  const tx = await paddleFetch<PaddleTransactionResponse>('/transactions', {
    method: 'POST',
    body: JSON.stringify(body),
  })

  if (!tx.checkout?.url) {
    throw new Error(`Paddle transaction ${tx.id} did not return a checkout URL`)
  }

  return { url: tx.checkout.url, transactionId: tx.id }
}

/**
 * Generate a Paddle Customer Portal URL for a given Paddle customer.
 * The portal lets the user update payment method, cancel, see invoices.
 *
 * Returns null if the customer_id is missing — caller should show a fallback
 * (e.g. "contact support") instead of crashing.
 */
export async function getCustomerPortalUrl(customerId: string): Promise<string | null> {
  if (!customerId) return null
  type PortalResponse = { urls: { general: { overview: string } } }
  try {
    const portal = await paddleFetch<PortalResponse>(
      `/customers/${customerId}/portal-sessions`,
      { method: 'POST', body: JSON.stringify({}) },
    )
    return portal.urls.general.overview
  } catch {
    return null
  }
}
