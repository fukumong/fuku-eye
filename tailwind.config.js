module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight: (theme) => theme("spacing"),
      minWidth: (theme) => theme("spacing"),
      maxHeight: (theme) => theme("spacing"),
      maxWidth: (theme) => theme("spacing"),
    },
  },
  plugins: [],
};
