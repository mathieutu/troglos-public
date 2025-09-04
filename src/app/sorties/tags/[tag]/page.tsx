import { tags } from '@/data/trips'
import { notFound } from 'next/navigation'
import { ListLayoutWithTags } from '@/components/layouts/ListLayoutWithTags'
import type { Metadata } from 'next'
import { siteConfig } from '@/config/metadata'

export async function generateMetadata(props: {
  params: Promise<{ tag: string }>
}): Promise<Metadata | undefined> {
  const params = await props.params
  const tag = tags.find((t) => t.slug === params.tag)

  if (!tag) {
    return
  }

  return {
    title: `${tag.title} - Sorties par Catégorie`,
    description: `Découvrez toutes nos sorties de la catégorie "${tag.title}". ${tag.count} sorties de spéléologie et canyonisme du Clan Spéléo des Troglodytes.`,
    keywords: [tag.title, 'sorties', 'catégorie', 'spéléologie', 'canyonisme'],
    openGraph: {
      title: `${tag.title} - Sorties par Catégorie`,
      description: `Découvrez toutes nos sorties de la catégorie "${tag.title}". ${tag.count} sorties de spéléologie et canyonisme.`,
      url: `/sorties/tags/${tag.slug}`,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: `${tag.title} - Sorties par Catégorie`,
      description: `Découvrez toutes nos sorties de la catégorie "${tag.title}". ${tag.count} sorties de spéléologie et canyonisme.`,
    },
  }
}

export const dynamicParams = false

export const generateStaticParams = async () => tags.map((tag) => ({ tag: tag.slug }))

export default async function TagPageIndex(props: { params: Promise<{ tag: string }> }) {
  const params = await props.params
  const tag = tags.find((tag) => tag.slug === params.tag)

  if (!tag) {
    return notFound()
  }

  return <ListLayoutWithTags currentTag={tag} />
}
