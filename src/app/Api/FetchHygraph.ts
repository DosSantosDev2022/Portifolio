export const fetchHygraphQuery = async (
  query: string,
  variables?: Record<string, any>,
) => {
  const response = await fetch(process.env.HYGRAPH_API_KEY || '', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query, variables }),
    cache: 'force-cache',
  })

  const { data } = await response.json()
  return data
}