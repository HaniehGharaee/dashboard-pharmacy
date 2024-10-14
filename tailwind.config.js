module.exports = {
  important: true,
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "",
      },
      fontFamily: {
        yekanBakhRegular: ["YekanBakh-Regular", "sans-serif"],
        yekanBakhMedium: ["YekanBakh-Medium", "sans-serif"],
        yekanBakhBold: ["YekanBakh-Bold", "sans-serif"],
      },
      screens: {
        "2xs": "300px",
        xs: "500px",
        "3xs": "576px",
        sm: "640px",
        "2sm": { max: "576px" },
        "3sm": { min: "576px", max: "768px" },
        md: "768px",
        "2md": { max: "768px" },
        "3md": { min: "768px", max: "992px" },
        lg: "992px",
        "2lg": { min: "992px", max: "1200px" },
        "3lg": { max: "992px" },
        xl: "1280px",
        "1xl": "1200px",
        "3xl": { max: "1200px" },
        "2xl": "1536px",
      },
    },

    // backgroundImage: {
    //   MainSection: "url('./app/assets/images/main-banner.png')",
    //   CategoryCard: "url('./app/assets/images/icon-background.png')",
    //   "primary-gradient": "linear-gradient(90deg, #1c73d4 0%, #419cff 100%)",
    //   "danger-gradient": "linear-gradient(90deg, #ff0056 0%, #ff4785 100%)",
    // },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
