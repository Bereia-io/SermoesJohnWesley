module.exports = {
  publicRuntimeConfig: {
    SITE_URL: process.env.SITE_URL,
    ENV: process.env.ENV
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./lib/sitemapGenerator')
    }
    return config
  },
};