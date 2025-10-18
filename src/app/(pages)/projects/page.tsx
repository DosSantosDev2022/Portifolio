// app/projects/page.tsx
'use client'

import { ScrollAnimation } from '@/components/global';
import { ProjectCard } from '@/components/global/project-card';
import { Heading, Paragraph } from '@/components/ui'; // Importado para consistência
import { useProjectData } from '@/hooks/use-project-data';
import { Loader2 } from 'lucide-react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * @title Projects Page
 * @description Página principal de listagem de projetos com Infinite Scroll.
 * @returns {JSX.Element} O componente da página de projetos.
 */
export default function ProjectsPage(): JSX.Element {
	const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
		useProjectData()

	const { ref, inView } = useInView({ threshold: 0.1 }) // Otimizado threshold

	useEffect(() => {
		if (inView && hasNextPage) {
			fetchNextPage()
		}
	}, [inView, hasNextPage, fetchNextPage])

	// Estados de Carregamento e Erro
	if (status === 'pending') {
		return (
			<div className='flex justify-center items-center min-h-[50vh]'>
				<Loader2 className='animate-spin size-12 text-primary' />
			</div>
		)
	}

	if (status === 'error') {
		return (
			<div className='text-center p-12'>
				<Paragraph className='text-red-500'>
					Ocorreu um erro ao carregar os projetos.
				</Paragraph>
			</div>
		)
	}

	return (
		<div className='container mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12'>

			{/* --- Cabeçalho da Página --- */}
			<div className='mb-8 max-w-2xl'>
				<Heading as={'h1'} className='text-4xl lg:text-5xl font-extrabold'>
					Meus Projetos
				</Heading>
				<Paragraph className='mt-3 text-lg text-muted-foreground'>
					Uma coleção de trabalhos que desenvolvi, focada em aplicações modernas e escaláveis.
				</Paragraph>
			</div>

			{/* --- Listagem dos Projetos --- */}
			<section>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10'>
					{data?.pages.map((page) =>
						page.map((project) => (
							<ScrollAnimation key={project.id}>
								<ProjectCard project={project} />
							</ScrollAnimation>
						)),
					)}
				</div>
			</section>

			{/* --- Infinite Scroll Loader/Sentinel --- */}
			<div ref={ref} className='mt-12 flex flex-col items-center justify-center space-y-4'>
				{isFetchingNextPage && (
					<Loader2 className='animate-spin size-8 text-primary' />
				)}
				{!hasNextPage && !isFetchingNextPage && (
					<Paragraph className='text-sm text-muted-foreground pt-4'>
						Você chegou ao fim dos projetos!
					</Paragraph>
				)}
			</div>
		</div>
	)
}