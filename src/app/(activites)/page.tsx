import { Link } from '@/components/Link'
import { tripsReports } from '@/data/trips'
import caving from '@/assets/images/caving/guiers.png'
import canyoning from '@/assets/images/canyon/purcaraccia-1.jpg'
import cavingFitoja from '@/assets/images/caving/fitoja.jpg'
import cavingMarcel from '@/assets/images/caving/marcel.jpg'
import canyoningPurcaraccia2 from '@/assets/images/canyon/purcaraccia-2.jpg'
import { TripsListItem } from '@/components/layouts/ListLayoutWithTags'
import { Carousel } from '@/components/Carousel'
import Image from 'next/image'

export default async function Home() {
  const cavingTrips = tripsReports.filter((trip) => trip.placeType === 'cave').slice(0, 3)
  const canyoningTrips = tripsReports.filter((trip) => trip.placeType === 'canyon').slice(0, 3)

  const heroSlides = [
    {
      title: 'Spéléologie',
      description: 'Explorez les profondeurs mystérieuses des grottes et cavernes. Du débutant à l\'expert, découvrez un monde souterrain fascinant.',
      image: cavingMarcel,
      href: '/speleologie',
      colorClass: 'color-caving'
    },
    {
      title: 'Canyonisme',
      description: 'Dévalez les gorges et cascades dans des paysages à couper le souffle. Sensations garanties dans des cadres naturels exceptionnels.',
      image: canyoningPurcaraccia2,
      href: '/canyonisme',
      colorClass: 'color-canyon'
    }
  ]

  return (
    <>
      {/* Hero Section avec Carousel */}
      <section className="relative h-screen min-h-[600px] w-full">
        <Carousel slides={heroSlides} autoPlay={true} autoPlayInterval={7000} />

        {/* Titre principal en overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="text-center max-w-6xl px-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl">
              <span className="text-caving-400 drop-shadow-lg">Spéléologie</span> et{' '}
              <span className="text-canyon-400 drop-shadow-lg">Canyonisme</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto drop-shadow-lg">
              À Lyon, découvrez les activités nature du Clan des Troglos
            </p>
          </div>
        </div>
      </section>

      {/* Section Activités avec design moderne */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Spéléologie */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-caving-900/80 to-slate-900/80 backdrop-blur-sm border border-caving-500/20">
              <div className="absolute inset-0">
                <Image
                  src={caving}
                  alt="Spéléologie"
                  fill
                  className="object-cover object-center opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                />
              </div>
              <div className="relative z-10 p-8 lg:p-12">
                <div className="text-6xl mb-6">🦇</div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Spéléologie
                </h2>
                <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                  Le cœur de nos activités. Initiation, découverte, perfectionnement, exploration,
                  chacun·e trouvera ce qu'iel recherche dans les profondeurs de la terre.
                </p>
                <Link
                  href="/speleologie"
                  className="inline-flex items-center gap-2 bg-caving-500 hover:bg-caving-400 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Découvrir la spéléo
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Canyonisme */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-canyon-900/80 to-slate-900/80 backdrop-blur-sm border border-canyon-500/20">
              <div className="absolute inset-0">
                <Image
                  src={canyoning}
                  alt="Canyonisme"
                  fill
                  className="object-cover object-center opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                />
              </div>
              <div className="relative z-10 p-8 lg:p-12">
                <div className="text-6xl mb-6">🐟</div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Canyonisme
                </h2>
                <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                  Faciles et ludiques, ou longs et techniques, il y en a pour tous les goûts. En
                  période estivale, on adore se jeter dans les vasques fraîches !
                </p>
                <Link
                  href="/canyonisme"
                  className="inline-flex items-center gap-2 bg-canyon-500 hover:bg-canyon-400 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105"
                >
                  Découvrir le canyon
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Dernières Sorties avec design moderne */}
      <section className="relative py-20 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
        <div className="absolute inset-0 opacity-5">
          <Image
            src={cavingFitoja}
            alt="Background"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Les Dernières Aventures
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez les comptes-rendus de nos dernières sorties et laissez-vous inspirer pour vos prochaines aventures
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Sorties Canyon */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-canyon-400 mb-6 flex items-center gap-3">
                <span className="text-3xl">🐟</span>
                Dernières sorties Canyon
              </h3>
              <div className="space-y-6">
                {canyoningTrips.map((trip, index) => (
                  <div key={trip.slug} className="group relative bg-gradient-to-r from-canyon-900/20 to-transparent backdrop-blur-sm border border-canyon-500/20 rounded-xl p-6 hover:from-canyon-900/40 transition-all duration-300">
                    <TripsListItem trip={trip} />
                  </div>
                ))}
              </div>
            </div>

            {/* Sorties Spéléo */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-caving-400 mb-6 flex items-center gap-3">
                <span className="text-3xl">🦇</span>
                Dernières sorties Spéléo
              </h3>
              <div className="space-y-6">
                {cavingTrips.map((trip, index) => (
                  <div key={trip.slug} className="group relative bg-gradient-to-r from-caving-900/20 to-transparent backdrop-blur-sm border border-caving-500/20 rounded-xl p-6 hover:from-caving-900/40 transition-all duration-300">
                    <TripsListItem trip={trip} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA vers toutes les sorties */}
          <div className="text-center mt-16">
            <Link
              href="/sorties"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 text-white font-bold py-4 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Voir tous les comptes-rendus
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
