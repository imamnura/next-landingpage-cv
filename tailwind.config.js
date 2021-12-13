const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans", "ui-sans-serif", "system-ui"],
        mono: ["IBM Plex Mono", "ui-monospace"]
      },
      colors: {
        yelllow: {
          "50": "#ff100109",
          "100": "#fffdf0",
          "200": "#fef8be",
          "300": "#fdf390",
          "400": "#fded5e",
          "500": "#fce72c",
          "600": "#e7d103",
          "700": "#ab9a02",
          "800": "#6f6402",
          "900": "#322d01"
        }
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        ".bg-hero": {
          "background-image": "url(/hero.png)",
          "background-size": "100%"
        }
      });
    })
  ],
}
