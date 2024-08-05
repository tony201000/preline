/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Ensure protocol is specified
        hostname: 'zupimages.net',
        port: '', // Leave empty for default
        pathname: '/**', // Allow all paths
      },
    ],
  },
};

const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  },
};

export default nextConfig;



