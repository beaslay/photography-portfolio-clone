import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      fontFamily: {
        serif: ["\"Playfair Display\"", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [animate],
};
export default config;
