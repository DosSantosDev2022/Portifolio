import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui'
import { ScrollAnimation } from '../global'
import { FaGithub } from 'react-icons/fa'
import { CgDetailsMore } from 'react-icons/cg'
import { VscPreview } from 'react-icons/vsc'

interface ProjectsProps {
	id: string
	title: string
	description: string
	coverImage: string
	slug: string
	codeUrl?: string
	demoUrl: string
	tech?: {
		id: string
		name: string
		icon: string
	}[]
}

const Projects = ({
	id,
	title,
	description,
	coverImage,
	tech,
	demoUrl,
	slug,
	codeUrl,
}: ProjectsProps) => {
	return (
		<ScrollAnimation>
			<div
				id={id}
				className='border-border flex w-full flex-col items-center justify-center gap-3 rounded-md border shadow-xs lg:flex-row lg:gap-12'
			>
				<div className='relative flex w-full items-center justify-center rounded-md object-cover'>
					<Image
						alt={title}
						src={coverImage}
						width={400}
						height={400}
						quality={100}
					/>
				</div>

				<div className='flex w-full flex-col items-center justify-center space-y-4 p-5'>
					<div className='flex flex-col gap-4'>
						<h2 className='text-4xl leading-[44.8px] font-bold'>
							{title}
						</h2>
						<p className='text-muted left-[27px] text-sm font-normal'>
							{description}
						</p>
					</div>
					<div className='flex items-center justify-start w-full p-1.5 gap-2'>
						{tech?.map((tech) => (
							<div
								key={tech.id}
								className='border-border rounded-md border p-1.5'
							>
								<Image
									width={24}
									height={24}
									src={tech.icon}
									alt={tech.name}
								/>
							</div>
						))}
					</div>

					<div className='flex w-full items-center justify-start p-1.5 gap-2'>
						<Button sizes='xs' variants={'shine'} asChild>
							<Link href={codeUrl || ''}>
								<FaGithub className='hidden lg:block' />
								<span>GitHub</span>
							</Link>
						</Button>
						<Button sizes='xs' variants={'shine'} asChild>
							<Link href={demoUrl}>
								<VscPreview className='hidden lg:block' />
								<span>Preview</span>
							</Link>
						</Button>
						<Button sizes='xs' variants={'shine'} asChild>
							<Link href={slug}>
								<CgDetailsMore className='hidden lg:block' />
								<span className='truncate'>Ver mais</span>
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</ScrollAnimation>
	)
}

export { Projects }
