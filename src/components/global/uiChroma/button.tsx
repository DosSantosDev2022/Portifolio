import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ForwardedRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { FaSpinner } from 'react-icons/fa6'

export type ButtonVariant =
  | 'primary'
  | 'secundary'
  | 'outline'
  | 'highlight'
  | 'disabled'
  | 'link'
  | 'danger'
  | 'warning'
  | 'Shine'
  | 'Swipe'

export type ButtonSize = 'xs' | 'sm' | 'lg' | 'icon' | 'full'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
  animate?: 'default' | 'Swipe' | 'Shine'
  asChild?: boolean
  sizes?: ButtonSize
  variant?: ButtonVariant
  ref?: ForwardedRef<HTMLButtonElement>
}

export function Button({
  className,
  isLoading = false,
  sizes = 'xs',
  variant = 'primary',
  asChild = false,
  ref,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: 'bg-primary text-secondary hover:bg-primary_hover',
    secundary: 'bg-secondary text-primary-900 hover:bg-secundary_hover',
    outline:
      'bg-transparent border border-secundary text-light hover:bg-primary_hover ',
    highlight: 'text-zinc-50 hover:bg-violet-800 bg-violet-900',
    disabled: 'bg-opacity-80 bg-zinc-900 border border-zinc-800 text-zinc-50',
    link: 'bg-transparent border-none underline-offset-4 hover:underline',
    danger: 'bg-red-700 hover:bg-red-600 text-zinc-50',
    warning: 'bg-yellow-400 text-zinc-900 hover:bg-yellow-300',
    Shine:
      'before:ease relative  overflow-hidden border border-zinc-800 bg-zinc-800 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-zinc-500 hover:before:-translate-x-40',
    Swipe:
      'text-zinc-50 hover:before:bg-redborder-red-500 relative  overflow-hidden border border-zinc-500 bg-white text-zinc-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-zinc-500 before:transition-all before:duration-500 hover:text-white hover:shadow-zinc-500 hover:before:left-0 hover:before:w-full',
  }
  const sizeClasses = {
    xs: 'h-10 w-20  px-3 py-2 text-xs',
    sm: 'h-14 w-24  px-3 py-2 text-sm',
    lg: 'h-16 w-28  px-8 py-4 text-lg',
    icon: 'h-9 w-9 p-1 ',
    full: 'h-10 px-4 py-2 w-full text-lg',
  }

  const _className = twMerge(
    variantClasses[variant],
    sizeClasses[sizes],
    `appearance-none rounded-md  flex items-center justify-center  font-normal transition-all duration-300 `,
    className,
  )
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      ref={ref}
      className={_className}
      {...props}
      disabled={isLoading || variant === 'disabled'}
    >
      {isLoading ? (
        <span className="flex items-center w-full gap-1">
          {props.children}
          <FaSpinner size={20} className="animate-spin text-zinc-50" />
        </span>
      ) : (
        <Comp>{props.children}</Comp>
      )}
    </Comp>
  )
}
