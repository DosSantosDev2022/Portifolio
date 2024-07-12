import { MetaDataTypes } from '@/types/meta'
import { fetchHygraphQuery } from '../hygraph/FetchHygraph'

export const GET_META_DATA = async (params: string): Promise<MetaDataTypes> => {
  const query = `
   query MyQuery($params : String!) {
      metadata(where: {slug: $params}) {
        title
        description
        author {
          name
          url
        }
        keywords
        viewport
        robots
        openGraph {
          title
          description
          url
          type
          images
          siteName
        }
        canonical
      }
    }
  `
  const variables = { params }
  return fetchHygraphQuery(query, variables)
}
