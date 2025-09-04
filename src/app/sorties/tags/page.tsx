// export const metadata = genPageMetadata({ title: 'Tags', description: 'Things I blog about' })

import { tags } from '@/data/trips'
import { Tag } from '@/components/Tag'
import { Link } from '@/components/Link'
import { generatePageMetadata } from '@/config/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Tags - Parcourir par Catégories',
  description:
    'Explorez nos sorties de spéléologie et canyonisme par catégories : initiations, expéditions, formations et plus encore.',
  path: '/sorties/tags',
  keywords: ['tags', 'catégories', 'initiations', 'expéditions', 'formations'],
})

export default async function Page() {
  return (
    <>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0 dark:divide-gray-700">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14 dark:text-gray-100">
            Tags
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {tags.length === 0 && 'No tags found.'}
          {tags.map((tag) => {
            return (
              <div key={tag.title} className="mt-2 mr-5 mb-2">
                <Tag tag={tag} />
                <Link
                  href={`/sorties/tags/${tag.slug}`}
                  className="-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300"
                  aria-label={`Voir les comptes rendus taggés ${tag.title}`}
                >
                  {` (${tag.count})`}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
