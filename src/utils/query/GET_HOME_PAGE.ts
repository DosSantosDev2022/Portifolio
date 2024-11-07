import { fetchHygraphQuery } from '@/app/api/hygraph/fetchHygraphQuery'
import { HomePageTypes } from '@/types/homePage'

export const GET_DATA_HOME = async (): Promise<HomePageTypes> => {
  const query = `
      query MyQuery {
      home(where: {slug: "home"}) {
        sectionHero {
          title
          smallText
          links {
            id
            name
            url
            icon
          }
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
          icon
          description
        }
      }
    }
  `

  return fetchHygraphQuery(query)
}
