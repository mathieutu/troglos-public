import { ListLayoutWithTags } from '@/components/layouts/ListLayoutWithTags'

// export const metadata = genPageMetadata({ title: 'Blog' })

export default async function TripsReportsPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params

  return <ListLayoutWithTags currentPage={parseInt(page)} />
}
