// app/projects/page.tsx
'use client'

import { ScrollAnimation } from '@/components/global'
import { ProjectCard } from '@/components/global/project-card'
import { useProjectData } from '@/hooks/use-project-data'
import { Loader2 } from 'lucide-react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function ProjectsPage() {
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
		useProjectData()

	const { ref, inView } = useInView()

	useEffect(() => {
		if (inView && hasNextPage) {
			fetchNextPage()
		}
	}, [inView, hasNextPage, fetchNextPage])

	if (status === 'pending') {
		return (
			<div className='flex justify-center items-center h-screen'>
				<Loader2 className='animate-spin size-12 text-primary' />
			</div>
		)
	}

	if (status === 'error') {
		return (
			<div className='text-center p-8'>
				Ocorreu um erro ao carregar os projetos.
			</div>
		)
	}

	return (
		<div className='p-4 sm:p-6 lg:p-8'>
			<div className='mb-8'>
				<h1 className='text-4xl font-bold tracking-tight'>
					Meus Projetos
				</h1>
				<p className='mt-2 text-lg text-muted-foreground'>
					Uma coleção de trabalhos que desenvolvi, desde aplicações web a
					sistemas de design.
				</p>
			</div>

			<section>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{/* Mapeamos sobre as páginas e, em seguida, sobre os projetos de cada página */}
					{data?.pages.map((page, pageIndex) =>
						page.map((project) => (
							<ScrollAnimation key={project.id}>
								<ProjectCard project={project} />
							</ScrollAnimation>
						)),
					)}
				</div>
			</section>

			{/* Elemento "sentinela" para o Intersection Observer */}
			<div ref={ref} className='mt-8 flex justify-center'>
				{isFetchingNextPage && (
					<Loader2 className='animate-spin size-8 text-primary' />
				)}
				{/* A mensagem só deve aparecer se não houver próxima página. 
      Já sabemos que o status não é 'pending' aqui. */}
				{!hasNextPage && (
					<p className='text-muted-foreground'>Você chegou ao fim!</p>
				)}
			</div>
		</div>
	)
}
