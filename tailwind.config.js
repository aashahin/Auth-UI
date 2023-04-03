/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Background
        gray: {
          900: '#1D1F21',
        },
        orange: {
            500: '#C1550B',
        }
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
};
