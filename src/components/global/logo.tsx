import { bebas } from '@/assets/fonts'

export function Logo() {
  return (
    <span
      className={`text-3xl font-normal leading-10 tracking-wider text-muted  ${bebas.className}`}
    >
      DosSantosDev
    </span>
  )
}
