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

export function Notification({
  message,
  type,
  duration = 5000,
  onClose,
}: NotificationProps) {
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
      className={`fixed bottom-4 rounded-md right-4 bg-gray-800 text-light p-4  shadow-lg
         ${type === 'success' ? 'bg-green-800 text-light' : 'bg-red-800 text-light'} `}
    >
      <div className="flex items-center justify-between gap-2 w-full">
        <p className="text-base font-medium text-light ">{message}</p>
        {type === 'success' ? (
          <ImCheckboxChecked className="text-green-300" />
        ) : (
          <ImCross className="text-red-300" />
        )}
      </div>
    </motion.div>
  )
}
