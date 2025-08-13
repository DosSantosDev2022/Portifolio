// app/hooks/useProjects.ts
"use client";

import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchHygraphQuery } from '@/app/api/hygraph/fetchHygraphQuery';
import type { ProjectData } from '@/@types/projects';

const PROJECTS_PER_PAGE = 6; // Defina quantos projetos carregar por vez

// A função que busca os dados
const fetchProjects = async ({ pageParam = 0 }): Promise<ProjectData['projects']> => {

   const query = `
    query ProjectsQuery($first: Int, $skip: Int) {
      projects(orderBy: createdAt_DESC, first: $first, skip: $skip) {
        id
        description
        title
        technologie { id, name, icon { url } }
        deployLink
        codeLink
        coverImage { url }
      }
    }
  `;

  const variables = {
    first: PROJECTS_PER_PAGE,
    skip: pageParam,
  };

  try {
    const data: ProjectData = await fetchHygraphQuery(query, variables);
    return data.projects;
  } catch (error) {
    console.error('ERRO AO BUSCAR DADOS DO HYGRAPH:', error); // <-- LOG DE ERRO
    throw new Error('Falha na busca de dados.'); // Lança o erro para o React Query capturar
  }
};


export function useProjects() {
  return useInfiniteQuery({
    queryKey: ['projects'], // Chave única para esta query
    queryFn: fetchProjects, // Função que busca os dados
    initialPageParam: 0, // Parâmetro inicial para a primeira página (skip = 0)
    getNextPageParam: (lastPage, allPages) => {
      // Se a última página retornou menos projetos que o limite, não há mais páginas
      if (lastPage.length < PROJECTS_PER_PAGE) {
        return undefined;
      }
      
      // O próximo 'pageParam' será o número total de projetos já carregados
      const nextPageParam = allPages.reduce((acc, page) => acc + page.length, 0);
      return nextPageParam;
    },
  });
}