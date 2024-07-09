import type { RichTextContent } from '@graphcms/rich-text-types'
import { fetchHygraphQuery } from '@/app/api/hygraph/FetchHygraph'

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
}

export const GET_DETAILS_PROJECT = async (): Promise<Project> => {
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

  return fetchHygraphQuery(query)
}
