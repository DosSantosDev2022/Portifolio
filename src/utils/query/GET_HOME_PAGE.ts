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

  const baseURL =
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_BASE_URL_PRODUCTION
      : process.env.NEXT_PUBLIC_BASE_URL

  if (!baseURL) {
    console.error('Base URL not defined:', process.env.NODE_ENV)
    throw new Error('Base URL is not defined in environment variables')
  }

  const response = await fetch(`${baseURL}/api/cms`, {
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
