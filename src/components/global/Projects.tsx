import Image from 'next/image'
import Link from 'next/link'
import { Button } from './uiChroma/button'
import { Technologies } from '@/components/global/technologies'

interface ProjectsProps {
  id: string
  title: string
  description: string
  coverImage: string
  slug: string
  codeUrl?: string
  demoUrl: string
  tech?: {
    id: string
    name: string
    icon: string
  }[]
}

export function Projects({
  id,
  title,
  description,
  coverImage,
  slug,
  codeUrl,
  demoUrl,
  tech,
}: ProjectsProps) {
  return (
    <>
      <div
        className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row   lg:gap-12"
        key={id}
      >
        <div className="relative flex  w-full items-center justify-center   rounded-md  bg-zinc-600/25 object-cover  ">
          <Image
            alt={title}
            src={coverImage}
            width={400}
            height={400}
            quality={100}
          />
        </div>

        <div className="flex  w-full flex-col items-center justify-center gap-3  p-2 ">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold leading-[44.8px] ">{title}</h2>
            <p className="left-[27px] text-sm  font-normal text-lightSilver  ">
              {description}
            </p>
          </div>
          <div className="flex w-full flex-col items-start justify-start gap-2">
            <h4 className="font-bold  text-highlights">Tecnlogias</h4>
            <ul className="flex items-center gap-2">
              {tech?.map((tech) => (
                <li key={tech?.id}>
                  <Technologies
                    id={tech.id}
                    icon={tech.icon}
                    name={tech.name}
                    key={tech.id}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="flex w-full flex-col items-center justify-start gap-2 lg:flex-row">
            <Button
              className="w-full text-center text-sm lg:w-20"
              variant="highlight"
              asChild
            >
              <Link className="text-lightSilver" href={demoUrl}>
                Deploy
              </Link>
            </Button>
            <Button
              className="w-full text-center text-sm lg:w-20"
              variant="outline"
              asChild
            >
              <Link className="text-lightSilver" href={codeUrl || ''}>
                Code
              </Link>
            </Button>
            <Button
              className="w-full text-center  lg:w-20"
              variant="outline"
              asChild
            >
              <Link href={slug}>Ver mais</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
