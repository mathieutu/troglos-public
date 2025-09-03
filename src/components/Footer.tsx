import { Link as Link } from './Link'
import { SocialIcon } from '@/components/social-icons'

export function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="contact" href="/contact" size={6} />
          <SocialIcon kind="github" href="https://github.com/mathieutu/troglos-public" size={6} />
          <SocialIcon kind="facebook" href="https://www.facebook.com/troglos.fr" size={6} />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/" className="hover:underline">
            Clan Spéléo des Troglodytes
          </Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link className="hover:underline" href="https://github.com/mathieutu">
            Mathieu TUDISCO
          </Link>
        </div>
      </div>
    </footer>
  )
}
