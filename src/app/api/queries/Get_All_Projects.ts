import { fetchHygraphQuery } from '@/app/api/hygraph/FetchHygraph'

interface CoverImage {
  url: string
}

interface Project {
  project: {
    id: string
    title: string
    subtitle: string
    slug: string
    description: string
    coverImage: CoverImage
    codeLink: string
    deployLink: string
    technologie: {
      id: string
      name: string
      icon: {
        url: string
      }
    }[]
  }[]

  totalCount: number
}

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
  const { project, projectConnection } = await fetchHygraphQuery(
    query,
    variables,
  )
  const totalCount = projectConnection.aggregate.count
  return { project, totalCount }
}
