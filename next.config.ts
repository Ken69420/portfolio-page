import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
  },
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
