/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A2E',
        secondary: '#6B6FA2',
        tertiary: '#00A2FF',
        neutral: '#E6F4FF',
        surface: '#FFFFFF',
        onprimary: '#FFFFFF',
      },
      fontFamily: {
        display: ['Fredoka', 'sans-serif'],
        body: ['Fredoka', 'sans-serif'],
      },
      borderRadius: {
        sm: '10px',
        md: '18px',
        lg: '30px',
      },
      boxShadow: {
        chunky: '0 6px 0 rgba(26,26,46,0.9)',
        'chunky-sm': '0 4px 0 rgba(26,26,46,0.9)',
        glow: '0 0 24px rgba(0,162,255,0.55)',
        'glow-lg': '0 0 40px rgba(0,162,255,0.45)',
      },
    },
  },
  plugins: [],
}
