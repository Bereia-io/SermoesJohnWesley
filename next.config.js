module.exports = {
  publicRuntimeConfig: {
    SITE_URL: process.env.SITE_URL,
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./lib/sitemapGenerator')
    }

    return config
  },
};