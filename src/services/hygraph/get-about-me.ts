import { fetchHygraphQuery } from '@/app/api/hygraph/fetchHygraphQuery'
import type { aboutMe } from '@/@types/about'

export const getAboutMe = async (): Promise<aboutMe> => {
	const query = `
      query MyQuery {
      aboutMe(where: {slug: "about"}) {
        slug
        sectionHero {
          title
          smallText
          longText {
            text
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
      }
    }
  `

	return fetchHygraphQuery(query)
}
