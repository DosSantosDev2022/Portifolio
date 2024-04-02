import { ProjectCard } from '@/components/global/ProjectCard'
import { bebas } from '../fonts'
import { GET_DATA_PROJECT } from '../Api/queries/Get_data_project'

export default async function ProjetcsPage() {
  const { project } = await GET_DATA_PROJECT()
  console.log(project)
  return (
    <div className="my-20 flex flex-col items-start justify-between gap-16  lg:gap-0 ">
      <h1 className={`${bebas.className} text-8xl text-light`}>
        Meus projetos
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 lg:mt-20 lg:grid-cols-3 ">
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
      <div className="mt-10  flex w-full items-center justify-end">
        <button>1</button>
      </div>
    </div>
  )
}
