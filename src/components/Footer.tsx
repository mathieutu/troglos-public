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

export const GoogleMaps = (svgProps: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...svgProps}>
    <title>Google Maps</title>
    <defs>
      <mask id="googleMapsMask">
        <rect width="24" height="24" fill="white" />
        <path
          fill="black"
          transform="translate(0.7 3) scale(0.95)"
          d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z"
        />
      </mask>
    </defs>
    <circle cx="12" cy="12" r="12" fill="currentColor" mask="url(#googleMapsMask)" />
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
  googleMaps: GoogleMaps,
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
        className={`hover:text-primary-500 dark:hover:text-primary-400 fill-current text-gray-200 h-${size} w-${size}`}
      />
    </Link>
  )
}
export function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center mb-8">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="contact" href="/contact" size={6} />
          <SocialIcon kind="github" href="https://github.com/mathieutu/troglos-public" size={6} />
          <SocialIcon kind="facebook" href="https://www.facebook.com/troglos.fr" size={6} />
          <SocialIcon kind="googleMaps" href="https://maps.app.goo.gl/ezzbEnmuuSUmBYtr6" size={6} />
        </div>
        <div className="text-sm text-gray-200">
          <Link className="hover:underline" href="https://app.troglos.fr">
            Espace Adhérents
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-x-2 text-sm text-gray-400">
          <Link href="/" className="hover:underline">
            Clan Spéléo des Troglodytes
          </Link>
          <span>{` • `}</span>
          <Link href="https://cartes.app/?allez=Clan+Sp%25C3%25A9l%25C3%25A9ologique+des+Troglodytes%7Cn13851387775%7C4.88334%7C45.74014" className="hover:underline">
            18 rue Volney, 69008 Lyon
          </Link>
        </div>
        <div className="text-sm text-gray-400">
          <Link className="hover:underline" href="https://mathieutu.dev">
            © {new Date().getFullYear()} Mathieu TUDISCO
          </Link>
        </div>
      </div>
    </footer>
  )
}
