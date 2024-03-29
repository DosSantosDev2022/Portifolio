import Link from 'next/link'

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

  return (
    <header className="flex h-24 w-full items-center justify-between p-4 lg:px-[60px] lg:py-6 ">
      <span className="font-bold uppercase text-zinc-50">Juliano Santos</span>
      <nav>
        <ul className="flex items-center justify-center gap-8">
          {NavLinks.map((link) => (
            <li key={link.name}>
              <Link
                className="rounded-md p-2 text-zinc-50 transition-all duration-300 hover:bg-zinc-700"
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
