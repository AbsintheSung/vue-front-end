/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    /*自訂斷點，蓋過官方預設值 */
    screens: {
      ssm: '375px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1320px'
    },
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        ssm: '100%',
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '1320px'
      }
    },
    extend: {
      fontFamily: {
        yeseva: ['"Yeseva One"', 'sans-serif'],
        noto: ['"Noto Serif TC"', 'serif']
      },
      backgroundColor: {
        'custom-bg-1': '#F3F1E5',
      },
      color: {}
    }
  },
  plugins: []
}
