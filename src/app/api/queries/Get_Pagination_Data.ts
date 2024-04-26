import type { RichTextContent } from '@graphcms/rich-text-types'
import { fetchHygraphQuery } from '../FetchHygraph'

interface Technologie {
  id: string
  name: string
  icon: {
    url: string
  }
}

interface CoverImage {
  url: string
}

interface CompleteDescription {
  raw: RichTextContent
}

interface Project {
  project: {
    id: string
    title: string
    subtitle: string
    slug: string
    description: string
    technologie: Technologie[]
    completeDescription: CompleteDescription
    coverImage: CoverImage
    codeLink: string
    deployLink: string
  }[]

  totalCount: number
}

export const GET_PAGINATION_DATA = async (
  term: string,
  page: number,
  pageSize: number,
): Promise<Project> => {
  const query = `
    query MyQuery($first: Int, $skip: Int, $term: String!) {
      project(first: $first, skip: $skip, where:  {_search: $term}) {
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
      projectConnection {
        aggregate {
          count
        }
      }
    }
  
  `

  const skip = (page - 1) * pageSize
  const variables = { first: pageSize, skip, term }
  const { project, projectConnection } = await fetchHygraphQuery(
    query,
    variables,
  )
  const totalCount = projectConnection.aggregate.count
  return { project, totalCount }
}
