import { twMerge } from 'tailwind-merge'
import { Slot } from '@radix-ui/react-slot'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'highlight' | 'disabled'
  asChild?: boolean
}

export function Button({
  className,
  variant = 'primary',
  asChild,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  const variantClasses = {
    primary: `bg-zinc-50 text-zinc-900 hover:bg-zinc-100 hover:scale-105 transition-all duration-500`,
    outline: `bg-transparent border border-zinc-700 text-zinc-50 hover:bg-zinc-700 duration-300`,
    highlight: `text-zinc-50 hover:bg-highlights_hover duration-300 bg-highlights `,
    disabled: 'bg-transparent border border-zinc-700 text-zinc-50 ',
  }

  const _className = twMerge(
    variantClasses[variant],
    `appearance-none rounded-md px-1 py-2 text-sm font-bold shadow `,
    className,
  )

  return (
    <Comp className={_className} {...props}>
      {props.children}
    </Comp>
  )
}
