// Server-side Supabase client for App Router. Reads the user session from
// the cookie store. Use in:
//   - Server Components (call inside the component body, await each request)
//   - Route Handlers (app/api/.../route.ts)
//   - Server Actions
//
// For middleware, see lib/supabase/middleware.ts.
// For browser components, see lib/supabase/client.ts.
// For service-role (bypass-RLS) operations, see lib/supabase/admin.ts.

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createClient() {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            )
          } catch {
            // Called from a Server Component — cookie mutations are only
            // allowed in Route Handlers, Server Actions, or middleware.
            // The session is refreshed by middleware on every request, so
            // ignoring this here is safe.
          }
        },
      },
    },
  )
}
