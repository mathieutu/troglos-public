import { PageHeader } from '@/components/PageHeader'
import { Link, PrimaryLink } from '@/components/Link'
import { Card } from '@/components/Card'
import banner from '@/assets/images/photos/caving_02.jpg'
import whatsappQrCode from '@/assets/images/whatsapp_initiations_qrcode.jpeg'
import yaentrainementQrCode from '@/assets/images/yaentrainement_qrcode.png'
import { generatePageMetadata } from '@/config/metadata'
import { Metadata } from 'next'
import Image from 'next/image'
import { HideDetails } from '@/app/nous-rejoindre/HideDetails'

export const metadata: Metadata = generatePageMetadata({
  title: 'Nous Rejoindre - Initiations et Adhésions',
  description:
    "Rejoignez le Clan Spéléo des Troglodytes ! Découvrez nos initiations en spéléologie et canyonisme, les modalités d'adhésion et les formations pour débutants.",
  path: '/nous-rejoindre',
  keywords: ['rejoindre', 'initiation', 'adhésion', 'débutant', 'formation', 'inscription'],
})

export default async function NousRejoindrePage() {
  return (
    <>
      <PageHeader imageSrc={banner} title="Nous rejoindre" />

      <div className="prose-lg prose-invert max-w-none">
        <section>
          <p>
            Rejoins des spéléologues et canyonistes pour vivre de calcaire et d'eau fraîche ! Tu as
            toujours rêvé d'explorer les mystères des profondeurs de la Terre ou de t'immerger dans
            les remous de la rivière ? Notre club de spéléologie et canyonisme est là pour toi !
          </p>
          <p>
            Nous acceptons les débutant·e·s souhaitant se former à la pratique avec plaisir. Avant
            toute inscription au club, il est demandé de réaliser au minimum une initiation avec le
            clan pour découvrir nos activités et notre esprit d'équipe.
          </p>
          <p>
            Une condition physique normale suffit. Nous adaptons les sorties au niveau du groupe et
            privilégions la découverte à la performance. L'important est d'avoir l'esprit aventureux
            !
          </p>
        </section>

        <section>
          <h2>Nos journées d'initiation</h2>
          <div className="flex items-center justify-between gap-4">
            <p>
              Des sorties découvertes sont organisées toute l'année, sur demande et selon les
              disponibilités des encadrants bénévoles. Les encadrants proposent des sorties
              régulièrement, et tu pourras t'inscrire à celle qui t'intéresse.{' '}
              <HideDetails>
                Pour être informé·e des prochaines sorties, n'hésite pas à rejoindre le{' '}
                <Link href="https://chat.whatsapp.com/C6oLYI2TfjSEak3r8WW0EH" className="link">
                  {' '}
                  groupe WhatsApp dédié
                </Link>{' '}
                en scannant le QR code ou en envoyant un mail à{' '}
                <Link className="link" href="mailto:initiations@troglos.fr">
                  initiations@troglos.fr
                </Link>
              </HideDetails>
            </p>
            <HideDetails>
              <Image
                src={whatsappQrCode}
                alt="QR Code pour rejoindre le groupe WhatsApp des initiations"
                className="h-32 w-32 md:h-40 md:w-40"
              />
            </HideDetails>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-4">
              <Card
                title="Point de ralliement"
                icon="📍"
                style={{
                  '--card-bg': 'var(--color-orange-300)',
                  '--card-border': 'var(--color-orange-500)',
                }}
              >
                <p>
                  Nous nous retrouvons au local du club où nous préparons ensemble le matériel. Cela
                  permet également d'optimiser le transport en voiture (environ 1h de trajet depuis
                  Lyon pour accéder aux grottes et canyons d'initiation).
                </p>
              </Card>
              <Card
                title="Ce dont tu as besoin"
                icon="🎒"
                style={{
                  '--card-bg': 'var(--color-red-300)',
                  '--card-border': 'var(--color-red-500)',
                }}
              >
                <p>
                  <ul className="not-prose list-inside list-disc">
                    <li>Vêtements confortables et résistants</li>
                    <li>
                      Une combi neoprene pour le canyonisme{' '}
                      <small className="text-xs italic">
                        (nous t'accompagnons pour en louer une)
                      </small>
                    </li>
                    <li>Chaussures de randonnée robustes</li>
                    <li>Esprit aventureux !</li>
                  </ul>
                </p>
                <p>Le reste sera prêté par le club.</p>
              </Card>
            </div>
            <div className="grid gap-4">
              <Card
                title="Ce que tu découvriras"
                icon="📚"
                style={{
                  '--card-bg': 'var(--color-blue-300)',
                  '--card-border': 'var(--color-blue-500)',
                }}
              >
                <p>
                  <ul className="not-prose list-inside list-disc">
                    <li>Les bases de la spéléologie et du canyonisme</li>
                    <li>L'utilisation de l'équipement et les techniques de progression</li>
                    <li>Des formations géologiques, des animaux</li>
                    <li>
                      Les principes de sécurité essentiels pour des aventures en toute confiance
                    </li>
                  </ul>
                </p>
              </Card>

              <Card
                title="Participation financière"
                icon="💰"
                style={{
                  '--card-bg': 'var(--color-emerald-300)',
                  '--card-border': 'var(--color-emerald-500)',
                }}
              >
                <p>
                  Les encadrants sont bénévoles, mais il faudra néanmoins prévoir un budget d'une
                  trentaine d'euros (tarifs spécifiques pour jeunes, étudiants et demandeurs
                  d'emploi) pour les frais de prêt de matériel et d'assurance, plus le
                  covoiturage.{' '}
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section>
          <h2>Et sinon ?</h2>
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
                corde et à l'équipement <strong>tous les jeudis de 20h à 22h</strong>.
              </p>
              <p>
                Ils ont lieu dans le{' '}
                <Link href="https://maps.app.goo.gl/f6q3YUAQd27MvgnA9" className="link">
                  Gymnase Nelson Paillou
                </Link>{' '}
                à Moulin à Vent, et nécessitent une inscription préalable.
              </p>
              <p>
                Ces entraînements sont ouverts aux débutant·e·s ou confirmé·e·s, et permettent de se
                perfectionner dans un cadre convivial.
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
                club (
                <Link href="https://maps.app.goo.gl/ezzbEnmuuSUmBYtr6">
                  18 rue Volney, 69008 Lyon
                </Link>
                ). On y parle des actualités du club et fédérales, des sorties effectuées ou à
                venir, de sujets techniques ou scientifiques, etc.
              </p>
            </Card>
          </div>
          <HideDetails>
            <div className="flex items-center justify-between gap-4">
              <p>
                Les entrainements et réunions sont visibles sur la plateforme{' '}
                <Link
                  href="https://lestroglos.yaentrainement.fr/public_join?pass=afond"
                  className="link"
                >
                  {' '}
                  Yaentrainement
                </Link>
                . Il est important de t'inscrire, au plus tôt dans la mesure du possible, pour que
                nous adaptions le nombre d'encadrants et la quantité de matériel. Certaines séances
                sont parfois annulées par manque d'encadrant bénévole. C'est alors annoncé sur
                YaEntrainement. Stay tuned !
              </p>
              <Image
                src={yaentrainementQrCode}
                alt="QR Code pour s'inscrire à Yaentrainement"
                className="h-32 w-32 md:h-40 md:w-40"
              />
            </div>
          </HideDetails>
        </section>

        <section>
          <h2>Comment nous rejoindre ?</h2>
          <div className="grid w-full gap-8">
            <Card
              title="Contacte-nous"
              href="/contact"
              linkTitle="Nous contacter"
              icon={
                <span className="flex size-8 items-center justify-center rounded-full bg-green-500 text-base">
                  1
                </span>
              }
              style={{
                '--card-bg': 'var(--color-green-200)',
                '--card-border': 'var(--color-green-500)',
                '--card-bg-hover': 'var(--color-green-300)',
              }}
            >
              <p>
                Prends contact avec nous pour discuter de tes envies et de ton niveau. Nous
                t'orienterons vers l'activité qui te correspond le mieux et t'informerons des
                prochaines sorties de découverte.
              </p>
            </Card>
            <Card
              title="Participe à une initiation"
              icon={
                <span className="flex size-8 items-center justify-center rounded-full bg-yellow-600 text-base">
                  2
                </span>
              }
              href="/sorties/tags/initiation#trips-list"
              linkTitle="Voir les dernières sorties"
              style={{
                '--card-bg': 'var(--color-yellow-200)',
                '--card-border': 'var(--color-yellow-500)',
                '--card-bg-hover': 'var(--color-yellow-300)',
              }}
            >
              <p>
                Rejoins-nous sur un entrainement en gymnase, viens nous voir en réunion Club, et
                pour une sortie découverte obligatoire avant l'adhésion. C'est l'occasion parfaite
                de découvrir nos disciplines et l'esprit du clan dans un cadre sécurisé.
              </p>
            </Card>
            <Card
              title="Adhère au club"
              href="/club"
              linkTitle="En savoir plus sur le club"
              icon={
                <span className="flex size-8 items-center justify-center rounded-full bg-indigo-600 text-base">
                  3
                </span>
              }
              style={{
                '--card-bg': 'var(--color-indigo-200)',
                '--card-border': 'var(--color-indigo-500)',
                '--card-bg-hover': 'var(--color-indigo-300)',
              }}
            >
              <p>
                Si l'expérience te plaît, tu peux devenir membre du clan et profiter de toutes nos
                activités, formations et de l'accès à notre matériel. Il faut compter environ 150 €
                l'année pour une personne, en comprenant la cotisation club, la licence à la
                fédération française et un premier niveau d'assurance personnelle.
              </p>
              <p>
                Le club continue à prêter le matériel aux nouveaux adhérents au long de leur
                première année, et les accompagne pour l'achat de leur matériel (conseils, commandes
                groupées avec réductions négociées, etc.).
              </p>
            </Card>
          </div>
        </section>

        <section>
          <h2>Prêt·e pour l'aventure ?</h2>
          <p>
            Tu rêves d'explorer les mystères des profondeurs ou de t'immerger dans les remous des
            rivières ? Rejoins la Clan des Troglos et découvre un monde fascinant fait de calcaire
            et d'eau fraîche ! N'hésite pas à nous contacter pour être au courant des prochaines
            initiations ou passer nous voir lors d'un entraînement.
          </p>
        </section>
      </div>

      <div className="">
        <PrimaryLink href="/contact">Nous contacter</PrimaryLink>
      </div>
    </>
  )
}
