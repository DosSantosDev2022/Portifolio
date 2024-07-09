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
    <html lang="pt-br" className={`${manrope.className}  scrollbar-thin`}>
      <body className="h-screen bg-zinc-700 bg-[url('https://media.graphassets.com/u0Z1QcrWTzeE9eYcGxak')] text-light">
        <div className="flex  gap-6 border px-[113px] py-12">
          <SideBar />
          <div className="flex  flex-1 flex-col gap-6">
            <Header />
            <main className="h-screen flex-1 overflow-auto rounded-md bg-zinc-900 p-4 ">
              {children}
            </main>
            <Footer />
          </div>
        </div>
        <ToastContainer />
      </body>
    </html>
  )
}
