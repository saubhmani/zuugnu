/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
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