import { GET_DATA_SIDEBAR } from '@/app/api/queries/Get_Data_SideBar'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { CMSIcon } from './CmsIcon'
import { TooltipComponent } from './Tooltip'

export async function SideBar({ className }: { className: string }) {
  const { sideBar } = await GET_DATA_SIDEBAR()

  return (
    <aside
      className={twMerge(
        'top-0 flex h-full w-full  flex-col  items-center gap-6 rounded-md bg-zinc-900 p-4 lg:sticky lg:w-72',
        className,
      )}
    >
      <div className="flex w-full flex-col items-center justify-center ">
        <Image
          width={500}
          height={500}
          quality={100}
          src={sideBar.profile?.url}
          alt={sideBar.name}
          className="relative -top-10 h-[180px] w-[180px]  rounded-3xl border border-lightSilver"
        />

        <div className="flex  h-12 w-full flex-col items-center justify-center  rounded-md  ">
          <h4 className="text-lg font-bold text-lightSilver">{sideBar.name}</h4>
          <span className="rounded-md bg-zinc-800/30 px-2 py-3 text-sm font-thin text-lightSilver">
            {sideBar.profession}
          </span>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 rounded-md bg-zinc-800/30 px-2 py-3">
        <span className="ml-2 text-lightSilver">Social links</span>
        <div className="flex items-center gap-2">
          {sideBar.links?.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="flex h-10 w-10 items-center justify-center rounded-md bg-zinc-800/70 text-2xl text-zinc-400 duration-200 hover:scale-105"
            >
              <CMSIcon icon={link.icon} />
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full rounded-md bg-zinc-800/30 px-2 py-3">
        <span className="mb-6 ml-2 text-lightSilver">Tecnologias</span>
        <div className="flex flex-wrap items-center gap-2 p-2">
          {sideBar.technologies?.map((tech) => (
            <TooltipComponent key={tech.id} content={tech.name}>
              <Image
                key={tech.id}
                alt={tech.name}
                src={tech.icon.url}
                width={32}
                height={32}
                quality={100}
                className=" rounded-md border border-zinc-700 bg-zinc-800 p-1"
              />
            </TooltipComponent>
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col gap-2 rounded-md bg-zinc-800/30 px-2 py-3">
        <span className="ml-2 text-lightSilver">Meus contatos</span>
        {sideBar.contact?.map((contact) => (
          <div key={contact.type} className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-zinc-800/70 text-2xl text-zinc-400">
              <CMSIcon icon={contact.icon} />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs font-bold text-lightSilver">
                {contact.type}
              </span>
              <span className="text-[10px] font-thin text-lightSilver">
                {contact.contact}
              </span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
