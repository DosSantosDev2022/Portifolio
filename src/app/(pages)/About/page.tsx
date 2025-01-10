import { GET_ABOUT_ME } from '@/utils/query/GET_ABOUT-ME_PAGE'
import { bebas } from '@/assets/fonts'
import Image from 'next/image'
import { RichText } from '@/components/global/RichText'
import ScrollAnimation from '@/components/animations/ScrollAnimation'

export default async function AboutPage() {
  const { aboutMe } = await GET_ABOUT_ME()

  const techs = aboutMe.sectionTechnologies
  return (
    <div className="container mx-auto space-y-28 p-4 sm:px-8 lg:px-16 lg:py-20">
      {/* Hero Section */}
      <ScrollAnimation className="flex w-full flex-col items-start justify-between gap-6 lg:flex-row">
        <Image
          className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover rounded-lg"
          alt={aboutMe.authorImage02.fileName}
          src={aboutMe.authorImage02.url}
          quality={100}
          width={368}
          height={368}
        />
        <div className="flex w-full flex-col gap-2">
          <h1
            className={`${bebas.className} text-4xl sm:text-5xl lg:text-[5rem] font-normal leading-tight lg:leading-[90.9px]`}
          >
            {aboutMe.sectionHero.title}
          </h1>
          <p className="text-sm sm:text-base font-normal leading-6 sm:leading-[27px] text-muted">
            {aboutMe.sectionHero.longText.text}
          </p>
        </div>
      </ScrollAnimation>

      {/* Technologies Section */}
      <ScrollAnimation className="flex flex-col items-start justify-center p-4 sm:p-6 rounded-md bg-zinc-800/40">
        <div className="mb-6 sm:mb-8">
          <h2 className={`${bebas.className} text-4xl sm:text-6xl`}>
            {aboutMe.sectionTechnologies.title}
          </h2>
          <p className="text-sm sm:text-base font-light text-muted">
            {aboutMe.sectionTechnologies.smallText}
          </p>
        </div>
        <div className="flex w-full flex-wrap items-center gap-2 sm:gap-4">
          {techs?.technologies.map((tech) => (
            <Image
              key={tech.id}
              alt={tech.name}
              src={tech.icon.url}
              width={32}
              height={32}
              quality={100}
              className="rounded-md border border-zinc-700 bg-zinc-800 p-1"
            />
          ))}
        </div>
      </ScrollAnimation>

      {/* Story Section */}
      <ScrollAnimation className="flex w-full flex-col gap-6 lg:flex-row">
        <div className="flex w-full flex-col">
          <h2
            className={`${bebas.className} text-4xl sm:text-5xl lg:text-[5rem] lg:w-2/3 font-normal leading-tight lg:leading-[76px]`}
          >
            {aboutMe.sectionstory.title}
          </h2>
          <RichText
            content={aboutMe.sectionstory.longText.raw}
            renderers={{
              p: ({ children }) => (
                <p className="text-sm sm:text-base font-light text-muted">
                  {children}
                </p>
              ),
            }}
          />
        </div>
      </ScrollAnimation>
    </div>
  )
}
