import { Link } from './Link'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

type CardProps = {
  title: string
  description: string
  imgSrc?: string | StaticImport
  href?: string
}
export const Card = ({ title, description, imgSrc, href }: CardProps) => (
  <div className="max-w-[544px] p-4">
    <div
      className={`${
        imgSrc && 'h-full'
      } bg-primary-100/40 border-primary-700/30 overflow-hidden rounded-md border-2`}
    >
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
          />
        ))}
      <div className="p-6">
        <h2 className="mb-3 text-2xl leading-8 font-bold tracking-tight text-gray-950">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="prose mb-3 max-w-none text-gray-950">{description}</p>
        {href && (
          <Link
            href={href}
            className="link text-primary-900 text-base leading-6 font-medium"
            aria-label={`Détails : ${title}`}
          >
            En savoir plus &rarr;
          </Link>
        )}
      </div>
    </div>
  </div>
)
