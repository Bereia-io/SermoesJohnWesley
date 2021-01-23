module.exports = {
  publicRuntimeConfig: {
    SITE_URL: process.env.SITE_URL,
    ENV: process.env.ENV
  },
  async redirects() {
    return [
      {
        source: '/sermao_01',
        destination: '/sermao_01-a-salvacao-pela-fe',
        permanent: true,
      },
      {
        source: '/sermao_02',
        destination: '/sermao_02-os-quase-cristaos',
        permanent: true,
      },
      {
        source: '/sermao_03',
        destination: '/sermao_03-desperta-tu-que-dormes',
        permanent: true,
      },
    ]
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./lib/sitemapGenerator')
    }
    return config
  },
};