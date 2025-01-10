import Image from 'next/image'
import Link from 'next/link'
import { Button } from './uiChroma/button'
import ScrollAnimation from '../animations/ScrollAnimation'

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

const Projects = ({
  id,
  title,
  description,
  coverImage,
  tech,
  demoUrl,
  slug,
  codeUrl,
}: ProjectsProps) => {
  return (
    <ScrollAnimation>
      <div
        className="flex w-full flex-col items-center justify-center gap-3 lg:flex-row lg:gap-12 border border-border shadow-sm rounded-md"
        key={id}
      >
        <div className="relative flex w-full items-center justify-center rounded-md object-cover">
          <Image
            alt={title}
            src={coverImage}
            width={400}
            height={400}
            quality={100}
          />
        </div>

        <div className="flex  w-full flex-col items-center justify-center space-y-4 p-5">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-bold leading-[44.8px] ">{title}</h2>
            <p className="left-[27px] text-sm font-normal text-muted">
              {description}
            </p>
          </div>
          <div className="flex items-center gap-2 ">
            {tech?.map((tech) => (
              <div key={id} className="rounded-md border border-border p-1.5">
                <Image width={24} height={24} src={tech.icon} alt={tech.name} />
              </div>
            ))}
          </div>

          <div className="flex w-full flex-col items-center justify-start gap-2 lg:flex-row">
            <Button sizes="full" variants={'shine'} asChild>
              <Link href={codeUrl || ''}>{'Code'}</Link>
            </Button>
            <Button sizes="full" variants={'shine'} asChild>
              <Link href={demoUrl}>{'Preview'}</Link>
            </Button>
            <Button sizes="full" variants={'shine'} asChild>
              <Link href={slug}>{'Ver mais'}</Link>
            </Button>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}

export { Projects }
