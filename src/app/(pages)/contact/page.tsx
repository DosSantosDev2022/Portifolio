import { ScrollAnimation } from '@/components/global'
import { FormContact } from '@/components/global/form'

export function metadata() {
	return {
		title: 'Portifílio - Contato',
		description:
			'Olá! Sou um apaixonado desenvolvedor Full Stack com experiência em diversas tecnologias modernas da web. Minha jornada no mundo da programação começou com uma paixão pelo front-end, e ao longo dos anos, expandi meu conhecimento para abranger também o back-end, tornando-me um desenvolvedor versátil e capaz de criar soluções completas e eficientes.',
		openGraph: {
			title: 'Portifílio - DosSantosDev',
			description:
				'Olá! Sou um apaixonado desenvolvedor Full Stack com experiência em diversas tecnologias modernas da web. Minha jornada no mundo da programação começou com uma paixão pelo front-end, e ao longo dos anos, expandi meu conhecimento para abranger também o back-end, tornando-me um desenvolvedor versátil e capaz de criar soluções completas e eficientes.',
			url:
				process.env.NEXT_PUBLIC_SITE_URL || 'https://dossantosdev.com.br/',
			siteName: 'Meu Portfólio / DosSantosdev',
			images: [
				{
					url: '/images/author.png',
					width: 1200,
					height: 630,
					alt: 'Juliano Santos, desenvolvedor FullStack',
				},
			],
			locale: 'pt_BR',
			type: 'website',
		},

		twitter: {
			card: 'summary_large_image',
			title: 'Portifílio - DosSantosDev',
			description:
				'Olá! Sou um apaixonado desenvolvedor Full Stack com experiência em diversas tecnologias modernas da web. Minha jornada no mundo da programação começou com uma paixão pelo front-end, e ao longo dos anos, expandi meu conhecimento para abranger também o back-end, tornando-me um desenvolvedor versátil e capaz de criar soluções completas e eficientes.',
			images: ['/images/author.png'],
		},

		icons: {
			icon: '/favicon.ico',
			shortcut: '/favicon-16x16.png',
			apple: '/apple-touch-icon.png',
		},

		robots: {
			index: true,
			follow: true,
			nocache: true,
			googleBot: {
				index: true,
				follow: true,
				noimageindex: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},

		// Opcional: Autor
		// authors: [{ name: 'Seu Nome', url: 'https://seusite.com/sobre' }],

		keywords: [
			'desenvolvimento web',
			'desenvolvimento mobile',
			'tailwindcss',
			'react',
			'next.js',
			'portfólio',
			'programação',
			'frontend',
			'fullstack',
			'backend',
		],
	}
}

export default async function Contact() {
	return (
		<ScrollAnimation className='flex flex-col gap-10 p-4 lg:px-10 lg:py-8'>
			<div className=' w-full lg:max-w-4xl mx-auto space-y-10'>
				<h2 className='text-start text-2xl font-bold  sm:text-4xl'>
					Entre em contato para parcerias.
				</h2>
				<FormContact />
			</div>
		</ScrollAnimation>
	)
}
