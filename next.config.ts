import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ── Experimental ────────────────────────────────────────────────
  experimental: {
    optimizeCss: true,   // Critters — critical CSS inline
    // cacheComponents: true,  // Uncomment to enable Next.js 16 PPR / Cache Components
  },

  // ── Server packages — never bundled into the client ─────────────
  serverExternalPackages: [
    'google-auth-library',
    '@googleapis/sheets',
  ],

  // ── Compression & response headers ──────────────────────────────
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // ── Image optimization ───────────────────────────────────────────
  images: {
    formats: ['image/avif', 'image/webp'],
    // dangerouslyAllowSVG: true with a tight CSP per blueprint TRD §3.5
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      // Add patterns here when using external image hosts
      // { protocol: 'https', hostname: '*.googleusercontent.com' },
    ],
  },

  // ── Security headers — blueprint TRD §3.5 ───────────────────────
  // Removed: X-XSS-Protection (obsolete, per blueprint recommendation)
  // Added: Content-Security-Policy
  async headers() {
    const isDev = process.env.NODE_ENV !== 'production';

    const scriptSrc = [
      "'self'",
      "'unsafe-inline'",
      ...(isDev ? ["'unsafe-eval'"] : []),
      "https://challenges.cloudflare.com",
    ].join(' ');

    const connectSrc = [
      "'self'",
      ...(isDev ? ["ws:", "wss:"] : []),
      "https://challenges.cloudflare.com",
      "https://api.telegram.org",
    ].join(' ');

    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options',        value: 'DENY'    },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              `script-src ${scriptSrc}`,
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              `connect-src ${connectSrc}`,
              "frame-src https://challenges.cloudflare.com",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
