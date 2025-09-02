import { ReactNode } from 'react'

export const FullWidth = ({ children }: { children: ReactNode }) => {
  return <div className="relative right-1/2 left-1/2 mx-[-50vw] w-screen">{children}</div>
}
