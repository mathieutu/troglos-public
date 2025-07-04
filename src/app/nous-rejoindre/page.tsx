import { PageHeader } from '@/components/PageHeader'
import { Link } from '@/components/Link'
import { Card } from '@/components/Card'
import initiationBanner from '@/assets/images/caving/marcel.jpg'
import cavingImage from '@/assets/images/caving/guiers.png'
import canyonImage from '@/assets/images/canyon/purcaraccia-2.jpg'

export default function InitiationsPage() {
  return (
    <>
      <PageHeader imageSrc={initiationBanner} title="Nous rejoindre" />

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <p className="text-lg leading-8 text-gray-500 dark:text-gray-400">
            Que vous soyez débutant·e ou expérimenté·e, nous avons des activités adaptées à tous les
            niveaux. Rejoignez-nous pour vivre des aventures inoubliables !
          </p>
        </div>

        <div className="py-12">
          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100">
              Nos initiations
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="color-caving">
                <Card title="🦇 Initiation Spéléologie" imgSrc={cavingImage} href="/contact">
                  Découvrez le monde souterrain lors d'une première sortie encadrée. Matériel
                  fourni, aucune expérience requise !
                </Card>
              </div>
              <div className="color-canyon">
                <Card title="🐟 Initiation Canyonisme" imgSrc={canyonImage} href="/contact">
                  Plongez dans l'univers des canyons aquatiques. Descentes en rappel, toboggans
                  naturels et vasques rafraîchissantes !
                </Card>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100">
              Comment nous rejoindre ?
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card title="1️⃣ Contactez-nous" href="/contact">
                Prenez contact avec nous pour discuter de vos envies et de votre niveau. Nous vous
                orienterons vers l'activité qui vous correspond le mieux.
              </Card>
              <Card title="2️⃣ Participez à une sortie" href="/sorties">
                Rejoignez-nous pour une sortie d'initiation ou une activité adaptée à votre niveau.
                C'est l'occasion parfaite pour découvrir notre club !
              </Card>
              <Card title="3️⃣ Adhérez au club" href="/club">
                Si l'expérience vous plaît, vous pouvez devenir membre du club et profiter de toutes
                nos activités et de notre matériel.
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100">
              Informations pratiques
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card title="💰 Tarifs">
                <ul className="space-y-2">
                  <li>• Sortie découverte : 25€</li>
                  <li>• Adhésion annuelle : 60€</li>
                  <li>• Sortie membre : 10€</li>
                  <li>• Stage perfectionnement : 40€</li>
                </ul>
                <p className="mt-4 text-sm opacity-75">
                  * Matériel technique fourni pour les initiations
                </p>
              </Card>
              <Card title="🎒 Matériel">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">
                      Fourni par le club :
                    </h4>
                    <p className="text-sm">
                      Casque, baudrier, longes, descendeur, éclairage, combinaison
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">À apporter :</h4>
                    <p className="text-sm">
                      Vêtements chauds, chaussures de sport, gants, sac étanche
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100">
              Foire aux questions
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card title="❓ Faut-il avoir de l'expérience pour commencer ?">
                Absolument pas ! Nos sorties découverte sont spécialement conçues pour les
                débutants. Nos encadrants expérimentés vous accompagneront pas à pas.
              </Card>
              <Card title="🏃‍♂️ Y a-t-il des conditions physiques particulières ?">
                Une condition physique normale suffit pour la plupart de nos activités. Nous
                adaptons les sorties au niveau du groupe et privilégions la découverte à la
                performance.
              </Card>
              <Card title="📅 Quelle est la fréquence des sorties ?">
                Nous organisons des sorties tous les week-ends, et parfois en semaine. Vous pouvez
                consulter notre calendrier et vous inscrire aux sorties qui vous intéressent.
              </Card>
              <Card title="🤔 Peut-on essayer avant de s'engager ?">
                Bien sûr ! Nous encourageons les personnes intéressées à participer à une ou deux
                sorties découverte avant de prendre leur adhésion. C'est le meilleur moyen de voir
                si notre club vous correspond.
              </Card>
            </div>
          </section>

          <section className="text-center">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
              Prêt·e à nous rejoindre ?
            </h2>
            <p className="mb-8 text-lg text-gray-500 dark:text-gray-400">
              N'hésitez pas à nous contacter pour toute question ou pour vous inscrire à une sortie
              !
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/contact"
                className="bg-primary-600 hover:bg-primary-700 inline-flex items-center rounded-md border border-transparent px-6 py-3 text-base font-medium text-white"
              >
                Nous contacter
              </Link>
              <Link
                href="/sorties"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Voir les prochaines sorties
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
