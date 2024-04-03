import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'
import { Button } from './button'
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
    <div className="flex w-full justify-between">
      <span className="font-light text-light">Mostrando 2 de {totalItens}</span>
      <div className="flex items-center gap-4">
        <span className="font-light text-light">
          Páginas {page} de {Math.ceil(page)}
        </span>

        <div className="flex gap-2">
          <Button asChild variant="outline" disabled={isFirstPage}>
            {!isFirstPage ? (
              <Link href={`/Projects?page=${page - 1}&limit=${limit}`}>
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
              <Link href={`/Projects?page=${page + 1}&limit=${limit}`}>
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
