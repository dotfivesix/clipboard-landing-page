/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html","index.css"],
  theme: {
    extend: {
      fontFamily: {
        "bai": "'Bai Jamjuree', sans-serif"
      },
      colors: {
        "strong-cyan": "hsl(171, 66%, 44%)",
        "light-blue": "hsl(233, 100%, 69%)",
        "dark-grayish-blue": "hsl(210, 10%, 33%)",
        "grayish-blue": "hsl(201, 11%, 66%)"
      }
    },
  },
  plugins: [],
}
