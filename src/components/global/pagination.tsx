'use client'

import { usePagination } from '@/hooks/pagination/usePagination'
import { Button } from '../ui'
import Link from 'next/link'
import { ChevronsLeft, ChevronsRight } from 'lucide-react'

interface PaginationProps {
	page: number
	limit: number
	total: number
}

const Pagination = ({ page, limit, total }: PaginationProps) => {
	const { pages } = usePagination({
		page,
		limit,
		total,
	})

	const isFirstPage = page === 1
	const isLastPage = page === Math.ceil(total / limit)

	return (
		<div className='mt-8 flex w-full items-center justify-between p-2'>
			<span className='text-muted flex w-full font-light'>
				Mostrando {Math.min(limit, total - (page - 1) * limit)} de {total}
			</span>

			<div className='flex items-center gap-2'>
				<Button
					className={` ${isFirstPage ? 'pointer-events-none opacity-50' : ''}`}
					sizes='icon'
					variants='primary'
					asChild
				>
					<Link
						href={!isFirstPage ? '/projects?page=1' : '#'}
						passHref
						aria-label='Primeira página'
					>
						<ChevronsLeft />
					</Link>
				</Button>
				{pages.map((pageNumber) => (
					<Button
						variants='primary'
						asChild
						sizes='icon'
						key={pageNumber}
						className={`${
							page === pageNumber ? 'pointer-events-none opacity-50' : ''
						}`}
					>
						<Link
							href={
								page !== pageNumber ? `/projects?page=${pageNumber}` : '#'
							}
							aria-label={`Página ${pageNumber}`}
						>
							{pageNumber}
						</Link>
					</Button>
				))}

				<Button
					variants='primary'
					sizes='icon'
					className={`${isLastPage ? 'pointer-events-none opacity-50' : ''}`}
					asChild
				>
					<Link
						href={!isLastPage ? `/projects?page=${page + 1}` : '#'}
						passHref
						aria-label='Última página'
					>
						<ChevronsRight />
					</Link>
				</Button>
			</div>
		</div>
	)
}

export { Pagination }
