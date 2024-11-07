import { fetchHygraphQuery } from '@/app/api/hygraph/fetchHygraphQuery'
import { AboutMeData } from '@/types/about'

export const GET_ABOUT_ME = async (): Promise<AboutMeData> => {
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
