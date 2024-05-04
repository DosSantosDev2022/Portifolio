import { GET_DETAILS_PROJECT } from '@/app/api/queries/Get_Details_Project'
import { bebas } from '@/app/fonts'
import { RichText } from '@/components/global/RichText'
import { Button } from '@/components/global/button'
import Image from 'next/image'
import Link from 'next/link'

import { FaGithub, FaRegWindowMaximize } from 'react-icons/fa'

interface ProjectPageDetailsProps {
  params: {
    slug: string
  }
}

export default async function ProjectPageDetails({
  params,
}: ProjectPageDetailsProps) {
  const { project } = await GET_DETAILS_PROJECT()

  const projectDetails = project.find((p) => p.slug === params.slug)
  return (
    <div className="py-20">
      <div className='flex flex-col gap-4'>
      <h1 className={`${bebas.className} text-5xl font-normal text-light`}>
        {projectDetails?.title}{' '}
      </h1>

      <p className="text-lg text-lightSilver">{projectDetails?.description} </p>
      </div>

      <div className="relative mt-10 lg:h-[422px] h-[210px] w-full ">
        <Image
          alt={projectDetails?.title || ''}
          src={projectDetails?.coverImage.url || ''}
          fill
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      <div className="mt-10 w-full">
        <h2 className={`${bebas.className} text-3xl font-medium text-highlights`}>
          Stack de desenvolvimento
        </h2>

        <div className="mt-5 flex w-full items-start justify-items-start gap-4  px-1 pb-2 pt-2 overflow-x-auto scrollbar scrollbar-thumb-zinc-700">
          {projectDetails?.technologie.map((tech) => (
            <Image
              alt={tech.name}
              key={tech.id}
              src={tech.icon.url}
              width={45}
                  height={45}
                  quality={100}
              className=" rounded-md border border-zinc-700 bg-zinc-800 p-2"
            />
          ))}
        </div>
      </div>

      <div className="mt-10 w-full lg:w-[768px] space-y-3 ">
        <RichText
          content={projectDetails?.completeDescription.raw}
          renderers={{
            bold: ({ children }) => (
              <b className="text-xl font-bold text-light">{children} </b>
            ),
            h2: ({ children }) => (
              <h2
                className={`${bebas.className} space-y-2 text-3xl font-bold tracking-wider text-highlights`}
              >
                {children}{' '}
              </h2>
            ),
            h5: ({ children }) => (
              <h5 className="space-y-2 font-semibold text-light">
                {children}{' '}
              </h5>
            ),
            p: ({ children }) => (
              <p className="font-light text-lightSilver">{children}</p>
            ),

            ul: ({ children }) => (
              <ul className="list-inside list-disc p-2 text-lightSilver">
                {children}
              </ul>
            ),
          }}
        />
          <div className="mt-12 flex items-start justify-start gap-2">
            <Button variant="outline" asChild>
              <Link
                className="flex items-center gap-2"
                href={projectDetails?.codeLink || ''}
              >
                Code View
                <FaGithub size={18} />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link
                className="flex items-center gap-2"
                href={projectDetails?.deployLink || ''}
              >
                Deploy View
                <FaRegWindowMaximize size={18} />
              </Link>
            </Button>
          </div>
      </div>

      <Button
        variant="highlight"
        asChild
        className="fixed bottom-4 right-4 w-16 animate-bounce text-center"
      >
        <Link href={'/Projects'}>Voltar</Link>
      </Button>

      
    </div>
  )
}
