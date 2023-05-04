/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        search_box : '#EFF0F5',
        search_btn : '#F57224',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

