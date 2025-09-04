import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Clan Spéléo des Troglodytes',
  description:
    'Club de passionné·e·s de spéléologie et de canyonisme basé à Lyon. Explorez les merveilles souterraines et les canyons avec nous.',
  url: 'https://troglos.fr',
  siteName: 'Clan Spéléo des Troglodytes',
  locale: 'fr_FR',
  type: 'website',
}

export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'spéléologie',
    'canyonisme',
    'speleo',
    'canyoning',
    'speleologue',
    'canyoneur',
    'canyoneuse',
    'canyoniste',
    'club',
    'Lyon',
    'exploration',
    'grotte',
    'scialet',
    'aven',
    'gouffre',
    'rappel',
    'corde',
    'souterrain',
    'eau vive',
    'nature',
    'aventure souterraine',
    'sports de plein air',
    'randonnée aquatique',
    'techniques de progression',
    'sécurité en spéléologie',
    'écologie souterraine',
    'biodiversité des grottes',
    'patrimoine naturel',
    'formation spéléologie',
    'initiation canyonisme',
    'équipement spéléo',
    'équipement canyon',
    'techniques de corde',
    'canyon',
    'riviére',
    'sports nature',
    'aventure',
    'Auvergne-Rhône-Alpes',
  ],
  authors: [{ name: siteConfig.name }, { name: 'Mathieu TUDISCO', url: 'https://mathieutu.dev' }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/og-image.jpg`,
        width: 1613,
        height: 1207,
        alt: '',
        type: 'image/jpg',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export function generatePageMetadata({
  title,
  description,
  path = '',
  keywords = [],
}: {
  title: string
  description: string
  path?: string
  keywords?: string[]
}): Metadata {
  const url = `${siteConfig.url}${path}`

  return {
    title,
    description,
    keywords: [...new Set(...(defaultMetadata.keywords as string[]), ...keywords)],
    alternates: {
      canonical: path,
    },
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      url,
      siteName: siteConfig.siteName,
      type: 'website',
      locale: siteConfig.locale,
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  }
}
