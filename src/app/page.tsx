import { formatDateFr } from '@/utils/dates'
import { Link } from '@/components/Link'
import { Tag } from '@/components/Tag'
import { tripsReports } from '@/data/trips'

export default async function Home() {
  const MAX_DISPLAY = 10

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Comptes rendus de <span className="text-caving-500">Spéléologie</span> et de{' '}
            <span className="text-canyon-500">Canyonisme</span>
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">Les sorties du Clan.</p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!tripsReports.length && 'Aucun compte rendu trouvé.'}
          {tripsReports.slice(0, MAX_DISPLAY).map((trip) => {
            return (
              <li key={trip.id} className="py-12">
                <article className={trip.placeType === 'canyon' ? 'color-canyon' : 'color-caving'}>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Publié le</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={trip.tripDate}>{formatDateFr(trip.tripDate)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link href="#" className="text-gray-900 dark:text-gray-100">
                              {trip.title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {trip.tags.map((tag) => (
                              <Tag key={tag.slug} tag={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {trip.quickSummary}
                        </div>
                      </div>
                      {trip.description && (
                        <div className="text-base leading-6 font-medium">
                          <Link href="#" className="link" aria-label={`Lire "${trip.title}"`}>
                            Lire &rarr;
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {tripsReports.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link href="/comptes-rendus" className="link" aria-label="All posts">
            Tous les Comptes Rendus &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
