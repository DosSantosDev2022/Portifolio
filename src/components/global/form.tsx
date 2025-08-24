'use client'

import { Button, Input, Textarea } from '@/components/ui'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { useFormContactController } from '@/hooks/use-form-contact-controller'
import { ImSpinner9 } from 'react-icons/im'

const FormContact = () => {
  const { form, isLoading, onSubmit } = useFormContactController();

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
          <Button className='w-full' type='submit' variant='secondary' disabled={isLoading} size='default'>
            {isLoading ? (
              <span className='flex items-center justify-center gap-1'>
                Enviando mensagem...
                <ImSpinner9 className='text-light animate-spin' />
              </span>
            ) : (
              'Enviar mensagem'
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}

export { FormContact }

