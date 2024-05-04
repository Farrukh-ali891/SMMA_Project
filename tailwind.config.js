/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary_dark: '#01126c',
        primary: '#021892',
        secondary: '#0870ed',
        secondary_light: '#67abff',
      },
      fontFamily:{
        body_font: 'Open Sans, sans-serif',
        title_font: 'Montserrat, sans-serif'
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'},
        },
        borderLine:{
          '10%': {borderBottom: '1px solid white' , borderBottomWidth: '20%'},
          '100%': {borderBottom: '1px solid white' , borderBottomWidth: '100%'},
        }
      },
      animation:{
        textReveal: 'fadeIn 3s 1s infinite',
        borderBotLine: 'borderLine 0.3s',
      }
    },
  },
  plugins: [],
}