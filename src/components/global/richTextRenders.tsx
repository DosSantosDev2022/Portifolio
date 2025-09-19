import type { ReactNode } from 'react'

interface defaultRendersProps {
	children: ReactNode
}
interface defaultRendersLinkProps {
	href?: string
	children: ReactNode
}
interface ImageRenderProps {
	src?: string
	altText?: string
	width?: number
	height?: number
}

const defaultRenders = {
	h1: ({ children }: defaultRendersProps) => (
		<h1 className='text-foreground font-bold text-4xl'>{children}</h1>
	),
	h2: ({ children }: defaultRendersProps) => (
		<h2 className='text-foreground font-bold text-2xl'>{children}</h2>
	),
	h3: ({ children }: defaultRendersProps) => (
		<h3 className='text-foreground font-bold text-xl'>{children}</h3>
	),
	h4: ({ children }: defaultRendersProps) => (
		<h4 className='text-foreground font-bold text-lg'>{children}</h4>
	),
	bold: ({ children }: defaultRendersProps) => (
		<b className='text-primary dark:text-accent-foreground font-bold'>
			{children}{' '}
		</b>
	),
	p: ({ children }: defaultRendersProps) => (
		<p className='font-light text-base lg:text-lg mt-4'>{children}</p>
	),
	a: ({ children, href }: defaultRendersLinkProps) => (
		<a
			href={href}
			className='text-blue-400 cursor-pointer hover:underline'
		>
			{children}
		</a>
	),
	code_block: ({ children }: defaultRendersProps) => (
		<pre className='bg-primary text-muted p-4 rounded-md overflow-x-auto w-full custom-scrollbar'>
			<code>{children}</code>
		</pre>
	),
	ul: ({ children }: defaultRendersProps) => (
		<ul className=' p-2'>{children}</ul>
	),
	li: ({ children }: defaultRendersProps) => (
		<li className='mb-2 text-start font-light text-foreground text-sm lg:text-base'>
			{children}
		</li>
	),
	img: ({ src, altText, width, height }: ImageRenderProps) => (
		<div className='my-6 flex justify-center'>
			<img
				src={src}
				alt={altText ?? ''}
				width={width}
				height={height}
				className='rounded-lg shadow-lg max-w-full object-contain'
			/>
		</div>
	),
}

export { defaultRenders }
