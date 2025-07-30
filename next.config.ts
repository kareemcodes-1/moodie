import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // WARNING: disables build-time type checking — use at your own risk
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['fonts.gstatic.com', 'image.tmdb.org', 'media.themoviedb.org']
  },
  eslint: {
    // also ignores lint errors during build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
