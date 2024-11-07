import { fetchHygraphQuery } from '@/app/api/hygraph/fetchHygraphQuery'
import { SIDEBAR_TYPES } from '@/types/sideBar'

export const GET_DATA_SIDEBAR = async (): Promise<SIDEBAR_TYPES> => {
  const query = `
      query MyQuery {
      sideBar(where: {id: "clyemnf6s04wm08kmkzw26roz"}) {
        id
        profile {
          url
        }
        name
        profession
        links {
          id
          icon
          name
          url
        }
        technologies {
          id
          name
          icon {
            url
          }
        }
        contact {
          id
          icon
          type
          contact
        }
      }
    }
  `

  return fetchHygraphQuery(query)
}
