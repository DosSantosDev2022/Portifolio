import { GitBranch } from 'lucide-react'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaReact } from 'react-icons/fa'
import type { IconType } from 'react-icons/lib'
import {
	SiNextdotjs,
	SiReactquery,
	SiShadcnui,
	SiTailwindcss,
	SiZod,
} from 'react-icons/si'

/**
 * Interface para a tipagem de um item da stack de tecnologias.
 *
 * @interface ITechStack
 * @property {number} id - O identificador único do item.
 * @property {string} name - O nome da tecnologia.
 * @property {string} description - Uma breve descrição sobre como a tecnologia é utilizada.
 * @property {LucideIcon} icon - O componente de ícone da tecnologia.
 */
interface ITechStack {
	id: number
	name: string
	description: string
	icon: IconType
}

/**
 * Array de objetos contendo a minha stack de desenvolvimento.
 * Cada objeto representa uma tecnologia com seu nome, descrição e ícone.
 */
export const techStack: ITechStack[] = [
	{
		id: 1,
		name: 'React',
		description:
			'Biblioteca JavaScript para a construção de interfaces de usuário reativas.',
		icon: FaReact,
	},
	{
		id: 2,
		name: 'Next.js',
		description:
			'Framework React para renderização do lado do servidor e geração de sites estáticos.',
		icon: SiNextdotjs,
	},
	{
		id: 3,
		name: 'TypeScript',
		description:
			'Superset de JavaScript com tipagem estática que previne erros em tempo de desenvolvimento.',
		icon: BiLogoTypescript,
	},
	{
		id: 4,
		name: 'Tailwind CSS',
		description:
			'Framework CSS para a criação rápida e flexível de designs customizados.',
		icon: SiTailwindcss,
	},
	{
		id: 5,
		name: 'Zustand',
		description:
			'Gerenciador de estado para React, pequeno e performático.',
		icon: GitBranch,
	},
	{
		id: 6,
		name: 'Zod',
		description:
			'Validação de esquemas para formulários e dados, garantindo a integridade da aplicação.',
		icon: SiZod,
	},
	{
		id: 7,
		name: 'React Query',
		description:
			'Biblioteca para gerenciamento de requisições de dados e estado do servidor no React.',
		icon: SiReactquery,
	},
	{
		id: 8,
		name: 'Shadcn UI',
		description:
			'Coleção de componentes UI reutilizáveis e acessíveis para projetos React.',
		icon: SiShadcnui,
	},
]
