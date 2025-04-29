/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Para App Router dentro de "src"
    "./src/components/**/*.{js,ts,jsx,tsx}", // Para los componentes dentro de "src"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
