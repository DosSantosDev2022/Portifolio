import '../styles/globals.css'
import { NotificationProvider } from '@/context/notification/notificationContext'
import { twMerge } from 'tailwind-merge'
import { Sidebar } from '@/components/global/sidebar/sidebar'
import { QueryProvider } from '@/providers/query-provider'

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
			<body className='bg-background text-foreground dark'>
				<QueryProvider>
					<NotificationProvider>
						<div className='flex min-h-screen'>
							<Sidebar />
							<main className='flex-1 md:pl-64 lg:pl-72 pt-16 lg:pt-0'>
								{children}
							</main>
						</div>
					</NotificationProvider>
				</QueryProvider>
			</body>
		</html>
	)
}
