'use client'
import { motion, useAnimation } from 'framer-motion'
import { type ReactNode, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

interface ScrollAnimationProps {
	children: ReactNode
	className?: string
}

const ScrollAnimation = ({
	children,
	className,
}: ScrollAnimationProps) => {
	const controls = useAnimation()
	const [ref, inView] = useInView({ threshold: 0.1 })

	useEffect(() => {
		if (inView) {
			controls.start('visible')
		} else {
			controls.start('hidden')
		}
	}, [controls, inView])

	return (
		<motion.div
			ref={ref}
			className={className}
			initial='hidden'
			animate={controls}
			variants={{
				visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
				hidden: { opacity: 0, y: 20 },
			}}
		>
			{children}
		</motion.div>
	)
}

export { ScrollAnimation }
