import { Link } from './Link'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { ReactNode } from 'react'

type CardProps = {
  title: string | ReactNode
  icon?: ReactNode
  children: ReactNode
  imgSrc?: string | StaticImport
  href?: string
  style?: React.CSSProperties
  linkTitle?: string
}
export const Card = ({
  title,
  icon,
  children,
  imgSrc,
  href,
  style: customStyle,
  linkTitle = 'En savoir plus',
}: CardProps) => {
  const style = {
    '--card-bg': 'var(--color-primary-200)',
    '--card-bg-hover': 'var(--color-primary-300)',
    '--card-border': 'var(--color-primary-400)',
    ...customStyle,
  }

  const titleBlock = (
    <div className="flex justify-between">
      <span>{title}</span>
      <span>{icon}</span>
    </div>
  )

  return (
    <div className="relative m-4 max-w-[544px]" style={style}>
      <div
        className={`${
          imgSrc && 'h-full'
        } ${href && 'hover:bg-(--card-bg-hover)/60'} group overflow-hidden rounded-lg border border-(--card-border)/40 bg-(--card-bg)/50 backdrop-blur-sm transition-all duration-200`}
      >
        {imgSrc && (
          <Image
            alt=""
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        )}
        <div className="p-6">
          <span className="mb-3 text-2xl leading-8 font-bold tracking-tight text-slate-50">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                <span className="absolute inset-0" />
                {titleBlock}
              </Link>
            ) : (
              <>{titleBlock}</>
            )}
          </span>
          <div className="prose prose-invert mb-3 max-w-none text-slate-200">{children}</div>
          {href && (
            <Link
              href={href}
              className="link text-base leading-6 font-medium text-(--card-bg-hover) transition-colors duration-200 group-hover:text-(--card-bg)"
              aria-label={`Détails : ${title}`}
            >
              <span className="group-hover:underline">{linkTitle}</span> &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
