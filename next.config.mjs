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

export default nextConfig;

