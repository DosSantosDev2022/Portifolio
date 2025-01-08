import { GET_DETAILS_PROJECT } from '@/utils/query/GET_DETAILS_PROJECTS'
import { bebas } from '@/assets/fonts'
import { RichText } from '@/components/global/RichText'
import { Button } from '@/components/global/uiChroma/button'
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
    <div className="px-5 py-10">
      <div className="grid">
        <h1 className={`${bebas.className} text-7xl font-normal lg:text-9xl`}>
          {projectDetails?.title}{' '}
        </h1>
        <p className="text-base text-muted">{projectDetails?.description} </p>
      </div>

      <div className=" mt-10 flex  w-full items-center  justify-around rounded-xl bg-zinc-600/25">
        <Image
          className="w-[358px] object-contain"
          alt={projectDetails?.title || 'Foto de capa do projeto'}
          src={projectDetails?.coverImage.url || ''}
          width={400}
          height={400}
          quality={100}
        />
      </div>

      <section className="mt-4 flex flex-col items-start justify-between gap-4 lg:flex-row">
        <div className="px-3">
          <div className="mt-10 w-full space-y-1">
            <h2 className={`${bebas.className} text-3xl`}>
              Stack de desenvolvimento
            </h2>
            <div className="flex w-full flex-wrap items-start justify-items-start gap-4">
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

          <div className="mt-10 w-full space-y-3">
            <RichText
              content={projectDetails?.completeDescription.raw || []}
              renderers={{
                bold: ({ children }) => (
                  <b className=" font-bold ">{children} </b>
                ),
                h2: ({ children }) => (
                  <h2
                    className={`${bebas.className} space-y-2 text-3xl tracking-wider`}
                  >
                    {children}{' '}
                  </h2>
                ),
                h5: ({ children }) => (
                  <h5 className="space-y-2 font-semibold">{children} </h5>
                ),
                p: ({ children }) => <p className="font-light ">{children}</p>,
                li: ({ children }) => <li className=" ">{children} </li>,
                ul: ({ children }) => (
                  <ul className="list-inside list-disc space-y-2 p-2">
                    {children}
                  </ul>
                ),
              }}
            />
            <div className="mt-12 w-full lg:w-[496px]  px-2 py-2.5 flex items-start justify-start gap-2">
              <Button sizes="full" variants="primary" asChild>
                <Link
                  target="_blank"
                  className="flex items-center gap-2"
                  href={projectDetails?.codeLink || ''}
                >
                  Código fonte
                  <FaGithub size={18} />
                </Link>
              </Button>
              <Button sizes="full" variants="primary" asChild>
                <Link
                  target="_blank"
                  className="flex items-center gap-2"
                  href={projectDetails?.deployLink || ''}
                >
                  Preview
                  <FaRegWindowMaximize size={18} />
                </Link>
              </Button>
            </div>
          </div>

          <Button
            variants="primary"
            asChild
            className="fixed bottom-4 right-4 w-16 animate-bounce text-center z-50"
          >
            <Link href={'/Projects'}>Voltar</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
