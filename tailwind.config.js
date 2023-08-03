/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
      themes: [
        {
          mytheme: {
          
 "primary": "#e0a42c",
          
 "secondary": "#f7a285",
          
 "accent": "#e5f774",
          
 "neutral": "#38213b",
          
 "base-100": "#2b323b",
          
 "info": "#8397d8",
          
 "success": "#44e4d1",
          
 "warning": "#efc42a",
          
 "error": "#fc2f2c",
          },
        },
      ],
    },
    plugins: [require("daisyui")],
}

