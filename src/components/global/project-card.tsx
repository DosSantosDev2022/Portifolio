// app/components/global/project-card.tsx

import type { Project } from '@/@types/projects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaRegWindowMaximize } from 'react-icons/fa'

interface ProjectCardProps {
	project: Project
}

const ProjectCard = ({ project }: ProjectCardProps): JSX.Element => {
	return (
		// 1. Visual mais escuro e elegante, com borda sutil.
		<Card className='flex flex-col overflow-hidden rounded-xl borde
     shadow-2xl shadow-black/40 transition-all duration-300 
     hover:border-primary/50 hover:shadow-primary/30'>

			<CardHeader className='p-0'>
				{/* Imagem: Mantém o aspect ratio. */}
				<div className='aspect-[4/2.5] relative overflow-hidden'>
					<Image
						src={project.coverImage.url || '/placeholder-project.jpg'}
						alt={`Imagem do projeto ${project.title}`}
						fill
						className='object-cover transform transition-transform duration-700 hover:scale-[1.05]'
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
			</CardHeader>

			{/* 2. 🎯 BLOCO DE CONTEÚDO: Redução de altura para compactar o card. */}
			<CardContent
				// Reduzindo o padding vertical (py-4) e fixando a altura para 110px.
				className='flex-none px-6 py-4 space-y-2 min-h-[110px] max-h-[110px] overflow-hidden'>

				{/* Título: Fonte ligeiramente menor e leading mais apertado. */}
				<CardTitle className='text-2xl font-bold leading-tight line-clamp-2'>
					{project.title}
				</CardTitle>

				{/* Descrição: Texto menor para caber no espaço. */}
				<p className='text-muted-foreground text-sm line-clamp-3'>
					{project.description}
				</p>
			</CardContent>

			{/* 3. RODAPÉ: Padding apertado e min-height ajustado. */}
			<CardFooter className='flex-col items-start gap-3 p-4 pt-0'>

				{/* Bloco de Tags: Reduzindo min-h para ser mais realista (40px) */}
				<div className='flex flex-wrap gap-2 pb-2'>
					{project.technologie.map((tag) => (
						<Badge
							key={tag.id}
							variant='default'
							// Tags com cor primária e fundo sutil
							className='text-xs px-2 py-0.5 font-medium rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors'
						>
							{tag.name}
						</Badge>
					))}
				</div>

				{/* Botões (Ações 50/50) - Mantidos limpos e funcionais */}
				<div className='w-full flex gap-3'>

					<Button
						className='flex-1 font-semibold h-9 bg-primary  hover:bg-primary/90' // h-9 para ser mais compacto
						variant={'default'}
						asChild
					>
						<Link target='_blank' href={project.deployLink} className='flex items-center justify-center gap-2'>
							<FaRegWindowMaximize className='size-4' />
							Preview
						</Link>
					</Button>

					<Button
						className='flex-1 font-semibold h-9'
						variant={'outline'}
						asChild
					>
						<Link target='_blank' href={project.codeLink} className='flex items-center justify-center gap-2'>
							<FaGithub className='size-4' />
							Repositório
						</Link>
					</Button>
				</div>
			</CardFooter>
		</Card>
	)
}

export { ProjectCard }

