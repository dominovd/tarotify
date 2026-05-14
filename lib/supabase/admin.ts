// Service-role Supabase client — BYPASSES Row-Level Security.
//
// Use ONLY in trusted server code where you need to read/write rows on behalf
// of another user (or update tables that have no RLS policy for clients).
// Examples: Lemon Squeezy webhook handler writing into `subscriptions`,
// AI usage accounting writing into `ai_usage`.
//
// Never import this file into a client component or any code that ends up
// in the browser bundle. Never expose the service role key to the client.

import { createClient } from '@supabase/supabase-js'

export function createAdminClient() {
  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY is not set')
  }
  return createClient(
    process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    },
  )
}
