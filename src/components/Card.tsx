import { Link } from './Link'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { ReactNode } from 'react'

type CardProps = {
  title: string
  children: ReactNode
  imgSrc?: string | StaticImport
  href?: string
}
export const Card = ({ title, children, imgSrc, href }: CardProps) => (
  <div className="relative m-4 max-w-[544px]">
    <div
      className={`${
        imgSrc && 'h-full'
      } bg-primary-200/20 border-primary-400/30 hover:bg-primary-300/25 transition-all duration-200 overflow-hidden rounded-lg border backdrop-blur-sm`}
    >
      {imgSrc && (
        <Image
          alt={title}
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
        <p className="prose mb-3 max-w-none text-slate-200">{children}</p>
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
