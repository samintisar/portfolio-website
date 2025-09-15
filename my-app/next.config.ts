import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export as a static site for DigitalOcean App Platform (Static Site)
  output: "export",
  images: {
    // next/image needs this when using static export
    unoptimized: true,
  },
};

export default nextConfig;
