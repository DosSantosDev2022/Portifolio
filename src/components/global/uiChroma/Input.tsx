import React from 'react'
import { twMerge } from 'tailwind-merge'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={twMerge(
          'flex h-10 w-full rounded-md border border-zinc-700 bg-border px-3 text-lightSilver placeholder:text-zinc-400',
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
Input.displayName = 'Input'

export { Input }
