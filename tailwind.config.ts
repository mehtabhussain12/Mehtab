import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
     
      boxShadow: {
        custom: "-3px -3px 2px rgba(255, 255, 255, 0.3), 5px 5px 5px rgba(0, 0, 0, 0.2), 15px 15px 15px rgba(0, 0, 0, 0.2)",
        
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
