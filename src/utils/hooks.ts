'use client'

import { useEffect, useState, useRef, useCallback } from 'react'

export function useAutoRotatingSelection<T>(
  items: T[],
  intervalMs: number = 3000,
  autoStart: boolean = true
) {
  const [currentIndex, setCurrentIndex] = useState(() => Math.floor(Math.random() * items.length))
  const [isRunning, setIsRunning] = useState(autoStart)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Function to move to next item
  const next = useCallback(
    () => setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length),
    [items.length]
  )

  // Function to move to previous item
  const previous = () =>
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)

  // Function to go to specific index
  const goTo = (index: number) => {
    if (index >= 0 && index < items.length) {
      setCurrentIndex(index)
    }
  }

  // Function to start the auto rotation
  const start = () => setIsRunning(true)

  // Function to stop the auto rotation
  const stop = () => setIsRunning(false)

  // Function to toggle auto rotation
  const toggle = () => setIsRunning(!isRunning)

  // Effect to handle the auto rotation
  useEffect(() => {
    if (isRunning && items.length > 1) {
      intervalRef.current = setInterval(next, intervalMs)
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isRunning, intervalMs, items.length, next])

  // Reset index if items array changes and current index is out of bounds
  useEffect(() => {
    if (currentIndex >= items.length) {
      setCurrentIndex(0)
    }
  }, [items.length, currentIndex])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return [
    items[currentIndex],
    {
      currentIndex,
      isRunning,
      next,
      previous,
      goTo,
      start,
      stop,
      toggle,
    },
  ] as const
}
