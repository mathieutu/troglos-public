import { tags } from '@/data/trips'
import { notFound } from 'next/navigation'
import { ListLayoutWithTags } from '@/components/layouts/ListLayoutWithTags'

// export async function generateMetadata(props: {
//   params: Promise<{ tag: string }>
// }): Promise<Metadata> {
//   const params = await props.params
//   const tag = decodeURI(params.tag)
//   return genPageMetadata({
//     title: tag,
//     description: `${siteMetadata.title} ${tag} tagged content`,
//     alternates: {
//       canonical: './',
//       types: {
//         'application/rss+xml': `${siteMetadata.siteUrl}/tags/${tag}/feed.xml`,
//       },
//     },
//   })
// }

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
