/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#93c5fd', // blue-300
          DEFAULT: '#3b82f6', // blue-500
          dark: '#1e3a8a', // blue-900
        },
        accent: {
          light: '#7dd3fc', // sky-300
          DEFAULT: '#0ea5e9', // sky-500
          dark: '#0369a1', // sky-900
        },
        surface: {
          light: '#f1f5f9', // slate-100
          DEFAULT: '#e2e8f0', // slate-200
          dark: '#1e293b', // slate-800
        },
        info: {
          light: '#bae6fd', // light blue
          DEFAULT: '#38bdf8', // blue-400
          dark: '#0c4a6e', // blue-950
        },
      },
    },
  },
  plugins: [],
};
