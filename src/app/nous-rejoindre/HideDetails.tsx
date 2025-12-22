'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

const NestedHiddenDetails = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams()
  const showDetails = searchParams.get('details') || localStorage.getItem('showDetails')

  useEffect(() => {
    if (showDetails) {
      localStorage.setItem('showDetails', '1')
      window.history.replaceState(null, '', window.location.pathname)
    }
  }, [showDetails])

  if (!showDetails) {
    return null
  }

  return children
}
export const HideDetails = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={null}>
    <NestedHiddenDetails>{children}</NestedHiddenDetails>
  </Suspense>
)
