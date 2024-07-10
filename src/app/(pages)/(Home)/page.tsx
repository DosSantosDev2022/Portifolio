import { GET_DATA_HOME } from '@/app/api/queries/Get_data_home'
import { bebas } from '@/assets/fonts'

import Link from 'next/link'
import { Button } from '@/components/global/uiChroma/button'
import { RichText } from '@/components/global/RichText'
import { Projects } from '@/components/global/Projects'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portifólio - DosSantosDev',
}

export default async function Home() {
  const { home } = await GET_DATA_HOME()

  return (
    <div className=" space-y-20  px-3 py-8  lg:px-12 lg:py-16  ">
      <div className="flex w-full flex-col items-start justify-center gap-3 lg:w-[582px] ">
        <h1
          className={` text-6xl font-normal leading-[57px] lg:text-8xl lg:leading-[90.9px] ${bebas.className} `}
        >
          {home.sectionHero.title}
        </h1>
        <span className="text-lg font-normal leading-[27px] ">
          {home.sectionHero.smallText}
        </span>
      </div>

      <div className=" flex  w-full flex-col items-start justify-around  gap-12 rounded-md bg-zinc-800/80 px-3 py-4 lg:flex-row  ">
        <Image
          src={home.sectionHero.image.url}
          alt={home.sectionHero.title}
          width={400}
          height={400}
          quality={100}
          className="flex-shrink-0 rounded-lg border-[4px] border-zinc-800 bg-zinc-800/80"
        />

        <div className="mt-6 flex w-full flex-col items-start gap-2">
          <h2 className="mb-4  text-xl font-bold  lg:text-[2rem] lg:leading-9">
            {home.sectionAboutMe.smallText}
          </h2>
          <RichText
            content={home.sectionAboutMe.longText.raw}
            renderers={{
              bold: ({ children }) => (
                <b className="font-bold  text-highlights">{children} </b>
              ),
              p: ({ children }) => (
                <p className="text-base font-light ">{children}</p>
              ),
            }}
          />

          <Button asChild variant="outline" className=" mt-4 w-36 text-center">
            <Link href={'/About'} className="text-sm">
              Veja mais
            </Link>
          </Button>
        </div>
      </div>

      <div className=" flex flex-col gap-2 ">
        <div className=" flex flex-col items-start gap-2 lg:w-[37rem]">
          <h2
            className={` ${bebas.className} text-6xl font-normal  lg:text-[4.75rem] lg:leading-[4.75rem] `}
          >
            {home.featuredProjects.title}
          </h2>
          <p className="text-[1.125rem] font-normal leading-[1.6875rem] text-lightSilver ">
            {home.featuredProjects.smallText}{' '}
          </p>
        </div>
        <div className="mt-8 flex flex-col gap-28  lg:mt-20 ">
          {home.featuredProjects.projects.map((project) => (
            <Projects
              key={project.id}
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
          ))}
        </div>
        <div className="mt-10  flex w-full items-center justify-end p-2 ">
          <Button asChild className="mb-10" variant="outline">
            <Link href={'/Projects'}>Ver todos ...</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
