// Feature flags read at build time (NEXT_PUBLIC_* is inlined into the client
// bundle, so changing one needs a redeploy).

/**
 * Accounts / sign-in. Off by default since Supabase was removed: no sign-in
 * button, no sign-up walls, /auth/* and /account redirect home, middleware
 * skips session refresh. Set NEXT_PUBLIC_AUTH_ENABLED=1 to bring it back
 * (requires a working auth backend).
 */
export const AUTH_ENABLED = process.env.NEXT_PUBLIC_AUTH_ENABLED === '1'
