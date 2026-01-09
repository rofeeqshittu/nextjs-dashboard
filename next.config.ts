import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    skipTrailingSlashRedirect: true,
  },
  output: 'standalone',
};

export default nextConfig;
