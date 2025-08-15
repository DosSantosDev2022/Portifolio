import { FaFile, FaHome, FaInstagram, FaLinkedin, FaTwitter, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// Dados movidos para cá para manter o componente puro
export const navLinks = [
  { id: "link-01" , href: "/", label: "Homepage", icon: FaHome },
  {  id: "link-02" , href: "/projects", label: "Projects", icon: FaFile },
  {  id: "link-03" , href: "/about", label: "Sobre mim", icon: FaUser },
  {  id: "link-04" , href: "/contact", label: "Contato", icon: MdEmail },
];

export const socialLinks = [
  {  id: "social-link-01" , href: "https://x.com/DosSantosDev?t=fkUO6D9V_sX9JUbOExmbgw&s=09", label: "Twitter", icon: FaTwitter },
  {  id: "social-link-02" , href: "https://www.instagram.com/julianosantosdev/", label: "Instagram", icon: FaInstagram },
  {  id: "social-link-03" , href: "https://www.linkedin.com/in/dossantosdev", label: "Linkedin", icon: FaLinkedin },
];