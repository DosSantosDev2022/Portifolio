import { getDetailsProject } from '@/services/hygraph/get-details-project'
import { bebas } from '@/assets/fonts'
import { RichText } from '@/components/global'
import { Button } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaRegWindowMaximize } from 'react-icons/fa'
import type { Metadata } from 'next'

interface ProjectPageDetailsProps {
	params: {
		slug: string
	}
}

// --- Metadata Dinâmico ---
export async function generateMetadata({
	params,
}: ProjectPageDetailsProps): Promise<Metadata> {
	const project = await getDetailsProject(params.slug)

	// Se o projeto não for encontrado, você pode retornar metadados padrão ou um 404
	if (!project) {
		return {
			title: 'Projeto Não Encontrado',
			description: 'O projeto que você está procurando não existe.',
		}
	}

	const projectTitle = `${project.title} | Detalhes do Projeto`
	const projectDescription =
		project.description ||
		'Confira os detalhes e tecnologias utilizadas neste projeto de desenvolvimento web.'
	const projectImageUrl =
		project.coverImage?.url || '/images/placeholder.png' // Imagem de fallback

	return {
		// Título da página: Título do projeto + Sufixo
		title: projectTitle,
		// Descrição meta: Breve resumo do projeto
		description: projectDescription,

		// Open Graph (para compartilhamento em redes sociais)
		openGraph: {
			title: projectTitle,
			description: projectDescription,
			url: `${process.env.NEXT_PUBLIC_SITE_URL}/project/${project.slug}`, // URL específica do projeto
			siteName: 'Seu Portfólio / UIChroma', // Nome do seu site/projeto
			images: [
				{
					url: projectImageUrl,
					width: 1200,
					height: 630,
					alt: project.title,
				},
			],
			locale: 'pt_BR',
			type: 'article', // Tipo 'article' é mais apropriado para páginas de conteúdo específico
			tags: project.technologie?.map((tech) => tech.name) || [], // Tags baseadas nas tecnologias
		},

		// Twitter Card
		twitter: {
			card: 'summary_large_image',
			title: projectTitle,
			description: projectDescription,
			images: [projectImageUrl],
			// creator: '@seu_usuario_twitter', // Opcional
		},

		// Ícone da aba do navegador
		icons: {
			icon: '/favicon.ico',
			shortcut: '/favicon-16x16.png',
			apple: '/apple-touch-icon.png',
		},

		// Robots
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
		// Opcional: Keywords
		keywords: [
			'projeto',
			project.title || 'desenvolvimento',
			...(project.technologie?.map((tech) => tech.name) || []), // Adicione as tecnologias como keywords
			'portfólio',
			'programação',
		],
	}
}

export default async function ProjectPageDetails({
	params,
}: ProjectPageDetailsProps) {
	const project = await getDetailsProject(params.slug)

	return (
		<div className='px-5 py-10'>
			<div className='grid'>
				<h1
					className={`${bebas.className} text-7xl font-normal lg:text-9xl`}
				>
					{project.title}{' '}
				</h1>
				<p className='text-muted text-lg'>{project.description} </p>
			</div>

			<div className='mt-10 flex justify-center rounded-xl bg-zinc-600/25'>
				{project.coverImage?.url && (
					<Image
						className='w-full max-w-xs object-contain sm:max-w-md lg:max-w-lg'
						alt={project.title || 'Foto de capa do projeto'}
						src={project.coverImage.url}
						width={400}
						height={400}
						quality={100}
					/>
				)}
			</div>

			<section className='mt-4 flex flex-col items-start justify-between gap-4 lg:flex-row'>
				<div className='px-3'>
					<div className='mt-10 w-full space-y-2'>
						<h2 className={`${bebas.className} text-3xl lg:text-5xl`}>
							Stack de desenvolvimento
						</h2>
						<div className='flex w-full flex-wrap gap-2 sm:gap-4'>
							{project?.technologie?.map((tech) => (
								<Image
									alt={tech.name}
									key={tech.id}
									src={tech.icon.url}
									width={45}
									height={45}
									quality={100}
									className='rounded-md border border-zinc-700 bg-zinc-800 p-1'
								/>
							))}
						</div>
					</div>

					<div className='mt-10 w-full space-y-3'>
						<RichText
							content={project.completeDescription?.raw}
							renderers={{
								bold: ({ children }) => (
									<b className='font-bold text-primary-foreground'>
										{children}
									</b>
								),
								h2: ({ children }) => (
									<h2
										className={`${bebas.className} text-accent text-2xl tracking-wider lg:text-4xl`}
									>
										{children}
									</h2>
								),
								h5: ({ children }) => (
									<h5 className={'mb-1 font-bold'}>{children}</h5>
								),
								p: ({ children }) => (
									<p className='text-lg text-muted'>{children}</p>
								),
								ul: ({ children }) => (
									<ul className='list-disc pl-5 text-sm sm:text-base'>
										{children}
									</ul>
								),
								li: ({ children }) => (
									<li className='text-muted'>{children}</li>
								),
								ol: ({ children }) => (
									<ol className='space-y-2'>{children}</ol>
								),
							}}
						/>

						<div className='mt-12 flex w-full gap-3 flex-row sm:gap-4'>
							<Button sizes='sm' variants='primary' asChild>
								<Link
									target='_blank'
									className='flex items-center gap-2 text-lg lg:text-base'
									href={project.codeLink || ''}
								>
									GitHub <FaGithub size={18} />
								</Link>
							</Button>
							<Button sizes='sm' variants='primary' asChild>
								<Link
									target='_blank'
									className='flex items-center gap-2 text-lg lg:text-base'
									href={project.deployLink || ''}
								>
									Preview <FaRegWindowMaximize size={18} />
								</Link>
							</Button>
						</div>
					</div>

					<Button
						variants='primary'
						asChild
						className='fixed right-4 bottom-4 z-50 w-16 animate-bounce text-center'
					>
						<Link href={'/projects'}>Voltar</Link>
					</Button>
				</div>
			</section>
		</div>
	)
}
