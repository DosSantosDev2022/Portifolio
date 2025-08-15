'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Textarea } from '@/components/ui'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useState } from 'react'
import { ImSpinner9 } from 'react-icons/im'
import { useNotification } from '@/context/notification/notificationContext'
import { type FormData, FormSchema } from '@/@types/forms'

const FormContact = () => {
  const { showNotification } = useNotification()
  const [isLoading, setIsLoading] = useState(false)

  // 1. A inicialização do useForm permanece a mesma
  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nome: '',
      email: '',
      telefone: '',
      mensagem: '',
    }
  })

  // 2. A função onSubmit também permanece a mesma
  const onSubmit = async (data: FormData) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      setIsLoading(false);
      if (response.ok) {
        showNotification('Email enviado com sucesso!', 'success');
        form.reset(); // Usamos o form.reset() do hook
      } else {
        showNotification('Ocorreu um erro ao enviar o email.', 'error');
      }
    } catch (error) {
      console.error('Erro na requisição fetch:', error);
      setIsLoading(false);
      showNotification('Erro de rede. Verifique sua conexão.', 'error');
    }
  };

  // 3. A grande mudança está aqui, no JSX retornado
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        
        {/* Campo NOME */}
        <FormField
          control={form.control}
          name="nome"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Digite seu nome completo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Campo EMAIL */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Digite um e-mail válido" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        {/* Campo TELEFONE */}
        <FormField
          control={form.control}
          name="telefone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input placeholder="(xx) xxxx-xxxxx" type="tel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Campo MENSAGEM */}
        <FormField
          control={form.control}
          name="mensagem"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea placeholder="Deixe sua mensagem..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='flex w-full items-center justify-end'>
          <Button type='submit' variant='secondary' disabled={isLoading} size='default'>
            {isLoading ? (
              <span className='flex items-center justify-center gap-1'>
                Enviando...
                <ImSpinner9 className='text-light animate-spin' />
              </span>
            ) : (
              'Enviar'
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export { FormContact }