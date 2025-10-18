// app/page.tsx

import { ScrollAnimation } from '@/components/global'
import { Heading, Paragraph } from '@/components/ui'
import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
// Presumo que 'feature', 'services' e 'techStack' estão tipados corretamente com Interface
import { feature } from '@/config/home-data'
import { services } from '@/config/services'
import { techStack } from '@/config/tech-stack'
import Link from 'next/link'
import { MdEmail } from 'react-icons/md'

/**
 * @title Home Page
 * @description Componente principal da página inicial do portfólio.
 * Gerencia o layout das seções de introdução, stack de desenvolvimento,
 * tecnologias e serviços.
 * @returns {JSX.Element} O componente da página inicial.
 */
export default function Home(): JSX.Element {
	return (
		// Ajustado o espaçamento vertical para ser mais generoso em telas grandes.
		<div className='container mx-auto mb-12 space-y-20 px-4 pt-12 lg:space-y-32 lg:pt-24'>

			{/* --- Secção 1: Introdução (Hero) --- */}
			<section className='space-y-6 lg:max-w-3xl'>
				<ScrollAnimation >
					<Heading as={'h1'} className='text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight'>
						Olá! Eu sou Juliano <br />
						<span className='text-primary'>Desenvolvedor FullStack</span>
					</Heading>
					<Paragraph className='mt-4 text-lg text-muted-foreground'>
						Desenvolvedor fullstack e especialista em **Next.js**, construindo
						aplicações de ponta a ponta com foco em **performance** e **experiência do usuário**.
					</Paragraph>
					<div className='flex flex-col sm:flex-row gap-4 pt-8'>
						<Button asChild size="lg" variant={'secondary'} className='text-lg font-semibold'>
							<Link href='/about'>Sobre mim</Link>
						</Button>
						<Button
							asChild
							size="lg"
							variant={'outline'}
							className='inline-flex items-center justify-center gap-2 text-lg'
						>
							<Link href='/contact' className='flex items-center gap-2'>
								<MdEmail className='size-5' /> Contato
							</Link>
						</Button>
					</div>
				</ScrollAnimation>
			</section>

			{/* --- Secção 2: Features / Stack de Desenvolvimento --- */}
			<section>
				<ScrollAnimation className='pb-12'>
					<Heading as={'h2'} className='text-3xl font-bold'>Stack de Desenvolvimento</Heading>
					<Paragraph className='text-muted-foreground mt-2'>
						Habilidades e competências que definem o meu trabalho e a qualidade dos projetos que entrego.
					</Paragraph>
				</ScrollAnimation>

				{/* Ajustado o grid para ser 1 coluna em mobile, 2 em tablet, e 3 ou 4 em desktop (depende do seu design preferido, optei por 3 para dar mais espaço, mas mantive a opção de 4 para a sua estrutura original) */}
				<ScrollAnimation className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{feature.map((feat) => (
						<Card key={feat.id} className='hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-primary/50'>
							<CardHeader className='flex flex-col items-center text-center'>
								{/* Ícone maior e mais destacado */}
								<div className='flex h-16 w-16 items-center justify-center rounded-xl bg-primary/20 mb-4'>
									<feat.icon className='size-8 text-primary' />
								</div>
								<CardTitle className='text-xl font-semibold'>{feat.name}</CardTitle>
							</CardHeader>
							<CardContent className='pt-0'>
								<CardDescription className='text-sm text-center'>
									<Paragraph>
										{feat.description}
									</Paragraph>
								</CardDescription>
							</CardContent>
						</Card>
					))}
				</ScrollAnimation>
			</section>

			{/* --- Secção 3: Tecnologias --- */}
			<section>
				<ScrollAnimation className='pb-12'>
					<Heading as={'h2'} className='text-3xl font-bold'>Tecnologias</Heading>
					<Paragraph className='text-muted-foreground mt-2'>
						Essas são as ferramentas e bibliotecas que mais utilizo para construir minhas aplicações.
					</Paragraph>
				</ScrollAnimation>

				{/* Ajustado o grid para ser 2 colunas em mobile e 3/4 em desktop */}
				<ScrollAnimation className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
					{techStack.map((tech) => (
						// Cards menores e mais densos, ideais para uma lista de tecnologias.
						<Card key={tech.id} className='h-full flex flex-col justify-start p-4 hover:bg-muted/50 transition-colors'>
							<CardHeader className='p-0 flex flex-row items-center gap-3 space-y-0'>
								{/* Ícone ligeiramente menor para lista de tecnologias */}
								<div className='flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 flex-shrink-0'>
									<tech.icon className='size-5 text-primary' />
								</div>
								<CardTitle className='text-base font-semibold text-left'>{tech.name}</CardTitle>
							</CardHeader>
							<CardContent className='p-0 mt-2'>
								<CardDescription className='text-xs text-left text-muted-foreground'>
									{tech.description}
								</CardDescription>
							</CardContent>
						</Card>
					))}
				</ScrollAnimation>
			</section>

			{/* --- Secção 4: Serviços --- */}
			<section className='mb-12'>
				<ScrollAnimation className='pb-12'>
					<Heading as={'h2'} className='text-3xl font-bold'>Serviços</Heading>
					<Paragraph className='text-muted-foreground mt-2'>
						Conheça as soluções de desenvolvimento que ofereço para transformar sua ideia em realidade.
					</Paragraph>
				</ScrollAnimation>

				{/* Ajustado o grid para 1 coluna em mobile, 2 em tablet, e 3 em desktop */}
				<ScrollAnimation className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
					{services.map((service) => (
						<Card key={service.id} className='text-left h-full border-l-4 border-primary/50 hover:bg-muted/30 transition-colors'>
							<CardHeader className='pb-2'>
								<div className='flex h-12 w-12 items-center justify-center rounded-md bg-primary/20 mb-3'>
									<service.icon className='size-6 text-primary' />
								</div>
								<CardTitle className='text-lg font-semibold'>{service.name}</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className='text-sm text-muted-foreground'>
									<Paragraph>
										{service.description}
									</Paragraph>
								</CardDescription>
							</CardContent>
						</Card>
					))}
				</ScrollAnimation>
			</section>

		</div>
	)
}