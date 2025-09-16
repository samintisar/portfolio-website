import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export as a static site for DigitalOcean App Platform (Static Site)
  output: "export",
  images: {
    // next/image needs this when using static export
    unoptimized: true,
  },
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
