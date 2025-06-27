import { ScrollTopAndComment } from '@/components/ScrollTopAndComment'
import { SectionContainer } from '@/components/SectionContainer'
import { Link } from '@/components/Link'
import banner from '@/assets/images/caving/fitoja.jpg'
import { tripsReports } from '@/data/trips'
import { TripsListItem } from '@/components/layouts/ListLayoutWithTags'
import { PageHeader } from '@/components/PageHeader'

export default function CavingPage() {
  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article className="color-caving">
        <div>
          <PageHeader imageSrc={banner} title="La Spéléologie" />
          <div className="prose prose-lg dark:prose-invert max-w-none py-4">
            <h2 className="">Texte à faire !!</h2>
            <p>
              La spéléologie est l&apos;exploration des cavités souterraines, qu&apos;elles soient
              naturelles ou artificielles. Elle permet de découvrir des paysages souterrains
              fascinants, d&apos;étudier la géologie et la biodiversité des milieux souterrains, et
              de pratiquer des activités sportives comme la descente en rappel, la randonnée
              souterraine ou encore la spéléologie scientifique.
            </p>
          </div>

          <div className="py-12">
            <div className="flex flex-wrap items-center justify-between">
              <h2 className="text-xl leading-9 font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14 dark:text-gray-100">
                Les dernières sorties spéléo du Clan
              </h2>
              <Link
                href={`/sorties/tags/speleologie`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              >
                Toutes les sorties &rarr;
              </Link>
            </div>
            <ul className="md:grid md:grid-cols-2 md:gap-x-8">
              {tripsReports
                .filter((trip) => trip.placeType === 'cave')
                .slice(0, 4)
                .map((trip) => (
                  <TripsListItem key={trip.id} trip={trip} />
                ))}
            </ul>
          </div>
          <footer>
            <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/canyonisme`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr; Le canyonisme
                </Link>
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href={`/club`}
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  Le club &rarr;
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}
