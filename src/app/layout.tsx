import '../styles/globals.css'
import { Header, SideBar, Footer } from '@/components/global'
import { NotificationProvider } from '@/context/notification/notificationContext'
import { twMerge } from 'tailwind-merge'

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='pt-BR' className={twMerge('custom-scrollbar')}>
			<head>
				<link rel='icon' href='/favicon.ico' sizes='any' />
			</head>
			<body className='bg-gradient-color h-full rounded-md bg-contain bg-no-repeat'>
				<NotificationProvider>
					<div className='flex flex-col gap-6 px-6 py-12 lg:flex-row lg:px-24'>
						<SideBar className='hidden lg:flex' />
						<main className='flex flex-1 flex-col gap-6'>
							<Header />
							<SideBar className='lg:hidden' />
							<div className='bg-foreground text-background rounded-lg'>
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
