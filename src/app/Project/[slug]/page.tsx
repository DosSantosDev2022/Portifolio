import { GET_DATA_PROJECT } from '@/app/Api/queries/Get_data_project'
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
  const { project } = await GET_DATA_PROJECT()

  const projectDetails = project.find((p) => p.slug === params.slug)
  return (
    <div className="my-20">
      <h1 className={`${bebas.className} text-5xl font-normal text-light`}>
        {projectDetails?.title}{' '}
      </h1>

      <p className="text-lg text-lightSilver">{projectDetails?.description} </p>

      <div className="relative mt-10 h-[422px] w-full ">
        <Image
          alt={projectDetails?.title || ''}
          src={projectDetails?.coverImage.url || ''}
          fill
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      <div className="mt-10 w-full">
        <h2 className="text-3xl font-medium text-light">
          Tecnologias utilizadas
        </h2>

        <div className="mt-5 flex w-full items-start justify-items-start gap-4  p-2">
          {projectDetails?.technologie.map((tech) => (
            <Image
              alt={tech.name}
              key={tech.id}
              src={tech.icon.url}
              quality={100}
              width={36}
              height={36}
            />
          ))}
        </div>
      </div>

      <div className="mt-10 w-full space-y-3">
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
      </div>

      <div className="mt-10 flex items-start justify-start gap-2">
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
  )
}
