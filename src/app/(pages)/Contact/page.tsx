import ScrollAnimation from '@/components/animations/ScrollAnimation'
import { Form } from '@/components/global/Form/Form'

export default function Contact() {
  return (
    <ScrollAnimation className="flex flex-col gap-10 p-4 sm:px-10 sm:py-8">
      <h2 className="text-center text-2xl font-bold sm:text-start sm:text-4xl">
        Entre em contato para parcerias.
      </h2>
      <Form />
    </ScrollAnimation>
  )
}
