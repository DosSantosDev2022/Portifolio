interface CoverImage {
  url: string
}

export interface Project {
  project: {
    id: string
    title: string
    subtitle: string
    slug: string
    description: string
    coverImage: CoverImage
    codeLink: string
    deployLink: string
    technologie: {
      id: string
      name: string
      icon: {
        url: string
      }
    }[]
  }[]

  totalCount: number
}
