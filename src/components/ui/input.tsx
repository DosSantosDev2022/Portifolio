import React, { type ReactNode } from 'react'
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

export { Input }
