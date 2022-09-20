module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        display: ["Abril Fatface"],
        body: ["Mulish"],
        button: ["Nunito Sans"],
      },
      colors: {
        lavender: "#eaecf9",
      },
    },
  },
  plugins: [],
};
