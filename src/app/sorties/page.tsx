import { ListLayoutWithTags } from '@/components/layouts/ListLayoutWithTags'
import { generatePageMetadata } from '@/config/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Comptes-rendus de Sorties',
  description:
    'Découvrez les comptes-rendus de nos sorties de spéléologie et canyonisme. Explorez nos aventures dans les cavités et canyons.',
  path: '/sorties',
  keywords: [
    'sorties',
    'comptes-rendus',
    'aventures',
    'grottes',
    'gouffres',
    'canyons',
    'exploration',
  ],
})

export default async function TripsReportsIndexPage() {
  return <ListLayoutWithTags />
}
