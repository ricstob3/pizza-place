/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      customRed: "#e6453c",
      customYellow: "#f4bf55",
      customBrown: "#682725",
      customOrange: "#f09f32",
    },
    extend: {
      fontFamily: {
        NunitoSans: ["Nunito Sans", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
