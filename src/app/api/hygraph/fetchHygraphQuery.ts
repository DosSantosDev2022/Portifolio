export const fetchHygraphQuery = async <T>(
  query: string,
  variables?: Record<string, number>,
): Promise<T> => {
  const response = await fetch(process.env.HYGRAPH_API_KEY!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    /*  next: {
      revalidate: 60 * 60 * 24,
    }, */
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const { data } = await response.json()

  return data
}
