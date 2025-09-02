import { PageHeader } from '@/components/PageHeader'
import { Card } from '@/components/Card'
import { Link } from '@/components/Link'
import contactBanner from '@/assets/images/photos/caving_25.jpg'

export default function ContactPage() {
  return (
    <>
      <PageHeader imageSrc={contactBanner} title="Nous contacter" />

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="py-12">
          <section className="mb-16">
            <div>
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                {/* Section des coordonnées */}
                <div className="space-y-8">
                  <div>
                    <p className="text-lg leading-relaxed text-gray-300">
                      Vous avez des questions ? Vous souhaitez nous rejoindre ? N&apos;hésitez pas à
                      nous contacter !
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gray-600">
                          <svg
                            className="h-4 w-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-white">Clan Spéléo des Troglodytes</p>
                        <p className="text-gray-300">18 Rue Volney, 69008 Lyon</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-gray-600">
                          <svg
                            className="h-4 w-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div>
                        <Link
                          href="mailto:contact@troglos.fr"
                          className="font-medium text-white transition-colors hover:text-gray-300"
                        >
                          contact@troglos.fr
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section du formulaire */}
                <div className="space-y-6">
                  <form className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Nom*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full rounded-lg border border-gray-600 bg-slate-400/5 px-4 py-3 text-white placeholder-gray-400 transition-all focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full rounded-lg border border-gray-600 bg-slate-400/5 px-4 py-3 text-white placeholder-gray-400 transition-all focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full rounded-lg border border-gray-600 bg-slate-400/5 px-4 py-3 text-white placeholder-gray-400 transition-all focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-gray-300"
                      >
                        Message*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full resize-none rounded-lg border border-gray-600 bg-slate-400/5 px-4 py-3 text-white placeholder-gray-400 transition-all focus:border-transparent focus:ring-2 focus:ring-gray-500 focus:outline-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full rounded-lg bg-gray-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-none"
                      >
                        Envoyer le message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100">
              Où nous croiser ?
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card title="Réunions">
                <div className="">
                  <p>
                    Nous nous réunissons tous les <strong>premiers mercredi du mois</strong> à 20h,
                    au local des Troglos.
                  </p>

                  <p>
                    Nous y discutons des sorties passées, à venir, des projets du club et de la vie
                    associative.
                  </p>
                  <p>Les réunions sont ouvertes à tous, venez nous rencontrer !</p>
                </div>
              </Card>

              <Card title="Entrainement">
                <div className="space-y-2">
                  <p>
                    Sous réserve d'encadrants, nous proposons des entraînements à la progression sur
                    corde et à l'équipement <strong>tous les jeudis à 20h</strong>.
                  </p>
                  <p>
                    {' '}
                    Ils ont lieu dans le Gymnase Nelson Paillou, 69008 Lyon, et nécessitent une
                    inscription préalable.
                  </p>
                  <p>
                    Ces entraînements sont ouverts aux débutant·e·s ou confirmé·e·s, et permettent
                    de se perfectionner dans un cadre convivial.
                  </p>
                </div>
              </Card>
            </div>
          </section>

          <section className="text-center">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
              Vous avez encore des questions ?
            </h2>
            <p className="mb-8 text-lg text-gray-500 dark:text-gray-400">
              N'hésitez pas à consulter notre FAQ ou à participer à une de nos réunions
              hebdomadaires !
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/nous-rejoindre"
                className="bg-primary-600 hover:bg-primary-700 inline-flex items-center rounded-md border border-transparent px-6 py-3 text-base font-medium text-white"
              >
                Voir la FAQ
              </Link>
              <Link
                href="/sorties"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                Voir les sorties
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
