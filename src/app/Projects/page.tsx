import { ProjectCard } from '@/components/global/ProjectCard'
import { bebas } from '../fonts'
import { GET_PAGINATION_DATA } from '../api/queries/Get_Pagination_Data'
import { Pagination } from '@/components/global/pagination'

interface ProjetcsPageProps {
  searchParams?: { page?: number; first?: number; total?: number }
}

export default async function ProjetcsPage({
  searchParams,
}: ProjetcsPageProps) {
  const page = Number(searchParams?.page) || 1
  const first = Number(searchParams?.first) || 2

  const { project, totalCount } = await GET_PAGINATION_DATA(page, first)

  return (
    <div className="flex flex-col items-start justify-between gap-16  lg:gap-0 ">
      <h1 className={`${bebas.className} text-8xl text-light mt-10`}>
        Meus projetos
      </h1>

      <div className="mt-10 flex flex-wrap gap-6 md:grid-cols-3 lg:mt-20  ">
        {project.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            codeUrl={project.codeLink}
            demoUrls={project.deployLink}
            slug={`/Project/${project.slug}`}
            description={project.description}
            coverImage={project.coverImage.url}
            id=""
          />
        ))}
      </div>
      <div className="my-10  flex w-full items-center justify-end">
        <Pagination totalItens={totalCount} page={page} limit={first} />
      </div>
    </div>
  )
}
