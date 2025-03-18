import { bebas } from '@/assets/fonts'

const Logo = () => {
	return (
		<span
			className={`text-muted text-3xl leading-10 font-normal tracking-wider ${bebas.className}`}
		>
			DosSantosDev
		</span>
	)
}

export { Logo }
