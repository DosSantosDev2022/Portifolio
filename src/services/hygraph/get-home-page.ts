import { fetchHygraphQuery } from '@/app/api/hygraph/fetchHygraphQuery'
import type { homePageTypes } from '@/@types/homePage'

export const getHomePage = async (): Promise<homePageTypes> => {
	const query = `
      query MyQuery {
      home(where: {slug: "home"}) {
        sectionHero {
          title
          smallText
          image {
            url
          }
        }
        featuredProjects {
          id
          title
          smallText
          projects {
            id
            slug
            codeLink
            deployLink
            title
            description
            technologie {
              id
              name
              icon {
                url
              }
            }
            coverImage {
              url
            }
          }
        }
        sectionAboutMe {
          title
          smallText
          longText {
            raw
          }
        }
        features {
          id
          title
          icon {
           url
          }
          description
        }
      }
    }
  `

	return fetchHygraphQuery(query)
}
