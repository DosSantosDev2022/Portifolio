import type { RichTextContent } from '@graphcms/rich-text-types'

export interface homePageTypes {
	home: {
		sectionHero: {
			title: string
			smallText: string
			image: {
				url: string
			}
		}
		featuredProjects: {
			id: string
			title: string
			smallText: string
			projects: {
				id: string
				slug: string
				codeLink: string
				deployLink: string
				title: string
				description: string
				technologie: {
					id: string
					name: string
					icon: {
						url: string
					}
				}[]
				coverImage: {
					url: string
				}
			}[]
		}
		sectionAboutMe: {
			title: string
			smallText: string
			longText: {
				raw: RichTextContent
			}
		}
		features: {
			id: string
			title: string
			icon: {
				 url: string
			}
			description: string
		}[]
	}
}
