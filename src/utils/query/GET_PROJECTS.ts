import { Project } from '@/types/projects' // Considerando que os tipos estejam em um arquivo separado para organização

export const GET_ALL_PROJECTS = async (
  page: number,
  pageSize: number,
): Promise<Project> => {
  const query = `
    query MyQuery($first: Int, $skip: Int) {
      project(first: $first, skip: $skip ) {
        id
        title
        subtitle
        slug
        description
        coverImage {
          url
        }
        codeLink
        deployLink
        technologie {
          id
          name
          icon {
            url
          }
        }
      }
      
      projectConnection {
        aggregate {
          count
        }
      }
    }
  `

  const skip = (page - 1) * pageSize
  const variables = { first: pageSize, skip }

  // Realiza a requisição para a rota API

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || ''
  const response = await fetch(`${baseUrl}/api/cms`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  })

  if (!response.ok) {
    throw new Error('Failed to fetch projects')
  }

  const { project, projectConnection } = await response.json()
  const totalCount = projectConnection.aggregate.count
  return { project, totalCount }
}
