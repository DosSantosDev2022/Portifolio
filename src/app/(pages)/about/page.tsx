// app/about/page.tsx

import { ScrollAnimation } from '@/components/global';
import { Heading, Paragraph } from '@/components/ui'; // Importando Heading e Paragraph para consistência
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
// Importa os dados do nosso novo ficheiro
import {
	biography,
	cta,
	skillCategories,
} from '@/config/about-data'; // Removido pageHeader pois não estava sendo utilizado
import { ArrowRight, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * @title About Page
 * @description Componente da página "Sobre Mim" do portfólio.
 * Apresenta a biografia, competências e uma chamada para ação.
 * @returns {JSX.Element} O componente da página "Sobre Mim".
 */
export default function AboutPage(): JSX.Element {
	return (
		// Container principal com espaçamento ajustado para melhor "respiro"
		<div className='container mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-32'>

			{/* --- Secção de Biografia com Foto --- */}
			<section className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto'>
				<ScrollAnimation className='order-2 md:order-1 space-y-6'>
					<Heading as="h1" className='text-4xl lg:text-5xl font-extrabold leading-tight'>
						{biography.title}
					</Heading>
					{biography.paragraphs.map((bio, index) => (
						<Paragraph key={index} className='text-lg text-muted-foreground'>
							{bio}
						</Paragraph>
					))}
				</ScrollAnimation>

				<ScrollAnimation className='order-1 md:order-2 flex justify-center'>
					<div className='relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-primary/50'>
						<Image
							src={biography.imageUrl}
							alt='Foto de Juliano Santos'
							fill
							className='object-cover object-center transform transition-transform duration-500 hover:scale-105'
							priority // Carrega a imagem com prioridade, pois é a principal da página
						/>
					</div>
				</ScrollAnimation>
			</section>

			{/* --- Secção de Competências (Skills) --- */}
			<section className='max-w-6xl mx-auto'>
				<ScrollAnimation className='text-center mb-16'>
					<Heading as="h2" className='text-3xl lg:text-4xl font-bold'>Minhas Competências</Heading>
					<Paragraph className='text-muted-foreground mt-3 text-lg'>
						Uma visão geral das tecnologias e ferramentas que domino e utilizo diariamente.
					</Paragraph>
				</ScrollAnimation>

				{/* Aplicamos um layout de grade para as categorias em telas maiores */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16'>
					{skillCategories.map((category, index) => (
						<ScrollAnimation

							key={category.title}
							// Removidas as classes de fundo, sombra e borda para um visual mais limpo
							className='space-y-4'
						>
							<Heading as="h3" className='text-2xl font-semibold border-b pb-2 mb-6 text-foreground text-left'>
								{category.title}
							</Heading>

							{/* Ocultamos a lógica de centralização e usamos o flex-start para melhor alinhamento */}
							<div className='flex flex-wrap gap-3 justify-start'>
								{category.skills.map((skill) => (
									<Badge
										key={skill.name}
										variant="outline" // Usamos 'outline' como base
										className='px-4 py-2 text-base font-medium flex items-center gap-2 rounded-full border-primary/50 text-foreground 
                                       hover:bg-primary/10 transition-all duration-200'
									>
										{/* Ícone com a cor de destaque (primary) */}
										{skill.icon && <skill.icon className='size-4 text-primary' />}
										{skill.name}
									</Badge>
								))}
							</div>
						</ScrollAnimation>
					))}
				</div>
			</section>

			{/* --- Secção Call to Action (CTA) --- */}
			<section className='max-w-4xl mx-auto'>
				<ScrollAnimation className='bg-gradient-to-r from-primary/20 to-secondary/20 p-10 rounded-2xl text-center shadow-xl border border-primary/30'>
					<Heading as="h2" className='text-3xl lg:text-4xl font-bold mb-4 text-primary'>
						{cta.title}
					</Heading>
					<Paragraph className='text-muted-foreground mb-8 text-lg max-w-2xl mx-auto'>
						{cta.description}
					</Paragraph>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Button asChild size='lg' className='py-3 px-8 text-lg font-semibold'>
							<Link href='/contact' className='flex items-center gap-2'>
								Entrar em Contato <Mail className='ml-2 size-5' />
							</Link>
						</Button>
						<Button asChild size='lg' variant='outline' className='py-3 px-8 text-lg'>
							<Link href='/projects' className='flex items-center gap-2'>
								Ver Meus Projetos <ArrowRight className='ml-2 size-5' />
							</Link>
						</Button>
					</div>
				</ScrollAnimation>
			</section>

		</div>
	)
}