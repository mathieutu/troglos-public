import { notFound } from 'next/navigation'
import { tripsReports } from '@/data/trips'
import { Link } from '@/components/Link'
import Image from 'next/image'
import { SectionContainer } from '@/components/SectionContainer'
import { formatDateFr, formatDurationMinutes } from '@/utils/dates'
import { PageTitle } from '@/components/PageHeader'
import { Tag } from '@/components/Tag'
import type { Metadata } from 'next'
import { siteConfig } from '@/config/metadata'

export async function generateMetadata(props: {
  params: Promise<{ trip: string }>
}): Promise<Metadata | undefined> {
  const params = await props.params
  const trip = tripsReports.find((p) => p.slug === params.trip)

  if (!trip) {
    return
  }

  const publishedAt = new Date(trip.publishedAt).toISOString()
  const placeTypeText = trip.placeType === 'canyon' ? 'canyon' : 'grotte'
  const description = `Compte-rendu de notre sortie ${trip.placeType === 'canyon' ? 'canyonisme' : 'spéléologie'} au ${placeTypeText} ${trip.place.name}. ${trip.description || ''}`

  return {
    title: `${trip.place.name}, le ${formatDateFr(trip.tripDate)} - ${trip.placeType === 'canyon' ? 'Canyonisme' : 'Spéléologie'}`,
    description,
    keywords: [
      trip.placeType === 'canyon' ? 'canyonisme' : 'spéléologie',
      trip.place.city,
      'sortie',
      'compte-rendu',
      ...trip.tags.map((tag) => tag.title),
    ],
    openGraph: {
      title: `${trip.place} - ${trip.placeType === 'canyon' ? 'Canyonisme' : 'Spéléologie'}`,
      description,
      siteName: siteConfig.siteName,
      locale: siteConfig.locale,
      type: 'article',
      publishedTime: publishedAt,
      url: `/sorties/${trip.slug}`,
    },
    twitter: {
      card: 'summary',
      title: `${trip.place} - ${trip.placeType === 'canyon' ? 'Canyonisme' : 'Spéléologie'}`,
      description,
    },
  }
}

export const dynamicParams = false

export const generateStaticParams = async () => tripsReports.map((trip) => ({ trip: trip.slug }))

export default async function Page(props: { params: Promise<{ trip: string }> }) {
  const params = await props.params

  const tripIndex = tripsReports.findIndex((trip) => trip.slug === params.trip)

  if (tripIndex === -1) {
    return notFound()
  }

  const prevTrip = tripsReports[tripIndex + 1]
  const nextTrip = tripsReports[tripIndex - 1]

  const trip = tripsReports[tripIndex]

  return (
    <SectionContainer>
      <article className={`mt-16 ${trip.placeType === 'canyon' ? 'color-canyon' : 'color-caving'}`}>
        <div className="xl:divide-y xl:divide-gray-700">
          <header className="pt-6">
            <div className="space-y-1 text-center">
              <dl className="item-center flex justify-center gap-2 text-base leading-6 font-medium dark:text-gray-400">
                <div>
                  <dt className="sr-only">Date de la sortie</dt>
                  <dd className="">
                    <time dateTime={trip.tripDate}>{formatDateFr(trip.tripDate)}</time>
                  </dd>
                </div>
                {!!trip.timeSpent && (
                  <>
                    ·
                    <div>
                      <dt className="sr-only">Temps d&apos;activité</dt>
                      <dd className="">
                        {formatDurationMinutes(trip.timeSpent)} passées{' '}
                        {trip.placeType === 'canyon' ? "dans l'eau" : 'sous terre'}
                      </dd>
                    </div>
                  </>
                )}
              </dl>
              <div>
                <PageTitle>{trip.title}</PageTitle>
              </div>
              <dl className="py-8">
                <dt className="sr-only">Participants</dt>
                <dd>
                  <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12">
                    {trip.users.map((user) => (
                      <li className="flex items-center space-x-2" key={user.avatarUrl}>
                        <Image
                          src={user.avatarUrl}
                          width={38}
                          height={38}
                          alt=""
                          className="h-10 w-10 rounded-full"
                        />
                        <dl className="text-sm leading-5 font-medium whitespace-nowrap">
                          <dt className="sr-only">Prénom</dt>
                          <dd className="text-gray-900 dark:text-gray-100">{user.firstName}</dd>
                        </dl>
                      </li>
                    ))}
                    {trip.externalAttendees && (
                      <li className="flex items-center space-x-2">
                        <div className="text-sm leading-5 font-medium whitespace-nowrap">
                          <span className="text-gray-900 dark:text-gray-100">
                            <span className="align-middle text-3xl">
                              {trip.placeType === 'canyon' ? '🐟' : '🦇'}
                            </span>{' '}
                            des participants externes
                          </span>
                        </div>
                      </li>
                    )}
                  </ul>
                </dd>
              </dl>
            </div>
          </header>
          <div className="divide-y divide-gray-200 pb-8 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0 dark:divide-gray-700">
            <div className="py-8 xl:col-span-3 xl:col-start-2">
              <div
                className="prose dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: trip.description }}
              />
              <div className="flex items-center justify-end space-x-2">
                <dl className="text-sm leading-5 font-medium whitespace-nowrap">
                  <dt className="sr-only">Auteur</dt>
                  <dd className="text-gray-900 dark:text-gray-100">{trip.author.firstName}</dd>
                </dl>
              </div>
            </div>
            <footer className="order-first xl:col-start-1">
              <div className="divide-gray-200 text-sm leading-5 font-medium xl:divide-y dark:divide-gray-700">
                {trip.tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs tracking-wide text-gray-400 uppercase">Tags</h2>
                    <div className="flex flex-wrap">
                      {trip.tags.map((tag) => (
                        <Tag key={tag.slug} tag={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(nextTrip || prevTrip) && (
                  <div className="flex justify-between py-4 xl:block xl:space-y-8 xl:py-8">
                    {nextTrip && nextTrip.slug && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-400 uppercase">
                          Compte-rendu suivant
                        </h2>
                        <div
                          className={`link ${nextTrip.placeType === 'canyon' ? 'color-canyon' : 'color-caving'}`}
                        >
                          <Link href={`/sorties/${nextTrip.slug}`}>{nextTrip.title}</Link>
                        </div>
                      </div>
                    )}
                    {prevTrip && prevTrip.slug && (
                      <div>
                        <h2 className="text-xs tracking-wide text-gray-400 uppercase">
                          Compte-rendu précédent
                        </h2>
                        <div
                          className={`link ${prevTrip.placeType === 'canyon' ? 'color-canyon' : 'color-caving'}`}
                        >
                          <Link href={`/sorties/${prevTrip.slug}`}>{prevTrip.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
                <div className="color-reset pt-4 xl:pt-8">
                  <Link
                    href="/sorties"
                    className="hover:text-primary-500 text-white"
                    aria-label="Toutes les sorties"
                  >
                    &larr; Toutes les sorties
                  </Link>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
