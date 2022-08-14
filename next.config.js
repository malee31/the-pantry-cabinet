/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	distDir: "build",
	images: {
		domains: ["localhost", "firebasestorage.googleapis.com"]
	},
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},
};

module.exports = nextConfig;