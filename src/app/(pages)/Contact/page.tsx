import ScrollAnimation from '@/components/animations/ScrollAnimation'
import { Form } from '@/components/global/Form/Form'

export default function Contact() {
  return (
    <ScrollAnimation className="flex flex-col gap-10 sm:px-10 sm:py-8 p-4">
      <h2 className="text-2xl sm:text-4xl font-bold text-center sm:text-start">
        Entre em contato para parcerias.
      </h2>
      <Form />
    </ScrollAnimation>
  )
}
