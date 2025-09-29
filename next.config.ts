import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  eslint: {
    // Don't fail build on ESLint errors in CI
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Don't fail build on TypeScript errors in CI
    ignoreBuildErrors: true,
  },
  // For custom domain deployment - no basePath needed
  // basePath: process.env.NODE_ENV === 'production' ? '/replugit-site' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/replugit-site/' : '',
};

export default nextConfig;
