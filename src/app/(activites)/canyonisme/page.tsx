import { ScrollTopAndComment } from '@/components/ScrollTopAndComment'
import { SectionContainer } from '@/components/SectionContainer'
import { Link } from '@/components/Link'
import banner from '@/assets/images/photos/canyoning_11.jpg'
import { tripsReports } from '@/data/trips'
import { TripsListItem } from '@/components/layouts/ListLayoutWithTags'
import { PageHeader } from '@/components/PageHeader'
import { generatePageMetadata } from '@/config/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Canyonisme - Descente de Canyons et Torrents',
  description:
    'Découvrez le canyonisme avec le Clan Spéléo des Troglodytes. Apprenez les techniques de descente en rappel, sauts et nage dans les plus beaux canyons.',
  path: '/canyonisme',
  keywords: ['canyonisme', 'canyon', 'rappel', 'sauts', 'nage', 'torrents', 'eau vive'],
})

export default function CanyoningPage() {
  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article className="color-canyon">
        <div>
          <PageHeader imageSrc={banner} title="Le Canyonisme" />
          <div className="prose prose-lg dark:prose-invert max-w-none py-4">
            <p>
              Le canyonisme est une activité de pleine nature qui consiste à descendre des torrents
              et des gorges en combinant marche, nage, glissades, sauts et descentes en rappel.
              Cette discipline offre une approche unique des paysages aquatiques, permettant de
              découvrir des lieux souvent inaccessibles par d&apos;autres moyens.
            </p>

            <p>
              En tant que pratique sportive, le canyonisme se distingue par sa polyvalence et son
              adaptabilité aux conditions naturelles. Contrairement à d&apos;autres sports de
              montagne, il faut composer avec les éléments : débit d&apos;eau, température,
              météorologie. Cette activité sollicite l&apos;ensemble du corps et demande une bonne
              condition physique générale, de l&apos;agilité pour les passages techniques et une
              aisance aquatique pour évoluer dans les vasques et les courants.
            </p>

            <p>
              Le canyonisme utilise également les techniques de corde, mais de manière différente de
              la spéléologie. Les descentes en rappel se font souvent dans l&apos;eau ou sous les
              cascades, nécessitant des techniques spécifiques pour gérer les courants et la force
              de l&apos;eau. La lecture du canyon et l&apos;évaluation des conditions
              hydrométéorologiques sont des compétences essentielles pour la sécurité.
            </p>

            <p>
              Le canyonisme est aussi une activité de groupe par excellence, où la cohésion et
              l&apos;entraide prennent tout leur sens. Chaque participant contribue à la sécurité
              collective, que ce soit pour sécuriser un saut, aider à la sortie d&apos;une vasque ou
              partager les sensations de cette aventure aquatique unique.
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
            <ul className="mt-4 md:grid md:grid-cols-2 md:gap-8">
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
