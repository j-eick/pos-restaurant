/** @type {import('tailwindcss').Config} */

const { gray, red, slate, green } = require("tailwindcss/colors");

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
      keyframes: {
        bell_wiggle: {
          "0%, 100%": { transform: "rotate(-7deg) scale(120%)" },
          "50%": { transform: "rotate(7deg) scale(120%)" },
        },
        bell_wiggle_delayed: {
          "0%, 100%": { transform: "rotate(-7deg) scale(120%)" },
          "50%": { transform: "rotate(7deg) scale(120%)" },
        },
        bell_wiggle_140: {
          "0%, 100%": { transform: "rotate(-7deg) scale(140%)" },
          "50%": { transform: "rotate(7deg) scale(140%)" },
        },
        stretchDown: {
          from: { height: "0%" },
          to: { height: "40%" },
        },
        textAppearLeftToRight: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        slideDownUp: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(10px)" },
          "100%": { transform: "translateY(0px)" },
        },
        placeOrder50: {
          from: { width: "0" },
          to: { width: "50%" },
        },
        placeOrderFull: {
          from: { width: "50%" },
          to: { width: "100%" },
        },
        appear: {
          from: { opacity: 0.3 },
          to: { opacity: 1 },
        },
      },
      animation: {
        bellWiggle: "bell_wiggle .3s 5",
        bellWiggleFast: "bell_wiggle_140 .3s 6",
        slideDown: "stretchDown 1s 1 cubic-bezier(.47,1.64,.41,.8)",
        slideDownUp: "slideDownUp .25s 1",
        textReveal: "textAppearLeftToRight 3s 1 ease-in",
        placeOrder50: "placeOrder50 .5s 1 ease-out",
        placeOrder100: "placeOrderFull .5s 1 ease-out",
        appear: "appear .75s 1 ease-out",
      },
      height: {
        orderPlaced: "40%",
        orderPlaced_buttons: "20%",
      },
      colors: {
        //---Regular Fontcolors
        primary: gray[900],
        secondary: gray[700],
        tertiary: gray[400],
        light: "#abb1bc",

        //---App Colors
        "primary-color": slate[400],

        //---special Colors
        "custom-green": "#00AFB9",
        "custom-peach": "#FED9B7",
        "custom-peach-dark": "#FDBA74",
      },
      backgroundColor: {
        //---Button BackgroundColors
        // red: red[300],
        "red-hover": red[400],
        "app-primary": gray[400],
        "primary-gray": "#CBD5E0",
        "primary-lightgray": "#e4ecf4",
        peach: "#FED9B7",
        "peach-dark": "#FDBA74",
      },
      backgroundImage: {
        "app-bg": "red-200",
      },
      hideollbar: {
        "&::-webkit-scrollbar": {
          display: "none",
        },
      },
      boxShadow: {
        dishCard:
          "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px",
        dishCard_shallow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
        dishPhoto:
          "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        dishOrder: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        orderedItems: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        mainShadow:
          "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        // dishPhoto: "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        // dishOrder: " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        // dishOrder: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      borderRadius: {
        xs: ".75rem",
        sm: "1rem",
        md: "2.5rem",
        lg: "3.5rem",
        xl: "5rem",
        "2xl": "7.5rem",
        "3xl": "10rem",
        full: "9999px",

        //---SideMenu Border
        "2xl": "5rem",
      },
      borderWidth: {
        1: "1px",
      },
      backgroundImage: {},
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
      "4xl": "3rem",
      "5xl": "3.5rem",
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
    scale: {
      50: ".5",
      60: ".6",
      70: ".7",
      75: ".75",
      125: "1.25",
      130: "1.3",
      150: "1.5",
      175: "1.75",
      200: "2",
      225: "2.25",
      250: "2.5",
    },
    lineHeight: {
      4.5: "1.15rem",
    },
    screens: {
      xxs: "375px",
      xs: "565px",
      sm: "640px",
      md: "768px",
      lg: "820px",
      max: "844px",
    },
  },
  plugins: [],
};
