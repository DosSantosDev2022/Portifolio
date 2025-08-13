import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  )
}

<<<<<<< HEAD
=======
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
					'bg-input flex h-12 w-full items-center gap-1 rounded-sm p-3 transition-all duration-300',
					variantClasses[variants],
					className,
				)}
			>
				{icon && <i className='text-muted-foreground'>{icon}</i>}
				<input
					type={type}
					ref={ref}
					{...props}
					className={twMerge(
						'flex-1 outline-hidden ',
						'text-muted placeholder:text-muted bg-transparent',
						'file:text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium',
					)}
				/>
			</div>
		)
	},
)

Input.displayName = 'Input'

>>>>>>> a61a714af42d76e020998d01db0b315bbb20f1c0
export { Input }
