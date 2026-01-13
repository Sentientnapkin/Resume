/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#5b7c99',
        'accent-light': '#7a99b3',
        'accent-dark': '#3d5266',
        'bg-primary': '#000000',
        'bg-secondary': '#0d0d0d',
        'bg-tertiary': '#1a1a1a',
        'border': '#4a4a4a',
        'text-primary': '#f5f5f5',
        'text-secondary': '#a3a3a3',
        'text-tertiary': '#4a4a4a',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'slide-up': 'slideUp 0.3s ease-out',
        'fade-in': 'fadeIn 0.4s ease-out',
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

