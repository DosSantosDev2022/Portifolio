import Image from 'next/image'
import { Button } from './button'
import Link from 'next/link'
import { MdOutlineWebAsset } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import { BiArrowToRight } from 'react-icons/bi'

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
        <h2 className="font-normal text-light">{title}</h2>
        <p className="text-limit text-base font-normal leading-5 text-lightSilver ">
          {description}
        </p>
      </div>
      <div className="flex w-full gap-2">
        <Button variant="highlight" asChild>
          <Link
            className="flex items-center gap-1 text-[12px] "
            href={demoUrls}
          >
            View demo
            <MdOutlineWebAsset size={20} />
          </Link>
        </Button>

        <Button variant="outline" asChild>
          <Link className="flex items-center gap-1 text-[12px] " href={codeUrl}>
            View code
            <FaGithub />
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link className="flex items-center gap-1 text-[12px] " href={slug}>
            Ver mais
            <BiArrowToRight size={20} />
          </Link>
        </Button>
      </div>
    </div>
  )
}
