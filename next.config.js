/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: ['pl', 'csb'], // , 'csb', 'en', 'de', 'uk'
		defaultLocale: 'pl',
		localeDetection: false,
	},
	env: {
		API_URL: process.env.API_URL || 'http://217.182.79.144:8888/',
	},
}

module.exports = nextConfig
