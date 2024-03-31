import type { Metadata } from 'next'

import '../styles/globals.css'
import { Header } from '@/components/global/Header'
import { manrope } from './fonts'

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
      <body className={` scrollbar scrollbar-thumb-zinc-800 bg-zinc-900`}>
        <Header />
        <main className="mx-auto px-4 lg:px-[108px]">{children}</main>
      </body>
    </html>
  )
}
