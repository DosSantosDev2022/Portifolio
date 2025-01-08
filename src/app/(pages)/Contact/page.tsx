import ScrollAnimation from '@/components/animations/ScrollAnimation'
import { Form } from '@/components/global/Form/Form'

export default function Contact() {
  return (
    <ScrollAnimation className="flex flex-col gap-6 px-10 py-8">
      <h2 className="text-3xl font-bold">Entre em contato para parcerias.</h2>
      <Form />
    </ScrollAnimation>
  )
}
