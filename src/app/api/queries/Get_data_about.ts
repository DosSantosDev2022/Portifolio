import { fetchHygraphQuery } from '@/app/api/hygraph/FetchHygraph'
import type { RichTextContent } from '@graphcms/rich-text-types'

interface AboutMeData {
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

export const GET_DATA_ABOUT = async (): Promise<AboutMeData> => {
  const query = `
      query MyQuery {
      aboutMe(where: {slug: "about-me"}) {
        slug
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
          technologies(first: 20) {
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
        authorImage01 {
          fileName
          url
        }
        authorImage02 {
          fileName
          url
        }
      }
    }
  `

  return fetchHygraphQuery(query)
}
