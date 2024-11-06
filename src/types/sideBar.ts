export interface SIDEBAR_TYPES {
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
