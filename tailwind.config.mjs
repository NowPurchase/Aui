/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ], // remove redundant utility classes
  theme: {
    colors: {
      red: {
        100: "#E43E2B",
        80: "#E43E2B80",
        60: "#E43E2B8060",
        40: "#E43E2B80",
        20: "#E43E2B8020",
        10: "#E43E2B8010",
      },
      blue: {
        100: "#1579BE",
        80: "#4494CB",
        60: "#73AFD8",
        40: "#A1C9E5",
        20: "#D0E4F2",
        10: "#E8F2F8",
      },
      green: {
        100: "#2BA24C",
        80: "#2BA24C80",
        60: "#2BA24C60",
        40: "#2BA24C40",
        20: "#2BA24C20",
        10: "#2BA24C10",
      },
      white: "#FFF",
      grey: "#AAAAAA",
    },
    extend: {
      borderRadius: {
        normal: "4px",
      },
    },
  },
  plugins: [],
};

export default config;
