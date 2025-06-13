import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  experimental: {
    turbo: {},
    optimizeCss: true,
  },
};

export default nextConfig;
