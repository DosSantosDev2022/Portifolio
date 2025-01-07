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
        'flex w-full flex-col items-start justify-center space-y-2',
        'p-4 rounded-md bg-zinc-800/40',
        className,
      )}
      {...props}
    />
  )
})

Card.displayName = 'Card'

export { Card }
