import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "skillicons.dev",
        pathname: "/**",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
