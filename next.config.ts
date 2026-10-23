import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  async redirects() {
    return [{ source: "/unlock", destination: "/", permanent: true }];
  },
};

export default nextConfig;
