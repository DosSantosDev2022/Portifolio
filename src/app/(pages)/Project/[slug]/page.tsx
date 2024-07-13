import { GET_DETAILS_PROJECT } from '@/app/api/queries/Get_Details_Project'
import { GET_META_DATA } from '@/app/api/queries/Get_meta_data'
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

export async function generateMetadata() {
  const params = 'projetoid'
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

export default async function ProjectPageDetails({
  params,
}: ProjectPageDetailsProps) {
  const { project } = await GET_DETAILS_PROJECT()

  const projectDetails = project.find((p) => p.slug === params.slug)

  return (
    <div className="px-5 py-10">
      <div className="flex flex-col gap-4">
        <h1 className={`${bebas.className} text-7xl font-normal  lg:text-9xl`}>
          {projectDetails?.title}{' '}
        </h1>

        <p className="text-lg text-lightSilver">
          {projectDetails?.description}{' '}
        </p>
      </div>
      <div className=" mt-10 flex  w-full items-center  justify-around rounded-xl bg-zinc-600/25 ">
        <Image
          quality={100}
          className="w-[358px] object-contain  "
          alt={projectDetails?.title || 'Foto de capa do projeto'}
          src={projectDetails?.coverImage.url || ''}
          width={400}
          height={400}
        />
      </div>

      <section className="mt-4 flex flex-col items-start justify-between gap-4 lg:flex-row">
        <div className=" px-3">
          <div className="mt-10 w-full ">
            <h2
              className={`${bebas.className} text-3xl font-medium text-highlights`}
            >
              Stack de desenvolvimento
            </h2>

            <div className="mt-5 flex w-full flex-wrap items-start justify-items-start gap-4  px-1 pb-2 pt-2 ">
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

          <div className="mt-10 w-full space-y-3  ">
            <RichText
              content={projectDetails?.completeDescription.raw || []}
              renderers={{
                bold: ({ children }) => (
                  <b className=" font-bold ">{children} </b>
                ),
                h2: ({ children }) => (
                  <h2
                    className={`${bebas.className} space-y-2 text-3xl font-bold tracking-wider text-highlights`}
                  >
                    {children}{' '}
                  </h2>
                ),
                h5: ({ children }) => (
                  <h5 className="space-y-2 font-semibold ">{children} </h5>
                ),
                p: ({ children }) => (
                  <p className="font-light text-lightSilver">{children}</p>
                ),
                li: ({ children }) => <li className=" ">{children} </li>,
                ul: ({ children }) => (
                  <ul className="list-inside list-disc space-y-2 p-2 text-lightSilver">
                    {children}
                  </ul>
                ),
              }}
            />
            <div className="mt-12 flex items-start justify-start gap-2">
              <Button variant="outline" asChild>
                <Link
                  target="_blank"
                  className="flex items-center gap-2"
                  href={projectDetails?.codeLink || ''}
                >
                  Code View
                  <FaGithub size={18} />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  target="_blank"
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
      </section>
    </div>
  )
}
