import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { Bleed } from '@/components/Bleed'
import Image from 'next/image'
import { ReactNode } from 'react'

const PageBanner = ({ src }: { src: string | StaticImport }) => (
  <Bleed>
    <div className="relative aspect-5/2 w-full">
      <Image src={src} alt="" fill className="rounded-lg object-cover" />
    </div>
  </Bleed>
)

export function PageTitle({ children }: { children: ReactNode }) {
  return (
    <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
      {children}
    </h1>
  )
}

export const PageHeader = ({
  imageSrc,
  title,
}: {
  imageSrc: string | StaticImport
  title: string
}) => (
  <div className="space-y-1 pb-10 dark:border-gray-700">
    <PageBanner src={imageSrc} />
    <div className="relative pt-10">
      <PageTitle>{title}</PageTitle>
    </div>
  </div>
)
