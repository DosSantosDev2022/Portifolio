import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { query, variables } = await req.json()

    const HYGRAPH_API_KEY = process.env.HYGRAPH_API_KEY

    if (!HYGRAPH_API_KEY) {
      throw new Error('Error connecting to Hygraph api')
    }

    const response = await fetch(HYGRAPH_API_KEY, {
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
        { error: 'Failed to fetch data from Hygraph' },
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
