import { MetadataRoute } from 'next'
import { tripsReports, tags } from '@/data/trips'
import { siteConfig } from '@/config/metadata'
import { TRIPS_PER_PAGE } from '@/config/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/club`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/nous-rejoindre`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/speleologie`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/canyonisme`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/sorties`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/sorties/tags`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Trip reports pages
  const tripPages = tripsReports.map((trip) => ({
    url: `${baseUrl}/sorties/${trip.slug}`,
    lastModified: new Date(trip.tripDate),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }))

  // Tag pages
  const tagPages = tags.map((tag) => ({
    url: `${baseUrl}/sorties/tags/${tag.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Pagination pages for trips
  const totalTripsPages = Math.ceil(tripsReports.length / TRIPS_PER_PAGE)
  const tripPaginationPages = Array.from({ length: totalTripsPages - 1 }, (_, i) => ({
    url: `${baseUrl}/sorties/page/${i + 2}`, // Start from page 2 since page 1 is /sorties
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  // Pagination pages for tags
  const tagPaginationPages = tags.flatMap((tag) => {
    const totalPages = Math.max(1, Math.ceil(tag.count / TRIPS_PER_PAGE))
    return Array.from({ length: totalPages - 1 }, (_, i) => ({
      url: `${baseUrl}/sorties/tags/${tag.slug}/page/${i + 2}`, // Start from page 2
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.4,
    }))
  })

  return [...staticPages, ...tripPages, ...tagPages, ...tripPaginationPages, ...tagPaginationPages]
}
