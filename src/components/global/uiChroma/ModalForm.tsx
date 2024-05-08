'use client'
import * as z from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/global/uiChroma/button'
import { Input } from '@/components/global/uiChroma/Input'
import { Label } from './label'
import { toast } from 'react-toastify'
import TextArea from '@/components/global/uiChroma/TextArea'

const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

export const FormSchema = z.object({
  nome: z.string().nonempty('O nome é obrigatório.').min(2).max(50),
  email: z
    .string()
    .min(1, 'O e-mail é obrigatório.')
    .refine((value) => regexEmail.test(value), {
      message: 'E-mail inválido, tente novamente!',
    }),
  telefone: z.string().min(8, 'Digite um telefone válido, minimo 9 números.'),
  mensagem: z.string().min(10, 'Por favor, deixe sua mensagem.'),
})

type Form = z.infer<typeof FormSchema>

export function ModalForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(FormSchema),
  })

  const onSubmit: SubmitHandler<Form> = async (data) => {
    const response = await fetch('api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    console.log(data)

    if (response.ok) {
      toast.success('E-mail enviado com sucesso !', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    } else {
      toast.error('Erro ao enviar e-mail , tente novamente', {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    }
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-2">
      <div className="flex flex-col gap-1">
        <Label htmlFor="nome">Nome</Label>
        <Input
          {...register('nome')}
          placeholder="Digite seu nome"
          type="text"
        />
        {errors && (
          <span className="text-md font-normal text-red-500">
            {errors.nome?.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="email">Email</Label>
        <Input
          {...register('email')}
          placeholder="Digite seu e-mail"
          type="email"
        />
        {errors && (
          <span className="text-md font-normal text-red-500">
            {errors.email?.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="telefone">Telefone</Label>
        <Input
          {...register('telefone')}
          placeholder="(xx) xxxx-xxxx"
          type="number"
        />
        {errors && (
          <span className="text-md font-normal text-red-500">
            {errors.telefone?.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="mensagem">Mensagem</Label>
        <TextArea
          {...register('mensagem')}
          placeholder="Deixe sua mensagem..."
        />
        {errors && (
          <span className="text-md font-normal text-red-500">
            {errors.mensagem?.message}
          </span>
        )}
      </div>
      <div className="flex w-full items-center justify-end p-2">
        <Button
          className="flex h-[54px] w-full items-center justify-center p-4 text-base font-bold uppercase tracking-wider "
          variant="highlight"
        >
          Enviar
        </Button>
      </div>
    </form>
  )
}
