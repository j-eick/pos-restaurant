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

        //---dishCard-background
      },
      hideScrollbar: {
        "&::-webkit-scrollbar": {
          display: "none",
        },
      },
      boxShadow: {
        dishCard:
          "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
        dishPhoto:
          "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        // dishPhoto: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        // dishOrder: " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        // dishOrder: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        dishOrder: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
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
