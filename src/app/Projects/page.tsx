import { ProjectCard } from '@/components/global/ProjectCard'
import { bebas } from '../fonts'
import { GET_ALL_PROJECTS } from '../api/queries/Get_All_Projects'
import { Pagination } from '@/components/global/pagination'
import { Metadata } from 'next'

interface ProjetcsPageProps {
  searchParams?: { page?: number; first?: number; total?: number }
}

export const metadata: Metadata = {
  title: 'Meus projetos',
}

export default async function ProjetcsPage({
  searchParams,
}: ProjetcsPageProps) {
  const page = Number(searchParams?.page) || 1
  const first = Number(searchParams?.first) || 2

  const { project, totalCount } = await GET_ALL_PROJECTS(page, first)

  return (
    <div className="flex flex-col items-start justify-between gap-16  lg:gap-0 ">
      <div className="flex flex-col gap-2  px-3 py-8 lg:px-12 lg:py-16">
        <h1 className={`${bebas.className} mt-10 text-8xl text-light`}>
          Meus projetos
        </h1>
        <p className="text-lg font-medium text-light ">
          Explore minha galeria de projetos! Descubra criações dinâmicas e
          envolventes, refletindo minha paixão e expertise fullstack. Prepare-se
          para se inspirar enquanto mergulha em soluções inovadoras!
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6  px-3 py-8 lg:mt-20 lg:grid-cols-3 lg:px-12 lg:py-16  ">
        {project.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            codeUrl={project.codeLink}
            demoUrls={project.deployLink}
            slug={`/Project/${project.slug}`}
            description={project.description}
            coverImage={project.coverImage.url}
            id={project.id}
          />
        ))}
      </div>

      <div className="flex  w-full items-center justify-end px-3 py-8  lg:px-12 lg:py-16">
        <Pagination totalItens={totalCount} page={page} limit={first} />
      </div>
    </div>
  )
}
