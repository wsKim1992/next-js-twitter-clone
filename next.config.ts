import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {},
    optimizeCss: true,
  },
};

export default nextConfig;
