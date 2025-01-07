'use client'
import Link from 'next/link'
import { Logo } from './logo'
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavLinks } from '@/config/headerLinks'
import { useState } from 'react'
import { Button } from './uiChroma/button'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <header className="sticky top-0 z-50 order-first flex flex-col sm:flex-row sm:h-[90px] w-full items-center justify-between rounded-md bg-foreground px-6 py-3 lg:w-auto">
      <div className="flex w-full justify-between">
        <Logo />
        <Button
          type="button"
          className="sm:hidden"
          sizes="icon"
          variants="accent"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </Button>
      </div>

      {/* Desktop nav */}
      <nav className="sm:flex sm:items-center w-full hidden sm:gap-6">
        <ul className="flex items-center justify-between gap-4">
          {NavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              className="rounded-md p-2 text-base font-light leading-6 tracking-tight transition-all duration-300 hover:bg-accent-hover text-accent-foreground"
              prefetch
            >
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="sticky top-full left-0 w-full bg-foreground p-6 sm:hidden animate-smooth-fadein">
          <ul className="flex flex-col items-center gap-6">
            {NavLinks.map((link) => (
              <Link
                key={link.name}
                href={link.url}
                className="rounded-md p-2 text-base font-light leading-6 tracking-tight transition-all duration-300 hover:bg-accent-hover text-accent-foreground"
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
