import { siteConfig } from './metadata'

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsOrganization',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.svg`,
  image: `${siteConfig.url}/og-image.jpg`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lyon',
    addressRegion: 'Auvergne-Rhône-Alpes',
    addressCountry: 'FR',
  },
  sport: ['Speleology', 'Canyoning'],
  foundingDate: '1970',
  memberOf: {
    '@type': 'Organization',
    name: 'Fédération Française de Spéléologie',
    url: 'https://ffspeleo.fr',
  },
  sameAs: [
    // Add social media profiles if available
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: 'French',
  },
}

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  publisher: {
    '@type': 'SportsOrganization',
    name: siteConfig.name,
    logo: `${siteConfig.url}/logo.svg`,
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${siteConfig.url}/sorties?search={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: 'fr-FR',
}

export const breadcrumbJsonLd = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const activityJsonLd = (activity: {
  name: string
  description: string
  url: string
  image?: string
  category: 'Speleology' | 'Canyoning'
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Sport',
  name: activity.name,
  description: activity.description,
  url: activity.url,
  ...(activity.image && { image: activity.image }),
  category: activity.category,
  provider: {
    '@type': 'SportsOrganization',
    name: siteConfig.name,
    url: siteConfig.url,
  },
})

export const tripReportJsonLd = (trip: {
  title: string
  description: string
  url: string
  publishedAt: string
  updatedAt?: string
  author: string
  location: string
  activity: 'Speleology' | 'Canyoning'
  images?: string[]
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: trip.title,
  description: trip.description,
  url: trip.url,
  datePublished: trip.publishedAt,
  ...(trip.updatedAt && { dateModified: trip.updatedAt }),
  author: {
    '@type': 'Person',
    name: trip.author,
  },
  publisher: {
    '@type': 'SportsOrganization',
    name: siteConfig.name,
    logo: `${siteConfig.url}/logo.svg`,
  },
  ...(trip.images && trip.images.length > 0 && { image: trip.images }),
  about: {
    '@type': 'Sport',
    name: trip.activity === 'Speleology' ? 'Spéléologie' : 'Canyonisme',
  },
  locationCreated: {
    '@type': 'Place',
    name: trip.location,
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': trip.url,
  },
})

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${siteConfig.url}#organization`,
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.svg`,
  image: `${siteConfig.url}/og-image.jpg`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lyon',
    addressRegion: 'Auvergne-Rhône-Alpes',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '45.7640',
    longitude: '4.8357',
  },
  openingHours: 'Mo-Su',
  priceRange: '€',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '25',
    bestRating: '5',
    worstRating: '1',
  },
}
