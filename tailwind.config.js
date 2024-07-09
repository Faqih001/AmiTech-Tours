/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#63Ab45",
        orange: "#F7921E",
      },
      boxShadow: {
        "x1": "0px 10px 60px 0px rgba(0, 0, 0, 0.15)",
      }
    },
  },
  plugins: [],
}

