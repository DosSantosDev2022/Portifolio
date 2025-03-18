import type { RichTextContent } from '@graphcms/rich-text-types'

interface Technologie {
	id: string
	name: string
	icon: {
		url: string
	}
}

interface CoverImage {
	url: string
}

interface CompleteDescription {
	raw: RichTextContent
}

export interface Project {
	id: string
	title: string
	subtitle: string
	slug: string
	description: string
	technologie: Technologie[]
	completeDescription: CompleteDescription
	coverImage: CoverImage
	codeLink: string
	deployLink: string
}

export interface DetailsProject {
	projects: Project
}
