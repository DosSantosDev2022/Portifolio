'use client'
import * as z from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../button'
import { Input } from './Input'
import { TextArea } from './TextArea'
import { Label } from './label'
import { toast } from 'react-toastify'

const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/

export const FormSchema = z.object({
  nome: z.string().nonempty('O nome é obrigatório').min(2).max(50),
  email: z
    .string()
    .min(1, 'O email é obrigatório')
    .refine((value) => regexEmail.test(value), {
      message: 'Email inválido, tente novamente !',
    }),
  telefone: z.string().min(8).max(15),
  mensagem: z.string().min(10).max(500),
})

type Form = z.infer<typeof FormSchema>

export function Form() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(FormSchema),
  })

  const onSubmit: SubmitHandler<Form> = async (data) => {
    const response = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

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
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
      <div className="flex flex-col gap-1">
        <Label htmlFor="">Nome</Label>
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
        <Label htmlFor="">Email</Label>
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
        <Label htmlFor="">Telefone</Label>
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
        <Label htmlFor="">Mensagem</Label>
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
          className="flex h-[54px] w-[137px] items-center justify-center p-4 text-base font-bold uppercase tracking-wider "
          variant="highlight"
        >
          Enviar
        </Button>
      </div>
    </form>
  )
}
