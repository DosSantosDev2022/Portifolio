import '../styles/globals.css'
import { Header } from '@/components/global/Header'
import { manrope } from '@/assets/fonts'
import { SideBar } from '@/components/global/sideBar'
import { Footer } from '@/components/global/Footer'
import { NotificationProvider } from '@/context/notificationContext'

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
      <body className=" h-fullrounded-md bg-gradient-color bg-no-repeat bg-contain text-light">
        <NotificationProvider>
          <div className="flex   flex-col gap-6   px-6 py-12 lg:flex-row lg:px-[96px]">
            <SideBar className="hidden lg:flex" />
            <div className="flex  flex-1 flex-col gap-6">
              <Header />
              <SideBar className="lg:hidden" />
              <div className="   rounded-lg bg-zinc-900">{children}</div>
              <Footer />
            </div>
          </div>
        </NotificationProvider>
      </body>
    </html>
  )
}
