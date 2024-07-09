import { GET_DATA_ABOUT } from '@/app/api/queries/Get_data_about'
import { bebas } from '@/assets/fonts'
import Link from 'next/link'
import { CMSIcon } from '@/components/global/CmsIcon'
import { TooltipComponent } from '@/components/global/Tooltip'
import Image from 'next/image'
import { RichText } from '@/components/global/RichText'
import { Metadata } from 'next'
import Modal from '@/components/global/modal'

export const metadata: Metadata = {
  title: 'Sobre mim',
  description: '',
}

export default async function AboutPage() {
  const { aboutMe } = await GET_DATA_ABOUT()

  const techs = aboutMe.sectionTechnologies
  return (
    <div className="space-y-28 ">
      <div className="flex w-full flex-col items-center justify-center  px-3 py-8  lg:flex-row lg:px-12 lg:py-16 ">
        <div className="w-full">
          <div className=" flex w-full items-center justify-center rounded-md bg-zinc-200 lg:w-[380px] ">
            <Image
              alt={aboutMe.authorImage01.fileName}
              src={aboutMe.authorImage01.url}
              width={250}
              height={300}
              quality={100}
            />
          </div>
        </div>
        <div className="flex w-full  flex-col gap-2">
          <h1
            className={`${bebas.className} text-[5rem] font-normal  lg:text-[6rem] lg:leading-[90.9px]`}
          >
            {aboutMe.sectionHero.title}
          </h1>
          <span className="text-3xl lg:leading-[44.8px]  ">
            {aboutMe.sectionHero.smallText}
          </span>
          <p className="text-lg font-normal leading-[27px] text-lightSilver ">
            {aboutMe.sectionHero.longText.text}
          </p>
          <div className="mt-[54px] flex items-center gap-4 ">
            <Modal />
            <ul className="flex items-center gap-4">
              {aboutMe.sectionHero.links.map((link) => (
                <li
                  className="rounded-full bg-highlights p-[14px] duration-300  hover:bg-highlights_hover "
                  key={link.id}
                >
                  <Link href={link.url} target="_blank">
                    <CMSIcon
                      icon={link.icon}
                      className="text-2xl duration-300 hover:scale-105"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center px-3 py-8 lg:flex-row lg:px-12 lg:py-16 ">
        <div className="w-full">
          <h2
            className={`${bebas.className} text-[4.2rem] leading-[76px] lg:text-[5rem] `}
          >
            {aboutMe.sectionTechnologies.title}
          </h2>
        </div>
        <div className="w-full">
          <p className="mb-[32px] text-lg font-normal leading-[27px]">
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

      <div className="flex w-full flex-col items-start justify-center gap-8   px-3 py-8 pb-20 lg:flex-row lg:px-12 lg:py-16">
        <div className=" flex w-full flex-col">
          <h2
            className={`${bebas.className} w-full text-[4.2rem] leading-[76px]  lg:w-[450px] lg:text-[5rem] `}
          >
            {aboutMe.sectionstory.title}
          </h2>
          <RichText
            content={aboutMe.sectionstory.longText.raw}
            renderers={{
              p: ({ children }) => (
                <p className="text-lg font-normal leading-[27px]">{children}</p>
              ),
            }}
          />
        </div>
        <div className="flex w-full flex-col gap-4">
          <div className=" flex w-full items-center justify-center rounded-md bg-zinc-200 lg:w-[380px] ">
            <Image
              alt={aboutMe.authorImage02.fileName}
              src={aboutMe.authorImage02.url}
              width={280}
              height={200}
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
