import { BsTelegram } from 'react-icons/bs'
import { FaFile, FaInstagram, FaLinkedin, FaUser } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { SiCodeforces } from 'react-icons/si'

// Dados movidos para cá para manter o componente puro
export const navLinks = [
	{ id: 'link-01', href: '/', label: 'Início', icon: SiCodeforces },
	{ id: 'link-02', href: '/projects', label: 'Projetos', icon: FaFile },
	{ id: 'link-03', href: '/about', label: 'Sobre mim', icon: FaUser },
	{ id: 'link-04', href: '/contact', label: 'Contato', icon: MdEmail },
]

export const socialLinks = [
	{
		id: 'social-link-02',
		href: 'https://www.instagram.com/julianosantosdev/',
		label: 'Instagram',
		icon: FaInstagram,
	},
	{
		id: 'social-link-03',
		href: 'https://www.linkedin.com/in/dossantosdev',
		label: 'Linkedin',
		icon: FaLinkedin,
	},
	{
		id: 'social-link-04',
		href: 'https://t.me/DosSantosDev',
		label: 'Telegram',
		icon: BsTelegram,
	},
]
