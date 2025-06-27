import { ListLayoutWithTags } from '@/components/layouts/ListLayoutWithTags'
import { tripsReports } from '@/data/trips'
import { TRIPS_PER_PAGE } from '@/config/config'

// export const metadata = genPageMetadata({ title: 'Blog' })

export const dynamicParams = false

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(tripsReports.length / TRIPS_PER_PAGE)

  return Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))
}

export default async function TripsReportsPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params

  return <ListLayoutWithTags currentPage={parseInt(page)} />
}
