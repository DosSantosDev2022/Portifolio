import { FaHome, FaUser } from 'react-icons/fa'
import { GoProjectSymlink } from 'react-icons/go'
import { MdContacts } from 'react-icons/md'

export const NavLinks = [
  {
    name: 'Home',
    url: '/',
    icon: FaHome
  },
  {
    name: 'Sobre mim',
    url: '/About',
    icon: FaUser
  },
  {
    name: 'Projetos',
    url: '/Projects',
    icon: GoProjectSymlink
  },
  {
    name: 'Contato',
    url: '/Contact',
    icon: MdContacts
  }
]
