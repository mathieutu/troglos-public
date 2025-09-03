import { Link as Link } from './Link'
import { SVGProps } from 'react'

// Icons taken from: https://simpleicons.org/
// To add a new icon, add a new function here and add it to components in social-icons/index.tsx

export const Facebook = (svgProps: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...svgProps}>
    <title>Facebook</title>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
  </svg>
)

export const Github = (svgProps: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...svgProps}>
    <title>GitHub</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
  </svg>
)

export const Contact = (svgProps: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...svgProps}>
    <title>Contact</title>
    <defs>
      <mask id="atMask">
        <rect width="24" height="24" fill="white" />
        <text x="12" y="17" textAnchor="middle" fontSize="20" fontWeight="bold" fill="black">
          @
        </text>
      </mask>
    </defs>
    <circle cx="12" cy="12" r="12" fill="currentColor" mask="url(#atMask)" />
  </svg>
)

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

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
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
