/**
 * Função genérica e tipada para fazer requisições à API do Hygraph.
 * @param query A sua query GraphQL em formato de string.
 * @param variables Um objeto com as variáveis para a sua query (opcional).
 * @returns Uma promessa que resolve para os dados tipados (T).
 */
export const fetchHygraphQuery = async <T>(
  query: string,
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  variables: Record<string, any> = {}
): Promise<T> => {
  const url = process.env.NEXT_PUBLIC_HYGRAPH_URL;

  if (!url) {
    throw new Error('A variável de ambiente HYGRAPH_URL não está definida.');
  }

  const headers = {
    'Content-Type': 'application/json',
  };

  const response = await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify({ query, variables }),
    next: {
      revalidate: 60 * 60 * 24, // 24 horas de cache
    },
  });

  // Tipamos a resposta esperada do GraphQL
  const responseData: { data: T } = await response.json();
   
  // Retornamos apenas o objeto 'data', que contém o que realmente nos interessa.
  return responseData.data;
};