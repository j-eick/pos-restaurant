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
    fontSize: {
      xs: "0.75rem",
      sm: "0.875rem",
      regular: "1rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "1.75rem",
      "3xl": "2rem",
    },
    fontWeight: {
      thin: "100",
      verylight: "200",
      light: "300",
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      thick: "900",
    },
  },
  plugins: [],
};
