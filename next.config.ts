import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  /** Required for Cloudflare Pages (static export). Rewrites are not supported; use public/_redirects instead. */
  output: "export",
};

export default nextConfig;
