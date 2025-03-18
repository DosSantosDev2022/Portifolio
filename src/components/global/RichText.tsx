import { RichText as CmsRichText } from '@graphcms/rich-text-react-renderer'

type RichTextProps = React.ComponentProps<typeof CmsRichText>

const RichText = ({ ...props }: RichTextProps) => {
	return <CmsRichText {...props} />
}

export { RichText }
