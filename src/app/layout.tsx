import '../styles/globals.css'
import { Header } from '@/components/global/Header'
import { manrope } from '@/assets/fonts'
import { Footer } from '@/components/global/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={manrope.className}>
      <body
        className={` h-screen bg-zinc-900 text-light scrollbar scrollbar-thumb-zinc-800 `}
      >
        <Header />
        <main className="  bg-[url('https://media.graphassets.com/u0Z1QcrWTzeE9eYcGxak')] px-6 py-8 lg:p-20">
          {children}
        </main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  )
}
