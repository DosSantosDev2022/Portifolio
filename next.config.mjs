/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    remotePatterns: [
      {
        hostname: 'media.graphassets.com',
      },
    ],
  },
}

export default nextConfig
