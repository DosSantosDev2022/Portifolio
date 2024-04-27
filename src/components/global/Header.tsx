'use client'

import { bebas } from '@/app/fonts'
import { FaBars } from 'react-icons/fa6'
import { LuX } from "react-icons/lu";
import Link from 'next/link'
import { useState } from 'react'
import { Button } from './button'

export function Header() {
  const NavLinks = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'About',
      url: '/About',
    },
    {
      name: 'Project',
      url: '/Projects',
    },
  ]

  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className=" bg-zinc-900  flex w-full flex-col items-center justify-between border-b border-secundary p-4 lg:h-24 lg:flex-row lg:px-[108px] lg:py-6 ">
      <div className="flex w-full items-center justify-between">
        <span
          className={`text-3xl font-normal  leading-10  tracking-[-0.32px] text-light ${bebas.className}`}
        >
          Juliano Santos
        </span>
        <Button
        variant='outline'
          onClick={handleMenu}
          className="rounded-sm  p-2 lg:hidden"
        >
          {isOpen ? (
            < LuX size={18} />
          ) : (
            < FaBars size={18} />
          ) }
        </Button>
      </div>
      <nav
        className={` ${isOpen ? 'flex' : 'hidden'}  mt-10 flex-col items-center  justify-center gap-5 lg:mt-0 lg:flex lg:flex-row `}
      >
        <ul className=" flex flex-col items-center justify-center gap-8 lg:flex-row">
          {NavLinks.map((link) => (
            <li key={link.name}>
              <Link
                className="rounded-md p-2 text-base font-normal uppercase leading-6 tracking-[-0.48px] text-light transition-all duration-300 hover:bg-highlights_hover"
                href={link.url}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
