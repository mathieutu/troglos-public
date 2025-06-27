import Logo from '@/assets/images/logo.svg'
import { Link as Link } from './Link'
import { MobileNav } from './MobileNav'
import { headerNavLinks } from '@/config/config'

export const Header = () => {
  return (
    <header className="flex w-full items-center justify-between py-10">
      <Link href="/" aria-label="Clan Spéléo des Troglodytes">
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Logo className="size-10" />
          </div>
          <div className="hidden text-2xl font-semibold sm:block">Clan Spéléo des Troglodytes</div>
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="hover:text-primary-500 dark:hover:text-primary-400 m-1 font-medium text-gray-900 dark:text-gray-100"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <MobileNav />
      </div>
    </header>
  )
}
