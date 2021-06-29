module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#f5f5f5",
        dark: "#2a2a2a",
        ash: "#a6abb2",
        lightAsh: "#ebebeb",
        green: "#2c665d",
        lightGreen: "#3D8F83",
      },
    },
    fontFamily: {
      Space: ["Space+Grotesk", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
