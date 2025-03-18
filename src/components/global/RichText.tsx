import { RichText as CmsRichText } from '@graphcms/rich-text-react-renderer'

type RichTextProps = React.ComponentProps<typeof CmsRichText>

export function RichText({ ...props }: RichTextProps) {
	return <CmsRichText {...props} />
}
