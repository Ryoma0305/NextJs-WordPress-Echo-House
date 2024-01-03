/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ['"Noto_Sans_JP"', "sans-serif"],
      accent: ["Montserrat", "sans-serif"]
    },
    extend: {
      colors: {
        pink: "#ee9ca7",
        green: "#93F9B9",
        white: {
          100: "#FFFFFF",
          200: "#FFFEF7"
        },
        gray: {
          100: "#707070",
          200: "#F8F8F8"
        }
      },
      backgroundImage: {
        "contact-btn": "linear-gradient(to right, #ffdde1, #ee9ca7)",
        "about-bg": "linear-gradient(90deg, #fff 5%, rgba(255, 255, 255, 0.6))"
      }
    },
    transitionTimingFunction: {
      "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)"
    }
  },
  plugins: []
};
