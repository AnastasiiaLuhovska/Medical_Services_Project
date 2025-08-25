/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['de', 'ru', 'en'],
    defaultLocale: 'de',
    localeDetection: false,
  },
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        process: require.resolve('process'),
      }
    }
    return config
  },
  outputFileTracingRoot: __dirname,
}

module.exports = nextConfig