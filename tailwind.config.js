/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkNavy: "#020c1b",
        navy: "#0a192f",
        lightNavy: "#112240",
        lightestNavy: "#233554",
        navyShadow: "rgba(2,12,27,0.7)",
        darkSlate: "#495670",
        slate: "#8892b0",
        lightSlate: "#a8b2d1",
        lightestSlate: "#ccd6f6",
        white: "#e6f1ff",
        green: "#64ffda",
        greenTint: "rgba(100,255,218,0.1)",
        pink: "#f57dff",
        blue: "#57cbff",
      },
    fontFamily: {
        sans: ["var(--font-calibre)", "Inter", "San Francisco", "SF Pro Text", "-apple-system", "system-ui", "sans-serif"],
        mono: ["SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", "monospace"],
      },
      fontSize: {
        xxs: "12px",
        xs: "13px",
        sm: "14px",
        md: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "22px",
        heading: "32px",
      },
      borderRadius: {
        base: "4px",
      },
       transitionTimingFunction: {
        custom: "cubic-bezier(0.645,0.045,0.355,1)",
      },
    },
  },
  plugins: [],
};
