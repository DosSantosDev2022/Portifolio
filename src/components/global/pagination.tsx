'use client'

import { usePagination } from '@/hooks/usePagination'
import { Button } from '@/components/global/uiChroma/button'
import Link from 'next/link'
import { ChevronsLeft, ChevronsRight } from 'lucide-react'

interface PaginationProps {
  page: number
  limit: number
  total: number
}

export function Pagination({ page, limit, total }: PaginationProps) {
  const { pages } = usePagination({
    page,
    limit,
    total,
  })

  const isFirstPage = page === 1
  const isLastPage = page === Math.ceil(total / limit)

  return (
    <div className="mt-8 flex w-full items-center justify-between p-2">
      <span className="flex w-full font-light text-light">
        Mostrando {Math.min(limit, total - (page - 1) * limit)} de {total}
      </span>

      <div className="flex items-center gap-2">
        <Button
          className={`flex h-10 w-10 items-center justify-center ${
            isFirstPage ? 'pointer-events-none opacity-50' : ''
          }`}
          variant="outline"
          asChild
        >
          <Link href={!isFirstPage ? `/Projects?page=1` : '#'} passHref>
            <ChevronsLeft />
          </Link>
        </Button>
        {pages.map((pageNumber) => (
          <Button
            variant="outline"
            asChild
            key={pageNumber}
            className={`flex h-10 w-10 items-center justify-center ${
              page === pageNumber ? 'pointer-events-none border opacity-50' : ''
            }`}
          >
            <Link
              href={page !== pageNumber ? `/Projects?page=${pageNumber}` : '#'}
            >
              {pageNumber}
            </Link>
          </Button>
        ))}

        <Button
          variant="outline"
          className={`flex h-10 w-10 items-center justify-center ${
            isLastPage ? 'pointer-events-none opacity-50' : ''
          }`}
          asChild
        >
          <Link
            href={!isLastPage ? `/Projects?page=${page + 1}` : '#'}
            passHref
          >
            <ChevronsRight />
          </Link>
        </Button>
      </div>
    </div>
  )
}
