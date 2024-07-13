import { Projects } from '@/components/global/Projects'
import { bebas } from '@/assets/fonts'
import { GET_ALL_PROJECTS } from '@/app/api/queries/Get_All_Projects'
import { Pagination } from '@/components/global/pagination'
import { GET_META_DATA } from '@/app/api/queries/Get_meta_data'
import ScrollAnimation from '@/components/animations/ScrollAnimation'

interface ProjetcsPageProps {
  searchParams?: { page?: number; first?: number; total?: number }
}

export async function generateMetadata() {
  const params = 'projects'
  const { metadata } = await GET_META_DATA(params)

  return {
    title: `${metadata.title}`,
    description: `${metadata.description}`,
    authors: [
      { name: `${metadata.author?.name}`, url: `${metadata.author?.url}` },
    ],
    keywords: `${metadata.keywords}`,
    viewport: `${metadata.viewport}`,
    robots: `${metadata.robots}`,
    openGraph: {
      title: `${metadata.openGraph.title}`,
      description: `${metadata.openGraph.description}`,
      url: `${metadata.openGraph.url}`,
      type: `${metadata.openGraph.type}`,
      images: `${metadata.openGraph.images}`,
      siteName: `${metadata.openGraph.siteName}`,
    },
  }
}

export default async function ProjetcsPage({
  searchParams,
}: ProjetcsPageProps) {
  const page = Number(searchParams?.page) || 1
  const first = Number(searchParams?.first) || 2

  const { project, totalCount } = await GET_ALL_PROJECTS(page, first)

  return (
    <div className="flex flex-col items-start justify-between gap-16  lg:gap-0 ">
      <ScrollAnimation className="flex flex-col gap-2  px-3 py-8 lg:px-12 lg:py-16">
        <h1 className={`${bebas.className} mt-10 text-8xl `}>Meus projetos</h1>
        <p className="text-lg font-medium ">
          Explore minha galeria de projetos! Descubra criações dinâmicas e
          envolventes, refletindo minha paixão e expertise fullstack. Prepare-se
          para se inspirar enquanto mergulha em soluções inovadoras!
        </p>
      </ScrollAnimation>

      <div className="mt-10 flex flex-col  gap-28  px-3 py-8 lg:mt-20 lg:px-12 lg:py-16  ">
        {project.map((project) => (
          <ScrollAnimation key={project.id}>
            <Projects
              title={project.title}
              codeUrl={project.codeLink}
              demoUrl={project.deployLink}
              slug={`/Project/${project.slug}`}
              description={project.description}
              coverImage={project.coverImage.url}
              id={project.id}
              tech={
                project.technologie
                  ? project.technologie.map((tech) => ({
                      id: tech.id,
                      name: tech.name,
                      icon: tech.icon.url,
                    }))
                  : []
              }
            />
          </ScrollAnimation>
        ))}
      </div>

      <div className="flex  w-full items-center justify-end px-3 py-8  lg:px-12 lg:py-16">
        <Pagination total={totalCount} page={page} limit={first} />
      </div>
    </div>
  )
}
