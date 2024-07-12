import { GET_META_DATA } from '@/app/api/queries/Get_meta_data'
import { Form } from '@/components/global/Form/Form'

export async function generateMetadata() {
  const params = 'contact'
  const { metadata } = await GET_META_DATA(params)

  return {
    title: `${metadata.title}`,
    description: `${metadata.description}`,
    authors: [
      { name: `${metadata.author?.name}`, url: `${metadata.author?.url}` },
    ],
    keywords: `${metadata.keywords}`,
    viewport: `${metadata.viewport}`,
    robots: `${metadata.robots}`,
    openGraph: {
      title: `${metadata.openGraph.title}`,
      description: `${metadata.openGraph.description}`,
      url: `${metadata.openGraph.url}`,
      type: `${metadata.openGraph.type}`,
      images: `${metadata.openGraph.images}`,
      siteName: `${metadata.openGraph.siteName}`,
    },
  }
}

export default async function Contact() {
  return (
    <div className="flex flex-col items-start justify-center gap-6   px-8 py-4 ">
      <div>
        <h2 className="text-2xl font-bold ">
          Entre em contato para parcerias.
        </h2>
      </div>
      <Form />
    </div>
  )
}
