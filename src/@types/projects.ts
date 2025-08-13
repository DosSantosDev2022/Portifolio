// Este tipo representa objetos que contêm uma URL, como ícones e imagens de capa.
export type Asset = {
  url: string;
};

// Este tipo representa uma tecnologia usada num projeto.
export type Technology = {
  id: string;
  name: string;
  icon: Asset;
};

// Esta é a interface principal para um único projeto.
export type Project = {
  id: string;
  description: string;
  title: string;
  technologie: Technology[];
  deployLink: string;
  codeLink: string;
  coverImage: Asset;
};

// Esta interface representa o objeto 'data' que contém a lista de projetos.
export type ProjectData = {
  projects: Project[];
};