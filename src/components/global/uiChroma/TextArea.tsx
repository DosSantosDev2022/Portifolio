import React, { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>
const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        className={twMerge(
          'rounded duration-300 transition-all px-4 py-3 border border-border',
          'bg-input text-muted placeholder:text-muted',
          'outline-none focus-within:ring-2 focus-within:ring-accent',
        )}
      />
    )
  },
)

TextArea.displayName = 'textArea'

export default TextArea
