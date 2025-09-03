import { Contact, Github, Facebook } from './icons'
import { Link } from '@/components/Link'

const components = {
  contact: Contact,
  github: Github,
  facebook: Facebook,
}

type SocialIconProps = {
  kind: keyof typeof components
  href: string
  size?: number
}

export const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  const SocialSvg = components[kind]

  return (
    <Link href={href}>
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`hover:text-primary-500 dark:hover:text-primary-400 fill-current text-gray-700 dark:text-gray-200 h-${size} w-${size}`}
      />
    </Link>
  )
}
