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
import { feature } from '@/config/home-data'
import { services } from '@/config/services'
import { techStack } from '@/config/tech-stack'
import Link from 'next/link'
import { MdEmail } from 'react-icons/md'

export default function Home() {
	return (
		<div className='container mx-auto mb-6 space-y-14 px-4 py-6 lg:space-y-20 lg:py-16'>
			{/* --- Secção 1: Introdução  --- */}
			<section className='space-y-4'>
				<ScrollAnimation>
					<Heading as={'h1'}>
						Olá! Eu sou Juliano <br />
						Desenvolvedor FullStack
					</Heading>
					<Paragraph className='mt-3'>
						Desenvolvedor fullstack e especialista em Next Js, construindo
						aplicações de ponta a ponta.
					</Paragraph>
					<div className='flex gap-4 pt-4'>
						<Button asChild variant={'secondary'}>
							<Link href='/about'>Sobre mim</Link>
						</Button>
						<Button
							asChild
							variant={'outline'}
							className='inline-flex items-center justify-center gap-2'
						>
							<Link href='/contact' className='flex items-center gap-2'>
								<MdEmail className='size-4' /> Contato
							</Link>
						</Button>
					</div>
				</ScrollAnimation>
			</section>

			{/* --- NOVA Secção 2: Features / O que eu ofereço --- */}
			<section>
				<ScrollAnimation className='pb-8 text-center md:text-start'>
					<Heading as={'h2'}>Stack de desenvolvimento</Heading>
					<p className='text-muted-foreground mt-1'>
						Essa é a minha stack de desenvolvimento.
					</p>
				</ScrollAnimation>

				<ScrollAnimation className='grid gap-6 sm:grid-cols-1 md:grid-cols-4 p-2 w-full'>
					{/* Feature 1: Frontend */}
					{feature.map((feat) => {
						return (
							<Card key={feat.id} className='text-center'>
								<CardHeader>
									<div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4'>
										<feat.icon className='size-6 text-primary' />
									</div>
									<CardTitle>{feat.name}</CardTitle>
								</CardHeader>
								<CardContent>
									<CardDescription>
										<Paragraph>
											{feat.description}
										</Paragraph>
									</CardDescription>
								</CardContent>
							</Card>
						)
					})}
				</ScrollAnimation>
			</section>

			<section className='container py-8'>
				<ScrollAnimation className='pb-8 text-center md:text-start space-y-2.5'>
					<Heading as={'h2'}>Tecnologias</Heading>
					<Paragraph>
						Essas são as tecnologias que mais utilizo no desenvolvimento das minhas aplicações.
					</Paragraph>
				</ScrollAnimation>

				<ScrollAnimation className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-2 w-full'>
					{techStack.map((tech) => (
						<Card key={tech.id} className='text-center'>
							<CardHeader>
								<div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4'>
									<tech.icon className='size-6 text-primary' />
								</div>
								<CardTitle>{tech.name}</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>
									<Paragraph>
										{tech.description}
									</Paragraph>
								</CardDescription>
							</CardContent>
						</Card>
					))}
				</ScrollAnimation>
			</section>

			<section className='container py-8'>
				<ScrollAnimation className='pb-8 text-center md:text-start space-y-2.5'>
					<Heading as={'h2'}>Serviços</Heading>
					<Paragraph>
						Conheça os serviços de desenvolvimento que ofereço para transformar sua ideia em realidade.
					</Paragraph>
				</ScrollAnimation>

				<ScrollAnimation className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 w-full'>
					{services.map((service) => (
						<Card key={service.id} className='text-center'>
							<CardHeader>
								<div className='mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4'>
									<service.icon className='size-6 text-primary' />
								</div>
								<CardTitle>{service.name}</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription>
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
