import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode
  variants?: 'success' | 'error' | 'default'
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, variants = 'default', ...props }, ref) => {
    const variantClasses = {
      default: 'focus-within:ring-2 focus-within:ring-accent',
      success: 'focus-within:ring-2 focus-within:ring-success',
      error: 'focus-within:ring-2 focus-within:ring-danger',
    }
    return (
      <div
        className={twMerge(
          'flex h-12 w-full items-center gap-1 rounded  bg-input p-3',
          variantClasses[variants],
          className,
        )}
      >
        {icon && <i className="text-muted-foreground">{icon}</i>}
        <input
          type={type}
          ref={ref}
          {...props}
          className={twMerge(
            'text-md flex-1 font-light outline-none',
            'bg-transparent text-muted-foreground placeholder:text-muted-foreground',
            'file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground',
          )}
        />
      </div>
    )
  },
)

Input.displayName = 'Input'

export { Input }
