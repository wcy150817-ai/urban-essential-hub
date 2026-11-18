import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/reviews/heatseeker",
        destination: "/reviews/skylit",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
