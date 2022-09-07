/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['pl', 'ka', 'en', 'de', 'uk'],
    defaultLocale: 'pl',
  },
};

module.exports = nextConfig;
