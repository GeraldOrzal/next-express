/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    /* 
      60 30 10 rule
    */
    extend: {
      primary:"",
      accent:"",
      complementary:""
    },
  },
  plugins: [],
}
