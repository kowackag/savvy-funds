import type { Config } from "tailwindcss";

export const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx,css,scss}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx,css,scss}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css,scss}",
    "./src/**/*.{js,ts,jsx,tsx,mdx,css,scss}",
  ],
  theme: {
    fontSize: {
      "display-1": ["80px", { lineHeight: "1.2", fontWeight: "600" }],
      "display-2": ["72px", { lineHeight: "1.2", fontWeight: "600" }],
      "display-3": ["64px", { lineHeight: "1.2", fontWeight: "600" }],
      "display-4": ["56px", { lineHeight: "1.2", fontWeight: "600" }],
      "headline-1": ["48px", { lineHeight: "1.2", fontWeight: "600" }],
      "headline-2": ["40px", { lineHeight: "1.2", fontWeight: "600" }],
      "headline-3": ["32px", { lineHeight: "1.2", fontWeight: "600" }],
      "headline-4": ["24px", { lineHeight: "1.3", fontWeight: "600" }],
      "headline-5": ["20px", { lineHeight: "1.3", fontWeight: "600" }],
      "headline-6": ["16px", { lineHeight: "1.3", fontWeight: "600" }],
      lead: ["24px", "1.5"],
      xl: ["20px", "1.5"],
      l: ["18px", "1.5"],
      m: ["16px", "1.5"],
      s: ["14px", "1.5"],
      xs: ["12px", "1.5"],
    },
    colors: {
      primary: "#20B757",
      secondary01: "#4371E9",
      secondary02: "#FF6161",
      secondary03: "#FFC861",
      neutral00: "#ffffff",
      neutral10: "#FAFAFB",
      neutral20: "#F5F6F7",
      neutral30: "#EBECEF",
      neutral40: "#DFE0E4",
      neutral50: "#C1C4CC",
      neutral60: "#B2B6BF",
      neutral70: "#A6AAB5",
      neutral80: "#979CA8",
      neutral90: "#888E9C",
      neutral100: "#798090",
      neutral200: "#6A7283",
      neutral300: "#5B6477",
      neutral400: "#4F586D",
      neutral500: "#404A60",
      neutral600: "#343E56",
      neutral700: "#222E48",
      neutral800: "#13203B",
      neutral900: "#0B1323",
      white: "#FFFFFF",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  /* eslint @typescript-eslint/no-require-imports: "off" */
  plugins: [require("@tailwindcss/typography")],
};
export default config;
