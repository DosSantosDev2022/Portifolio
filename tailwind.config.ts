import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#09090b',
        primary_hover: '#18181b',
        secundary: '#27272a',
        secundary_hover: '#3f3f46',
        highlights: '#5b21b6',
        highlights_hover: '#6d28d9',
        light: '#fafafa',
        lightSilver: '#d4d4d8',
        border: '#1A1A1A',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
export default config
