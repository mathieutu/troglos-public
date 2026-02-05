import { PageHeader } from '@/components/PageHeader'
import { Link, PrimaryLink } from '@/components/Link'
import { Card } from '@/components/Card'
import clubBanner from '@/assets/images/photos/other_02.jpg'
import { generatePageMetadata } from '@/config/metadata'
import { Metadata } from 'next'
import Image from 'next/image'
import aura from '@/assets/images/partners/aura.png'
import lyon from '@/assets/images/partners/lyon.png'
import ffs from '@/assets/images/partners/ffs.png'

export const metadata: Metadata = generatePageMetadata({
  title: 'Le Club',
  description:
    "Découvrez le Clan Spéléo des Troglodytes, club de spéléologie et canyonisme basé à Lyon depuis plus de 60 ans. Une communauté de passionnés unis par l'exploration.",
  path: '/club',
  keywords: ['club', 'histoire', 'spéléologie', 'canyonisme', 'Lyon', 'association'],
})

export default function ClubPage() {
  return (
    <>
      <PageHeader imageSrc={clubBanner} title="Le Clan Spéléo des Troglodytes" />

      <div className="prose-lg prose-invert max-w-none">
        <section>
          <p>
            Le Clan Spéléo des Troglodytes est un club de spéléologie et de canyonisme basé à Lyon.
            Fondé par des passionné·e·s de sports souterrains et d'eau vive, nous explorons depuis
            plus de 60 ans les merveilles cachées de la région Auvergne-Rhône-Alpes et au-delà.
          </p>
          <p>
            Notre club regroupe des spéléologues et des canyonistes de tous niveaux, des
            débutant·e·s aux expert·e·s, uni·e·s par la même passion pour la découverte et
            l'exploration du milieu. Nous comptons une cinquantaine de membres, dont 40% de femmes,
            avec une moyenne d'âge de 35 ans (et une médiane à 34). Notre conseil d'administration
            est, lui, paritaire. <em>(statistiques fin 2025)</em>.
          </p>
          <p>Tous les membres sont bénévoles.</p>
        </section>

        <section>
          <h2>Nos valeurs</h2>
          <div className="grid gap-x-8 md:grid-cols-2">
            <div className="flex flex-col gap-8">
              <Card
                title="Esprit d'équipe"
                icon="🤝"
                style={{
                  '--card-bg': 'var(--color-blue-300)',
                  '--card-border': 'var(--color-blue-500)',
                }}
              >
                <p>
                  La solidarité et l'entraide sont au cœur de nos pratiques. Nous avons pour coutume
                  de dire que nos disciplines sont des sports collectifs. Chaque sortie est une
                  aventure de groupe où chacun·e veille sur les autres.
                </p>
              </Card>
              <Card
                title="Sécurité"
                icon="🛡️"
                style={{
                  '--card-bg': 'var(--color-red-300)',
                  '--card-border': 'var(--color-red-500)',
                }}
              >
                <p>
                  La sécurité est notre priorité absolue. Les techniques de progression et de
                  secours font partie intégrante de la formation de nos membres. Notre matériel est
                  scrupuleusement suivi selon les normes en vigueur.
                </p>
              </Card>
              <Card
                title="Implication fédérale"
                icon="🏛️"
                style={{
                  '--card-bg': 'var(--color-purple-300)',
                  '--card-border': 'var(--color-purple-500)',
                }}
              >
                <p>
                  Actif dans le Spéléo Secours, le Comité Départemental, ou encore la Fédération
                  Française de Spéléologie, le clan contribue activement au développement et à la
                  promotion de nos disciplines.
                </p>
              </Card>
            </div>
            <div className="flex flex-col gap-8">
              <Card
                title="Inclusion et diversité"
                icon="🌈"
                style={{
                  '--card-bg': 'var(--color-pink-300)',
                  '--card-border': 'var(--color-pink-500)',
                }}
              >
                <p>
                  Le Clan est fier d'accueillir toutes et tous, sans distinction d'âge, de genre,
                  d'origine ou de niveau. Nous pensons que la diversité enrichit nos expériences et
                  renforce notre communauté.
                </p>
              </Card>
              <Card
                title="Transmission"
                icon="📚"
                style={{
                  '--card-bg': 'var(--color-orange-300)',
                  '--card-border': 'var(--color-orange-500)',
                }}
              >
                <p>
                  Le Clan est reconnu pour sa formation. Nous aimons partager nos connaissances et
                  notre passion avec les nouveaux arrivants, dans une ambiance conviviale et
                  bienveillante.
                </p>
              </Card>
              <Card
                title="Respect de l'environnement"
                icon="🌿"
                style={{
                  '--card-bg': 'var(--color-green-300)',
                  '--card-border': 'var(--color-green-500)',
                }}
              >
                <p>
                  Nous pratiquons nos activités dans le respect de l'environnement naturel, en
                  préservant le plus possible les écosystèmes fragiles des grottes et des canyons.
                  Beaucoup de nos membres ne sont pas véhiculés, et les déplacements se font
                  généralement en covoiturage.
                </p>
              </Card>
            </div>
          </div>
        </section>
        <section>
          <h2>Fonctionnement interne</h2>
          <p>
            Le Clan se réunit mensuellement, habituellement le premier mercredi du mois à 20h30, au{' '}
            <Link href="/contact">local du club</Link>. Ces réunions permettent de faire le point
            sur la vie du club, de préparer les sorties à venir et d'échanger sur les différents
            projets en cours. Elles sont ouvertes à tous·tes, n'hésitez pas à passer nous voir !
          </p>
          <p>
            En plus d'un bureau standard, notre organisation s'appuie sur plusieurs commissions
            spécialisées : Formation Spéléo, Formation Canyon, Exploration, Science et
            Environnement, Matériel et Sécurité, Communication et Événementiel, ainsi
            qu'Informatique et Bibliothèque. Chaque commission est constituée de membres volontaires
            qui planifient et coordonnent les activités de leur domaine de compétence.
          </p>
        </section>

        <section>
          <h2>Nos partenaires</h2>
          <p>
            Outre des liens tissés avec les autres clubs, nous avons plusieurs partenaires qui nous
            assurent un soutien sous différentes formes :
          </p>
          <ul className="list-disc">
            <li>
              L'
              <Link
                className="link"
                href="https://mairie8.lyon.fr/sport/loffice-des-sports-du-8eme/presentation-de-loffice-des-sports-du-8eme"
              >
                Office des Sports Lyon 8e
              </Link>
              , offrant un créneau hebdomadaire d’accès sur un mur d’escalade en gymnase.
            </li>
            <li>
              La{' '}
              <Link className="link" href="https://www.lyon.fr/">
                Ville de Lyon
              </Link>
              , subventionnant financièrement l’association.
            </li>
            <li>
              La{' '}
              <Link className="link" href="https://www.auvergnerhonealpes.fr">
                Région Auvergne Rhône Alpes
              </Link>{' '}
              qui accorde au club une aide régionale à l’équipement des clubs sportifs
            </li>
            <li>
              La{' '}
              <Link className="link" href="http://ffspeleo.fr/">
                Fédération Française de Spéléologie
              </Link>
              , le{' '}
              <Link className="link" href="http://www.csr-rhonealpes.fr/">
                Comité Spéléologique Régional Auvergne Rhone-Alpes
              </Link>{' '}
              et le{' '}
              <Link className="link" href="https://cdspeleo69.fr">
                Comité Départemental de Spéléologie du Rhône et de la Métropole de Lyon
              </Link>{' '}
              qui coordonnent des actions interclubs, et subventionnent certains de nos projets
            </li>
          </ul>
          <ul className='flex justify-around items-center gap-2 not-prose my-12 mx-20'>
            <li><Image src={lyon} alt="" height={40} className='h-10 w-auto' /></li>
            <li><Image src={aura} alt="" height={40} className='h-10 w-auto' /></li>
            <li><Image src={ffs} alt="" height={40} className='h-10 w-auto' /></li>
          </ul>
        </section>

        <section>
          <h2>Rejoins-nous !</h2>
          <p>
            Tu es curieux·se de découvrir le monde souterrain ou les sports d'eau vive ? Tu cherches
            un club convivial pour partager ta passion ?
          </p>
        </section>
      </div>
      <div className="flex gap-4">
        <PrimaryLink href="/nous-rejoindre">Découvrir nos initiations</PrimaryLink>
      </div>
    </>
  )
}
