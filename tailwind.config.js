/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../src/assets/images/home.png')",
        'down-bg': "url('../src/assets/images/down-bg.png')",
        'dot-bg': "url('../src/assets/images/dot-bg.png')",
        'footer-bg': "url('../src/assets/images/footer-bg.png')",
        'gradient-blue': "linear-gradient(270deg, rgba(0,120,210,0) 0%, #0078d2 100%)",
        'cloud-bg': "url('../src/assets/images/badges-gray.png')",
      },
      spacing: {
        '15': '15px',
        '30': '30px',
        '70': '70px',
        '800': '800px',
      },
      boxShadow: {
        '3xl': '0 0 11.5px rgba(0,0,0,0.1)',
      },
      backgroundPosition: {
        'position-1': "-241px 0"
      }
    },
  },
  plugins: [],
}

