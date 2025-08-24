import {
	Code,
	type LucideIcon,
	Monitor,
	Palette,
	Rocket,
	Server,
} from 'lucide-react'

/**
 * Interface para a tipagem de um item de serviço.
 *
 * @interface IService
 * @property {number} id - O identificador único do item.
 * @property {string} name - O nome do serviço.
 * @property {string} description - Uma breve descrição sobre o serviço oferecido.
 * @property {LucideIcon} icon - O componente de ícone do serviço.
 */
interface IService {
	id: number
	name: string
	description: string
	icon: LucideIcon
}

/**
 * Array de objetos contendo os serviços de desenvolvimento oferecidos.
 * Cada objeto representa um serviço com seu nome, descrição e ícone.
 */
export const services: IService[] = [
	{
		id: 1,
		name: 'Desenvolvimento de Sites',
		description:
			'Criação de sites institucionais, com foco em design responsivo e experiência de usuário.',
		icon: Monitor,
	},
	{
		id: 2,
		name: 'Landing Pages de Alta Conversão',
		description:
			'Desenvolvimento de landing pages otimizadas para captar leads e converter visitantes em clientes, focadas em performance.',
		icon: Rocket,
	},
	{
		id: 3,
		name: 'Sistemas Web',
		description:
			'Construção de sistemas web personalizados para automatizar processos internos e gerenciar dados de forma eficiente.',
		icon: Server,
	},
	{
		id: 4,
		name: 'Manutenção de Projetos',
		description:
			'Suporte e manutenção contínua para projetos existentes, garantindo performance, segurança e a implementação de novas funcionalidades.',
		icon: Code,
	},
	{
		id: 5,
		name: 'Redesign de Interfaces (UI/UX)',
		description:
			'Análise e aprimoramento da interface e experiência do usuário para modernizar e tornar a aplicação mais intuitiva.',
		icon: Palette,
	},
]
