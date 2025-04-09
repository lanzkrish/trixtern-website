import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['github.com', 's3.amazonaws.com'],
  },
};

export default nextConfig;
