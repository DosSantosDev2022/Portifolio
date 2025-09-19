// app/layout.tsx

import { Sidebar } from '@/components/global/sidebar/sidebar'
import { QueryProvider } from '@/providers/query-provider'
import type { Metadata } from 'next' // 1. Importar o tipo Metadata
import '../styles/globals.css'
import { Toaster } from 'sonner'

// 2. Criar e exportar o objeto de metadados
export const metadata: Metadata = {
	// Título que aparecerá na aba do navegador
	title: {
		template: 'Portifólio',
		default: 'Juliano Santos | Desenvolvedor FullStack',
	},
	// Descrição do seu site (importante para SEO)
	description:
		'Um portfólio incrível mostrando meus projetos e habilidades em desenvolvimento web.',
	// Palavras-chave relevantes para o seu site
	keywords: [
		'Desenvolvimento Web',
		'React',
		'Next.js',
		'TypeScript',
		'Portfólio',
	],
	// Ícone do site (favicon)
	icons: {
		icon: '/favicon.ico',
	},
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		// A tag <head> foi removida daqui, o Next.js vai gerá-la automaticamente
		<html lang='pt-BR'>
			<body className='bg-background text-foreground scrollbar-custom dark'>
				<QueryProvider>
					<div className='flex min-h-screen'>
						<Sidebar />
						<main className='flex-1 md:pl-64 lg:pl-72 pt-16 lg:pt-0'>
							{children}
						</main>
					</div>
					<Toaster position='top-center' richColors />
				</QueryProvider>
			</body>
		</html>
	)
}
