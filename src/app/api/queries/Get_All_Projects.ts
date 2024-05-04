import { fetchHygraphQuery } from '../FetchHygraph'



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
