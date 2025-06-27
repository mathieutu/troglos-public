import { Link } from '@/components/Link'
import { tripsReports } from '@/data/trips'
import { Card } from '@/components/Card'
import caving from '@/assets/images/guiers.png'
import canyoning from '@/assets/images/canyon/purcaraccia-1.jpg'
import { TripsListItem } from '@/components/layouts/ListLayoutWithTags'
import { TRIPS_PER_PAGE } from '@/config/config'

export default async function Home() {
  const tripsToDisplay = tripsReports.slice(0, TRIPS_PER_PAGE)
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            <span className="text-caving-500">Spéléologie</span> et{' '}
            <span className="text-canyon-500">Canyonisme</span> à Lyon
          </h1>
        </div>
        <div className="py-12">
          <div className="-m-4 flex flex-wrap justify-center">
            <div className="color-caving md:w-1/2">
              <Card
                title="🦇 Spéléologie"
                description="Le cœur de nos activités. Initiation, découverte, perfectionnement, exploration, chacun·e trouvera ce qu’iel recherche. TBD !!"
                imgSrc={caving}
                href="/speleologie"
              />
            </div>
            <div className="color-canyon md:w-1/2">
              <Card
                title="🐟 Canyonisme"
                description="Faciles et ludiques, ou longs et techniques, il y en a pour tous les goûts. En période estivale, on adore se jeter dans les vasques fraîches ! TBD !!"
                imgSrc={canyoning}
                href="/canyonisme"
              />
            </div>
          </div>
        </div>
        <div className="py-12">
          <h2 className="text-xl leading-9 font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-10 md:text-4xl md:leading-14 dark:text-gray-100">
            Les dernières sorties du Clan
          </h2>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <ul className="flex flex-col">
              <TripsListItem trip={tripsToDisplay[0]} />
              <TripsListItem trip={tripsToDisplay[2]} />
              <TripsListItem trip={tripsToDisplay[4]} />
            </ul>
            <ul className="flex flex-col">
              <TripsListItem trip={tripsToDisplay[1]} />
              <TripsListItem trip={tripsToDisplay[3]} />
              <TripsListItem trip={tripsToDisplay[5]} />
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-end text-base leading-6 font-medium">
        <Link href="/sorties" className="link" aria-label="All posts">
          Tous les Comptes Rendus &rarr;
        </Link>
      </div>
    </>
  )
}
