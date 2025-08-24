// src/hooks/useFormContactController.ts
import { type FormData, FormSchema } from '@/@types/forms'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export const useFormContactController = () => {
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<FormData>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			nome: '',
			email: '',
			telefone: '',
			mensagem: '',
		},
	})

	const onSubmit = async (data: FormData) => {
		setIsLoading(true)
		try {
			const response = await fetch('/api/send', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			})

			setIsLoading(false)
			if (response.ok) {
				toast.success('Email enviado com sucesso!')
				form.reset()
			} else {
				toast.error('Ocorreu um erro ao enviar o email.')
			}
		} catch (error) {
			console.error('Erro na requisição fetch:', error)
			setIsLoading(false)
		}
	}

	return {
		form,
		isLoading,
		onSubmit,
	}
}
