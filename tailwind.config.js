/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui'],
        serif: ['"Merriweather"', 'serif'],
        mono: ['"Fira Code"', 'monospace'],
        magiestra: ['Magiestra', 'sans-serif'],
        south: ['south', 'cursive'],
      },
    },
  },
  plugins: [],
}

