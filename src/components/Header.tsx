'use client'

import Logo from '@/assets/images/logo.svg'
import { Link as Link } from './Link'
import { MobileNav } from './MobileNav'
import { headerNavLinks } from '@/config/config'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export const Header = () => {
  const pathname = usePathname()
  const navRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [underlineStyle, setUnderlineStyle] = useState<{
    width: number
    left: number
    opacity: number
  }>({ width: 0, left: 0, opacity: 0 })

  useEffect(() => {
    const currentIndex = headerNavLinks.findIndex((link) => link.href === pathname)
    if (currentIndex !== -1) {
      setActiveIndex(currentIndex)
    }
  }, [pathname])

  const updateUnderlinePosition = (index: number | null) => {
    if (!navRef.current || index === null) {
      setUnderlineStyle((prev) => ({ ...prev, opacity: 0 }))
      return
    }

    const links = navRef.current.querySelectorAll('a')
    const targetLink = links[index]

    if (targetLink) {
      const navRect = navRef.current.getBoundingClientRect()
      const linkRect = targetLink.getBoundingClientRect()

      setUnderlineStyle({
        width: linkRect.width,
        left: linkRect.left - navRect.left,
        opacity: 1,
      })
    }
  }

  useEffect(() => {
    updateUnderlinePosition(activeIndex)
  }, [activeIndex])

  return (
    <header className="absolute top-0 isolate z-10 flex w-full items-center justify-between px-10 pt-5 pb-10">
      <Link href="/" aria-label="Clan Spéléo des Troglodytes">
        <div className="flex items-center justify-between">
          <div className="mr-3">
            <Logo className="size-10" />
          </div>
          <div className="hidden text-2xl font-semibold sm:block">Clan Spéléo des Troglodytes</div>
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="relative">
          {/* Zone de tolérance invisible */}
          <div
            className="absolute -inset-6 z-0"
            onMouseLeave={() => {
              setHoveredIndex(null)
              updateUnderlinePosition(activeIndex)
            }}
          />
          <nav
            ref={navRef}
            className="no-scrollbar relative z-10 hidden items-center gap-x-4 sm:flex"
          >
            {headerNavLinks.map((link, index) => (
              <Link
                key={link.title}
                href={link.href}
                className={`m-1 font-medium transition-colors duration-200 ${hoveredIndex === index ? 'text-primary-500' : 'text-gray-100'}`}
                onMouseEnter={() => {
                  setHoveredIndex(index)
                  updateUnderlinePosition(index)
                }}
              >
                {link.title}
              </Link>
            ))}
            {/* Ligne de soulignement qui se déplace */}
            <div
              className={`absolute bottom-0 h-0.5 transition-all duration-300 ease-out ${hoveredIndex !== null ? 'bg-primary-500' : 'bg-gray-100'}`}
              style={{
                width: `${underlineStyle.width}px`,
                left: `${underlineStyle.left}px`,
                opacity: underlineStyle.opacity,
              }}
            />
          </nav>
        </div>
        <MobileNav />
      </div>
    </header>
  )
}
