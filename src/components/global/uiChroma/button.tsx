import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'
import { ForwardedRef } from 'react'
import { ImSpinner2 } from 'react-icons/im'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  asChild?: boolean
  sizes?: 'xs' | 'sm' | 'lg' | 'icon' | 'full'
  variants?:
    | 'primary'
    | 'secundary'
    | 'outline'
    | 'ghost'
    | 'accent'
    | 'disabled'
    | 'link'
    | 'danger'
    | 'warning'
    | 'success'
    | 'shine'
    | 'swipe'
  ref?: ForwardedRef<HTMLButtonElement>
}

const variantClasses = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary-hover',
  secundary: 'bg-secondary text-secondary-foreground hover:bg-secondary-hover',
  outline:
    'text-accent bg-accent-foreground hover:bg-accent-hover hover:text-accent-foreground',
  ghost:
    'bg-background text-primary hover:bg-muted-hover select-none outline-hidden focus:bg-muted-hover',
  accent: 'text-accent-foreground hover:bg-accent-hover  bg-accent',
  disabled: 'bg-opacity-50 bg-accent border text-accent-foreground',
  link: 'bg-transparent border-none underline-offset-4 hover:underline',
  danger: 'bg-danger hover:bg-danger-hover text-danger-foreground',
  warning: 'bg-warning text-warning-foreground hover:bg-warning-hover',
  success: 'bg-success hover:bg-success-hover text-success-foreground',
  shine:
    'before:ease relative  overflow-hidden border border-border bg-primary text-primary-foreground shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-primary-foreground before:opacity-10 before:duration-700 hover:shadow-primary hover:before:-translate-x-40',
  swipe:
    'hover:before:bg-accent-foreground hover:before:text-accent relative  overflow-hidden border bg-accent text-accent-foreground shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-accent before:transition-all before:duration-500 hover:text-accent-foreground hover:shadow-primary hover:before:left-0 hover:before:w-full'
}
const sizeClasses = {
  xs: 'h-10 text-sm',
  sm: 'h-12 text-sm',
  lg: 'h-14 text-lg',
  icon: 'h-8 w-8 p-1',
  full: 'h-10 w-full text-base'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      loading = false,
      sizes = 'sm',
      variants = 'primary',
      asChild = false,
      ...props
    },
    ref
  ) => {
    // Memoizando as classes para melhorar a performance
    const _className = React.useMemo(
      () =>
        twMerge(
          variantClasses[variants!],
          sizeClasses[sizes!],
          'appearance-none rounded-md px-2 py-1.5 flex gap-2 duration-300 transition-all active:scale-95',
          ' items-center justify-center font-normal ring-offset-background disabled:pointer-events-none disabled:opacity-60',
          'transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          className
        ),
      [className, sizes, variants]
    )

    // Definindo o componente a ser usado (Slot ou button)
    const Comp = asChild ? Slot : 'button'

    return (
      <Comp
        ref={ref}
        className={_className}
        {...props}
        disabled={loading || variants === 'disabled'}
        aria-busy={loading}
        aria-live={loading ? 'polite' : undefined}
      >
        {loading ? (
          <>
            {props.children}
            <ImSpinner2 size={18} className="animate-spin" />
          </>
        ) : (
          props.children
        )}
      </Comp>
    )
  }
)

Button.displayName = 'Button'

export { Button }
export type { ButtonProps }
