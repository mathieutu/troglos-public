import { Link } from './Link'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { ReactNode } from 'react'

type CardProps = {
  title: string | ReactNode
  children: ReactNode
  imgSrc?: string | StaticImport
  href?: string
  style?: React.CSSProperties
}
export const Card = ({ title, children, imgSrc, href, style: customStyle }: CardProps) => {
  const style = {
    '--card-bg': 'var(--color-primary-200)',
    '--card-bg-hover': 'var(--color-primary-300)',
    '--card-border': 'var(--color-primary-400)',
    ...customStyle,
  }
  return (
    <div className="relative m-4 max-w-[544px]" style={style}>
      <div
        className={`${
          imgSrc && 'h-full'
        } ${href && 'hover:bg-(--card-bg-hover)/60'} overflow-hidden rounded-lg border border-(--card-border)/40 bg-(--card-bg)/50 backdrop-blur-sm transition-all duration-200`}
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
                {title}
              </Link>
            ) : (
              title
            )}
          </span>
          <div className="prose prose-invert mb-3 max-w-none text-slate-200">{children}</div>
          {href && (
            <Link
              href={href}
              className="link text-primary-300 hover:text-primary-200 text-base leading-6 font-medium transition-colors duration-200"
              aria-label={`Détails : ${title}`}
            >
              En savoir plus &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
