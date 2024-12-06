/** @type {import('next).NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "lqwsarshfucesldaurcz.supabase.co",
      },
    ],
  },
};

export default nextConfig;
