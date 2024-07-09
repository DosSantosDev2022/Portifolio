import '../styles/globals.css'
import { Header } from '@/components/global/Header'
import { manrope } from '@/assets/fonts'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
import { SideBar } from '@/components/global/sideBar'
import { Footer } from '@/components/global/Footer'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-br"
      className={`${manrope.className} scrollbar scrollbar-track-zinc-800 scrollbar-thumb-zinc-900 `}
    >
      <body className=" h-screen rounded-md bg-[url('https://media.graphassets.com/u0Z1QcrWTzeE9eYcGxak')] text-light">
        <div className="flex   flex-col gap-6   px-6 py-12 lg:flex-row lg:px-[96px]">
          <SideBar className="hidden lg:flex" />
          <div className="flex  flex-1 flex-col gap-6">
            <Header />
            <SideBar className="lg:hidden" />
            <div className="container   rounded-lg bg-zinc-900">{children}</div>
            <Footer />
          </div>
        </div>
        <ToastContainer />
      </body>
    </html>
  )
}
