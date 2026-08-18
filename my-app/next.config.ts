import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations for SEO
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Trailing slash configuration for consistent URLs
  trailingSlash: false,
  // Enhanced security headers for better SEO ranking
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
