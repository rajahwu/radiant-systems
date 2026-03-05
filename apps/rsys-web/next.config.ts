import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Configure pageExtensions to include md and mdx
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Experimental features if needed
  experimental: {
    mdxRs: true,
  },
  transpilePackages: [
    "@radiant/ui",
    "@radiant/data",
    "@clearline7/theme",
    "@clearline7/components",
    "@clearline7/set-definitions", 
    "@clearline7/brand-style-kit"
  ]
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
