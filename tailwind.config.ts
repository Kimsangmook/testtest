import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        max: "1080px",
      },
      colors: {
        orange: "#ef7d00",
        gray: "#9c9c9c",
      },
      borderRadius: {
        sm: "8px",
        large: "26px",
        full: "35px",
      },
    },
  },
  plugins: [],
};
export default config;
