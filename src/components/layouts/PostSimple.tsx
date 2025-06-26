import { ReactNode } from 'react'

import PageTitle from '@/components/PageTitle'
import { ScrollTopAndComment } from '@/components/ScrollTopAndComment'
import { TripReport } from '@/data/trips'

interface LayoutProps {
  trip: TripReport
  children: ReactNode
  nextTrip?: TripReport
  prevTrip?: TripReport
}

export default function TripLayout({ trip, nextTrip, prevTrip }: LayoutProps) {
  const { path, slug, date, title } = content

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
              <dl>
                <div>
                  <dt className="sr-only">Date de la sortie</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-8 xl:divide-y-0 dark:divide-gray-700">
            <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
              <div className="prose dark:prose-invert max-w-none pt-10 pb-8">{children}</div>
            </div>
            {siteMetadata.comments && (
              <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300" id="comment">
                <Comments slug={slug} />
              </div>
            )}
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prevTrip && prevTrip.path && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${prevTrip.path}`}
                      className="link"
                      aria-label={`Previous post: ${prevTrip.title}`}
                    >
                      &larr; {prevTrip.title}
                    </Link>
                  </div>
                )}
                {nextTrip && nextTrip.path && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${nextTrip.path}`}
                      className="link"
                      aria-label={`Next post: ${nextTrip.title}`}
                    >
                      {nextTrip.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
