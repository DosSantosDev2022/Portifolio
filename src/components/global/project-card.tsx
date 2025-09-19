// app/components/project-card.tsx
import Image from 'next/image'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '../ui'
import { FaEye } from 'react-icons/fa'
import type { Project } from '@/@types/projects'
import { ProjectDetailsModal } from './project-details-modal'

interface ProjectCardProps {
	project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
	return (
		<Card className='flex flex-col h-full overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-xl'>
			<CardHeader className='p-0'>
				<div className='aspect-[4/2] relative'>
					<Image
						src={project.coverImage.url || ''}
						alt={`Imagem do projeto ${project.title}`}
						fill
						className='object-cover'
					/>
				</div>
			</CardHeader>
			<CardContent className='flex-1 px-6'>
				<CardTitle className='mb-2 text-xl font-semibold'>
					{project.title}
				</CardTitle>
				<p className='text-muted-foreground text-sm line-clamp-6'>
					{project.description}
				</p>
			</CardContent>
			<CardFooter>
				<div className='grid w-full'>
					<div className='flex flex-wrap gap-2 mb-3'>
						{project.technologie.map((tag) => (
							<Badge key={tag.id} variant='secondary'>
								{tag.name}
							</Badge>
						))}
					</div>
					<div className='flex items-center w-full'>
						<ProjectDetailsModal project={project}>
							<Button
								className='w-full font-semibold text-foreground'
								variant={'default'}
							>
								Ver Detalhes
							</Button>
						</ProjectDetailsModal>
					</div>
				</div>
			</CardFooter>
		</Card>
	)
}

export { ProjectCard }
