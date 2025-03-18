import { RichText as RichTextComponent } from '@graphcms/rich-text-react-renderer'

type RichTextProps = React.ComponentProps<typeof RichTextComponent>

const RichText = ({ ...props }: RichTextProps) => {
	return <RichTextComponent {...props} />
}

export { RichText }
