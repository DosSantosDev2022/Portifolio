import ScrollAnimation from '@/components/animations/ScrollAnimation'
import { Form } from '@/components/global/Form/Form'

export default async function Contact() {
  return (
    <ScrollAnimation className="flex flex-col items-start justify-center gap-6   px-8 py-4 ">
      <div>
        <h2 className="text-2xl font-bold ">
          Entre em contato para parcerias.
        </h2>
      </div>
      <Form />
    </ScrollAnimation>
  )
}
