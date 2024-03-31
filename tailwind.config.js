/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'content': '1fr,20rem',
      }
    },
  },
  plugins: [],
}

