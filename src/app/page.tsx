import { getHomePage } from '@/services/hygraph/get-home-page'
import { bebas } from '@/assets/fonts'
import Link from 'next/link'
import { Button } from '@/components/ui'
import {
	RichText,
	Projects,
	ScrollAnimation,
	Card,
} from '@/components/global'
import Image from 'next/image'

export default async function Home() {
	const { home } = await getHomePage()

	return (
		<div className='container mx-auto space-y-10 px-4 py-8 md:space-y-20 lg:px-12 lg:py-16'>
			{/* Hero Section */}
			<ScrollAnimation className='flex flex-col items-start lg:w-[582px]'>
				<h1
					className={`${bebas.className} text-4xl font-normal md:text-6xl lg:text-8xl`}
				>
					{home.sectionHero.title}
				</h1>
				<span className='lg:text-xl text-base text-muted font-normal'>
					{home.sectionHero.smallText}
				</span>
			</ScrollAnimation>

			{/* About Me Section */}
			<ScrollAnimation className='flex flex-col items-start gap-6 rounded-md md:gap-12'>
				<div className='flex flex-col items-start gap-4'>
					<h2 className='text-lg font-bold md:text-xl lg:text-4xl'>
						{home.sectionAboutMe.smallText}
					</h2>
					<RichText
						content={home.sectionAboutMe.longText.raw}
						renderers={{
							bold: ({ children }) => (
								<b className='font-bold'>{children}</b>
							),
							p: ({ children }) => (
								<p className='text-base font-light'>{children}</p>
							),
						}}
					/>
					<Button sizes='xs' asChild variants='shine'>
						<Link href={'/about'} className='text-sm'>
							Veja mais
						</Link>
					</Button>
				</div>
				<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
					{home.features.map((feature) => (
						<Card key={feature.id} className='h-full'>
							<div className='flex flex-col items-start gap-2'>
								<div className='flex items-center space-x-2 w-full p-0.5'>
									<Image
										alt=''
										src={feature.icon?.url}
										width={20}
										height={20}
										quality={100}
									/>
									<h4 className='text-base font-bold'>{feature.title}</h4>
								</div>
								<span className='text-base text-muted font-light'>
									{feature.description}
								</span>
							</div>
						</Card>
					))}
				</div>
			</ScrollAnimation>

			{/* Featured Projects Section */}
			<ScrollAnimation className='space-y-8'>
				<div className='flex flex-col items-start gap-1'>
					<h2
						className={`${bebas.className} text-4xl lg:text-6xl font-normal`}
					>
						{home.featuredProjects.title}
					</h2>
					<p className='text-muted text-base lg:text-xl'>
						{home.featuredProjects.smallText}
					</p>
				</div>
				<div className='flex flex-col gap-14 md:gap-20'>
					{home.featuredProjects.projects.map((project) => (
						<Projects
							key={project.id}
							title={project.title}
							codeUrl={project.codeLink}
							demoUrl={project.deployLink}
							slug={`/project/${project.slug}`}
							description={project.description}
							coverImage={project.coverImage.url}
							id={project.title}
							tech={project.technologie.map((tech) => ({
								id: tech.id,
								name: tech.name,
								icon: tech.icon.url,
							}))}
						/>
					))}
				</div>
				<div className='flex justify-end'>
					<Button asChild sizes='xs' variants='shine'>
						<Link href={'/projects'}>Ver todos</Link>
					</Button>
				</div>
			</ScrollAnimation>
		</div>
	)
}
