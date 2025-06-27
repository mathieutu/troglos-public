import { notFound } from 'next/navigation'
import { tags } from '@/data/trips'
import { ListLayoutWithTags, TRIPS_PER_PAGE } from '@/components/layouts/ListLayoutWithTags'

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
