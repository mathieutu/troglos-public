import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.gravatar.com',
        pathname: '/avatar/**',
      },
      new URL('https://avatars.slack-edge.com/**'),
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
          },
        },
      ],
    })
    return config
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  async redirects() {
    return [
      { permanent: true, source: '/', has: [{ type: 'host', value: 'initiations.troglos.fr' }], destination: '/nous-rejoindre?details=1'},
      { permanent: true, source: '/initiations', destination: '/nous-rejoindre?details=1'},
      { permanent: true, source: '/decouvrir-la-speleo', destination: '/nous-rejoindre' },
      { permanent: true, source: '/decouvrir-le-canyoning', destination: '/nous-rejoindre' },
      { permanent: true, source: '/entrainements', destination: '/nous-rejoindre' },
      { permanent: true, source: '/les-entrainements-au-mur', destination: '/nous-rejoindre' },
      { permanent: true, source: '/equipement-recommande', destination: '/nous-rejoindre' },
      { permanent: true, source: '/la-grotte-du-crochet-superieur', destination: '/' },
      { permanent: true, source: '/les-sorties', destination: 'sorties' },
      { permanent: true, source: '/les-classiques', destination: '/speleologie' },
      { permanent: true, source: '/lexploration', destination: '/speleologie' },
      { permanent: true, source: '/commission-scientifique', destination: '/' },
      { permanent: true, source: '/partenariats', destination: '/club' },
      { permanent: true, source: '/lequipe', destination: '/club' },
      { permanent: true, source: '/lhistoire-du-club', destination: '/club' },
      { permanent: true, source: '/comment-nous-rencontrer', destination: '/nous-rejoindre' },
      { permanent: true, source: '/la-photo-souterraine', destination: '/' },
    ]
  },
}

export default nextConfig
