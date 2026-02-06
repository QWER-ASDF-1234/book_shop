import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  corePlugins: {
    preflight: false, // reset.css만 리셋으로 쓰고 싶다면 유지
  },
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
