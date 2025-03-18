import { getSideBar } from '@/services/hygraph/get-sidebar'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Card } from '@/components/global'

const SideBar = async ({ className }: { className: string }) => {
	const { sideBar } = await getSideBar()
	return (
		<aside
			className={twMerge(
				'bg-foreground top-0 flex h-full w-full flex-col items-center space-y-6 rounded-md px-4 py-3 lg:sticky lg:w-72',
				className,
			)}
		>
			{/* Seção profile */}
			<Card className='items-center bg-transparent p-0'>
				<Image
					width={500}
					height={500}
					quality={100}
					src={sideBar.profile.url}
					alt={sideBar.name}
					className='border-border h-[180px] w-[180px] rounded-3xl border shadow-xs'
				/>

				<div className='text-muted flex w-full flex-col items-center justify-center'>
					<h4 className='text-lg font-bold'>{sideBar.name}</h4>
					<span className='text-sm font-thin'>{sideBar.profession}</span>
				</div>
			</Card>
			{/* Seção links */}
			<Card>
				<span className='text-muted ml-2 lg:text-xl text-lg'>
					Social links
				</span>
				<div className='px-1.5 py-2'>
					<ul className='space-x-1.5 flex p-1.5'>
						{sideBar.socialLinks.map((link) => (
							<li
								key={link.id}
								className=' transition-all duration-300 hover:scale-95 p-0.5 border rounded-full'
							>
								<Link href={link.url}>
									<Image
										alt={link.name}
										src={link.icon.url}
										width={38}
										height={38}
									/>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</Card>
			{/* Seção tecnologias */}
			<Card>
				<span className='text-muted ml-2 lg:text-xl text-lg'>
					Tecnologias
				</span>
				<div className='flex flex-wrap items-center gap-2 p-2'>
					{sideBar.technologies.map((tech) => (
						<div
							className='border-border rounded-md border p-1.5'
							key={tech.id}
						>
							<Image
								src={tech.icon.url}
								alt={tech.name}
								width={24}
								height={24}
							/>
						</div>
					))}
				</div>
			</Card>
			{/* Seção contatos */}
			<Card>
				<span className='text-muted ml-2 lg:text-xl text-lg'>
					Meus contatos
				</span>
				{sideBar.contactList.map((contact) => (
					<div
						key={contact.label}
						className='flex items-center space-x-1.5'
					>
						<Image
							alt={contact.name}
							src={contact.icon.url}
							width={24}
							height={24}
							quality={100}
						/>
						<div className='text-muted flex flex-col gap-1'>
							<span className='text-sm font-bold'>{contact.name}</span>
							<span className='text-sm font-thin'>{contact.label}</span>
						</div>
					</div>
				))}
			</Card>
		</aside>
	)
}

export { SideBar }
