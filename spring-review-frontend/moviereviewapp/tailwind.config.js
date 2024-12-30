const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Add your file paths
    "node_modules/flowbite-react/**/*.js", // Include flowbite-react components
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}