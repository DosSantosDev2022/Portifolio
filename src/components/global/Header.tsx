'use client'
import Link from 'next/link'
import { Logo } from './logo'
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavLinks } from '@/config/headerLinks'
import { useState } from 'react'
import { Button } from '../ui'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen((prev) => !prev)
	}

	return (
		<header className='bg-foreground sticky top-0 z-50 order-first flex w-full flex-col items-center justify-between rounded-md px-6 py-3 sm:h-[90px] sm:flex-row lg:w-auto'>
			<div className='flex w-full justify-between'>
				<Logo />
				<Button
					type='button'
					className='sm:hidden'
					sizes='icon'
					variants='accent'
					onClick={toggleMenu}
					aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
				>
					{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
				</Button>
			</div>

			{/* Desktop nav */}
			<nav className='hidden w-full lg:flex items-center justify-end'>
				<ul className='flex items-center justify-between gap-4'>
					{NavLinks.map((link) => (
						<Link
							key={link.name}
							href={link.url}
							className=' hover:bg-primary  text-accent-foreground rounded-md p-2 text-base leading-6 font-normal tracking-tight transition-all duration-300'
							prefetch
						>
							<li>{link.name}</li>
						</Link>
					))}
				</ul>
			</nav>

			{/* Mobile nav */}
			{isOpen && (
				<nav className='bg-foreground animate-smooth-fadein sticky top-full left-0 w-full p-6 sm:hidden'>
					<ul className='flex flex-col items-center gap-6'>
						{NavLinks.map((link) => (
							<Link
								key={link.name}
								href={link.url}
								className='hover:bg-accent-hover text-accent-foreground rounded-md p-2 text-base leading-6 font-light tracking-tight transition-all duration-300'
								prefetch
							>
								<li>{link.name}</li>
							</Link>
						))}
					</ul>
				</nav>
			)}
		</header>
	)
}

export { Header }
