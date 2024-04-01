import React from 'react'

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>

export function Label({ ...props }: LabelProps) {
  return (
    <label
      {...props}
      className="text-base font-medium leading-[25.6px] text-light
    "
    />
  )
}
