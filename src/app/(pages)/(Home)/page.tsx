import { GET_DATA_HOME } from '@/utils/query/GET_HOME_PAGE'
import { bebas } from '@/assets/fonts'
import Link from 'next/link'
import { Button } from '@/components/global/uiChroma/button'
import { RichText } from '@/components/global/RichText'
import { Projects } from '@/components/global/Projects'
import { MiniCards } from '@/components/global/minicard'
import ScrollAnimation from '@/components/animations/ScrollAnimation'

export default async function Home() {
  const { home } = await GET_DATA_HOME()

  return (
    <div className="space-y-10 px-4 py-8 md:space-y-20 lg:px-12 lg:py-16">
      <ScrollAnimation className="flex w-full flex-col items-start justify-center gap-3 lg:w-[582px]">
        <h1
          className={`text-4xl font-normal leading-[40px] md:text-6xl md:leading-[57px] lg:text-8xl lg:leading-[90.9px] ${bebas.className}`}
        >
          {home.sectionHero.title}
        </h1>
        <span className="text-base font-normal leading-[22px] md:text-lg md:leading-[27px]">
          {home.sectionHero.smallText}
        </span>
      </ScrollAnimation>

      <ScrollAnimation className="flex w-full flex-col items-start justify-around gap-6 rounded-md bg-secundary/40 px-4 py-4 md:gap-12">
        <div className="flex flex-col items-start justify-center gap-4">
          <h2 className="text-lg font-bold md:text-xl lg:text-4xl">
            {home.sectionAboutMe.smallText}
          </h2>
          <RichText
            content={home.sectionAboutMe.longText.raw}
            renderers={{
              bold: ({ children }) => (
                <b className="font-bold text-highlights">{children}</b>
              ),
              p: ({ children }) => (
                <p className="text-base font-light">{children}</p>
              ),
            }}
          />
          <Button asChild variant="outline" className="mt-2 w-36 text-center">
            <Link href={'/About'} className="text-sm">
              Veja mais
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-4 items-center justify-center gap-3">
          {home.features.map((feature) => (
            <MiniCards
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              key={feature.id}
            />
          ))}
        </div>
      </ScrollAnimation>

      <ScrollAnimation className="flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col items-start gap-2 lg:w-[37rem]">
          <h2
            className={`text-4xl font-normal md:text-6xl lg:text-[4.75rem] lg:leading-[4.75rem] ${bebas.className}`}
          >
            {home.featuredProjects.title}
          </h2>
          <p className="text-base font-normal leading-[1.5rem] md:text-[1.125rem] md:leading-[1.6875rem] text-lightSilver">
            {home.featuredProjects.smallText}
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-14 md:gap-20 lg:mt-20">
          {home.featuredProjects.projects.map((project) => (
            <ScrollAnimation key={project.id}>
              <Projects
                title={project.title}
                codeUrl={project.codeLink}
                demoUrl={project.deployLink}
                slug={`/Project/${project.slug}`}
                description={project.description}
                coverImage={project.coverImage.url}
                id={project.title}
                tech={project.technologie.map((tech) => ({
                  id: tech.id,
                  name: tech.name,
                  icon: tech.icon.url,
                }))}
              />
            </ScrollAnimation>
          ))}
        </div>
        <div className="mt-10 flex w-full items-center justify-end p-2">
          <Button asChild sizes="xs" variant="outline">
            <Link href={'/Projects'}>Ver mais..</Link>
          </Button>
        </div>
      </ScrollAnimation>
    </div>
  )
}
