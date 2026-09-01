import { Link, PrimaryLink } from '@/components/Link'
import { tripsReports } from '@/data/trips'
import caving from '@/assets/images/photos/caving_25.jpg'
import canyoning from '@/assets/images/photos/canyoning_10.jpg'
import { TripsListItem } from '@/components/layouts/ListLayoutWithTags'
import Image from 'next/image'
import { HomeCarousel } from '@/app/(activites)/HomeCarousel'
import { EventsCalendar } from '@/app/(activites)/EventsCalendar'
import { generatePageMetadata } from '@/config/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Spéléologie et Canyonisme à Lyon',
  description:
    "Des aventures souterraines et en eau vive avec le Clan Spéléo des Troglodytes, un club de spéléologie et canyonisme basé à Lyon. Rejoignez-nous pour vivre de calcaire et d'eau fraiche !",
  keywords: ['spéléologie', 'canyonisme', 'exploration', 'aventure'],
})

export default async function Home() {
  const sortedTrips = tripsReports.toSorted(
    (a, b) => new Date(b.tripDate).getTime() - new Date(a.tripDate).getTime()
  )
  const cavingTrips = sortedTrips.filter((trip) => trip.placeType === 'cave').slice(0, 3)
  const canyoningTrips = sortedTrips.filter((trip) => trip.placeType === 'canyon').slice(0, 3)

  return (
    <>
      <HomeCarousel />

      <section className="relative flex py-20">
        <div className="mx-auto max-w-7xl sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="group from-caving-900/80 border-caving-500/20 relative overflow-hidden rounded-2xl border bg-gradient-to-br to-slate-900/80 backdrop-blur-sm">
              <div className="absolute inset-0">
                <Image
                  src={caving}
                  alt=""
                  fill
                  className="object-cover object-center opacity-30 transition-opacity duration-500 group-hover:opacity-50"
                />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-between p-8 lg:p-12">
                <div>
                  <div className="mb-6 text-6xl">🦇</div>
                  <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">Spéléologie</h2>
                  <p className="mb-8 text-lg leading-relaxed text-gray-200">
                    Notre passion première ! De la simple balade souterraine aux expéditions les
                    plus ambitieuses, nous accompagnons tous les niveaux dans la découverte du monde
                    caché sous nos pieds.
                  </p>
                </div>
                <div>
                  <Link
                    href="/speleologie"
                    className="bg-caving-500 hover:bg-caving-400 inline-flex transform items-center gap-2 rounded-xl px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
                  >
                    Découvrir la spéléo
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>

            {/* Canyonisme */}
            <div className="group from-canyon-900/80 border-canyon-500/20 relative overflow-hidden rounded-2xl border bg-gradient-to-br to-slate-900/80 backdrop-blur-sm">
              <div className="absolute inset-0">
                <Image
                  src={canyoning}
                  alt=""
                  fill
                  className="object-cover object-center opacity-30 transition-opacity duration-500 group-hover:opacity-50"
                />
              </div>
              <div className="relative z-10 flex h-full flex-col justify-between p-8 lg:p-12">
                <div>
                  <div className="mb-6 text-6xl">🦎</div>
                  <h2 className="mb-6 text-3xl font-bold text-white lg:text-4xl">Canyonisme</h2>
                  <p className="mb-8 text-lg leading-relaxed text-gray-200">
                    Des parcours accessibles aux descentes les plus engagées, chaque canyon offre
                    son lot de sensations. L'été, rien ne vaut le plaisir de plonger dans les eaux
                    cristallines !
                  </p>
                </div>
                <div>
                  <Link
                    href="/canyonisme"
                    className="bg-canyon-500 hover:bg-canyon-400 inline-flex transform items-center gap-2 rounded-xl px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
                  >
                    Découvrir le canyon
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Dernières Sorties avec design moderne */}
      <section className="relative py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
              Les Dernières Aventures
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-300">
              Découvre les comptes-rendus de nos dernières sorties et laisse-toi inspirer pour tes
              prochaines aventures
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Sorties Canyon */}
            <div className="space-y-8">
              <h3 className="text-canyon-400 mb-6 flex items-center gap-3 text-2xl font-bold">
                <span className="text-3xl">🦎</span>
                Dernières sorties Canyon
              </h3>
              <ul className="space-y-6">
                {canyoningTrips.map((trip) => (
                  <div
                    key={trip.slug}
                    className="group from-canyon-900/20 border-canyon-500/20 hover:from-canyon-900/40 relative rounded-xl border bg-gradient-to-r to-transparent p-6 backdrop-blur-sm transition-all duration-300"
                  >
                    <TripsListItem trip={trip} handleHover={false} />
                  </div>
                ))}
              </ul>
            </div>

            {/* Sorties Spéléo */}
            <div className="space-y-8">
              <h3 className="text-caving-400 mb-6 flex items-center gap-3 text-2xl font-bold">
                <span className="text-3xl">🦇</span>
                Dernières sorties Spéléo
              </h3>
              <ul className="space-y-6">
                {cavingTrips.map((trip) => (
                  <div
                    key={trip.slug}
                    className="group from-caving-900/20 border-caving-500/20 hover:from-caving-900/40 relative rounded-xl border bg-gradient-to-r to-transparent p-6 backdrop-blur-sm transition-all duration-300"
                  >
                    <TripsListItem trip={trip} handleHover={false} />
                  </div>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA vers toutes les sorties */}
          <div className="mt-16 text-center">
            <PrimaryLink href="/sorties">
              Voir tous les comptes-rendus
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </PrimaryLink>
          </div>
        </div>
      </section>

      <EventsCalendar />
    </>
  )
}
