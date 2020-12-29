module.exports = (isProd) => ({
  prefix: "",
  purge: {
    enabled: isProd,
    content: ["**/*.html", "**/*.ts"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        radial: "inset 0 0 100px black",
        glass: "0 0 1rem 0 rgba(0, 0, 0, .2)",
      },
      height: {
        112: "30rem",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover"],
      padding: ["hover"],
    },
  },
  plugins: [],
});
