/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,jsx,ts,tsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        'custom-teal': '#1abc9c',
        'custom-dark-blue': '#2c3e50',
        'custom-green': '#1abc9c',
      },
    },
  },
  plugins: [],
}

