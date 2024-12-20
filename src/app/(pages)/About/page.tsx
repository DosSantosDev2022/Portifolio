import { GET_ABOUT_ME } from '@/utils/query/GET_ABOUT-ME_PAGE'
import { bebas } from '@/assets/fonts'
import { TooltipComponent } from '@/components/global/Tooltip'
import Image from 'next/image'
import { RichText } from '@/components/global/RichText'
import ScrollAnimation from '@/components/animations/ScrollAnimation'

export default async function AboutPage() {
  const { aboutMe } = await GET_ABOUT_ME()

  const techs = aboutMe.sectionTechnologies
  return (
    <>
      <div className="space-y-28 px-3 py-8  lg:flex-row lg:px-12 lg:py-16 ">
        <ScrollAnimation className="flex w-full flex-col items-start justify-between gap-6 lg:flex-row  ">
          <div className="flex  items-center justify-center rounded-md bg-zinc-800/80  ">
            <Image
              alt={aboutMe.authorImage02.fileName}
              src={aboutMe.authorImage02.url}
              quality={100}
              width={800}
              height={150}
              className="w-[380px] h-full "
            />
          </div>
          <div className="flex w-full  flex-col gap-2">
            <h1
              className={`${bebas.className} text-6xl font-normal lg:text-[5rem]   lg:leading-[90.9px]`}
            >
              {aboutMe.sectionHero.title}
            </h1>
            <span className="text-xl lg:text-lg  ">
              {aboutMe.sectionHero.smallText}
            </span>
            <p className="text-base font-normal leading-[27px] text-lightSilver ">
              {aboutMe.sectionHero.longText.text}
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="flex flex-col items-start justify-center px-2 py-4 rounded-md bg-zinc-800/40 ">
          <div className="w-full">
            <h2 className={`${bebas.className} text-6xl font-normal    `}>
              {aboutMe.sectionTechnologies.title}
            </h2>
          </div>
          <div className="w-full ">
            <p className="mb-[32px] text-base font-light ">
              {aboutMe.sectionTechnologies.smallText}
            </p>
          </div>
          <div className="flex w-full flex-wrap items-center gap-4  px-1 pb-2 pt-2">
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
        </ScrollAnimation>

        <ScrollAnimation className="flex w-full flex-col  gap-6 lg:flex-row">
          <div className=" flex w-full  flex-col">
            <h2
              className={`${bebas.className} w-full text-6xl font-normal leading-[76px] lg:w-[450px]  lg:text-[5rem]`}
            >
              {aboutMe.sectionstory.title}
            </h2>
            <RichText
              content={aboutMe.sectionstory.longText.raw}
              renderers={{
                p: ({ children }) => (
                  <p className="text-base font-light">{children}</p>
                ),
              }}
            />
          </div>
        </ScrollAnimation>
      </div>
    </>
  )
}
