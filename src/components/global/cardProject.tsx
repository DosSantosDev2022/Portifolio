import Image from 'next/image'

interface CardProjectProps {
  coverImage: string
  title: string
  alt: string
  description: string
}

export function CardProject({
  title,
  alt,
  description,
  coverImage,
}: CardProjectProps) {
  return (
    <div className="flex w-full items-start gap-1">
      <Image
        alt={alt}
        src={coverImage}
        quality={100}
        width={400}
        height={400}
      />

      <div className="w-full items-start gap-2">
        <h3 className="text-[2rem] font-medium leading-[2.8rem] text-light ">
          {title}
        </h3>
        <p className="text-lg font-normal leading-[1.6875rem] text-lightSilver ">
          {description}
        </p>
        <span className="text-base font-semibold uppercase leading-[1.5rem] ">
          Informações do projeto
        </span>
        <h4 className="text-base font-normal leading-[1.6rem] text-light ">
          Tecnologias
        </h4>
        <div>tecnologias</div>
      </div>
    </div>
  )
}
