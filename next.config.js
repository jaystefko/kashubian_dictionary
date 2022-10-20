/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['pl', 'ka', 'en', 'de', 'uk'],
    defaultLocale: 'pl',
  },
  env: {
    API_URL: process.env.API_URL || 'https://kashubian-dic.herokuapp.com/',
  }
};

module.exports = nextConfig;
