import { z } from 'zod'

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

export type FormData = z.infer<typeof FormSchema>
