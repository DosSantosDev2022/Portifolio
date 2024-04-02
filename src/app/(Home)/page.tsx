import { GET_DATA_HOME } from '@/app/Api/queries/Get_data_home'
import { CMSIcon } from '@/components/global/CmsIcon'
import { bebas } from '@/app/fonts'
import { RiArrowRightUpLine } from 'react-icons/ri'

import Link from 'next/link'
import { Button } from '@/components/global/button'
import { RichText } from '@/components/global/RichText'
import { ProjectCard } from '@/components/global/ProjectCard'
import Image from 'next/image'

export default async function Home() {
  const { home } = await GET_DATA_HOME()
  /* const techs = home.featuredProjects.projects.find((i) => i.technologie) */

  return (
    <section className="">
      <div className=" my-20 flex flex-col items-start justify-between gap-16  lg:flex-row lg:gap-0 ">
        <div className="flex flex-col items-start text-light lg:w-[544px]">
          <h1
            className={`text-6xl font-normal leading-[57px] lg:text-[6rem] lg:leading-[90.9px] ${bebas.className} `}
          >
            {home.sectionHero.title}
          </h1>
          <span className="mt-10 text-lg font-normal leading-[27px] ">
            {home.sectionHero.smallText}
          </span>
          <div className="mt-[54px] flex items-center gap-4 ">
            <button className="flex items-center gap-3 rounded-3xl bg-highlights px-5 py-2 duration-300 hover:bg-highlights_hover ">
              Contact-Me
              <i className="rounded-full bg-light p-2 duration-300 hover:scale-105">
                <RiArrowRightUpLine size={18} className="text-secundary" />
              </i>
            </button>
            <ul className="flex items-center gap-4">
              {home.sectionHero.links.map((link) => (
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
        <div className="h-[470px] w-full flex-shrink-0 rounded-2xl bg-lightSilver lg:w-[450px]"></div>
      </div>

      <div className="my-20 flex w-full flex-col items-center  justify-between gap-3 lg:flex-row">
        <div className="flex w-full flex-col items-start gap-2">
          <h3
            className={`${bebas.className}  w-full text-6xl font-normal leading-[5.68125rem] text-light lg:text-[6.3125rem]`}
          >
            {home.sectionAboutMe.title}
          </h3>
          <div className="mt-3 h-[400px] w-full flex-shrink-0 rounded-2xl bg-lightSilver lg:w-[350px]">
            <Image src={'/profile.png'} alt="" width={343} height={400} />
          </div>
        </div>

        <div className="mt-6 flex w-full flex-col items-start gap-2">
          <h5 className="text-xl  font-medium text-light lg:text-[2rem] lg:leading-[2.8rem] ">
            {home.sectionAboutMe.smallText}
          </h5>
          <RichText
            content={home.sectionAboutMe.longText.raw}
            renderers={{
              bold: ({ children }) => (
                <b className="font-bold uppercase text-highlights">
                  {children}{' '}
                </b>
              ),
              p: ({ children }) => (
                <p className="text-base font-normal leading-[24px] text-light ">
                  {children}
                </p>
              ),
            }}
          />

          <Link
            className="mt-3 text-base font-bold leading-[1.5rem] text-highlights "
            href={'/About'}
          >
            <span className="">Veja mais sobre mim</span>
          </Link>
        </div>
      </div>

      <div className="my-20 flex flex-col gap-2 ">
        <div className="mt-6 flex flex-col items-start gap-2 lg:w-[37rem]">
          <h2
            className={` ${bebas.className} text-6xl font-normal  text-light lg:text-[4.75rem] lg:leading-[4.75rem] `}
          >
            {home.featuredProjects.title}
          </h2>
          <p className="text-[1.125rem] font-normal leading-[1.6875rem] text-lightSilver ">
            {home.featuredProjects.smallText}{' '}
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-10  lg:mt-20 lg:flex-row ">
          {home.featuredProjects.projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              codeUrl={''}
              demoUrls={''}
              slug={''}
              description={project.description}
              coverImage={project.coverImage.url}
              id=""
            />
          ))}
        </div>
        <div className="mt-10  flex w-full items-center justify-end p-2 ">
          <Button asChild className="mb-10" variant="outline">
            <Link href={'/Projects'}>Ver todos...</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
