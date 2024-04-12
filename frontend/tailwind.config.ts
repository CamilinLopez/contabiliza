import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // screens: {
    //   sm: "640px",
    //   md: "768px",
    //   lg: "1000px",
    //   xl: "1280px",
    //   "2xl": "1536px",
    //   "3xl": "1000px",
    // },
    extend: {
      fontFamily: {
        ember: ['"Amazon Ember"', "sans-serif"],
      },
      colors: {
        "custom-azul": {
          "1": "#232f3e",
          "2": "#333333",
          "3": "#0972d3",
        },
        "custom-naranja": "#ff9900",
        "custom-negro": "#000716",
        "custom-blanco": "#ffffff",
        "custom-gris": "#dddddd",
      },
      fontSize: {
        "custom-size1": "13px",
        "custom-size2": "14px",
        "custom-size3": "15px",
        "custom-size4": "16px",
        "custom-size5": "18px",
        "custom-size6": "20px",
        "custom-size7": "24px",
        "custom-size8": "38px",
      },
      fontWeight: {
        thin: "200",
        light: "300",
        regular: "400",
        medium: "500",
        bold: "700",
      },
    },
  },
  plugins: [],
};
export default config;
