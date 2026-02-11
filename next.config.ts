import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      // Serve fonts from /fonts when something requests /public/fonts (e.g. dev resolving)
      { source: "/public/fonts/:path*", destination: "/fonts/:path*" },
    ];
  },
};

export default nextConfig;
