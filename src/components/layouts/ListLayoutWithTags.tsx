'use client'

import { usePathname } from 'next/navigation'
import { Link } from '@/components/Link'
import { Tag } from '@/components/Tag'
import { useMemo } from 'react'
import { formatDateFr } from '@/utils/dates'
import { tags, tripsReports, Tag as TagType, TripReport } from '@/data/trips'
import { Bleed } from '@/components/Bleed'
import banner from '@/assets/images/marcel.jpg'
import Image from 'next/image'
import { PageTitle } from '@/components/PageTitle'

interface PaginationProps {
  totalPages: number
  currentPage: number
}

export const TripsListItem = ({ trip }: { trip: TripReport }) => {
  return (
    <li className="py-5">
      <article
        className={`flex flex-col space-y-2 xl:space-y-0 ${trip.placeType === 'canyon' ? 'color-canyon' : 'color-caving'}`}
      >
        <dl>
          <dt className="sr-only">Date</dt>
          <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
            <time dateTime={trip.tripDate} suppressHydrationWarning>
              {formatDateFr(trip.tripDate)}
            </time>
          </dd>
        </dl>
        <div className="space-y-3">
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
              {trip.description && (
                <div className="text-right text-base leading-6 font-medium">
                  <Link
                    href={`/sorties/${trip.slug}`}
                    className="link"
                    aria-label={`Lire "${trip.title}"`}
                  >
                    Lire &rarr;
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="relative">
            <div className="prose max-w-none text-gray-500 dark:text-gray-400">
              {trip.quickSummary}
            </div>
          </div>
        </div>
      </article>
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
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Précédent
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Précédent
          </Link>
        )}
        <span>
          {currentPage} sur {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Suivant
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Suivant
          </Link>
        )}
      </nav>
    </div>
  )
}

const TRIPS_PER_PAGE = 6

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
        <div className="space-y-1 pb-10 text-center dark:border-gray-700">
          <Bleed>
            <div className="relative aspect-2/1 w-full">
              <Image src={banner} alt="" fill className="rounded-lg object-cover" />
            </div>
          </Bleed>
          <div className="relative pt-10">
            <PageTitle>Les sorties du Clan</PageTitle>
          </div>
        </div>
        <div className="flex sm:space-x-24">
          <div className="hidden h-full max-w-[300px] min-w-[300px] flex-wrap rounded-sm pt-5 shadow-md sm:flex dark:shadow-gray-800/40">
            <div className="px-6 py-4">
              <Link
                href={`/sorties`}
                className="hover:text-primary-500 dark:hover:text-primary-500 font-bold text-gray-700 uppercase dark:text-gray-300"
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
                          className="hover:text-primary-500 dark:hover:text-primary-500 px-3 py-2 text-sm font-medium text-gray-500 uppercase dark:text-gray-300"
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
            <ul>
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
