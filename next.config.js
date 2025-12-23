/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zuugnu.com',
        pathname: '/pic/**',
      },
    ],
  },
};

module.exports = nextConfig;