import { ReactNode } from 'react'

export interface BleedProps {
  full?: boolean
  children: ReactNode
}

export const Bleed = ({ full, children }: BleedProps) => {
  return (
    <div
      className={`relative mt-6 ${
        full ? 'mr-[calc(-50vw+50%)] ml-[calc(-50vw+50%)]' : '-mx-6 md:-mx-8 2xl:-mx-24'
      }`}
    >
      {children}
    </div>
  )
}
