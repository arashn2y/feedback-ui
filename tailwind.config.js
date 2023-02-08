/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Itim': ['Itim', 'cursive'],
    },
    extend: {
      width: {
        '3/6': '50%',
      },
      borderRadius: {
        '50': '50%',
      },
      backgroundColor: {
        'dark-green': '#25A79D',
      },
      textColor: {
        'dark-green': '#25A79D',
      },
      height: {
        '80vh': '80vh',
        '10vh': '10vh',
      },
    },
  },
  plugins: [],
}
