module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "10%": "10%",
      "20%": "20%",
      "30%": "30%",
      "40%": "40%",
      "50%": "50%",
      "70%": "70%",
      "80%": "80%",
      "90%": "90%",
      "100%": "100%",
      "110%": "110%",
      "120%": "120%",
      "150%": "150%",
      "200%": "200%",
      8: "10rem",
      16: "40rem",
    },
    extend: {
      fontFamily: {
        primary: ["Barlow"],
        secondary: ["Monument Extended"],
      },
      backgroundImage: {
        bgFiller: "url('/assets/filler.png')",
        colorFiller:
          "linear-gradient(180deg, #8518BF -16.01%, #551278 118.9%);",
      },
      colors: {
        "btn-primary": "#CAFB5B",
        "btn-hover": "#FFE084",
        "scroll-div": "#171717",
      },
      screens: {
        xs: "360px",
      },
      margin: {
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "5/6": "83.333333%",
        "1/7": "14.285714%",
        "1/10": "10%",
      },
      boxShadow: {
        scroll: "0px 8px 16px rgba(0, 0, 0, 0.12)",
      },
    },
    plugins: [],
  },
};
