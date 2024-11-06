import { CMSIcon } from './CmsIcon'

interface MiniCardsProps {
  title: string
  icon: string
  description: string
}

export function MiniCards({ icon, description, title }: MiniCardsProps) {
  return (
    <div className="w-full col-span-4 lg:col-span-2 h-[124px] px-4   py-4 bg-primary/50 rounded-xl justify-center items-center gap-2 flex">
      <div
        className="flex 
       items-start h-full  justify-center "
      >
        <CMSIcon
          icon={icon}
          className="flex 
       items-center p-1 justify-center bg-zinc-800/70  rounded-lg"
        />
      </div>
      <div className="text-lightSilver w-full flex items-start flex-col justify-start h-full  ">
        <h4 className="text-base font-bold ">{title}</h4>
        <span className="text-xs tracking-wide font-light ">{description}</span>
      </div>
    </div>
  )
}
