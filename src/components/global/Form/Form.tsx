'use client'
import * as z from 'zod'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/global/uiChroma/button'
import { ComponentInput, InputRoot } from '@/components/global/uiChroma/Input'
import { Label } from '@/components/global/uiChroma/label'
import TextArea from '@/components/global/uiChroma/TextArea'
import { useState } from 'react'
import { ImSpinner9 } from 'react-icons/im'
import { useNotification } from '@/context/notificationContext'

// Regex para validação de email
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Regex para validação de telefone
const regexTelefone = /^[0-9+\-\s()]*$/

export const FormSchema = z.object({
  nome: z
    .string()
    .nonempty('O nome é obrigatório')
    .min(2, { message: 'O nome deve ter pelo menos 2 caracteres' })
    .max(50, { message: 'O nome deve ter no máximo 50 caracteres' }),

  email: z
    .string()
    .nonempty('O email é obrigatório')
    .refine((value) => regexEmail.test(value), {
      message: 'Email inválido, tente novamente!',
    }),

  telefone: z
    .string()
    .nonempty('O telefone é obrigatório')
    .refine((value) => regexTelefone.test(value), {
      message:
        'O telefone deve conter apenas números e símbolos válidos (+, -, (), espaço)',
    }),

  mensagem: z.string().nonempty('A mensagem é obrigatória').min(10, {
    message:
      'A mensagem deve ser bem elaborada para te atendermos da melhor maneira',
  }),
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
  const { showNotification } = useNotification()
  const [isLoading, setIsLoading] = useState(false)

  const onSubmit: SubmitHandler<Form> = async (data) => {
    setIsLoading(true)
    const response = await fetch('api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    setIsLoading(false)
    if (response.ok) {
      showNotification('Email enviado com sucesso!', 'success')
    } else {
      showNotification('Email enviado com sucesso!', 'error')
    }
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6 ">
      <div className="flex flex-col gap-1">
        <Label htmlFor="nome">Nome</Label>
        <InputRoot>
          <ComponentInput
            {...register('nome')}
            placeholder="Digite seu nome completo"
            type="text"
          />
        </InputRoot>

        {errors && (
          <span className="text-md font-normal text-red-500">
            {errors.nome?.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="email">Email</Label>
        <InputRoot>
          <ComponentInput
            {...register('email')}
            placeholder="Digite um e-mail válido"
            type="email"
          />
        </InputRoot>
        {errors && (
          <span className="text-md font-normal text-red-500">
            {errors.email?.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <Label htmlFor="telefone">Telefone</Label>
        <InputRoot>
          <ComponentInput
            {...register('telefone')}
            placeholder="(xx) xxxx-xxxxx"
            type="tel"
          />
        </InputRoot>
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
          className="flex h-[44px]  items-center justify-center text-base font-bold uppercase tracking-wider "
          variant="highlight"
          disabled={isLoading}
          sizes="lg"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-1">
              Enviando...
              <ImSpinner9 className="animate-spin text-light" />
            </span>
          ) : (
            'Enviar'
          )}
        </Button>
      </div>
    </form>
  )
}
