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

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''
  const response = await fetch(`${baseUrl}/api/cms`, {
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
