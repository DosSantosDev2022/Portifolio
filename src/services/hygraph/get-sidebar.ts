import { fetchHygraphQuery } from '@/app/api/hygraph/fetchHygraphQuery'
import type { sideBarTypes } from '@/@types/sideBar'

export const getSideBar = async (): Promise<sideBarTypes> => {
	const query = `
    query MyQuery {
      sideBar(where: {id: "clyemnf6s04wm08kmkzw26roz"}) {
        id
        profile {
          url
        }
        name
        profession
        technologies {
          id
          name
          icon {
            url
          }
        }
        socialLinks {
          id
          name
          url
          icon {
            url
          }
        }
        contactList {
          id
          name
          label
          icon {
            url
          }
        }
      }
    }
  `

	return fetchHygraphQuery(query)
}
