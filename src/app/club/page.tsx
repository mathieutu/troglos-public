import { PageHeader } from '@/components/PageHeader'
import { Link, PrimaryLink } from '@/components/Link'
import { Card } from '@/components/Card'
import clubBanner from '@/assets/images/photos/other_02.jpg'

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
            <div className="flex flex-col">
              <Card
                title="Esprit d'équipe"
                icon="🤝"
                style={{
                  '--card-bg': 'var(--color-blue-300)',
                  '--card-border': 'var(--color-blue-500)',
                }}
              >
                La solidarité et l'entraide sont au cœur de nos pratiques. Nous avons pour coutume
                de dire que nos disciplines sont des sports collectifs. Chaque sortie est une
                aventure de groupe où chacun·e veille sur les autres.
              </Card>
              <Card
                title="Sécurité"
                icon="🛡️"
                style={{
                  '--card-bg': 'var(--color-red-300)',
                  '--card-border': 'var(--color-red-500)',
                }}
              >
                La sécurité est notre priorité absolue. Les techniques de progression et de secours
                font partie intégrante de la formation de nos membres. Notre matériel est
                scrupuleusement suivi selon les normes en vigueur.
              </Card>
              <Card
                title="Implication fédérale"
                icon="🏛️"
                style={{
                  '--card-bg': 'var(--color-purple-300)',
                  '--card-border': 'var(--color-purple-500)',
                }}
              >
                Actif dans le Spéléo Secours, le Comité Départemental, ou encore la Fédération
                Française de Spéléologie, le clan contribue activement au développement et à la
                promotion de nos disciplines.
              </Card>
            </div>
            <div className="flex flex-col">
              <Card
                title="Inclusion et diversité"
                icon="🌈"
                style={{
                  '--card-bg': 'var(--color-pink-300)',
                  '--card-border': 'var(--color-pink-500)',
                }}
              >
                Le Clan est fier d'accueillir toutes et tous, sans distinction d'âge, de genre,
                d'origine ou de niveau. Nous pensons que la diversité enrichit nos expériences et
                renforce notre communauté.
              </Card>
              <Card
                title="Transmission"
                icon="📚"
                style={{
                  '--card-bg': 'var(--color-orange-300)',
                  '--card-border': 'var(--color-orange-500)',
                }}
              >
                Le Clan est reconnu pour sa formation. Nous aimons partager nos connaissances et
                notre passion avec les nouveaux arrivants, dans une ambiance conviviale et
                bienveillante.
              </Card>
              <Card
                title="Respect de l'environnement"
                icon="🌿"
                style={{
                  '--card-bg': 'var(--color-green-300)',
                  '--card-border': 'var(--color-green-500)',
                }}
              >
                Nous pratiquons nos activités dans le respect de l'environnement naturel, en
                préservant le plus possible les écosystèmes fragiles des grottes et des canyons.
                Beaucoup de nos membres ne sont pas véhiculés, et les déplacements se font
                généralement en covoiturage.
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
          <h2>Rejoignez-nous !</h2>
          <p>
            Vous êtes curieux·se de découvrir le monde souterrain ou les sports d'eau vive ? Vous
            cherchez un club convivial pour partager votre passion ? Le Clan Spéléo des Troglodytes
            vous accueille à bras ouverts !
          </p>
        </section>
      </div>
      <div className="flex gap-4">
        <PrimaryLink href="/nous-rejoindre">Découvrir nos initiations</PrimaryLink>
      </div>
    </>
  )
}
