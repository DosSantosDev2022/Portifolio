// app/components/sidebar/sidebar-nav.jsx
'use client'

import { Button } from '@/components/ui/button'
import { SheetClose } from '@/components/ui/sheet'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import type { IconType } from 'react-icons/lib'

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
				<div className='text-xs font-medium uppercase text-gray-500 mb-4 px-4'>
					{title}
				</div>
			)}
			<ul className='flex flex-col gap-1'> {/* Reduzi o gap para compactar */}
				{links.map((link) => {
					const isActive = !isSocial && pathname === link.href

					const linkContent = (
						<>
							<link.icon className='size-5' />
							{link.label}
						</>
					)

					// 🎯 MUDANÇA 2: Estilo dos botões para o nav principal.
					// Usaremos 'secondary' para ativo e refinaremos as classes de 'ghost'.
					const navButtonClasses = isActive
						? 'bg-secondary text-primary font-semibold' // Link ativo: fundo secundário (cinza escuro no dark mode), texto primário (ou branco).
						: 'text-gray-400 hover:bg-gray-800 hover:text-white font-medium' // Link inativo: texto cinza, hover sutil.

					// Mantenho o Button em vez de usar div/Link direto para acessibilidade (role="button")
					const buttonLink = (
						<Button
							variant='ghost' // Deixamos 'ghost', mas sobrescrevemos com navButtonClasses
							asChild
							className={`w-full justify-start gap-3 px-4 py-2 h-auto rounded-lg ${navButtonClasses}`}
						>
							<Link
								href={link.href}
								target={isSocial ? '_blank' : undefined}
								rel={isSocial ? 'noopener noreferrer' : undefined}
							>
								{linkContent}
							</Link>
						</Button>
					)

					return (
						<li key={link.href}>
							<Wrapper asChild>{buttonLink}</Wrapper>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export { SidebarNav }

