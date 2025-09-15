import { PrimaryLink } from '@/components/Link'
import { generatePageMetadata } from '@/config/metadata'

export const metadata = generatePageMetadata({
  title: 'Page non trouvée - 404',
  description:
    "La page que tu recherche n'existe pas. Retourne à l'accueil pour découvrir nos activités de spéléologie et canyonisme.",
  path: '/404',
  keywords: ['404', 'page non trouvée', 'erreur'],
})

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-6xl leading-9 font-extrabold tracking-tight text-gray-900 md:border-r-2 md:px-6 md:text-8xl md:leading-14 dark:text-gray-100">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl leading-normal font-bold md:text-2xl">
          Désolé nous n&apos;avons pas trouvé cette page.
        </p>
        <p className="mb-8">Ce n'est probablement pas de ta faute, notre site est tout neuf !</p>
        <p className="mb-8">
          Mais ne t'inquiète pas, tu trouveras bien d&apos;autres choses sur celui-ci : nos
          activités, nos sorties, comment nous rejoindre, etc.
        </p>
        <PrimaryLink href="/">Retour à l&apos;accueil</PrimaryLink>
      </div>
    </div>
  )
}
