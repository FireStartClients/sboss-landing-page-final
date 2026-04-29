/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'xjixjvhsbmxpbpxhkmms.supabase.co' },
    ],
  },
};

module.exports = nextConfig;


module.exports = nextConfig;
