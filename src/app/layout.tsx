import type { Metadata } from 'next'

import '../styles/globals.css'
import { Header } from '@/components/global/Header'
import { manrope } from './fonts'
import { Footer } from '@/components/global/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

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
      <body className={` bg-zinc-900 scrollbar scrollbar-thumb-zinc-800 h-screen `}>
        <Header />
        <main className=" mx-auto px-4 lg:px-[108px] bg-[url('/background_02.jpg')] ">{children}</main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  )
}
