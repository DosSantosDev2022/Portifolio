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
		],
	},
}

export default nextConfig
