import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        bgshadow: "0px 0px 30px 0px #5C3C7D",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      /*{
        mytheme: {
          primary: "#8A48CE",
          secondary: "#7A3BBD", // darker shade of primary
          accent: "#964BCC", // lighter shade of primary with a slight blue undertone
          neutral: "#5C3C7D", // deep purple shade for neutral
          "base-100": "transparent", // light pastel shade for base-100
        },
      },*/
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
};
