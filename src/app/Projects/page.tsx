import { ProjectCard } from '@/components/global/ProjectCard'
import { bebas } from '../fonts'
import { GET_ALL_PROJECTS } from '../api/queries/Get_All_Projects'
import { Pagination } from '@/components/global/pagination'



interface ProjetcsPageProps {
  searchParams?: {  page?: number; first?: number; total?: number }
}

export default async function ProjetcsPage({
  searchParams,
}: ProjetcsPageProps) {
  const page = Number(searchParams?.page) || 1
  const first = Number(searchParams?.first) || 2
 

  const { project, totalCount } = await GET_ALL_PROJECTS(page, first)
  

  return (
    <div className="flex flex-col items-start justify-between gap-16  lg:gap-0 ">
      <div className='flex flex-col gap-2'>
        <h1 className={`${bebas.className} text-8xl text-light mt-10`}>
          Meus projetos
        </h1>
        <p className='text-light font-medium text-lg '>Explore minha galeria de projetos! Descubra criações dinâmicas e envolventes, refletindo minha paixão e expertise fullstack. Prepare-se para se inspirar enquanto mergulha em soluções inovadoras!</p>
      </div>
       
      <div className="mt-10 grid lg:grid-cols-3 grid-cols-1 gap-6  lg:mt-20  ">
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

      <div className="lg:my-20 my-10  flex w-full items-center justify-end">
        <Pagination totalItens={totalCount} page={page} limit={first} />
      </div>
    </div>
  )
}
