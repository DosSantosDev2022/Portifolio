import { getDetailsProject } from '@/services/hygraph/get-details-project'
import { bebas } from '@/assets/fonts'
import { RichText } from '@/components/global'
import { Button } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaRegWindowMaximize } from 'react-icons/fa'

interface ProjectPageDetailsProps {
	params: {
		slug: string
	}
}

export default async function ProjectPageDetails({
	params,
}: ProjectPageDetailsProps) {
	const project = await getDetailsProject(params.slug)
	console.log(project)
	return (
		<div className='px-5 py-10'>
			<div className='grid'>
				<h1
					className={`${bebas.className} text-7xl font-normal lg:text-9xl`}
				>
					{project.title}{' '}
				</h1>
				<p className='text-muted text-base'>{project.description} </p>
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
						<h2 className={`${bebas.className} text-3xl`}>
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
										className={`${bebas.className} text-accent text-2xl tracking-wider sm:text-3xl`}
									>
										{children}
									</h2>
								),
								h5: ({ children }) => (
									<h5 className={'mb-1 font-bold'}>{children}</h5>
								),
								p: ({ children }) => (
									<p className='text-base text-muted'>{children}</p>
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
							<Button sizes='full' variants='primary' asChild>
								<Link
									target='_blank'
									className='flex items-center gap-2 text-lg lg:text-base'
									href={project.codeLink || ''}
								>
									GitHub <FaGithub size={18} />
								</Link>
							</Button>
							<Button sizes='full' variants='primary' asChild>
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
