import { GET_DATA_HOME } from '@/app/Api/queries/Get_data_home'
import { CMSIcon } from '@/components/global/CmsIcon'
import Link from 'next/link'
import { bebas } from '@/app/fonts'
import { RiArrowRightUpLine } from 'react-icons/ri'

export default async function Home() {
  const { home } = await GET_DATA_HOME()

  return (
    <div className="mt-7 flex flex-col items-center justify-between gap-16 lg:h-screen lg:flex-row lg:gap-0 ">
      <div className="text-light flex flex-col items-start lg:w-[544px]">
        <h1
          className={`text-6xl font-normal leading-[57px] lg:text-[6rem] lg:leading-[90.9px] ${bebas.className} `}
        >
          {home.sectionHero.title}
        </h1>
        <span className="mt-10 text-lg font-normal leading-[27px] ">
          {home.sectionHero.smallText}
        </span>
        <div className="mt-[54px] flex items-center gap-4 ">
          <button className="bg-highlights hover:bg-highlights_hover flex items-center gap-3 rounded-3xl px-5 py-2 duration-300 ">
            Contact-Me
            <i className="bg-light rounded-full p-2 duration-300 hover:scale-105">
              <RiArrowRightUpLine size={18} className="text-secundary" />
            </i>
          </button>
          <ul className="flex items-center gap-4">
            {home.sectionHero.links.map((link) => (
              <li
                className="bg-highlights hover:bg-highlights_hover rounded-full p-[14px]  duration-300 "
                key={link.id}
              >
                <Link href={link.url} target="_blank">
                  <CMSIcon
                    icon={link.icon}
                    className="text-light text-2xl duration-300 hover:scale-105"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-lightSilver h-[470px] w-full flex-shrink-0 rounded-2xl lg:w-[450px]"></div>
    </div>
  )
}
