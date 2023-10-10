/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: " hsl(210, 10%, 33%)",
        greyishBlue: "hsl(201, 11%, 66%)",
      },
      screens: {
        sm: { max: "640px" },
      },
    },
  },
  plugins: [],
};
