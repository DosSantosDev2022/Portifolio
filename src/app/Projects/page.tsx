

import { ProjectCard } from '@/components/global/ProjectCard'
import { bebas } from '../fonts'
import { GET_PAGINATION_DATA } from '../api/queries/Get_Pagination_Data'
import { Pagination } from '@/components/global/pagination'
import { Input } from '@/components/global/Form/Input'
import { Button } from '@/components/global/button'

interface ProjetcsPageProps {
  searchParams?: {  page?: number; first?: number; total?: number }
}

export default async function ProjetcsPage({
  searchParams,
}: ProjetcsPageProps) {
  const page = Number(searchParams?.page) || 1
  const first = Number(searchParams?.first) || 10

  const { project, totalCount } = await GET_PAGINATION_DATA(page, first)

  const links = [
    {
      id: "1",
      name: 'React js',
      url: ''
    },
    {
      id: "2",
      name: 'Next js',
      url: ''
    },
    {
      id: "3",
      name: 'Back End',
      url: ''
    },
    {
      id: "4",
      name: 'Css',
      url: ''
    },
    {
      id: "5",
      name: 'Front End',
      url: ''
    },
  ]

  

  return (
    <div className="flex flex-col items-start justify-between gap-16  lg:gap-0 ">
      <h1 className={`${bebas.className} text-8xl text-light mt-10`}>
        Meus projetos
      </h1>
       <div className=' w-full rounded bg-zinc-800 flex items-center justify-end p-5 mt-10'>
       <div className='w-full flex items-center gap-2'>
          {links.map((link) => (
            <Button className='w-[85px] ' key={link.id} variant='outline'>{link.name} </Button>
          ))}
           
         </div>
         <Input className='w-[296px] ' placeholder='Buscar...' />
         
       </div>
      <div className="mt-10 grid lg:grid-cols-3 grid-cols-1 gap-6  lg:mt-20  ">
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
      <div className="my-20  flex w-full items-center justify-end">
        <Pagination totalItens={totalCount} page={page} limit={first} />
      </div>
    </div>
  )
}
