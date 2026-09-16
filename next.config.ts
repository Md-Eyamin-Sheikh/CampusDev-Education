import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Stable webpack (not Turbopack)
  experimental: {
    optimizeCss: true,
  },
  // Next.js 16: top-level instead of experimental
  serverExternalPackages: [],
  // Compress responses
  compress: true,
  // Power by header
  poweredByHeader: false,
  // Strict mode for better dev experience
  reactStrictMode: true,
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
