import { Link } from '@/components/Link'
import { generatePageMetadata } from '@/config/metadata'

export const metadata = generatePageMetadata({
  title: 'Page non trouvée - 404',
  description:
    "La page que vous recherchez n'existe pas. Retournez à l'accueil pour découvrir nos activités de spéléologie et canyonisme.",
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
        <p className="mb-8">
          Mais ne vous inquiétez pas, vous trouverez bien d&apos;autres choses sur notre page
          d&apos;accueil.
        </p>
        <Link
          href="/"
          className="focus:shadow-outline-primary bg-primary-600 hover:bg-primary-700 dark:hover:bg-primary-500 inline rounded-lg border border-transparent px-4 py-2 text-sm leading-5 font-medium text-white shadow-xs transition-colors duration-150 focus:outline-hidden"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  )
}
