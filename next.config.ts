import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/my-app' : '',
  images: {
    unoptimized: true,
  },
  // Optimisations de performance
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  
  // Optimisation du build
  swcMinify: true,
  
  // Configuration des modules externes pour réduire la taille du bundle
  transpilePackages: ['three'],
};

export default nextConfig;
