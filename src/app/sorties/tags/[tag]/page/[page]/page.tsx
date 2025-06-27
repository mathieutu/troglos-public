import { notFound } from 'next/navigation'
import { tags } from '@/data/trips'
import { ListLayoutWithTags } from '@/components/layouts/ListLayoutWithTags'

// export const generateStaticParams = async () => {
//   const tagCounts = tagData as Record<string, number>
//   return Object.keys(tagCounts).flatMap((tag) => {
//     const postCount = tagCounts[tag]
//     const totalPages = Math.max(1, Math.ceil(postCount / POSTS_PER_PAGE))
//     return Array.from({ length: totalPages }, (_, i) => ({
//       tag: encodeURI(tag),
//       page: (i + 1).toString(),
//     }))
//   })
// }

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
