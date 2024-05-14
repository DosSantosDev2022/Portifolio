import Image from 'next/image'

interface TechnologiesProps {
  id: string
  name: string
  icon: string
}

export function Technologies({ id, name, icon }: TechnologiesProps) {
  return (
    <>
      <Image
        key={id}
        className='className=" rounded-md border border-zinc-700 bg-zinc-800 p-1'
        width={32}
        height={32}
        src={icon}
        alt={name}
      />
    </>
  )
}
