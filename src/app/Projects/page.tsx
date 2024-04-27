

import { ProjectCard } from '@/components/global/ProjectCard'
import { bebas } from '../fonts'
import { GET_PAGINATION_DATA } from '../api/queries/Get_All_Projects'
import { Pagination } from '@/components/global/pagination'
import { Button } from '@/components/global/button'
import { FormSearch } from './Form'


interface ProjetcsPageProps {
  searchParams?: {  page?: number; first?: number; total?: number }
}

export default async function ProjetcsPage({
  searchParams,
}: ProjetcsPageProps) {
  const page = Number(searchParams?.page) || 1
  const first = Number(searchParams?.first) || 2
 

  const { project, totalCount } = await GET_PAGINATION_DATA(page, first)
  
 


  const links = [
    {
      id: '1d5g15s8s1g1218sdgsdgsg',
      name: 'React js',
      url: ''
    },
    {
      id: "sdg15s9s6161sdg15a9afas",
      name: 'Next js',
      url: ''
    },
    {
      id: "sdg4s9s19s9sdg15151sds6",
      name: 'Back End',
      url: ''
    },
    {
      id: "4sdg1595sd155sdg856g198w",
      name: 'Css',
      url: ''
    },
    {
      id: "sg15s19191sdg19sg951df8s",
      name: 'Front End',
      url: ''
    },
  ]

 
  


  return (
    <div className="flex flex-col items-start justify-between gap-16  lg:gap-0 ">
      <h1 className={`${bebas.className} text-8xl text-light mt-10`}>
        Meus projetos
      </h1>
       <div className=' w-full rounded bg-zinc-800 flex items-center flex-col lg:flex-row justify-end p-5 mt-10 '>
          <div className='w-full flex items-center gap-3  mb-4 lg:mb-0 overflow-x-auto p-4 lg:p-0 scrollbar scrollbar-thumb-zinc-700'>
              {links.map((link) => (
                <Button className='w-full lg:w-[85px] ' key={link.id} variant='outline'>{link.name} </Button>
              ))}
          </div>
         <FormSearch/>
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
