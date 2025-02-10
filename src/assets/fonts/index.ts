/* eslint-disable camelcase */
import { Manrope, Bebas_Neue } from 'next/font/google'

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin']
})
