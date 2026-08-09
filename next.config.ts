import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dxbhsrqyrr690.cloudfront.net",
        pathname:
          "/sidearm.nextgen.sites/gatorzone.com/images/integration_2025/main_nav_logo.svg",
      },
    ],
  },
};

export default nextConfig;
