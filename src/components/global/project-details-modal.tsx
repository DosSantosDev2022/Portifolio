import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaRegWindowMaximize } from 'react-icons/fa'
import type { Project } from '@/@types/projects'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogDescription,
} from '@/components/ui/dialog'
import { RichText } from './richtext'
import { defaultRenders } from './richTextRenders'

// Definimos as propriedades que o nosso modal vai aceitar
interface ProjectDetailsModalProps {
	project: Project // Os dados do projeto para exibir
	children: React.ReactNode // O elemento que vai acionar o modal (nosso botão)
}

const ProjectDetailsModal = ({
	project,
	children,
}: ProjectDetailsModalProps) => {
	return (
		<Dialog>
			{/* O DialogTrigger vai usar o 'children' que passamos como seu gatilho */}
			<DialogTrigger asChild>{children}</DialogTrigger>

			{/* O conteúdo do modal permanece o mesmo de antes */}
			<DialogContent className='sm:max-w-[750px] overflow-y-auto max-h-[70vh] scrollbar-custom '>
				<DialogHeader>
					<DialogTitle className='text-2xl'>{project.title}</DialogTitle>
					<DialogDescription>
						Detalhes completos do projeto.
					</DialogDescription>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					<div className='relative w-full aspect-video'>
						<Image
							src={project.coverImage.url || ''}
							alt={`Imagem do projeto ${project.title}`}
							fill
							className='object-cover rounded-md'
						/>
					</div>
					<p className='text-sm text-muted-foreground'>
						{project.description}
					</p>
					<div className='flex flex-wrap gap-2'>
						{project.technologie.map((tag) => (
							<Badge key={tag.id} variant='secondary'>
								{tag.name}
							</Badge>
						))}
					</div>

					<div className='p-2'>
						<RichText
							content={project.completeDescription.raw}
							renderers={defaultRenders}
						/>
					</div>
				</div>
				<div className='flex justify-end gap-4'>
					<Button variant={'secondary'} asChild>
						<Link target='_blank' href={project.codeLink}>
							<FaGithub className='mr-2' />
							Repositório
						</Link>
					</Button>
					<Button variant={'secondary'} asChild>
						<Link target='_blank' href={project.deployLink}>
							<FaRegWindowMaximize className='mr-2' />
							Preview
						</Link>
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	)
}

export { ProjectDetailsModal }
