import React from 'react'
import { twMerge } from 'tailwind-merge'

export interface LabelProps extends React.ComponentPropsWithRef<'label'> {
  className?: string
}

const Label = ({ className, ...props }: LabelProps) => {
  return (
    <label
      {...props}
      className={twMerge(
        'text-muted text-base leading-[25.6px] font-medium',
        className
      )}
    />
  )
}

export { Label }
