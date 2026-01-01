import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Tell Next.js to compile these external workspace packages
  transpilePackages: [
    "@clearline7/theme",
    "@clearline7/components",
    "@clearline7/set-definitions", 
    "@clearline7/brand-style-kit" 
  ],
  experimental: {
    externalDir: true,
  },
};

export default nextConfig;