/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		formats: ['image/webp'],
		remotePatterns: [
			{
				hostname: 'media.graphassets.com',
			},
			{
				hostname: 'sa-east-1.graphassets.com',
			},
			{
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'bundui-images.netlify.app',
      },
		],
	},
}

export default nextConfig
