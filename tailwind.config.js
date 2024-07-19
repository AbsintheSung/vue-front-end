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
      xl: '1200px',
      xxl: '1400px'
    },
    extend: {}
  },
  plugins: []
}
