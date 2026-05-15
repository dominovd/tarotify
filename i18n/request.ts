/**
 * Per-request next-intl configuration.
 *
 * Loaded automatically by the next-intl plugin (configured in next.config.mjs).
 * For each incoming request, this resolves the active locale from the URL
 * (matched against routing.locales) and loads the JSON message dictionaries
 * for that locale.
 *
 * Messages convention:
 *   messages/<locale>/cards.json
 *   messages/<locale>/cards-extended.json
 *   messages/<locale>/cards-reversed.json
 *   messages/<locale>/cards-love.json
 *   messages/<locale>/cards-feelings.json
 *   messages/<locale>/common.json   (UI strings — Nav, buttons, etc.)
 *
 * Card content is read directly from these JSON files server-side via the
 * helpers in lib/i18n/get-card.ts (not via next-intl's t() function, because
 * card meanings are too long-form for the t() pattern). next-intl is used
 * primarily for UI strings and routing.
 */

import { getRequestConfig } from 'next-intl/server'
import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale

  // Fall back to default if the URL is missing locale or has an unknown one.
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale
  }

  // Load only `common.json` for next-intl's t() function. Long-form card
  // content is loaded directly in server components via lib/i18n/get-card.ts.
  let messages = {}
  try {
    messages = (await import(`../messages/${locale}/common.json`)).default
  } catch {
    // Missing dictionary → empty messages; t() will return keys verbatim. This
    // makes adding a locale a non-breaking step (skeleton routes work even
    // before translation completes).
  }

  return { locale, messages }
})
