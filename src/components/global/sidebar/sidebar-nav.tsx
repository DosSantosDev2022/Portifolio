// app/components/sidebar/sidebar-nav.jsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import type { IconType } from 'react-icons/lib'
import { SheetClose } from '@/components/ui/sheet'
import React from 'react'

/**
 * Renderiza uma lista de links de navegação.
 * @param {object} props
 * @param {Array<object>} props.links - Array de objetos de link.
 * @param {string} [props.title] - Um título opcional para a secção de links.
 * @param {boolean} [props.isSocial] - Se os links são para redes sociais (abrem em nova aba).
 */

interface SidebarNavProps {
	links: {
		id: string
		icon: IconType
		label: string
		href: string
	}[]
	title: string
	isSocial: boolean
	isMobile: boolean
}

const SidebarNav = ({
	links,
	title,
	isSocial = false,
	isMobile = false,
}: SidebarNavProps) => {
	const pathname = usePathname()

	const Wrapper = isMobile && !isSocial ? SheetClose : React.Fragment

	return (
		<div className='w-full'>
			{title && (
				<div className='text-xs font-medium uppercase text-muted-foreground mb-4 px-4'>
					{title}
				</div>
			)}
			<ul className='flex flex-col gap-2'>
				{links.map((link) => {
					const isActive = !isSocial && pathname === link.href

					const linkContent = (
						<>
							<link.icon className='size-5' />
							{link.label}
						</>
					)

					const buttonLink = isSocial ? (
						<Button
							variant={isActive ? 'secondary' : 'ghost'}
							asChild
							className='w-full justify-start gap-3'
						>
							<Link
								href={link.href}
								target='_blank'
								rel='noopener noreferrer'
							>
								{linkContent}
							</Link>
						</Button>
					) : (
						<Button
							variant={isActive ? 'secondary' : 'ghost'}
							asChild
							className='w-full justify-start gap-3'
						>
							<Link href={link.href}>{linkContent}</Link>
						</Button>
					)

					return (
						<li key={link.href}>
							{/* 4. USAR O WRAPPER AQUI */}
							<Wrapper asChild>{buttonLink}</Wrapper>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export { SidebarNav }
