/** @type {import('next').NextConfig} */
// next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'public.readdy.ai',
        pathname: '/ai/img_res/**',
      },
    ],
  },
};

export default nextConfig;
