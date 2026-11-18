import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  experimental: {
    agentUpgrade: "security",
  },

  // Image optimization: serve modern formats (AVIF → WebP → JPEG fallback)
  images: {
    formats: ["image/avif", "image/webp"],
    // Gallery images are 6000×4000; clamp display sizes to reasonable breakpoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 64, 128, 256, 384, 512],
    // Serve optimized images for local files
    minimumCacheTTL: 31536000, // 1 year in seconds
  },

  async redirects() {
    return [
      {
        source: "/team",
        destination: "/",
        permanent: true,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
