import { PageHeader } from '@/components/PageHeader'
import { Card } from '@/components/Card'
import { Link } from '@/components/Link'
import contactBanner from '@/assets/images/photos/other_04.jpg'
import { ContactForm } from '@/app/contact/ContactForm'
import { sendContactEmail } from '@/services/mailer'
import { generatePageMetadata } from '@/config/metadata'
import { Metadata } from 'next'

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact',
  description:
    'Contactez le Clan Spéléo des Troglodytes. Trouvez nos coordonnées, notre adresse et envoyez-nous un message pour toute question sur nos activités.',
  path: '/contact',
  keywords: ['contact', 'adresse', 'téléphone', 'email', 'local', 'Lyon'],
})

export default function ContactPage() {
  const sendEmailAction = async (_currentState: unknown, formData: FormData) => {
    'use server'

    // Honeypot validation - reject if the hidden field is filled
    const honeypot = formData.get('website') as string
    if (honeypot) {
      console.warn('Spam detected: honeypot field was filled')
      // Return success to avoid revealing the honeypot to bots
      return 'success'
    }

    const emailFields = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
    }

    try {
      await sendContactEmail(emailFields)
      return 'success'
    } catch (error) {
      console.error('Failed to send contact email:', error)
      return 'error'
    }
  }

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
                      Tu as des questions&nbsp;? Tu souhaites nous rejoindre&nbsp;? N&apos;hésite
                      pas à nous contacter&nbsp;!
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
                        <Link href="https://maps.app.goo.gl/ezzbEnmuuSUmBYtr6" className="group">
                          <p className="group-hover:text-primary-500 font-medium text-white transition-colors">
                            Clan Spéléo des Troglodytes
                          </p>
                          <p className="group-hover:text-primary-500 text-gray-300 transition-colors">
                            18 Rue Volney, 69008 Lyon
                          </p>
                        </Link>
                        <p>
                          <Link
                            className="hover:text-primary-500"
                            href="https://drive.google.com/file/d/1bjQF-UEYVml_HuTRQDqta7OFSh7-J9tT/view"
                          >
                            🗺️{' '}
                            <span className="underline decoration-dotted">
                              Voir le plan d'accès
                            </span>
                          </Link>
                        </p>
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
                        <ul>
                          <li>
                            <Link
                              href="mailto:initiations@troglos.fr"
                              className="hover:text-primary-500 text-white transition-colors"
                            >
                              <strong>initiations</strong>@troglos.fr
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="mailto:contact@troglos.fr"
                              className="hover:text-primary-500 text-white transition-colors"
                            >
                              <strong>contact</strong>@troglos.fr
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section du formulaire */}
                <div className="space-y-6">
                  <ContactForm sendEmailAction={sendEmailAction} />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-gray-100">
              Où nous croiser ?
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card
                title="Entrainement hebdomadaire"
                icon="🪢"
                style={{
                  '--card-bg': 'var(--color-purple-300)',
                  '--card-border': 'var(--color-purple-500)',
                }}
              >
                <p>
                  Sous réserve d'encadrants, nous proposons des entraînements à la progression sur
                  corde et à l'équipement <strong>tous les jeudis à 20h</strong>.
                </p>
                <p>
                  Ils ont lieu dans le Gymnase Nelson Paillou à Moulin à Vent, et nécessitent une
                  inscription préalable.
                </p>
                <p>
                  Ces entraînements sont ouverts aux débutant·e·s ou confirmé·e·s, et permettent de
                  se perfectionner dans un cadre convivial.
                </p>
              </Card>
              <Card
                title="Réunions mensuelles"
                icon="📅"
                style={{
                  '--card-bg': 'var(--color-pink-300)',
                  '--card-border': 'var(--color-pink-500)',
                }}
              >
                <p>
                  Rejoins-nous pour nos réunions chaque premier mercredi du mois à 20h30 au local du
                  club (18 rue Volney, 69008 Lyon). C'est l'occasion idéale pour découvrir la vie du
                  clan et être tenu·e au courant des prochaines sorties !
                </p>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
