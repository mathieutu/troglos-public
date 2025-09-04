import { ScrollTopAndComment } from '@/components/ScrollTopAndComment'
import { SectionContainer } from '@/components/SectionContainer'
import { Link } from '@/components/Link'
import banner from '@/assets/images/photos/caving_23.jpg'
import { tripsReports } from '@/data/trips'
import { TripsListItem } from '@/components/layouts/ListLayoutWithTags'
import { PageHeader } from '@/components/PageHeader'
import { generatePageMetadata } from '@/config/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Spéléologie - Exploration souterraine',
  description:
    'Découvrez la spéléologie avec le Clan Spéléo des Troglodytes. Explorez les grottes, apprenez les techniques de progression sur corde et découvrez le monde souterrain.',
  path: '/speleologie',
  keywords: [
    'spéléologie',
    'grottes',
    'cavités',
    'progression',
    'corde',
    'souterrain',
    'exploration',
  ],
})

export default function CavingPage() {
  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article className="color-caving">
        <div>
          <PageHeader imageSrc={banner} title="La Spéléologie" />
          <div className="prose prose-lg dark:prose-invert max-w-none py-4">
            <p>
              La spéléologie est l&apos;exploration des cavités souterraines, qu&apos;elles soient
              naturelles ou artificielles. Elle permet de découvrir des paysages fascinants,
              d&apos;étudier la géologie et la biodiversité des milieux souterrains.
            </p>

            <p>
              En tant que pratique sportive, la spéléologie se distingue des autres sports de
              montagne par son environnement unique et ses contraintes spécifiques. Elle nous plonge
              dans l&apos;obscurité totale où l&apos;éclairage artificiel devient vital, dans des
              espaces parfois gigantesques, ou très exigus. La dimension tridimensionnelle est
              omniprésente : on progresse aussi bien verticalement qu&apos;horizontalement, en
              rampant, ou en opposition selon la morphologie des galeries. Cela demande une bonne
              condition physique, de l&apos;endurance, de la souplesse et de la coordination.
            </p>

            <p>
              La spéléologie est probablement le sport qui demande le plus de manipulation de corde,
              tant pour la progression que pour l&apos;équipement. Les Single Rope Techniques (SRT)
              sont au cœur de notre discipline : en verticale, les spéléologues vivent littéralement
              sur la corde. Contrairement à l&apos;escalade où la corde est une sécurité, ici elle
              devient notre moyen de transport principal. Maîtriser les techniques de descente en
              rappel, de remontée sur bloqueurs, et savoir équiper une cavité avec précision sont
              des compétences fondamentales qui s&apos;acquièrent progressivement.
            </p>

            <p>
              La spéléologie est enfin une aventure humaine. Elle se pratique en équipe, où la
              solidarité, la confiance et la communication sont essentielles pour assurer la
              sécurité de chacun. Chaque sortie est une expérience unique, riche en émotions et en
              découvertes, qui renforce les liens entre les participants.
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
            <ul className="mt-6 grid gap-6 md:grid-cols-2 md:gap-8">
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
