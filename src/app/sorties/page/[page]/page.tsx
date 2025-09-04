import { ListLayoutWithTags } from '@/components/layouts/ListLayoutWithTags'
import { tripsReports } from '@/data/trips'
import { TRIPS_PER_PAGE } from '@/config/config'
import type { Metadata } from 'next'
import { siteConfig } from '@/config/metadata'

export async function generateMetadata(props: {
  params: Promise<{ page: string }>
}): Promise<Metadata> {
  const params = await props.params
  const page = parseInt(params.page)
  const totalPages = Math.ceil(tripsReports.length / TRIPS_PER_PAGE)

  return {
    title: `Comptes-rendus de Sorties - Page ${page}`,
    description: `Découvrez nos comptes-rendus de sorties de spéléologie et canyonisme - Page ${page} sur ${totalPages}. ${tripsReports.length} aventures du Clan Spéléo des Troglodytes.`,
    keywords: ['sorties', 'comptes-rendus', 'page', 'spéléologie', 'canyonisme'],
    openGraph: {
      title: `Comptes-rendus de Sorties - Page ${page}`,
      description: `Découvrez nos comptes-rendus de sorties de spéléologie et canyonisme - Page ${page} sur ${totalPages}.`,
      url: `/sorties/page/${page}`,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: `Comptes-rendus de Sorties - Page ${page}`,
      description: `Découvrez nos comptes-rendus de sorties de spéléologie et canyonisme - Page ${page} sur ${totalPages}.`,
    },
  }
}

export const dynamicParams = false

export const generateStaticParams = async () => {
  const totalPages = Math.ceil(tripsReports.length / TRIPS_PER_PAGE)

  return Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))
}

export default async function TripsReportsPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params

  return <ListLayoutWithTags currentPage={parseInt(page)} />
}
