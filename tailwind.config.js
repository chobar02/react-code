/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'bgColor' : "#17171f",
        'textColor' : "#f9f4f4"
      },
    },
  },
  plugins: [],
}

