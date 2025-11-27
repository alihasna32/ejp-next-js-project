/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        secondary: "#0EA5E9",
        accent: "#F59E0B",
        background: "#F8FAFC",
        textColor: "#0F172A",
        cardBg: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
