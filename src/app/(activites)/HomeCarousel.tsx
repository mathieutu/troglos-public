'use client'

import { Header } from '@/components/Header'
import canyoning01 from '@/assets/images/photos/canyoning_01.jpg'
import canyoning02 from '@/assets/images/photos/canyoning_02.jpg'
import canyoning03 from '@/assets/images/photos/canyoning_03.jpg'
import canyoning04 from '@/assets/images/photos/canyoning_04.jpg'
import canyoning05 from '@/assets/images/photos/canyoning_05.jpg'
import canyoning06 from '@/assets/images/photos/canyoning_06.jpg'
import canyoning07 from '@/assets/images/photos/canyoning_07.jpg'
import canyoning08 from '@/assets/images/photos/canyoning_08.jpg'
import canyoning09 from '@/assets/images/photos/canyoning_09.jpg'
import canyoning10 from '@/assets/images/photos/canyoning_10.jpg'
import canyoning11 from '@/assets/images/photos/canyoning_11.jpg'
import canyoning12 from '@/assets/images/photos/canyoning_12.jpg'
import caving01 from '@/assets/images/photos/caving_01.jpg'
import caving02 from '@/assets/images/photos/caving_02.jpg'
import caving03 from '@/assets/images/photos/caving_03.jpg'
import caving04 from '@/assets/images/photos/caving_04.jpg'
import caving05 from '@/assets/images/photos/caving_05.jpg'
import caving06 from '@/assets/images/photos/caving_06.jpg'
import caving07 from '@/assets/images/photos/caving_07.jpg'
import caving08 from '@/assets/images/photos/caving_08.jpg'
import caving09 from '@/assets/images/photos/caving_09.jpg'
import caving10 from '@/assets/images/photos/caving_10.jpg'
import caving11 from '@/assets/images/photos/caving_11.jpg'
import caving12 from '@/assets/images/photos/caving_12.jpg'
import caving13 from '@/assets/images/photos/caving_13.jpg'
import caving14 from '@/assets/images/photos/caving_14.jpg'
import caving15 from '@/assets/images/photos/caving_15.jpg'
import caving16 from '@/assets/images/photos/caving_16.jpg'
import caving17 from '@/assets/images/photos/caving_17.jpg'
import caving18 from '@/assets/images/photos/caving_18.jpg'
import caving19 from '@/assets/images/photos/caving_19.jpg'
import caving20 from '@/assets/images/photos/caving_20.jpg'
import caving21 from '@/assets/images/photos/caving_21.jpg'
import caving22 from '@/assets/images/photos/caving_22.jpg'
import caving23 from '@/assets/images/photos/caving_23.jpg'
import caving25 from '@/assets/images/photos/caving_25.jpg'
import caving26 from '@/assets/images/photos/caving_26.jpg'
import { useEffect, useState } from 'react'
import { ImageCrossFade } from '@/components/ImageCrossFade'

const items = [
  { src: canyoning03, className: 'color-canyon' },
  { src: canyoning10, className: 'color-canyon' },
  { src: caving17, className: 'color-caving' },
  { src: caving13, className: 'color-caving' },
  { src: canyoning02, className: 'color-canyon' },
  { src: canyoning11, className: 'color-canyon' },
  { src: caving15, className: 'color-caving' },
  { src: canyoning12, className: 'color-canyon' },
  { src: caving14, className: 'color-caving' },
  { src: caving19, className: 'color-caving' },
  { src: caving06, className: 'color-caving' },
  { src: caving01, className: 'color-caving' },
  { src: caving22, className: 'color-caving' },
  { src: caving08, className: 'color-caving' },
  { src: canyoning05, className: 'color-canyon' },
  { src: caving23, className: 'color-caving' },
  { src: caving02, className: 'color-caving' },
  { src: canyoning09, className: 'color-canyon' },
  { src: caving20, className: 'color-caving' },
  { src: caving18, className: 'color-caving' },
  { src: canyoning04, className: 'color-canyon' },
  { src: caving12, className: 'color-caving' },
  { src: caving16, className: 'color-caving' },
  { src: canyoning08, className: 'color-canyon' },
  { src: canyoning07, className: 'color-canyon' },
  { src: caving21, className: 'color-caving' },
  { src: caving03, className: 'color-caving' },
  { src: caving09, className: 'color-caving' },
  { src: caving10, className: 'color-caving' },
  { src: caving26, className: 'color-caving' },
  { src: caving25, className: 'color-caving' },
  { src: canyoning01, className: 'color-canyon' },
  { src: canyoning06, className: 'color-canyon' },
  { src: caving05, className: 'color-caving' },
  { src: caving11, className: 'color-caving' },
  { src: caving04, className: 'color-caving' },
  { src: caving07, className: 'color-caving' },
]

export const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(() => Math.floor(Math.random() * items.length))
  const currentItem = items[currentIndex]

  useEffect(() => {
    const timeout = setTimeout(() => setCurrentIndex((currentIndex + 1) % items.length), 3500)
    return () => clearTimeout(timeout)
  }, [currentIndex])

  const next = () => setCurrentIndex((currentIndex + 1) % items.length)
  const previous = () => setCurrentIndex((currentIndex - 1 + items.length) % items.length)

  return (
    <section className={`w-screen ${currentItem.className} mb-[100vh]`} suppressHydrationWarning>
      <div className="absolute inset-0 h-screen">
        <div className="relative h-screen w-full overflow-hidden">
          <div className="bg-primary-400 absolute inset-0">
            <ImageCrossFade
              src={currentItem.src}
              alt=""
              fill
              className={`object-cover`}
              priority
              suppressHydrationWarning
              sizes="100vw"
            />
          </div>

          <div className="from-primary-950/80 via-primary-950/50 absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b to-transparent transition-colors duration-700 ease-in-out">
            <h1 className="text-center text-5xl font-extrabold text-white drop-shadow-2xl md:text-6xl lg:text-7xl">
              <div className="flex-wrap items-baseline justify-center gap-4 sm:flex">
                <span className="text-caving-400">Spéléologie</span> et{' '}
                <span className="text-canyon-400">Canyonisme</span>
              </div>
              <div className="text-3xl">à Lyon</div>
            </h1>
          </div>
          <div className="absolute -top-5 w-full px-10">
            <Header />
          </div>
          <div className="absolute right-6 bottom-6 z-20 flex gap-2">
            <button
              onClick={previous}
              className="rounded-full border border-white/20 bg-white/10 p-1.5 text-white backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-white/20"
              aria-label="Slide précédent"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={next}
              className="rounded-full border border-white/20 bg-white/10 p-1.5 text-white backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-white/20"
              aria-label="Slide suivant"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
