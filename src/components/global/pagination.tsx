import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { Button } from '@/components/global/uiChroma/button'
import Link from 'next/link'

interface PaginationProps {
  limit: number
  page: number
  totalItens: number
}

export function Pagination({ limit, page, totalItens }: PaginationProps) {
  const isFirstPage = page === 1
  const isLastPage = page === Math.ceil(totalItens / limit)
  return (
    <div className="flex w-full flex-col justify-between gap-2  p-2 lg:flex-row">
      <span className="flex  items-center  p-2 font-light ">
        Mostrando {Math.min(limit, totalItens - (page - 1) * limit)} de{' '}
        {totalItens}
      </span>
      <div className="flex items-center justify-between gap-4   p-2">
        <span className="w-full font-light ">
          Página {page} de {Math.ceil(totalItens / limit)}
        </span>

        <div className="flex w-full gap-2">
          <Button asChild variant="outline" disabled={isFirstPage}>
            {!isFirstPage ? (
              <Link href={`/Projects?page=1&limit=${limit}&limit=${limit}`}>
                <ChevronsLeft />
              </Link>
            ) : (
              <Button variant="disabled">
                {' '}
                <ChevronsLeft />
              </Button>
            )}
          </Button>
          <Button asChild variant="outline" disabled={isFirstPage}>
            {!isFirstPage ? (
              <Link href={`/Projects?page=${page - 1}&limit=${limit}`}>
                <ChevronLeft />
              </Link>
            ) : (
              <Button variant="disabled">
                {' '}
                <ChevronLeft />
              </Button>
            )}
          </Button>
          <Button asChild variant="outline" disabled={isLastPage}>
            {!isLastPage ? (
              <Link href={`/Projects?page=${page + 1}&limit=${limit}`}>
                <ChevronRight />
              </Link>
            ) : (
              <Button variant="disabled">
                {' '}
                <ChevronRight />
              </Button>
            )}
          </Button>
          <Button asChild variant="outline" disabled={isLastPage}>
            {!isLastPage ? (
              <Link
                href={`/Projects?page=${Math.ceil(totalItens / limit)}&limit=${limit}`}
              >
                <ChevronsRight />
              </Link>
            ) : (
              <Button variant="disabled">
                {' '}
                <ChevronsRight />
              </Button>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}
