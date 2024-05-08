import Link from 'next/link'

interface MiniCardProps {
  title: string
  description: string
}

export function MiniCard({ title, description }: MiniCardProps) {
  return (
    <Link
      href={''}
      className=" w-full rounded-md border border-border px-2 py-4 duration-500 hover:scale-95"
    >
      <div className="space-y-2">
        <h4 className="text-base font-semibold text-light">{title} </h4>
        <span className="text-limit text-sm font-light text-lightSilver">
          {description}
        </span>
      </div>
    </Link>
  )
}
