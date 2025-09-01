'use client'

import { usePathname } from 'next/navigation'
import { Link } from '@/components/Link'
import { Tag } from '@/components/Tag'
import { useMemo } from 'react'
import { formatDateFr } from '@/utils/dates'
import { tags, tripsReports, Tag as TagType, TripReport } from '@/data/trips'
import banner from '@/assets/images/photos/caving_26.jpg'
import { PageHeader } from '@/components/PageHeader'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

export const TripsListItem = ({
  trip,
  handleHover = true,
}: {
  trip: TripReport
  handleHover?: boolean
}) => {
  return (
    <li
      className={`${trip.placeType === 'canyon' ? 'color-canyon' : 'color-caving'} group relative`}
    >
      <article className={`flex flex-col space-y-2 xl:space-y-0`}>
        <dl>
          <dt className="sr-only">Date</dt>
          <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
            <time dateTime={trip.tripDate} suppressHydrationWarning>
              {formatDateFr(trip.tripDate)}
            </time>
          </dd>
        </dl>
        <div className="">
          <div>
            <h2 className="text-2xl leading-8 font-bold tracking-tight">
              <Link href={`/sorties/${trip.slug}`} className="text-gray-900 dark:text-gray-100">
                <span className="mr-4">{trip.placeType === 'canyon' ? '🐟' : '🦇'}</span>
                {trip.title}
              </Link>
            </h2>
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-wrap">
                {trip.tags.map((tag) => (
                  <Tag key={tag.slug} tag={tag} />
                ))}
              </div>
            </div>
          </div>
          <div className="prose mt-1 line-clamp-2 max-w-none text-sm leading-5 text-gray-400">
            {trip.quickSummary}
          </div>
        </div>
      </article>
      <Link href={`/sorties/${trip.slug}`} className="link" aria-label={`Lire "${trip.title}"`}>
        <div className="absolute inset-0 block">{/*ensure tap for mobile*/}</div>
        {handleHover && (
          <div className="from-primary-200/10 border-primary-400/30 absolute inset-0 -m-4 hidden rounded-lg border bg-gradient-to-r to-transparent group-hover:block group-focus:block">
            {/*ensure hover on desktop*/}
          </div>
        )}
      </Link>
    </li>
  )
}
const Pagination = ({ totalPages, currentPage }: PaginationProps) => {
  const pathname = usePathname()
  const basePath = pathname
    .replace(/^\//, '') // Remove leading slash
    .replace(/\/page\/\d+\/?$/, '') // Remove any trailing /page
    .replace(/\/$/, '') // Remove trailing slash
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {prevPage ? (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
            className="hover:text-primary-500"
          >
            Précédent
          </Link>
        ) : (
          <span className="cursor-auto opacity-50">Précédent</span>
        )}
        <span>
          {currentPage} sur {totalPages}
        </span>
        {nextPage ? (
          <Link
            href={`/${basePath}/page/${currentPage + 1}`}
            rel="next"
            className="hover:text-primary-500"
          >
            Suivant
          </Link>
        ) : (
          <span className="cursor-auto opacity-50">Suivant</span>
        )}
      </nav>
    </div>
  )
}

const TRIPS_PER_PAGE = 10

interface ListLayoutProps {
  currentTag?: TagType
  currentPage?: number
  currentSearch?: string
}
export const ListLayoutWithTags = ({ currentPage = 1, currentTag }: ListLayoutProps) => {
  const filteredTrips = useMemo(() => {
    let tripsToDisplay = tripsReports

    if (currentTag) {
      tripsToDisplay = tripsToDisplay.filter((trip) =>
        trip.tags.some((tag) => tag.slug === currentTag.slug)
      )
    }

    if (currentPage) {
      const startIndex = (currentPage - 1) * TRIPS_PER_PAGE
      tripsToDisplay = tripsToDisplay.slice(startIndex, startIndex + TRIPS_PER_PAGE)
    }
    return tripsToDisplay
  }, [currentTag, currentPage])

  const totalPages = Math.ceil(tripsReports.length / TRIPS_PER_PAGE)

  return (
    <>
      <div>
        <PageHeader imageSrc={banner} title="Les sorties du Clan" />
        <div className="flex sm:space-x-24">
          <div className="hidden h-full max-w-[300px] min-w-[300px] flex-wrap sm:flex">
            <div className="">
              <Link
                href={`/sorties`}
                className="hover:text-primary-500 font-bold text-gray-300 uppercase"
              >
                Toutes les sorties
              </Link>
              <ul>
                {tags.map((tag) => {
                  return (
                    <li key={tag.title} className="my-3">
                      {currentTag?.slug === tag.slug ? (
                        <h3 className="text-primary-500 inline px-3 py-2 text-sm font-bold uppercase">
                          {`${tag.title} (${tag.count})`}
                        </h3>
                      ) : (
                        <Link
                          href={`/sorties/tags/${tag.slug}`}
                          className="hover:text-primary-500 px-3 py-2 text-sm font-medium text-gray-300 uppercase"
                          aria-label={`View posts tagged ${tag.title}`}
                        >
                          {`${tag.title} (${tag.count})`}
                        </Link>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div>
            <ul className="grid gap-6">
              {filteredTrips.map((trip) => (
                <TripsListItem key={trip.id} trip={trip} />
              ))}
            </ul>
            {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} />}
          </div>
        </div>
      </div>
    </>
  )
}
