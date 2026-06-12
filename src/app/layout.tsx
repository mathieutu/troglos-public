import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './style.css'
import { SectionContainer } from '@/components/SectionContainer'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { defaultMetadata } from '@/config/metadata'
import Script from 'next/script'

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

  const analyticsEnabled = process.env.NODE_ENV === 'production'
    && (!process.env.NEXT_PUBLIC_VERCEL_ENV || process.env.NEXT_PUBLIC_VERCEL_ENV === 'production')

  return (
    <html lang="fr" className={`${spaceGrotesk.variable} scroll-smooth`}>
      <body className="dark overflow-x-hidden text-white antialiased">
        <Header />
        <SectionContainer>
          <main className="mb-auto">{children}</main>
          <Footer />
        </SectionContainer>
        {/* Privacy-friendly analytics by Plausible */}
        {analyticsEnabled && <Script async src="https://e.mathieutu.dev/js/pa-wE-0rabBwZxex4QEOLRX5.js" />}
        {analyticsEnabled && (
          <Script
            id="next-plausible-init"
            dangerouslySetInnerHTML={{
              __html: `
          window.plausible=window.plausible||function(){(plausible.q = plausible.q || []).push(arguments)},plausible.init=plausible.init||function(i){plausible.o = i || {}};
          plausible.init()
          `,
            }}
          />
        )}
      </body>
    </html>
  )
}
