import { ScrollTopAndComment } from '@/components/ScrollTopAndComment'
import { SectionContainer } from '@/components/SectionContainer'
import { Link } from '@/components/Link'
import banner from '@/assets/images/canyon/purcaraccia-2.jpg'
import { tripsReports } from '@/data/trips'
import { TripsListItem } from '@/components/layouts/ListLayoutWithTags'
import { PageHeader } from '@/components/PageHeader'

export default function CanyoningPage() {
  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article className="color-canyon">
        <div>
          <PageHeader imageSrc={banner} title="Le Canyonisme" />
          <div className="prose prose-lg dark:prose-invert max-w-none py-4">
            <h2 className="">Texte à faire !!</h2>
            <p>
              Le canyonisme est une activité de pleine nature qui consiste à descendre des canyons,
              des rivières ou des gorges en utilisant des techniques de randonnée, d&apos;escalade
              et de nage. C&apos;est une activité ludique et sportive qui permet de découvrir des
              paysages naturels magnifiques, de se rafraîchir dans les vasques naturelles et de
              pratiquer des activités aquatiques comme la nage, le saut et la descente en rappel.
            </p>
          </div>

          <div className="py-12">
            <div className="flex flex-wrap items-center justify-between">
              <h2 className="text-xl leading-9 font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14 dark:text-gray-100">
                Les dernières sorties canyon du Clan
              </h2>
              <Link
                href={`/sorties/tags/canyonisme`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              >
                Toutes les sorties &rarr;
              </Link>
            </div>
            <ul className="md:grid md:grid-cols-2 md:gap-8 mt-4">
              {tripsReports
                .filter((trip) => trip.placeType === 'canyon')
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
                  href="/speleologie"
                  className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr; La spéléologie
                </Link>
              </div>
              <div className="pt-4 xl:pt-8">
                <Link
                  href="/club"
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
