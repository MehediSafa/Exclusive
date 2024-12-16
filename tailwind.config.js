/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js", // Add Flowbite's content paths
  ],
  theme: {
    extend: {
      fontFamily:{
        pops:["Poppins",'sans-serif'],
        inter:['Inter' , 'sans-serif']
      },
    },
  },
  plugins: [
    require('flowbite/plugin'), // Use Flowbite's Tailwind plugin
  ],
};
