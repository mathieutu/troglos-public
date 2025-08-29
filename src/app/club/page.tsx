import { PageHeader } from '@/components/PageHeader'
import { Link } from '@/components/Link'
import { Card } from '@/components/Card'
import clubBanner from '@/assets/images/canyon/purcaraccia-1.jpg'

export default function ClubPage() {
  return (
    <>
      <PageHeader imageSrc={clubBanner} title="Le Clan Spéléo des Troglodytes" />

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Qui sommes-nous ?
          </h1>
        </div>

        <div className="py-12">
          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
                Notre histoire
              </h2>
              <p className="mb-6 text-lg leading-8">
                Le Clan Spéléo des Troglodytes est un club de spéléologie et de canyonisme basé à
                Lyon. Fondé par des passionné·e·s de sports souterrains et d'eau vive, nous
                explorons depuis des années les merveilles cachées de la région Auvergne-Rhône-Alpes
                et au-delà.
              </p>
              <p className="mb-6 text-lg leading-8">
                Notre club regroupe des spéléologues et des canyonistes de tous niveaux, des
                débutants aux experts, unis par la même passion pour la découverte et l'exploration
                des mondes souterrains et aquatiques.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
                Nos valeurs
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <Card title="🌿 Respect de l'environnement">
                  Nous pratiquons nos activités dans le respect total de l'environnement naturel, en
                  préservant les écosystèmes fragiles des grottes et des canyons.
                </Card>
                <Card title="🤝 Esprit d'équipe">
                  La solidarité et l'entraide sont au cœur de nos pratiques. Chaque sortie est une
                  aventure collective où chacun·e veille sur les autres.
                </Card>
                <Card title="🎯 Sécurité">
                  La sécurité est notre priorité absolue. Nous formons régulièrement nos membres aux
                  techniques de progression et de secours.
                </Card>
                <Card title="📚 Transmission">
                  Nous aimons partager nos connaissances et notre passion avec les nouveaux
                  arrivants, dans une ambiance conviviale et bienveillante.
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
                Nos activités
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="color-caving">
                  <Card title="🦇 Spéléologie">
                    <ul className="space-y-2">
                      <li>• Initiation et découverte</li>
                      <li>• Perfectionnement technique</li>
                      <li>• Exploration de nouvelles cavités</li>
                      <li>• Topographie souterraine</li>
                      <li>• Stages de formation</li>
                    </ul>
                  </Card>
                </div>
                <div className="color-canyon">
                  <Card title="🐟 Canyonisme">
                    <ul className="space-y-2">
                      <li>• Descente de canyons aquatiques</li>
                      <li>• Initiation aux techniques de corde</li>
                      <li>• Sorties découverte</li>
                      <li>• Perfectionnement technique</li>
                      <li>• Exploration de nouveaux itinéraires</li>
                    </ul>
                  </Card>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
                Rejoignez-nous !
              </h2>
              <p className="mb-6 text-lg leading-8">
                Vous êtes curieux·se de découvrir le monde souterrain ou les sports d'eau vive ?
                Vous cherchez un club convivial pour partager votre passion ? Le Clan Spéléo des
                Troglodytes vous accueille à bras ouverts !
              </p>
              <div className="flex gap-4">
                <Link
                  href="/nous-rejoindre"
                  className="bg-primary-600 hover:bg-primary-700 inline-flex items-center rounded-md border border-transparent px-6 py-3 text-base font-medium text-white"
                >
                  Découvrir nos initiations
                </Link>
                <Link
                  href="/sorties"
                  className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  Voir nos sorties
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
