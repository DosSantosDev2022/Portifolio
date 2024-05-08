import React, { forwardRef } from 'react'

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>
const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        className="rounded border border-zinc-700 bg-border px-4 py-3 text-lightSilver placeholder:text-zinc-400"
      />
    )
  },
)

TextArea.displayName = 'textArea'

export default TextArea
