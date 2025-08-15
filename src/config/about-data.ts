// app/lib/about-data.ts

import { FaDocker, FaGitAlt, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import type { IconType } from "react-icons/lib";
import { TbBrandGraphql } from "react-icons/tb";
import { IoLogoVercel } from "react-icons/io5";

import { SiNextdotjs, SiReactquery } from "react-icons/si";
import { BiLogoFigma, BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { GiKoala } from "react-icons/gi";
import { SiShadcnui } from "react-icons/si";
import { MdOutlineDeviceHub } from "react-icons/md";





// --- TIPOS (TYPES) ---
// Definir tipos para os nossos dados ajuda a manter a consistência e evitar erros.
export type Skill = {
  name: string;
  icon?: IconType
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

// --- DADOS DO CABEÇALHO DA PÁGINA ---
export const pageHeader = {
  badge: "Sobre Mim",
  title: "Apaixonado por Criar Soluções Digitais",
  description: "De linhas de código a experiências de utilizador memoráveis, esta é um pouco da minha história e do que me move.",
};

// --- DADOS DA BIOGRAFIA ---
export const biography = {
  imageUrl: "/images/profile.png",
  title: "Olá! Eu sou Juliano Santos",
  paragraphs: [
    "Desenvolvedor FullStack com uma forte paixão por transformar ideias em realidade digital. A minha jornada na programação começou com a curiosidade de entender como as coisas funcionavam na web, e rapidamente se transformou numa carreira onde posso combinar lógica, criatividade e resolução de problemas.",
    "Acredito que a melhor tecnologia é aquela que serve as pessoas de forma intuitiva e eficiente. Por isso, dedico-me não apenas a escrever código limpo e escalável, mas também a compreender profundamente as necessidades do utilizador final para construir produtos que realmente façam a diferença.",
  ],
};

// --- DADOS DAS COMPETÊNCIAS (SKILLS) ---
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: BiLogoTypescript },
      { name: "Tailwind CSS", icon: RiTailwindCssFill },
      { name: "Figma", icon: BiLogoFigma  },
      { name: "Zustand", icon: GiKoala },
      { name: "Tanstack Query", icon: SiReactquery },
      { name: "ShadcnUI", icon: SiShadcnui },

    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "GraphQL", icon: TbBrandGraphql },
      { name: "REST APIs", icon: MdOutlineDeviceHub },
      { name: "Supabase", icon:RiSupabaseFill },
    ],
  },
  {
    title: "Ferramentas & DevOps",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon:FaGithub },
      { name: "Docker", icon: FaDocker },
      { name: "Vercel", icon:IoLogoVercel },
      { name: "PostgreSQL", icon:BiLogoPostgresql },
    ],
  },
];

// --- DADOS DO CALL TO ACTION (CTA) ---
export const cta = {
    title: "Vamos Construir Algo Incrível Juntos?",
    description: "Estou sempre aberto a novas oportunidades e colaborações. Se você tem uma ideia ou um projeto em mente, vamos conversar!",
};