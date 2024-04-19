import { fetchHygraphQuery } from '../FetchHygraph'
import type { RichTextContent } from '@graphcms/rich-text-types'

interface AboutMeData {
  aboutMe: {
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
  }
}

export const GET_DATA_ABOUT = async (): Promise<AboutMeData> => {
  const query = `
    query MyQuery {
      aboutMe(where: {slug: "about-me"}) {
        sectionHero {
          title
          smallText
          longText {
            text
          }
          links {
            id
            name
            icon
            url
          }
          image {
            url
          }
        }
        sectionTechnologies {
          title
          smallText
          technologies {
            id
            name
            icon {
              url
            }
          }
        }
        sectionstory {
          title
          longText {
            raw
          }
        }
      }
    }
  `

  return fetchHygraphQuery(query)
}
