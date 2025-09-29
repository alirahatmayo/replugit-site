import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // For GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/replugit-site' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/replugit-site/' : '',
};

export default nextConfig;
