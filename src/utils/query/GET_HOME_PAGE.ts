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

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''
  const response = await fetch(`${baseUrl}/api/cms`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })

  if (!response.ok) {
    throw new Error('Failed to fetch home page')
  }

  const { home } = await response.json()

  return { home }
}