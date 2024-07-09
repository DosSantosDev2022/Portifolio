import { fetchHygraphQuery } from '../hygraph/FetchHygraph'

interface GET_DATA_SIDEBAR_TYPES {
  sideBar: {
    profile: {
      url: string
    }
    name: string
    profession: string
    links: {
      id: string
      icon: string
      name: string
      url: string
    }[]
    technologies: {
      id: string
      name: string
      icon: {
        url: string
      }
    }[]
    contact: {
      id: string
      icon: string
      type: string
      contact: string
    }[]
  }
}

export const GET_DATA_SIDEBAR = async (): Promise<GET_DATA_SIDEBAR_TYPES> => {
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
