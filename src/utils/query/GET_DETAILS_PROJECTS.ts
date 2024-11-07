import { DetailsProject } from '@/types/detailsProject'

export const GET_DETAILS_PROJECT = async (): Promise<DetailsProject> => {
  const query = `
  query MyQuery {
    project {
      id
      title
      subtitle
      slug
      description
      technologie {
        id
        name
        icon {
          url
        }
      }
      completeDescription {
        raw
      }
      coverImage {
        url
      }
      codeLink
      deployLink
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
    throw new Error('Failed to fetch Details Projects')
  }

  const { project } = await response.json()

  return { project }
}
