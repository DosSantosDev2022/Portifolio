import { fetchHygraphQuery } from '@/app/api/hygraph/fetchHygraphQuery'
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

  return fetchHygraphQuery(query)
}
