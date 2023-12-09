/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ['"ryo-gothic-plusn"', "sans-serif"],
      accent: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        pink: "#ee9ca7",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    transitionTimingFunction: {
      "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
    },
  },
  plugins: [],
};
