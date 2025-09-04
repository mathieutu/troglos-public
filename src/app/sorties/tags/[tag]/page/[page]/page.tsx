import { notFound } from 'next/navigation'
import { tags } from '@/data/trips'
import { ListLayoutWithTags } from '@/components/layouts/ListLayoutWithTags'
import { TRIPS_PER_PAGE } from '@/config/config'
import type { Metadata } from 'next'
import { siteConfig } from '@/config/metadata'

export async function generateMetadata(props: {
  params: Promise<{ tag: string; page: string }>
}): Promise<Metadata | undefined> {
  const params = await props.params
  const tag = tags.find((t) => t.slug === params.tag)
  const page = parseInt(params.page)

  if (!tag) {
    return
  }

  const totalPages = Math.max(1, Math.ceil(tag.count / TRIPS_PER_PAGE))

  return {
    title: `${tag.title} - Page ${page}`,
    description: `Sorties de la catégorie "${tag.title}" - Page ${page} sur ${totalPages}. Découvrez nos aventures de spéléologie et canyonisme.`,
    keywords: [tag.title, 'sorties', 'page', 'catégorie', 'spéléologie', 'canyonisme'],
    openGraph: {
      title: `${tag.title} - Page ${page}`,
      description: `Sorties de la catégorie "${tag.title}" - Page ${page} sur ${totalPages}.`,
      url: `/sorties/tags/${tag.slug}/page/${page}`,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: `${tag.title} - Page ${page}`,
      description: `Sorties de la catégorie "${tag.title}" - Page ${page} sur ${totalPages}.`,
    },
  }
}

export const dynamicParams = false

export const generateStaticParams = async () => {
  return tags.flatMap((tag) => {
    const totalPages = Math.max(1, Math.ceil(tag.count / TRIPS_PER_PAGE))
    return Array.from({ length: totalPages }, (_, i) => ({
      tag: tag.slug,
      page: (i + 1).toString(),
    }))
  })
}

export default async function TagPageIndex(props: {
  params: Promise<{ tag: string; page: string }>
}) {
  const params = await props.params
  const tag = tags.find((tag) => tag.slug === params.tag)

  if (!tag) {
    return notFound()
  }

  return <ListLayoutWithTags currentTag={tag} currentPage={parseInt(params.page)} />
}
