import type { LucideIcon } from 'lucide-react';

// Vamos definir um tipo para os nossos projetos para garantir consistência
export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
};

// Agora, a nossa lista de projetos
export const projectsData: Project[] = [
  {
    id: "1",
    title: "Plataforma de E-commerce Moderna",
    description: "Uma plataforma de e-commerce completa com foco em performance e experiência do utilizador, construída com Next.js e Stripe.",
    imageUrl: "https://bundui-images.netlify.app/projects/01.jpg",
    tags: ["Next.js", "React", "Stripe", "UI/UX"],
  },
  {
    id: "2",
    title: "Dashboard de Análise com IA",
    description: "Um painel de controlo que utiliza inteligência artificial para fornecer insights valiosos a partir de grandes volumes de dados.",
    imageUrl: "https://bundui-images.netlify.app/projects/02.jpg",
    tags: ["React", "IA", "Data Viz", "API"],
  },
  {
    id: "3",
    title: "Aplicação de Gestão de Tarefas",
    description: "Uma aplicação colaborativa para gestão de tarefas e projetos de equipa, com autenticação e atualizações em tempo real.",
    imageUrl: "https://bundui-images.netlify.app/projects/03.jpg",
    tags: ["React Native", "Mobile", "Firebase"],
  },
  {
    id: "4",
    title: "Website Institucional para Startup",
    description: "Desenvolvimento de um website moderno e responsivo para uma startup de tecnologia, com foco em SEO e conversão.",
    imageUrl: "https://bundui-images.netlify.app/projects/04.jpg",
    tags: ["Webflow", "SEO", "Design"],
  },
  {
    id: "5",
    title: "Sistema de Design para SaaS",
    description: "Criação de um sistema de design coeso e escalável para unificar a interface de um produto SaaS complexo.",
    imageUrl: "https://bundui-images.netlify.app/projects/05.jpg",
    tags: ["Design System", "Figma", "Storybook"],
  },
  {
    id: "6",
    title: "Blog Pessoal com Headless CMS",
    description: "Um blog rápido e dinâmico, integrado com um CMS headless para facilitar a gestão de conteúdo.",
    imageUrl: "https://bundui-images.netlify.app/projects/06.jpg",
    tags: ["Gatsby", "GraphQL", "Headless CMS"],
  }
];