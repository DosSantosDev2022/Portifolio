import { GET_DATA_SIDEBAR } from '@/utils/query/GET_SIDEBAR'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Card } from './card'
import { contactLinks, socialLinks, technologies } from '@/config/sidebarLinks'

export async function SideBar({ className }: { className: string }) {
  const { sideBar } = await GET_DATA_SIDEBAR()
  if (!sideBar) {
    return null // ou um fallback de erro
  }
  return (
    <aside
      className={twMerge(
        'bg-foreground top-0 flex h-full w-full flex-col items-center space-y-6 rounded-md px-4 py-3 lg:sticky lg:w-72',
        className
      )}
    >
      {/* Seção profile */}
      <Card className="items-center bg-transparent p-0">
        <Image
          width={500}
          height={500}
          quality={100}
          src={sideBar.profile.url}
          alt={sideBar.name}
          className="border-border h-[180px] w-[180px] rounded-3xl border shadow-xs"
        />

        <div className="text-muted flex w-full flex-col items-center justify-center">
          <h4 className="text-lg font-bold">{sideBar.name}</h4>
          <span className="text-sm font-thin">{sideBar.profession}</span>
        </div>
      </Card>
      {/* Seção links */}
      <Card>
        <span className="text-muted ml-2">Social links</span>
        <div className="px-1.5 py-2">
          <ul className="flex items-center gap-1">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="text-muted border-border flex h-8 w-8 items-center justify-center rounded-md border transition-all duration-300 hover:scale-95"
              >
                <li>
                  <link.icon size={20} />
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </Card>
      {/* Seção tecnologias */}
      <Card>
        <span className="text-muted ml-2">Tecnologias</span>
        <div className="flex flex-wrap items-center gap-2 p-2">
          {technologies.map((tech, index) => (
            <div className="border-border rounded-md border p-1.5" key={index}>
              <Image src={tech.url} alt={tech.alt} width={24} height={24} />
            </div>
          ))}
        </div>
      </Card>
      {/* Seção contatos */}
      <Card>
        <span className="text-muted ml-2">Meus contatos</span>
        {contactLinks.map((contact, index) => (
          <div key={index} className="flex items-center gap-2">
            <contact.icon size={18} className="text-muted" />
            <div className="text-muted flex flex-col gap-1">
              <span className="text-sm font-bold">{contact.name}</span>
              <span className="text-xs font-thin">{contact.label}</span>
            </div>
          </div>
        ))}
      </Card>
    </aside>
  )
}
