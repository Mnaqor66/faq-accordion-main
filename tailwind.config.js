/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    colors: {
      'White': '#ffffff',
      'LightPink': '#f9f0ff',
      'GrayishPurple': '#8c6991',
      'LightPurple': '#ad28eb',
      'DarkPurple': '#2f1533'
    },
    fontFamily: {
      'WorkSans': '"Work Sans"'
    }
  },
  plugins: [],
}

