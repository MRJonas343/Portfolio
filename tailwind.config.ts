import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'purple': {
          '50': '#faf5ff',
          '100': '#f3e8ff',
          '200': '#e9d5ff',
          '300': '#d8b4fe',
          '400': '#c084fc',
          '500': '#a855f7',
          '600': '#9333ea',
          '700': '#7e22ce',
          '800': '#6b21a8',
          '900': '#581c87',
          '950': '#3b0764',
        },
        'dark-blue': '#2a2753'
      },
      fontFamily: {
        bebas: ['var(--font-bebas-neue)'],
        oswald: ['var(--font-oswald)'],
      }
    },
  },
  plugins: [],
};
export default config;
