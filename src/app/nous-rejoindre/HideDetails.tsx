'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export const HideDetails = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams()

  const showDetails = searchParams.get('details') || localStorage.getItem('showDetails')

  useEffect(() => {
    if (showDetails) {
      localStorage.setItem('showDetails', '1')
    }
  }, [showDetails])

  if (!showDetails) {
    return null
  }

  return children
}
