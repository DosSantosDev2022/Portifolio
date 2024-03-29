import { fetchHygraphQuery } from "../FetchHygraph"

export const GET_DATA_HOME = async () : Promise<T> => {
  const query = `
      query MyQuery {
        home(where: {slug: "home"}) {
          sectionHero {
            title
            smallText
            links {
              id
              name
              icon
            }
            image {
              url
            }
          }
          featuredProjects {
            title
            smallText
            projects {
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
              text
            }
          }
        }
      }  
  `

  return fetchHygraphQuery(query)
}