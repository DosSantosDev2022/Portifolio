import { GET_DATA_HOME } from '@/app/Api/queries/Get_data_home'
import { CMSIcon } from '@/components/global/CmsIcon'
import Link from 'next/link'
import { bebas } from '@/app/fonts'
import { RiArrowRightUpLine } from 'react-icons/ri'

export default async function Home() {
  const { home } = await GET_DATA_HOME()

  return (
    <section>
      <div className=" flex flex-col items-center justify-between gap-16 lg:h-screen lg:flex-row lg:gap-0 ">
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

      <div className="flex h-screen w-full items-start gap-3">
        <h3
          className={`${bebas.className} w-full text-[6.3125rem] font-normal leading-[5.68125rem] text-light`}
        >
          {home.sectionAboutMe.title}{' '}
        </h3>

        <div className="flex w-full flex-col items-start gap-2">
          <h5 className="text-[2rem] font-medium leading-[2.8rem] text-light ">
            {home.sectionAboutMe.smallText}
          </h5>
          <span className="text-[1.125rem] font-normal leading-[1.6875rem] text-lightSilver ">
            {home.sectionAboutMe.longText.text}
          </span>

          <Link
            className="text-base  font-bold leading-[1.5rem] text-highlights "
            href={'/About'}
          >
            <span className="">Veja mais sobre mim</span>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <div className="flex w-[37rem] flex-col items-start gap-2">
          <h2
            className={` ${bebas.className} text-[4.75rem] font-normal leading-[4.75rem] text-light `}
          >
            {home.featuredProjects.title}
          </h2>
          <p className="text-[1.125rem] font-normal leading-[1.6875rem] text-lightSilver ">
            {home.featuredProjects.smallText}{' '}
          </p>
        </div>
        <div></div>
      </div>
    </section>
  )
}
