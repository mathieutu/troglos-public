import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

type LinkProps = NextLinkProps & AnchorHTMLAttributes<HTMLAnchorElement>

export const Link = ({ href, className, ...rest }: LinkProps) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return <NextLink className={`break-words ${className}`} href={href} {...rest} />
  }

  if (isAnchorLink) {
    return <a className={`break-words ${className}`} href={href} {...rest} />
  }

  return (
    <a
      className={`break-words ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    />
  )
}

export const PrimaryLink = ({ className, ...rest }: LinkProps) => (
  <Link
    className={`bg-primary-500/80 hover:bg-primary-500 inline-flex items-center gap-3 rounded-xl px-10 py-4 font-bold text-white shadow-xl transition-all duration-300 ${className}`}
    {...rest}
  />
)
