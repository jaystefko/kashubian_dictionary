/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: ['pl'], // , 'csb', 'en', 'de', 'uk'
		defaultLocale: 'pl',
		localeDetection: false,
	},
	env: {
		API_URL: process.env.API_URL || 'https://kashubian-dic.herokuapp.com/',
	},
}

module.exports = nextConfig
