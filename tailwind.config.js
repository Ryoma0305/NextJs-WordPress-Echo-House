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
          200: "#F8F8F8",
          300: "#F6F6F6"
        }
      },
      backgroundImage: {
        "gradient-pink": "linear-gradient(to right, #ffdde1, #ee9ca7)",
        "gradient-green": "linear-gradient(-225deg, #B7F8DB 0%, #50A7C2 100%)",
        "about-bg": "linear-gradient(90deg, #fff 5%, rgba(255, 255, 255, 0.6))"
      },
      animation: {
        "fade-in-bottom": "fade-in-bottom 0.6s ease-out both",
        jump: "jump 2s infinite"
      },
      keyframes: {
        "fade-in-bottom": {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0"
          },
          to: {
            transform: "translateY(0)",
            opacity: "1"
          }
        },
        jump: {
          "0%": {
            transform: "rotate(-45deg) translate(0, 0)"
          },
          "20%": {
            transform: "rotate(-45deg) translate(-10px, 10px)"
          },
          "40%": {
            transform: "rotate(-45deg) translate(0, 0)"
          }
        }
      }
    },
    transitionTimingFunction: {
      "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)"
    }
  },
  plugins: []
};
