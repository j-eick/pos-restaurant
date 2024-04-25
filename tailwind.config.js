/** @type {import('tailwindcss').Config} */

const { gray, red } = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        //---Regular Fontcolors
        primary: gray[900],
        secondary: gray[700],
        tertiary: gray[400],
      },
      backgroundColor: {
        //---Button BackgroundColors
        red: red[300],
        "red-hover": red[400],
      },
    },
    variants: {
      extend: {
        scale: ["hover"],
      },
    },
  },
  plugins: [],
};
