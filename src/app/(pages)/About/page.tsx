import { GET_ABOUT_ME } from '@/utils/query/GET_ABOUT-ME_PAGE'
import { bebas } from '@/assets/fonts'
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
          <Image
            alt={aboutMe.authorImage02.fileName}
            src={aboutMe.authorImage02.url}
            quality={100}
            width={368}
            height={368}
          />
          <div className="flex w-full  flex-col gap-2">
            <h1
              className={`${bebas.className} text-6xl font-normal lg:text-[5rem]   lg:leading-[90.9px]`}
            >
              {aboutMe.sectionHero.title}
            </h1>
            <p className="text-base font-normal leading-[27px] text-muted">
              {aboutMe.sectionHero.longText.text}
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation className="flex flex-col items-start justify-center p-6 rounded-md bg-zinc-800/40">
          <div className="mb-[32px]">
            <h2 className={`${bebas.className} text-6xl`}>
              {aboutMe.sectionTechnologies.title}
            </h2>
            <p className="text-base w-full text-wrap font-light text-muted">
              {aboutMe.sectionTechnologies.smallText}
            </p>
          </div>
          <div className="flex w-full flex-wrap items-center gap-4">
            {techs?.technologies.map((tech) => (
              <Image
                key={tech.id}
                alt={tech.name}
                src={tech.icon.url}
                width={32}
                height={32}
                quality={100}
              />
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
                  <p className="text-base font-light text-muted">{children}</p>
                ),
              }}
            />
          </div>
        </ScrollAnimation>
      </div>
    </>
  )
}
