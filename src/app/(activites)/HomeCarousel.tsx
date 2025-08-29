'use client'

import Image from 'next/image'

import canyonBanner1 from '@/assets/images/canyon/IMG_1021.jpeg'
import canyonBanner2 from '@/assets/images/canyon/IMG_1046.jpeg'
import canyonBanner3 from '@/assets/images/canyon/IMG_1052.jpeg'
import canyonBanner4 from '@/assets/images/canyon/P5261268.jpg'
import canyonBanner5 from '@/assets/images/canyon/P5261320.jpg'
import canyonBanner6 from '@/assets/images/canyon/purcaraccia-1.jpg'
import canyonBanner7 from '@/assets/images/canyon/IMG_0948.jpg'
import canyonBanner11 from '@/assets/images/canyon/IMG_0981.jpg'
import canyonBanner8 from '@/assets/images/canyon/IMG_0986.jpg'
import canyonBanner9 from '@/assets/images/canyon/IMG_0992.jpg'
import canyonBanner10 from '@/assets/images/canyon/signal-2024-08-18-14-07-25-930.jpg'

import cavingBanner1 from '@/assets/images/caving/2025-02-01 13.29.42.jpg'
import cavingBanner2 from '@/assets/images/caving/20240830.jpg'
import cavingBanner3 from '@/assets/images/caving/20241111_141003.jpg'
import cavingBanner4 from '@/assets/images/caving/Alex 5.jpg'
import cavingBanner5 from '@/assets/images/caving/fitoja.jpg'
import cavingBanner6 from '@/assets/images/caving/Gaetan 69.jpg'
import cavingBanner7 from '@/assets/images/caving/guiers.png'
import cavingBanner8 from '@/assets/images/caving/IMG-20241109-WA0007.jpg'
import cavingBanner10 from '@/assets/images/caving/IMG-20241111-WA0027.jpg'
import cavingBanner11 from '@/assets/images/caving/IMG_20241231_200233.jpg'
import cavingBanner13 from '@/assets/images/caving/IMG_20241231_233057.jpg'
import cavingBanner14 from '@/assets/images/caving/IMG_20250101_111038.jpg'
import cavingBanner15 from '@/assets/images/caving/marcel.jpg'
import cavingBanner16 from '@/assets/images/caving/Morgan 11.jpg'
import cavingBanner17 from '@/assets/images/caving/Morgan 17.jpg'
import cavingBanner26 from '@/assets/images/caving/PXL_20241031_205616617.NIGHT.jpg'
import cavingBanner18 from '@/assets/images/caving/20250713_105100.jpg'
import cavingBanner19 from '@/assets/images/caving/20250713_164705.jpg'
import cavingBanner20 from '@/assets/images/caving/20250714_110800.jpg'
import cavingBanner21 from '@/assets/images/caving/20250714_113313.jpg'
import cavingBanner22 from '@/assets/images/caving/20250714_121015.jpg'
import cavingBanner23 from '@/assets/images/caving/20250720_163613.jpg'
import cavingBanner24 from '@/assets/images/caving/20250803_123253.jpg'
import cavingBanner25 from '@/assets/images/caving/20250803_123835.jpg'

import { useAutoRotatingSelection } from '@/utils/hooks'
import { Header } from '@/components/Header'
const carouselItems = [
  { src: cavingBanner4, className: 'color-caving' },
  { src: cavingBanner16, className: 'color-caving' },
  { src: cavingBanner10, className: 'color-caving' },
  { src: cavingBanner22, className: 'color-caving' },
  { src: cavingBanner18, className: 'color-caving' },
  { src: cavingBanner3, className: 'color-caving' },
  { src: cavingBanner6, className: 'color-caving' },
  { src: cavingBanner24, className: 'color-caving' },
  { src: canyonBanner1, className: 'color-canyon' },
  { src: cavingBanner11, className: 'color-caving' },
  { src: cavingBanner7, className: 'color-caving' },
  { src: cavingBanner19, className: 'color-caving' },
  { src: cavingBanner2, className: 'color-caving' },
  { src: canyonBanner11, className: 'color-canyon' },
  { src: canyonBanner9, className: 'color-canyon' },
  { src: canyonBanner3, className: 'color-canyon' },
  { src: cavingBanner8, className: 'color-caving' },
  { src: canyonBanner10, className: 'color-canyon' },
  { src: canyonBanner4, className: 'color-canyon' },
  { src: canyonBanner5, className: 'color-canyon' },
  { src: cavingBanner14, className: 'color-caving' },
  { src: cavingBanner5, className: 'color-caving' },
  { src: cavingBanner23, className: 'color-caving' },
  { src: canyonBanner6, className: 'color-canyon' },
  { src: canyonBanner8, className: 'color-canyon' },
  { src: cavingBanner15, className: 'color-caving' },
  { src: cavingBanner17, className: 'color-caving' },
  { src: cavingBanner1, className: 'color-caving' },
  { src: cavingBanner20, className: 'color-caving' },
  { src: canyonBanner7, className: 'color-canyon' },
  { src: cavingBanner21, className: 'color-caving' },
  { src: cavingBanner26, className: 'color-caving' },
  { src: cavingBanner25, className: 'color-caving' },
  { src: cavingBanner13, className: 'color-caving' },
  { src: canyonBanner2, className: 'color-canyon' },
]

export const HomeCarousel = () => {
  const [currentCarouselItem] = useAutoRotatingSelection(carouselItems)

  return (
    <section className={`w-screen ${currentCarouselItem.className} mb-[100vh]`}>
      <div className="absolute inset-0 h-screen">
        <div className="relative h-screen w-full">
          <Image src={currentCarouselItem.src} alt="" fill className="object-cover" />
          <div className="from-primary-950/80 via-primary-950/50 absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b to-transparent">
            <h1 className="text-center text-4xl font-extrabold text-white drop-shadow-2xl md:text-6xl lg:text-7xl">
              <span className="text-caving-400 drop-shadow-lg">Spéléologie</span> et{' '}
              <span className="text-canyon-400 drop-shadow-lg">Canyonisme</span>
            </h1>
            <span className="text-3xl font-extrabold">à Lyon</span>
          </div>
          <div className="absolute -top-5 w-full px-10">
            <Header />
          </div>
        </div>
      </div>
    </section>
  )
}
