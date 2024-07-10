import { Form } from '@/components/global/Form/Form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portifólio - Contato',
  description: '',
}

export default async function Contact() {
  return (
    <div className="flex flex-col items-start justify-center gap-6 px-3 py-8 lg:flex-row lg:px-12 lg:py-16 ">
      <div>
        <h2 className="text-4xl font-bold ">
          Entre em contato para parcerias.
        </h2>
      </div>
      <Form />
    </div>
  )
}
