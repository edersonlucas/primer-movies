/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "primary": "#726BEA",
      "secondary": "#8D88ED",
      "white": "#FFFFFF",
      "gray": "#AFAEAA"
    },
    extend: {},
  },
  plugins: [],
}
