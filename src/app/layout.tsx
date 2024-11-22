import './globals.css'

import type { Metadata } from 'next'
import { Sora } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'Portfolio | lukevinicius',
  description: 'Personal portfolio of Luke Vinicius',
}

const sora = Sora({
  display: 'swap',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${sora.className} antialiased bg-[#FCFCFC] w-full`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
