import path from "path";
import type { NextConfig } from "next";

const appReactPath = path.join(__dirname, "node_modules/react/index.js");
const appReactDomPath = path.join(__dirname, "node_modules/react-dom/index.js");
const appReactJsxRuntimePath = path.join(
  __dirname,
  "node_modules/react/jsx-runtime.js"
);
const appReactJsxDevRuntimePath = path.join(
  __dirname,
  "node_modules/react/jsx-dev-runtime.js"
);

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
  // 2. Ensure we don't have conflicting React instances (common in monorepos)
  webpack: (config) => {
    const appNodeModules = path.join(__dirname, "node_modules");
    const workspaceNodeModules = path.join(__dirname, "../../../node_modules");
    config.resolve.alias = {
      ...config.resolve.alias,
      "react": appReactPath,
      "react-dom": appReactDomPath,
      "react/jsx-runtime": appReactJsxRuntimePath,
      "react/jsx-runtime$": appReactJsxRuntimePath,
      "react/jsx-dev-runtime": appReactJsxDevRuntimePath,
      "react/jsx-dev-runtime$": appReactJsxDevRuntimePath,
    };
    config.resolve.modules = [
      appNodeModules,
      workspaceNodeModules,
      ...(config.resolve.modules || []),
    ];
    config.resolve.conditionNames = [
      "react-server",
      "browser",
      "node",
      "default",
      ...(config.resolve.conditionNames || []),
    ];
    return config;
  },
  turbopack: {},
};

export default nextConfig;
