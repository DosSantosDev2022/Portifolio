import React from 'react'
import { twMerge } from 'tailwind-merge'

const Card = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithRef<'div'>
>(({ className, ...props }, ref) => {
	return (
		<div
			ref={ref}
			className={twMerge(
				'flex h-full w-full flex-col items-start justify-center space-y-3',
				'rounded-md bg-zinc-800/40 p-4',
				className,
			)}
			{...props}
		/>
	)
})

Card.displayName = 'Card'

export { Card }
