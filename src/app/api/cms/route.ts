import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { query, variables } = await req.json()

    const HYGRAPH_API_URL = process.env.HYGRAPH_API_URL

    if (!HYGRAPH_API_URL) {
      throw new Error('HYGRAPH_API_URL is not defined in environment variables')
    }

    const response = await fetch(HYGRAPH_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query, variables }),
      cache: 'no-cache',
    })

    if (!response.ok) {
      return NextResponse.json(
        {
          error: `Failed to fetch data from Hygraph, status: ${response.status}`,
        },
        { status: response.status },
      )
    }

    const { data } = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error fetching data from Hygraph:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    )
  }
}
