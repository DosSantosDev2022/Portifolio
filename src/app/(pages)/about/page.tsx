import { getAboutMe } from '@/services/hygraph/get-about-me'
import { bebas } from '@/assets/fonts'
import Image from 'next/image'
import { RichText, ScrollAnimation } from '@/components/global'

export default async function AboutPage() {
	const { aboutMe } = await getAboutMe()

	const techs = aboutMe.sectionTechnologies
	return (
		<div className='container mx-auto space-y-28 p-4 sm:px-8 lg:px-16 lg:py-20'>
			{/* Hero Section */}
			<ScrollAnimation className='flex w-full flex-col items-start justify-between gap-6 lg:flex-row'>
				<div className='flex w-full flex-col gap-2'>
					<h1
						className={`${bebas.className} text-4xl leading-tight font-normal sm:text-5xl lg:text-[5rem] lg:leading-[90.9px]`}
					>
						{aboutMe.sectionHero.title}
					</h1>
					<p className='text-muted text-sm leading-6 font-normal sm:text-base sm:leading-[27px]'>
						{aboutMe.sectionHero.longText.text}
					</p>
				</div>
			</ScrollAnimation>

			{/* Technologies Section */}
			<ScrollAnimation className='flex flex-col items-start justify-center rounded-md bg-zinc-800/40 p-4 sm:p-6'>
				<div className='mb-6 sm:mb-8'>
					<h2 className={`${bebas.className} text-4xl sm:text-6xl`}>
						{aboutMe.sectionTechnologies.title}
					</h2>
					<p className='text-muted text-sm font-light sm:text-base'>
						{aboutMe.sectionTechnologies.smallText}
					</p>
				</div>
				<div className='flex w-full flex-wrap items-center gap-2 sm:gap-4'>
					{techs?.technologies.map((tech) => (
						<Image
							key={tech.id}
							alt={tech.name}
							src={tech.icon.url}
							width={42}
							height={42}
							quality={100}
							className='rounded-md border border-zinc-700 bg-zinc-800 p-1'
						/>
					))}
				</div>
			</ScrollAnimation>

			{/* Story Section */}
			<ScrollAnimation className='flex w-full flex-col gap-6 lg:flex-row'>
				<div className='flex w-full flex-col'>
					<h2 className={`${bebas.className} text-4xl lg:text-7xl`}>
						{aboutMe.sectionstory.title}
					</h2>
					<RichText
						content={aboutMe.sectionstory.longText.raw}
						renderers={{
							p: ({ children }) => (
								<p className='text-muted text-base font-light'>
									{children}
								</p>
							),
						}}
					/>
				</div>
			</ScrollAnimation>
		</div>
	)
}
