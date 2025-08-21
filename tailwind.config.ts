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
        cream: '#FAF7F2',
        'cream-dark': '#F5F0E8',
        brown: {
          900: '#2C1810',
          800: '#3D2317',
          700: '#4A2C1D',
          600: '#6B3E29',
          500: '#8B5A3C',
        },
        gold: {
          500: '#D4AF37',
          400: '#E6C547',
        }
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '20': '5rem',
        '28': '7rem',
      }
    },
  },
  plugins: [],
}
export default config