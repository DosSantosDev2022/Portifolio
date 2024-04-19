import Image from 'next/image'
import { Button } from './button'
import Link from 'next/link'

interface ProjectCardProps {
  id: string
  title: string
  coverImage: string
  description: string
  slug: string
  codeUrl: string
  demoUrls: string
}

export function ProjectCard({
  id,
  title,
  description,
  coverImage,
  slug,
  codeUrl,
  demoUrls,
}: ProjectCardProps) {
  return (
    <div
      key={id}
      className="flex w-full flex-col items-start gap-6 rounded-md bg-zinc-800 p-4 lg:w-[368px]"
    >
      <Image
        alt={title}
        src={coverImage}
        width={450}
        height={450}
        quality={100}
        className=" rounded-md bg-zinc-400"
      />
      <div className="flex flex-col gap-2 p-1">
        <h2 className="text-lg font-bold text-light">{title}</h2>
        <p className="text-limit text-base font-thin leading-5 text-lightSilver ">
          {description}
        </p>
      </div>
      <div className="flex w-full items-center justify-between gap-1 p-1">
        <Button
          className="flex w-full items-center justify-center"
          variant="highlight"
          asChild
        >
          <Link className="flex items-center gap-1" href={demoUrls}>
            View demo
          </Link>
        </Button>

        <Button
          className="flex w-full items-center justify-center"
          variant="outline"
          asChild
        >
          <Link className="flex items-center gap-1 " href={codeUrl}>
            View code
          </Link>
        </Button>
        <Button
          className="flex w-full items-center justify-center"
          variant="outline"
          asChild
        >
          <Link className="flex items-center gap-1  " href={slug}>
            Ver mais
          </Link>
        </Button>
      </div>
    </div>
  )
}
