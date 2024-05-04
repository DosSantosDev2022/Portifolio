import { GET_DATA_ABOUT } from '@/app/api/queries/Get_data_about'
import { bebas } from '../fonts'
import { RiArrowRightUpLine } from 'react-icons/ri'
import Link from 'next/link'
import { CMSIcon } from '@/components/global/CmsIcon'
import { TooltipComponent } from '@/components/global/Tooltip'
import Image from 'next/image'
import { RichText } from '@/components/global/RichText'

export default async function AboutPage() {
  const { aboutMe } = await GET_DATA_ABOUT()
  const techs = aboutMe.sectionTechnologies
  return (
    <div className="space-y-28 ">
      <div className="pt-16 flex  w-full flex-col lg:flex-row ">
        <div className="w-full">
          <h1
            className={`${bebas.className} font-normal text-light text-[6rem] lg:leading-[90.9px]`}
          >
            {aboutMe.sectionHero.title}
          </h1>
        </div>
        <div className="flex w-full flex-col gap-2">
          <span className="text-3xl leading-[44.8px] text-light  ">
            {aboutMe.sectionHero.smallText}
          </span>
          <p className="text-lg font-normal leading-[27px] text-lightSilver ">
            {aboutMe.sectionHero.longText.text}
          </p>
          <div className="mt-[54px] flex items-center gap-4 ">
            <button className="flex items-center gap-3 rounded-3xl bg-highlights px-5 py-2 text-light duration-300 hover:bg-highlights_hover ">
              Contact-Me
              <i className="rounded-full bg-light p-2 duration-300 hover:scale-105">
                <RiArrowRightUpLine size={18} className="text-secundary" />
              </i>
            </button>
            <ul className="flex items-center gap-4">
              {aboutMe.sectionHero.links.map((link) => (
                <li
                  className="rounded-full bg-highlights p-[14px] duration-300  hover:bg-highlights_hover "
                  key={link.id}
                >
                  <Link href={link.url} target="_blank">
                    <CMSIcon
                      icon={link.icon}
                      className="text-2xl text-light duration-300 hover:scale-105"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
      </div>

      <div className="flex flex-col lg:flex-row ">
        <div className="w-full">
          <h2
            className={`${bebas.className} text-[76px] leading-[76px] text-light `}
          >
            {aboutMe.sectionTechnologies.title}
          </h2>
        </div>
        <div className="w-full">
          <p className="mb-[32px] text-lg font-normal leading-[27px] text-light">
            {aboutMe.sectionTechnologies.smallText}
          </p>

          <div className="flex flex-wrap items-center gap-6  px-1 pb-2 pt-2">
            {techs?.technologies.map((tech) => (
              <TooltipComponent key={tech.id} content={tech.name}>
                <Image
                  key={tech.id}
                  alt={tech.name}
                  src={tech.icon.url}
                  width={45}
                  height={45}
                  quality={100}
                  className=" rounded-md border border-zinc-700 bg-zinc-800 p-2"
                />
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>

      <div className="flex  flex-col lg:flex-row w-full gap-4">
        
          <h2
            className={`${bebas.className} text-[76px] leading-[76px] text-light w-full `}
          >
            {aboutMe.sectionstory.title}
          </h2>
        
        <div className="w-full flex flex-col mb-20">
          <RichText
            content={aboutMe.sectionstory.longText.raw}
            renderers={{
              p: ({ children }) => (
                <p className="text-lg font-normal leading-[27px] text-light">
                  {children}
                </p>
              ),
            }}
          />
        </div>

      </div>
    </div>
  )
}
