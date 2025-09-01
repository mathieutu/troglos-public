'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

export function useAutoRotatingSelection<T>(
  items: T[],
  intervalMs: number = 3000,
  autoStart: boolean = true
) {
  const [currentIndex, setCurrentIndex] = useState(() => Math.floor(Math.random() * items.length))
  const [isRunning, setIsRunning] = useState(autoStart)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Function to clear the current interval
  const clearCurrentInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  // Function to start the interval
  const startInterval = useCallback(() => {
    if (isRunning && items.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
      }, intervalMs)
    }
  }, [isRunning, items.length, intervalMs])

  // Function to reset the interval (restart the timer)
  const resetInterval = useCallback(() => {
    clearCurrentInterval()
    startInterval()
  }, [clearCurrentInterval, startInterval])

  // Function to move to next item
  const next = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    resetInterval()
  }, [items.length, resetInterval])

  // Function to move to previous item
  const previous = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
    resetInterval()
  }, [items.length, resetInterval])

  // Function to go to specific index
  const goTo = useCallback(
    (index: number) => {
      if (index >= 0 && index < items.length) {
        setCurrentIndex(index)
        resetInterval()
      }
    },
    [items.length, resetInterval]
  )

  // Function to start the auto rotation
  const start = () => setIsRunning(true)

  // Function to stop the auto rotation
  const stop = () => setIsRunning(false)

  // Function to toggle auto rotation
  const toggle = () => setIsRunning((current) => !current)

  // Effect to handle the auto rotation
  useEffect(() => {
    clearCurrentInterval()
    startInterval()

    return () => {
      clearCurrentInterval()
    }
  }, [isRunning, intervalMs, items.length, clearCurrentInterval, startInterval])

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

  return {
    currentIndex,
    isRunning,
    next,
    previous,
    goTo,
    start,
    stop,
    toggle,
  }
}
