import { createPreset } from "fumadocs-ui/tailwind-plugin";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./node_modules/fumadocs-ui/dist/**/*.js",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  presets: [createPreset({ preset: "default", addGlobalColors: true })],
};
