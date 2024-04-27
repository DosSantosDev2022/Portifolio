

import { ProjectCard } from '@/components/global/ProjectCard'
import { bebas } from '@/app/fonts'
import { GET_SEARCH_PROJECT } from '@/app/api/queries/Get_Search_Project'
import { Pagination } from '@/components/global/pagination'
import { Button } from '@/components/global/button'
import { FormSearch } from '@/app/Projects/Form'


interface ProjetcsPageProps {
  searchParams?: { term?: string, page?: number; first?: number; total?: number }
}

export default async function ProjetcsPage({
  searchParams,
}: ProjetcsPageProps) {
  const page = Number(searchParams?.page) || 1
  const first = Number(searchParams?.first) || 2
  const term = searchParams?.term || ''

  const { project, totalCount } = await GET_SEARCH_PROJECT(term, page, first)
  const projectfilter = project.filter((p) => p.title === searchParams?.term)
  console.log(projectfilter)


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
       <div className=' w-full rounded bg-zinc-800 flex items-center justify-end p-5 mt-10'>
       <div className='w-full flex items-center gap-2'>
          {links.map((link) => (
            <Button className='w-[85px] ' key={link.id} variant='outline'>{link.name} </Button>
          ))}
           
         </div>
         <FormSearch/>
         
       </div>
      <div className="mt-10 grid lg:grid-cols-3 grid-cols-1 gap-6  lg:mt-20  ">
        
        {projectfilter.map((project) => (
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
 
      <div className="my-20  flex w-full items-center justify-end">
        <Pagination totalItens={totalCount} page={page} limit={first} />
      </div>
    </div>
  )
}
