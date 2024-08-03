import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#aa8ffd',
        secondary: '#8f77fb',
        accent: '#735ffa',
        fontPrimary: '#ffffff',
        'custom-green': '#2d6a4f',
        'custom-blue': 'rgb(50, 115, 220)',
        'custom-red': 'rgba(200, 50, 50, 0.8)',
      },
    },
  },
  plugins: [],
};

export default config;
