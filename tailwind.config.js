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
        "contact-btn": "linear-gradient(to right, #ffdde1, #ee9ca7)",
      },
    },
    transitionTimingFunction: {
      "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
    },
  },
  plugins: [],
};
