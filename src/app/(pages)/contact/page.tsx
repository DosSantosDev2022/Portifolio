'use client'
import { ScrollAnimation } from '@/components/global'
import { useForm, type SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Label, TextArea } from '@/components/ui'
import { useState } from 'react'
import { ImSpinner9 } from 'react-icons/im'
import { useNotification } from '@/context/notification/notificationContext'
import { type FormData, FormSchema } from '@/@types/forms'

export default function Contact() {
	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(FormSchema),
	})
	const { showNotification } = useNotification()
	const [isLoading, setIsLoading] = useState(false)

	const onSubmit: SubmitHandler<FormData> = async (data) => {
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
		<ScrollAnimation className='flex flex-col gap-10 p-4 lg:px-10 lg:py-8'>
			<div className=' w-full lg:max-w-3xl  space-y-10'>
				<h2 className='text-start text-2xl font-bold  sm:text-4xl'>
					Entre em contato para parcerias.
				</h2>
				<form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
					<div className='flex flex-col gap-1'>
						<Label htmlFor='nome'>Nome</Label>
						<Input
							{...register('nome')}
							placeholder='Digite seu nome completo'
							type='text'
						/>

						{errors && (
							<span className='text-md text-danger font-normal'>
								{errors.nome?.message}
							</span>
						)}
					</div>
					<div className='flex flex-col gap-1'>
						<Label htmlFor='email'>Email</Label>
						<Input
							{...register('email')}
							placeholder='Digite um e-mail válido'
							type='email'
						/>
						{errors && (
							<span className='text-md text-danger font-normal'>
								{errors.email?.message}
							</span>
						)}
					</div>
					<div className='flex flex-col gap-1'>
						<Label htmlFor='telefone'>Telefone</Label>
						<Input
							{...register('telefone')}
							placeholder='(xx) xxxx-xxxxx'
							type='tel'
						/>
						{errors && (
							<span className='text-md text-danger font-normal'>
								{errors.telefone?.message}
							</span>
						)}
					</div>
					<div className='flex flex-col gap-1'>
						<Label htmlFor='mensagem'>Mensagem</Label>
						<TextArea
							{...register('mensagem')}
							placeholder='Deixe sua mensagem...'
						/>
						{errors && (
							<span className='text-md text-danger font-normal'>
								{errors.mensagem?.message}
							</span>
						)}
					</div>
					<div className='flex w-full items-center justify-end'>
						<Button variants='accent' disabled={isLoading} sizes='full'>
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
			</div>
		</ScrollAnimation>
	)
}
