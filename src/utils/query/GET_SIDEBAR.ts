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

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '' // Default to localhost for dev

  const response = await fetch(`${baseUrl}/api/cms`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })

  if (!response.ok) {
    throw new Error('Failed to fetch sideBar component')
  }

  const { sideBar } = await response.json()

  return { sideBar }
}
