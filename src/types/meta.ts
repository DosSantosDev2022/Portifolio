interface OpenGraph {
  title: string
  description: string
  url: string
  type: string
  images: string
  siteName: string
}

interface Twitter {
  card: string
  site: string
  title: string
  description: string
  images: string
}

interface authors {
  name: string
  url: string
}

interface data {
  slug: string
  title: string
  description: string
  author: authors
  keywords: string[]
  viewport: string
  robots: string
  openGraph: OpenGraph
  twitter: Twitter
  canonical: string
}

export interface MetaDataTypes {
  metadata: data
}
