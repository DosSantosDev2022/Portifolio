import React from 'react'

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>

export function TextArea({ ...props }: TextAreaProps) {
  return (
    <textarea
      {...props}
      className="bg-border rounded border border-zinc-700 px-4 py-3 text-lightSilver placeholder:text-zinc-400"
    />
  )
}
