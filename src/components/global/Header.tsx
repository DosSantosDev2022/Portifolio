'use client'

import Link from 'next/link'

import { Logo } from './logo'

import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sheet,
} from './sheet'
import { FaBars, FaHome, FaUser } from 'react-icons/fa'
import { GoProjectSymlink } from 'react-icons/go'
import { MdContacts } from 'react-icons/md'

export function Header() {
  const NavLinks = [
    {
      name: 'Home',
      url: '/',
      icon: <FaHome />,
    },
    {
      name: 'Sobre mim',
      url: '/About',
      icon: <FaUser />,
    },
    {
      name: 'Projetos',
      url: '/Projects',
      icon: <GoProjectSymlink />,
    },
    {
      name: 'Contato',
      url: '/Contact',
      icon: <MdContacts />,
    },
  ]

  return (
    <header className="sticky top-0 z-50 order-first  flex h-[90px] w-full  items-center justify-between rounded-md border-b border-secundary bg-zinc-900 px-6 py-3  lg:w-auto">
      <Logo />
      <Sheet>
        <SheetTrigger>
          <FaBars className="h-10 w-10 bg-zinc-900 p-1 lg:hidden" />
        </SheetTrigger>
        <SheetContent side={'right'} className="flex flex-col items-start ">
          <SheetHeader>
            <SheetTitle>DosSantosDev</SheetTitle>
          </SheetHeader>
          <div className="mt-10 flex h-full w-full items-start ">
            <ul className="flex flex-col items-start justify-center gap-4 lg:flex-row">
              {NavLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    className="flex items-center gap-2 rounded-md p-2 text-lg font-light leading-6 tracking-tight text-lightSilver transition-all duration-300 hover:bg-highlights_hover"
                    href={link.url}
                    prefetch
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>

      <nav
        className={`mt-10 hidden w-full flex-col items-center justify-end gap-5 lg:mt-0 lg:flex lg:flex-row`}
      >
        <ul className="flex flex-col items-center justify-center gap-8 lg:flex-row">
          {NavLinks.map((link) => (
            <li key={link.name}>
              <Link
                className="rounded-md p-2 text-base font-light  leading-6 tracking-tight transition-all duration-300 hover:bg-highlights_hover"
                href={link.url}
                prefetch
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
