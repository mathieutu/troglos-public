import TripLayout from '@/components/layouts/TripLayout'
import { notFound } from 'next/navigation'
import { tripsReports } from '@/data/trips'

// export async function generateMetadata(props: {
//   params: Promise<{ slug: string[] }>
// }): Promise<Metadata | undefined> {
//   const params = await props.params
//   const slug = decodeURI(params.slug.join('/'))
//   const trip = allBlogs.find((p) => p.slug === slug)
//   const authorList = trip?.authors || ['default']
//   const authorDetails = authorList.map((author) => {
//     const authorResults = allAuthors.find((p) => p.slug === author)
//     return coreContent(authorResults as Authors)
//   })
//   if (!trip) {
//     return
//   }
//
//   const publishedAt = new Date(trip.date).toISOString()
//   const modifiedAt = new Date(trip.lastmod || trip.date).toISOString()
//   const authors = authorDetails.map((author) => author.name)
//   let imageList = [siteMetadata.socialBanner]
//   if (trip.images) {
//     imageList = typeof trip.images === 'string' ? [trip.images] : trip.images
//   }
//   const ogImages = imageList.map((img) => {
//     return {
//       url: img && img.includes('http') ? img : siteMetadata.siteUrl + img,
//     }
//   })
//
//   return {
//     title: trip.title,
//     description: trip.summary,
//     openGraph: {
//       title: trip.title,
//       description: trip.summary,
//       siteName: siteMetadata.title,
//       locale: 'en_US',
//       type: 'article',
//       publishedTime: publishedAt,
//       modifiedTime: modifiedAt,
//       url: './',
//       images: ogImages,
//       authors: authors.length > 0 ? authors : [siteMetadata.author],
//     },
//     twitter: {
//       card: 'summary_large_image',
//       title: trip.title,
//       description: trip.summary,
//       images: imageList,
//     },
//   }
// }

export const dynamicParams = false

export const generateStaticParams = async () => tripsReports.map((trip) => ({ trip: trip.slug }))

export default async function Page(props: { params: Promise<{ trip: string }> }) {
  const params = await props.params

  const tripIndex = tripsReports.findIndex((trip) => trip.slug === params.trip)

  if (tripIndex === -1) {
    return notFound()
  }

  const prev = tripsReports[tripIndex + 1]
  const next = tripsReports[tripIndex - 1]

  const trip = tripsReports[tripIndex]

  return (
    <>
      <TripLayout trip={trip} nextTrip={next} prevTrip={prev}></TripLayout>
    </>
  )
}
