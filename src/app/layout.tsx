import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import '../styles/globals.css'
import { Header } from '@/components/global/Header'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Portifólio - Juliano Santos',
  description: 'O meu portifólio dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={manrope.className}>
      <body className={` bg-zinc-950`}>
        <Header />
        <main className="mx-auto px-4 lg:px-[108px]">{children}</main>
      </body>
    </html>
  )
}
