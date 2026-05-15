const createNextIntlPlugin = require('next-intl/plugin')

// next-intl plugin wires per-request locale config via ./i18n/request.ts.
// Without middleware/routing changes the plugin is effectively a no-op — it
// only activates when middleware rewrites locale-prefixed URLs into the app
// router. This file is safe to ship before the routing migration.
const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = withNextIntl(nextConfig)
