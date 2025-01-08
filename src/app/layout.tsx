import '../styles/globals.css'
import { Header } from '@/components/global/Header'
import { manrope } from '@/assets/fonts'
import { SideBar } from '@/components/global/sideBar'
import { Footer } from '@/components/global/Footer'
import { NotificationProvider } from '@/context/notificationContext'
import { twMerge } from 'tailwind-merge'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-br"
      className={twMerge(`${manrope.className}`, 'custom-scrollbar')}
    >
      <body className="h-full rounded-md bg-gradient-color bg-no-repeat bg-contain text-light">
        <NotificationProvider>
          <div className="flex flex-col gap-6 px-6 py-12 lg:flex-row lg:px-24">
            <SideBar className="hidden lg:flex" />
            <main className="flex flex-1 flex-col gap-6">
              <Header />
              <SideBar className="lg:hidden" />
              <div className="rounded-lg bg-foreground text-background">
                {children}
              </div>
              <Footer />
            </main>
          </div>
        </NotificationProvider>
      </body>
    </html>
  )
}
