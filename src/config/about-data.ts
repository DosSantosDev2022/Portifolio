// app/lib/about-data.ts

// --- TIPOS (TYPES) ---
// Definir tipos para os nossos dados ajuda a manter a consistência e evitar erros.
export type Skill = {
  name: string;
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
  title: "Quem sou eu?",
  paragraphs: [
    "Olá! Sou Juliano Santos, um Desenvolvedor FullStack com uma forte paixão por transformar ideias em realidade digital. A minha jornada na programação começou com a curiosidade de entender como as coisas funcionavam na web, e rapidamente se transformou numa carreira onde posso combinar lógica, criatividade e resolução de problemas.",
    "Acredito que a melhor tecnologia é aquela que serve as pessoas de forma intuitiva e eficiente. Por isso, dedico-me não apenas a escrever código limpo e escalável, mas também a compreender profundamente as necessidades do utilizador final para construir produtos que realmente façam a diferença.",
  ],
};

// --- DADOS DAS COMPETÊNCIAS (SKILLS) ---
export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Figma" },
      { name: "Zustand" },
      { name: "Tanstack Query" },
      { name: "ShadcnUI" },

    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js" },
      { name: "Route Handlers" },
      { name: "GraphQL" },
      { name: "REST APIs" },
      { name: "Supabase" },
    ],
  },
  {
    title: "Ferramentas & DevOps",
    skills: [
      { name: "Git & GitHub" },
      { name: "Docker" },
      { name: "Vercel" },
      { name: "PostgreSQL" },
      { name: "CI/CD" },
    ],
  },
];

// --- DADOS DO CALL TO ACTION (CTA) ---
export const cta = {
    title: "Vamos Construir Algo Incrível Juntos?",
    description: "Estou sempre aberto a novas oportunidades e colaborações. Se você tem uma ideia ou um projeto em mente, vamos conversar!",
};