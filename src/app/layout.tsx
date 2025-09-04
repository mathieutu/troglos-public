import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './style.css'
import { SectionContainer } from '@/components/SectionContainer'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { defaultMetadata } from '@/config/metadata'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${spaceGrotesk.variable} scroll-smooth`}>
      <body className="dark overflow-x-hidden text-white antialiased">
        <Header />
        <SectionContainer>
          <main className="mb-auto">{children}</main>
          <Footer />
        </SectionContainer>
      </body>
    </html>
  )
}
