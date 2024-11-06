import type { RichTextContent } from '@graphcms/rich-text-types'

export interface AboutMeData {
  aboutMe: {
    slug: string
    sectionHero: {
      title: string
      smallText: string
      longText: {
        text: string
      }
      links: {
        id: string
        name: string
        icon: string
        url: string
      }[]
      image: {
        url: string
      }
    }
    sectionTechnologies: {
      title: string
      smallText: string
      technologies: {
        id: string
        name: string
        icon: {
          url: string
        }
      }[]
    }
    sectionstory: {
      title: string
      longText: {
        raw: RichTextContent
      }
    }
    authorImage01: {
      fileName: string
      url: string
    }
    authorImage02: {
      fileName: string
      url: string
    }
  }
}
