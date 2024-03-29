import { fetchHygraphQuery } from '../FetchHygraph'

interface DataHome {
  home: {
    sectionHero: {
      title: string
      smallText: string
      links: {
        id: string
        name: string
        icon: string
      }[]
      image: {
        url: string
      }
    }
    featuredProjects: {
      title: string
      smallText: string
      projects: {
        title: string
        description: string
        technologie: {
          id: string
          name: string
          icon: {
            url: string
          }
        }
        coverImage: {
          url: string
        }
      }[]
    }
    sectionAboutMe: {
      title: string
      smallText: string
      longText: {
        text: string
      }
    }
  }
}

export const GET_DATA_HOME = async (): Promise<DataHome> => {
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
