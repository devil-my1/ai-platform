import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	eslint: {
		ignoreDuringBuilds: true
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "res.cloudinary.com",
				port: ""
			}
		]
	}
}

export default nextConfig
