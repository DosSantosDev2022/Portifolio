import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export type TextAreaProps =
	React.TextareaHTMLAttributes<HTMLTextAreaElement>
const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
	(props, ref) => {
		return (
			<textarea
				{...props}
				ref={ref}
				className={twMerge(
					'border-border rounded-sm border px-4 py-3 transition-all duration-300',
					'bg-input text-muted placeholder:text-muted',
					'focus-within:ring-accent outline-hidden focus-within:ring-2',
				)}
			/>
		)
	},
)

TextArea.displayName = 'textArea'

export { TextArea }
