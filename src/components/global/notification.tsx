'use client'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ImCheckboxChecked, ImCross } from 'react-icons/im'
interface NotificationProps {
	message: string
	type: 'success' | 'error'
	duration?: number // Tempo em milissegundos para a notificação desaparecer
	onClose: () => void // Função para fechar a notificação
}

const Notification = ({
	message,
	type,
	duration = 5000,
	onClose,
}: NotificationProps) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose()
		}, duration)

		return () => clearTimeout(timer)
	}, [duration, onClose])

	return (
		<motion.div
			layout
			initial={{ opacity: 0, y: 50, scale: 0.3 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.5 } }}
			className={`fixed right-4 bottom-4 rounded-md p-4 shadow-lg ${type === 'success' ? 'bg-success text-success-foreground' : 'bg-danger text-danger-foreground'} `}
		>
			<div className='flex w-full items-center justify-between gap-2'>
				<p className='text-base font-medium'>{message}</p>
				{type === 'success' ? (
					<ImCheckboxChecked className='text-success-foreground' />
				) : (
					<ImCross className='text-danger-foreground' />
				)}
			</div>
		</motion.div>
	)
}

export { Notification }
