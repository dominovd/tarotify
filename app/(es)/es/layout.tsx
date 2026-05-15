/**
 * Nested layout for the /es URL segment.
 *
 * The route-group root layout at `app/(es)/layout.tsx` already sets
 * <html lang="es">, the global metadata defaults and the shared Nav/Footer.
 * This file is intentionally a no-op pass-through; it exists only because
 * Next.js requires a layout at this segment when sibling files are present.
 *
 * If you need /es-specific overrides (e.g. a different Nav, an extra wrapper)
 * add them here; otherwise leave it alone.
 */

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
